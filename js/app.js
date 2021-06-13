(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _Watch = _interopRequireDefault(require("./plugins/Watch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

document.querySelectorAll('.overlay').forEach(function (o) {
  new _Watch["default"](o).oneInView(function () {
    o.classList.add('active');
  });
});

},{"./plugins/Watch.js":2}],2:[function(require,module,exports){
"use strict";

var _Watch_CB = _interopRequireDefault(require("./Watch_CB.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

if (!window.jQuery) {
  window.jQuery = function () {
    
  };
}

var Watch = /*#__PURE__*/function () {
  /**
   * Fired on instantiation
   *
   * @param String|Element|jQuery element A selector, DOM element or jQuery object to be watched
   * @param Object params IntersectionObserver parameters
   */
  function Watch(element, params) {
    _classCallCheck(this, Watch);

    Object.assign(this, {
      in_view: false,
      params: {},
      in_view_cbs: [],
      out_view_cbs: []
    });

    if (params) {
      Object.assign(this, {
        params: params
      });
    }

    this.getElement(element);
    this.observe();
  }
  /**
   * Resolves element to a DOM element
   *
   * @param String|Element|jQuery element A selector, DOM element or jQuery object to be watched
   */


  _createClass(Watch, [{
    key: "getElement",
    value: function getElement(element) {
      if (typeof element === 'string') {
        this.element = document.querySelector(element);
      } else if (element instanceof Element) {
        this.element = element;
      } else if (element instanceof jQuery) {
        this.element = element[0];
      } else {
        throw new Error("Watch.js: You must provide a selector string, DOM Element or jQuery object to watch. ".concat(_typeof(element), " provided"));
      }
    }
    /**
     * Fired when the element comes into view
     */

  }, {
    key: "in_view_cb",
    value: function in_view_cb() {
      if (this.in_view_cbs.length > 0) {
        this.in_view_cbs.forEach(function (cb) {
          cb.run();
        });
      } else {
        console.warn('Watch.js: No functions have been set for when this element comes in to view');
        /* RemoveLogging:skip */
      }
    }
    /**
     * Fired when the element goes out of view
     */

  }, {
    key: "out_view_cb",
    value: function out_view_cb() {
      if (this.out_view_cbs.length > 0) {
        this.out_view_cbs.forEach(function (cb) {
          cb.run();
        });
      } else {
        console.warn('Watch.js: No functions have been set for when this element goes out of view');
        /* RemoveLogging:skip */
      }
    }
    /**
     * Sets the function to be called when the element comes into view
     *
     * @param function func
     * @return Watch
     */

  }, {
    key: "inView",
    value: function inView(func) {
      this.in_view_cbs.push(new _Watch_CB["default"](func));
      return this;
    }
    /**
     * Sets the function to be called when the element goes out of view
     *
     * @param function func
     * @return Watch
     */

  }, {
    key: "outView",
    value: function outView(func) {
      this.out_view_cbs.push(new _Watch_CB["default"](func));
      return this;
    }
    /**
     * Sets a function to be called once when the element comes into view
     *
     * @param function func
     * @return Watch
     */

  }, {
    key: "oneInView",
    value: function oneInView(func) {
      this.in_view_cbs.push(new _Watch_CB["default"](func, {
        single: true
      }));
      return this;
    }
    /**
     * Sets a function to be called once when the element goes out of view
     *
     * @param function func
     * @return Watch
     */

  }, {
    key: "oneOutView",
    value: function oneOutView(func) {
      this.out_view_cbs.push(new _Watch_CB["default"](func, {
        single: true
      }));
      return this;
    }
    /**
     * Sets up IntersectionObserver
     *
     * IntersectionObserver is instantiated and set to observe the element.
     * When the element comes in to view after being out of view the in view function is fired.
     * When the element goes out of view after being in view the out view function is fired.
     */

  }, {
    key: "observe",
    value: function observe() {
      var _this = this;

      var options = Object.assign({
        threshold: 0
      }, this.params);
      var observer = new IntersectionObserver(function (entries, observer) {
        var response = {
          entries: entries,
          observer: observer
        };

        if (entries[0].isIntersecting) {
          if (!_this.in_view) {
            _this.in_view_cb(response);
          }

          _this.in_view = true;
        } else {
          if (_this.in_view) {
            _this.out_view_cb(response);
          }

          _this.in_view = false;
        }
      }, options);
      observer.observe(this.element);
    }
  }]);

  return Watch;
}();

module.exports = window.Watch = Watch;

},{"./Watch_CB.js":3}],3:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Watch_CB = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param function func Function to be called
   * @param Object params Settings to be adopted by this Watch_CB instance. Good for flagging single use functions
   */
  function Watch_CB(func, params) {
    _classCallCheck(this, Watch_CB);

    if (!params) {
      params = {};
    } // integrate defaults and params into instance


    Object.assign(this, {
      single: false,
      run_cb: true
    }, params);

    if (!func) {
      throw new Error('You must provide a function to run');
    }

    this.func = func;
  }
  /**
   * Run the function
   *
   * Determines first if this Watch_CB instance is still run-able. If it is, it checks if it's a single run CB and toggles it off prior to executing
   * the function so that it doesn't run again. If it is not runnable it does nothing.
   */


  _createClass(Watch_CB, [{
    key: "run",
    value: function run() {
      if (this.run_cb) {
        if (this.single) {
          this.run_cb = false;
        }

        this.func();
      }
    }
  }]);

  return Watch_CB;
}();

module.exports = Watch_CB;

},{}]},{},[1]);
