(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(5),d=n(1),s=(n(10),n(11),n(12),n(4)),o=n.n(s),b=n(0),l=function(t){var e=t.selectedTabId,n=t.tabs,c=t.onTabSelected,i=n.find((function(t){return t.id===e}))||n[0];return Object(b.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:n.map((function(t){return Object(b.jsx)("li",{className:o()({"is-active":i.id===t.id}),"data-cy":"Tab",children:Object(b.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return function(t){t.id!==e&&c(t)}(t)},children:t.title})},t.id)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:null===i||void 0===i?void 0:i.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){return r.find((function(t){return"tab-1"===t.id||""}))},j=function(){var t=Object(d.useState)(u),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h1",{className:"title",children:"Selected tab is ".concat(null===n||void 0===n?void 0:n.title)}),Object(b.jsx)(l,{tabs:r,selectedTabId:(null===n||void 0===n?void 0:n.id)||"",onTabSelected:function(t){c(t)}})]})};i.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.07cfa997.chunk.js.map