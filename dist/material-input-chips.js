(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("material-ui/styles"), require("classnames"), require("material-ui/Input"), require("material-ui/Form"), require("material-ui/Chip"), require("material-ui/Paper"), require("material-ui/Menu"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "material-ui/styles", "classnames", "material-ui/Input", "material-ui/Form", "material-ui/Chip", "material-ui/Paper", "material-ui/Menu"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("prop-types"), require("material-ui/styles"), require("classnames"), require("material-ui/Input"), require("material-ui/Form"), require("material-ui/Chip"), require("material-ui/Paper"), require("material-ui/Menu")) : factory(root["react"], root["prop-types"], root["material-ui/styles"], root["classnames"], root["material-ui/Input"], root["material-ui/Form"], root["material-ui/Chip"], root["material-ui/Paper"], root["material-ui/Menu"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = __webpack_require__(5);

var _Input2 = _interopRequireDefault(_Input);

var _Form = __webpack_require__(6);

var _styles = __webpack_require__(2);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _fuse = __webpack_require__(7);

var _fuse2 = _interopRequireDefault(_fuse);

var _copyToClipboard = __webpack_require__(8);

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

var _Chip = __webpack_require__(10);

var _Chip2 = _interopRequireDefault(_Chip);

var _Options = __webpack_require__(12);

var _Options2 = _interopRequireDefault(_Options);

var _helpers = __webpack_require__(16);

var _styles2 = __webpack_require__(17);

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * material-ui based, chips autocomplete
 *
 * @version 1.4.1
 * @author [Rodrigo Nehring](https://github.com/rodrigonehring)
*/
var MaterialChips = function (_Component) {
  _inherits(MaterialChips, _Component);

  function MaterialChips() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MaterialChips);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MaterialChips.__proto__ || Object.getPrototypeOf(MaterialChips)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      containerFocus: false,
      inputFocus: false,
      chipFocus: null,
      optionsOpen: false,
      translateX: 0,
      input: '',
      options: [],
      optionsFocus: null
    }, _this.onChange = function (selected) {
      if (_this.props.onChange) {
        _this.props.onChange(selected);
      }
    }, _this.OptionsComponent = (0, _Options2.default)(_this.props.optionsClasses), _this.handleKeyPress = function (e) {
      var inputFocus = _this.state.inputFocus;

      // not selected, typed "normal" key, then select input

      if (!inputFocus && (0, _helpers.acceptedCharCodes)(e.charCode)) {
        _this.input.focus();
      }
    }, _this.haveOptionsKeys = function (e) {
      return [].concat(_helpers.TYPES.UP).concat(_helpers.TYPES.DOWN).concat(_this.props.submitKeyCodes).includes(e.keyCode);
    }, _this.handleOptionsKeys = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          optionsFocus = _this$state.optionsFocus,
          options = _this$state.options;

      var nextPosition = void 0;

      if (_helpers.TYPES.UP.includes(e.keyCode)) {
        if (optionsFocus > 0) {
          nextPosition = optionsFocus - 1;
        } else {
          nextPosition = null;
        }
      } else if (_helpers.TYPES.DOWN.concat(_helpers.TYPES.TAB).includes(e.keyCode)) {
        if (optionsFocus === null) {
          nextPosition = 0;
        } else if (optionsFocus !== options.length - 1) {
          nextPosition = optionsFocus + 1;
        } else {
          nextPosition = null;
        }
      } else if (_this.props.submitKeyCodes.includes(e.keyCode) && typeof optionsFocus === 'number') {
        _this.addItemObject(options[optionsFocus].item, true);
        return true;
      }

      if (typeof nextPosition === 'number' || nextPosition === null) {
        _this.setState({ optionsFocus: nextPosition });
        return true;
      }
    }, _this.handleKeyDown = function (e) {
      var _this$state2 = _this.state,
          inputFocus = _this$state2.inputFocus,
          inputValue = _this$state2.input,
          chipFocus = _this$state2.chipFocus,
          optionsOpen = _this$state2.optionsOpen;
      var selected = _this.props.selected;


      if (optionsOpen) {
        // key press ESC, close options
        if (_helpers.TYPES.ESCAPE.includes(e.keyCode)) {
          return _this.setState({
            optionsOpen: false,
            optionsFocus: null
          });
        }

        if (_this.haveOptionsKeys(e)) {
          var shouldStop = _this.handleOptionsKeys(e);
          if (shouldStop) {
            return;
          }
        }
      }

      if (inputFocus) {
        // input not empty
        if (inputValue.length > 0) {
          // verify keycode submission type
          if (_this.props.submitKeyCodes.includes(e.keyCode)) {
            _this.addItem(inputValue);
            e.preventDefault();
          }
        } else {
          // ser for um TAB, limpa algumas coisas
          if (_helpers.TYPES.TAB.includes(e.keyCode)) {
            return _this.setState({
              chipFocus: null,
              inputFocus: false,
              containerFocus: false
            });
          }

          // se for um BACKSPACE, deleta última item da lista
          if (_helpers.TYPES.BACKSPACE.includes(e.keyCode) && selected.length > 0) {
            return _this.deleteItem(selected[selected.length - 1])();
          }

          if (_helpers.TYPES.LEFT.includes(e.keyCode)) {
            e.preventDefault();
            _this.focusChip(selected.length - 1);
          }
        }
      } else if (!inputFocus && chipFocus !== null) {
        // movimentar focus ao apartar left right
        if (_helpers.TYPES.RIGHT.includes(e.keyCode)) {
          e.preventDefault();
          if (selected.length === chipFocus + 1) {
            _this.input.focus();
          } else {
            _this.focusChip(chipFocus + 1);
          }
        }

        // movimentar focus ao apartar left right
        if (_helpers.TYPES.LEFT.includes(e.keyCode) && chipFocus !== 0) {
          e.preventDefault();
          _this.focusChip(chipFocus - 1);
        }

        // deleta item selecionado
        if (_helpers.TYPES.DELETE_CODES.includes(e.keyCode)) {
          _this.deleteItem(selected[chipFocus])();

          // seleciona anterior
          if (selected.length > 1 && chipFocus !== 0) {
            _this.focusChip(chipFocus - 1);
          } else if (chipFocus === 0 && selected.length > 1) {
            _this.input.focus();
          }
        }
      }
    }, _this.configureFuse = function () {
      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.options;

      if (_this.props.fixedOptions) {
        return _this.setState({
          options: (0, _helpers.mimicFuseSearch)(list)
        });
      }

      _this.fuse = new _fuse2.default(list, {
        shouldSort: true,
        threshold: 0.4,
        includeScore: true,
        maxPatternLength: 32,
        minMatchCharLength: 3,
        includeMatches: true,
        matchAllTokens: true,
        distance: 100,
        keys: Object.values(_this.props.fields),
        location: 0
      });

      _this.search();
    }, _this.search = function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.input;
      var onSearch = _this.props.onSearch;

      var options = _this.fuse.search(value);

      _this.setState({ options: options, optionsOpen: options.length > 0 });

      if (onSearch) {
        onSearch(value);
      }
    }, _this.handleClickOutside = function (event) {
      if (_this.containerRef && !_this.containerRef.contains(event.target)) {
        _this.reset();
      }
    }, _this.reset = function () {
      setTimeout(function () {
        _this.setState({
          error: false,
          containerFocus: false,
          inputFocus: false,
          chipFocus: null,
          optionsOpen: false
        });
      });
    }, _this.handleCopy = function (e) {
      var selected = _this.props.selected;
      var chipFocus = _this.state.chipFocus;


      if (chipFocus !== null) {
        e.preventDefault();
        var currentChip = selected[chipFocus];
        (0, _copyToClipboard2.default)(JSON.stringify(currentChip));
        _this.input.focus();
        _this.focusChip(chipFocus);
      }
    }, _this.handlePaste = function (e) {
      var _this$props = _this.props,
          selected = _this$props.selected,
          fields = _this$props.fields,
          disabled = _this$props.disabled;

      var clipboard = e.clipboardData.getData('Text');

      if (disabled || !_this.state.containerFocus) {
        return;
      }

      try {
        var item = JSON.parse(clipboard);

        if (!item[fields.value]) {
          throw new Error('Don\'t contain ' + fields.value);
        }

        var exist = selected.find(function (i) {
          return i[fields.value] === item[fields.value];
        });

        if (exist) {
          e.preventDefault();
          _this.setState(function (state) {
            return { input: state.input + item[fields.value] };
          });
          return;
        }

        e.preventDefault();
        _this.addItemObject(item, true);
      } catch (error) {
        var valid = !(0, _helpers.validate)(clipboard, _this.props.validators, _this.props.selected);

        if (valid) {
          e.preventDefault();
          _this.addItem(clipboard);
        }
      }
    }, _this.handleInputChange = function (_ref2) {
      var target = _ref2.target;

      if (target.value.length > 3) {
        _this.setState({
          error: null,
          input: target.value
        });

        _this.search(target.value);

        return _this.input.focus();
      } else if (target.value.length === 0) {
        return _this.setState({
          error: null,
          input: '',
          optionsOpen: false
        });
      }

      _this.setState({
        error: null,
        input: target.value
      });
    }, _this.chipRefs = {}, _this.focusChip = function (index) {
      var ref = _this.chipRefs[index];
      var selector = ref.querySelector(':scope [role="button"]');
      if (selector) {
        selector.focus();
      }
    }, _this.makeItem = function (newValue) {
      var _makeChip;

      var _this$props2 = _this.props,
          fields = _this$props2.fields,
          makeChip = _this$props2.makeChip;


      return makeChip((_makeChip = {}, _defineProperty(_makeChip, fields.value, newValue), _defineProperty(_makeChip, fields.label, newValue), _makeChip));
    }, _this.addItemObject = function (option, focus) {
      var _this$props3 = _this.props,
          selected = _this$props3.selected,
          clearAfterAdd = _this$props3.clearAfterAdd;


      if (clearAfterAdd) {
        _this.setState({
          input: '',
          optionsFocus: null
        }, function () {
          return _this.onChange([].concat(_toConsumableArray(selected), [option]));
        });
      }

      if (focus) {
        _this.input.focus();
      }
    }, _this.addItem = function (value) {
      var error = (0, _helpers.validate)(value, _this.props.validators, _this.props.selected);
      var item = _this.makeItem(value);
      var _this$props4 = _this.props,
          selected = _this$props4.selected,
          clearAfterAdd = _this$props4.clearAfterAdd;


      if (error) {
        return _this.setState({ error: error });
      }

      _this.setState(function (state) {
        return {
          error: error,
          input: clearAfterAdd ? '' : state.input
        };
      }, function () {
        _this.onChange([].concat(_toConsumableArray(selected), [item]));
        setTimeout(function () {
          return _this.alignInput();
        }, 100);
      });
    }, _this.deleteItem = function (chip) {
      return function () {
        var _this$props5 = _this.props,
            selected = _this$props5.selected,
            fields = _this$props5.fields;


        _this.setState({ chipFocus: null }, function () {
          _this.onChange(selected.filter(function (item) {
            return item[fields.value] !== chip[fields.value];
          }));
          _this.calculatePosition();
        });
      };
    }, _this.handleContainerFocus = function () {
      if (!_this.props.disabled) {
        _this.setState(function (state) {
          return {
            optionsOpen: state.optionsOpen || _this.props.openOnFocus,
            containerFocus: true
          };
        }, function () {
          if (_this.state.chipFocus === null) {
            return _this.input.focus();
          }

          _this.calculatePosition();
        });
      }
    }, _this.resetScroll = function () {
      _this.chipsWrapper.scrollLeft = 0;
    }, _this.handleInputFocus = function () {
      _this.resetScroll();
      _this.setState({ inputFocus: true, chipFocus: null }, function () {
        return _this.calculatePosition();
      });
    }, _this.handleInputBlur = function () {
      _this.setState({ inputFocus: false }, function () {
        return _this.calculatePosition();
      });
    }, _this.handleContainerBlur = function () {
      _this.setState({
        chipFocus: null,
        containerFocus: false
      }, function () {
        return _this.calculatePosition();
      });
    }, _this.handleChipFocus = function (index) {
      return function () {
        _this.resetScroll();
        if (!_this.props.chipsDisabled) {
          _this.setState({
            chipFocus: index
          }, function () {
            return _this.calculatePosition();
          });
        }
      };
    }, _this.filterOptionsSelected = function (options) {
      var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.selected;
      var fields = _this.props.fields;

      var selectedValues = selected.map(function (item) {
        return item[fields.value];
      });

      return options.filter(function (option) {
        return !selectedValues.includes(option[fields.value]);
      });
    }, _this.registerRef = function (name) {
      return function (ref) {
        _this[name] = ref;
      };
    }, _this.calculateChipPosition = function () {
      var containerWidth = _this.containerRef.clientWidth;
      var _this$state3 = _this.state,
          chipFocus = _this$state3.chipFocus,
          translateX = _this$state3.translateX;

      var ref = _this.chipRefs[chipFocus];

      var pos = _this.chipPos(containerWidth, ref.clientWidth, ref.offsetLeft, translateX);

      if (pos !== null && pos < 0) {
        _this.setState({ translateX: pos });
      }
    }, _this.chipPos = function (containerWidth, chipWidth, chipOffset, translateX) {
      if (chipOffset + chipWidth > containerWidth + translateX) {
        return -(chipOffset - (containerWidth - chipWidth));
      }

      return null;
    }, _this.alignInput = function () {
      var _this$inputContainer = _this.inputContainer,
          offsetLeft = _this$inputContainer.offsetLeft,
          clientWidth = _this$inputContainer.clientWidth;

      var containerWidth = _this.containerRef.clientWidth;
      var translateX = -(offsetLeft - (containerWidth - clientWidth));
      _this.setState({ translateX: translateX });
    }, _this.calculatePosition = function () {
      var selected = _this.props.selected;
      var _this$state4 = _this.state,
          chipFocus = _this$state4.chipFocus,
          inputFocus = _this$state4.inputFocus;


      if (selected.length === 0) {
        return _this.setState({ translateX: 0 });
      }

      if (inputFocus) {
        return _this.alignInput();
      }

      if (chipFocus !== null) {
        if (chipFocus === 0) {
          return _this.setState({ translateX: 0 });
        }

        return _this.calculateChipPosition();
      }

      if (!inputFocus && !chipFocus !== null) {
        _this.setState({ translateX: 0 });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MaterialChips, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
      this.configureFuse();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.disabled && nextProps.disabled) {
        this.reset();
      }

      if (this.props.selected !== nextProps.selected || this.props.options !== nextProps.options) {
        this.configureFuse(this.filterOptionsSelected(nextProps.options, nextProps.selected));
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /*
    * Handle search stuff, with fuse.js
    */


    // reset when click outside component

  }, {
    key: 'renderChips',
    value: function renderChips() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          fields = _props.fields,
          chipsDisabled = _props.chipsDisabled,
          selected = _props.selected;
      var chipFocus = this.state.chipFocus;


      return selected.map(function (chip, index) {
        var chipsProps = {
          chip: chip,
          label: chip[fields.label],
          className: (0, _classnames2.default)(classes.chip, index === chipFocus && classes.chipFocus),
          onClick: function onClick() {
            // input need focus before to "onCopy" work
            _this2.input.focus();
            _this2.focusChip(index);
          }
        };

        if (!chipsDisabled) {
          chipsProps.onDelete = _this2.deleteItem(chip);
        }

        return _react2.default.createElement(
          'div',
          {
            ref: function ref(_ref3) {
              _this2.chipRefs[index] = _ref3;
            },
            onFocus: _this2.handleChipFocus(index),
            key: 'chip-' + chip[fields.value],
            className: classes.chipWrapper
          },
          _this2.props.chipComponent(chipsProps)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          classes = _props2.classes,
          disabled = _props2.disabled,
          selected = _props2.selected,
          label = _props2.label,
          inputDisabled = _props2.inputDisabled;
      var _state = this.state,
          input = _state.input,
          error = _state.error,
          containerFocus = _state.containerFocus,
          chipFocus = _state.chipFocus,
          optionsOpen = _state.optionsOpen,
          inputFocus = _state.inputFocus;

      var labelShrinked = selected.length > 0 || input.length > 0;
      var labelFocused = containerFocus || chipFocus || inputFocus;

      var formClasses = (0, _classnames2.default)(classes.inkbar, classes.underline, containerFocus && classes.focused, error && error.length > 0 && classes.error, disabled && classes.disabled, classes.formControl);

      return _react2.default.createElement(
        'div',
        _extends({
          className: classes.container,
          ref: this.registerRef('containerRef'),
          onFocus: this.handleContainerFocus,
          onBlur: this.handleContainerBlur,
          onKeyPress: this.handleKeyPress,
          tabIndex: -1,
          onPaste: this.handlePaste
        }, (0, _helpers.keysWatcher)(this.handleKeyDown, this.handleCopy)),
        _react2.default.createElement(
          _Form.FormControl,
          { className: formClasses, error: error && error.length > 0, fullWidth: true, margin: 'dense' },
          _react2.default.createElement(
            _Input.InputLabel,
            { shrink: labelShrinked, margin: 'dense', focused: labelFocused },
            label
          ),
          _react2.default.createElement(
            'div',
            { className: classes.chipsWrapper, ref: this.registerRef('chipsWrapper') },
            _react2.default.createElement(
              'div',
              { className: classes.chips, ref: this.registerRef('chips') },
              this.renderChips(),
              _react2.default.createElement(
                'div',
                { ref: this.registerRef('inputContainer'), className: classes.inputContainer },
                _react2.default.createElement(_Input2.default, {
                  className: classes.input,
                  onBlur: this.handleInputBlur,
                  onFocus: this.handleInputFocus,
                  onChange: this.handleInputChange,
                  disabled: disabled || inputDisabled,
                  disableUnderline: true,
                  margin: 'dense',
                  inputRef: this.registerRef('input'),
                  value: input,
                  inputProps: { spellCheck: false }
                })
              )
            )
          ),
          error && _react2.default.createElement(
            _Form.FormHelperText,
            { className: classes.errorText },
            error
          )
        ),
        _react2.default.createElement(this.OptionsComponent, {
          open: optionsOpen,
          options: this.state.options,
          focus: this.state.optionsFocus,
          onSelect: this.addItemObject,
          fields: this.props.fields,
          optionsClasses: this.props.optionsClasses
        })
      );
    }
  }]);

  return MaterialChips;
}(_react.Component);

MaterialChips.propTypes = {
  /** disable delete button on chips */
  chipsDisabled: _propTypes2.default.bool,

  /** Classes from material-ui withStyles() */
  classes: _propTypes2.default.object,

  /** clear input text after add an item */
  clearAfterAdd: _propTypes2.default.bool,

  /** react component to render a chip */
  chipComponent: _propTypes2.default.func,

  /** Disable input */
  disabled: _propTypes2.default.bool,

  /** Custom fields names */
  fields: _propTypes2.default.shape({ label: _propTypes2.default.string, value: _propTypes2.default.string }),

  /** To mimic a select field */
  fixedOptions: _propTypes2.default.bool,

  /** disable input field */
  inputDisabled: _propTypes2.default.bool,

  /** Props wich will be passed directly to component */
  // inputProps: PropTypes.object,

  /** label for input */
  label: _propTypes2.default.string,

  /** Should return a new chip, receive fields filled   */
  makeChip: _propTypes2.default.func,

  /** Callback fired when user add or remove one chip,
   * return arrayOf selected items after change  */
  onChange: _propTypes2.default.func,

  /** Callback fired when user type something in input, return input string */
  onSearch: _propTypes2.default.func,

  /** auto open autocomplete options on focus container */
  openOnFocus: _propTypes2.default.bool,

  /** To show in autocomplete  */
  options: _propTypes2.default.arrayOf(_propTypes2.default.object),

  /** fn(theme) => ({ optionsContainer, optionsContainerOpen }) to override options styles */
  optionsClasses: _propTypes2.default.func,

  /** Must receive state from props */
  selected: _propTypes2.default.arrayOf(_propTypes2.default.object),

  /** Keycodes to watch when user keydown, to fire internal add method */
  submitKeyCodes: _propTypes2.default.arrayOf(_propTypes2.default.number),

  /** Array of validators, will be executed to verify if input can be a chip */
  validators: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    message: _propTypes2.default.string, validator: _propTypes2.default.func
  }))
};
MaterialChips.defaultProps = {
  label: '',
  openOnFocus: false,
  chipsDisabled: false,
  inputDisabled: false,
  options: [],
  submitKeyCodes: [13, 9, 191],
  clearAfterAdd: true,
  fields: { label: 'label', value: 'value' },
  makeChip: function makeChip(chip) {
    return chip;
  },
  chipComponent: _Chip2.default,
  selected: []
};
exports.default = (0, _styles.withStyles)(_styles3.default)(MaterialChips);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.2.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Fuse", [], factory);
	else if(typeof exports === 'object')
		exports["Fuse"] = factory();
	else
		root["Fuse"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bitapRegexSearch = __webpack_require__(5);
var bitapSearch = __webpack_require__(7);
var patternAlphabet = __webpack_require__(4);

var Bitap = function () {
  function Bitap(pattern, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === undefined ? false : _ref$isCaseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

    _classCallCheck(this, Bitap);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: isCaseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength
    };

    this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();

    if (this.pattern.length <= maxPatternLength) {
      this.patternAlphabet = patternAlphabet(this.pattern);
    }
  }

  _createClass(Bitap, [{
    key: 'search',
    value: function search(text) {
      if (!this.options.isCaseSensitive) {
        text = text.toLowerCase();
      }

      // Exact match
      if (this.pattern === text) {
        return {
          isMatch: true,
          score: 0,
          matchedIndices: [[0, text.length - 1]]
        };
      }

      // When pattern length is greater than the machine word length, just do a a regex comparison
      var _options = this.options,
          maxPatternLength = _options.maxPatternLength,
          tokenSeparator = _options.tokenSeparator;

      if (this.pattern.length > maxPatternLength) {
        return bitapRegexSearch(text, this.pattern, tokenSeparator);
      }

      // Otherwise, use Bitap algorithm
      var _options2 = this.options,
          location = _options2.location,
          distance = _options2.distance,
          threshold = _options2.threshold,
          findAllMatches = _options2.findAllMatches,
          minMatchCharLength = _options2.minMatchCharLength;

      return bitapSearch(text, this.pattern, this.patternAlphabet, {
        location: location,
        distance: distance,
        threshold: threshold,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength
      });
    }
  }]);

  return Bitap;
}();

