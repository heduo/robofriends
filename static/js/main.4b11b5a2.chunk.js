(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},29:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(16),i=n.n(r),c=n(8),s=n(2),l=n(18),u=n(19),d=(n(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function h(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var f=n(5),p=n(6),b=n(9),g=n(7),m=n(10),E=(n(31),function(e){var t=e.name,n=e.id,a=e.email;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"test1?size=200x200")}),o.a.createElement("div",{className:""},o.a.createElement("h2",null,t),o.a.createElement("p",null,a)))}),v=function(e){var t=e.data.map(function(e){return o.a.createElement(E,{key:e.id,id:e.id,name:e.name,email:e.email})});return o.a.createElement("div",null,t)},w=function(e){e.searchfield;var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search Box",className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"search robots",onChange:t}))},O=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",height:"800px"}},e.children)},y=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(b.a)(this,Object(g.a)(t).call(this,e))).state={hasError:!1},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Ooops. That is not good."):this.props.children}}]),t}(a.Component),R=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.data,r=e.isPending,i=a.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return r?o.a.createElement("p",null,"Loading ..."):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",null,"Robots Friends"),o.a.createElement(w,{value:t,searchChange:n}),o.a.createElement(O,null,o.a.createElement(y,null,o.a.createElement(v,{data:i}))))}}]),t}(a.Component),S=Object(c.b)(function(e){return{searchField:e.searchRobots.searchField,data:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){e({type:"REQUEST_ROBOTS_FAIL",payload:t})})})}}})(R),j=n(4),C={searchField:""},_={isPending:!1,robots:[],error:""},k=Object(l.createLogger)(),T=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(j.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(j.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(j.a)({},e,{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAIL":return Object(j.a)({},e,{isPending:!1,error:t.payload});default:return e}}}),N=Object(s.d)(T,Object(s.a)(u.a,k));i.a.render(o.a.createElement(c.a,{store:N},o.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/robofriends","/service-worker.js");d?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):h(t,e)})}}()}},[[20,2,1]]]);
//# sourceMappingURL=main.4b11b5a2.chunk.js.map