# Cognizant Upskilling Program - Frontend Module 1

This repository contains my practice solutions for the Cognizant frontend upskilling tasks. The exercises are arranged under `Upskilling/` and focus on the main browser technologies used to build a simple frontend project: Bootstrap, CSS3, HTML5, JavaScript, and jQuery.

The common project idea used across the newer exercises is a **Local Community Event Portal**. The portal theme helps connect every concept to a practical use case: showing events, styling pages, collecting registrations, handling user interactions, storing preferences, loading data, and debugging browser behavior.

## Repository Structure

```text
Cognizant-Exercise/
|-- README.md
|-- Upskilling/
|   |-- index.html
|   |-- Bootstrap-Exercises/
|   |-- CSS3-Exercises/
|   |-- HTML5-Exercises/
|   |-- JavaScript-Exercises/
|   `-- jQuery-Exercises/
```

`Upskilling/index.html` is the main hub page. From there, each topic folder can be opened directly in the browser.

## Module 1 Overview

Module 1 is divided into five frontend topics.

| Topic | Folder | Main Focus |
| --- | --- | --- |
| Topic 1 | `Upskilling/Bootstrap-Exercises/` | Bootstrap setup, layout, components, utilities, icons, plugins, and Sass customization |
| Topic 2 | `Upskilling/CSS3-Exercises/` | CSS syntax, selectors, colors, typography, tables, box model, columns, responsiveness, and debugging |
| Topic 3 | `Upskilling/HTML5-Exercises/` | Semantic HTML, navigation, forms, media, browser storage, geolocation, and DevTools |
| Topic 4 | `Upskilling/JavaScript-Exercises/` | JavaScript basics, functions, objects, arrays, DOM, events, async programming, forms, AJAX, and debugging |
| Topic 5 | `Upskilling/jQuery-Exercises/` | jQuery inclusion, selectors, effects, DOM manipulation, and event helpers |

## How To Run The Exercises

Most exercises are plain frontend files and can be opened directly in Chrome.

```powershell
cd "D:\Campus\Cognizant\Cognizant-Exercise"
start Upskilling\index.html
```

For Bootstrap Sass customization, install dependencies inside the Bootstrap folder:

```powershell
cd "D:\Campus\Cognizant\Cognizant-Exercise\Upskilling\Bootstrap-Exercises"
npm install
npm run build:css
```

For JavaScript Fetch examples, using a local server is better than opening with `file://`, because some browsers block local JSON fetches.