// let x = new Bitap("od mn war", {})
// let result = x.search("Old Man's War")
// console.log(result)

module.exports = Bitap;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(0);

var deepValue = function deepValue(obj, path, list) {
  if (!path) {
    // If there's no path left, we've gotten to the object we care about.
    list.push(obj);
  } else {
    var dotIndex = path.indexOf('.');
    var firstSegment = path;
    var remaining = null;

    if (dotIndex !== -1) {
      firstSegment = path.slice(0, dotIndex);
      remaining = path.slice(dotIndex + 1);
    }

    var value = obj[firstSegment];

    if (value !== null && value !== undefined) {
      if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
        list.push(value.toString());
      } else if (isArray(value)) {
        // Search each item in the array.
        for (var i = 0, len = value.length; i < len; i += 1) {
          deepValue(value[i], remaining, list);
        }
      } else if (remaining) {
        // An object. Recurse further.
        deepValue(value, remaining, list);
      }
    }
  }

  return list;
};

module.exports = function (obj, path) {
  return deepValue(obj, path, []);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var matchedIndices = [];
  var start = -1;
  var end = -1;
  var i = 0;

  for (var len = matchmask.length; i < len; i += 1) {
    var match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        matchedIndices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    matchedIndices.push([start, i - 1]);
  }

  return matchedIndices;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern) {
  var mask = {};
  var len = pattern.length;

  for (var i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0;
  }

  for (var _i = 0; _i < len; _i += 1) {
    mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
  }

  return mask;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SPECIAL_CHARS_REGEX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

module.exports = function (text, pattern) {
  var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;

  var regex = new RegExp(pattern.replace(SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'));
  var matches = text.match(regex);
  var isMatch = !!matches;
  var matchedIndices = [];

  if (isMatch) {
    for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
      var match = matches[i];
      matchedIndices.push([text.indexOf(match), match.length - 1]);
    }
  }

  return {
    // TODO: revisit this score
    score: isMatch ? 0.5 : 1,
    isMatch: isMatch,
    matchedIndices: matchedIndices
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern, _ref) {
  var _ref$errors = _ref.errors,
      errors = _ref$errors === undefined ? 0 : _ref$errors,
      _ref$currentLocation = _ref.currentLocation,
      currentLocation = _ref$currentLocation === undefined ? 0 : _ref$currentLocation,
      _ref$expectedLocation = _ref.expectedLocation,
      expectedLocation = _ref$expectedLocation === undefined ? 0 : _ref$expectedLocation,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance;

  var accuracy = errors / pattern.length;
  var proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
  }

  return accuracy + proximity / distance;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bitapScore = __webpack_require__(6);
var matchedIndices = __webpack_require__(3);

module.exports = function (text, pattern, patternAlphabet, _ref) {
  var _ref$location = _ref.location,
      location = _ref$location === undefined ? 0 : _ref$location,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
      _ref$findAllMatches = _ref.findAllMatches,
      findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
      _ref$minMatchCharLeng = _ref.minMatchCharLength,
      minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

  var expectedLocation = location;
  // Set starting location at beginning text and initialize the alphabet.
  var textLen = text.length;
  // Highest score beyond which we give up.
  var currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  var bestLocation = text.indexOf(pattern, expectedLocation);

  var patternLen = pattern.length;

  // a mask of the matches
  var matchMask = [];
  for (var i = 0; i < textLen; i += 1) {
    matchMask[i] = 0;
  }

  if (bestLocation !== -1) {
    var score = bitapScore(pattern, {
      errors: 0,
      currentLocation: bestLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });
    currentThreshold = Math.min(score, currentThreshold);

    // What about in the other direction? (speed up)
    bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

    if (bestLocation !== -1) {
      var _score = bitapScore(pattern, {
        errors: 0,
        currentLocation: bestLocation,
        expectedLocation: expectedLocation,
        distance: distance
      });
      currentThreshold = Math.min(_score, currentThreshold);
    }
  }

  // Reset the best location
  bestLocation = -1;

  var lastBitArr = [];
  var finalScore = 1;
  var binMax = patternLen + textLen;

  var mask = 1 << patternLen - 1;

  for (var _i = 0; _i < patternLen; _i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    var binMin = 0;
    var binMid = binMax;

    while (binMin < binMid) {
      var _score3 = bitapScore(pattern, {
        errors: _i,
        currentLocation: expectedLocation + binMid,
        expectedLocation: expectedLocation,
        distance: distance
      });

      if (_score3 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    var start = Math.max(1, expectedLocation - binMid + 1);
    var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    var bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << _i) - 1;

    for (var j = finish; j >= start; j -= 1) {
      var currentLocation = j - 1;
      var charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (charMatch) {
        matchMask[currentLocation] = 1;
      }

      // First pass: exact match
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (_i !== 0) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = bitapScore(pattern, {
          errors: _i,
          currentLocation: currentLocation,
          expectedLocation: expectedLocation,
          distance: distance
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break;
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    var _score2 = bitapScore(pattern, {
      errors: _i + 1,
      currentLocation: expectedLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });

    if (_score2 > currentThreshold) {
      break;
    }

    lastBitArr = bitArr;
  }

  // Count exact matches (those with a score of 0) to be "almost" exact
  return {
    isMatch: bestLocation >= 0,
    score: finalScore === 0 ? 0.001 : finalScore,
    matchedIndices: matchedIndices(matchMask, minMatchCharLength)
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bitap = __webpack_require__(1);
var deepValue = __webpack_require__(2);
var isArray = __webpack_require__(0);

var Fuse = function () {
  function Fuse(list, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$caseSensitive = _ref.caseSensitive,
        caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? null : _ref$id,
        _ref$keys = _ref.keys,
        keys = _ref$keys === undefined ? [] : _ref$keys,
        _ref$shouldSort = _ref.shouldSort,
        shouldSort = _ref$shouldSort === undefined ? true : _ref$shouldSort,
        _ref$getFn = _ref.getFn,
        getFn = _ref$getFn === undefined ? deepValue : _ref$getFn,
        _ref$sortFn = _ref.sortFn,
        sortFn = _ref$sortFn === undefined ? function (a, b) {
      return a.score - b.score;
    } : _ref$sortFn,
        _ref$tokenize = _ref.tokenize,
        tokenize = _ref$tokenize === undefined ? false : _ref$tokenize,
        _ref$matchAllTokens = _ref.matchAllTokens,
        matchAllTokens = _ref$matchAllTokens === undefined ? false : _ref$matchAllTokens,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === undefined ? false : _ref$includeMatches,
        _ref$includeScore = _ref.includeScore,
        includeScore = _ref$includeScore === undefined ? false : _ref$includeScore,
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Fuse);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: caseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength,
      id: id,
      keys: keys,
      includeMatches: includeMatches,
      includeScore: includeScore,
      shouldSort: shouldSort,
      getFn: getFn,
      sortFn: sortFn,
      verbose: verbose,
      tokenize: tokenize,
      matchAllTokens: matchAllTokens
    };

    this.setCollection(list);
  }

  _createClass(Fuse, [{
    key: 'setCollection',
    value: function setCollection(list) {
      this.list = list;
      return list;
    }
  }, {
    key: 'search',
    value: function search(pattern) {
      this._log('---------\nSearch pattern: "' + pattern + '"');

      var _prepareSearchers2 = this._prepareSearchers(pattern),
          tokenSearchers = _prepareSearchers2.tokenSearchers,
          fullSearcher = _prepareSearchers2.fullSearcher;

      var _search2 = this._search(tokenSearchers, fullSearcher),
          weights = _search2.weights,
          results = _search2.results;

      this._computeScore(weights, results);

      if (this.options.shouldSort) {
        this._sort(results);
      }

      return this._format(results);
    }
  }, {
    key: '_prepareSearchers',
    value: function _prepareSearchers() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var tokenSearchers = [];

      if (this.options.tokenize) {
        // Tokenize on the separator
        var tokens = pattern.split(this.options.tokenSeparator);
        for (var i = 0, len = tokens.length; i < len; i += 1) {
          tokenSearchers.push(new Bitap(tokens[i], this.options));
        }
      }

      var fullSearcher = new Bitap(pattern, this.options);

      return { tokenSearchers: tokenSearchers, fullSearcher: fullSearcher };
    }
  }, {
    key: '_search',
    value: function _search() {
      var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var fullSearcher = arguments[1];

      var list = this.list;
      var resultMap = {};
      var results = [];

      // Check the first item in the list, if it's a string, then we assume
      // that every item in the list is also a string, and thus it's a flattened array.
      if (typeof list[0] === 'string') {
        // Iterate over every item
        for (var i = 0, len = list.length; i < len; i += 1) {
          this._analyze({
            key: '',
            value: list[i],
            record: i,
            index: i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }

        return { weights: null, results: results };
      }

      // Otherwise, the first item is an Object (hopefully), and thus the searching
      // is done on the values of the keys of each item.
      var weights = {};
      for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
        var item = list[_i];
        // Iterate over every key
        for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
          var key = this.options.keys[j];
          if (typeof key !== 'string') {
            weights[key.name] = {
              weight: 1 - key.weight || 1
            };
            if (key.weight <= 0 || key.weight > 1) {
              throw new Error('Key weight has to be > 0 and <= 1');
            }
            key = key.name;
          } else {
            weights[key] = {
              weight: 1
            };
          }

          this._analyze({
            key: key,
            value: this.options.getFn(item, key),
            record: item,
            index: _i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }

      return { weights: weights, results: results };
    }
  }, {
    key: '_analyze',
    value: function _analyze(_ref2, _ref3) {
      var key = _ref2.key,
          _ref2$arrayIndex = _ref2.arrayIndex,
          arrayIndex = _ref2$arrayIndex === undefined ? -1 : _ref2$arrayIndex,
          value = _ref2.value,
          record = _ref2.record,
          index = _ref2.index;
      var _ref3$tokenSearchers = _ref3.tokenSearchers,
          tokenSearchers = _ref3$tokenSearchers === undefined ? [] : _ref3$tokenSearchers,
          _ref3$fullSearcher = _ref3.fullSearcher,
          fullSearcher = _ref3$fullSearcher === undefined ? [] : _ref3$fullSearcher,
          _ref3$resultMap = _ref3.resultMap,
          resultMap = _ref3$resultMap === undefined ? {} : _ref3$resultMap,
          _ref3$results = _ref3.results,
          results = _ref3$results === undefined ? [] : _ref3$results;

      // Check if the texvaluet can be searched
      if (value === undefined || value === null) {
        return;
      }

      var exists = false;
      var averageScore = -1;
      var numTextMatches = 0;

      if (typeof value === 'string') {
        this._log('\nKey: ' + (key === '' ? '-' : key));

        var mainSearchResult = fullSearcher.search(value);
        this._log('Full text: "' + value + '", score: ' + mainSearchResult.score);

        if (this.options.tokenize) {
          var words = value.split(this.options.tokenSeparator);
          var scores = [];

          for (var i = 0; i < tokenSearchers.length; i += 1) {
            var tokenSearcher = tokenSearchers[i];

            this._log('\nPattern: "' + tokenSearcher.pattern + '"');

            // let tokenScores = []
            var hasMatchInText = false;

            for (var j = 0; j < words.length; j += 1) {
              var word = words[j];
              var tokenSearchResult = tokenSearcher.search(word);
              var obj = {};
              if (tokenSearchResult.isMatch) {
                obj[word] = tokenSearchResult.score;
                exists = true;
                hasMatchInText = true;
                scores.push(tokenSearchResult.score);
              } else {
                obj[word] = 1;
                if (!this.options.matchAllTokens) {
                  scores.push(1);
                }
              }
              this._log('Token: "' + word + '", score: ' + obj[word]);
              // tokenScores.push(obj)
            }

            if (hasMatchInText) {
              numTextMatches += 1;
            }
          }

          averageScore = scores[0];
          var scoresLen = scores.length;
          for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
            averageScore += scores[_i2];
          }
          averageScore = averageScore / scoresLen;

          this._log('Token score average:', averageScore);
        }

        var finalScore = mainSearchResult.score;
        if (averageScore > -1) {
          finalScore = (finalScore + averageScore) / 2;
        }

        this._log('Score average:', finalScore);

        var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;

        this._log('\nCheck Matches: ' + checkTextMatches);

        // If a match is found, add the item to <rawResults>, including its score
        if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
          // Check if the item already exists in our results
          var existingResult = resultMap[index];
          if (existingResult) {
            // Use the lowest score
            // existingResult.score, bitapResult.score
            existingResult.output.push({
              key: key,
              arrayIndex: arrayIndex,
              value: value,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            });
          } else {
            // Add it to the raw result list
            resultMap[index] = {
              item: record,
              output: [{
                key: key,
                arrayIndex: arrayIndex,
                value: value,
                score: finalScore,
                matchedIndices: mainSearchResult.matchedIndices
              }]
            };

            results.push(resultMap[index]);
          }
        }
      } else if (isArray(value)) {
        for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
          this._analyze({
            key: key,
            arrayIndex: _i3,
            value: value[_i3],
            record: record,
            index: index
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }
    }
  }, {
    key: '_computeScore',
    value: function _computeScore(weights, results) {
      this._log('\n\nComputing score:\n');

      for (var i = 0, len = results.length; i < len; i += 1) {
        var output = results[i].output;
        var scoreLen = output.length;

        var totalScore = 0;
        var bestScore = 1;

        for (var j = 0; j < scoreLen; j += 1) {
          var weight = weights ? weights[output[j].key].weight : 1;
          var score = weight === 1 ? output[j].score : output[j].score || 0.001;
          var nScore = score * weight;

          if (weight !== 1) {
            bestScore = Math.min(bestScore, nScore);
          } else {
            output[j].nScore = nScore;
            totalScore += nScore;
          }
        }

        results[i].score = bestScore === 1 ? totalScore / scoreLen : bestScore;

        this._log(results[i]);
      }
    }
  }, {
    key: '_sort',
    value: function _sort(results) {
      this._log('\n\nSorting....');
      results.sort(this.options.sortFn);
    }
  }, {
    key: '_format',
    value: function _format(results) {
      var finalOutput = [];

      this._log('\n\nOutput:\n\n', JSON.stringify(results));

      var transformers = [];

      if (this.options.includeMatches) {
        transformers.push(function (result, data) {
          var output = result.output;
          data.matches = [];

          for (var i = 0, len = output.length; i < len; i += 1) {
            var item = output[i];

            if (item.matchedIndices.length === 0) {
              continue;
            }

            var obj = {
              indices: item.matchedIndices,
              value: item.value
            };
            if (item.key) {
              obj.key = item.key;
            }
            if (item.hasOwnProperty('arrayIndex') && item.arrayIndex > -1) {
              obj.arrayIndex = item.arrayIndex;
            }
            data.matches.push(obj);
          }
        });
      }

      if (this.options.includeScore) {
        transformers.push(function (result, data) {
          data.score = result.score;
        });
      }

      for (var i = 0, len = results.length; i < len; i += 1) {
        var result = results[i];

        if (this.options.id) {
          result.item = this.options.getFn(result.item, this.options.id)[0];
        }

        if (!transformers.length) {
          finalOutput.push(result.item);
          continue;
        }

        var data = {
          item: result.item
        };

        for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
          transformers[j](result, data);
        }

        finalOutput.push(data);
      }

      return finalOutput;
    }
  }, {
    key: '_log',
    value: function _log() {
      if (this.options.verbose) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }]);

  return Fuse;
}();

module.exports = Fuse;

/***/ })
/******/ ]);
});
//# sourceMappingURL=fuse.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(9);

var defaultMessage = 'Copy to clipboard: #{key}, Enter';

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) { options = {}; }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement('span');
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = 'unset';
    // prevents scrolling to the end of the page
    mark.style.position = 'fixed';
    mark.style.top = 0;
    mark.style.clip = 'rect(0, 0, 0, 0)';
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = 'pre';
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = 'text';
    mark.style.MozUserSelect = 'text';
    mark.style.msUserSelect = 'text';
    mark.style.userSelect = 'text';

    document.body.appendChild(mark);

    range.selectNode(mark);
    selection.addRange(range);

    var successful = document.execCommand('copy');
    if (!successful) {
      throw new Error('copy command was unsuccessful');
    }
    success = true;
  } catch (err) {
    debug && console.error('unable to copy using execCommand: ', err);
    debug && console.warn('trying IE specific stuff');
    try {
      window.clipboardData.setData('text', text);
      success = true;
    } catch (err) {
      debug && console.error('unable to copy using clipboardData: ', err);
      debug && console.error('falling back to prompt');
      message = format('message' in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == 'function') {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),
/* 9 */
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Chip = __webpack_require__(11);

var _Chip2 = _interopRequireDefault(_Chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChipComponent(props) {
  var chipProps = Object.assign({}, props);
  delete chipProps.chip;

  return _react2.default.createElement(_Chip2.default, chipProps);
}

ChipComponent.propTypes = {
  label: _propTypes2.default.string,
  className: _propTypes2.default.string,
  onDelete: _propTypes2.default.func,
  chip: _propTypes2.default.object
};

exports.default = ChipComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Paper = __webpack_require__(13);

var _Paper2 = _interopRequireDefault(_Paper);

var _Menu = __webpack_require__(14);

var _styles = __webpack_require__(2);

var _deepmerge = __webpack_require__(15);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    optionsContainer: {
      display: 'none',
      maxHeight: 300,
      overflowY: 'auto'
    },
    optionsContainerOpen: {
      position: 'absolute',
      display: 'block',
      zIndex: 90,
      marginBottom: theme.spacing.unit * 3,
      left: 0,
      top: '100%',
      right: 0
    }
  };
};

function addBold(start, end, str) {
  return str.slice(0, start) + '<b>' + str.slice(start, end + 1) + '</b>' + str.slice(end + 1, str.length);
}

function showLabel(_ref, _ref2) {
  var item = _ref.item,
      matches = _ref.matches;
  var label = _ref2.label;

  var match = matches.find(function (i) {
    return i.key === label;
  });

  if (match) {
    return match.indices.reduce(function (acc, curr) {
      acc.result = addBold(curr[0] + acc.count, curr[1] + acc.count, acc.result);
      acc.count += 7;

      return acc;
    }, { count: 0, result: match.value }).result;
  }

  return item[label];
}

var Options = function Options(_ref3) {
  var classes = _ref3.classes,
      open = _ref3.open,
      options = _ref3.options,
      onSelect = _ref3.onSelect,
      fields = _ref3.fields,
      focus = _ref3.focus;

  var containerOpen = open && options.length > 0;
  var containerClasses = (0, _classnames2.default)(classes.optionsContainer, containerOpen && classes.optionsContainerOpen);

  return _react2.default.createElement(
    _Paper2.default,
    { className: containerClasses, square: true },
    options.map(function (item, index) {
      var option = item.item;
      return _react2.default.createElement(
        _Menu.MenuItem,
        {
          key: option.label + option.value,
          onClick: function onClick() {
            return onSelect(option);
          },
          classes: {
            root: classes.menuItemRoot,
            selected: classes.menuItemSelected
          },
          selected: focus === index
        },
        _react2.default.createElement('span', {
          dangerouslySetInnerHTML: { __html: showLabel(item, fields) } // eslint-disable-line
        })
      );
    })
  );
};

Options.propTypes = {
  classes: _propTypes2.default.object,
  open: _propTypes2.default.bool,
  options: _propTypes2.default.arrayOf(_propTypes2.default.object),
  onSelect: _propTypes2.default.func,
  fields: _propTypes2.default.object,
  focus: _propTypes2.default.number
};

exports.default = function (customStyles) {
  if (customStyles) {
    return (0, _styles.withStyles)(function (theme) {
      return (0, _deepmerge2.default)(styles(theme), customStyles(theme));
    })(Options);
  }

  return (0, _styles.withStyles)(styles)(Options);
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, optionsArgument) {
	var clone = !optionsArgument || optionsArgument.clone !== false;

	return (clone && isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, optionsArgument)
		: value
}

function defaultArrayMerge(target, source, optionsArgument) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, optionsArgument)
	})
}

