(function(t){function e(e){for(var r,n,s=e[0],l=e[1],u=e[2],d=0,p=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],r=!0,s=1;s<i.length;s++){var l=i[s];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=n(n.s=i[0]))}return t}var r={},o={app:0},a=[];function n(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=r,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/editorial-front/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0241":function(t,e,i){"use strict";var r=i("1eb1"),o=i.n(r);o.a},"1eb1":function(t,e,i){},"41a1":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},a=[],n={name:"App"},s=n,l=(i("5c0b"),i("2877")),u=Object(l["a"])(s,o,a,!1,null,null,null),c=u.exports,d=i("8c4f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"wrapper-se"},[i("div",{staticClass:"main-content"},[i("CartBHeader"),i("b-container",{staticStyle:{width:"100%"},attrs:{fluid:""}},[i("b-row",[i("b-col",{staticStyle:{"border-right":"solid 1px #B9B9B9"}},[i("NavSide")],1),i("b-col",{attrs:{cols:"9"}},[i("h1",{staticClass:"ml-5 mb-4 mt-4"},[t._v(t._s(t.nameC))]),i("div",{staticClass:"ml-5 mr-4"},[i("b-table",{attrs:{items:t.items,fields:t.fields,striped:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(actions)",fn:function(e){return[t.showEdit?i("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(i){return t.info(e.item,e.index,i.target)}}},[t._v("Editar")]):t._e(),t.showEdit?i("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(i){return t.deleteRow(e.item)}}},[t._v("eliminar")]):t._e()]}}])})],1),i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"mt-4 ml-5"},[t._v("Registar "+t._s(t.name))]),i("b-modal",{attrs:{id:"modal-1",title:"Registro de "+t.name,"ok-only":""}},[i("b-form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[i("b-form-group",{attrs:{id:"input-group-1",label:"Teléfono:","label-for":"input-1"}},[i("b-form-input",{attrs:{id:"input-1",type:"number",required:"",placeholder:"Ingresar teléfono"},model:{value:t.form.telefono,callback:function(e){t.$set(t.form,"telefono",e)},expression:"form.telefono"}})],1),i("b-form-group",{attrs:{id:"input-group-2",label:"Dirección:","label-for":"input-2"}},[i("b-form-input",{attrs:{id:"input-2",type:"text",required:"",placeholder:"Ingresar dirección"},model:{value:t.form.direccion,callback:function(e){t.$set(t.form,"direccion",e)},expression:"form.direccion"}})],1),i("b-form-group",{attrs:{id:"input-group-3",label:"Código de Sucursal:","label-for":"input-3"}},[i("b-form-input",{attrs:{id:"input-2",type:"text",required:"",placeholder:"Ingresar código"},model:{value:t.form.codigo_sucursal,callback:function(e){t.$set(t.form,"codigo_sucursal",e)},expression:"form.codigo_sucursal"}})],1),i("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Registar")])],1)],1)],1)],1),i("b-modal",{attrs:{id:t.infoModal.id,title:"Editar "+t.nameS,"ok-only":""},on:{hide:t.resetInfoModal}},[i("b-form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[i("b-form-group",{attrs:{id:"input-group-m1",label:"Teléfono:","label-for":"input-m1"}},[i("b-form-input",{attrs:{id:"input-m1",type:"number",required:"",placeholder:"Ingresar teléfono"},model:{value:t.infoModal.content.id_sucursal,callback:function(e){t.$set(t.infoModal.content,"id_sucursal",e)},expression:"infoModal.content.id_sucursal"}})],1),i("b-form-group",{attrs:{id:"input-group-2",label:"Dirección:","label-for":"input-2"}},[i("b-form-input",{attrs:{id:"input-2",type:"text",required:"",placeholder:"Ingresar dirección"},model:{value:t.form.direccion,callback:function(e){t.$set(t.form,"direccion",e)},expression:"form.direccion"}})],1),i("b-form-group",{attrs:{id:"input-group-3",label:"Código de Sucursal:","label-for":"input-3"}},[i("b-form-input",{attrs:{id:"input-2",type:"text",required:"",placeholder:"Ingresar código"},model:{value:t.form.codigo_sucursal,callback:function(e){t.$set(t.form,"codigo_sucursal",e)},expression:"form.codigo_sucursal"}})],1),i("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Registar")])],1),i("pre",[t._v(t._s(t.infoModal.content))])],1)],1)],1)])])},m=[],f=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[i("b-navbar-brand",{attrs:{href:"#"}},[t._v("Sistema Gestión Editoriales")]),i("b-navbar-nav",{staticClass:"ml-auto"},[i("b-nav-item",{attrs:{href:"#",right:""}},[t._v("Iniciar Sesión")])],1)],1)],1)}),b=[],v={name:"Header",components:{},data:function(){return{}}},h=v,g=Object(l["a"])(h,f,b,!1,null,null,null),_=g.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-nav",{staticClass:"w-35 ml-4 mt-4",attrs:{vertical:""}},[i("b-nav-item",{attrs:{to:"/",active:""}},[t._v("Sucursales")]),i("b-nav-item",{on:{click:t.makeReport}},[t._v("Reporte Empleados")]),i("b-nav-item",{attrs:{to:"/revistas"}},[t._v("Revistas")])],1)},y=[],k={methods:{makeReport:function(){window.open("http://localhost:8080/empleados/report")}}},w=k,S=Object(l["a"])(w,x,y,!1,null,null,null),$=S.exports,C={data:function(){return{form:{telefono:"",direccion:"",codigo_sucursal:""},showEdit:!1,name:"sucursales",nameS:"sucursal",nameC:"Sucursales",columnDefs:[],rowData:[],fields:["id_sucursal","telefono","direccion","codigo_sucursal","created_at","updated_at"],items:[{isActive:!0,age:40,first_name:"Dickerson",last_name:"Macdonald"},{isActive:!1,age:21,first_name:"Larsen",last_name:"Shaw"},{isActive:!1,age:89,first_name:"Geneva",last_name:"Wilson",_showDetails:!0},{isActive:!0,age:38,first_name:"Jami",last_name:"Carney"}],infoModal:{id:"info-modal",title:"",content:{}}}},components:{CartBHeader:_,NavSide:$},beforeMount:function(){this.getSucursales()},methods:{getSucursales:function(){var t=this;this.axios.get("http://editorial-system.herokuapp.com/public/sucursal/list").then((function(e){console.log(e.data),t.items=e.data.data}))},register:function(){var t=this;this.axios.post("http://editorial-system.herokuapp.com/public/sucursal/store",this.axiosParams).then((function(e){console.log(e.data),t.getSucursales()}))},info:function(t,e,i){this.infoModal.title="Row index: ".concat(e),this.infoModal.content=JSON.stringify(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,i)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},deleteRow:function(t){var e=this;console.log(t.id_revista),this.id_revista=t.id_revista,this.axios.post("http://editorial-system.herokuapp.com/public/revista/delete",this.axiomsParamDel).then((function(t){console.log(t),e.$swal("Información eliminada!!"),e.getRevistas()}))}},computed:{axiosParams:function(){var t=new URLSearchParams;return t.append("telefono",this.form.telefono),t.append("direccion",this.form.direccion),t.append("codigo_sucursal",this.form.codigo_sucursal),t}}},R=C,M=(i("cdab"),Object(l["a"])(R,p,m,!1,null,null,null)),I=M.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"wrapper-se"},[i("div",{staticClass:"main-content mb-5"},[i("CartBHeader"),i("b-container",{staticStyle:{width:"100%"},attrs:{fluid:""}},[i("b-row",[i("b-col",{staticStyle:{"border-right":"solid 1px #B9B9B9"}},[i("NavSide")],1),i("b-col",{attrs:{cols:"9"}},[i("h1",{staticClass:"ml-5 mb-4 mt-4"},[t._v(t._s(t.nameC))]),i("div",{staticClass:"ml-5 mr-4"},[i("b-table",{attrs:{items:t.items,fields:t.fields,striped:"",responsive:""},scopedSlots:t._u([{key:"cell(actions)",fn:function(e){return[t.showEdit?i("b-button",{staticClass:"mr-1",attrs:{size:"sm",variant:"info"},on:{click:function(i){return t.info(e.item,e.index,i.target)}}},[t._v("Editar")]):t._e(),i("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(i){return t.deleteRow(e.item)}}},[t._v("eliminar")])]}},{key:"head()",fn:function(e){return[i("div",{staticClass:"text-nowrap"},[t._v(t._s(e.label))])]}}])})],1),i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"mt-4 ml-5"},[t._v("Registar "+t._s(t.name))]),i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-article",modifiers:{"modal-article":!0}}],staticClass:"mt-4 ml-3"},[t._v("Crear Artículo")]),i("b-modal",{attrs:{id:"modal-article",title:"Registrar Artículo","ok-only":""}},[i("b-form",{on:{submit:function(e){return e.preventDefault(),t.registerArticulo(e)}}},[i("b-form-group",{attrs:{id:"input-group-1",label:"Fecha:","label-for":"input-1"}},[i("b-form-input",{attrs:{id:"input-1",type:"date",required:"",placeholder:"Ingresar fecha"},model:{value:t.form_article.fecha,callback:function(e){t.$set(t.form_article,"fecha",e)},expression:"form_article.fecha"}})],1),i("b-form-group",{attrs:{id:"input-group-2",label:"Título:","label-for":"input-2"}},[i("b-form-input",{attrs:{id:"input-2",type:"text",required:"",placeholder:"Ingresar título"},model:{value:t.form_article.titulo,callback:function(e){t.$set(t.form_article,"titulo",e)},expression:"form_article.titulo"}})],1),i("b-form-group",{attrs:{id:"input-group-ar4",label:"Contenido:","label-for":"input-ar4"}},[i("b-form-textarea",{attrs:{id:"textarea",placeholder:"Ingresar contenido",rows:"3","max-rows":"6"},model:{value:t.form_article.contenido,callback:function(e){t.$set(t.form_article,"contenido",e)},expression:"form_article.contenido"}})],1),i("b-form-group",{attrs:{id:"input-group-ar7",label:"Revista:","label-for":"input-ar7"}},[i("b-form-select",{attrs:{id:"input-ar7",options:t.options_numero_revista,required:""},model:{value:t.form_article.id_numero_revista,callback:function(e){t.$set(t.form_article,"id_numero_revista",e)},expression:"form_article.id_numero_revista"}})],1),i("b-form-group",{attrs:{id:"input-group-3",label:"Periodista:","label-for":"input-3"}},[i("b-form-select",{attrs:{id:"input-3",options:t.options_periodista,required:""},model:{value:t.form_article.id_periodista,callback:function(e){t.$set(t.form_article,"id_periodista",e)},expression:"form_article.id_periodista"}})],1),i("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Registar")])],1)],1),i("b-modal",{attrs:{id:"modal-1",title:"Registro de "+t.nameC,"ok-only":""}},[i("b-form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[i("b-form-group",{attrs:{id:"input-group-1",label:"Título:","label-for":"input-1"}},[i("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Ingresar título"},model:{value:t.form.titulo,callback:function(e){t.$set(t.form,"titulo",e)},expression:"form.titulo"}})],1),i("b-form-group",{attrs:{id:"input-group-2",label:"Número de Registro:","label-for":"input-2"}},[i("b-form-input",{attrs:{id:"input-2",type:"number",required:"",placeholder:"Ingresar registro"},model:{value:t.form.numero_registro,callback:function(e){t.$set(t.form,"numero_registro",e)},expression:"form.numero_registro"}})],1),i("b-form-group",{attrs:{id:"input-group-3",label:"Tipo:","label-for":"input-3"}},[i("b-form-input",{attrs:{id:"input-2",type:"text",required:"",placeholder:"Ingresar tipo"},model:{value:t.form.tipo,callback:function(e){t.$set(t.form,"tipo",e)},expression:"form.tipo"}})],1),i("b-form-group",{attrs:{id:"input-group-4a",label:"Periodicidad:","label-for":"input-4a"}},[i("b-form-input",{attrs:{id:"input-4a",type:"text",required:"",placeholder:"Ingresar periodicidad"},model:{value:t.form.periodicidad,callback:function(e){t.$set(t.form,"periodicidad",e)},expression:"form.periodicidad"}})],1),i("b-form-group",{attrs:{id:"input-group-3",label:"Sucursal:","label-for":"input-3"}},[i("b-form-select",{attrs:{id:"input-3",options:t.options,required:""},model:{value:t.form.id_sucursal,callback:function(e){t.$set(t.form,"id_sucursal",e)},expression:"form.id_sucursal"}})],1),i("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Registar")])],1)],1)],1)],1),i("b-modal",{attrs:{id:t.infoModal.id,title:"Editar "+t.nameS,"ok-only":""},on:{hide:t.resetInfoModal}},[i("b-form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[i("b-form-group",{attrs:{id:"input-group-m1",label:"Teléfono:","label-for":"input-m1"}},[i("b-form-input",{attrs:{id:"input-m1",type:"number",required:"",placeholder:"Ingresar título"},model:{value:t.form.titulo,callback:function(e){t.$set(t.form,"titulo",e)},expression:"form.titulo"}})],1),i("b-form-group",{attrs:{id:"input-group-2",label:"Dirección:","label-for":"input-2"}},[i("b-form-input",{attrs:{id:"input-2",type:"text",required:"",placeholder:"Ingresar dirección"},model:{value:t.form.numero_registro,callback:function(e){t.$set(t.form,"numero_registro",e)},expression:"form.numero_registro"}})],1),i("b-form-group",{attrs:{id:"input-group-3",label:"Código de Sucursal:","label-for":"input-3"}},[i("b-form-input",{attrs:{id:"input-2",type:"text",required:"",placeholder:"Ingresar código"},model:{value:t.form.tipo,callback:function(e){t.$set(t.form,"tipo",e)},expression:"form.tipo"}})],1),i("b-form-group",{attrs:{id:"input-group-3",label:"Código de Sucursal:","label-for":"input-3"}},[i("b-form-input",{attrs:{id:"input-2",type:"text",required:"",placeholder:"Ingresar código"},model:{value:t.form.periodicidad,callback:function(e){t.$set(t.form,"periodicidad",e)},expression:"form.periodicidad"}})],1),i("b-form-select",{staticClass:"mb-3",attrs:{options:t.options,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:t.form.id_sucursal,callback:function(e){t.$set(t.form,"id_sucursal",e)},expression:"form.id_sucursal"}}),i("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Registar")])],1),i("pre",[t._v(t._s(t.infoModal.content))])],1)],1)],1)])])},q=[],O={data:function(){return{showEdit:!1,form:{titulo:"",numero_registro:"",tipo:"",periodicidad:"",id_sucursal:null},form_article:{fecha:"",titulo:"",contenido:"",id_numero_revista:null,id_periodista:null},options:[],options_periodista:[],options_numero_revista:[],name:"revistas",nameS:"revista",nameC:"Revistas",columnDefs:[],rowData:[],fields:["actions","titulo","numero_registro","tipo","periodicidad","id_sucursal","created_at","updated_at"],items:[],infoModal:{id:"info-modal",title:"",content:{}},id_revista:null}},components:{CartBHeader:_,NavSide:$},beforeMount:function(){this.getRevistas(),this.getSucursalesSelect(),this.getNumeroRevistasSelect(),this.getPeriodistasSelect()},methods:{getRevistas:function(){var t=this;this.axios.get("http://editorial-system.herokuapp.com/public/revista/list").then((function(e){console.log(e.data),t.items=e.data.data}))},getNumeroRevistasSelect:function(){var t=this;this.axios.get("http://editorial-system.herokuapp.com/public/revista/select-list-nr").then((function(e){console.log(e.data),t.options_numero_revista=e.data}))},getSucursalesSelect:function(){var t=this;this.axios.get("http://editorial-system.herokuapp.com/public/sucursal/select-list").then((function(e){console.log(e.data),t.options=e.data}))},getPeriodistasSelect:function(){var t=this;this.axios.get("http://editorial-system.herokuapp.com/public/periodista/select-list").then((function(e){console.log(e.data),t.options_periodista=e.data}))},getSelect:function(){var t=this;this.axios.get("http://editorial-system.herokuapp.com/public/sucursal/select-list").then((function(e){console.log(e.data),t.options=e.data}))},register:function(){var t=this;this.axios.post("http://editorial-system.herokuapp.com/public/revista/store",this.axiosParams).then((function(e){console.log(e.data),t.$bvModal.hide("modal-1"),t.$swal("Información registrada!!"),t.getRevistas()}))},registerArticulo:function(){var t=this;this.axios.post("http://editorial-system.herokuapp.com/public/articulo/store",this.axiosParamsAr).then((function(e){console.log(e.data),t.$bvModal.hide("modal-article"),t.$swal("Información registrada!!")}))},info:function(t){var e=this;this.infoModal.content=JSON.stringify(t,null,2),this.axios.post("http://editorial-system.herokuapp.com/public/articulo/store",this.axiosParamsAr).then((function(t){console.log(t.data),e.$bvModal.hide("modal-article"),e.$swal("Información registrada!!")}))},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},deleteRow:function(t){var e=this;console.log(t.id_revista),this.id_revista=t.id_revista,this.axios.post("http://editorial-system.herokuapp.com/public/revista/delete",this.axiomsParamDel).then((function(t){console.log(t),e.$swal("Información eliminada!!"),e.getRevistas()}))}},computed:{axiosParams:function(){var t=new URLSearchParams;return t.append("titulo",this.form.titulo),t.append("numero_registro",this.form.numero_registro),t.append("tipo",this.form.tipo),t.append("periodicidad",this.form.periodicidad),t.append("id_sucursal",this.form.id_sucursal),t},axiosParamsAr:function(){var t=new URLSearchParams;return t.append("fecha",this.form_article.fecha),t.append("titulo",this.form_article.titulo),t.append("contenido",this.form_article.contenido),t.append("id_numero_revista",this.form_article.id_numero_revista),t.append("id_periodista",this.form_article.id_periodista),t},axiomsParamDel:function(){var t=new URLSearchParams;return t.append("id_revista",this.id_revista),t}}},D=O,E=(i("0241"),Object(l["a"])(D,P,q,!1,null,null,null)),j=E.exports;r["default"].use(d["a"]);var A=new d["a"]({routes:[{path:"/",name:"index",component:I},{path:"/revistas",name:"revistas",component:j}]}),N=i("5f5b"),B=i("b1e0"),T=i("bc3a"),H=i.n(T),J=i("a7fe"),L=i.n(J),z=i("5886");i("4413"),i("f9e3"),i("2dd8");r["default"].use(z["a"]),r["default"].use(L.a,H.a),r["default"].use(N["a"]),r["default"].use(B["a"]),r["default"].config.productionTip=!1,new r["default"]({router:A,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var r=i("9c0c"),o=i.n(r);o.a},"9c0c":function(t,e,i){},cdab:function(t,e,i){"use strict";var r=i("41a1"),o=i.n(r);o.a}});
//# sourceMappingURL=app.df87901c.js.map