"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react);exports["default"]=_react2["default"].createClass({displayName:"Footer Component",componentDidMount:function(){console.log("Footer mounted...")},componentWillUnmount:function(){console.log("Footer un-mounted...")},render:function(){return _react2["default"].createElement("div",null,_react2["default"].createElement("footer",null,_react2["default"].createElement("a",{href:"https://github.com/thefixers",target:"_blank"},"Project by [github.com/thefixers]")))}});