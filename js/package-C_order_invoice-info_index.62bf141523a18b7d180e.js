(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{"2226":function(e,t,n){},"251":function(e,t,n){"use strict";function extraPathsValue(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],o=t.length>=2?t[1]:null,a=null;"function"==typeof t[t.length-1]&&(a=t[t.length-1]);var i=[],c=void 0,l=[];return"string"==typeof r&&o&&o.props&&o.props["data-paths"]?(i=o.props["data-paths"].split(/[,\.]/gi),c=r):r instanceof Array&&r[0].hasOwnProperty("paths")&&r[0].hasOwnProperty("value")?l=r.map(function(e){var t=e.paths,n=e.value,r=t;return"string"==typeof r&&(r=t.split(/[,\.]/gi)),{"paths":r,"value":n}}):"string"==typeof r?(i=r.split(/[,\.]/gi),c=o,console.log(i,c,103)):r.hasOwnProperty("target")&&r.target["data-paths"]&&void 0!=r.target.value?(i=r.target["data-paths"].split(/[,\.]/gi),c=r.target.value):r.hasOwnProperty("target")&&r.target.dataset&&r.target.dataset.paths?(i=r.target.dataset.paths.split(/[,\.]/gi),c=r.target.value):r instanceof Array&&o instanceof Array&&o[0]&&"function"==typeof o[0].type&&o[0].props&&o[0].props["data-paths"]?(i=o[0].props["data-paths"].split(/[,\.]/gi),c=r):r instanceof Array?(i=r,c=o):o&&o.hasOwnProperty("props")&&o.props.hasOwnProperty("data-paths")&&o.props.hasOwnProperty("value")&&(i=o.props["data-paths"].split(/[,\.]/gi),c=o.props.value),a?a({"paths":i,"value":c,"batchUpdate":l,"raw":t}):{"paths":i,"value":c,"batchUpdate":l}}n.d(t,"a",function(){return extraPathsValue})},"252":function(e,t,n){"use strict";n.d(t,"a",function(){return getActionProxy});function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}var r,o=[(r=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t){var n,r=e.methodName,o=e.target;return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if("query"!==r||!o.commonChange){e.next=11;break}return console.log("beginMiddware"),o.commonChange(["main","isLoading"],!0),e.next=5,t();case 5:return n=e.sent,o.commonChange(["main","isLoading"],!1),console.log("end Middware"),e.abrupt("return",n);case 11:return e.abrupt("return",t());case 12:case"end":return e.stop()}},_callee,void 0)})),function loadingM(e,t){return r.apply(this,arguments)})],a=function compose(e){var t,n,r=(t=_asyncToGenerator(regeneratorRuntime.mark(function _callee4(t,n,a){var i,c;return regeneratorRuntime.wrap(function _callee4$(l){for(;;)switch(l.prev=l.next){case 0:return i=t+1,c=r.bind(null,i,n,a),i===o&&(c=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee3(){var e;return regeneratorRuntime.wrap(function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},_callee3,this)}));return function _next(){return e.apply(this,arguments)}}()),l.abrupt("return",e[t](n,c));case 4:case"end":return l.stop()}},_callee4,this)})),function _dispatch(e,n,r){return t.apply(this,arguments)}),o=e.length;return n=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e,t){return regeneratorRuntime.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r(0,e,t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},_callee2,void 0)})),function(e,t){return n.apply(this,arguments)}};function getActionProxy(e){var t={},n=a(o);return function(r){var o=e(r),a=new Proxy(o,{"get":function get(e,r,i){var c=this,l=String(r);return t[l]||"function"!=typeof o[r]||(t[l]=_asyncToGenerator(regeneratorRuntime.mark(function _callee5(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];var s,u;return regeneratorRuntime.wrap(function _callee5$(e){for(;;)switch(e.prev=e.next){case 0:return s=t,e.next=3,n({"methodName":l,"arguments":s,"target":a},function(){return o[r].apply(a,s)});case 3:return u=e.sent,e.abrupt("return",u);case 5:case"end":return e.stop()}},_callee5,c)}))),t[l]?t[l]:Reflect.get(e,r,i)},"set":function set(e,t,n,r){return Reflect.set(e,t,n,r)},"apply":function apply(e,t,n){return Reflect.apply.apply(Reflect,arguments)}});return a}}},"253":function(e,t,n){"use strict";function commonChange(e,t){if(t.paths&&(t.paths=function ensurePath(e){var t=e;return"string"==typeof e?t=e.split("."):t}(t.paths)),t.paths[0]===t.key&&modifyDeep(e,t.paths.splice(1),t.value),t.batchUpdate)for(var n=0,r=t.batchUpdate.length;n<r;n++){var o=t.batchUpdate[n],a=o.paths,i=o.value;a[0]===t.key&&modifyDeep(e,a.splice(1),i)}return e}function modifyDeep(e,t,n){for(var r=e,o=t.length-1,a=0,i=o;a<i;a++)(r=r[t[a]])||console.warn("the obj defined by paths "+t+" is not exist!!");"function"==typeof n?n(r[t[o]]):r[t[o]]=n}function assign(e,t){if(!t)return e;for(var n in t)e[n]=t[n];return e}n.d(t,"b",function(){return commonChange}),n.d(t,"a",function(){return assign})},"2791":function(e,t,n){"use strict";n.r(t);var r,o=n(5),a=n(246),i=n(2631),c=n(3),l=n(37);!function(e){e.commonChange="PackageCOrderInvoiceInfoMain_commonChange",e.init="PackageCOrderInvoiceInfoMain_INIT",e.clean="PackageCOrderInvoiceInfoMain_CLEAN"}(r||(r={}));var s=n(252),u=n(9),p=n(38),f=n(251),h=function(e){return{"commonChange":function commonChange(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];e({"type":r.commonChange,"payload":f.a.apply(void 0,arguments)})}}};var d=n(257),m=n(253),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v={"isReady":!1,"invoiceInfo":{"orderInvoiceId":"","type":!0,"flag":0,"address":"","contacts":"","phone":"","projectName":"","title":"","identification":"","companyName":"","phoneNo":"","bank":"","account":"","companyAddress":"","provinceId":"","cityId":"","areaId":""}};function main(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments[1],n=t.type,o=t.payload;return Object(d.a)(e,function(e){switch(n){case r.commonChange:return m.b(e,y({},o,{"key":"main"}));case r.init:for(var t in e.isReady=!0,o.main)e[t]=o.main[t];return e;case r.clean:for(var a in v)e[a]=v[a];return e}})}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}var g=function(e){var t={"action":Object(s.a)(h)(e),"init":function(){var n=_asyncToGenerator(regeneratorRuntime.mark(function _callee(n,o){var a;return regeneratorRuntime.wrap(function _callee$(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.loadReducer();case 2:return i.next=4,u.a.tradeBaseController.invoice(n,o);case 4:0==(a=i.sent).type?e({"type":r.init,"payload":{"main":{"invoiceInfo":{"address":a.address,"contacts":a.contacts,"phone":a.phone,"type":!1,"projectName":a.projectName,"provinceId":a.provinceId,"cityId":a.cityId,"areaId":a.areaId,"title":a.generalInvoice.title?a.generalInvoice.title:"","flag":a.generalInvoice.flag?a.generalInvoice.flag:0,"identification":a.generalInvoice.identification}}}}):e({"type":r.init,"payload":{"main":{"invoiceInfo":{"address":a.address,"contacts":a.contacts,"phone":a.phone,"type":!0,"projectName":a.projectName,"provinceId":a.provinceId,"cityId":a.cityId,"areaId":a.areaId,"companyName":a.specialInvoice.companyName,"phoneNo":a.specialInvoice.phoneNo,"bank":a.specialInvoice.bank,"account":a.specialInvoice.account,"companyAddress":a.specialInvoice.address,"identification":a.specialInvoice.identification}}}}),e({"type":r.commonChange,"payload":{"paths":"main.showAdd","value":!0}});case 7:case"end":return i.stop()}},_callee,this)}));return function init(e,t){return n.apply(this,arguments)}}(),"clean":function(){var n=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=!1,!n.t0){n.next=4;break}return n.next=4,t.unloadReducer();case 4:e({"type":r.clean});case 5:case"end":return n.stop()}},_callee2,this)}));return function clean(){return n.apply(this,arguments)}}(),"loadReducer":function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee3(){return regeneratorRuntime.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:p.d({"PackageCOrderInvoiceInfoMain":main});case 1:case"end":return e.stop()}},_callee3,this)}));return function loadReducer(){return e.apply(this,arguments)}}(),"unloadReducer":function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee4(){return regeneratorRuntime.wrap(function _callee4$(e){for(;;)switch(e.prev=e.next){case 0:p.b?p.b(["PackageCOrderInvoiceInfoMain"]):console.error("请在redux/store中实现deregister逻辑. ");case 1:case"end":return e.stop()}},_callee4,this)}));return function unloadReducer(){return e.apply(this,arguments)}}()};return{"actions":t}};function store2Props(e){return{"main":e.PackageCOrderInvoiceInfoMain}}n(2226);var b=n(388),_=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var I=function(e){function Info(e){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Info),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Info.__proto__||Object.getPrototypeOf(Info)).call(this,e))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Info,c["a"].Component),_(Info,[{"key":"render","value":function render(){var e=this.props.main.invoiceInfo,t=e.type,n=e.companyName,r=e.identification,a=e.phoneNo,c=e.companyAddress,l=e.account,s=e.bank,u=e.projectName,p=e.contacts,f=e.phone,h=e.address,d=e.flag,m=e.title;return o.l.createElement(i.a,null,o.l.createElement(i.a,{"className":"invoice-info"},o.l.createElement(b.a,{"labelName":"发票类型","textStyle":{"color":"#000000","fontWeight":500,"textAlign":"right"},"placeholder":t?"增值税专用发票":"普通发票"}),!t&&o.l.createElement(i.a,null,o.l.createElement(b.a,{"labelName":"发票抬头","textStyle":{"color":"#000000","fontWeight":500,"textAlign":"right"},"placeholder":""==m?"个人":m}),0!=d?o.l.createElement(b.a,{"labelName":"纳税人识别号","textStyle":{"color":"#000000","fontWeight":500,"textAlign":"right"},"placeholder":r||"无"}):""),t&&o.l.createElement(i.a,null,o.l.createElement(b.a,{"labelName":"单位名称","textStyle":{"color":"#000000","fontWeight":500,"textAlign":"right"},"placeholder":n}),o.l.createElement(b.a,{"labelName":"纳税人识别号","textStyle":{"color":"#000000","fontWeight":500,"textAlign":"right"},"placeholder":r}),o.l.createElement(b.a,{"labelName":"注册电话","textStyle":{"color":"#000000","fontWeight":500,"textAlign":"right"},"placeholder":a}),o.l.createElement(b.a,{"labelName":"注册地址","textStyle":{"color":"#000000","fontWeight":500,"textAlign":"right"},"placeholder":c}),o.l.createElement(b.a,{"labelName":"银行基本户号","textStyle":{"color":"#000000","fontWeight":500,"textAlign":"right"},"placeholder":l}),o.l.createElement(b.a,{"labelName":"开户行","textStyle":{"color":"#000000","fontWeight":500,"textAlign":"right"},"placeholder":s})),o.l.createElement(b.a,{"labelName":"开票项目","textStyle":{"color":"#000000","fontWeight":500,"textAlign":"right"},"placeholder":u}),o.l.createElement(b.a,{"labelName":"发票收货地址","textStyle":{"color":"#000000","fontWeight":500,"textAlign":"right"},"placeholder":p+" "+f+" "+h})))}}]),Info}(),w=I=Object(a.a)([Object(l.b)(store2Props,g)],I),O=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),x=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};g().actions.loadReducer();var P=function(e){function InvoiceInfo(){!function invoice_info_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,InvoiceInfo);var e=function invoice_info_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(InvoiceInfo.__proto__||Object.getPrototypeOf(InvoiceInfo)).apply(this,arguments));return e.config={"navigationBarTitleText":"发票信息","enablePullDownRefresh":!0},e}return function invoice_info_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(InvoiceInfo,c["a"].Component),O(InvoiceInfo,[{"key":"componentWillMount","value":function componentWillMount(){var e=this.$router.params.tid?this.$router.params.tid:"",t=this.$router.params.type?this.$router.params.type:"";this.props.actions.init(e,t)}},{"key":"onShareAppMessage","value":function onShareAppMessage(){return{}}},{"key":"onShareTimeline","value":function onShareTimeline(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.props.actions.clean()}},{"key":"render","value":function render(){return o.l.createElement(i.a,null,o.l.createElement(w,null))}},{"key":"componentDidMount","value":function componentDidMount(){x(InvoiceInfo.prototype.__proto__||Object.getPrototypeOf(InvoiceInfo.prototype),"componentDidMount",this)&&x(InvoiceInfo.prototype.__proto__||Object.getPrototypeOf(InvoiceInfo.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){x(InvoiceInfo.prototype.__proto__||Object.getPrototypeOf(InvoiceInfo.prototype),"componentDidShow",this)&&x(InvoiceInfo.prototype.__proto__||Object.getPrototypeOf(InvoiceInfo.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){x(InvoiceInfo.prototype.__proto__||Object.getPrototypeOf(InvoiceInfo.prototype),"componentDidHide",this)&&x(InvoiceInfo.prototype.__proto__||Object.getPrototypeOf(InvoiceInfo.prototype),"componentDidHide",this).call(this)}}]),InvoiceInfo}();P=Object(a.a)([Object(l.b)(store2Props,g)],P);t.default=P},"388":function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(5),o=n(3),a=n(14),i=n(349),c=n.n(i),l=n(2631),s=n(279),u=(n(431),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var p=function(e){function FormItem(e){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,FormItem),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(FormItem.__proto__||Object.getPrototypeOf(FormItem)).call(this,e))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(FormItem,o["a"].Component),u(FormItem,[{"key":"render","value":function render(){var e=this.props,t=e.labelName,n=e.placeholder,i=e.textStyle,u=e.leftStyle,p=e.styles,f=e.selectable;return r.l.createElement(l.a,{"className":"form-item flex-start-item","style":p},r.l.createElement(s.a,{"className":"form-text","style":u},t),r.l.createElement(l.a,{"className":"form-context2"},r.l.createElement(s.a,{"className":"select-text","style":i,"selectable":f},n)),"物流单号："==t&&r.l.createElement(l.a,null,r.l.createElement(s.a,{"style":{"position":"absolute","right":"3%"},"className":"copyNo","onClick":function onClick(){if("WEB"===o.a.getEnv()){var e=n;c()(e),Object(a.e)({"title":"复制成功","icon":"none","duration":1500})}}},"复制")))}}]),FormItem}()},"431":function(e,t,n){}}]);