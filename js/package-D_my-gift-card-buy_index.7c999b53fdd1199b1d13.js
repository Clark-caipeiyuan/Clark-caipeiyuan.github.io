(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{"251":function(e,t,a){"use strict";function extraPathsValue(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];var r=t[0],n=t.length>=2?t[1]:null,c=null;"function"==typeof t[t.length-1]&&(c=t[t.length-1]);var l=[],o=void 0,s=[];return"string"==typeof r&&n&&n.props&&n.props["data-paths"]?(l=n.props["data-paths"].split(/[,\.]/gi),o=r):r instanceof Array&&r[0].hasOwnProperty("paths")&&r[0].hasOwnProperty("value")?s=r.map(function(e){var t=e.paths,a=e.value,r=t;return"string"==typeof r&&(r=t.split(/[,\.]/gi)),{"paths":r,"value":a}}):"string"==typeof r?(l=r.split(/[,\.]/gi),o=n,console.log(l,o,103)):r.hasOwnProperty("target")&&r.target["data-paths"]&&void 0!=r.target.value?(l=r.target["data-paths"].split(/[,\.]/gi),o=r.target.value):r.hasOwnProperty("target")&&r.target.dataset&&r.target.dataset.paths?(l=r.target.dataset.paths.split(/[,\.]/gi),o=r.target.value):r instanceof Array&&n instanceof Array&&n[0]&&"function"==typeof n[0].type&&n[0].props&&n[0].props["data-paths"]?(l=n[0].props["data-paths"].split(/[,\.]/gi),o=r):r instanceof Array?(l=r,o=n):n&&n.hasOwnProperty("props")&&n.props.hasOwnProperty("data-paths")&&n.props.hasOwnProperty("value")&&(l=n.props["data-paths"].split(/[,\.]/gi),o=n.props.value),c?c({"paths":l,"value":o,"batchUpdate":s,"raw":t}):{"paths":l,"value":o,"batchUpdate":s}}a.d(t,"a",function(){return extraPathsValue})},"252":function(e,t,a){"use strict";a.d(t,"a",function(){return getActionProxy});function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function step(r,n){try{var c=t[r](n),l=c.value}catch(e){return void a(e)}if(!c.done)return Promise.resolve(l).then(function(e){step("next",e)},function(e){step("throw",e)});e(l)}("next")})}}var r,n=[(r=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t){var a,r=e.methodName,n=e.target;return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if("query"!==r||!n.commonChange){e.next=11;break}return console.log("beginMiddware"),n.commonChange(["main","isLoading"],!0),e.next=5,t();case 5:return a=e.sent,n.commonChange(["main","isLoading"],!1),console.log("end Middware"),e.abrupt("return",a);case 11:return e.abrupt("return",t());case 12:case"end":return e.stop()}},_callee,void 0)})),function loadingM(e,t){return r.apply(this,arguments)})],c=function compose(e){var t,a,r=(t=_asyncToGenerator(regeneratorRuntime.mark(function _callee4(t,a,c){var l,o;return regeneratorRuntime.wrap(function _callee4$(s){for(;;)switch(s.prev=s.next){case 0:return l=t+1,o=r.bind(null,l,a,c),l===n&&(o=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee3(){var e;return regeneratorRuntime.wrap(function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},_callee3,this)}));return function _next(){return e.apply(this,arguments)}}()),s.abrupt("return",e[t](a,o));case 4:case"end":return s.stop()}},_callee4,this)})),function _dispatch(e,a,r){return t.apply(this,arguments)}),n=e.length;return a=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e,t){return regeneratorRuntime.wrap(function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r(0,e,t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},_callee2,void 0)})),function(e,t){return a.apply(this,arguments)}};function getActionProxy(e){var t={},a=c(n);return function(r){var n=e(r),c=new Proxy(n,{"get":function get(e,r,l){var o=this,s=String(r);return t[s]||"function"!=typeof n[r]||(t[s]=_asyncToGenerator(regeneratorRuntime.mark(function _callee5(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];var i,u;return regeneratorRuntime.wrap(function _callee5$(e){for(;;)switch(e.prev=e.next){case 0:return i=t,e.next=3,a({"methodName":s,"arguments":i,"target":c},function(){return n[r].apply(c,i)});case 3:return u=e.sent,e.abrupt("return",u);case 5:case"end":return e.stop()}},_callee5,o)}))),t[s]?t[s]:Reflect.get(e,r,l)},"set":function set(e,t,a,r){return Reflect.set(e,t,a,r)},"apply":function apply(e,t,a){return Reflect.apply.apply(Reflect,arguments)}});return c}}},"253":function(e,t,a){"use strict";function commonChange(e,t){if(t.paths&&(t.paths=function ensurePath(e){var t=e;return"string"==typeof e?t=e.split("."):t}(t.paths)),t.paths[0]===t.key&&modifyDeep(e,t.paths.splice(1),t.value),t.batchUpdate)for(var a=0,r=t.batchUpdate.length;a<r;a++){var n=t.batchUpdate[a],c=n.paths,l=n.value;c[0]===t.key&&modifyDeep(e,c.splice(1),l)}return e}function modifyDeep(e,t,a){for(var r=e,n=t.length-1,c=0,l=n;c<l;c++)(r=r[t[c]])||console.warn("the obj defined by paths "+t+" is not exist!!");"function"==typeof a?a(r[t[n]]):r[t[n]]=a}function assign(e,t){if(!t)return e;for(var a in t)e[a]=t[a];return e}a.d(t,"b",function(){return commonChange}),a.d(t,"a",function(){return assign})},"2627":function(e,t,a){},"2825":function(e,t,a){"use strict";a.r(t);var r,n=a(5),c=a(246),l=a(271),o=a(2631),s=a(3),i=a(37);!function(e){e.commonChange="MyGiftCardHelpMain_commonChange",e.init="MyGiftCardHelpMain_INIT",e.clean="MyGiftCardHelpMain_CLEAN"}(r||(r={}));var u=a(252),m=a(38),p=a(251),d=function(e){return{"commonChange":function commonChange(){for(var t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];e({"type":r.commonChange,"payload":p.a.apply(void 0,arguments)})}}};var f=a(257),h=a(253),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},E={"total":0,"totalPages":0,"isReady":!1,"pageNum":0,"pageSize":10};function main(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments[1],a=t.type,n=t.payload;return Object(f.a)(e,function(e){switch(a){case r.commonChange:return h.b(e,y({},n,{"key":"main"}));case r.init:for(var t in e.isReady=!0,n.main)e[t]=n.main[t];return e;case r.clean:for(var c in E)e[c]=E[c];return e}})}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function step(r,n){try{var c=t[r](n),l=c.value}catch(e){return void a(e)}if(!c.done)return Promise.resolve(l).then(function(e){step("next",e)},function(e){step("throw",e)});e(l)}("next")})}}var x=function(e){var t={"action":Object(u.a)(d)(e),"init":function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e){return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadReducer();case 2:case"end":return e.stop()}},_callee,this)}));return function init(t){return e.apply(this,arguments)}}(),"clean":function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:if(a.t0=!1,!a.t0){a.next=4;break}return a.next=4,t.unloadReducer();case 4:e({"type":r.clean});case 5:case"end":return a.stop()}},_callee2,this)}));return function clean(){return a.apply(this,arguments)}}(),"loadReducer":function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee3(){return regeneratorRuntime.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:m.d({"myGiftCardListMain":main});case 1:case"end":return e.stop()}},_callee3,this)}));return function loadReducer(){return e.apply(this,arguments)}}(),"unloadReducer":function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee4(){return regeneratorRuntime.wrap(function _callee4$(e){for(;;)switch(e.prev=e.next){case 0:m.b?m.b(["myGiftCardHelpMain"]):console.error("请在redux/store中实现deregister逻辑. ");case 1:case"end":return e.stop()}},_callee4,this)}));return function unloadReducer(){return e.apply(this,arguments)}}()};return{"actions":t}};a(2627);var v=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),g=function get(e,t,a){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,a)}if("value"in r)return r.value;var c=r.get;return void 0!==c?c.call(a):void 0};x().actions.loadReducer();var N=function(e){function MyGiftCardBuy(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MyGiftCardBuy);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(MyGiftCardBuy.__proto__||Object.getPrototypeOf(MyGiftCardBuy)).apply(this,arguments));return e.config={"navigationBarTitleText":"购卡章程"},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(MyGiftCardBuy,s["a"].Component),v(MyGiftCardBuy,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentDidShow","value":function(){var e=function my_gift_card_buy_asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function step(r,n){try{var c=t[r](n),l=c.value}catch(e){return void a(e)}if(!c.done)return Promise.resolve(l).then(function(e){step("next",e)},function(e){step("throw",e)});e(l)}("next")})}}(regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},_callee,this)}));return function componentDidShow(){return e.apply(this,arguments)}}()},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.props.actions.clean()}},{"key":"render","value":function render(){return n.l.createElement(l.a,{"className":"gift-card-help"},n.l.createElement(o.a,{"className":"card-text-c"},"购卡人或持卡人在购买、使用市民好生活E卡前，请认真阅读本章程内容，特别是免除或限制责任的条款以及争议解决条款。免除或限制责任的条款会以粗体下划线标注，请重点阅读。 当购卡人或持卡人在购买、使用市民好生活E卡时， 即确认已经就本章程全部条款进行了详细地阅读，对章程的全部条款均无任何疑义，并对本章程涉及的权利义务、责任限制及免责条款的法律含义准确无误的理解，并同意遵守本章程规定的内容。"),n.l.createElement(o.a,{"className":"card-text-h1"},"第一章 总则"),n.l.createElement(o.a,{"className":"card-text-h"},"第1条"),n.l.createElement(o.a,{"className":"card-text-c"},"联创智慧城市科技集团有限公司及相关售卡企业根据商务部《单用途商业预付卡管理办法（试行）》等法律法规，开展包括预付卡发行、销售、管理等内容的预付卡业务，为规范预付卡的使用及管理制定本章程。"),n.l.createElement(o.a,{"className":"card-text-h"},"第2条"),n.l.createElement(o.a,{"className":"card-text-c"},"本章程所指“单用途商业预付卡”系指经由联创智慧城市科技集团有限公司发行，购卡人交付一定货币资金购买的，在pvc卡片等介质存储预付价值的实体卡（称为“预付卡”）。该卡仅可在联创市民好生活网络平台E卡专区使用。本公司发行的预付卡名称为“市民好生活E卡”。"),n.l.createElement(o.a,{"className":"card-text-h1"},"第二章 发行与购买"),n.l.createElement(o.a,{"className":"card-text-h"},"第3条"),n.l.createElement(o.a,{"className":"card-text-c"},"本公司发行的市民好生活E卡种类为不记名卡，单张不记名卡面额最高为 RMB1,000 元（含）。"),n.l.createElement(o.a,{"className":"card-text-h"},"第4条"),n.l.createElement(o.a,{"className":"card-text-c"},"对于购买不记名卡的单位和个人，购卡人及其代理人应出示有效身份证件，并留存购卡人及其代理人姓名或单位名称、有效身份证件号码和联系方式。"),n.l.createElement(o.a,{"className":"card-text-c"},"个人有效身份证件包括居民身份证、户口簿、军人身份证件、武警身份证件、港澳台居民通行证、护照等。单位有效身份证件包括营业执照或其他企业身份凭证。"),n.l.createElement(o.a,{"className":"card-text-h"},"第5条"),n.l.createElement(o.a,{"className":"card-text-c"},"对于单位一次性购卡金额RMB5,000 元（含）以上或个人一次性购卡金额达RMB50,000 元（含）以上的，以及单位或个人采用非现场方式购卡的，本公司将不收取现金，购卡人应以转账方式付款。"),n.l.createElement(o.a,{"className":"card-text-h"},"第6条"),n.l.createElement(o.a,{"className":"card-text-c"},"在本公司或本公司指定的售卡企业购买市民好生活E卡，开具预付卡类增值税电子普通发票。"),n.l.createElement(o.a,{"className":"card-text-h1"},"第三章 使用与服务"),n.l.createElement(o.a,{"className":"card-text-h"},"第7条"),n.l.createElement(o.a,{"className":"card-text-c"},"市民好生活E卡指由联创智慧城市科技集团有限公司（“本公司”）发行的，可以在市民好生活APP上购买自营商品（“自营商品”指在商品详情页明确标识为自营的商品，但虚拟产品、部分团购、 预售、及抢购商品、第三方卖家商品及受国家政策影响、法律另有限制性规定涉及的商品不在此内）。"),n.l.createElement(o.a,{"className":"card-text-h"},"第8条"),n.l.createElement(o.a,{"className":"card-text-c"},"市民好生活E卡内金额可冲抵等值现金（以人民币计算），卡内金额不足以冲抵商品价款的部分需以其他本公司认可的付费方式补足差额， 并即时扣除市民好生活E卡内金额，卡内余额不提供兑现或找零，严禁以任何方式套现、透支。"),n.l.createElement(o.a,{"className":"card-text-h"},"第9条"),n.l.createElement(o.a,{"className":"card-text-c"},"市民好生活E卡可以与优惠券/余额一起使用。"),n.l.createElement(o.a,{"className":"card-text-h"},"第10条"),n.l.createElement(o.a,{"className":"card-text-c"},"用市民好生活E卡兑付的产品如发生退货时，应退资金将退回至原市民好生活E卡内。"),n.l.createElement(o.a,{"className":"card-text-h"},"第11条"),n.l.createElement(o.a,{"className":"card-text-c"},"不记名卡有效期不短于3年或依购卡协议约定，有效期自购买之日开始计算。逾期尚有余额的不记名卡可提供延期服务，每张卡每次可延长1个月，延长次数以系统显示或双方协商确定的为准。"),n.l.createElement(o.a,{"className":"card-text-h"},"第12条"),n.l.createElement(o.a,{"className":"card-text-c"},"不记名预付卡不可挂失，遗失不补。 因不记名卡遗失所引发的损失，均由持卡人自行承担。"),n.l.createElement(o.a,{"className":"card-text-h"},"第13条"),n.l.createElement(o.a,{"className":"card-text-c"},"因保管不当造成卡片污损、残缺或无法使用的，可致电卡片所载明的客服电话凭购卡时预留的有效证件和交易单号办理换发新卡，新卡发放时起旧卡失效。"),n.l.createElement(o.a,{"className":"card-text-h"},"第14条"),n.l.createElement(o.a,{"className":"card-text-c"},"市民好生活E卡在成功绑定后，不能解绑，不能重新绑定，不能跨市民好生活账户使用。"),n.l.createElement(o.a,{"className":"card-text-h"},"第15条"),n.l.createElement(o.a,{"className":"card-text-c"},"1、市民好生活E卡未被绑定到市民好生活账户中的，自订单完成30天内可申请退卡。发生市民好生活E卡无法兑换商品、余额不足以兑付单次最低消费项目或其他法律规定可以解除合同的情形时，可申请退卡。"),n.l.createElement(o.a,{"className":"card-text-c"},"2、退卡人应是从本公司及相关售卡企业购买市民好生活E卡的原购卡人。如退卡人与原购卡人不一致的，退卡人还需出示原购卡人有效身份证原件，并出具原购卡人同意退卡的书面说明。退卡人应出示有效身份证件原件，且需留存退卡人姓名、有效身份证件号码、联系方式、退卡卡号、金额等信息；企业退卡人应提供加盖公章的退卡申请和企业身份凭证。"),n.l.createElement(o.a,{"className":"card-text-c"},"3、所退卡为市民好生活E卡实体卡，需按照售后退货规则提供实体卡销毁凭证。如有其他约定，进行实体卡片邮寄退还时，需保证该实体卡卡体完好，且卡号密码覆盖区应未刮开或毁损。"),n.l.createElement(o.a,{"className":"card-text-c"},"4、退卡人需自行承担退还实体卡、购卡的原始发票以及相关的付款凭证所需的物流费用。双方若有其他退卡手续费承担规则的约定，按双方约定内容执行。"),n.l.createElement(o.a,{"className":"card-text-c"},"5、退卡人所退的市民好生活E卡在购买时享受过任何折扣或优惠的，本公司及相关售卡企业在计算退款时将按退卡人在购买时实际支付的金额，或按市民好生活E卡全额扣除上述优惠后的金额办理退款。如退卡人购买市民好生活E卡可按其年度累计购卡金额享有任何折扣或优惠的，本公司及相关售卡企业在办理退卡后会将退卡金额从其年度累计购卡金额中扣除。"),n.l.createElement(o.a,{"className":"card-text-c"},"6、市民好生活E卡退卡后，本公司将会把退卡金额退至原购卡时付款的原账户。如原购卡使用现金或支票，退卡人需提供与购卡人同名的银行账户以供退款。"),n.l.createElement(o.a,{"className":"card-text-h"},"第16条"),n.l.createElement(o.a,{"className":"card-text-c"},"若本公司或相关售卡企业终止兑付未到期预付卡，本公司相关售卡企业将提供无偿退卡服务，并将在终止兑付日前 30日于媒体进行公示。"),n.l.createElement(o.a,{"className":"card-text-h"},"第17条"),n.l.createElement(o.a,{"className":"card-text-c"},"有关市民好生活E卡购买、使用的问题更多详细解答请咨询市民好生活平台电话客服400-0016-288。"),n.l.createElement(o.a,{"className":"card-text-h1"},"第四章 当事人权利义务"),n.l.createElement(o.a,{"className":"card-text-h"},"第18条"),n.l.createElement(o.a,{"className":"card-text-c"},"发卡企业或售卡企业的权利"),n.l.createElement(o.a,{"className":"card-text-c"},"1、本公司或相关售卡企业有权要求购卡人按法律法规之规定提供真实有效的个人、单位的身份信息及证明文件，对于提供虚假或伪造、变造的身份证明文件的个人、单位，本公司或关联公司有权暂停其所购市民好生活E卡的使用。"),n.l.createElement(o.a,{"className":"card-text-c"},"2、对于违反本章程使用市民好生活E卡的，本公司或相关售卡企业有权暂停或终止市民好生活E卡的使用。"),n.l.createElement(o.a,{"className":"card-text-c"},"3、若存在以下情形的，本公司或相关售卡企业有权暂停或终止市民好生活E卡的使用，并有权进一步要求购卡人或持卡人承担损害赔偿责任："),n.l.createElement(o.a,{"className":"card-text-c"},"a)购卡人/持卡人在购买、使用市民好生活E卡及办理换发新卡、办理退卡时存在欺诈或其他不诚实行为，或其通过不正当手段获取的市民好生活E卡及卡内金额的；"),n.l.createElement(o.a,{"className":"card-text-c"},"b)购卡人/ 持卡人违反国家法律法规规定进行非法交易的；"),n.l.createElement(o.a,{"className":"card-text-c"},"c)本公司依法核实购卡人/ 持卡人身份信息及预付卡交易信息等，遭拒绝的；"),n.l.createElement(o.a,{"className":"card-text-c"},"d)如在联创市民好生活网络平台通过不正当手段（如黑客、窃取等行为）获得的市民好生活E卡购物，本公司有权利关闭该使用人的帐号或要求其通过其它方式支付货款，并保留追究持卡人法律责任的权利；"),n.l.createElement(o.a,{"className":"card-text-c"},"e)购卡人/ 持卡人有其他损害本公司及其他合法购卡人/持卡人合法权益的行为的。"),n.l.createElement(o.a,{"className":"card-text-c"},"4. 若存在以下情形的，致使持卡人不能正常使用预付卡的，本公司可为协助持卡人解决问题提供必要的帮助，但无需就预付卡的不正常使用及持卡人的损失承担任何责任："),n.l.createElement(o.a,{"className":"card-text-c"},"a)本公司经公示后的系统停机维护的；"),n.l.createElement(o.a,{"className":"card-text-c"},"b)电信、电力、银行或第三方数据处理平台的系统、设备、网站故障、不稳定、升级维护等原因导致的数据传输及处理的失败、中断或不稳定的；"),n.l.createElement(o.a,{"className":"card-text-c"},"c)因台风、地震、海啸、洪水、停电、战争、恐怖袭击等不可抗力原因，造成系统障碍不能运行业务的。"),n.l.createElement(o.a,{"className":"card-text-c"},"5. 除本市民好生活E卡章程外，本网站“交易条款”同样适用于市民好生活E卡交易。此外，市民好生活E卡购买人就市民好生活E卡所签订的购买合同中的相应约定也将适用于市民好生活E卡交易。“交易条款”、本章程、购买合同的解释及履行，其效力的优先性按时间先后递增，在后的高于在先的。如各文件或相关条款之间存在冲突，以效力较高文件之规定为准。本公司保留随时修改上述条款和条件的权利，所有条款和条件将在法律允许的限度内适用。"),n.l.createElement(o.a,{"className":"card-text-h"},"第19条"),n.l.createElement(o.a,{"className":"card-text-c"},"发卡企业或售卡企业的义务"),n.l.createElement(o.a,{"className":"card-text-c"},"1、本公司或相关售卡企业应当以通过网站公示等方式提供开展市民好生活E卡业务的相关资料，包括章程、购买协议、使用说明、收费项目及标准等。"),n.l.createElement(o.a,{"className":"card-text-c"},"2、本公司或相关售卡企业应依照法律法规之规定开展市民好生活E卡业务，切实保障购卡人/ 持卡人权益，建立健全业务流程及资金管理流程。"),n.l.createElement(o.a,{"className":"card-text-c"},"3、本公司或相关售卡企业对购卡人/ 持卡人身份信息和交易信息保密，未经当事人同意不得向第三方披露，但应法律法规或任何政府部门、司法机构或有关机关的要求或经购卡人/ 持卡人同意的除外。"),n.l.createElement(o.a,{"className":"card-text-h"},"第20条"),n.l.createElement(o.a,{"className":"card-text-c"},"购卡人的权利"),n.l.createElement(o.a,{"className":"card-text-c"},"1、购卡人享有按法律法规之规定购买、使用市民好生活E卡的权利。"),n.l.createElement(o.a,{"className":"card-text-c"},"2、购卡人/ 持卡人有权知悉市民好生活E卡的功能、使用方法、收费项目及标准。"),n.l.createElement(o.a,{"className":"card-text-c"},"3、持卡人可在市民好生活商城“我的礼品卡”页面查看使用情况、消费记录、余额等信息。"),n.l.createElement(o.a,{"className":"card-text-c"},"4、购卡人/ 持卡人对本公司市民好生活E卡交易有疑问的，有权在规定时间内向本公司或相关售卡企业提出查询或更正要求。"),n.l.createElement(o.a,{"className":"card-text-h"},"第21条"),n.l.createElement(o.a,{"className":"card-text-c"},"购卡人的义务"),n.l.createElement(o.a,{"className":"card-text-c"},"1、购卡人应当向本公司或相关售卡企业提供真实有效的身份信息及证明文件，不得冒用他人身份或使用伪造、变造身份证明文件。"),n.l.createElement(o.a,{"className":"card-text-c"},"2、购卡人不在本公司或相关售卡企业公示的购买渠道进行购买，因此造成其无法正常使用本卡的，购卡人/持卡人应当自行承担其损失。购卡人/ 持卡人不得转售预付卡。"),n.l.createElement(o.a,{"className":"card-text-c"},"3、购卡人/ 持卡人未妥善保管市民好生活E卡，导致不记名预付卡遗失、被窃、灭失的，应当自行承担经济损失。"),n.l.createElement(o.a,{"className":"card-text-c"},"4、购卡人/ 持卡人对本公司预付卡、密码或密钥、相关身份信息保管不善，导致预付卡未经授权使用、或密码被恶意篡改、或卡片被恶意挂失冻结等情形的，应当由购卡人/持卡人自行承担经济损失。"),n.l.createElement(o.a,{"className":"card-text-h1"},"第五章 附则"),n.l.createElement(o.a,{"className":"card-text-h"},"第22条"),n.l.createElement(o.a,{"className":"card-text-c"},"本公司、购卡人、持卡人及其他当事人均须遵守本章程。本章程未尽事宜，各方当事人应遵守相关法律法规之规定及购卡协议之约定。"),n.l.createElement(o.a,{"className":"card-text-h"},"第23条"),n.l.createElement(o.a,{"className":"card-text-c"},"本公司有权不时修改本章程，本公司将采取适当的形式予以公示，本章程的修改或调整于公示后即时生效，不再逐一通知购卡人、持卡人等相关各当事人。"),n.l.createElement(o.a,{"className":"card-text-h"},"第24条"),n.l.createElement(o.a,{"className":"card-text-c"},"任何由本章程引起的争议，各方当事人应协商解决。如未能协商一致，有关市民好生活E卡以及本章程相关解释、争议均适用中华人民共和国法律并应提交联创智慧城市科技集团有限公司所在地具有有管辖权的人民法院诉讼解决。"),n.l.createElement(o.a,{"className":"card-text-h"},"第25条"),n.l.createElement(o.a,{"className":"card-text-c"},"本章程适用于2022年8月12日（含）后购买的市民好生活E卡。"),n.l.createElement(o.a,{"className":"card-text-c"},"本章程更新日期：2022年8月12日；生效日期：2022年8月12日。"))}},{"key":"componentDidMount","value":function componentDidMount(){g(MyGiftCardBuy.prototype.__proto__||Object.getPrototypeOf(MyGiftCardBuy.prototype),"componentDidMount",this)&&g(MyGiftCardBuy.prototype.__proto__||Object.getPrototypeOf(MyGiftCardBuy.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){g(MyGiftCardBuy.prototype.__proto__||Object.getPrototypeOf(MyGiftCardBuy.prototype),"componentDidHide",this)&&g(MyGiftCardBuy.prototype.__proto__||Object.getPrototypeOf(MyGiftCardBuy.prototype),"componentDidHide",this).call(this)}}]),MyGiftCardBuy}();N=Object(c.a)([Object(i.b)(function store2Props(e){return{"main":e.myGiftCardHelpMain}},x)],N);t.default=N}}]);