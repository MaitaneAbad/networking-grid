(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(5),r=n.n(s),i=n(6),a=n(2),o=(n(11),function(){return fetch("https://challenges-asset-files.s3.us-east-2.amazonaws.com/jobMadrid/companies.json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.name,founded:e.founded,id:e.id,industry:e.industry,size:e.size,website:e.website}}));return console.log(t),t}))}),j=(n(12),n(1)),u=function(e){var t=e.data.map((function(e,t){return console.log(t),console.log(e.website),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("li",{className:"companyList",children:[Object(j.jsx)("p",{children:e.name}),Object(j.jsx)("p",{children:e.size}),Object(j.jsx)("p",{children:e.founded}),Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"http://"+e.website,children:e.website})]},t)})}));return Object(j.jsx)(j.Fragment,{children:0!==e.data.length?Object(j.jsx)("ul",{className:"list",children:t}):Object(j.jsx)("p",{children:"No exite ningun tipo de empresa con este filtro: ".concat(e.data.name,".")})})},d=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){o().then((function(e){s(e)}))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(u,{data:n})})};r.a.render(Object(j.jsx)(i.a,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.01766dc2.chunk.js.map