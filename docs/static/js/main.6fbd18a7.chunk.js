(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(5),c=n.n(s),r=n(6),i=n(2),d=(n(11),function(){return fetch("https://challenges-asset-files.s3.us-east-2.amazonaws.com/jobMadrid/companies.json").then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{name:null===e.name?"Desconocido":e.name,founded:null===e.founded?"Desconocido":e.founded,id:e.id,industry:null===e.industry?e.id:e.industry,size:null===e.size?"Desconocido":e.size,website:null===e.website?"Desconocido":e.website}}))})).catch((function(e){console.log(e)}))}),l=(n(12),n(1)),o=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"list__card--item",children:[Object(l.jsxs)("p",{className:"list__card--item__name",children:[" ",e.companyData.name,"."]}),Object(l.jsxs)("p",{className:"list__card--item__year",children:[" ",e.companyData.founded,"."]})]}),Object(l.jsxs)("div",{className:"list__card--characteristics",children:[Object(l.jsx)("p",{className:"list__card--characteristics__industry",children:e.companyData.industry}),Object(l.jsxs)("p",{className:"list__card--characteristics__size",children:[e.companyData.size,"."]})]}),Object(l.jsx)("a",{className:"list__card--link",target:"_blank",rel:"noreferrer",href:"http://"+e.companyData.website,children:"Website"})]})},u=function(e){var t=e.data.map((function(e){return Object(l.jsx)("li",{className:"list__card",children:Object(l.jsx)(o,{companyData:e})},e.id)}));return Object(l.jsx)(l.Fragment,{children:0!==e.data.length?Object(l.jsx)("ul",{className:"list",children:t}):Object(l.jsx)("p",{children:"No exite ningun tipo de empresa con ese filtro."})})},h=function(e){var t=e.data.map((function(t,n){return Object(l.jsx)("input",{className:"header__form--button",type:"button",value:t.industry,onClick:e.handleSearchIndustry},n)}));return Object(l.jsxs)(l.Fragment,{children:[" ",t," "]})},j=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("form",{className:"header__form",onSubmit:e.handleForm,children:Object(l.jsx)(h,{data:e.data,searchIndustry:e.filterIndustry,handleSearchIndustry:e.handleSearchIndustry})}),Object(l.jsx)("form",{className:"header__formReset",children:Object(l.jsx)("input",{type:"button",className:"header__formReset--buttonReset",onClick:e.handleReset,value:"Restablecer Filtros"})})]})},m=(n(14),function(e){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h1",{className:"header__title",children:"Portal de b\xfasqueda de empresas"}),Object(l.jsx)(j,{data:e.data,handleForm:e.handleForm,searchIndustry:e.searchIndustry,handleSearchIndustry:e.handleSearchIndustry,handleReset:e.handleReset})]})}),b=function(){return Object(l.jsx)("div",{className:"footer",children:"&:Maitane"})},f=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)("all"),r=Object(i.a)(c,2),o=r[0],h=r[1],j=Object(a.useState)("hidden"),f=Object(i.a)(j,2),O=f[0],_=f[1];Object(a.useEffect)((function(){d().then((function(e){s(e)}))}),[]);var x=n.filter((function(e){return"all"===o||e.industry===o})).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),p=function(){h("all")};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{data:n,handleForm:function(e){e.preventDefault()},searchIndustry:o,handleSearchIndustry:function(e){h(e.currentTarget.value)},handleReset:function(){h("all")},buttonHidden:O,handleShowFilter:function(){_(""===O?"hidden":""),p()},handleShowAll:p}),Object(l.jsx)(u,{data:x}),Object(l.jsx)(b,{})]})};c.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6fbd18a7.chunk.js.map