function mergeObject(target, source, optionsArgument) {
	var destination = {};
	if (isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], optionsArgument);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], optionsArgument);
		} else {
			destination[key] = deepmerge(target[key], source[key], optionsArgument);
		}
	});
	return destination
}

function deepmerge(target, source, optionsArgument) {
	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var options = optionsArgument || { arrayMerge: defaultArrayMerge };
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, optionsArgument)
	} else if (sourceIsArray) {
		var arrayMerge = options.arrayMerge || defaultArrayMerge;
		return arrayMerge(target, source, optionsArgument)
	} else {
		return mergeObject(target, source, optionsArgument)
	}
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, optionsArgument)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["default"] = (deepmerge_1);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acceptedCharCodes = acceptedCharCodes;
exports.validate = validate;
exports.mimicFuseSearch = mimicFuseSearch;
exports.keysWatcher = keysWatcher;
var TYPES = exports.TYPES = {
  ESCAPE: [27],
  LEFT: [37],
  RIGHT: [39],
  CTRL: [17],
  C: [67],
  UP: [38],
  DOWN: [40],
  BACKSPACE: [8],
  TAB: [9],
  DELETE_CODES: [46, 8]
};

function acceptedCharCodes(code) {
  return code > 64 && code < 123;
}

function validate(value, validators, selected) {
  if (!validators || validators.length === 0) {
    return false;
  }

  return validators.reduce(function (acc, curr) {
    if (!acc && curr.validator(value, selected)) {
      return curr.message;
    }

    return acc;
  }, false);
}

