(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"1182":function(e,t,n){},"2633":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var a=n(5),r=n(2631),o=n(433),i=n(11),c=n(3),s=(n(1182),n(4)),A=n(468),l=n(392),u=n(16),p=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),b=function get(e,t,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(n):void 0};function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(a,r){try{var o=t[a](r),i=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}Object(i.d)(s.c.CHANNEL_TYPE_BL);var g=navigator.userAgent.includes("BSZFUTS"),h=function(e){function EstorePage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,EstorePage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(EstorePage.__proto__||Object.getPrototypeOf(EstorePage)).apply(this,arguments));return e.state={"currentTab":1,"source":"","isMain":!0,"message":!0},e.config={"navigationBarTitleText":"吃喝玩乐","enablePullDownRefresh":!0,"disableScroll":!0},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(EstorePage,c["a"].Component),p(EstorePage,[{"key":"onShareAppMessage","value":function onShareAppMessage(){return{}}},{"key":"onShareTimeline","value":function onShareTimeline(){}},{"key":"componentWillMount","value":function componentWillMount(){var e=Object(i.d)(s.c.ESTORE_URL),t=Object(i.d)("temp_ngtoken"),n=e+"&"+window.location.search.slice(1)+"&ngAccessToken="+t;this.setState({"source":n}),Object(i.e)("temp_ngtoken")}},{"key":"componentDidHide","value":function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:window.ReactNativeWebView&&window.ReactNativeWebView.postMessage('{"isNotWebMain":"1"}');case 1:case"end":return e.stop()}},_callee,this)}));return function componentDidHide(){return e.apply(this,arguments)}}()},{"key":"handleClick","value":function handleClick(e){var t=this.$router.params.channelType,n=Object(i.d)(s.c.CHANNEL_TYPE_BL),a=t||n,r=Object(i.d)(s.c.ESTORE_EXIST);g?l.b(e):5==n||6==n?l.a(e,a):8==n||12==n?l.d(e,a):r?l.b(e):l.c(e,a),this.setState({"currentTab":e})}},{"key":"render","value":function render(){var e=this,t=Object(i.d)(s.c.CHANNEL_TYPE_BL),n=!0;n=Object(u.e)()?"5"==t:"true"!=Object(i.d)(s.c.HIDE_TAB_BAR);var c=this.state,l=c.isMain,p=c.message;return a.l.createElement(r.a,{"className":"estorePage"},a.l.createElement(o.a,{"id":"daodianPage","src":this.state.source,"onError":function onError(){console.log("错啦")},"onMessage":function onMessage(e){console.log(123456789)},"onLoad":function onLoad(t){var n;window.addEventListener("message",(n=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(t){return regeneratorRuntime.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:"isSyyMain"==t.data.type&&e.setState({"isMain":t.data.data.isMain}),"isMessage"==t.data.type&&e.setState({"message":t.data.data.message});case 2:case"end":return n.stop()}},_callee2,e)})),function(e){return n.apply(this,arguments)}))},"className":n&&l&&p?"estorePageWeb":"estoreFullPageWeb"}),n&&l&&a.l.createElement(A.a,{"onClick":this.handleClick.bind(this),"current":this.state.currentTab,"channelType":t}))}},{"key":"componentDidMount","value":function componentDidMount(){b(EstorePage.prototype.__proto__||Object.getPrototypeOf(EstorePage.prototype),"componentDidMount",this)&&b(EstorePage.prototype.__proto__||Object.getPrototypeOf(EstorePage.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){b(EstorePage.prototype.__proto__||Object.getPrototypeOf(EstorePage.prototype),"componentDidShow",this)&&b(EstorePage.prototype.__proto__||Object.getPrototypeOf(EstorePage.prototype),"componentDidShow",this).call(this)}}]),EstorePage}();h.defaultProps={"currentTab":1,"source":""}},"392":function(e,t,n){"use strict";n.d(t,"b",function(){return A}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return u}),n.d(t,"d",function(){return p}),n.d(t,"e",function(){return b});var a=n(11),r=n(3),o=n(4),i=n(7),c=n(8),s=sessionStorage.getItem("siteChannelCode")||"",A=function mainEstoreTabClick(e){switch(e){case 2:Object(a.g)(o.c.CHANNEL_TYPE_BL,1e4),r.a.navigateTo({"url":"/pages/index/index?channelType=10000&siteChannel="+s});break;case 0:Object(a.g)(o.c.CHANNEL_TYPE_BL,0),r.a.navigateTo({"url":"/pages/index/index?channelType=0&siteChannel="+s}),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage('{"eshop":"1"}');break;case 1:var t=Object(a.d)("authInfo:token")?"1":"0";i.g.refreshNgToken().then(function(e){r.a.navigateTo({"url":"/pages/estore-page/index?origin=daodian&channel=TOC&ngAccessToken="+e+"&hideTab=1&isLogin="+t})});break;case 3:r.a.navigateTo({"url":"/pages/shop-cart/index?channelType=10000&siteChannel="+s});break;case 4:r.a.navigateTo({"url":"/pages/user-center/index?channelType=10000&siteChannel="+s})}},l=function mainNotEstoreTabClick(e,t){switch(e){case 2:Object(a.g)(o.c.CHANNEL_TYPE_BL,1e4),r.a.navigateTo({"url":"/pages/index/index?channelType=10000&siteChannel="+s});break;case 0:Object(a.g)(o.c.CHANNEL_TYPE_BL,0),r.a.navigateTo({"url":"/pages/index/index?channelType=0&siteChannel="+s}),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage('{"eshop":"1"}');break;case 1:r.a.navigateTo({"url":"/pages/classify-goods-list/index?channelType="+t+"&siteChannel="+s});break;case 3:r.a.navigateTo({"url":"/pages/shop-cart/index?channelType=10000&siteChannel="+s});break;case 4:r.a.navigateTo({"url":"/pages/user-center/index?channelType=10000&siteChannel="+s})}},u=function mainEshopTabClick(e,t){switch(e){case 0:r.a.navigateTo({"url":"/pages/index/index?channelType="+t+"&siteChannel="+s}),0==t&&window.ReactNativeWebView&&window.ReactNativeWebView.postMessage('{"eshop":"1"}');break;case 1:r.a.navigateTo({"url":"/pages/package-B/goods/all-list/index?channelType="+t+"&siteChannel="+s});break;case 2:r.a.navigateTo({"url":"/pages/shop-cart/index?channelType="+t+"&siteChannel="+s});break;case 3:r.a.navigateTo({"url":"/pages/user-center/index?channelType="+t+"&siteChannel="+s})}},p=function mainRestaurantTabClick(e,t){var n=Object(a.d)("canteen-storeId");switch(e){case 0:Object(a.g)(o.c.CHANNEL_TYPE_BL,t),r.a.navigateTo({"url":"/pages/package-A/store/store-main/index?storeId="+n});break;case 1:r.a.navigateTo({"url":"/pages/package-A/store/cate-list/index?channelType="+t+"&siteChannel="+s+"&storeId="+n});break;case 2:r.a.navigateTo({"url":"/pages/shop-cart/index?channelType="+t+"&siteChannel="+s+"&storeId="+n});break;case 3:r.a.navigateTo({"url":"/pages/user-center/index?channelType="+t+"&siteChannel="+s+"&storeId="+n})}},b=function mainWealBenefitTabClick(e,t){switch(Object(a.e)("canteen-storeId"),e){case 0:Object(a.g)(o.c.CHANNEL_TYPE_BL,t),r.a.navigateTo({"url":c.a.eshopHost+"?channelType=12"});break;case 1:r.a.navigateTo({"url":"/pages/shop-cart/index?channelType="+t+"&siteChannel="+s});break;case 2:r.a.navigateTo({"url":"/pages/user-center/index?channelType="+t+"&siteChannel="+s})}}},"451":function(e,t,n){},"453":function(e,t){e.exports="data:image/png;base64,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"},"454":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACACAYAAADkkOAjAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAkKADAAQAAAABAAAAgAAAAABf350KAAATuElEQVR4Ae1dCZBcRRn+59zNZnMf5NzcmEAEA8UpR0QoUAynpVBIYclRlgeeqOVRlmeVoqBIcUmoEgTKpIAoFkE5BEGRcIY7FzkgB8lukk02m+zOzHt+35t5O29m3+zOzOuZ6Zntv+qvN/Pm9d/d//vm7+6//+4OyRAk27aHodrzwIdn+EO4Tga3gkdk2P2Mr7If3JW5up+34/sa8NoMrwuFQgfxeUhRaCjUFoBZgHouBn8MfAJ4Olh13W3IfA/8PPhf4KcAqLdxbWhSrUQtlAXAjEVBLgKfCV4MPgxcC/oAmT4Ffhz8IAC1G9eGooYBEEDTjDezBHwZ+BPgOFgn6kVhVoLvBT8MMB3SqXBDtiwAziLwUnAnuF6IZWWZFw3ZF1frikP5i8GPguudWIfFtdbnkMgfig6Bzwc/B240Yp1Yt7rqVtRNYaHYY/EvuRl8YoP/W/6H+n0FfaSX6qGeYd0LCeCMB9+Ocq4CNzp4+DpYx1WsM+vOGzqTthYIyiO4vwj+OXiMzkqsYNn2QPYPwbfBIlkVzKds0VoCCOCZghrdAz6j7Jo1VsInUZ3LAaJtulVLuyYM4DkXSloNNuDJooW6WJ3RTfauBp+0sUBQThP08Svw16qmFxu+vUPviPRuBm8RSWAmIrFTxOrOMgsTbslybKJIDDMh8TbwDJHm+ZgUqarP8vco0XdhjXqqpqcBMtICQAAPpxoeBh83QFnV/ETAdGOg0/2yyMG3ROxEMLmhmMiwI0RajgGj/0tAVZ5eQBZLACJOldSUag4ggOdwaOBR8KyKaSK5Q2TfY+B/wNJwvrOCFId1Gnk2+CyR6KQKZiQbIfwcgIjRADWjmgII4DkZNf8beFxFNNCzTmQ3+uJdz8DSVHkQE0L3svVUkbGXizQxcqQi1AGp5wFE/62I9CKE1gxAAA9nyzmx2FxEOUt7pGe9SMedAM5zpaWr1NOtJ+EvchWANLcSORyC0MsAogcrIXwwmTUBEMBzLQp2Ixh/U4VkHQBwlorsXQGLk1IoWIGoUERk9AUA0pWo9XAFAnNE0Lx+AyC6KeduFb5UFUAADvO7Hvwt5XVjM7UTmEzSqmtMUbTWE7+Rbt7UF/O3EHkdgMTgtqpQ1QAE8LCp+hP4M2prlhTZdYvIngfUiq20tDEXi0z4EnKJqs5pGQReARCxaas4VQVAAA/GuXI/+CilNUpiFLvtR/DlrFEqtmrCmj8kMuVnwJDygMnXUIdLASL4KSpLavsgPmUFeK7B7RfBasHT+67IFvyD6xU81BXLzjqwLmqJun4xo3u1kvOkVcwCofBTkdcfwBfm5Rn860H8wbZ9XyS1P7gsHSRERsAS/RIOSbX/sUzVHsL1q7BGWytRVeUAAnCaUNBvgn8AVj7cEIJn67cx1dBTCX3UTmYYapv6m0qBCMNT+QX4BgBJqeKUAQjAoazzwNCCVMTh4Zj6965tHMsDReUQLdH0mzDHNjvntsIvcJAJ/n3yNwBJyUgtMIAAHA4jLgV/B7wQXBlih5n9hWR7ZeTrIjWKGLI2jCrVd6y9NXwDX34Nvh9AwjC2fCobQADORGR7Gfjr4Lbyi1BMStSx3jvMxVTTfYajM4JI/RDfzcG9bsGH34HvBZB2ujdLuZYEIIAGNlbgTnWAcyaucK9WgXbBrNebnyeoWhw/EZrr6hDd9o+DObX0EMDUVWy2AwIIgGGH+ATwYvDpYE5+qp+7gtCCRA/zth8W/Lmhf5jy80p5rAdSGx2QnJx9GvwU+HkAqmDHm8tkpuMhWpZR4Fngwz18JD5XFzDIsI84t7Xpcv2nJ/oKrPgDpz1m3lOJubNSCkpAsc+E0Ia+jSQYStIJ3k8AKemNQ5h6GopNV74Wq9uU5ec+6Hd9AcSQjC3X1GxWPZm05d5HknL333ulM69HEBJbfnBVXC44Iz6oggM/wFn8tjsqFQoSuHgVn8oou4SM56lhSMbK/yTlrr8mZN8Bn24igsU+2G1LVYw3dUBdaEp6AoiRhDUMBrMQXfMoAHSwB7bGp4VHp1IWzokIr1Uh6oI60ZDoBNSPGIaqgF5fl5LX1gINoGLfNZ/r7LJl3RZaGP9ChMSSVW9asmVHouAz/inTdyMRWz57donNH3Uy+acDia3Jb/r1gRgAv/ESNF8F3l6RalrxZK/85u5e6ektz0oMlnt5UtOFnzU1JMuubymyJpnHGGM96374FieVlq7CT+vXhHH1REDwbHjPkhv/DPAkUD2alHJ4AMU7TVc5MpEmFA7L6ceWoXYuCqBuNCP9mjAuvQlIm7dbctzCaGYTxMFsSW5mkUhIOvba8soa/3QEz9zpIZkxOSSplP8zuRLT3/ifsFEipvvcuSU2X65A6oarPDQivQDkrBJ9L7B6TlkUkZOPZic3bczYKfbrDPtlRIA8sSohq9FntZgwj9h0XXpOVM46MYrfiwMQZcZjCCKAuFg0JDBC5RHXtFFH1Vm8WFQZ9QIQV4wqoHgs3UNJYQT88NO96OyyFSvuZTP7NzdYBQHHTTKeey0lW3fakizSAoUBoAWzQ3Lqomj54HH1Qh0ZALnayLtyubFC2t5uyR0PJKRjX6QPEE7/ZZA8aFkKWayURQuFxmiQ3Vby03Pkdt0Vtnz6rDKbL7fM1NHYz7vfan7VxwJxowOuVVdIO3dbsr873RTxhRI8ixApcdyRYedzflb42fE63/sITJcPMX1TzJJPnRaWSePQB+rfwkkEzdOrayz5z6spp8/jimHa7e3FW0E3Xb+rs54fuqruhg79iuHe0AdAh95GRyXhlkvJdedu+N8wErMzy5r5Ej91WlSWnI4OSQFa9UZK7luZLGiBJowJyxVLYjJ5QuGOzA339Mizr6abUTebYU22zJ5aOI373KBX6oi6Gnb0oI9W4wF9AMTtVRQSR0ibtqWtjis2Bgde26SQJBKFLcE7G/2tjytjzMiQjB/tL4MWLIpO8qZtlmPh3GaMwB2NeId5MyKumGBX6soAKE+HigHUjSCENZtoSbL5xGO2PPWiJa+tYyc5e9/9RAA88TyaHr8fMw9R7vLHkv060AwJnzklJCdh9Ne+p7/wUa0hmYXflZBiXQUpkz4WiJs7KaR9XZash0PRu2tuF/pD963szbEO+Vla6CQXIgLr3fdtuen+Xl+QXXJOTObPCmMCtr+EaYeFJJYZHfb/tcQ7inVVYu45j2sEoLJCcnMq4/2yFyEYOxB/j/FU3+0IWpBYtHAzwtFXzyC+HboI2CTlE8E1cwqsD5yQXd3M0/MMfpvX5vmen7jU79xFTRPSB0DcVk4hrd2UcqYN7IwzkC/9tGPCsmh+RHp9+urExP4Dlvzln0lhM+VHIzB9dcUSeLh9AMS+zykfCcsr76TkwMFc4EbR9zpyjkJVK9aVX12LvaewVsVmWeA5hUqhJVnrzKZnrQ83mDr75Jh8/ITCI7A3N6Sc/k2BEsqcaSH5/PkD+3F2dCQlDFOXohczQzFomWmVkUJdBS1TQwKI/Z41m7JOGlqMkVgjO3l8eMAR2LrNKcze5zU/GQ1TxvxZkQHTM+Xm7f2dkBzyjx5hABQUrFVL34kO9Mat2ZEW+ycE1WP/S8oLb9Iv5LFMfQDBUoTVKYyu/F8002zdaRX0ERFgBw5aThPmFe8AbyYdl1WrflUz0scCcSvdFAP9g9MHHekIjmZPa5NAjPODTyQLCucLPnCQXe7Cb/rFt1Ly0ttZy5YvjCDjKC7u0SrlzmsLC2f5lRF1pQl5qlrjEikCEB2Ic6bhfICr42iO0kBizWgV/CyPW2tOS9y1IinvY4Dj91wkbMtVF8Zl7CiGubqp/K50Xmbv0/Jx6oRB+pyFD4c9P2YfK+2TAZCPvhQo5VCPhZl02/HDRPC2hg/zyafArUNO36fAj7jd0hwWeqFHtZY2HUEwrtmMhVXrU0Jf0ILZhd0IhXPP+0WBrvIklv1VHwvEHeB7NpRdkY69Fhx8CXnm5RQANKCJKCsP+nZ+egdMWplEw3P1RXE1AKKuNCGNADQdKsHqgzLprhUJWfksfD94UeW0Ek4TN0je5chlJ5pN1+ypImccr8D6sIw8akET0gdA8bZAKlm72YIn2BVRWj+DL3g/ph9814BlRI4daUtzU7ov5eZSzJURiJMnhOCAjMuc6aU1fwXlB9RVQbll/NAwAPrxF5tyOq+l6IKWZc8+W95615IEBmq5nWAEAAI4C+ewT8U1qcUTrRpnTg5D7BAtkTKKz1AmKqggfZb1MKBs/SfxF/eZZyixlhzxJLOO4ExqW5ri6RdJT3XnftsJNnNfLENexyDkYnhL1koc6rFzAuf5LGObOW3hpc79DFzLjs6IlVGttrS2KAYOM+XhLnMfwdXjo/AWpsqf9bFAVAhPveleHUgFHPU8uSopT76Q9irzZXIoPWl8SK65OOaMpOgQvPZXPdLRmbUnBMesKbb84XstMmI4nILdlvzk9l5Zu5nDcjoiUbxmNkVR9GWijmXhkJye6x/d0oMQkWwQPmUx7ui332qWiWMDVad/YupIE/CwcPoAiKXhkUkBAbR9lyW3LEvItvbssmSCaNI4G8tpcHbmSOzZgCD7tL+HmbpETzMCxWC98IawrBn7mWyxZOuurF+Icm5bnnQC6j/6kUh6agNNXic2i+UEbHYRh+1MaXDoTrApJepII8raax0KxfO2AtKzr6Tkgw7LWZJDa+TybKwG5VwYqX1Pv/bN6aPQz+NGe4xH6OrCuRhBwfq4RFlbd9nyx4dsWfEvLmu24R8KodkDsvKIM/47VMRA58l1ziTLv1fD74r/HgFrwuUqPG+rzDO9+EJfX29JyuZwOTvlEA5hoeGREWc4zRJ2ob/iR60tuZ7iqy9qkt2dPbLhfcvTp7IBspTMnhZzQEer1IJ453xiH2yXT2Ri/nMlfaduNFrSw7LrBSCWiIe1td/JTyUR45zb94q8szE7ieoKYGf21GOyYRx70en1I86deX09bZPDcsO3m4Uz+9xwgWBhM0V5CxB56NK40fycK5P9IPa12Edi510JUTeakYYAOit9ZBOsSSm0DIFgz7ySlI0IpPcSX+QRs8NCMLiUv2GUe58jLFqxhGcgSEB5weI+y+hGlzhFkd7LKAsUyuEKj1uXJ+QL50dlZIlTIK7svis3V+ApiJqRfgDi7hOtp8Gz93RJqrp1eY/0Jj1v1ZP61EVZ8PDF7tmXay34aLr5E7n5L0mZOIYTn1kweET1fTz2iAj6SOn8Zk4JyzD4ig7kRTIeOBSSBx7vlYs/HgOA+pKW94GnH2q2Mwcroh+AWCpuIFAigFrhv2nHfFg+jWix5cSjcquZDq3ItVRMx2Zq+WMJjMH6/+aVS6t2/MIUmrdhjl+IgWajRoSlGyM3AtFLI4eHAUbeGxiQ3jS+nzXbVMEtY/av6d7R4do0D1bopJJKMn507otjYnqOzzs9Cl9M9uXx5R81L5wTs5OfEWOCBmNOf7g0YUxIPjw3jIB99072ykhITmcEIuqCOtGQPGrQrHQ8Y5QbTBZJx2M7lyb0YUjxqA2/j6DpiMqViOFpbsp9gYyNPgXNWnOZnVsO9efPjGAZcxa0nGk/Zn7IacrSpWCHHFvBYDVGKWElbtq+K3VAXWhK+kxl+CmohG1+2a9Z+lACcTeWHD4jLBefGUNgWRjTDn6Ccawq5r6WruiV1Zkt8Pyf6n+XFmwKJke//Nm4E9/jfaJ9jyXL/pmQ599IA2sYgPuVS6JYkeG/Ft+btuBns81vQdUM/oPZaFw02Gh8wPekbxPGYvN0Yx5QO1SJdVd/wrNSbeoNIFaVw1ea8aFGrDPrrjnpDyAqkKcb8wikoUKsq3Ois/4Vrg8A0V3lnG48Xn+NBi0hD5xjXTV10eVXr04ARH0eJjLtepxQxoOFGpRYN9axsqcVKlVe/QCI1eZZojzdmAfUNhqxTqxb5c5LrYjG6gtAVAGPxubpxo1kiViXyp3YXBHguEL1diS6pfS79r6LsMLr6v8QXvZ52GzVmeVxX0n9WSC35FQ4D6at59EZy8461Cl4+Crq1wK5QBIEJe/CS6i3Q3mdKQq4J+pktNWn7rwPDQCgTI14OO/OG/U/X5XnoNLDXAdOwjys+H5tHACxepw761iKmdIVmQhB3zrX5iZn1UfjxPRxV2o/PVGKghoLQG7Ned4qj4ms4amHblGcK+N5GJLRNDfndiN8aUwAuW+Gx0TypL+ufzNU0L1bnStjmNlMMZJQ02AwFYpobAC5GuIpiDysjedtlblkyBU16JVLb7h6ggHwGsYwD1r+Eh8YGgDyKoXnbfHIJJ564xxc4lmC4X2u2M9cq87lxlwxyoWRmq3bKrYa5T439ADk1RQ3dODBJTw6gMwd4LmJN7fRdZnPc0cwl7m5E/fn4RYr5OYFcIZgQdkQpaENoCH60lVWGz09Q0YD5WvAAKh83ZmU0IABkIFBIA0YAAVSn0lsAGQwEEgDBkCB1GcSGwAZDATSgAFQIPWZxAZABgOBNGAAFEh9JrEBkMFAIA0YAAVSn0lsAGQwEEgDBkCB1GcSGwAZDATSgAFQIPWZxAZABgOBNGAAFEh9JrEBkMFAIA0YAAVSn0lsAGQwEEgDBkCB1GcSGwAZDATSgAFQIPWZxAZABgOBNGAAFEh9JrEBkMFAIA0YAAVSn0lsAGQwEEgDBkCB1GcSGwAZDATSgAFQIPWZxAZABgOBNGAAFEh9JrEBkMFAIA0YAAVSn0lsAGQwEEgDBkCB1GcSGwAZDATSwP8BNyVzCLFGxfEAAAAASUVORK5CYII="},"455":function(e,t,n){},"468":function(e,t,n){"use strict";var a=n(5),r=n(11),o=n(3),i=n(4),c=n(502),s=n(2631),A=n(279),l=n(278),u=(n(451),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}),p=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var b=function(e){function CenterTab(e){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CenterTab),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(CenterTab.__proto__||Object.getPrototypeOf(CenterTab)).call(this,e))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CenterTab,o["a"].Component),p(CenterTab,[{"key":"handleClick","value":function handleClick(e,t){this.props.onClick(e,t)}},{"key":"render","value":function render(){var e=this.props,t=e.current,r=e.tabList,o=e.onClick,i=e.center,c=!1;return r.length%2&&i&&(c=Math.floor(r.length/2)),r[2]=u({},r[2],{"image":n(453),"selectedImage":n(454)}),a.l.createElement(s.a,{"className":"center-tab"},r.map(function(e,n){return c&&n===c?a.l.createElement(s.a,{"className":"center-tab-item tab-round","onClick":function onClick(){return o(n)}},a.l.createElement(s.a,{"className":"tab-item-round-box"},a.l.createElement(s.a,{"className":"tab-item-place"}),a.l.createElement(A.a,{"className":"tab-item-text"},e.title)),a.l.createElement(s.a,{"className":"tab-item-round-img"},a.l.createElement(l.a,{"src":t===n?e.selectedImage:e.image,"className":"round-img"}))):a.l.createElement(s.a,{"className":"center-tab-item","onClick":function onClick(){return o(n)}},a.l.createElement(l.a,{"src":t===n?e.selectedImage:e.image,"className":"tab-item-img"}),a.l.createElement(A.a,{"className":"tab-item-text"},e.title))}))}}]),CenterTab}();n(455);n.d(t,"a",function(){return h});var g=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var h=function(e){function CommonTab(){return function common_tab_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CommonTab),function common_tab_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(CommonTab.__proto__||Object.getPrototypeOf(CommonTab)).apply(this,arguments))}return function common_tab_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CommonTab,o["a"].Component),g(CommonTab,[{"key":"render","value":function render(){var e=this.props,t=e.channelType,n=e.onClick,o=e.current,s=navigator.userAgent.includes("BSZFUTS"),A=Object(r.d)("canteen-storeId"),l=Object(r.d)(i.c.ESTORE_EXIST),u=0==t||1e4==t||"TOC"==t||s,p=5!=t&&6!=t&&9!=t?l?i.a.mainEstore:i.a.mainNotEstore:i.a.mainEshop;8!=t&&12!=t||(p=12!=t||A?i.a.mainRestaurant:i.a.mainWealBenefit);var g=s?i.a.mainEstore:p;return u?a.l.createElement(b,{"tabList":g,"onClick":n,"current":o,"center":!0}):a.l.createElement(c.a,{"tabList":g,"onClick":n,"current":o})}}]),CommonTab}()}}]);