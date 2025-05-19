'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _arrays = _interopRequireDefault(require('shallow-equal/arrays'));
var _Autowhatever = _interopRequireDefault(require('./Autowhatever'));
var _theme = require('./theme');
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
function _interopRequireWildcard(e, t) {
  if ('function' == typeof WeakMap)
    var r = new WeakMap(),
      n = new WeakMap();
  return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      f = { __proto__: null, default: e };
    if (null === e || ('object' != _typeof(e) && 'function' != typeof e))
      return f;
    if ((o = t ? n : r)) {
      if (o.has(e)) return o.get(e);
      o.set(e, f);
    }
    for (var _t in e)
      'default' !== _t &&
        {}.hasOwnProperty.call(e, _t) &&
        ((i =
          (o = Object.defineProperty) &&
          Object.getOwnPropertyDescriptor(e, _t)) &&
        (i.get || i.set)
          ? o(f, _t, i)
          : (f[_t] = e[_t]));
    return f;
  })(e, t);
}
function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _callSuper(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e)
    )
  );
}
function _possibleConstructorReturn(t, e) {
  if (e && ('object' == _typeof(e) || 'function' == typeof e)) return e;
  if (void 0 !== e)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    );
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _getPrototypeOf(t) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _getPrototypeOf(t)
  );
}
function _inherits(t, e) {
  if ('function' != typeof e && null !== e)
    throw new TypeError('Super expression must either be null or a function');
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        }),
    _setPrototypeOf(t, e)
  );
}
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : i + '';
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
var alwaysTrue = function alwaysTrue() {
  return true;
};
var defaultShouldRenderSuggestions = function defaultShouldRenderSuggestions(
  value
) {
  return value.trim().length > 0;
};
var defaultRenderSuggestionsContainer =
  function defaultRenderSuggestionsContainer(_ref) {
    var containerProps = _ref.containerProps,
      children = _ref.children;
    return /*#__PURE__*/ _react['default'].createElement(
      'div',
      containerProps,
      children
    );
  };