function mimicFuseSearch(options) {
  return options.map(function (option) {
    return {
      matches: [],
      item: option
    };
  });
}

function keysWatcher(handleKeyDown, handleCopy) {
  var ctrlPressed = false;

  return {
    onKeyDown: function onKeyDown(e) {
      if (TYPES.CTRL.includes(e.keyCode)) {
        ctrlPressed = true;
      }

      if (ctrlPressed && TYPES.C.includes(e.keyCode)) {
        handleCopy(e);
      }

      handleKeyDown(e);
    },
    onKeyUp: function onKeyUp(e) {
      if (TYPES.CTRL.includes(e.keyCode)) {
        ctrlPressed = false;
      }
    }
  };
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = function styles(theme) {
  return {
    container: {
      position: 'relative',
      width: '100%',
      '&:focus': {
        outline: 'none'
      }
    },
    formControl: {
      transition: '.3s ease',
      display: 'flex',
      marginBottom: theme.spacing.unit / 2
    },
    inputContainer: {
      display: 'inline-flex',
      flex: '1 0 auto'
    },
    chipsWrapper: {
      position: 'relative',
      flex: '1 0 auto'
    },
    chips: {
      position: 'relative',
      minWidth: '100%',
      flexWrap: 'wrap',
      marginTop: 15,
      transition: '.3s ease',
      display: 'inline-flex'
    },
    chipFocus: {
      '&$chip > svg': {
        color: theme.palette.primary[500]
      }
    },
    chip: {
      display: 'inline-flex',
      height: 20,
      padding: 4,
      margin: theme.spacing.unit / 4,
      '&:hover:not($chipFocus) > svg': {
        color: theme.palette.primary[400],
        '&:hover': {
          color: theme.palette.primary[500]
        }
      },
      '& > svg': {
        color: theme.palette.grey[700],
        width: 16
      }
    },
    error: {
      marginBottom: theme.spacing.unit * 3
    },
    errorText: {
      position: 'absolute',
      bottom: -15
    },
    chipWrapper: {
      display: 'inline-flex',
      '&:last-child': {
        marginRight: theme.spacing.unit / 3 * 2
      }
    },
    input: {
      paddingTop: 2,
      fontSize: 13,
      flex: '1 0 auto'
    },
    disabled: {
      color: theme.palette.text.disabled
    },
    inkbar: {
      '&:after': {
        backgroundColor: theme.palette.primary[theme.palette.type === 'light' ? 'A700' : 'A200'],
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        height: 2,
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        })
      },
      '&$error:after': {
        backgroundColor: theme.palette.error.A400
      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      }
    },
    focused: {},
    underline: {
      '&:before': {
        backgroundColor: theme.palette.input.bottomLine,
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        height: 1,
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.ease
        })
      },
      '&:hover:not($disabled):before': {
        backgroundColor: theme.palette.text.primary,
        height: 2
      },
      '&$error:before': {
        backgroundColor: theme.palette.error.A400,
        transform: 'scaleX(1)' // error is always underlined in red
      },
      '&$disabled:before': {
        background: 'transparent',
        backgroundImage: 'linear-gradient(to right, ' + theme.palette.input.bottomLine + ' 33%, transparent 0%)',
        backgroundPosition: 'left top',
        backgroundRepeat: 'repeat-x',
        backgroundSize: '5px 1px'
      }
    }
  };
};

exports.default = styles;

/***/ })
/******/ ]);
});
//# sourceMappingURL=material-input-chips.js.map