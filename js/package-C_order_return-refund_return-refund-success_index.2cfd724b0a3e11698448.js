(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{"2356":function(e,t,n){},"246":function(e,t,n){"use strict";n.d(t,"a",function(){return __decorate});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function __decorate(e,t,n,a){var u,o=arguments.length,i=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var c=e.length-1;c>=0;c--)(u=e[c])&&(i=(o<3?u(i):o>3?u(t,n,i):u(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}},"251":function(e,t,n){"use strict";function extraPathsValue(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],a=t.length>=2?t[1]:null,u=null;"function"==typeof t[t.length-1]&&(u=t[t.length-1]);var o=[],i=void 0,c=[];return"string"==typeof r&&a&&a.props&&a.props["data-paths"]?(o=a.props["data-paths"].split(/[,\.]/gi),i=r):r instanceof Array&&r[0].hasOwnProperty("paths")&&r[0].hasOwnProperty("value")?c=r.map(function(e){var t=e.paths,n=e.value,r=t;return"string"==typeof r&&(r=t.split(/[,\.]/gi)),{"paths":r,"value":n}}):"string"==typeof r?(o=r.split(/[,\.]/gi),i=a,console.log(o,i,103)):r.hasOwnProperty("target")&&r.target["data-paths"]&&void 0!=r.target.value?(o=r.target["data-paths"].split(/[,\.]/gi),i=r.target.value):r.hasOwnProperty("target")&&r.target.dataset&&r.target.dataset.paths?(o=r.target.dataset.paths.split(/[,\.]/gi),i=r.target.value):r instanceof Array&&a instanceof Array&&a[0]&&"function"==typeof a[0].type&&a[0].props&&a[0].props["data-paths"]?(o=a[0].props["data-paths"].split(/[,\.]/gi),i=r):r instanceof Array?(o=r,i=a):a&&a.hasOwnProperty("props")&&a.props.hasOwnProperty("data-paths")&&a.props.hasOwnProperty("value")&&(o=a.props["data-paths"].split(/[,\.]/gi),i=a.props.value),u?u({"paths":o,"value":i,"batchUpdate":c,"raw":t}):{"paths":o,"value":i,"batchUpdate":c}}n.d(t,"a",function(){return extraPathsValue})},"252":function(e,t,n){"use strict";n.d(t,"a",function(){return getActionProxy});function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,a){try{var u=t[r](a),o=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(o).then(function(e){step("next",e)},function(e){step("throw",e)});e(o)}("next")})}}var r,a=[(r=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t){var n,r=e.methodName,a=e.target;return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if("query"!==r||!a.commonChange){e.next=11;break}return console.log("beginMiddware"),a.commonChange(["main","isLoading"],!0),e.next=5,t();case 5:return n=e.sent,a.commonChange(["main","isLoading"],!1),console.log("end Middware"),e.abrupt("return",n);case 11:return e.abrupt("return",t());case 12:case"end":return e.stop()}},_callee,void 0)})),function loadingM(e,t){return r.apply(this,arguments)})],u=function compose(e){var t,n,r=(t=_asyncToGenerator(regeneratorRuntime.mark(function _callee4(t,n,u){var o,i;return regeneratorRuntime.wrap(function _callee4$(c){for(;;)switch(c.prev=c.next){case 0:return o=t+1,i=r.bind(null,o,n,u),o===a&&(i=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee3(){var e;return regeneratorRuntime.wrap(function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},_callee3,this)}));return function _next(){return e.apply(this,arguments)}}()),c.abrupt("return",e[t](n,i));case 4:case"end":return c.stop()}},_callee4,this)})),function _dispatch(e,n,r){return t.apply(this,arguments)}),a=e.length;return n=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e,t){return regeneratorRuntime.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r(0,e,t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},_callee2,void 0)})),function(e,t){return n.apply(this,arguments)}};function getActionProxy(e){var t={},n=u(a);return function(r){var a=e(r),u=new Proxy(a,{"get":function get(e,r,o){var i=this,c=String(r);return t[c]||"function"!=typeof a[r]||(t[c]=_asyncToGenerator(regeneratorRuntime.mark(function _callee5(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var s,l;return regeneratorRuntime.wrap(function _callee5$(e){for(;;)switch(e.prev=e.next){case 0:return s=t,e.next=3,n({"methodName":c,"arguments":s,"target":u},function(){return a[r].apply(u,s)});case 3:return l=e.sent,e.abrupt("return",l);case 5:case"end":return e.stop()}},_callee5,i)}))),t[c]?t[c]:Reflect.get(e,r,o)},"set":function set(e,t,n,r){return Reflect.set(e,t,n,r)},"apply":function apply(e,t,n){return Reflect.apply.apply(Reflect,arguments)}});return u}}},"253":function(e,t,n){"use strict";function commonChange(e,t){if(t.paths&&(t.paths=function ensurePath(e){var t=e;return"string"==typeof e?t=e.split("."):t}(t.paths)),t.paths[0]===t.key&&modifyDeep(e,t.paths.splice(1),t.value),t.batchUpdate)for(var n=0,r=t.batchUpdate.length;n<r;n++){var a=t.batchUpdate[n],u=a.paths,o=a.value;u[0]===t.key&&modifyDeep(e,u.splice(1),o)}return e}function modifyDeep(e,t,n){for(var r=e,a=t.length-1,u=0,o=a;u<o;u++)(r=r[t[u]])||console.warn("the obj defined by paths "+t+" is not exist!!");"function"==typeof n?n(r[t[a]]):r[t[a]]=n}function assign(e,t){if(!t)return e;for(var n in t)e[n]=t[n];return e}n.d(t,"b",function(){return commonChange}),n.d(t,"a",function(){return assign})},"2665":function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(246),u=n(2631),o=n(278),i=n(279),c=n(11),s=n(3),l=n(37),f=(n(2356),n(322)),p=n(321),d=n(7),m=n(8),g=n(457),h=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),v=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in r)return r.value;var u=r.get;return void 0!==u?u.call(n):void 0};Object(f.a)().actions.loadReducer();var y=function(e){function ReturnRefundSuccess(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ReturnRefundSuccess);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ReturnRefundSuccess.__proto__||Object.getPrototypeOf(ReturnRefundSuccess)).apply(this,arguments));return e.config={"navigationBarTitleText":"退单提交成功","enablePullDownRefresh":!0},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ReturnRefundSuccess,s["a"].Component),h(ReturnRefundSuccess,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.$router.params.rid;this.props.actions.returnsOkInit(e),window.addEventListener("popstate",function(e){Object(c.g)("mini::returnSuccessBackFlag",{"backFlag":"1"})})}},{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.props.actions.clean()}},{"key":"render","value":function render(){var e=this.$router.params.rid,t=this.props,n=(t.actions.action,t.main.returnsResult),a=Object(m.b)("isIphoneX"),c=n.returnPrice.totalPrice||0,l=n.returnPrice.applyPrice||c;return r.l.createElement(u.a,{"className":"ReturnRefundSuccess"},r.l.createElement(u.a,{"className":"returnS-info"},r.l.createElement(o.a,{"className":"success","src":"https://eshop-lcpro.oss-cn-shanghai.aliyuncs.com/mini/assets/image/common/success.png"}),r.l.createElement(i.a,{"className":"stext bold"},"退货退款申请提交成功！"),r.l.createElement(i.a,{"className":"stips"},"您的申请已提交审核，"),r.l.createElement(i.a,{"className":"stips"},"您可在我的-退货退款查看处理进度。")),r.l.createElement(u.a,{"className":"slist"},r.l.createElement(u.a,{"className":"sitem-text"},"退单编号：",n.id),r.l.createElement(u.a,{"className":"sitem sitem-text"},"退单金额：",r.l.createElement(i.a,{"className":"price bold"}," ￥",d.g.addZero(l)))),r.l.createElement(u.a,{"className":a?"bt-box ipx-bt-box":"bt-box"},r.l.createElement(u.a,{"className":"bt-item","onClick":function onClick(){s.a.navigateTo({"url":"/pages/package-C/order/return-detail/index?id="+e})}},"查看退货退款详情"),r.l.createElement(u.a,{"className":"bt-item","onClick":g.a},"返回首页")))}},{"key":"componentDidShow","value":function componentDidShow(){v(ReturnRefundSuccess.prototype.__proto__||Object.getPrototypeOf(ReturnRefundSuccess.prototype),"componentDidShow",this)&&v(ReturnRefundSuccess.prototype.__proto__||Object.getPrototypeOf(ReturnRefundSuccess.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){v(ReturnRefundSuccess.prototype.__proto__||Object.getPrototypeOf(ReturnRefundSuccess.prototype),"componentDidHide",this)&&v(ReturnRefundSuccess.prototype.__proto__||Object.getPrototypeOf(ReturnRefundSuccess.prototype),"componentDidHide",this).call(this)}}]),ReturnRefundSuccess}();y=Object(a.a)([Object(l.b)(p.a,f.a)],y),t.default=y},"321":function(e,t,n){"use strict";function store2Props(e){return{"main":e.packageCReturnRefundMain}}n.d(t,"a",function(){return store2Props})},"322":function(e,t,n){"use strict";var r;!function(e){e.commonChange="PackageCReturnRefund_commonChange",e.init="PackageCReturnRefund_INIT",e.clean="PackageCReturnRefund_CLEAN",e.returnSkuSecond="PackageCReturnRefund_returnSkuSecond"}(r||(r={}));var a=n(252),u=n(9),o=n(38),i=n(14),c=n(3),s=n(251),l=n(24),f=n(7);function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,a){try{var u=t[r](a),o=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(o).then(function(e){step("next",e)},function(e){step("throw",e)});e(o)}("next")})}}var p=function(e){var t={"commonChange":function commonChange(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];e({"type":r.commonChange,"payload":s.a.apply(void 0,arguments)})},"changeNum":function changeNum(e,n){var r=getData().main.skus;r[r.findIndex(function(t){return t.skuId==e})].num=n,t.commonChange({"paths":"main.skus","value":r}),r.findIndex(function(t){return t.skuId==e&&t.skuChecked})>-1&&this._setReturnGifts(),this._checkedAllPrice()},"_setReturnGifts":function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee3(){var e,n,r,a,u,o,i,c,s,f=this;return regeneratorRuntime.wrap(function _callee3$(p){for(;;)switch(p.prev=p.next){case 0:e=getData().main,(n=Object(l.fromJS)(e.tradeMarketings))&&n.size>0&&(r=n.filter(function(e){return 2==e.get("marketingType")}))&&r.size>0&&(a=Object(l.fromJS)(e.originTradeItems),u=Object(l.fromJS)(e.gifts),o=Object(l.fromJS)(e.returnOrderList),i=Object(l.fromJS)({}),c=Object(l.fromJS)(e.skus).filter(function(e){return e.get("skuChecked")}),t.commonChange([{"paths":"main.allReturnGifts","value":{}}]),s=Object(l.fromJS)({}),o.forEach(function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e){return regeneratorRuntime.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:e.get("returnItems").forEach(function(e){var t=i.get(e.get("skuId"));i=t?i.set(e.get("skuId"),t.set("num",t.get("num")+e.get("num"))):i.set(e.get("skuId"),e)}),e.get("returnGifts")&&e.get("returnGifts").forEach(function(e){var t=s.get(e.get("skuId"));s=t?s.set(e.get("skuId"),t+e.get("num")):s.set(e.get("skuId"),e.get("num"))});case 2:case"end":return t.stop()}},_callee,f)}));return function(t){return e.apply(this,arguments)}}()),r.forEach(function(e){if(4==e.get("subType"))e.get("skuIds").map(function(e){var t=a.get(a.findIndex(function(t){return t.get("skuId")==e})),n=i.get(e)?i.get(e).get("num"):0,r=c.findIndex(function(t){return t.get("skuId")==e}),u=r>-1?c.get(r).get("num"):0;return t.get("levelPrice")*(t.get("deliveredNum")-n-u)}).reduce(function(e,t){return e+t},0)<e.get("giftLevel").get("fullAmount")?(t.commonChange([{"paths":"main.giftFlag","value":1}]),f._setReturnGiftsMap(Object(l.fromJS)(getData().main.allReturnGifts),e)):t.commonChange([{"paths":"main.giftFlag","value":0}]);else if(5==e.get("subType")){e.get("skuIds").map(function(e){var t=a.get(a.findIndex(function(t){return t.get("skuId")==e})),n=i.get(e)?i.get(e).get("num"):0,r=c.findIndex(function(t){return t.get("skuId")==e}),u=r>-1?c.get(r).get("num"):0;return t.get("deliveredNum")-n-u}).reduce(function(e,t){return e+t},0)<e.get("giftLevel").get("fullCount")?(t.commonChange([{"paths":"main.giftFlag","value":1}]),f._setReturnGiftsMap(Object(l.fromJS)(getData().main.allReturnGifts),e)):t.commonChange([{"paths":"main.giftFlag","value":0}])}}),setTimeout(_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f._updateReturnGift(u,Object(l.fromJS)(getData().main.allReturnGifts),s);case 2:case"end":return e.stop()}},_callee2,f)})),0));case 3:case"end":return p.stop()}},_callee3,this)}));return function _setReturnGifts(){return e.apply(this,arguments)}}(),"_updateReturnGift":function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee4(e,n,r){var a,u;return regeneratorRuntime.wrap(function _callee4$(o){for(;;)switch(o.prev=o.next){case 0:a=e.map(function(e){var t=Object(l.fromJS)(n).get(e.get("skuId"))||0,a=e.get("deliveredNum")||0,u=(t=t<a?t:a)-(r.get(e.get("skuId"))||0);return u>0?e.set("num",u):e.set("num",0)}),u=getData(),1===u.main.giftFlag&&(a=a.map(function(e){return e.set("giftChecked",!0)})),t.commonChange([{"paths":"main.gifts","value":a.toJS()}]);case 4:case"end":return o.stop()}},_callee4,this)}));return function _updateReturnGift(t,n,r){return e.apply(this,arguments)}}(),"_setReturnGiftsMap":function _setReturnGiftsMap(e,n){n.get("giftLevel").get("fullGiftDetailList").forEach(function(t){var n=e.get(t.get("productId"));e=n?e.set(t.get("productId"),n+t.get("productNum")):e.set(t.get("productId"),t.get("productNum"))}),t.commonChange([{"paths":"main.allReturnGifts","value":e.toJS()}])},"checkAll":function checkAll(e){var n=getData().main,r=n.skus,a=n.gifts,u=Object(l.fromJS)(r).map(function(t){return t.set("skuChecked",!e)}),o=Object(l.fromJS)(a).map(function(t){return t.set("giftChecked",!e)});t.commonChange([{"paths":"main.skus","value":u.toJS()}]),t.commonChange([{"paths":"main.gifts","value":o.toJS()}]),this._checkedAllPrice(),this._setReturnGifts()},"checkOne":function checkOne(e){var n=getData().main.skus,r=n.findIndex(function(t){return e==t.skuId}),a=Object(l.fromJS)(getData().main).setIn(["skus",r,"skuChecked"],!n[r].skuChecked);t.commonChange([{"paths":"main.skus","value":a.toJS().skus}]),this._checkedAllPrice(),this._setReturnGifts()},"checkJDOne":function checkJDOne(e){getData().main.skus;var n=[];getData().main.skus.forEach(function(t){t.thirdPlatformSubOrderId==e&&(t.skuChecked=!t.skuChecked),n.push(t)}),t.commonChange([{"paths":"main.skus","value":n}]),this._checkedAllPrice(),this._setReturnGifts()},"checkGift":function checkGift(e){var n=getData().main,r=n.gifts;if(1!==n.giftFlag){var a=Object(l.fromJS)(r).map(function(e){return e.set("giftChecked",!e.get("giftChecked"))});t.commonChange([{"paths":"main.gifts","value":a.toJS()}])}this._setReturnGifts()},"returnSkuSecond":function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee5(){var e,t,n,r,a,o,s,f,p,d,m;return regeneratorRuntime.wrap(function _callee5$(g){for(;;)switch(g.prev=g.next){case 0:if(e=getData(),t=e.main,n=t.tid,r=t.skus,a=t.gifts,o=t.newPoints,s=t.newPrice,f=t.thirdPlatformType,p=(p=Object(l.Map)()).set("tid",n),d=(d=r).filter(function(e){return e.skuChecked&&e.num>0}),m=!1,a&&a.length>0&&(m=a.every(function(e){return e.giftChecked})||!1),0!=d.length){g.next=10;break}return Object(i.e)({"title":"请选择退货商品","icon":"none","duration":2e3}),g.abrupt("return");case 10:return p=(p=(p=(p=(p=p.set("returnItems",d)).set("returnPrice",{"totalPrice":s})).set("returnPoints",{"applyPoints":Math.floor(o)})).set("returnGift",m)).set("thirdPlatformType",f),g.next=17,u.a.returnOrderController.transfer(p.toJS());case 17:return c.a.navigateTo({"url":"/pages/package-C/order/return-refund/return-second-step/index?tid="+n}),g.abrupt("return");case 19:case"end":return g.stop()}},_callee5,this)}));return function returnSkuSecond(){return e.apply(this,arguments)}}(),"_checkedAllPrice":function _checkedAllPrice(){var e=getData().main,n=e.skus,r=e.isReturn,a=e.totalPrice,u=e.tradePoints;if(r){var o=n.filter(function(e){return e.skuChecked}).map(function(e){return e.num<e.canReturnNum?f.g.mul(e.price,e.num):f.g.sub(e.splitPrice,f.g.mul(e.price,f.g.sub(e.skuBuyNum,e.canReturnNum)))}).reduce(function(e,t){return f.g.add(e,t)},0)||0,i=n.filter(function(e){return e.skuChecked}).map(function(e){return e.num<e.canReturnNum?f.g.mul(e.skuPoint,e.num):f.g.sub(e.points||0,Math.floor(f.g.mul(e.skuPoint,f.g.sub(e.skuBuyNum,e.canReturnNum))))}).reduce(function(e,t){return f.g.add(e,t)},0)||0;t.commonChange([{"paths":"main.newPrice","value":o},{"paths":"main.newPoints","value":i}])}else t.commonChange([{"paths":"main.newPrice","value":a},{"paths":"main.newPpoints","value":u}])},"changeFromValue":function changeFromValue(e,n){t.commonChange([{"paths":"main."+e,"value":n}])},"_chooseImage":function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function _callee6(t){var n,a,u;return regeneratorRuntime.wrap(function _callee6$(t){for(;;)switch(t.prev=t.next){case 0:return n=512e4,t.next=3,Object(f.c)(n);case 3:a=t.sent,u=a.context,e({"type":r.commonChange,"payload":{"paths":"main.images","value":function value(e){return e.push(u[0])}}});case 6:case"end":return t.stop()}},_callee6,this)}));return function _chooseImage(e){return t.apply(this,arguments)}}(),"_deleteImage":function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function _callee7(t){return regeneratorRuntime.wrap(function _callee7$(n){for(;;)switch(n.prev=n.next){case 0:e({"type":r.commonChange,"payload":{"paths":"main.images","value":function value(e){e.splice(t,1)}}});case 1:case"end":return n.stop()}},_callee7,this)}));return function _deleteImage(e){return t.apply(this,arguments)}}(),"applyReturns":function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee9(){var e,t,n,r,a,o,s,p,d,m,g,h,v,y,k,R,_,b,P,O,w,x,C,I,S,j,T=this;return regeneratorRuntime.wrap(function _callee9$(G){for(;;)switch(G.prev=G.next){case 0:if(Object(i.c)({"title":"申请提交中,请稍后..."}),setTimeout(function(){Object(i.a)()},2e3),e=getData(),t=e.main,n=t.skus,r=t.gifts,a=t.tid,o=t.selectedReturnReason,s=t.newPrice,p=t.images,d=t.isReturn,t.selectedReturnWay,m=t.description,g=t.totalPrice,h=t.giftSecond,v=t.returnOrderList,y=t.thirdPlatformType,k=t.returnDoorAble,R=t.reserveDateBegin,_=t.reserveDateEnd,b=Object(l.Map)(),!1,b=b.set("tid",a),Object(f.a)(o,"退货原因",{"required":!0})){G.next=8;break}return G.abrupt("return");case 8:if(b=(b=b.set("returnReason",Object(l.Map)().set(o,0))).set("images",p.map(function(e,t){return JSON.stringify({"uid":t+1,"status":"done","url":e})})),!d){G.next=22;break}if(0!=(n=n.filter(function(e){return e.num>0})).length){G.next=15;break}return Object(i.e)({"title":"请填写退货数量","icon":"none","duration":2e3}),G.abrupt("return");case 15:b=2==y&&k?(b=(b=b.set("returnWay",Object(l.Map)().set(2,0))).set("reserveDateBegin",R)).set("reserveDateEnd",_):b.set("returnWay",Object(l.Map)().set(1,0)),P=n.concat(h).filter(function(e){return!e.providerId}),O={},((w=n.concat(h).filter(function(e){return null!=e.providerId&&void 0!=e.providerId}).reduce(function(e,t){return!O[t.providerId]&&(O[t.providerId]=e.push(t)),e},[])).length>1||P.length>0&&w.length>0)&&!0,G.next=27;break;case 22:x=n.concat(r).filter(function(e){return!getReturnVal(v,e)&&null!=e.providerId&&void 0!=e.providerId}),C=n.concat(r).filter(function(e){return!getReturnVal(v,e)&&!e.providerId}),I=x.map(function(e){return e.providerId}),((I=Array.from(new Set(I))).length>1||C.length>0&&I.length>0)&&!0;case 27:if(Object(f.a)(m.trim(),"退货说明",{"required":!0,"minLength":1,"maxLength":100})){G.next=29;break}return G.abrupt("return");case 29:if(b=(b=b.set("description",m.trim())).set("returnItems",n),this._checkedAllPrice(),g=d?s:g,b=b.set("returnPrice",{"applyStatus":!1,"applyPrice":0,"totalPrice":g}),S=void 0,r&&r.length>0&&(S=r.every(function(e){return e.giftChecked})||!1),b=b.set("returnGift",S),j=void 0,!d){G.next=44;break}return G.next=41,u.a.returnOrderController.create(b.toJS());case 41:j=G.sent,G.next=47;break;case 44:return G.next=46,u.a.returnOrderController.createRefund(b.toJS());case 46:j=G.sent;case 47:if(Object(i.e)({"title":"退单提交成功","icon":"none","duration":2e3,"success":function success(){setTimeout(_asyncToGenerator(regeneratorRuntime.mark(function _callee8(){return regeneratorRuntime.wrap(function _callee8$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.navigateTo({"url":"/pages/package-C/order/return-refund/return-refund-success/index?rid="+j});case 2:case"end":return e.stop()}},_callee8,T)})),2e3)}}),"K-000000"!=j.code){G.next=52;break}history.push("/applySuccess/"+j.context),G.next=53;break;case 52:return G.abrupt("return");case 53:case"end":return G.stop()}},_callee9,this)}));return function applyReturns(){return e.apply(this,arguments)}}(),"async":function async(){}};return t};function getReturnVal(e,t){var n=!1;return e.forEach(function(e){e.returnItems.forEach(function(e){e.skuId==t.skuId&&(n=!0)}),e.returnGifts.forEach(function(e){e.skuId==t.skuId&&(n=!0)})}),n}function getData(){return{"main":Object(o.c)("packageCReturnRefundMain")}}var d=n(257),m=n(253),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h={"isReady":!1,"skus":[],"tradeMarketings":[],"gifts":[],"giftSecond":[],"originTradeItems":[],"returnOrderList":[],"tid":"","totalPrice":0,"tradePoints":0,"isReturn":!1,"returnReasonList":[],"returnWayList":[],"selectedReturnReason":"","selectedReturnWay":1,"description":"","images":[],"returnsResult":{"id":"","returnPrice":{"totalPrice":0}},"newPrice":0,"newPoints":0,"allReturnGifts":{},"giftFlag":0,"bigImageShow":!1,"returnDoorAble":!1};function main(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments[1],n=t.type,a=t.payload;return Object(d.a)(e,function(e){switch(n){case r.commonChange:return m.b(e,g({},a,{"key":"main"}));case r.init:for(var t in e.isReady=!0,a.main)e[t]=a.main[t];return e;case r.clean:for(var u in h)e[u]=h[u];return e}})}function actions_asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,a){try{var u=t[r](a),o=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(o).then(function(e){step("next",e)},function(e){step("throw",e)});e(o)}("next")})}}t.a=function(e){var t={"action":Object(a.a)(p)(e),"init":function(){var n=actions_asyncToGenerator(regeneratorRuntime.mark(function _callee(n){var a,o,i,c,s,l,p,d;return regeneratorRuntime.wrap(function _callee$(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,t.loadReducer();case 2:return m.next=4,Promise.all([u.a.returnOrderBaseController.tradeDetails(n),u.a.returnOrderBaseController.findCompletedByTid(n)]);case 4:return a=m.sent,o=a[0],i=a[1],c="COMPLETED"==o.tradeState.flowState||2==o.thirdPlatformType,s=[],l=void 0,p=0,d=0,c&&(s=o.tradeItems,o.tradeItems=o.tradeItems.filter(function(e){return e.canReturnNum>0}),o.gifts&&(o.gifts=o.gifts.filter(function(e){return e.canReturnNum>0}),o.gifts.forEach(function(e){e.num=0})),o.tradeItems.forEach(function(e){e.skuBuyNum=e.num,e.price=f.g.addZeroFloor(e.splitPrice/e.num),e.skuPoint=f.g.addZeroFloor((e.points||0)/e.num),e.num=e.canReturnNum})),m.next=15,u.a.returnOrderBaseController.findReturnReason();case 15:if(m.t0=m.sent,m.t0){m.next=18;break}m.t0=[];case 18:l=(l=m.t0).map(function(e){for(var t in e)return{"id":t,"name":e[t]}}),p=p+i.reduce(function(e,t){return e+t.returnPrice.applyPrice},0)||0,d=d+i.reduce(function(e,t){return e+(t.returnPoints?t.returnPoints.applyPoints:0)},0)||0,e({"type":r.init,"payload":{"main":{"tid":n,"tradeMarketings":o.tradeMarketings,"gifts":o.gifts,"totalPrice":o.tradePrice.totalPrice-p,"tradePoints":o.tradePrice.points-d||0,"originTradeItems":s,"returnOrderList":i,"isReturn":c,"skus":o.tradeItems,"returnReasonList":l,"returnWayList":[],"thirdPlatformType":o.thirdPlatformType}}});case 23:case"end":return m.stop()}},_callee,this)}));return function init(e){return n.apply(this,arguments)}}(),"initApplyPage":function(){var n=actions_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){var n,a,o,i,c;return regeneratorRuntime.wrap(function _callee2$(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.loadReducer();case 2:return s.next=4,Promise.all([u.a.returnOrderBaseController.findReturnReason(),u.a.returnOrderBaseController.findReturnWay(),u.a.returnOrderController.findTransfer()]);case 4:if(n=s.sent,a=n[0],o=n[1],a=a.map(function(e){for(var t in e)return{"id":t,"name":e[t]}}),o=o.map(function(e){for(var t in e)return{"id":t,"name":e[t]}}),i=void 0,2!=n[2].thirdPlatformType){s.next=17;break}return c={"tid":n[2].tid,"thirdPlatformSkuIds":n[2].returnItems.map(function(e){return e.thirdPlatformSkuId})},s.next=14,u.a.returnOrderBaseController.returnDoorAble(c);case 14:i=s.sent,s.next=18;break;case 17:i=!1;case 18:e({"type":r.init,"payload":{"main":{"tid":n[2].tid,"totalPrice":n[2].returnPrice.totalPrice,"tradePoints":n[2].returnPoints.applyPoints||0,"isReturn":!0,"skus":n[2].returnItems,"giftSecond":n[2].returnGifts,"returnReasonList":a,"returnWayList":o,"thirdPlatformType":n[2].thirdPlatformType,"returnDoorAble":i}}});case 19:case"end":return s.stop()}},_callee2,this)}));return function initApplyPage(){return n.apply(this,arguments)}}(),"returnsOkInit":function(){var n=actions_asyncToGenerator(regeneratorRuntime.mark(function _callee3(n){var a;return regeneratorRuntime.wrap(function _callee3$(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.loadReducer();case 2:return o.prev=2,o.next=5,u.a.returnOrderBaseController.findById(n);case 5:a=o.sent,e({"type":r.init,"payload":{"main":{"returnsResult":a}}}),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(2),Object(i.e)({"title":"退单不存在","icon":"none","duration":2e3});case 12:case"end":return o.stop()}},_callee3,this,[[2,9]])}));return function returnsOkInit(e){return n.apply(this,arguments)}}(),"clean":function(){var n=actions_asyncToGenerator(regeneratorRuntime.mark(function _callee4(){return regeneratorRuntime.wrap(function _callee4$(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=!1,!n.t0){n.next=4;break}return n.next=4,t.unloadReducer();case 4:e({"type":r.clean});case 5:case"end":return n.stop()}},_callee4,this)}));return function clean(){return n.apply(this,arguments)}}(),"loadReducer":function(){var e=actions_asyncToGenerator(regeneratorRuntime.mark(function _callee5(){return regeneratorRuntime.wrap(function _callee5$(e){for(;;)switch(e.prev=e.next){case 0:o.d({"packageCReturnRefundMain":main});case 1:case"end":return e.stop()}},_callee5,this)}));return function loadReducer(){return e.apply(this,arguments)}}(),"unloadReducer":function(){var e=actions_asyncToGenerator(regeneratorRuntime.mark(function _callee6(){return regeneratorRuntime.wrap(function _callee6$(e){for(;;)switch(e.prev=e.next){case 0:o.b&&o.b(["packageCReturnRefundMain"]);case 1:case"end":return e.stop()}},_callee6,this)}));return function unloadReducer(){return e.apply(this,arguments)}}()};return{"actions":t}}},"457":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(11),a=n(3),u=n(4),o=n(16),i=function goMain(){if(Object(o.e)())Object(o.i)(!0);else{var e=Object(r.d)(u.c.CHANNEL_TYPE_BL);if(8==e||12==e){var t=Object(r.d)("canteenId"),n=Object(r.d)("canteen-storeId"),i="/pages/package-A/store/store-main/index";n&&(i+="?storeId="+n,t&&(i+="&canteenId="+t)),a.a.navigateTo({"url":i})}else a.a.navigateTo({"url":"/pages/index/index"})}}}}]);