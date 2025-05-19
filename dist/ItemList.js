'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _Item = _interopRequireDefault(require('./Item'));
var _compareObjects = _interopRequireDefault(require('./compareObjects'));
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
function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }),
    _extends.apply(null, arguments)
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
var ItemsList = (exports['default'] = /*#__PURE__*/ (function (_Component) {
  function ItemsList() {
    var _this;
    _classCallCheck(this, ItemsList);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ItemsList, [].concat(args));
    _defineProperty(
      _this,
      'storeHighlightedItemReference',
      function (highlightedItem) {
        _this.props.onHighlightedItemChange(
          highlightedItem === null ? null : highlightedItem.item
        );
      }
    );
    return _this;
  }
  _inherits(ItemsList, _Component);
  return _createClass(ItemsList, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return (0, _compareObjects['default'])(nextProps, this.props, [
          'itemProps',
        ]);
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          items = _this$props.items,
          itemProps = _this$props.itemProps,
          renderItem = _this$props.renderItem,
          renderItemData = _this$props.renderItemData,
          sectionIndex = _this$props.sectionIndex,
          highlightedItemIndex = _this$props.highlightedItemIndex,
          getItemId = _this$props.getItemId,
          theme = _this$props.theme,
          keyPrefix = _this$props.keyPrefix;
        var sectionPrefix =
          sectionIndex === null
            ? keyPrefix
            : ''.concat(keyPrefix, 'section-').concat(sectionIndex, '-');
        var isItemPropsFunction = typeof itemProps === 'function';
        return /*#__PURE__*/ _react['default'].createElement(
          'ul',
          _extends(
            {
              role: 'listbox',
            },
            theme(''.concat(sectionPrefix, 'items-list'), 'itemsList')
          ),
          items.map(function (item, itemIndex) {
            var isFirst = itemIndex === 0;
            var isHighlighted = itemIndex === highlightedItemIndex;
            var itemKey = ''.concat(sectionPrefix, 'item-').concat(itemIndex);
            var itemPropsObj = isItemPropsFunction
              ? itemProps({
                  sectionIndex: sectionIndex,
                  itemIndex: itemIndex,
                })
              : itemProps;
            var allItemProps = _objectSpread(
              _objectSpread(
                {
                  id: getItemId(sectionIndex, itemIndex),
                  'aria-selected': isHighlighted,
                },
                theme(
                  itemKey,
                  'item',
                  isFirst && 'itemFirst',
                  isHighlighted && 'itemHighlighted'
                )
              ),
              itemPropsObj
            );
            if (isHighlighted) {
              allItemProps.ref = _this2.storeHighlightedItemReference;
            }

            // `key` is provided by theme()
            /* eslint-disable react/jsx-key */
            return /*#__PURE__*/ _react['default'].createElement(
              _Item['default'],
              _extends({}, allItemProps, {
                sectionIndex: sectionIndex,
                isHighlighted: isHighlighted,
                itemIndex: itemIndex,
                item: item,
                renderItem: renderItem,
                renderItemData: renderItemData,
              })
            );
            /* eslint-enable react/jsx-key */
          })
        );
      },
    },
  ]);
})(_react.Component));
_defineProperty(ItemsList, 'propTypes', {
  items: _propTypes['default'].array.isRequired,
  itemProps: _propTypes['default'].oneOfType([
    _propTypes['default'].object,
    _propTypes['default'].func,
  ]),
  renderItem: _propTypes['default'].func.isRequired,
  renderItemData: _propTypes['default'].object.isRequired,
  sectionIndex: _propTypes['default'].number,
  highlightedItemIndex: _propTypes['default'].number,
  onHighlightedItemChange: _propTypes['default'].func.isRequired,
  getItemId: _propTypes['default'].func.isRequired,
  theme: _propTypes['default'].func.isRequired,
  keyPrefix: _propTypes['default'].string.isRequired,
});
_defineProperty(ItemsList, 'defaultProps', {
  sectionIndex: null,
});
