"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react);exports["default"]=_react2["default"].createClass({displayName:"Search Input Component",componentDidMount:function(){console.log("Search Input mounted...")},componentWillUnmount:function(){console.log("Search Input un-mounted...")},render:function(){return _react2["default"].createElement("input",{className:"search-input",type:"text",placeholder:this.props.placeholder,value:this.props.value,onChange:this.props.updateSearch})}});