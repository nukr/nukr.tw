'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/nukr/workspace/nukr.tw/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/Users/nukr/workspace/nukr.tw/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _css = require('/Users/nukr/workspace/nukr.tw/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: wrapper_style },
    _react2.default.createElement(
      'div',
      { className: header_style },
      _react2.default.createElement(
        _link2.default,
        { href: '/' },
        _react2.default.createElement(
          'a',
          { className: link_style },
          'nukr.tw'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: main_style },
      _react2.default.createElement(
        'div',
        { className: name_style },
        'Wei Luo'
      )
    )
  );
};

(0, _css.insertRule)('\n  @import url(\'https://fonts.googleapis.com/css?family=Press+Start+2P\');\n  html, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    width: 100%;\n    font-family: \'Press Start 2P\', cursive;\n  }\n');

var wrapper_style = (0, _css2.default)({
  height: '100%',
  width: '100%'
});

var header_style = (0, _css2.default)({
  padding: '20px',
  fontSize: '0.7em'
});

var link_style = (0, _css2.default)({
  textDecoration: 'none'
});

var main_style = (0, _css2.default)({
  fontSize: '1.1em',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex'
});

var name_style = (0, _css2.default)({});