```powershell
cd "D:\Campus\Cognizant\Cognizant-Exercise\Upskilling\JavaScript-Exercises"
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Topic 1: Bootstrap Exercises

Bootstrap is a CSS and JavaScript framework used to build responsive interfaces quickly. These exercises show how Bootstrap classes reduce the amount of custom CSS needed for common layout and component work.

The Bootstrap folder contains one hub page and multiple exercise pages:

- `index.html`
- `setup.html`
- `grid-layout.html`
- `flexbox.html`
- `typography.html`
- `forms.html`
- `buttons.html`
- `navigation.html`
- `cards-media.html`
- `utilities.html`
- `icons-js.html`
- `sass-customization.html`

### Setup And Bootstrap Inclusion

The setup exercises explain two ways to use Bootstrap. The first method uses the Bootstrap CDN, where CSS and JavaScript files are loaded from an online URL. This is useful for quick practice because no local installation is required. The second method uses locally installed Bootstrap files through npm, which is closer to a real project workflow.

The exercises also explain why the Bootstrap JavaScript bundle is needed. Components such as modals, dropdowns, collapse, accordions, and offcanvas menus need JavaScript behavior in addition to CSS styles.

### Grid, Layout, And Alignment

Bootstrap's grid system is based on rows and columns. The exercises demonstrate containers, rows, columns, breakpoints, and responsive column widths. A layout can show one column on mobile, two columns on tablets, and three or more columns on desktop by using classes such as `col-12`, `col-md-6`, and `col-lg-4`.

Alignment utilities are used to center content, reorder columns, and control spacing without writing custom CSS. This teaches how Bootstrap combines layout structure with responsive behavior.

### Flexbox Utilities

Bootstrap includes utility classes for CSS Flexbox. These exercises show how classes such as `d-flex`, `justify-content-between`, `align-items-center`, `flex-wrap`, and responsive flex direction classes can create navigation bars and card layouts.

The purpose is to understand that Flexbox controls distribution and alignment along a row or column. Bootstrap makes these features available through reusable class names.

### Typography

Typography exercises cover Bootstrap text utilities. Headings, lead text, muted text, font weight, text transformation, alignment, and display classes are used to control how content appears.

The concept is that good UI depends on visual hierarchy. Bigger headings, readable paragraphs, and consistent spacing help users scan pages more easily.

### Forms And Floating Labels

Forms are used to collect user input. The Bootstrap form exercises use form controls, labels, checkboxes, input groups, and floating labels. Bootstrap provides classes such as `form-control`, `form-label`, `form-check`, and `input-group` to make forms visually consistent.

These exercises also show why labels, placeholders, and grouped controls matter for usability.

### Buttons And Button Groups

Buttons represent actions. Bootstrap provides contextual button classes such as `btn-primary`, `btn-success`, `btn-warning`, and `btn-danger`. Button groups are used when related actions should be displayed together.

The exercise demonstrates how button styling communicates priority and purpose.

### Navigation

Navigation exercises include navbars, tabs, pills, and search forms. A responsive navbar changes its layout depending on screen size, usually collapsing into a menu on smaller devices.

The concept is that navigation should help users move across sections without confusion. Bootstrap provides ready-made structures that still require correct HTML organization.

### Cards And Media Objects

Cards are reusable UI containers for related information. The card exercises demonstrate images, titles, descriptions, buttons, and profile-style content. Media object layouts show how text and images can be aligned together.

This teaches how repeated content such as event cards, profile cards, or announcement blocks can stay visually consistent.

### Utilities

Bootstrap utilities are single-purpose classes for spacing, colors, borders, shadows, visibility, display, and positioning. These exercises show how utility classes can be combined to create polished layouts quickly.

The key idea is that utilities reduce repeated custom CSS for common styling needs.

### Icons And JavaScript Plugins

Bootstrap Icons are used for visual symbols in buttons and UI labels. JavaScript plugin exercises demonstrate interactive components such as modals and accordions.

The concept is that modern websites often need small interactive behaviors. Bootstrap provides these patterns, but they still depend on correct HTML attributes and script inclusion.

### Sass Customization

Sass customization shows how Bootstrap can be themed by changing variables before compiling CSS. Instead of overriding every class manually, Sass variables allow changes to colors, spacing, and theme values at the source level.

This introduces a more professional way of customizing a framework.

## Topic 2: CSS3 Exercises

CSS controls the presentation layer of a webpage. The CSS3 exercises are based on styling a Community Event Portal and are implemented as separate HTML pages inside `Upskilling/CSS3-Exercises/`.

### Exercise 1: CSS Inclusion Methods

This exercise explains inline CSS, internal CSS, and external CSS.

Inline CSS is written directly on an element using the `style` attribute. It is quick but difficult to maintain. Internal CSS is written inside a `<style>` tag in the HTML document. It is useful for one-page examples. External CSS is written in a separate `.css` file and linked using `<link>`. This is the best approach for larger projects because the same stylesheet can be reused across pages.

### Exercise 2: CSS Syntax And Comments

CSS syntax uses selectors and declaration blocks. A selector chooses the HTML element, and declarations define property-value pairs. Comments explain sections of CSS and make the file easier to understand.

This exercise shows how clean formatting and comments help during maintenance.

### Exercise 3: Selectors

Selectors are used to target elements. The exercise covers universal selectors, element selectors, ID selectors, class selectors, grouping selectors, descendant selectors, child selectors, attribute selectors, and pseudo-classes.

The concept is specificity. CSS rules compete with each other, and more specific selectors can override general rules.

### Exercise 4: Colors And Backgrounds

This exercise uses color formats such as HEX, RGB, and RGBA. It also demonstrates background colors, background images, fallback colors, and gradients.

The purpose is to understand how color creates visual identity and how backgrounds can improve section separation.

### Exercise 5: Typography

Typography exercises cover font family, font size, font weight, line height, letter spacing, text alignment, and Google Fonts.

Readable typography is important because most websites are text-heavy. Good font choices and spacing improve clarity.

### Exercise 6: Links And Lists

Links are styled using pseudo-classes such as `:link`, `:visited`, `:hover`, and `:active`. Lists are styled using list markers, spacing, and navigation-style layouts.

This exercise explains how links should provide visible feedback and how lists can become menus or structured content groups.

### Exercise 7: Tables

Tables display structured data in rows and columns. The exercise applies borders, padding, zebra striping, and hover states.

The goal is to make tabular information easier to scan and compare.

### Exercise 8: Box Model

The CSS box model includes content, padding, border, and margin. This exercise shows how each layer affects spacing and element size.

It also compares `visibility: hidden` and `display: none`. Hidden visibility keeps the element's space, while display none removes it from the layout.

### Exercise 9: Multiple Columns

CSS multi-column properties such as `column-count`, `column-gap`, and `column-rule` split long text into newspaper-like columns.

This is useful for announcements, newsletters, and long descriptions.

### Exercise 10: Responsive Design

Responsive design makes pages adapt to different screen sizes. The exercise uses media queries, flexible widths, and mobile-friendly layout changes.

The concept is that the same webpage should remain usable on phones, tablets, and desktops.

### Exercise 11: Debugging With DevTools

This exercise explains how Chrome DevTools helps inspect elements, test CSS changes live, check computed styles, and debug layout problems.

DevTools is important because frontend issues are often visual and need browser inspection.

## Topic 3: HTML5 Exercises

The HTML5 exercises are implemented in `Upskilling/HTML5-Exercises/index.html`. They use the Local Community Event Portal theme and include real local event images and a local invitation video in the `media/` folder.

### Exercise 1: HTML5 Base Template

The page starts with `<!DOCTYPE html>`, `<html lang="en">`, and `<meta charset="UTF-8">`. These define the document as HTML5, set the language for accessibility and search engines, and allow proper character encoding.

The page also uses comments such as `Navigation`, `Main`, and `Footer` to label major sections. This makes the document structure easier to inspect in Chrome DevTools.

### Exercise 2: Navigation And Linking

The navigation is created with a semantic `<nav>` element. Anchor tags link to sections using IDs, for example `href="#events"` connects to `section id="events"`.

An external help page is linked with `target="_blank"`, which opens `help.html` in a new browser tab.

### Exercise 3: Welcome Message With ID And Class

The welcome banner uses `<div id="welcomeBanner">`. An ID is unique and is used when one specific element needs special styling or scripting.

The `.highlight` class is reusable and can be applied to multiple elements. The exercise also uses an inline `<span>` style for a special offer. This demonstrates the difference between block elements, inline elements, IDs, classes, internal CSS, and inline styling.

### Exercise 4: Image Gallery

The gallery uses a `<table>` with two rows and three columns. Each cell contains an `<img>` tag and a caption-like event name.

The image attributes `src`, `alt`, and `title` are used. `src` points to the local image file, `alt` provides fallback/accessibility text, and `title` displays extra information on hover. A CSS class adds borders and consistent sizing.

### Exercise 5: Event Registration Form

The registration form uses HTML input types such as `text`, `email`, `date`, `select`, `tel`, and `textarea`.

Attributes like `placeholder`, `required`, and `autofocus` improve usability. The form uses an `<output>` element to show a confirmation message after submission.

### Exercise 6: Event Handling

Inline event attributes are used for practice:

- `onblur` validates the phone number when the field loses focus.
- `onchange` updates the selected event fee.
- `onclick` logs the register button click.
- `ondblclick` enlarges event images.
- `onkeyup` counts characters in the message textarea.

This exercise shows how browser events allow the page to respond to user actions.

### Exercise 7: Video Invite

The `<video>` element displays the local invitation video. The `controls` attribute gives the user play, pause, and volume controls.

The `oncanplay` event displays a message when the browser has loaded enough video data to begin playback.

### Exercise 8: Saving Preferences

The selected event type is saved in `localStorage`, which remains available after reloading the page. `sessionStorage` is used for session-specific data, which lasts only while the tab/session remains active.

The clear preferences button removes saved values from both storage systems.

### Exercise 9: Geolocation

The geolocation exercise uses `navigator.geolocation.getCurrentPosition()`. When the user clicks "Find Nearby Events", the browser asks for location permission and then displays latitude and longitude.

The code handles permission denial, timeout, and unsupported-browser cases. High accuracy options are also used.

### Exercise 10: Debugging

The page includes console logs and script functions that can be inspected in Chrome DevTools. DevTools can be used to inspect HTML, test CSS changes, view console messages, and add JavaScript breakpoints.

## Topic 4: JavaScript Exercises

The JavaScript exercises are implemented in `Upskilling/JavaScript-Exercises/`. The HTML file links to `css/styles.css`, `js/main.js`, and `data/events.json`.

### Exercise 1: JavaScript Basics And Setup

The HTML page uses `<script src="js/main.js"></script>` to connect external JavaScript. The script logs `"Welcome to the Community Portal"` using `console.log()` and shows an alert when the page loads.

This demonstrates how JavaScript is connected to HTML and how browser feedback can be shown through the console and alert box.

### Exercise 2: Syntax, Data Types, And Operators

The code uses `const` for values that should not be reassigned, such as the featured event name and date. It uses `let` for values that change, such as available seats.

Template literals create readable strings with embedded values. Increment and decrement operators update seat counts when users register or cancel.

### Exercise 3: Conditionals, Loops, And Error Handling

The event display only shows upcoming events with available seats. This uses `if`-style logic through filtering.

The event list is looped with `forEach()`. Registration logic is wrapped in `try-catch` so invalid cases, such as unavailable events, can be handled without silently breaking the page.

### Exercise 4: Functions, Scope, Closures, And Higher-Order Functions

Functions such as `addEvent()`, `registerUser()`, and `filterEventsByCategory()` organize repeated logic.

A closure is used to track total registrations for a category. A closure remembers variables from its outer function even after that outer function has finished running.

The filtering function accepts callbacks, which demonstrates higher-order functions.

### Exercise 5: Objects And Prototypes

Events are modeled with a `CommunityEvent` class. Each event has properties such as name, date, category, location, seats, and fee.

The `checkAvailability()` method is added to the prototype. This means all event objects can share the same availability-checking behavior. `Object.entries()` is used to list object keys and values.

### Exercise 6: Arrays And Methods

The event collection is stored in an array. New events are added using `.push()`.

The `.filter()` method is used to show only events matching a category, such as music. The `.map()` method is used to create formatted display text from event data.

### Exercise 7: DOM Manipulation

The script accesses elements with `querySelector()`. It creates event cards using `createElement()` and adds them to the page with `appendChild()` or `append()`.

The UI updates when a user registers or cancels because the event data changes and the cards are rendered again.

### Exercise 8: Event Handling

The page responds to user actions:

- Register buttons use click handling.
- The category dropdown uses change handling.
- The search box uses keydown handling.

This shows how JavaScript connects user input to page updates.

### Exercise 9: Async JavaScript, Promises, And Async/Await

The page loads mock event data from `data/events.json`.

One function uses `.then()` and `.catch()` to handle a Promise. Another function uses `async` and `await`, which makes asynchronous code read more like step-by-step synchronous code.

A loading message is shown while the fetch is running.

### Exercise 10: Modern JavaScript Features

Modern JavaScript features are used throughout the script:

- `let` and `const` for variable declaration.
- Default function parameters.
- Destructuring to extract event details.
- Spread syntax to clone event arrays before filtering.

These features make code shorter and easier to maintain.

### Exercise 11: Working With Forms

The registration form uses `form.elements` to read user input. `event.preventDefault()` stops the browser from refreshing the page on submit.

The script validates name, email, and selected event fields. Errors are displayed inline beside the related fields.

### Exercise 12: AJAX And Fetch API

The registration payload is sent with `fetch()` using the POST method. The code includes headers and a JSON body.

`setTimeout()` simulates a delay so the user can see asynchronous behavior. If the network request fails, the page shows a fallback message and still demonstrates the registration flow locally.

### Exercise 13: Debugging And Testing

The script logs important actions such as registration payloads and fetch errors. These logs can be inspected in the Console tab.

The Network tab can be used to inspect fetch requests, and the Sources tab can be used to add breakpoints and watch variable values.

### Exercise 14: jQuery And Framework Comparison

The JavaScript exercise page also includes a small jQuery demonstration with `$('#registerBtn').click(...)` and fade effects for event cards.

The exercise mentions that frameworks like React or Vue are useful for larger applications because they organize UI into reusable components and manage state more systematically.

## Topic 5: jQuery Exercises

jQuery is a JavaScript library that simplifies DOM selection, event handling, animations, and DOM updates. The jQuery exercises are implemented in `Upskilling/jQuery-Exercises/`.

### Exercise 1: jQuery Library Inclusion

The page includes jQuery using a CDN first. It also includes a local fallback file at `vendor/jquery-local.js`.

The exercise logs the text of a paragraph that says "Hello World!" using jQuery. This confirms that the library is loaded and that `$()` can select elements.

### Exercise 2: The `$()` Function

The `$()` function is the main jQuery selector function. It selects elements using CSS-style selectors.

The exercise changes the text of an `<h1>` and hides one paragraph when a button is clicked. The code is placed inside `$(document).ready()` so it runs after the DOM is loaded.

### Exercise 3: jQuery Methods

jQuery methods such as `.hide()`, `.show()`, `.fadeOut()`, `.fadeIn()`, and `.toggle()` are used on boxes.

The exercise also chains methods with `.slideUp().delay(1000).slideDown()`. Chaining means calling multiple methods one after another on the same selected elements.

### Exercise 4: DOM Manipulation

The form takes text from an input field, creates a new `<li>` element, and appends it to a `<ul>`.

The "Remove All" button empties the list using `.empty()`. This demonstrates how jQuery can create, insert, and remove page content.

### Exercise 5: Working With Events

The `#colorBtn` click event changes the background of `#colorBox` to red. A double-click on the box changes it back to white.

