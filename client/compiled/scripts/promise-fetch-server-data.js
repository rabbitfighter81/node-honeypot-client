"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _jquery=require("jquery"),_jquery2=_interopRequireDefault(_jquery);exports["default"]=function(e){return new Promise(function(r,u){_jquery2["default"].ajax({type:"GET",url:e,dataType:"text",async:!0,crossDomain:!0,success:function(e){r(e)},error:function(e,r,t){u(t)}})})};