console.log('Welcome to the Community Portal');

window.addEventListener('load', function () {
  alert('Community Portal is fully loaded');
});

const featuredEventName = 'Community Music Night';
const featuredEventDate = '2026-07-18';
let featuredSeats = 4;

class CommunityEvent {
  constructor(name, date, category, location, seats, fee = 0) {
    this.name = name;
    this.date = date;
    this.category = category;
    this.location = location;
    this.seats = seats;
    this.fee = fee;
  }
}

CommunityEvent.prototype.checkAvailability = function () {
  return new Date(this.date) >= new Date() && this.seats > 0;
};

const events = [
  new CommunityEvent('Community Music Night', '2026-07-18', 'music', 'Town Hall', 4, 250),
  new CommunityEvent('Baking Basics', '2026-07-22', 'workshop', 'Community Kitchen', 12, 100),
  new CommunityEvent('Park Cleanup Drive', '2026-08-03', 'cleanup', 'Central Park', 25, 0),
  new CommunityEvent('Local Food Festival', '2026-08-12', 'food', 'Market Square', 18, 0),
  new CommunityEvent('Past Art Meetup', '2024-05-15', 'workshop', 'Old Library', 10, 50),
  new CommunityEvent('Sold Out Guitar Class', '2026-08-18', 'music', 'Youth Center', 0, 200)
];

function addEvent(name, date, category, location, seats, fee = 0) {
  const event = new CommunityEvent(name, date, category, location, seats, fee);
  events.push(event);
  return event;
}

function createRegistrationCounter(category) {
  let total = 0;
  return function () {
    total += 1;
    return category + ' registrations: ' + total;
  };
}

const musicRegistrationCounter = createRegistrationCounter('music');

function filterEventsByCategory(category = 'all', callback = function (event) { return event; }) {
  const clonedEvents = [...events];
  return clonedEvents
    .filter(function (event) {
      return category === 'all' || event.category === category;
    })
    .map(callback);
}

