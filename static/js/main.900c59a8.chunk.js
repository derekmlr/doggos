(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t(33)},27:function(e,a,t){},29:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(14),c=t.n(o),i=t(6),l=t(2),s=t(18),u=t(3),d=t(4),h=t(7),m=t(5),g=t(8),f=function(e){e.searchValue;var a=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ba mb4 br3 w-30",type:"search",placeholder:"Filter by dog name...",onChange:a}))},p=function(e){return r.a.createElement("div",{className:"tc",style:{overflow:"scroll",height:"calc(100vh - 203px)"}},e.headerHeight,e.children)},E=function(e){var a=e.id,t=e.name;e.breed;return r.a.createElement("div",{className:"tc grow bg-black white br3 pa2 ma2 dib bw2"},r.a.createElement("img",{src:"img/dog".concat(a,".jpeg"),alt:t}),r.a.createElement("div",null,r.a.createElement("h2",null,t)))},v=function(e){var a=e.doggos;if(!a)throw new Error("No dogs were found. :(");return r.a.createElement("div",null,a.map(function(e,a){return r.a.createElement(E,{key:a,id:e.id,name:e.name})}))},b=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(h.a)(this,Object(m.a)(a).call(this,e))).state={hasError:!1},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something wrong happened! D:"):r.a.createElement("div",null,this.props.children)}}]),a}(n.Component),w=(t(27),[{id:1,name:"Fluffy"},{id:2,name:"Daisy"},{id:3,name:"Dresden"},{id:4,name:"Bella"},{id:5,name:"Lucy"},{id:6,name:"Charlie"},{id:7,name:"Luna"},{id:8,name:"Maggie"},{id:9,name:"Darren"},{id:10,name:"Trix"},{id:11,name:"Chase"},{id:12,name:"Bud"}]),y=function(e){function a(e){return Object(u.a)(this,a),Object(h.a)(this,Object(m.a)(a).call(this,e))}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchDogs()}},{key:"render",value:function(){var e=this.props,a=e.searchValue,t=e.onSearchChange,n=e.doggos,o=n.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return n.length?r.a.createElement("div",{className:"tc"},r.a.createElement("header",{id:"header"},r.a.createElement("h1",{className:"f1"},"Doggos"),r.a.createElement(f,{searchChange:t})),r.a.createElement(p,null,r.a.createElement(b,null,r.a.createElement(v,{doggos:o})))):r.a.createElement("h1",null,"Loading...")}}]),a}(n.Component),O=Object(i.b)(function(e){return{searchValue:e.searchDogs.searchValue,doggos:e.dogsData.doggos}},function(e){return{onSearchChange:function(a){return e({type:"SET_SEARCH_VALUE",payload:a.target.value})},fetchDogs:function(){return e({type:"FETCH_DOG_DATA",payload:w})}}})(y),j=t(12),D={searchValue:""},C={doggos:[]};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(29),t(31);var k=Object(s.createLogger)(),A=Object(l.c)({searchDogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"SET_SEARCH_VALUE":return Object(j.a)({},e,{searchValue:a.payload});default:return e}},dogsData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"FETCH_DOG_DATA":return Object(j.a)({},e,{doggos:a.payload});default:return e}}}),L=Object(l.d)(A,Object(l.a)(k));c.a.render(r.a.createElement(i.a,{store:L},r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.900c59a8.chunk.js.map