var REASON_SUGGESTIONS_REVEALED = 'suggestions-revealed';
var REASON_SUGGESTIONS_UPDATED = 'suggestions-updated';
var REASON_SUGGESTION_SELECTED = 'suggestion-selected';
var REASON_INPUT_FOCUSED = 'input-focused';
var REASON_INPUT_CHANGED = 'input-changed';
var REASON_INPUT_BLURRED = 'input-blurred';
var REASON_ESCAPE_PRESSED = 'escape-pressed';
var Autosuggest = (exports['default'] = /*#__PURE__*/ (function (_Component) {
  function Autosuggest(_ref2) {
    var _this;
    var _alwaysRenderSuggestions = _ref2.alwaysRenderSuggestions;
    _classCallCheck(this, Autosuggest);
    _this = _callSuper(this, Autosuggest);
    _defineProperty(_this, 'onDocumentMouseDown', function (event) {
      _this.justClickedOnSuggestionsContainer = false;
      var node =
        (event.detail && event.detail.target) ||
        // This is for testing only. Please show me a better way to emulate this.
        event.target;
      while (node !== null && node !== document) {
        if (
          node.getAttribute &&
          node.getAttribute('data-suggestion-index') !== null
        ) {
          // Suggestion was clicked
          return;
        }
        if (node === _this.suggestionsContainer) {
          // Something else inside suggestions container was clicked
          _this.justClickedOnSuggestionsContainer = true;
          return;
        }
        node = node.parentNode;
      }
    });
    _defineProperty(_this, 'storeAutowhateverRef', function (autowhatever) {
      if (autowhatever !== null) {
        _this.autowhatever = autowhatever;
      }
    });
    _defineProperty(_this, 'onSuggestionMouseEnter', function (event, _ref3) {
      var sectionIndex = _ref3.sectionIndex,
        itemIndex = _ref3.itemIndex;
      _this.updateHighlightedSuggestion(sectionIndex, itemIndex);
      if (event.target === _this.pressedSuggestion) {
        _this.justSelectedSuggestion = true;
      }
      _this.justMouseEntered = true;
      setTimeout(function () {
        _this.justMouseEntered = false;
      });
    });
    // highlightFirstSuggestion = () => {
    //   this.updateHighlightedSuggestion(this.props.multiSection ? 0 : null, 0);
    // };
    _defineProperty(_this, 'onDocumentMouseUp', function () {
      if (_this.pressedSuggestion && !_this.justSelectedSuggestion) {
        _this.input.focus();
      }
      _this.pressedSuggestion = null;
    });
    _defineProperty(_this, 'onSuggestionMouseDown', function (event) {
      // Checking if this.justSelectedSuggestion is already true to not duplicate touch events in chrome
      // See: https://github.com/facebook/react/issues/9809#issuecomment-413978405
      if (!_this.justSelectedSuggestion) {
        _this.justSelectedSuggestion = true;
        _this.pressedSuggestion = event.target;
      }
    });
    _defineProperty(_this, 'onSuggestionsClearRequested', function () {
      var onSuggestionsClearRequested = _this.props.onSuggestionsClearRequested;
      onSuggestionsClearRequested && onSuggestionsClearRequested();
    });
    _defineProperty(_this, 'onSuggestionSelected', function (event, data) {
      var _this$props = _this.props,
        alwaysRenderSuggestions = _this$props.alwaysRenderSuggestions,
        onSuggestionSelected = _this$props.onSuggestionSelected,
        onSuggestionsFetchRequested = _this$props.onSuggestionsFetchRequested;
      onSuggestionSelected && onSuggestionSelected(event, data);
      var keepSuggestionsOnSelect = _this.props.shouldKeepSuggestionsOnSelect(
        data.suggestion
      );
      if (alwaysRenderSuggestions || keepSuggestionsOnSelect) {
        onSuggestionsFetchRequested({
          value: data.suggestionValue,
          reason: REASON_SUGGESTION_SELECTED,
        });
      } else {
        _this.onSuggestionsClearRequested();
      }
      _this.resetHighlightedSuggestion();
    });
    _defineProperty(_this, 'onSuggestionClick', function (event) {
      var _this$props2 = _this.props,
        alwaysRenderSuggestions = _this$props2.alwaysRenderSuggestions,
        focusInputOnSuggestionClick = _this$props2.focusInputOnSuggestionClick;
      var _this$getSuggestionIn = _this.getSuggestionIndices(
          _this.findSuggestionElement(event.target)
        ),
        sectionIndex = _this$getSuggestionIn.sectionIndex,
        suggestionIndex = _this$getSuggestionIn.suggestionIndex;
      var clickedSuggestion = _this.getSuggestion(
        sectionIndex,
        suggestionIndex
      );
      var clickedSuggestionValue =
        _this.props.getSuggestionValue(clickedSuggestion);
      _this.maybeCallOnChange(event, clickedSuggestionValue, 'click');
      _this.onSuggestionSelected(event, {
        suggestion: clickedSuggestion,
        suggestionValue: clickedSuggestionValue,
        suggestionIndex: suggestionIndex,
        sectionIndex: sectionIndex,
        method: 'click',
      });
      var keepSuggestionsOnSelect =
        _this.props.shouldKeepSuggestionsOnSelect(clickedSuggestion);
      if (!(alwaysRenderSuggestions || keepSuggestionsOnSelect)) {
        _this.closeSuggestions();
      }
      if (focusInputOnSuggestionClick === true) {
        _this.input.focus();
      } else {
        _this.onBlur();
      }
      setTimeout(function () {
        _this.justSelectedSuggestion = false;
      });
    });
    _defineProperty(_this, 'onBlur', function () {
      var _this$props3 = _this.props,
        inputProps = _this$props3.inputProps,
        shouldRenderSuggestions = _this$props3.shouldRenderSuggestions;
      var value = inputProps.value,
        onBlur = inputProps.onBlur;
      var highlightedSuggestion = _this.getHighlightedSuggestion();
      var shouldRender = shouldRenderSuggestions(value, REASON_INPUT_BLURRED);
      _this.setState({
        isFocused: false,
        highlightedSectionIndex: null,
        highlightedSuggestionIndex: null,
        highlightedSuggestion: null,
        valueBeforeUpDown: null,
        isCollapsed: !shouldRender,
      });
      onBlur &&
        onBlur(_this.blurEvent, {
          highlightedSuggestion: highlightedSuggestion,
        });
    });
    _defineProperty(_this, 'onSuggestionMouseLeave', function (event) {
      _this.resetHighlightedSuggestion(false); // shouldResetValueBeforeUpDown

      if (
        _this.justSelectedSuggestion &&
        event.target === _this.pressedSuggestion
      ) {
        _this.justSelectedSuggestion = false;
      }
    });
    _defineProperty(_this, 'onSuggestionTouchStart', function () {
      _this.justSelectedSuggestion = true;
      // todo: event.preventDefault when https://github.com/facebook/react/issues/2043
      // todo: gets released so onSuggestionMouseDown won't fire in chrome
    });
    _defineProperty(_this, 'onSuggestionTouchMove', function () {
      _this.justSelectedSuggestion = false;
      _this.pressedSuggestion = null;
      _this.input.focus();
    });
    _defineProperty(_this, 'itemProps', function (_ref4) {
      var sectionIndex = _ref4.sectionIndex,
        itemIndex = _ref4.itemIndex;
      return {
        'data-section-index': sectionIndex,
        'data-suggestion-index': itemIndex,
        onMouseEnter: _this.onSuggestionMouseEnter,
        onMouseLeave: _this.onSuggestionMouseLeave,
        onMouseDown: _this.onSuggestionMouseDown,
        onTouchStart: _this.onSuggestionTouchStart,
        onTouchMove: _this.onSuggestionTouchMove,
        onClick: _this.onSuggestionClick,
      };
    });
    _defineProperty(_this, 'renderSuggestionsContainer', function (_ref5) {
      var containerProps = _ref5.containerProps,
        children = _ref5.children;
      var renderSuggestionsContainer = _this.props.renderSuggestionsContainer;
      return renderSuggestionsContainer({
        containerProps: containerProps,
        children: children,
        query: _this.getQuery(),
      });
    });
    _this.state = {
      isFocused: false,
      isCollapsed: !_alwaysRenderSuggestions,
      highlightedSectionIndex: null,
      highlightedSuggestionIndex: null,
      highlightedSuggestion: null,
      valueBeforeUpDown: null,
    };
    _this.justPressedUpDown = false;
    _this.justMouseEntered = false;
    _this.pressedSuggestion = null;
    return _this;
  }
  _inherits(Autosuggest, _Component);
  return _createClass(
    Autosuggest,
    [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          document.addEventListener('mousedown', this.onDocumentMouseDown);
          document.addEventListener('mouseup', this.onDocumentMouseUp);
          this.input = this.autowhatever.input;
          this.suggestionsContainer = this.autowhatever.itemsContainer;
        },

        /**
      When highlightFirstSuggestion becomes deactivated, if the first suggestion was
      set, we should reset the suggestion back to the unselected default state.
    */
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
          var _this$props4 = this.props,
            onSuggestionHighlighted = _this$props4.onSuggestionHighlighted,
            highlightFirstSuggestion = _this$props4.highlightFirstSuggestion,
            suggestions = _this$props4.suggestions,
            multiSection = _this$props4.multiSection;
          var highlightedSuggestionIndex =
            this.state.highlightedSuggestionIndex;
          var hasSuggestions = suggestions.length > 0;
          var suggestionsDidChange = !(0, _arrays['default'])(
            suggestions,
            prevProps.suggestions
          );
          if (
            hasSuggestions &&
            suggestionsDidChange &&
            highlightFirstSuggestion
          ) {
            this.updateHighlightedSuggestion(multiSection ? 0 : null, 0);
          }
          if (
            prevProps.highlightFirstSuggestion &&
            !highlightFirstSuggestion &&
            highlightedSuggestionIndex === 0
          ) {
            this.resetHighlightedSuggestion();
          }
          if (onSuggestionHighlighted) {
            var highlightedSuggestion = this.getHighlightedSuggestion();
            var prevHighlightedSuggestion = prevState.highlightedSuggestion;
            if (highlightedSuggestion !== prevHighlightedSuggestion) {
              onSuggestionHighlighted({
                suggestion: highlightedSuggestion,
              });
            }
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          document.removeEventListener('mousedown', this.onDocumentMouseDown);
          document.removeEventListener('mouseup', this.onDocumentMouseUp);
        },
      },
      {
        key: 'updateHighlightedSuggestion',
        value: function updateHighlightedSuggestion(
          sectionIndex,
          suggestionIndex,
          prevValue
        ) {
          var _this2 = this;
          this.setState(function (state) {
            var valueBeforeUpDown = state.valueBeforeUpDown;
            if (suggestionIndex === null) {
              valueBeforeUpDown = null;
            } else if (
              valueBeforeUpDown === null &&
              typeof prevValue !== 'undefined'
            ) {
              valueBeforeUpDown = prevValue;
            }
            return {
              highlightedSectionIndex: sectionIndex,
              highlightedSuggestionIndex: suggestionIndex,
              highlightedSuggestion:
                suggestionIndex === null
                  ? null
                  : _this2.getSuggestion(sectionIndex, suggestionIndex),
              valueBeforeUpDown: valueBeforeUpDown,
            };
          });
        },
      },
      {
        key: 'resetHighlightedSuggestion',
        value: function resetHighlightedSuggestion() {
          var shouldResetValueBeforeUpDown =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : true;
          this.setState(function (state) {
            var valueBeforeUpDown = state.valueBeforeUpDown;
            return {
              highlightedSectionIndex: null,
              highlightedSuggestionIndex: null,
              highlightedSuggestion: null,
              valueBeforeUpDown: shouldResetValueBeforeUpDown
                ? null
                : valueBeforeUpDown,
            };
          });
        },
      },
      {
        key: 'revealSuggestions',
        value: function revealSuggestions() {
          this.setState({
            isCollapsed: false,
          });
        },
      },
      {
        key: 'closeSuggestions',
        value: function closeSuggestions() {
          this.setState({
            highlightedSectionIndex: null,
            highlightedSuggestionIndex: null,
            highlightedSuggestion: null,
            valueBeforeUpDown: null,
            isCollapsed: true,
          });
        },
      },
      {
        key: 'getSuggestion',
        value: function getSuggestion(sectionIndex, suggestionIndex) {
          var _this$props5 = this.props,
            suggestions = _this$props5.suggestions,
            multiSection = _this$props5.multiSection,
            getSectionSuggestions = _this$props5.getSectionSuggestions;
          if (multiSection) {
            return getSectionSuggestions(suggestions[sectionIndex])[
              suggestionIndex
            ];
          }
          return suggestions[suggestionIndex];
        },
      },
      {
        key: 'getHighlightedSuggestion',
        value: function getHighlightedSuggestion() {
          var _this$state = this.state,
            highlightedSectionIndex = _this$state.highlightedSectionIndex,
            highlightedSuggestionIndex = _this$state.highlightedSuggestionIndex;
          if (highlightedSuggestionIndex === null) {
            return null;
          }
          return this.getSuggestion(
            highlightedSectionIndex,
            highlightedSuggestionIndex
          );
        },
      },
      {
        key: 'getSuggestionValueByIndex',
        value: function getSuggestionValueByIndex(
          sectionIndex,
          suggestionIndex
        ) {
          var getSuggestionValue = this.props.getSuggestionValue;
          return getSuggestionValue(
            this.getSuggestion(sectionIndex, suggestionIndex)
          );
        },
      },
      {
        key: 'getSuggestionIndices',
        value: function getSuggestionIndices(suggestionElement) {
          var sectionIndex =
            suggestionElement.getAttribute('data-section-index');
          var suggestionIndex = suggestionElement.getAttribute(
            'data-suggestion-index'
          );
          return {
            sectionIndex:
              typeof sectionIndex === 'string'
                ? parseInt(sectionIndex, 10)
                : null,
            suggestionIndex: parseInt(suggestionIndex, 10),
          };
        },
      },
      {
        key: 'findSuggestionElement',
        value: function findSuggestionElement(startNode) {
          var node = startNode;
          do {
            if (
              node.getAttribute &&
              node.getAttribute('data-suggestion-index') !== null
            ) {
              return node;
            }
            node = node.parentNode;
          } while (node !== null);
          console.error('Clicked element:', startNode); // eslint-disable-line no-console
          throw new Error("Couldn't find suggestion element");
        },
      },
      {
        key: 'maybeCallOnChange',
        value: function maybeCallOnChange(event, newValue, method) {
          var _this$props$inputProp = this.props.inputProps,
            value = _this$props$inputProp.value,
            onChange = _this$props$inputProp.onChange;
          if (newValue !== value) {
            onChange(event, {
              newValue: newValue,
              method: method,
            });
          }
        },
      },
      {
        key: 'willRenderSuggestions',
        value: function willRenderSuggestions(props, reason) {
          var suggestions = props.suggestions,
            inputProps = props.inputProps,
            shouldRenderSuggestions = props.shouldRenderSuggestions;
          var value = inputProps.value;
          return (
            suggestions.length > 0 && shouldRenderSuggestions(value, reason)
          );
        },
      },
      {
        key: 'getQuery',
        value: function getQuery() {
          var inputProps = this.props.inputProps;
          var value = inputProps.value;
          var valueBeforeUpDown = this.state.valueBeforeUpDown;
          return (
            valueBeforeUpDown === null ? value : valueBeforeUpDown
          ).trim();
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this3 = this;
          var _this$props6 = this.props,
            suggestions = _this$props6.suggestions,
            renderInputComponent = _this$props6.renderInputComponent,
            onSuggestionsFetchRequested =
              _this$props6.onSuggestionsFetchRequested,
            renderSuggestion = _this$props6.renderSuggestion,
            inputProps = _this$props6.inputProps,
            multiSection = _this$props6.multiSection,
            renderSectionTitle = _this$props6.renderSectionTitle,
            id = _this$props6.id,
            getSectionSuggestions = _this$props6.getSectionSuggestions,
            theme = _this$props6.theme,
            getSuggestionValue = _this$props6.getSuggestionValue,
            alwaysRenderSuggestions = _this$props6.alwaysRenderSuggestions,
            highlightFirstSuggestion = _this$props6.highlightFirstSuggestion,
            containerProps = _this$props6.containerProps;
          var _this$state2 = this.state,
            isFocused = _this$state2.isFocused,
            isCollapsed = _this$state2.isCollapsed,
            highlightedSectionIndex = _this$state2.highlightedSectionIndex,
            highlightedSuggestionIndex =
              _this$state2.highlightedSuggestionIndex,
            valueBeforeUpDown = _this$state2.valueBeforeUpDown;
          var shouldRenderSuggestions = alwaysRenderSuggestions
            ? alwaysTrue
            : this.props.shouldRenderSuggestions;
          var value = inputProps.value,
            _onFocus = inputProps.onFocus,
            _onKeyDown = inputProps.onKeyDown;
          var willRenderSuggestions = this.willRenderSuggestions(
            this.props,
            'render'
          );
          var isOpen =
            alwaysRenderSuggestions ||
            (isFocused && !isCollapsed && willRenderSuggestions);
          var items = isOpen ? suggestions : [];
          var autowhateverInputProps = _objectSpread(
            _objectSpread({}, inputProps),
            {},
            {
              onFocus: function onFocus(event) {
                if (
                  !_this3.justSelectedSuggestion &&
                  !_this3.justClickedOnSuggestionsContainer
                ) {
                  var shouldRender = shouldRenderSuggestions(
                    value,
                    REASON_INPUT_FOCUSED
                  );
                  _this3.setState({
                    isFocused: true,
                    isCollapsed: !shouldRender,
                  });
                  _onFocus && _onFocus(event);
                  if (shouldRender) {
                    onSuggestionsFetchRequested({
                      value: value,
                      reason: REASON_INPUT_FOCUSED,
                    });
                  }
                }
              },
              onBlur: function onBlur(event) {
                if (_this3.justClickedOnSuggestionsContainer) {
                  _this3.input.focus();
                  return;
                }
                _this3.blurEvent = event;
                if (!_this3.justSelectedSuggestion) {
                  _this3.onBlur();
                  _this3.onSuggestionsClearRequested();
                }
              },
              onChange: function onChange(event) {
                var value = event.target.value;
                var shouldRender = shouldRenderSuggestions(
                  value,
                  REASON_INPUT_CHANGED
                );
                _this3.maybeCallOnChange(event, value, 'type');
                if (_this3.suggestionsContainer) {
                  _this3.suggestionsContainer.scrollTop = 0;
                }
                _this3.setState(
                  _objectSpread(
                    _objectSpread(
                      {},
                      highlightFirstSuggestion
                        ? {}
                        : {
                            highlightedSectionIndex: null,
                            highlightedSuggestionIndex: null,
                            highlightedSuggestion: null,
                          }
                    ),
                    {},
                    {
                      valueBeforeUpDown: null,
                      isCollapsed: !shouldRender,
                    }
                  )
                );
                if (shouldRender) {
                  onSuggestionsFetchRequested({
                    value: value,
                    reason: REASON_INPUT_CHANGED,
                  });
                } else {
                  _this3.onSuggestionsClearRequested();
                }
              },
              onKeyDown: function onKeyDown(event, data) {
                var keyCode = event.keyCode;
                switch (keyCode) {
                  case 40: // ArrowDown
                  case 38:
                    // ArrowUp
                    if (isCollapsed) {
                      if (
                        shouldRenderSuggestions(
                          value,
                          REASON_SUGGESTIONS_REVEALED
                        )
                      ) {
                        onSuggestionsFetchRequested({
                          value: value,
                          reason: REASON_SUGGESTIONS_REVEALED,
                        });
                        _this3.revealSuggestions();
                        event.preventDefault(); // We act on the key.
                      }
                    } else if (suggestions.length > 0) {
                      var newHighlightedSectionIndex =
                          data.newHighlightedSectionIndex,
                        newHighlightedItemIndex = data.newHighlightedItemIndex;
                      var newValue;
                      if (newHighlightedItemIndex === null) {
                        // valueBeforeUpDown can be null if, for example, user
                        // hovers on the first suggestion and then pressed Up.
                        // If that happens, use the original input value.
                        newValue =
                          valueBeforeUpDown === null
                            ? value
                            : valueBeforeUpDown;
                      } else {
                        newValue = _this3.getSuggestionValueByIndex(
                          newHighlightedSectionIndex,
                          newHighlightedItemIndex
                        );
                      }
                      _this3.updateHighlightedSuggestion(
                        newHighlightedSectionIndex,
                        newHighlightedItemIndex,
                        value
                      );
                      _this3.maybeCallOnChange(
                        event,
                        newValue,
                        keyCode === 40 ? 'down' : 'up'
                      );
                      event.preventDefault(); // We act on the key.
                    }
                    _this3.justPressedUpDown = true;
                    setTimeout(function () {
                      _this3.justPressedUpDown = false;
                    });
                    break;

                  // Enter
                  case 13: {
                    // See #388
                    if (event.keyCode === 229) {
                      break;
                    }
                    var highlightedSuggestion =
                      _this3.getHighlightedSuggestion();
                    if (isOpen && !alwaysRenderSuggestions) {
                      _this3.closeSuggestions();
                    }
                    if (highlightedSuggestion != null) {
                      event.preventDefault();
                      var _newValue = getSuggestionValue(highlightedSuggestion);
                      _this3.maybeCallOnChange(event, _newValue, 'enter');
                      _this3.onSuggestionSelected(event, {
                        suggestion: highlightedSuggestion,
                        suggestionValue: _newValue,
                        suggestionIndex: highlightedSuggestionIndex,
                        sectionIndex: highlightedSectionIndex,
                        method: 'enter',
                      });
                      _this3.justSelectedSuggestion = true;
                      setTimeout(function () {
                        _this3.justSelectedSuggestion = false;
                      });
                    }
                    break;
                  }

                  // Escape
                  case 27: {
                    if (isOpen) {
                      // If input.type === 'search', the browser clears the input
                      // when Escape is pressed. We want to disable this default
                      // behaviour so that, when suggestions are shown, we just hide
                      // them, without clearing the input.
                      event.preventDefault();
                    }
                    var willCloseSuggestions =
                      isOpen && !alwaysRenderSuggestions;
                    if (valueBeforeUpDown === null) {
                      // Didn't interact with Up/Down
                      if (!willCloseSuggestions) {
                        var _newValue2 = '';
                        _this3.maybeCallOnChange(event, _newValue2, 'escape');
                        if (
                          shouldRenderSuggestions(
                            _newValue2,
                            REASON_ESCAPE_PRESSED
                          )
                        ) {
                          onSuggestionsFetchRequested({
                            value: _newValue2,
                            reason: REASON_ESCAPE_PRESSED,
                          });
                        } else {
                          _this3.onSuggestionsClearRequested();
                        }
                      }
                    } else {
                      // Interacted with Up/Down
                      _this3.maybeCallOnChange(
                        event,
                        valueBeforeUpDown,
                        'escape'
                      );
                    }
                    if (willCloseSuggestions) {
                      _this3.onSuggestionsClearRequested();
                      _this3.closeSuggestions();
                    } else {
                      _this3.resetHighlightedSuggestion();
                    }
                    break;
                  }
                }
                _onKeyDown && _onKeyDown(event);
              },
            }
          );
          var renderSuggestionData = {
            query: this.getQuery(),
          };
          return /*#__PURE__*/ _react['default'].createElement(
            _Autowhatever['default'],
            {
              multiSection: multiSection,
              items: items,
              renderInputComponent: renderInputComponent,
              renderItemsContainer: this.renderSuggestionsContainer,
              renderItem: renderSuggestion,
              renderItemData: renderSuggestionData,
              renderSectionTitle: renderSectionTitle,
              getSectionItems: getSectionSuggestions,
              highlightedSectionIndex: highlightedSectionIndex,
              highlightedItemIndex: highlightedSuggestionIndex,
              containerProps: containerProps,
              inputProps: autowhateverInputProps,
              itemProps: this.itemProps,
              theme: (0, _theme.mapToAutowhateverTheme)(theme),
              id: id,
              ref: this.storeAutowhateverRef,
            }
          );
        },
      },
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props, state) {
          var suggestions = props.suggestions,
            value = props.inputProps.value,
            shouldRenderSuggestions = props.shouldRenderSuggestions;
          var nextState = {};
          if (
            suggestions.length > 0 &&
            shouldRenderSuggestions(value, REASON_SUGGESTIONS_UPDATED)
          ) {
            if (state.isCollapsed && !this.justSelectedSuggestion) {
              nextState = {
                isCollapsed: false,
              };
            }
          } else {
            nextState = {
              highlightedSectionIndex: null,
              highlightedSuggestionIndex: null,
              highlightedSuggestion: null,
              valueBeforeUpDown: null,
            };
          }
          return nextState;
        },
      },
    ]
  );
})(_react.Component));
_defineProperty(Autosuggest, 'propTypes', {
  suggestions: _propTypes['default'].array.isRequired,
  onSuggestionsFetchRequested: function onSuggestionsFetchRequested(
    props,
    propName
  ) {
    var onSuggestionsFetchRequested = props[propName];
    if (typeof onSuggestionsFetchRequested !== 'function') {
      throw new Error(
        "'onSuggestionsFetchRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp"
      );
    }
  },
  onSuggestionsClearRequested: function onSuggestionsClearRequested(
    props,
    propName
  ) {
    var onSuggestionsClearRequested = props[propName];
    if (
      props.alwaysRenderSuggestions === false &&
      typeof onSuggestionsClearRequested !== 'function'
    ) {
      throw new Error(
        "'onSuggestionsClearRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp"
      );
    }
  },
  shouldKeepSuggestionsOnSelect: _propTypes['default'].func,
  onSuggestionSelected: _propTypes['default'].func,
  onSuggestionHighlighted: _propTypes['default'].func,
  renderInputComponent: _propTypes['default'].func,
  renderSuggestionsContainer: _propTypes['default'].func,
  getSuggestionValue: _propTypes['default'].func.isRequired,
  renderSuggestion: _propTypes['default'].func.isRequired,
  inputProps: function inputProps(props, propName) {
    var inputProps = props[propName];
    if (!inputProps) {
      throw new Error("'inputProps' must be passed.");
    }
    if (!Object.prototype.hasOwnProperty.call(inputProps, 'value')) {
      throw new Error("'inputProps' must have 'value'.");
    }
    if (!Object.prototype.hasOwnProperty.call(inputProps, 'onChange')) {
      throw new Error("'inputProps' must have 'onChange'.");
    }
  },
  shouldRenderSuggestions: _propTypes['default'].func,
  alwaysRenderSuggestions: _propTypes['default'].bool,
  multiSection: _propTypes['default'].bool,
  renderSectionTitle: function renderSectionTitle(props, propName) {
    var renderSectionTitle = props[propName];
    if (
      props.multiSection === true &&
      typeof renderSectionTitle !== 'function'
    ) {
      throw new Error(
        "'renderSectionTitle' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp"
      );
    }
  },
  getSectionSuggestions: function getSectionSuggestions(props, propName) {
    var getSectionSuggestions = props[propName];
    if (
      props.multiSection === true &&
      typeof getSectionSuggestions !== 'function'
    ) {
      throw new Error(
        "'getSectionSuggestions' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp"
      );
    }
  },
  focusInputOnSuggestionClick: _propTypes['default'].bool,
  highlightFirstSuggestion: _propTypes['default'].bool,
  theme: _propTypes['default'].object,
  id: _propTypes['default'].string,
  containerProps: _propTypes['default'].object, // Arbitrary container props
});
_defineProperty(Autosuggest, 'defaultProps', {
  renderSuggestionsContainer: defaultRenderSuggestionsContainer,
  shouldRenderSuggestions: defaultShouldRenderSuggestions,
  alwaysRenderSuggestions: false,
  multiSection: false,
  shouldKeepSuggestionsOnSelect: function shouldKeepSuggestionsOnSelect() {
    return false;
  },
  focusInputOnSuggestionClick: true,
  highlightFirstSuggestion: false,
  theme: _theme.defaultTheme,
  id: '1',
  containerProps: {},
});
