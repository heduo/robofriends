(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},29:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),i=n(8),s=n(2),l=n(18),u=n(19);n(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=n(5),d=n(6),m=n(9),E=n(7),b=n(10),p=(n(31),function(e){var t=e.name,n=e.id,a=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"test1?200x200")}),r.a.createElement("div",{className:""},r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))}),g=function(e){var t=e.data.map(function(e){return r.a.createElement(p,{key:e.id,id:e.id,name:e.name,email:e.email})});return r.a.createElement("div",null,t)},f=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"search robots",onChange:t}))},O=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"800px"}},e.children)},v=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(m.a)(this,Object(E.a)(t).call(this,e))).state={hasError:!1},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops. That is not good."):this.props.children}}]),t}(a.Component),R=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.data,o=e.isPending,c=a.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?r.a.createElement("p",null,"Loading ..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robots Friends"),r.a.createElement(f,{value:t,searchChange:n}),r.a.createElement(O,null,r.a.createElement(v,null,r.a.createElement(g,{data:c}))))}}]),t}(a.Component),y=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,data:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){e({type:"REQUEST_ROBOTS_FAIL",payload:t})})})}}})(R),S=n(4),j={searchField:""},w={isPending:!1,robots:[],error:""},C=Object(l.createLogger)(),_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(S.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(S.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(S.a)({},e,{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAIL":return Object(S.a)({},e,{isPending:!1,error:t.payload});default:return e}}}),T=Object(s.d)(_,Object(s.a)(u.a,C));c.a.render(r.a.createElement(i.a,{store:T},r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.6e2cb242.chunk.js.map