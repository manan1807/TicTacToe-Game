(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{19:function(n,t,e){},20:function(n,t,e){},21:function(n,t,e){},25:function(n,t,e){"use strict";e.r(t);var c=e(2),i=e(0),r=e.n(i),a=e(6),s=e.n(a),j=(e(19),e(20),e(9)),l=e(28),u=e(29);e(21);function o(n){return Object(c.jsx)(l.a,{variant:"flat",onClick:function(){n.onClick()},children:n.value})}function d(){var n=Object(i.useState)([]),t=Object(j.a)(n,2),e=t[0],r=t[1],a=Object(i.useState)("true"),s=Object(j.a)(a,2),d=s[0],b=s[1],O=e.slice().fill();function f(n){return Object(c.jsx)(o,{onClick:function(){return function(n){var t=e.slice();t[n]||v(e)||(t[n]=d?"X":"O",console.log(t[n]),r(t),b(!d))}(n)},value:e[n]})}function v(n){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],e=0;e<t.length;e++){var c=Object(j.a)(t[e],3),i=c[0],r=c[1],a=c[2];if(n[i]&&n[i]===n[r]&&n[i]===n[a])return n[i]}return null}var h,x=v(e);return h=x?"Winner : "+x:"NextPlayer : "+(d?"X":"O"),Object(c.jsxs)("div",{class:"allign",children:[Object(c.jsx)("div",{children:Object(c.jsx)(u.a,{variant:"dark",children:h})}),Object(c.jsxs)("div",{children:[f(0),f(1),f(2)]}),Object(c.jsxs)("div",{children:[f(3),f(4),f(5)]}),Object(c.jsxs)("div",{children:[f(6),f(7),f(8)]}),Object(c.jsx)("div",{class:"margin",children:Object(c.jsx)(l.a,{variant:"secondary",onClick:function(){return r(O)},children:"Reset"})})]})}function b(){return Object(c.jsx)("div",{children:Object(c.jsx)(d,{})})}var O=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(b,{})})},f=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,30)).then((function(t){var e=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;e(n),c(n),i(n),r(n),a(n)}))};e(24);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),f()}},[[25,1,2]]]);
//# sourceMappingURL=main.d174964a.chunk.js.map