"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react);exports["default"]=_react2["default"].createClass({displayName:"Table Row Component",propTypes:{th:_react2["default"].PropTypes.string.isRequired,td:_react2["default"].PropTypes.string.isRequired},componentDidMount:function(){},componentWillUnmount:function(){},render:function(){var e=capitalizeFirstLetter(this.props.th),t=this.props.td;return _react2["default"].createElement("tr",null,_react2["default"].createElement("th",null,e),_react2["default"].createElement("td",null,t))}});