This demonstrates how jQuery event methods can attach behavior to elements.

### Exercise 6: Event Helpers

The exercise uses `.click()`, `.dblclick()`, `.mouseenter()`, `.mouseleave()`, and `.keypress()`.

Each event performs a visible action, such as changing colors or showing status text. This makes it easy to understand when each event fires.

## Execution And Checking Process

The exercises can be checked in a browser by opening each topic page and interacting with the controls.

Chrome DevTools should be used while checking:

- Elements tab: inspect HTML structure and CSS rules.
- Console tab: view logs, errors, and JavaScript messages.
- Sources tab: add breakpoints and step through JavaScript.
- Network tab: inspect fetch requests and file loading.
- Application tab: inspect `localStorage` and `sessionStorage`.

## Validation Commands Used

The JavaScript files were checked with Node syntax validation:

```powershell
node --check Upskilling\JavaScript-Exercises\js\main.js
node --check Upskilling\jQuery-Exercises\js\app.js
node --check Upskilling\jQuery-Exercises\vendor\jquery-local.js
```

These commands check JavaScript syntax. Browser testing is still required for DOM events, media playback, geolocation, storage, and fetch behavior because those features depend on browser APIs.

## Summary

This repository represents the Module 1 frontend upskilling practice work. Each topic builds on the previous one:

Bootstrap introduces fast responsive UI building.
CSS3 explains how visual styling works.
HTML5 provides the page structure and browser features.
JavaScript adds logic, interactivity, data handling, and asynchronous behavior.
jQuery shows a simpler library-based way to select elements, handle events, and update the DOM.

Together, these exercises cover the core concepts needed to understand how a browser-based frontend application is structured, styled, made interactive, and debugged.
