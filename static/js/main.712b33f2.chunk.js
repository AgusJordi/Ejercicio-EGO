(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{33:function(e,a,t){e.exports=t(61)},38:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(14),r=t.n(c),o=(t(38),t(8)),s=t(18),i=t.n(s);function m(){return function(e){i.a.get("https://challenge.agenciaego.tech/models").then((function(e){return e.data})).then((function(a){e({type:"GET_ALL",payload:a})})).catch((function(){return alert("Algo salio mal")}))}}function d(e){return function(a){i.a.get("https://challenge.agenciaego.tech/models/".concat(e)).then((function(e){return e.data})).then((function(e){a({type:"GET_ONE",payload:e})})).catch((function(){return alert("Algo salio mal")}))}}var u=function(e){var a=e.custom,t=Object(o.c)((function(e){return e.model})),c=Object(o.b)();return Object(n.useEffect)((function(){c(d(a))}),[d]),l.a.createElement("div",null,l.a.createElement("div",{class:"media"},l.a.createElement("img",{class:"mr-3",src:"...",alt:"Generic placeholder image",style:{width:"100vh"}}),l.a.createElement("div",{class:"media-body",style:{marginRight:"20vh"}},l.a.createElement("h3",null,t.name),l.a.createElement("h3",null,"Description"),l.a.createElement("p",null,t.description))),l.a.createElement("div",null,l.a.createElement("div",{id:"carouselExampleIndicators",class:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{class:"carousel-indicators"},l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",class:"active"}),l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})),l.a.createElement("div",{class:"carousel-inner"},l.a.createElement("div",{class:"carousel-item active"},l.a.createElement("img",{class:"d-block w-100",src:t.photo,alt:"First slide"})),l.a.createElement("div",{class:"carousel-item"},l.a.createElement("img",{class:"d-block w-100",src:t.photo,alt:"Second slide"})),l.a.createElement("div",{class:"carousel-item"},l.a.createElement("img",{class:"d-block w-100",src:t.photo,alt:"Third slide"}))),l.a.createElement("a",{class:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},l.a.createElement("span",{class:"carousel-control-prev-icon","aria-hidden":"true"},"aaaaaaaaaaaaaaaaaaaaaaa"),l.a.createElement("span",{class:"sr-only"},"Previoussssssssssssssssssssssssss")),l.a.createElement("a",{class:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},l.a.createElement("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),l.a.createElement("span",{class:"sr-only"},"Next")))),l.a.createElement("div",{class:"media"},l.a.createElement("img",{class:"mr-3",src:"...",alt:"Generic placeholder image",style:{width:"100vh"}}),l.a.createElement("div",{class:"media-body",style:{marginRight:"20vh"}},l.a.createElement("h4",null,t.name),l.a.createElement("p",null,t.description))),l.a.createElement("div",{class:"media"},l.a.createElement("img",{class:"mr-3",src:"...",alt:"Generic placeholder image",style:{width:"100vh"}}),l.a.createElement("div",{class:"media-body",style:{marginRight:"20vh"}},l.a.createElement("h3",null,t.name),l.a.createElement("p",null,t.description))))},p=t(2),E=t(9),v=function(){return l.a.createElement("nav",{class:"navbar border-bottom"},l.a.createElement("div",{class:"pl-5"},l.a.createElement(E.b,{to:"/models"},l.a.createElement("p",{class:"navbar-brand m-0 pr-3"},"Modelos")),l.a.createElement(E.b,{to:"/datamodels"},l.a.createElement("p",{class:"navbar-brand m-0 "},"Ficha de modelo"))),l.a.createElement("div",null,l.a.createElement("form",{class:"form-inline"},l.a.createElement("div",{class:"btn-group"},l.a.createElement("button",{type:"button",class:"btn dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Right-aligned menu"),l.a.createElement("div",{class:"dropdown-menu dropdown-menu-right"},l.a.createElement("button",{class:"dropdown-item",type:"button"},"Modelos"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Servicios y Accesorios"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Financiacion"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Reviews y Comunidad"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Toyota Mobility Service"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Toyota Gazoo Racing"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Toyota Hibridos"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Concesionarios"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Test Drive"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Contacto"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Actividades"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Servicios al Cliente"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Ventas Especiales"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Innovacion"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Prensa"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Acerca de..."))))))},b=function(e){return l.a.createElement("div",null,l.a.createElement(E.b,{to:"/datamodels/".concat(e.id)},l.a.createElement("div",{class:"card border-0 pt-2",style:{width:"300px"}},l.a.createElement("h4",null,e.name),l.a.createElement("p",null,e.year," | $",e.price," "),l.a.createElement("img",{class:"card-img-top border-0",src:"https://challenge.agenciaego.tech".concat(e.photo),style:{height:"300px"}}))))},h=function(){var e=Object(o.c)((function(e){return e.models})),a=Object(o.b)();return Object(n.useEffect)((function(){a(m())}),[m]),console.log(e),l.a.createElement("div",null,l.a.createElement("div",{style:{margin:"10vh"}},l.a.createElement("h1",{style:{marginBottom:"5vh"}},"Descubr\xed todos los modelos "),l.a.createElement("ul",{class:"nav nav-tabs"},l.a.createElement("div",{class:"nav nav-tabs",id:"nav-tab",role:"tablist"},l.a.createElement("a",{class:"nav-link active",id:"nav-home-tab","data-toggle":"tab",href:"#nav-home",role:"tab","aria-controls":"nav-home","aria-selected":"true"},"Filtrar por"),l.a.createElement("a",{class:"nav-link",id:"nav-profile-tab","data-toggle":"tab",href:"#nav-profile",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},"Todos"),l.a.createElement("a",{class:"nav-link",id:"nav-profile-tab","data-toggle":"tab",href:"#nav-profile",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},"Autos"),l.a.createElement("a",{class:"nav-link",id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},"Pickups y Comerciales"),l.a.createElement("a",{class:"nav-link",id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},"SUVs y Crossovers"))),l.a.createElement("div",{className:"card-deck d-flex justify-content-around flex-wrap text-center mt-5"},e&&e.map((function(a,t){var c=t%4===0;if(e.length>0)return c?l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"w-100"}),l.a.createElement("div",{className:"col-2 pb-4 mr-5"},l.a.createElement(b,{id:a.id,name:a.name,year:a.year,price:a.price,photo:"https://challenge.agenciaego.tech".concat(a.photo)}))):l.a.createElement("div",{className:"col-2 pb-4 mr-5"},l.a.createElement(b,{id:a.id,name:a.name,year:a.year,price:a.price,photo:a.photo}))})))))},g=function(){var e=Object(o.c)((function(e){return e.models})),a=Object(o.b)();return Object(n.useEffect)((function(){a(m())}),[m]),console.log(e.segment,"aaaaaaaaaaa"),l.a.createElement("div",null,l.a.createElement("div",{style:{margin:"10vh"}},l.a.createElement("h1",{style:{marginBottom:"5vh"}},"Descubr\xed todos los modelos "),l.a.createElement("ul",{class:"nav nav-tabs"},l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link active",href:"#"},"Filtrar por")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("p",{class:"nav-link disabled"},"Todos")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("p",{class:"nav-link disabled"},"Autos")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link disabled",href:"#"},"Pickups y Comerciales")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link disabled",href:"#"},"SUVs y Crossovers"))),l.a.createElement("div",{className:"card-deck d-flex justify-content-around flex-wrap text-center mt-5"},e.segment&&e.segment.map((function(a,t){var c=t%4===0;if(e.length>0)return c?l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"w-100"}),l.a.createElement("div",{className:"col-2 pb-4 mr-5"},l.a.createElement(b,{id:a.id,name:a.name,year:a.year,price:a.price,photo:a.photo}))):l.a.createElement("div",{className:"col-2 pb-4 mr-5"},l.a.createElement(b,{id:a.id,name:a.name,year:a.year,price:a.price,photo:a.photo}))})))))};var f=function(){return l.a.createElement("div",null,l.a.createElement(p.a,{path:"/",render:function(){return l.a.createElement(v,null)}}),l.a.createElement(p.a,{path:"/models",render:function(){return l.a.createElement(h,null)}}),l.a.createElement(p.a,{exact:!0,path:"/models/:segmento",render:function(e){var a=e.match;return l.a.createElement(g,{name:a.params.name})}}),l.a.createElement(p.a,{path:"/datamodels/:id",render:function(e){var a=e.match;return l.a.createElement(u,{custom:a.params.id})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=t(11),w=t(13),O={model:[],models:[],segmento:[]};var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_ALL":return Object(w.a)(Object(w.a)({},e),{},{models:a.payload});case"GET_ONE":return Object(w.a)(Object(w.a)({},e),{},{model:a.payload});default:return e}},x=t(32),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.c,N=Object(y.d)(k,j(Object(y.a)(x.a)));r.a.render(l.a.createElement(o.a,{store:N},l.a.createElement(E.a,null,l.a.createElement(f,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.712b33f2.chunk.js.map