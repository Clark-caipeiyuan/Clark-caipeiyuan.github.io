(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"1445":function(e,t,n){},"246":function(e,t,n){"use strict";n.d(t,"a",function(){return __decorate});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function __decorate(e,t,n,o){var a,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(c=(i<3?a(c):i>3?a(t,n,c):a(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c}},"251":function(e,t,n){"use strict";function extraPathsValue(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],o=t.length>=2?t[1]:null,a=null;"function"==typeof t[t.length-1]&&(a=t[t.length-1]);var i=[],c=void 0,u=[];return"string"==typeof r&&o&&o.props&&o.props["data-paths"]?(i=o.props["data-paths"].split(/[,\.]/gi),c=r):r instanceof Array&&r[0].hasOwnProperty("paths")&&r[0].hasOwnProperty("value")?u=r.map(function(e){var t=e.paths,n=e.value,r=t;return"string"==typeof r&&(r=t.split(/[,\.]/gi)),{"paths":r,"value":n}}):"string"==typeof r?(i=r.split(/[,\.]/gi),c=o,console.log(i,c,103)):r.hasOwnProperty("target")&&r.target["data-paths"]&&void 0!=r.target.value?(i=r.target["data-paths"].split(/[,\.]/gi),c=r.target.value):r.hasOwnProperty("target")&&r.target.dataset&&r.target.dataset.paths?(i=r.target.dataset.paths.split(/[,\.]/gi),c=r.target.value):r instanceof Array&&o instanceof Array&&o[0]&&"function"==typeof o[0].type&&o[0].props&&o[0].props["data-paths"]?(i=o[0].props["data-paths"].split(/[,\.]/gi),c=r):r instanceof Array?(i=r,c=o):o&&o.hasOwnProperty("props")&&o.props.hasOwnProperty("data-paths")&&o.props.hasOwnProperty("value")&&(i=o.props["data-paths"].split(/[,\.]/gi),c=o.props.value),a?a({"paths":i,"value":c,"batchUpdate":u,"raw":t}):{"paths":i,"value":c,"batchUpdate":u}}n.d(t,"a",function(){return extraPathsValue})},"252":function(e,t,n){"use strict";n.d(t,"a",function(){return getActionProxy});function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}var r,o=[(r=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t){var n,r=e.methodName,o=e.target;return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if("query"!==r||!o.commonChange){e.next=11;break}return console.log("beginMiddware"),o.commonChange(["main","isLoading"],!0),e.next=5,t();case 5:return n=e.sent,o.commonChange(["main","isLoading"],!1),console.log("end Middware"),e.abrupt("return",n);case 11:return e.abrupt("return",t());case 12:case"end":return e.stop()}},_callee,void 0)})),function loadingM(e,t){return r.apply(this,arguments)})],a=function compose(e){var t,n,r=(t=_asyncToGenerator(regeneratorRuntime.mark(function _callee4(t,n,a){var i,c;return regeneratorRuntime.wrap(function _callee4$(u){for(;;)switch(u.prev=u.next){case 0:return i=t+1,c=r.bind(null,i,n,a),i===o&&(c=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee3(){var e;return regeneratorRuntime.wrap(function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},_callee3,this)}));return function _next(){return e.apply(this,arguments)}}()),u.abrupt("return",e[t](n,c));case 4:case"end":return u.stop()}},_callee4,this)})),function _dispatch(e,n,r){return t.apply(this,arguments)}),o=e.length;return n=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e,t){return regeneratorRuntime.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r(0,e,t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},_callee2,void 0)})),function(e,t){return n.apply(this,arguments)}};function getActionProxy(e){var t={},n=a(o);return function(r){var o=e(r),a=new Proxy(o,{"get":function get(e,r,i){var c=this,u=String(r);return t[u]||"function"!=typeof o[r]||(t[u]=_asyncToGenerator(regeneratorRuntime.mark(function _callee5(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];var s,p;return regeneratorRuntime.wrap(function _callee5$(e){for(;;)switch(e.prev=e.next){case 0:return s=t,e.next=3,n({"methodName":u,"arguments":s,"target":a},function(){return o[r].apply(a,s)});case 3:return p=e.sent,e.abrupt("return",p);case 5:case"end":return e.stop()}},_callee5,c)}))),t[u]?t[u]:Reflect.get(e,r,i)},"set":function set(e,t,n,r){return Reflect.set(e,t,n,r)},"apply":function apply(e,t,n){return Reflect.apply.apply(Reflect,arguments)}});return a}}},"253":function(e,t,n){"use strict";function commonChange(e,t){if(t.paths&&(t.paths=function ensurePath(e){var t=e;return"string"==typeof e?t=e.split("."):t}(t.paths)),t.paths[0]===t.key&&modifyDeep(e,t.paths.splice(1),t.value),t.batchUpdate)for(var n=0,r=t.batchUpdate.length;n<r;n++){var o=t.batchUpdate[n],a=o.paths,i=o.value;a[0]===t.key&&modifyDeep(e,a.splice(1),i)}return e}function modifyDeep(e,t,n){for(var r=e,o=t.length-1,a=0,i=o;a<i;a++)(r=r[t[a]])||console.warn("the obj defined by paths "+t+" is not exist!!");"function"==typeof n?n(r[t[o]]):r[t[o]]=n}function assign(e,t){if(!t)return e;for(var n in t)e[n]=t[n];return e}n.d(t,"b",function(){return commonChange}),n.d(t,"a",function(){return assign})},"2806":function(e,t,n){"use strict";n.r(t);var r,o=n(5),a=n(246),i=n(2631),c=n(279),u=n(3),s=n(37);n(1445);!function(e){e.commonChange="packageACustomerUserInfoEditEditContactNameMain_commonChange",e.init="packageACustomerUserInfoEditEditContactNameMain_INIT",e.clean="packageACustomerUserInfoEditEditContactNameMain_CLEAN"}(r||(r={}));var p=n(252),l=n(38),f=n(251),d=n(14),m=n(11);var h=function(e){return{"commonChange":function commonChange(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];e({"type":r.commonChange,"payload":f.a.apply(void 0,arguments)})},"edit_3":function(){var e=function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}(regeneratorRuntime.mark(function _callee(e){return regeneratorRuntime.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!(e.length<2||e.length>15)){t.next=3;break}return Object(d.e)({"title":"联系人应为2～15个字符！","icon":"none","duration":2e3}),t.abrupt("return",!1);case 3:return t.next=5,Object(m.g)("mini::editUserInfo","contactName");case 5:return t.next=7,Object(m.g)("mini::contactName",e);case 7:u.a.navigateBack();case 8:case"end":return t.stop()}},_callee,this)}));return function edit_3(t){return e.apply(this,arguments)}}()}};var y=n(257),g=n(253),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_={"isReady":!1};function main(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments[1],n=t.type,o=t.payload;return Object(y.a)(e,function(e){switch(n){case r.commonChange:return g.b(e,v({},o,{"key":"main"}));case r.init:for(var t in e.isReady=!0,o.main)e[t]=o.main[t];return e;case r.clean:for(var a in _)e[a]=_[a];return e}})}function actions_asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}var b=function(e){var t={"action":Object(p.a)(h)(e),"init":function(){var e=actions_asyncToGenerator(regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadReducer();case 2:case"end":return e.stop()}},_callee,this)}));return function init(){return e.apply(this,arguments)}}(),"clean":function(){var n=actions_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=!1,!n.t0){n.next=4;break}return n.next=4,t.unloadReducer();case 4:e({"type":r.clean});case 5:case"end":return n.stop()}},_callee2,this)}));return function clean(){return n.apply(this,arguments)}}(),"loadReducer":function(){var e=actions_asyncToGenerator(regeneratorRuntime.mark(function _callee3(){return regeneratorRuntime.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:l.d({"packageACustomerUserInfoEditEditContactNameMain":main});case 1:case"end":return e.stop()}},_callee3,this)}));return function loadReducer(){return e.apply(this,arguments)}}(),"unloadReducer":function(){var e=actions_asyncToGenerator(regeneratorRuntime.mark(function _callee4(){return regeneratorRuntime.wrap(function _callee4$(e){for(;;)switch(e.prev=e.next){case 0:l.b?l.b(["packageACustomerUserInfoEditEditContactNameMain"]):console.error("请在redux/store中实现deregister逻辑. ");case 1:case"end":return e.stop()}},_callee4,this)}));return function unloadReducer(){return e.apply(this,arguments)}}()};return{"actions":t}};var w=n(313),C=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),E=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};b().actions.loadReducer();var x=function(e){function UserInfoEditContactName(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UserInfoEditContactName);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UserInfoEditContactName.__proto__||Object.getPrototypeOf(UserInfoEditContactName)).call(this,e));return t.config={"navigationBarTitleText":"联系人","enablePullDownRefresh":!0},t.state={"customerAccount":"","flag":!1},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UserInfoEditContactName,u["a"].Component),C(UserInfoEditContactName,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.$router.params;e.customerAccount&&this.setState({"customerAccount":e.customerAccount}),this.props.actions.init()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.props.actions.clean()}},{"key":"render","value":function render(){var e=this;return o.l.createElement(i.a,{"className":"packageACustomerUserInfoMain"},o.l.createElement(i.a,{"className":"top_2"},o.l.createElement(i.a,{"className":"wan_sh"},o.l.createElement(c.a,{"className":this.state.flag?"text_img3":"text_img2","onClick":function onClick(){1!=e.state.flag||e.props.actions.action.edit_3(e.state.customerAccount)}},"保存"))),o.l.createElement(i.a,{"className":"in_put"},o.l.createElement(w.a,{"type":"text","placeholder":"请输入联系人信息","value":this.state.customerAccount,"onChange":function onChange(t){e.setState({"customerAccount":t,"flag":!0})},"underline":!1,"maxLength":15,"clear":!0})),o.l.createElement(i.a,{"className":"in_put2"},o.l.createElement(i.a,{"className":"bottom_font"},"2-15个字符限制，允许中英文、数字和特殊字符")))}},{"key":"componentDidShow","value":function componentDidShow(){E(UserInfoEditContactName.prototype.__proto__||Object.getPrototypeOf(UserInfoEditContactName.prototype),"componentDidShow",this)&&E(UserInfoEditContactName.prototype.__proto__||Object.getPrototypeOf(UserInfoEditContactName.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){E(UserInfoEditContactName.prototype.__proto__||Object.getPrototypeOf(UserInfoEditContactName.prototype),"componentDidHide",this)&&E(UserInfoEditContactName.prototype.__proto__||Object.getPrototypeOf(UserInfoEditContactName.prototype),"componentDidHide",this).call(this)}}]),UserInfoEditContactName}();x=Object(a.a)([Object(s.b)(function store2Props(e){return{"main":e.packageACustomerUserInfoEditEditContactNameMain}},b)],x);t.default=x},"313":function(e,t,n){"use strict";var r=n(5),o=n(2631),a=n(279),i=n(278),c=n(296),u=n(3),s=(n(319),{"phone":/^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[1,8,9]\d{8}$/,"zeroOne":/(^0\.[1-9][0-9]{0,1}$)|(^0\.0[1-9]{1}$)|(^1((\.0)|(\.00))?$)/,"number":/^\d+$/,"price":/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^[0-9]\.[0-9]([0-9])?$)/,"zeroPrice":/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,"noZeroNumber":/^[1-9]\d{0,}$/,"telephone":/(^\d{0,9}-\d{0,10}$)|(^\d{1,20}$)/,"tax":/^[A-Za-z0-9]{15,20}$/,"bankNumber":/^\d{1,30}$/,"noNumber":/^[a-zA-Z\u4E00-\u9FA5]*$/,"noChar":/^[0-9a-zA-Z\u4E00-\u9FA5]*$/,"emoji":/\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/,"socialCreditCode":/^[A-Za-z0-9]{15,20}$/,"email":/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,"discount":/^\d(\.\d{1,2})?$|^[1-9]\d(\.\d{1,2})?$|^100(\.(0){1,2})?$/,"sortNum":/^([1-9](\d{1,2})?)$|^0$/,"noChinese":/^[^\u4e00-\u9fa5]{1,20}$/,"password":/^[0-9a-zA-Z]{6,16}$/,"accountDay":/(^[1-9]{1}$)|(^[1-2]{1}[0-9]{1}$)|(^[3][0,1]$)/}),p=n(247),l=n.n(p);n.d(t,"a",function(){return d});var f=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var d=function(e){function WMFormInput(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WMFormInput);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(WMFormInput.__proto__||Object.getPrototypeOf(WMFormInput)).call(this,e));return t._onInput=function(e){var n=e.detail.value,r=t.props,o=r.validReg,a=r.onChange;"number"===r.type&&(o=s.number),o&&!o.test(n)||a&&a(n)},t._onBlur=function(e){var n=e.detail.value,r=t.props,o=r.validReg,a=r.onBlur;"number"===r.type&&(o=s.number),o&&!o.test(n)||a&&a(n)},t._onClear=function(){var e=t.props.onChange;e&&e("")},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(WMFormInput,u["a"].Component),f(WMFormInput,[{"key":"render","value":function render(){var e="small"===this.props.size?"wm-form-input-small":"",t=this.props,n=t.style,u=t.inputStyle,s=t.textStyle,p=t.label;return r.l.createElement(o.a,{"className":l()("wm-form-input "+e,{"form__underline":this.props.underline}),"style":n},this.props.require&&r.l.createElement(a.a,{"className":"require"},"*"),this.props.icon&&r.l.createElement(i.a,{"className":"icon","src":this.props.icon}),p&&r.l.createElement(a.a,{"className":"label","style":s},this.props.label),r.l.createElement(c.a,{"className":"input","type":this.props.type?this.props.type:"number","disabled":this.props.disabled,"value":this.props.value,"placeholder":this.props.placeholder,"onInput":this._onInput,"onBlur":this._onBlur,"style":u,"placeholderStyle":"color:#999","maxLength":this.props.maxLength,"autoFocus":this.props.autoFocus,"password":this.props.password}),this.props.clear&&r.l.createElement(i.a,{"onClick":this._onClear,"className":"clear","src":"https://eshop-lcpro.oss-cn-shanghai.aliyuncs.com/mini/assets/image/common/clear_2.png"}),this.props.other)}}]),WMFormInput}();d.defaultProps={"type":"number","require":!1,"disabled":!1,"clear":!1,"underline":!0,"inputTextAlign":"left","inputFontWeight":!1,"size":"default","password":!1,"autoFocus":!1,"maxLength":140,"onChange":function onChange(){},"onBlur":function onBlur(){},"inputTextColor":"rgba(0,0,0,0.8)"}},"319":function(e,t,n){}}]);