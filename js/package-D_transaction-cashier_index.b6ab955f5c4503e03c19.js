(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{"251":function(e,t,n){"use strict";function extraPathsValue(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],a=t.length>=2?t[1]:null,o=null;"function"==typeof t[t.length-1]&&(o=t[t.length-1]);var c=[],i=void 0,s=[];return"string"==typeof r&&a&&a.props&&a.props["data-paths"]?(c=a.props["data-paths"].split(/[,\.]/gi),i=r):r instanceof Array&&r[0].hasOwnProperty("paths")&&r[0].hasOwnProperty("value")?s=r.map(function(e){var t=e.paths,n=e.value,r=t;return"string"==typeof r&&(r=t.split(/[,\.]/gi)),{"paths":r,"value":n}}):"string"==typeof r?(c=r.split(/[,\.]/gi),i=a,console.log(c,i,103)):r.hasOwnProperty("target")&&r.target["data-paths"]&&void 0!=r.target.value?(c=r.target["data-paths"].split(/[,\.]/gi),i=r.target.value):r.hasOwnProperty("target")&&r.target.dataset&&r.target.dataset.paths?(c=r.target.dataset.paths.split(/[,\.]/gi),i=r.target.value):r instanceof Array&&a instanceof Array&&a[0]&&"function"==typeof a[0].type&&a[0].props&&a[0].props["data-paths"]?(c=a[0].props["data-paths"].split(/[,\.]/gi),i=r):r instanceof Array?(c=r,i=a):a&&a.hasOwnProperty("props")&&a.props.hasOwnProperty("data-paths")&&a.props.hasOwnProperty("value")&&(c=a.props["data-paths"].split(/[,\.]/gi),i=a.props.value),o?o({"paths":c,"value":i,"batchUpdate":s,"raw":t}):{"paths":c,"value":i,"batchUpdate":s}}n.d(t,"a",function(){return extraPathsValue})},"2514":function(e,t,n){},"2516":function(e,t,n){e.exports=n.p+"static/images/logo@2x.png"},"252":function(e,t,n){"use strict";n.d(t,"a",function(){return getActionProxy});function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,a){try{var o=t[r](a),c=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(c).then(function(e){step("next",e)},function(e){step("throw",e)});e(c)}("next")})}}var r,a=[(r=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t){var n,r=e.methodName,a=e.target;return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if("query"!==r||!a.commonChange){e.next=11;break}return console.log("beginMiddware"),a.commonChange(["main","isLoading"],!0),e.next=5,t();case 5:return n=e.sent,a.commonChange(["main","isLoading"],!1),console.log("end Middware"),e.abrupt("return",n);case 11:return e.abrupt("return",t());case 12:case"end":return e.stop()}},_callee,void 0)})),function loadingM(e,t){return r.apply(this,arguments)})],o=function compose(e){var t,n,r=(t=_asyncToGenerator(regeneratorRuntime.mark(function _callee4(t,n,o){var c,i;return regeneratorRuntime.wrap(function _callee4$(s){for(;;)switch(s.prev=s.next){case 0:return c=t+1,i=r.bind(null,c,n,o),c===a&&(i=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee3(){var e;return regeneratorRuntime.wrap(function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},_callee3,this)}));return function _next(){return e.apply(this,arguments)}}()),s.abrupt("return",e[t](n,i));case 4:case"end":return s.stop()}},_callee4,this)})),function _dispatch(e,n,r){return t.apply(this,arguments)}),a=e.length;return n=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e,t){return regeneratorRuntime.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r(0,e,t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},_callee2,void 0)})),function(e,t){return n.apply(this,arguments)}};function getActionProxy(e){var t={},n=o(a);return function(r){var a=e(r),o=new Proxy(a,{"get":function get(e,r,c){var i=this,s=String(r);return t[s]||"function"!=typeof a[r]||(t[s]=_asyncToGenerator(regeneratorRuntime.mark(function _callee5(){for(var e=arguments.length,t=Array(e),c=0;c<e;c++)t[c]=arguments[c];var u,p;return regeneratorRuntime.wrap(function _callee5$(e){for(;;)switch(e.prev=e.next){case 0:return u=t,e.next=3,n({"methodName":s,"arguments":u,"target":o},function(){return a[r].apply(o,u)});case 3:return p=e.sent,e.abrupt("return",p);case 5:case"end":return e.stop()}},_callee5,i)}))),t[s]?t[s]:Reflect.get(e,r,c)},"set":function set(e,t,n,r){return Reflect.set(e,t,n,r)},"apply":function apply(e,t,n){return Reflect.apply.apply(Reflect,arguments)}});return o}}},"253":function(e,t,n){"use strict";function commonChange(e,t){if(t.paths&&(t.paths=function ensurePath(e){var t=e;return"string"==typeof e?t=e.split("."):t}(t.paths)),t.paths[0]===t.key&&modifyDeep(e,t.paths.splice(1),t.value),t.batchUpdate)for(var n=0,r=t.batchUpdate.length;n<r;n++){var a=t.batchUpdate[n],o=a.paths,c=a.value;o[0]===t.key&&modifyDeep(e,o.splice(1),c)}return e}function modifyDeep(e,t,n){for(var r=e,a=t.length-1,o=0,c=a;o<c;o++)(r=r[t[o]])||console.warn("the obj defined by paths "+t+" is not exist!!");"function"==typeof n?n(r[t[a]]):r[t[a]]=n}function assign(e,t){if(!t)return e;for(var n in t)e[n]=t[n];return e}n.d(t,"b",function(){return commonChange}),n.d(t,"a",function(){return assign})},"2818":function(e,t,n){"use strict";n.r(t);var r,a=n(5),o=n(246),c=n(2631),i=n(278),s=n(3),u=n(37);n(2514);!function(e){e.commonChange="PackageDTransactionCashier_commonChange",e.init="PackageDTransactionCashier_INIT",e.clean="PackageDTransactionCashier_CLEAN"}(r||(r={}));var p=n(252),l=n(9),f=n(38),h=n(251),m=n(14);var d=function(e){return{"commonChange":function commonChange(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];e({"type":r.commonChange,"payload":h.a.apply(void 0,arguments)})},"_submit":function(){var e=function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,a){try{var o=t[r](a),c=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(c).then(function(e){step("next",e)},function(e){step("throw",e)});e(c)}("next")})}}(regeneratorRuntime.mark(function _callee(e){return regeneratorRuntime.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return Object(m.c)(),t.prev=1,t.next=4,l.a.transactionRecordsController.payCommit(e);case 4:t.sent,s.a.navigateTo({"url":"/pages/package-C/order/order-list/index"}),Object(m.a)(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),Object(m.a)();case 12:case"end":return t.stop()}},_callee,this,[[1,9]])}));return function _submit(t){return e.apply(this,arguments)}}()}};var g=n(257),v=n(253),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_={"isReady":!1,"payInfo":[],"totalPrice":0,"goodsNameTitle":"","balance":0};function main(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments[1],n=t.type,a=t.payload;return Object(g.a)(e,function(e){switch(n){case r.commonChange:return v.b(e,y({},a,{"key":"main"}));case r.init:for(var t in e.isReady=!0,a.main)e[t]=a.main[t];return e;case r.clean:for(var o in _)e[o]=_[o];return e}})}function actions_asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,a){try{var o=t[r](a),c=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(c).then(function(e){step("next",e)},function(e){step("throw",e)});e(c)}("next")})}}var w=function(e){var t={"action":Object(p.a)(d)(e),"init":function(){var n=actions_asyncToGenerator(regeneratorRuntime.mark(function _callee(n,a){var o,c,i,s;return regeneratorRuntime.wrap(function _callee$(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,t.loadReducer();case 2:return n||(n=a[0].tid),u.next=5,Promise.all([l.a.transactionRecordsController.getTrade(n),l.a.transactionRecordsController.getBalance()]);case 5:o=u.sent,c=o[0].tradePrice.totalPrice,i=o[0].tradeItems[0].skuName+(o[0].tradeItems.length>1?"等"+o[0].tradeItems.length+"商品":""),s=""+o[1].balance,e({"type":r.init,"payload":{"main":{"totalPrice":c,"goodsNameTitle":i,"balance":s}}});case 10:case"end":return u.stop()}},_callee,this)}));return function init(e,t){return n.apply(this,arguments)}}(),"clean":function(){var n=actions_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=!1,!n.t0){n.next=4;break}return n.next=4,t.unloadReducer();case 4:e({"type":r.clean});case 5:case"end":return n.stop()}},_callee2,this)}));return function clean(){return n.apply(this,arguments)}}(),"loadReducer":function(){var e=actions_asyncToGenerator(regeneratorRuntime.mark(function _callee3(){return regeneratorRuntime.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:f.d({"packageDTransactionCashierMain":main});case 1:case"end":return e.stop()}},_callee3,this)}));return function loadReducer(){return e.apply(this,arguments)}}(),"unloadReducer":function(){var e=actions_asyncToGenerator(regeneratorRuntime.mark(function _callee4(){return regeneratorRuntime.wrap(function _callee4$(e){for(;;)switch(e.prev=e.next){case 0:f.b?f.b(["packageDTransactionCashierMain"]):console.error("请在redux/store中实现deregister逻辑. ");case 1:case"end":return e.stop()}},_callee4,this)}));return function unloadReducer(){return e.apply(this,arguments)}}()};return{"actions":t}};var b=n(2516),P=n.n(b),k=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),x=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(n):void 0};function transaction_cashier_asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,a){try{var o=t[r](a),c=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(c).then(function(e){step("next",e)},function(e){step("throw",e)});e(c)}("next")})}}w().actions.loadReducer();var R=function(e){function PackageDTransactionCashier(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PackageDTransactionCashier);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PackageDTransactionCashier.__proto__||Object.getPrototypeOf(PackageDTransactionCashier)).apply(this,arguments));return e.config={"navigationBarTitleText":"收银台","enablePullDownRefresh":!0},e._debounce=function(e,t){var n=void 0;return function(){for(var r=this,a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];clearTimeout(n),n=setTimeout(function(){n=null,e.apply(r,o)},t)}},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PackageDTransactionCashier,s["a"].Component),k(PackageDTransactionCashier,[{"key":"componentWillMount","value":function(){var e=transaction_cashier_asyncToGenerator(regeneratorRuntime.mark(function _callee(){var e,t,n;return regeneratorRuntime.wrap(function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return e=decodeURIComponent(this.$router.params.param?this.$router.params.param:""),t=this.$router.params.tid,n=e&&JSON.parse(e),r.next=3,this.props.actions.init(t,n);case 3:case"end":return r.stop()}},_callee,this)}));return function componentWillMount(){return e.apply(this,arguments)}}()},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidUpdate","value":function componentDidUpdate(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.props.actions.clean()}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.actions.action,r=t.main,o=r.totalPrice,s=r.goodsNameTitle,u=(r.balance,this.$router.params.tid);return a.l.createElement(c.a,{"className":"packageD-transaction-cashier"},a.l.createElement(c.a,{"className":"top"},a.l.createElement(c.a,{"className":"goods-name"},s),a.l.createElement(c.a,{"className":"money"},"￥",o.toFixed(2))),a.l.createElement(c.a,{"className":"list"},a.l.createElement(c.a,{"className":"canteen-name-wrap"},a.l.createElement(i.a,{"src":P.a,"className":"logo"}),a.l.createElement(c.a,{"className":"canteen-name"},"徐州市民卡智慧食堂帐户"))),a.l.createElement(c.a,{"className":"submit-pay-wrap","onClick":transaction_cashier_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){var t,r;return regeneratorRuntime.wrap(function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:u||(t=decodeURIComponent(e.$router.params.param?e.$router.params.param:""),r=t&&JSON.parse(t),u=r[0].tid),e._debounce(n._submit(u),1e3);case 2:case"end":return a.stop()}},_callee2,e)}))},a.l.createElement(c.a,{"className":"submit-pay"},"确认支付")))}},{"key":"componentDidShow","value":function componentDidShow(){x(PackageDTransactionCashier.prototype.__proto__||Object.getPrototypeOf(PackageDTransactionCashier.prototype),"componentDidShow",this)&&x(PackageDTransactionCashier.prototype.__proto__||Object.getPrototypeOf(PackageDTransactionCashier.prototype),"componentDidShow",this).call(this)}}]),PackageDTransactionCashier}();R=Object(o.a)([Object(u.b)(function store2Props(e){return{"main":e.packageDTransactionCashierMain}},w)],R);t.default=R}}]);