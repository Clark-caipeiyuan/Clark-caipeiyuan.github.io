(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{"1578":function(e,t,n){},"2655":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var a=n(5),i=n(243),r=n(3),o=n(36),s=n(11),c=n(2631),l=n(433),u=n(8),p=(n(1578),n(280),n(7)),d=n(4),h=n(502),f=n(392),g=n(16),b=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),y=function get(e,t,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var i=Object.getPrototypeOf(e);return null===i?void 0:get(i,t,n)}if("value"in a)return a.value;var r=a.get;return void 0!==r?r.call(n):void 0};var v=function(e){function ClassifyList(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ClassifyList);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ClassifyList.__proto__||Object.getPrototypeOf(ClassifyList)).apply(this,arguments));return e.config={"navigationBarTitleText":"商品分类"},e.state={"currentTab":1,"source":""},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ClassifyList,r["a"].Component),b(ClassifyList,[{"key":"componentDidMount","value":function componentDidMount(){Object(i.a)({"title":"商品分类"})}},{"key":"componentDidShow","value":function componentDidShow(){Object(i.a)({"title":"商品分类"}),this.init(),this.setState({"currentTab":1})}},{"key":"componentWillMount","value":function componentWillMount(){"WEAPP"===r.a.getEnv()&&Object(o.f)({"withShareTicket":!0}),p.o.myPvUvStatis(null,null)}},{"key":"init","value":function(){var e=function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(a,i){try{var r=t[a](i),o=r.value}catch(e){return void n(e)}if(!r.done)return Promise.resolve(o).then(function(e){step("next",e)},function(e){step("throw",e)});e(o)}("next")})}}(regeneratorRuntime.mark(function _callee(){var e,t;return regeneratorRuntime.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:e=Object(s.d)("canteen-storeId"),t=u.a.magicHost+"/mini/classify/null/"+e,this.setState({"source":t});case 3:case"end":return n.stop()}},_callee,this)}));return function init(){return e.apply(this,arguments)}}()},{"key":"render","value":function render(){var e=Object(s.d)(d.c.CHANNEL_TYPE_BL),t=this.$router.params.storeId,n=!0;n=Object(g.e)()?!!("5"==e||12==e&&t):"true"!=Object(s.d)(d.c.HIDE_TAB_BAR);var i=this.state.source;return a.l.createElement(c.a,{"className":"indexPage"},n&&a.l.createElement(h.a,{"tabList":d.a.mainRestaurant,"onClick":this.handleClick.bind(this),"current":this.state.currentTab}),a.l.createElement(l.a,{"src":i}))}},{"key":"getCityCode","value":function getCityCode(){var e=Object(s.d)("currentGroupon:grouponInfo"),t=Object(s.d)("locationAccurate");return e&&e.cityCode?e.cityCode:t.cityId}},{"key":"getPageCode","value":function getPageCode(e,t){return console.log(e,t,"测试"),null}},{"key":"handleClick","value":function handleClick(e){var t=Object(s.d)(d.c.CHANNEL_TYPE_BL);f.d(e,t),this.setState({"currentTab":e})}},{"key":"componentDidHide","value":function componentDidHide(){y(ClassifyList.prototype.__proto__||Object.getPrototypeOf(ClassifyList.prototype),"componentDidHide",this)&&y(ClassifyList.prototype.__proto__||Object.getPrototypeOf(ClassifyList.prototype),"componentDidHide",this).call(this)}}]),ClassifyList}()},"392":function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return p}),n.d(t,"d",function(){return d}),n.d(t,"e",function(){return h});var a=n(11),i=n(3),r=n(4),o=n(7),s=n(8),c=sessionStorage.getItem("siteChannelCode")||"",l=function mainEstoreTabClick(e){switch(e){case 2:Object(a.g)(r.c.CHANNEL_TYPE_BL,1e4),i.a.navigateTo({"url":"/pages/index/index?channelType=10000&siteChannel="+c});break;case 0:Object(a.g)(r.c.CHANNEL_TYPE_BL,0),i.a.navigateTo({"url":"/pages/index/index?channelType=0&siteChannel="+c}),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage('{"eshop":"1"}');break;case 1:var t=Object(a.d)("authInfo:token")?"1":"0";o.g.refreshNgToken().then(function(e){i.a.navigateTo({"url":"/pages/estore-page/index?origin=daodian&channel=TOC&ngAccessToken="+e+"&hideTab=1&isLogin="+t})});break;case 3:i.a.navigateTo({"url":"/pages/shop-cart/index?channelType=10000&siteChannel="+c});break;case 4:i.a.navigateTo({"url":"/pages/user-center/index?channelType=10000&siteChannel="+c})}},u=function mainNotEstoreTabClick(e,t){switch(e){case 2:Object(a.g)(r.c.CHANNEL_TYPE_BL,1e4),i.a.navigateTo({"url":"/pages/index/index?channelType=10000&siteChannel="+c});break;case 0:Object(a.g)(r.c.CHANNEL_TYPE_BL,0),i.a.navigateTo({"url":"/pages/index/index?channelType=0&siteChannel="+c}),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage('{"eshop":"1"}');break;case 1:i.a.navigateTo({"url":"/pages/classify-goods-list/index?channelType="+t+"&siteChannel="+c});break;case 3:i.a.navigateTo({"url":"/pages/shop-cart/index?channelType=10000&siteChannel="+c});break;case 4:i.a.navigateTo({"url":"/pages/user-center/index?channelType=10000&siteChannel="+c})}},p=function mainEshopTabClick(e,t){switch(e){case 0:i.a.navigateTo({"url":"/pages/index/index?channelType="+t+"&siteChannel="+c}),0==t&&window.ReactNativeWebView&&window.ReactNativeWebView.postMessage('{"eshop":"1"}');break;case 1:i.a.navigateTo({"url":"/pages/package-B/goods/all-list/index?channelType="+t+"&siteChannel="+c});break;case 2:i.a.navigateTo({"url":"/pages/shop-cart/index?channelType="+t+"&siteChannel="+c});break;case 3:i.a.navigateTo({"url":"/pages/user-center/index?channelType="+t+"&siteChannel="+c})}},d=function mainRestaurantTabClick(e,t){var n=Object(a.d)("canteen-storeId");switch(e){case 0:Object(a.g)(r.c.CHANNEL_TYPE_BL,t),i.a.navigateTo({"url":"/pages/package-A/store/store-main/index?storeId="+n});break;case 1:i.a.navigateTo({"url":"/pages/package-A/store/cate-list/index?channelType="+t+"&siteChannel="+c+"&storeId="+n});break;case 2:i.a.navigateTo({"url":"/pages/shop-cart/index?channelType="+t+"&siteChannel="+c+"&storeId="+n});break;case 3:i.a.navigateTo({"url":"/pages/user-center/index?channelType="+t+"&siteChannel="+c+"&storeId="+n})}},h=function mainWealBenefitTabClick(e,t){switch(Object(a.e)("canteen-storeId"),e){case 0:Object(a.g)(r.c.CHANNEL_TYPE_BL,t),i.a.navigateTo({"url":s.a.eshopHost+"?channelType=12"});break;case 1:i.a.navigateTo({"url":"/pages/shop-cart/index?channelType="+t+"&siteChannel="+c});break;case 2:i.a.navigateTo({"url":"/pages/user-center/index?channelType="+t+"&siteChannel="+c})}}}}]);