"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react),_headerComponent=require("./header-component.js"),_headerComponent2=_interopRequireDefault(_headerComponent),_searchAreaComponent=require("./search-area-component.js"),_searchAreaComponent2=_interopRequireDefault(_searchAreaComponent),_resultsAreaComponent=require("./results-area-component.js"),_resultsAreaComponent2=_interopRequireDefault(_resultsAreaComponent),_footerComponent=require("./footer-component.js"),_footerComponent2=_interopRequireDefault(_footerComponent),_dataItemsFetchPromise=require("../scripts/data-items-fetch-promise.js"),_dataItemsFetchPromise2=_interopRequireDefault(_dataItemsFetchPromise),_searchTypes=require("../scripts/search-types.js"),_searchTypes2=_interopRequireDefault(_searchTypes);exports["default"]=_react2["default"].createClass({displayName:"App",propTypes:{source:_react2["default"].PropTypes.string.isRequired,protocol:_react2["default"].PropTypes.string.isRequired,host:_react2["default"].PropTypes.string.isRequired,file:_react2["default"].PropTypes.string.isRequired},getInitialState:function(){var e=this.props.protocol,t=this.props.host,r=this.props.file,a=this._constructSourceUrl(e,t,r);return{source:a,protocol:e,host:t,file:r,clientData:[],logging:!0,searchTerm:"",searchType:_searchTypes2["default"].ALL.name}},componentDidMount:function(){var e=this;console.log("App mounted...");var t=(0,_dataItemsFetchPromise2["default"])(this.props.source);t.then(function(t){var r=t.trim().split("\n");e.setState({clientData:r})})["catch"](function(t){e.setState({clientData:[]}),console.error(t)})},componentWillUnmount:function(){console.log("App un-mounted...")},_constructSourceUrl:function(e,t,r){return String(e+t+r)},_updateSearchTerm:function(e){var t=e.target.value;this.state.logging&&console.log('Search term: "'+t+'"'),this.setState({searchTerm:t})},_updateSearchType:function(e){var t=e.target.value.toUpperCase();_searchTypes2["default"].hasOwnProperty(t)?(this.state.logging&&console.log('Search type: "'+t+'"'),this.setState({searchType:t})):console.error("Search type "+t+" is invalid...")},render:function(){return _react2["default"].createElement("div",{className:"react-app-component"},this._renderLayout(this.props.children))},_renderLayout:function(){return _react2["default"].createElement("div",{className:"react-app-component-container"},_react2["default"].createElement(_headerComponent2["default"],{className:"app-react-header",host:this.state.host,logging:this.state.logging}),_react2["default"].createElement(_searchAreaComponent2["default"],{className:"app-react-search",placeholder:"Search for...",searchTerm:this.state.searchTerm,searchType:this.state.searchType,updateSearchTerm:this._updateSearchTerm,updateSearchType:this._updateSearchType}),_react2["default"].createElement(_resultsAreaComponent2["default"],{className:"app-react-results",data:this.state.clientData,logging:this.state.logging}),_react2["default"].createElement(_footerComponent2["default"],{className:"app-react-footer",source:this.props.source,logging:this.state.logging}))}});