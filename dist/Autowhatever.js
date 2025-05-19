'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _sectionIterator = _interopRequireDefault(require('section-iterator'));
var _reactThemeable = _interopRequireDefault(require('react-themeable'));
var _SectionTitle = _interopRequireDefault(require('./SectionTitle'));
var _ItemList = _interopRequireDefault(require('./ItemList'));
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
function _slicedToArray(r, e) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArrayLimit(r, e) ||
    _unsupportedIterableToArray(r, e) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ('string' == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      'Object' === t && r.constructor && (t = r.constructor.name),
      'Map' === t || 'Set' === t
        ? Array.from(r)
        : 'Arguments' === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(r, a)
        : void 0
    );
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r
      ? null
      : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else
        for (
          ;
          !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
          f = !0
        );
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t['return'] && ((u = t['return']()), Object(u) !== u))
          return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
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
var emptyObject = {};
var defaultRenderInputComponent = function defaultRenderInputComponent(props) {
  return /*#__PURE__*/ _react['default'].createElement('input', props);
};
var defaultRenderItemsContainer = function defaultRenderItemsContainer(_ref) {
  var containerProps = _ref.containerProps,
    children = _ref.children;
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    containerProps,
    children
  );
};
var defaultTheme = {
  container: 'react-autowhatever__container',
  containerOpen: 'react-autowhatever__container--open',
  input: 'react-autowhatever__input',
  inputOpen: 'react-autowhatever__input--open',
  inputFocused: 'react-autowhatever__input--focused',
  itemsContainer: 'react-autowhatever__items-container',
  itemsContainerOpen: 'react-autowhatever__items-container--open',
  itemsList: 'react-autowhatever__items-list',
  item: 'react-autowhatever__item',
  itemFirst: 'react-autowhatever__item--first',
  itemHighlighted: 'react-autowhatever__item--highlighted',
  sectionContainer: 'react-autowhatever__section-container',
  sectionContainerFirst: 'react-autowhatever__section-container--first',
  sectionTitle: 'react-autowhatever__section-title',
};
var Autowhatever = (exports['default'] = /*#__PURE__*/ (function (_Component) {
  function Autowhatever(props) {
    var _this;
    _classCallCheck(this, Autowhatever);
    _this = _callSuper(this, Autowhatever, [props]);
    _defineProperty(_this, 'storeInputReference', function (input) {
      if (input !== null) {
        _this.input = input;
      }
      var userRef = _this.props.inputProps.ref;
      if (userRef) {
        if (typeof userRef === 'function') {
          userRef(input);
        } else if (
          _typeof(userRef) === 'object' &&
          Object.prototype.hasOwnProperty.call(userRef, 'current')
        ) {
          userRef.current = input;
        }
      }
    });
    _defineProperty(
      _this,
      'storeItemsContainerReference',
      function (itemsContainer) {
        if (itemsContainer !== null) {
          _this.itemsContainer = itemsContainer;
        }
      }
    );
    _defineProperty(
      _this,
      'onHighlightedItemChange',
      function (highlightedItem) {
        _this.highlightedItem = highlightedItem;
      }
    );
    _defineProperty(_this, 'getItemId', function (sectionIndex, itemIndex) {
      if (itemIndex === null) {
        return null;
      }
      var id = _this.props.id;
      var section =
        sectionIndex === null ? '' : 'section-'.concat(sectionIndex);
      return 'react-autowhatever-'
        .concat(id, '-')
        .concat(section, '-item-')
        .concat(itemIndex);
    });
    _defineProperty(_this, 'onFocus', function (event) {
      var inputProps = _this.props.inputProps;
      _this.setState({
        isInputFocused: true,
      });
      inputProps.onFocus && inputProps.onFocus(event);
    });
    _defineProperty(_this, 'onBlur', function (event) {
      var inputProps = _this.props.inputProps;
      _this.setState({
        isInputFocused: false,
      });
      inputProps.onBlur && inputProps.onBlur(event);
    });
    _defineProperty(_this, 'onKeyDown', function (event) {
      var _this$props = _this.props,
        inputProps = _this$props.inputProps,
        highlightedSectionIndex = _this$props.highlightedSectionIndex,
        highlightedItemIndex = _this$props.highlightedItemIndex;
      var keyCode = event.keyCode;
      switch (keyCode) {
        case 40: // ArrowDown
        case 38: {
          // ArrowUp
          var nextPrev = keyCode === 40 ? 'next' : 'prev';
          var _this$sectionIterator = _this.sectionIterator[nextPrev]([
              highlightedSectionIndex,
              highlightedItemIndex,
            ]),
            _this$sectionIterator2 = _slicedToArray(_this$sectionIterator, 2),
            newHighlightedSectionIndex = _this$sectionIterator2[0],
            newHighlightedItemIndex = _this$sectionIterator2[1];
          inputProps.onKeyDown(event, {
            newHighlightedSectionIndex: newHighlightedSectionIndex,
            newHighlightedItemIndex: newHighlightedItemIndex,
          });
          break;
        }
        default:
          inputProps.onKeyDown(event, {
            highlightedSectionIndex: highlightedSectionIndex,
            highlightedItemIndex: highlightedItemIndex,
          });
      }
    });
    _this.highlightedItem = null;
    _this.state = {
      isInputFocused: false,
    };
    _this.setSectionsItems(props);
    _this.setSectionIterator(props);
    _this.setTheme(props);
    return _this;
  }
  _inherits(Autowhatever, _Component);
  return _createClass(Autowhatever, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.ensureHighlightedItemIsVisible();
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var itemsDidChange = prevProps.items !== this.props.items;
        if (itemsDidChange) {
          this.setSectionsItems(this.props);
        }
        if (
          itemsDidChange ||
          prevProps.multiSection !== this.props.multiSection
        ) {
          this.setSectionIterator(this.props);
        }
        if (prevProps.theme !== this.props.theme) {
          this.setTheme(this.props);
        }
        this.ensureHighlightedItemIsVisible();
      },
    },
    {
      key: 'setSectionsItems',
      value: function setSectionsItems(props) {
        if (props.multiSection) {
          this.sectionsItems = props.items.map(function (section) {
            return props.getSectionItems(section);
          });
          this.sectionsLengths = this.sectionsItems.map(function (items) {
            return items.length;
          });
          this.allSectionsAreEmpty = this.sectionsLengths.every(function (
            itemsCount
          ) {
            return itemsCount === 0;
          });
        }
      },
    },
    {
      key: 'setSectionIterator',
      value: function setSectionIterator(props) {
        this.sectionIterator = (0, _sectionIterator['default'])({
          multiSection: props.multiSection,
          data: props.multiSection ? this.sectionsLengths : props.items.length,
        });
      },
    },
    {
      key: 'setTheme',
      value: function setTheme(props) {
        this.theme = (0, _reactThemeable['default'])(props.theme);
      },
    },
    {
      key: 'renderSections',
      value: function renderSections() {
        var _this2 = this;
        if (this.allSectionsAreEmpty) {
          return null;
        }
        var theme = this.theme;
        var _this$props2 = this.props,
          id = _this$props2.id,
          items = _this$props2.items,
          renderItem = _this$props2.renderItem,
          renderItemData = _this$props2.renderItemData,
          renderSectionTitle = _this$props2.renderSectionTitle,
          highlightedSectionIndex = _this$props2.highlightedSectionIndex,
          highlightedItemIndex = _this$props2.highlightedItemIndex,
          itemProps = _this$props2.itemProps;
        return items.map(function (section, sectionIndex) {
          var keyPrefix = 'react-autowhatever-'.concat(id, '-');
          var sectionKeyPrefix = ''
            .concat(keyPrefix, 'section-')
            .concat(sectionIndex, '-');
          var isFirstSection = sectionIndex === 0;

          // `key` is provided by theme()
          /* eslint-disable react/jsx-key */
          return /*#__PURE__*/ _react['default'].createElement(
            'div',
            theme(
              ''.concat(sectionKeyPrefix, 'container'),
              'sectionContainer',
              isFirstSection && 'sectionContainerFirst'
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _SectionTitle['default'],
              {
                section: section,
                renderSectionTitle: renderSectionTitle,
                theme: theme,
                sectionKeyPrefix: sectionKeyPrefix,
              }
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _ItemList['default'],
              {
                items: _this2.sectionsItems[sectionIndex],
                itemProps: itemProps,
                renderItem: renderItem,
                renderItemData: renderItemData,
                sectionIndex: sectionIndex,
                highlightedItemIndex:
                  highlightedSectionIndex === sectionIndex
                    ? highlightedItemIndex
                    : null,
                onHighlightedItemChange: _this2.onHighlightedItemChange,
                getItemId: _this2.getItemId,
                theme: theme,
                keyPrefix: keyPrefix,
                ref: _this2.storeItemsListReference,
              }
            )
          );
          /* eslint-enable react/jsx-key */
        });
      },
    },
    {
      key: 'renderItems',
      value: function renderItems() {
        var items = this.props.items;
        if (items.length === 0) {
          return null;
        }
        var theme = this.theme;
        var _this$props3 = this.props,
          id = _this$props3.id,
          renderItem = _this$props3.renderItem,
          renderItemData = _this$props3.renderItemData,
          highlightedSectionIndex = _this$props3.highlightedSectionIndex,
          highlightedItemIndex = _this$props3.highlightedItemIndex,
          itemProps = _this$props3.itemProps;
        return /*#__PURE__*/ _react['default'].createElement(
          _ItemList['default'],
          {
            items: items,
            itemProps: itemProps,
            renderItem: renderItem,
            renderItemData: renderItemData,
            highlightedItemIndex:
              highlightedSectionIndex === null ? highlightedItemIndex : null,
            onHighlightedItemChange: this.onHighlightedItemChange,
            getItemId: this.getItemId,
            theme: theme,
            keyPrefix: 'react-autowhatever-'.concat(id, '-'),
          }
        );
      },
    },
    {
      key: 'ensureHighlightedItemIsVisible',
      value: function ensureHighlightedItemIsVisible() {
        var highlightedItem = this.highlightedItem;
        if (!highlightedItem) {
          return;
        }
        var itemsContainer = this.itemsContainer;
        var itemOffsetRelativeToContainer =
          highlightedItem.offsetParent === itemsContainer
            ? highlightedItem.offsetTop
            : highlightedItem.offsetTop - itemsContainer.offsetTop;
        var scrollTop = itemsContainer.scrollTop; // Top of the visible area

        if (itemOffsetRelativeToContainer < scrollTop) {
          // Item is off the top of the visible area
          scrollTop = itemOffsetRelativeToContainer;
        } else if (
          itemOffsetRelativeToContainer + highlightedItem.offsetHeight >
          scrollTop + itemsContainer.offsetHeight
        ) {
          // Item is off the bottom of the visible area
          scrollTop =
            itemOffsetRelativeToContainer +
            highlightedItem.offsetHeight -
            itemsContainer.offsetHeight;
        }
        if (scrollTop !== itemsContainer.scrollTop) {
          itemsContainer.scrollTop = scrollTop;
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        var theme = this.theme;
        var _this$props4 = this.props,
          id = _this$props4.id,
          multiSection = _this$props4.multiSection,
          renderInputComponent = _this$props4.renderInputComponent,
          renderItemsContainer = _this$props4.renderItemsContainer,
          highlightedSectionIndex = _this$props4.highlightedSectionIndex,
          highlightedItemIndex = _this$props4.highlightedItemIndex;
        var isInputFocused = this.state.isInputFocused;
        var renderedItems = multiSection
          ? this.renderSections()
          : this.renderItems();
        var isOpen = renderedItems !== null;
        var ariaActivedescendant = this.getItemId(
          highlightedSectionIndex,
          highlightedItemIndex
        );
        var itemsContainerId = 'react-autowhatever-'.concat(id);
        var containerProps = _objectSpread(
          _objectSpread(
            {
              role: 'combobox',
              'aria-haspopup': 'listbox',
              'aria-owns': itemsContainerId,
              'aria-expanded': isOpen,
            },
            theme(
              'react-autowhatever-'.concat(id, '-container'),
              'container',
              isOpen && 'containerOpen'
            )
          ),
          this.props.containerProps
        );
        var inputComponent = renderInputComponent(
          _objectSpread(
            _objectSpread(
              _objectSpread(
                {
                  type: 'text',
                  value: '',
                  autoComplete: 'off',
                  'aria-autocomplete': 'list',
                  'aria-controls': itemsContainerId,
                  'aria-activedescendant': ariaActivedescendant,
                },
                theme(
                  'react-autowhatever-'.concat(id, '-input'),
                  'input',
                  isOpen && 'inputOpen',
                  isInputFocused && 'inputFocused'
                )
              ),
              this.props.inputProps
            ),
            {},
            {
              onFocus: this.onFocus,
              onBlur: this.onBlur,
              onKeyDown: this.props.inputProps.onKeyDown && this.onKeyDown,
              ref: this.storeInputReference,
            }
          )
        );
        var itemsContainer = renderItemsContainer({
          containerProps: _objectSpread(
            _objectSpread(
              {
                id: itemsContainerId,
                role: 'listbox',
              },
              theme(
                'react-autowhatever-'.concat(id, '-items-container'),
                'itemsContainer',
                isOpen && 'itemsContainerOpen'
              )
            ),
            {},
            {
              ref: this.storeItemsContainerReference,
            }
          ),
          children: renderedItems,
        });
        return /*#__PURE__*/ _react['default'].createElement(
          'div',
          containerProps,
          inputComponent,
          itemsContainer
        );
      },
    },
  ]);
})(_react.Component));
_defineProperty(Autowhatever, 'propTypes', {
  id: _propTypes['default'].string,
  // Used in aria-* attributes. If multiple Autowhatever's are rendered on a page, they must have unique ids.
  multiSection: _propTypes['default'].bool,
  // Indicates whether a multi section layout should be rendered.
  renderInputComponent: _propTypes['default'].func,
  // When specified, it is used to render the input element.
  renderItemsContainer: _propTypes['default'].func,
  // Renders the items container.
  items: _propTypes['default'].array.isRequired,
  // Array of items or sections to render.
  renderItem: _propTypes['default'].func,
  // This function renders a single item.
  renderItemData: _propTypes['default'].object,
  // Arbitrary data that will be passed to renderItem()
  renderSectionTitle: _propTypes['default'].func,
  // This function gets a section and renders its title.
  getSectionItems: _propTypes['default'].func,
  // This function gets a section and returns its items, which will be passed into `renderItem` for rendering.
  containerProps: _propTypes['default'].object,
  // Arbitrary container props
  inputProps: _propTypes['default'].object,
  // Arbitrary input props
  itemProps: _propTypes['default'].oneOfType([
    // Arbitrary item props
    _propTypes['default'].object,
    _propTypes['default'].func,
  ]),
  highlightedSectionIndex: _propTypes['default'].number,
  // Section index of the highlighted item
  highlightedItemIndex: _propTypes['default'].number,
  // Highlighted item index (within a section)
  theme: _propTypes['default'].oneOfType([
    // Styles. See: https://github.com/markdalgleish/react-themeable
    _propTypes['default'].object,
    _propTypes['default'].array,
  ]),
});
_defineProperty(Autowhatever, 'defaultProps', {
  id: '1',
  multiSection: false,
  renderInputComponent: defaultRenderInputComponent,
  renderItemsContainer: defaultRenderItemsContainer,
  renderItem: function renderItem() {
    throw new Error('`renderItem` must be provided');
  },
  renderItemData: emptyObject,
  renderSectionTitle: function renderSectionTitle() {
    throw new Error('`renderSectionTitle` must be provided');
  },
  getSectionItems: function getSectionItems() {
    throw new Error('`getSectionItems` must be provided');
  },
  containerProps: emptyObject,
  inputProps: emptyObject,
  itemProps: emptyObject,
  highlightedSectionIndex: null,
  highlightedItemIndex: null,
  theme: defaultTheme,
});
