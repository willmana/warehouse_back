(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(63)},33:function(e,t,n){},54:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),s=n.n(c),u=(n(33),n(3)),o=n.n(u),i=n(8),l=n(13),p=n(10),f=n(1),m=n(12),v=n.n(m),b="http://localhost:3001/get",d=function(){var e=Object(i.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(b,"/gloves"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(b,"/facemasks"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),g={getBeanies:function(){var e=Object(i.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(b,"/beanies"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getFacemasks:h,getGloves:d},E=function(e){var t=e.gloves;return r.a.createElement("div",{id:"gloves"},t.map(function(e){return r.a.createElement("div",null,e.name)}))},w=function(e){var t=e.facemasks;return r.a.createElement("div",{id:"facemasks"},t.map(function(e){return r.a.createElement("div",null,e.name)}))},k=function(e){var t=e.beanies;return r.a.createElement("div",{id:"beanies"},t.map(function(e){return r.a.createElement("div",null,e.name)}))},y=(n(54),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),u=Object(l.a)(s,2),m=u[0],v=u[1],b=Object(a.useState)([]),d=Object(l.a)(b,2),h=d[0],y=d[1],j={padding:5};return Object(a.useEffect)(function(){function e(){return(e=Object(i.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getGloves();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function t(){return(t=Object(i.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getFacemasks();case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function n(){return(n=Object(i.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getBeanies();case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}(),function(){n.apply(this,arguments)}()},[]),console.log(n.length),console.log(m.length),console.log(h.length),r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(p.b,{style:j,to:"/"}," home "),r.a.createElement(p.b,{style:j,to:"/gloves"}," gloves "),r.a.createElement(p.b,{style:j,to:"/facemasks"}," facemasks "),r.a.createElement(p.b,{style:j,to:"/beanies"}," beanies ")),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/gloves"},r.a.createElement(E,{gloves:n})),r.a.createElement(f.a,{path:"/facemasks"},r.a.createElement(w,{facemasks:h})),r.a.createElement(f.a,{path:"/beanies"},r.a.createElement(k,{beanies:m})),r.a.createElement(f.a,{path:"/"},r.a.createElement("div",null,"Home"))))});s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.4a0542a3.chunk.js.map