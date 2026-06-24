(function (window, document) {
  function MiniQuery(selector) {
    if (typeof selector === 'function') {
      return MiniQuery(document).ready(selector);
    }

    if (selector === document || selector === window || selector instanceof Element) {
      this.elements = [selector];
    } else if (selector instanceof NodeList || Array.isArray(selector)) {
      this.elements = Array.prototype.slice.call(selector);
    } else {
      this.elements = Array.prototype.slice.call(document.querySelectorAll(selector));
    }
  }

  MiniQuery.prototype.each = function (callback) {
    this.elements.forEach(function (element, index) {
      callback.call(element, index, element);
    });
    return this;
  };

  MiniQuery.prototype.ready = function (callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
    return this;
  };

  MiniQuery.prototype.text = function (value) {
    if (value === undefined) {
      return this.elements[0] ? this.elements[0].textContent : '';
    }
    return this.each(function () {
      this.textContent = value;
    });
  };

  MiniQuery.prototype.val = function (value) {
    if (value === undefined) {
      return this.elements[0] ? this.elements[0].value : '';
    }
    return this.each(function () {
      this.value = value;
    });
  };

  MiniQuery.prototype.hide = function () {
    return this.each(function () {
      this.style.display = 'none';
    });
  };

  MiniQuery.prototype.show = function () {
    return this.each(function () {
      this.style.display = '';
    });
  };

  MiniQuery.prototype.toggle = function () {
    return this.each(function () {
      this.style.display = this.style.display === 'none' ? '' : 'none';
    });
  };

  MiniQuery.prototype.fadeOut = MiniQuery.prototype.hide;
  MiniQuery.prototype.fadeIn = MiniQuery.prototype.show;
  MiniQuery.prototype.slideUp = MiniQuery.prototype.hide;
  MiniQuery.prototype.slideDown = MiniQuery.prototype.show;

  MiniQuery.prototype.delay = function (time) {
    this._delay = time;
    return this;
  };

  MiniQuery.prototype.css = function (property, value) {
    return this.each(function () {
      this.style.setProperty(property, value);
    });
  };

  MiniQuery.prototype.appendTo = function (target) {
    var parent = document.querySelector(target);
    return this.each(function () {
      parent.appendChild(this);
    });
  };

  MiniQuery.prototype.empty = function () {
    return this.each(function () {
      this.innerHTML = '';
    });
  };

  ['click', 'dblclick', 'mouseenter', 'mouseleave', 'keypress', 'submit'].forEach(function (eventName) {
    MiniQuery.prototype[eventName] = function (handler) {
      return this.each(function () {
        this.addEventListener(eventName, handler);
      });
    };
  });

  function $(selector) {
    if (selector && selector[0] === '<') {
      var template = document.createElement('template');
      template.innerHTML = selector.trim();
      return new MiniQuery(template.content.firstChild);
    }
    return new MiniQuery(selector);
  }

  window.$ = window.jQuery = $;
})(window, document);
