(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{"2497":function(e,t,n){},"2499":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAABF5JREFUeF7t3MtL1FEUB/Dz0zFnHIugZeWDIkPKRzZgi6QHbiShqFW4aRMIUevAXdQ/0KLcW4sWtUgjEKIgiB6IlWkZZi97bCLJZkbHceI3j8VMYuPEufd47ldwI/O755zv53edKzg/L/V9IkX4UpuAB2C1tunBAKzbF8DKfQEMYO0JKJ8P78EAVp6A8vGwgwGsPAHl42EHA1h5AsrHww4GsPIElI+HHQxg5QkoHw87GMDKE1A+HnYwgJUnoHw87GAAK09A+XjO7OBEIkGjY6/TnC27dlJFRYVy2sx4TgC//zhDXSdP08Tbd+mhG3dso6Fr/VRXs1k9shPA3T29NDh8Pw/zSOcBuj1wBcAaEti4PUKzv+byRtlQHabZqWcaxltxBid2cHBrE80vJPKCCJSXU+LLGIA1JABgDYorzABgAKtNAO/Bamkd+js4VNNM8fkFHLK03swA1iqbnQvAAFabgBOHLOxgtfdvZjAAKweuqm2hWHwep2itzgDWKpudC8AAVpuAE6do7GC1929msHBdK0VjcRyytDoDWKtsdi4AA1htAk4csrCD1d6/mcGq6/fQ72gMhyytzgDWKpudC8AAVpuAE4cs7GC19y8OWU7s4PX1bTQXjeIUrXUjA1irbHYuAANYbQKs78HTHz7TmfMX6MGjpxQv+J+oXKKe5/0VbrE/8y9c5nIqvL7wUw25guVlZSXD+jWW67PYBUPBSurYF6HLl/pYnzTABry4uEjNB4/S+ORUsTM7+Tr/cRKj926xPTOEDXjkxStq6zzhJNpqh35y9wZFWnev9rKiXg/gomLifdGaBPYfW9Ry6Bh+Rf/j3lizv6L9ufzHF53ru0gPH49QLJ7/P1Gr2ROpVIr871K/Cp/PkVuncl3pz8ry2/mfnqpCQdrfvnftHrJKxeC4brmPrpR5HiW/jXOUE7Um23uwpCkBLEmDoRcAM4QqaUkAS9Jg6AXADKFKWhLAkjQYegEwQ6iSlgSwJA2GXgDMEKqkJQEsSYOhFwAzhCppSQBL0mDoBcAMoUpaEsCSNBh6ATBDqJKWBLAkDYZeAMwQqqQlASxJg6EXADOEKmlJAEvSYOgFwAyhSloSwJI0GHoBMEOokpYEsCQNhl4AzBCqpCUBLEmDoRcAM4QqaUkAS9Jg6AXADKFKWhLAkjQYegEwQ6iSltzU0E4/fs7mtRSuCtHc9IikNll6ceLjo8dPnaWbd4bzAuw63EFD1/tZQpW0qBPAn2a+UndPLz0ff5PO3n9swuDAVaqv3SLJgqUXJ4D95JLJJL2cmKSlpSVqamygQCDAEqi0RZ0Blha8qX4AbCppS3UAbCl4U2UBbCppS3UAbCl4U2UBbCppS3UAbCl4U2UBbCppS3UAbCl4U2UBbCppS3UAbCl4U2UBbCppS3UAbCl4U2UBbCppS3UAbCl4U2UBbCppS3UAbCl4U2UBbCppS3UAbCl4U2UBbCppS3UAbCl4U2UBbCppS3X+AOf7tbYZ+4E1AAAAAElFTkSuQmCC"},"2500":function(e,t,n){},"2502":function(e,t,n){},"251":function(e,t,n){"use strict";function extraPathsValue(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],a=t.length>=2?t[1]:null,o=null;"function"==typeof t[t.length-1]&&(o=t[t.length-1]);var c=[],i=void 0,l=[];return"string"==typeof r&&a&&a.props&&a.props["data-paths"]?(c=a.props["data-paths"].split(/[,\.]/gi),i=r):r instanceof Array&&r[0].hasOwnProperty("paths")&&r[0].hasOwnProperty("value")?l=r.map(function(e){var t=e.paths,n=e.value,r=t;return"string"==typeof r&&(r=t.split(/[,\.]/gi)),{"paths":r,"value":n}}):"string"==typeof r?(c=r.split(/[,\.]/gi),i=a,console.log(c,i,103)):r.hasOwnProperty("target")&&r.target["data-paths"]&&void 0!=r.target.value?(c=r.target["data-paths"].split(/[,\.]/gi),i=r.target.value):r.hasOwnProperty("target")&&r.target.dataset&&r.target.dataset.paths?(c=r.target.dataset.paths.split(/[,\.]/gi),i=r.target.value):r instanceof Array&&a instanceof Array&&a[0]&&"function"==typeof a[0].type&&a[0].props&&a[0].props["data-paths"]?(c=a[0].props["data-paths"].split(/[,\.]/gi),i=r):r instanceof Array?(c=r,i=a):a&&a.hasOwnProperty("props")&&a.props.hasOwnProperty("data-paths")&&a.props.hasOwnProperty("value")&&(c=a.props["data-paths"].split(/[,\.]/gi),i=a.props.value),o?o({"paths":c,"value":i,"batchUpdate":l,"raw":t}):{"paths":c,"value":i,"batchUpdate":l}}n.d(t,"a",function(){return extraPathsValue})},"252":function(e,t,n){"use strict";n.d(t,"a",function(){return getActionProxy});function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,a){try{var o=t[r](a),c=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(c).then(function(e){step("next",e)},function(e){step("throw",e)});e(c)}("next")})}}var r,a=[(r=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t){var n,r=e.methodName,a=e.target;return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if("query"!==r||!a.commonChange){e.next=11;break}return console.log("beginMiddware"),a.commonChange(["main","isLoading"],!0),e.next=5,t();case 5:return n=e.sent,a.commonChange(["main","isLoading"],!1),console.log("end Middware"),e.abrupt("return",n);case 11:return e.abrupt("return",t());case 12:case"end":return e.stop()}},_callee,void 0)})),function loadingM(e,t){return r.apply(this,arguments)})],o=function compose(e){var t,n,r=(t=_asyncToGenerator(regeneratorRuntime.mark(function _callee4(t,n,o){var c,i;return regeneratorRuntime.wrap(function _callee4$(l){for(;;)switch(l.prev=l.next){case 0:return c=t+1,i=r.bind(null,c,n,o),c===a&&(i=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee3(){var e;return regeneratorRuntime.wrap(function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},_callee3,this)}));return function _next(){return e.apply(this,arguments)}}()),l.abrupt("return",e[t](n,i));case 4:case"end":return l.stop()}},_callee4,this)})),function _dispatch(e,n,r){return t.apply(this,arguments)}),a=e.length;return n=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e,t){return regeneratorRuntime.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r(0,e,t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},_callee2,void 0)})),function(e,t){return n.apply(this,arguments)}};function getActionProxy(e){var t={},n=o(a);return function(r){var a=e(r),o=new Proxy(a,{"get":function get(e,r,c){var i=this,l=String(r);return t[l]||"function"!=typeof a[r]||(t[l]=_asyncToGenerator(regeneratorRuntime.mark(function _callee5(){for(var e=arguments.length,t=Array(e),c=0;c<e;c++)t[c]=arguments[c];var u,s;return regeneratorRuntime.wrap(function _callee5$(e){for(;;)switch(e.prev=e.next){case 0:return u=t,e.next=3,n({"methodName":l,"arguments":u,"target":o},function(){return a[r].apply(o,u)});case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}},_callee5,i)}))),t[l]?t[l]:Reflect.get(e,r,c)},"set":function set(e,t,n,r){return Reflect.set(e,t,n,r)},"apply":function apply(e,t,n){return Reflect.apply.apply(Reflect,arguments)}});return o}}},"253":function(e,t,n){"use strict";function commonChange(e,t){if(t.paths&&(t.paths=function ensurePath(e){var t=e;return"string"==typeof e?t=e.split("."):t}(t.paths)),t.paths[0]===t.key&&modifyDeep(e,t.paths.splice(1),t.value),t.batchUpdate)for(var n=0,r=t.batchUpdate.length;n<r;n++){var a=t.batchUpdate[n],o=a.paths,c=a.value;o[0]===t.key&&modifyDeep(e,o.splice(1),c)}return e}function modifyDeep(e,t,n){for(var r=e,a=t.length-1,o=0,c=a;o<c;o++)(r=r[t[o]])||console.warn("the obj defined by paths "+t+" is not exist!!");"function"==typeof n?n(r[t[a]]):r[t[a]]=n}function assign(e,t){if(!t)return e;for(var n in t)e[n]=t[n];return e}n.d(t,"b",function(){return commonChange}),n.d(t,"a",function(){return assign})},"2761":function(e,t,n){"use strict";n.r(t);var r,a=n(5),o=n(246),c=n(3),i=n(271),l=n(9),u=n(37);!function(e){e.commonChange="Index_commonChange",e.init="Index_INIT",e.clean="Index_CLEAN"}(r||(r={}));var s=n(252),p=n(38),f=n(251),d=function(e){return{"commonChange":function commonChange(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];e({"type":r.commonChange,"payload":f.a.apply(void 0,arguments)})}}},m=n(257),h=n(253),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y={"oldCardData":null};function main_main(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments[1],n=t.type,a=t.payload;return Object(m.a)(e,function(e){switch(n){case r.commonChange:return h.b(e,g({},a,{"key":"main"}));case r.init:for(var t in e.isReady=!0,a.main)e[t]=a.main[t];return e;case r.clean:for(var o in y)e[o]=y[o];return e}})}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,a){try{var o=t[r](a),c=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(c).then(function(e){step("next",e)},function(e){step("throw",e)});e(c)}("next")})}}var b=function(e){var t={"action":Object(s.a)(d)(e),"getOldCardListFuc":function(){var n=_asyncToGenerator(regeneratorRuntime.mark(function _callee(){var n;return regeneratorRuntime.wrap(function _callee$(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.loadReducer();case 2:return a.next=4,l.a.loginBaseController.getOldCardList();case 4:n=a.sent,e({"type":r.init,"payload":{"main":{"oldCardData":n}}});case 6:case"end":return a.stop()}},_callee,this)}));return function getOldCardListFuc(){return n.apply(this,arguments)}}(),"clean":function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:e({"type":r.clean});case 1:case"end":return t.stop()}},_callee2,this)}));return function clean(){return t.apply(this,arguments)}}(),"loadReducer":function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee3(){return regeneratorRuntime.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:p.d({"IndexMain":main_main});case 1:case"end":return e.stop()}},_callee3,this)}));return function loadReducer(){return e.apply(this,arguments)}}(),"unloadReducer":function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee4(){return regeneratorRuntime.wrap(function _callee4$(e){for(;;)switch(e.prev=e.next){case 0:p.b&&p.b(["bindCardList"]);case 1:case"end":return e.stop()}},_callee4,this)}));return function unloadReducer(){return e.apply(this,arguments)}}()};return{"actions":t}};function store2Props(e){return{"main":e.IndexMain}}var v=n(2631),A=n(278),_=n(279),w=(n(2497),n(676)),C=n.n(w),E=n(2499),O=n.n(E),x=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var P=function(e){function bindCardItem(e){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,bindCardItem),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(bindCardItem.__proto__||Object.getPrototypeOf(bindCardItem)).call(this,e))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(bindCardItem,c["a"].Component),x(bindCardItem,[{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"render","value":function render(){var e=this,t=this.props,n=(t.main,t.actions.action,t.oldCardData);return console.log(n,"oldCardData"),a.l.createElement(v.a,{"className":"bind-card-list-com"},n&&n.customerOldcardVOList&&n.customerOldcardVOList.length>0?n.customerOldcardVOList.map(function(e){return a.l.createElement(v.a,{"className":"demo-text-3"},a.l.createElement(v.a,{"className":"demo-text"},a.l.createElement(v.a,{"className":"icon"},a.l.createElement(A.a,{"style":"width:60px;height:60px","src":C.a})),a.l.createElement(v.a,{"className":"contentWrap"},a.l.createElement(v.a,{"className":"title"},"苏州市尊老卡"),a.l.createElement(v.a,{"className":"name"},e.realName),a.l.createElement(v.a,{"className":"viewContent"},e.ylIdCard.toString().replace(/(.{4})/g,"$1 ")))))}):null,n&&2!=n.cardAmount&&a.l.createElement(v.a,{"className":"bindCard","onClick":function bind_card_item_asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,a){try{var o=t[r](a),c=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(c).then(function(e){step("next",e)},function(e){step("throw",e)});e(c)}("next")})}}(regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:c.a.navigateTo({"url":"/pages/package-D/bind-card/index"});case 1:case"end":return e.stop()}},_callee,e)}))},a.l.createElement(A.a,{"style":"width:30px;height:30px","src":O.a}),a.l.createElement(_.a,{"className":"text"},"绑定尊老卡")))}}]),bindCardItem}(),k=P=Object(o.a)([Object(u.b)(store2Props,b)],P),U=(n(2500),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var R=function(e){function WarrantModalArticle(){!function tips_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WarrantModalArticle);var e=function tips_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(WarrantModalArticle.__proto__||Object.getPrototypeOf(WarrantModalArticle)).apply(this,arguments));return e.config={"navigationBarTitleText":"用户授权服务协议"},e}return function tips_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(WarrantModalArticle,c["a"].Component),U(WarrantModalArticle,[{"key":"componentWillMount","value":function componentWillMount(){0}},{"key":"onShareAppMessage","value":function onShareAppMessage(){return{}}},{"key":"onShareTimeline","value":function onShareTimeline(){}},{"key":"render","value":function render(){return a.l.createElement(i.a,{"className":"warrant_modal_article","scrollY":!0},a.l.createElement(v.a,null,a.l.createElement(v.a,null,a.l.createElement(_.a,{"className":"title"},"苏颐养平台尊老卡用户权益说明")),a.l.createElement(v.a,null,a.l.createElement(_.a,{"className":"black"},"（1）尊老卡用户定义")),a.l.createElement(v.a,null,a.l.createElement(_.a,{"className":"black"},"注册用户通过输入姓名和身份证号绑定苏州市尊老卡，即成为苏颐养平台的尊老卡用户。")),a.l.createElement(v.a,null,a.l.createElement(_.a,{"className":"black"},"（2）尊老卡用户权益")),a.l.createElement(v.a,null,a.l.createElement(_.a,{"className":"black"},"尊老卡用户可享受平台推出个各项专属权益：购买9.9元专区商品、领取专属优惠券、优惠购买专属商品等。")),a.l.createElement(v.a,null,a.l.createElement(_.a,{"className":"black"},"（3）尊老卡绑定规则")),a.l.createElement(v.a,null,a.l.createElement(_.a,{"className":"black"},"为保障隐私数据安全、交易数据安全，请将自己或者家人的尊老卡绑定在自己的注册手机上；不要将自己的尊老卡绑定在其他人的注册手机上。")),a.l.createElement(v.a,null,a.l.createElement(_.a,{"className":"black"},"（4）尊老卡解绑规则")),a.l.createElement(v.a,null,a.l.createElement(_.a,{"className":"black"},"包含但不限于因手机号变更等原因确需解除现有的注册手机号和尊老卡卡号的绑定关系，请拨打0512-962026市民卡客服热线提出解绑需求，苏颐养平台将于7个工作日内解除绑定。"))))}}]),WarrantModalArticle}(),j=(n(2502),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),D=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(n):void 0};function bind_card_list_asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,a){try{var o=t[r](a),c=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(c).then(function(e){step("next",e)},function(e){step("throw",e)});e(c)}("next")})}}b().actions.loadReducer();var S=function(e){function Index(e){!function bind_card_list_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var t=function bind_card_list_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).call(this,e));return t.config={"navigationBarTitleText":"我的尊老卡"},t.state={"oldCardData":null},t}return function bind_card_list_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,c["a"].Component),j(Index,[{"key":"componentDidShow","value":function(){var e=bind_card_list_asyncToGenerator(regeneratorRuntime.mark(function _callee(){var e;return regeneratorRuntime.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.loginBaseController.getOldCardList();case 2:e=t.sent,this.setState({"oldCardData":e});case 4:case"end":return t.stop()}},_callee,this)}));return function componentDidShow(){return e.apply(this,arguments)}}()},{"key":"componentDidMount","value":function(){var e=bind_card_list_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},_callee2,this)}));return function componentDidMount(){return e.apply(this,arguments)}}()},{"key":"render","value":function render(){var e=this.state.oldCardData;return a.l.createElement(i.a,{"className":"my-card-list-page","scrollY":!0,"scrollWithAnimation":!0},a.l.createElement(k,{"oldCardData":e}),a.l.createElement(R,null))}},{"key":"componentDidHide","value":function componentDidHide(){D(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&D(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this)}}]),Index}();S=Object(o.a)([Object(u.b)(store2Props,b)],S);t.default=S},"676":function(e,t,n){e.exports=n.p+"static/images/Group.png"}}]);