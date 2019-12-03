/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2FwcC5jc3M/ZmI1NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3NyYy9jc3MvYXBwLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/css/app.css\n");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _checkboxes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkboxes */ \"./src/js/checkboxes.js\");\n/* harmony import */ var _checkboxes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_checkboxes__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzPzkwZTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL2pzL2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9jaGVja2JveGVzJ1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/checkboxes.js":
/*!******************************!*\
  !*** ./src/js/checkboxes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n// Get all checkboxes groups in the page\nvar checkboxesGroups = document.querySelectorAll('[data-checkboxes]');\n\n_toConsumableArray(checkboxesGroups).forEach(function (group) {\n  var masterCheckbox = group.querySelector('input[type=checkbox][data-master]'); // One Checkbox to rule them all...\n\n  var checkboxes = group.querySelectorAll('input[type=checkbox][data-slave]'); // The 'slaves' checkboxes in the current group\n  // Add event listener to the table instead to all checkboxes separately.\n\n  group.addEventListener('click', function (event) {\n    var el = event.target; // We're interested in only 2 types of targets - the 'master' checkbox...\n\n    if (el === masterCheckbox) {\n      // Make all checkboxes checked state the same as the state of the master checkbox (true/false) and return (don't go to the next 'if')\n      return _toConsumableArray(checkboxes).forEach(function (e) {\n        return e.checked = el.checked;\n      });\n    } // ...or the 'slaves' ones\n\n\n    if (_toConsumableArray(checkboxes).indexOf(el) === -1) {\n      // Don't go further if the clicked elements is not a 'slave' checkbox\n      return;\n    } // Let's assume that all 'slave' checkboxes are checked\n\n\n    var allChecked = true; // Return false and break the loop if it finds a checkbox that is'nt checked\n\n    _toConsumableArray(checkboxes).every(function (e) {\n      return allChecked = e.checked;\n    }); // If all of the 'slaves' checkboxes are checked make the 'master' checkbox checked=true as well\n    // If at least one 'slave' checkbox is unchecked, then the 'master' is unchecked too\n\n\n    masterCheckbox.checked = allChecked; // true/false\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY2hlY2tib3hlcy5qcz82YjgyIl0sIm5hbWVzIjpbImNoZWNrYm94ZXNHcm91cHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZ3JvdXAiLCJtYXN0ZXJDaGVja2JveCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja2JveGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZWwiLCJ0YXJnZXQiLCJlIiwiY2hlY2tlZCIsImluZGV4T2YiLCJhbGxDaGVja2VkIiwiZXZlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FBekI7O0FBRUEsbUJBQUlGLGdCQUFKLEVBQXNCRyxPQUF0QixDQUE4QixVQUFBQyxLQUFLLEVBQUk7QUFDbkMsTUFBTUMsY0FBYyxHQUFHRCxLQUFLLENBQUNFLGFBQU4sQ0FBb0IsbUNBQXBCLENBQXZCLENBRG1DLENBQzhDOztBQUNqRixNQUFNQyxVQUFVLEdBQUdILEtBQUssQ0FBQ0YsZ0JBQU4sQ0FBdUIsa0NBQXZCLENBQW5CLENBRm1DLENBRTRDO0FBRS9FOztBQUNBRSxPQUFLLENBQUNJLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQVVDLEtBQVYsRUFBaUI7QUFDN0MsUUFBTUMsRUFBRSxHQUFHRCxLQUFLLENBQUNFLE1BQWpCLENBRDZDLENBRzdDOztBQUNBLFFBQUlELEVBQUUsS0FBS0wsY0FBWCxFQUEyQjtBQUN2QjtBQUNBLGFBQU8sbUJBQUlFLFVBQUosRUFBZ0JKLE9BQWhCLENBQXdCLFVBQUFTLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLE9BQUYsR0FBWUgsRUFBRSxDQUFDRyxPQUFuQjtBQUFBLE9BQXpCLENBQVA7QUFDSCxLQVA0QyxDQVM3Qzs7O0FBQ0EsUUFBSSxtQkFBSU4sVUFBSixFQUFnQk8sT0FBaEIsQ0FBd0JKLEVBQXhCLE1BQWdDLENBQUMsQ0FBckMsRUFBd0M7QUFDcEM7QUFDQTtBQUNILEtBYjRDLENBZTdDOzs7QUFDQSxRQUFJSyxVQUFVLEdBQUcsSUFBakIsQ0FoQjZDLENBa0I3Qzs7QUFDQSx1QkFBSVIsVUFBSixFQUFnQlMsS0FBaEIsQ0FBc0IsVUFBQUosQ0FBQztBQUFBLGFBQUtHLFVBQVUsR0FBR0gsQ0FBQyxDQUFDQyxPQUFwQjtBQUFBLEtBQXZCLEVBbkI2QyxDQXFCN0M7QUFDQTs7O0FBQ0FSLGtCQUFjLENBQUNRLE9BQWYsR0FBeUJFLFVBQXpCLENBdkI2QyxDQXVCUjtBQUN4QyxHQXhCRDtBQXlCSCxDQTlCRCIsImZpbGUiOiIuL3NyYy9qcy9jaGVja2JveGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2V0IGFsbCBjaGVja2JveGVzIGdyb3VwcyBpbiB0aGUgcGFnZVxuY29uc3QgY2hlY2tib3hlc0dyb3VwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNoZWNrYm94ZXNdJyk7XG5cblsuLi5jaGVja2JveGVzR3JvdXBzXS5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICBjb25zdCBtYXN0ZXJDaGVja2JveCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdW2RhdGEtbWFzdGVyXScpOyAvLyBPbmUgQ2hlY2tib3ggdG8gcnVsZSB0aGVtIGFsbC4uLlxuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94XVtkYXRhLXNsYXZlXScpOyAvLyBUaGUgJ3NsYXZlcycgY2hlY2tib3hlcyBpbiB0aGUgY3VycmVudCBncm91cFxuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB0YWJsZSBpbnN0ZWFkIHRvIGFsbCBjaGVja2JveGVzIHNlcGFyYXRlbHkuXG4gICAgZ3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZWwgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgICAgLy8gV2UncmUgaW50ZXJlc3RlZCBpbiBvbmx5IDIgdHlwZXMgb2YgdGFyZ2V0cyAtIHRoZSAnbWFzdGVyJyBjaGVja2JveC4uLlxuICAgICAgICBpZiAoZWwgPT09IG1hc3RlckNoZWNrYm94KSB7XG4gICAgICAgICAgICAvLyBNYWtlIGFsbCBjaGVja2JveGVzIGNoZWNrZWQgc3RhdGUgdGhlIHNhbWUgYXMgdGhlIHN0YXRlIG9mIHRoZSBtYXN0ZXIgY2hlY2tib3ggKHRydWUvZmFsc2UpIGFuZCByZXR1cm4gKGRvbid0IGdvIHRvIHRoZSBuZXh0ICdpZicpXG4gICAgICAgICAgICByZXR1cm4gWy4uLmNoZWNrYm94ZXNdLmZvckVhY2goZSA9PiBlLmNoZWNrZWQgPSBlbC5jaGVja2VkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC4uLm9yIHRoZSAnc2xhdmVzJyBvbmVzXG4gICAgICAgIGlmIChbLi4uY2hlY2tib3hlc10uaW5kZXhPZihlbCkgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBEb24ndCBnbyBmdXJ0aGVyIGlmIHRoZSBjbGlja2VkIGVsZW1lbnRzIGlzIG5vdCBhICdzbGF2ZScgY2hlY2tib3hcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExldCdzIGFzc3VtZSB0aGF0IGFsbCAnc2xhdmUnIGNoZWNrYm94ZXMgYXJlIGNoZWNrZWRcbiAgICAgICAgbGV0IGFsbENoZWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIFJldHVybiBmYWxzZSBhbmQgYnJlYWsgdGhlIGxvb3AgaWYgaXQgZmluZHMgYSBjaGVja2JveCB0aGF0IGlzJ250IGNoZWNrZWRcbiAgICAgICAgWy4uLmNoZWNrYm94ZXNdLmV2ZXJ5KGUgPT4gKGFsbENoZWNrZWQgPSBlLmNoZWNrZWQpKTtcblxuICAgICAgICAvLyBJZiBhbGwgb2YgdGhlICdzbGF2ZXMnIGNoZWNrYm94ZXMgYXJlIGNoZWNrZWQgbWFrZSB0aGUgJ21hc3RlcicgY2hlY2tib3ggY2hlY2tlZD10cnVlIGFzIHdlbGxcbiAgICAgICAgLy8gSWYgYXQgbGVhc3Qgb25lICdzbGF2ZScgY2hlY2tib3ggaXMgdW5jaGVja2VkLCB0aGVuIHRoZSAnbWFzdGVyJyBpcyB1bmNoZWNrZWQgdG9vXG4gICAgICAgIG1hc3RlckNoZWNrYm94LmNoZWNrZWQgPSBhbGxDaGVja2VkOyAvLyB0cnVlL2ZhbHNlXG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/checkboxes.js\n");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./src/js/app.js ./src/css/app.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/todorvoynski/www/checkboxes/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/todorvoynski/www/checkboxes/src/css/app.css */"./src/css/app.css");


/***/ })

/******/ });