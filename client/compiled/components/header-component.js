"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react);exports["default"]=_react2["default"].createClass({displayName:"Header Component",propTypes:{host:_react2["default"].PropTypes.string.isRequired},componentDidMount:function(){console.log("Header mounted...")},componentWillUnmount:function(){console.log("Header un-mounted...")},render:function(){return _react2["default"].createElement("div",{className:"react-header-component"},this._renderLayout(this.props.children))},_renderLayout:function(){var e=this.props.host.slice(0,-1);return _react2["default"].createElement("div",{className:"header"},_react2["default"].createElement("h1",null,"Honeypot Client"),_react2["default"].createElement("h2",null,"Server data @ ",_react2["default"].createElement("a",{href:this.props.host},e)))}});