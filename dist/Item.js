'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _compareObjects = _interopRequireDefault(require('./compareObjects'));
var _excluded = ['isHighlighted', 'item', 'renderItem', 'renderItemData'];
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
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++)
      (o = n[r]),
        -1 === t.indexOf(o) &&
          {}.propertyIsEnumerable.call(e, o) &&
          (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r)
    if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r[n];
    }
  return t;
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
var Item = (exports['default'] = /*#__PURE__*/ (function (_Component) {
  function Item() {
    var _this;
    _classCallCheck(this, Item);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Item, [].concat(args));
    _defineProperty(_this, 'storeItemReference', function (item) {
      if (item !== null) {
        _this.item = item;
      }
    });
    _defineProperty(_this, 'onMouseEnter', function (event) {
      var _this$props = _this.props,
        sectionIndex = _this$props.sectionIndex,
        itemIndex = _this$props.itemIndex;
      _this.props.onMouseEnter(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex,
      });
    });
    _defineProperty(_this, 'onMouseLeave', function (event) {
      var _this$props2 = _this.props,
        sectionIndex = _this$props2.sectionIndex,
        itemIndex = _this$props2.itemIndex;
      _this.props.onMouseLeave(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex,
      });
    });
    _defineProperty(_this, 'onMouseDown', function (event) {
      var _this$props3 = _this.props,
        sectionIndex = _this$props3.sectionIndex,
        itemIndex = _this$props3.itemIndex;
      _this.props.onMouseDown(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex,
      });
    });
    _defineProperty(_this, 'onClick', function (event) {
      var _this$props4 = _this.props,
        sectionIndex = _this$props4.sectionIndex,
        itemIndex = _this$props4.itemIndex;
      _this.props.onClick(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex,
      });
    });
    return _this;
  }
  _inherits(Item, _Component);
  return _createClass(Item, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return (0, _compareObjects['default'])(nextProps, this.props, [
          'renderItemData',
        ]);
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this$props5 = this.props,
          isHighlighted = _this$props5.isHighlighted,
          item = _this$props5.item,
          renderItem = _this$props5.renderItem,
          renderItemData = _this$props5.renderItemData,
          restProps = _objectWithoutProperties(_this$props5, _excluded);
        delete restProps.sectionIndex;
        delete restProps.itemIndex;
        if (typeof restProps.onMouseEnter === 'function') {
          restProps.onMouseEnter = this.onMouseEnter;
        }
        if (typeof restProps.onMouseLeave === 'function') {
          restProps.onMouseLeave = this.onMouseLeave;
        }
        if (typeof restProps.onMouseDown === 'function') {
          restProps.onMouseDown = this.onMouseDown;
        }
        if (typeof restProps.onClick === 'function') {
          restProps.onClick = this.onClick;
        }
        return /*#__PURE__*/ _react['default'].createElement(
          'li',
          _extends(
            {
              role: 'option',
            },
            restProps,
            {
              ref: this.storeItemReference,
            }
          ),
          renderItem(
            item,
            _objectSpread(
              {
                isHighlighted: isHighlighted,
              },
              renderItemData
            )
          )
        );
      },
    },
  ]);
})(_react.Component));
_defineProperty(Item, 'propTypes', {
  sectionIndex: _propTypes['default'].number,
  isHighlighted: _propTypes['default'].bool.isRequired,
  itemIndex: _propTypes['default'].number.isRequired,
  item: _propTypes['default'].any.isRequired,
  renderItem: _propTypes['default'].func.isRequired,
  renderItemData: _propTypes['default'].object.isRequired,
  onMouseEnter: _propTypes['default'].func,
  onMouseLeave: _propTypes['default'].func,
  onMouseDown: _propTypes['default'].func,
  onClick: _propTypes['default'].func,
});
