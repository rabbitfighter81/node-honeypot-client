"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react),_itemObjectCreator=require("../scripts/item-object-creator.js"),_itemObjectCreator2=_interopRequireDefault(_itemObjectCreator),_dataTableRowComponent=require("./data-table-row-component.js"),_dataTableRowComponent2=_interopRequireDefault(_dataTableRowComponent);exports["default"]=_react2["default"].createClass({displayName:"Data Table Component",propTypes:{data:_react2["default"].PropTypes.string.isRequired},componentDidMount:function(){console.log("Table mounted...")},componentWillUnmount:function(){console.log("Table un-mounted...")},_mapObject:function(e,t){return Object.keys(e).map(function(r){return t(r,e[r])})},render:function(){var e=null;try{e=(0,_itemObjectCreator2["default"])(JSON.parse(this.props.data),this.props.index)}catch(t){console.error(t.message)}return e?_react2["default"].createElement("table",{className:"table center"},_react2["default"].createElement("tbody",null,this._mapObject(e,function(e,t){return null!==t?_react2["default"].createElement(_dataTableRowComponent2["default"],{th:e.toString(),td:t.toString()}):void 0}))):void 0}});