function getVisibleEvents(category = 'all', searchTerm = '') {
  return filterEventsByCategory(category)
    .filter(function (event) {
      return event.checkAvailability();
    })
    .filter(function (event) {
      return event.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

function registerUser(eventName) {
  try {
    const selectedEvent = events.find(function (event) {
      return event.name === eventName;
    });

    if (!selectedEvent) {
      throw new Error('Event not found');
    }

    if (!selectedEvent.checkAvailability()) {
      throw new Error('Event is not available');
    }

    selectedEvent.seats--;
    featuredSeats--;
    if (selectedEvent.category === 'music') {
      console.log(musicRegistrationCounter());
    }

    renderEvents();
    populateEventSelect();
    return selectedEvent;
  } catch (error) {
    console.error('Registration failed:', error.message);
    document.querySelector('#formStatus').textContent = error.message;
    return null;
  }
}

function cancelRegistration(eventName) {
  const selectedEvent = events.find(function (event) {
    return event.name === eventName;
  });

  if (selectedEvent) {
    selectedEvent.seats++;
    featuredSeats++;
    renderEvents();
    populateEventSelect();
  }
}

function formatEventCard(event) {
  const { name, date, category, location, seats, fee } = event;
  return name + ' on ' + date + ' at ' + location + ' | ' + category + ' | Seats: ' + seats + ' | Fee: Rs. ' + fee;
}

function renderEvents() {
  const list = document.querySelector('#eventsList');
  const category = document.querySelector('#categoryFilter').value;
  const searchTerm = document.querySelector('#searchInput').value;
  const visibleEvents = getVisibleEvents(category, searchTerm);
  const musicEvents = events.filter(function (event) {
    return event.category === 'music';
  });
  const formattedCards = events.map(function (event) {
    return 'Workshop on ' + event.name;
  });

  list.innerHTML = '';

  visibleEvents.forEach(function (event) {
    const card = document.createElement('article');
    card.className = 'event-card' + (event.seats === 0 ? ' full' : '');

    const title = document.createElement('h3');
    title.textContent = event.name;

    const details = document.createElement('p');
    details.textContent = formatEventCard(event);

    const entries = document.createElement('p');
    entries.textContent = Object.entries(event)
      .map(function (entry) {
        return entry[0] + ': ' + entry[1];
      })
      .join(' | ');

    const registerButton = document.createElement('button');
    registerButton.type = 'button';
    registerButton.textContent = 'Register';
    registerButton.onclick = function () {
      registerUser(event.name);
    };

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.className = 'cancel';
    cancelButton.onclick = function () {
      cancelRegistration(event.name);
    };

    card.append(title, details, entries, registerButton, cancelButton);
    list.appendChild(card);
  });

  document.querySelector('#debugOutput').textContent = [
    'Featured: ' + `${featuredEventName} is scheduled on ${featuredEventDate}. Seats after activity: ${featuredSeats}`,
    'Visible events: ' + visibleEvents.length,
    'Music events via filter(): ' + musicEvents.map(function (event) { return event.name; }).join(', '),
    'Cards via map(): ' + formattedCards.join(' | ')
  ].join('\n');
}

function populateEventSelect() {
  const select = document.querySelector('#registrationForm').elements.event;
  select.innerHTML = '<option value="">Choose an event</option>';

  getVisibleEvents().forEach(function (event) {
    const option = document.createElement('option');
    option.value = event.name;
    option.textContent = event.name;
    select.appendChild(option);
  });
}

function clearErrors() {
  document.querySelectorAll('.error').forEach(function (element) {
    element.textContent = '';
  });
}

function showError(field, message) {
  document.querySelector('[data-error-for="' + field + '"]').textContent = message;
}

function handleFormSubmit(event) {
  event.preventDefault();
  clearErrors();

  const form = event.target;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const selectedEvent = form.elements.event.value;
  let isValid = true;

  if (!name) {
    showError('name', 'Name is required.');
    isValid = false;
  }

  if (!email || !email.includes('@')) {
    showError('email', 'A valid email is required.');
    isValid = false;
  }

  if (!selectedEvent) {
    showError('event', 'Please select an event.');
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  const payload = { name, email, selectedEvent };
  console.log('Submitting registration payload:', payload);

  setTimeout(function () {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Network response failed');
        }
        return response.json();
      })
      .then(function () {
        registerUser(selectedEvent);
        document.querySelector('#formStatus').textContent = 'Registration submitted successfully for ' + name + '.';
        form.reset();
      })
      .catch(function (error) {
        console.error('Fetch submission error:', error);
        registerUser(selectedEvent);
        document.querySelector('#formStatus').textContent = 'Mock registration saved locally because the network request failed.';
      });
  }, 800);
}

function loadMockEventsWithThen() {
  document.querySelector('#loadingSpinner').hidden = false;
  fetch('data/events.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (remoteEvents) {
      remoteEvents.forEach(function (event) {
        addEvent(event.name, event.date, event.category, event.location, event.seats, event.fee);
      });
      renderEvents();
      populateEventSelect();
    })
    .catch(function (error) {
      console.error('Mock API load failed:', error);
    })
    .finally(function () {
      document.querySelector('#loadingSpinner').hidden = true;
    });
}

async function loadMockEventsAsync() {
  document.querySelector('#loadingSpinner').hidden = false;
  try {
    const response = await fetch('data/events.json');
    const remoteEvents = await response.json();
    remoteEvents.forEach(function (event) {
      if (!events.some(function (existing) { return existing.name === event.name; })) {
        addEvent(event.name, event.date, event.category, event.location, event.seats, event.fee);
      }
    });
    renderEvents();
    populateEventSelect();
  } catch (error) {
    console.error('Async mock API load failed:', error);
  } finally {
    document.querySelector('#loadingSpinner').hidden = true;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#basicInfo').textContent = `${featuredEventName} is scheduled on ${featuredEventDate}. Available seats: ${featuredSeats}`;
  document.querySelector('#categoryFilter').onchange = renderEvents;
  document.querySelector('#searchInput').addEventListener('keydown', function () {
    setTimeout(renderEvents, 0);
  });
  document.querySelector('#registrationForm').addEventListener('submit', handleFormSubmit);
  document.querySelector('#loadEventsBtn').onclick = function () {
    loadMockEventsWithThen();
    loadMockEventsAsync();
  };

  if (window.jQuery) {
    $('#registerBtn').click(function () {
      console.log('jQuery click handler observed the registration button.');
    });

    $('#jQueryFadeBtn').click(function () {
      $('.event-card').fadeOut().fadeIn();
    });
  }

  addEvent('Neighborhood Coding Circle', '2026-09-01', 'workshop', 'Digital Lab', 15, 0);
  renderEvents();
  populateEventSelect();
});
