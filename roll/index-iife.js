var textera=function(e,t,n,r,o,a,c,l){"use strict";var i="default"in t?t.default:t;r=r&&r.hasOwnProperty("default")?r.default:r,l=l&&l.hasOwnProperty("default")?l.default:l;var u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function s(e,t){function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function f(e,t){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}var p={SET_COL_MODELS:"SET_COL_MODELS",RESIZE_COLUMN:"RESIZE_COLUMN",SET_COLUMN_TO_RESIZE:"SET_COLUMN_TO_RESIZE",SET_INITIAL_TABLE_OFFSET_WIDTH:"SET_INITIAL_TABLE_OFFSET_WIDTH",CHANGE_ORDER_DIRECTION:"CHANGE_ORDER_DIRECTION",SELECT_ROW:"SELECT_ROW",SET_DATA:"SET_DATA"},m=function(){return{colModels:[],data:[],width:0,sortColumn:null,selectedRow:null,startOffset:0,columnToResize:null,show:!1,reactableId:Date.now(),modalState:null,tableWidth:0,emptyModalState:null}},h=function(){return{colModels:[],data:[],width:0,sortColumn:null,selectedRow:null,startOffset:null,columnToResize:null,show:null,reactableId:Date.now(),modalState:null,emptyModalState:null,tableWidth:0}},y="REACTABLE",b="COL_MENU_MODAL",v="CRUD_MODAL",E="CONTEXT_MENU_MODAL";var _={CLOSE_MODAL:"CLOSE_MODAL",OPEN_MODAL:"OPEN_MODAL",GENERATE_COL_NAME_PROPERTIES_IN_ROW_DATA:"GENERATE_COL_NAME_PROPERTIES_IN_ROW_DATA",ON_ROW_DATA_CHANGE:"ON_ROW_DATA_CHANGE"},O=function(){return{show:!1,colModels:[],rowData:{},emptyRowData:{}}};var g=function(){function e(t){var n=this;if(this._minWidth=0,this.name="",this.label="",this.width=0,this.orderDirection="",this.showColMenuModal=!1,this.calculateMinWithOfColumnByLabel=function(e){var t=e.split(" ").reduce(function(e,t){return n.getWidthOfWord(e)>n.getWidthOfWord(t)?e:t});return n.getWidthOfWord(t)+40},this.getWidthOfWord=function(e){var t=document.getElementById("label-width-tester");return t.textContent=e,t.offsetWidth},!e.created){var r=document.createElement("span");r.id="label-width-tester",r.style.fontSize="16px",r.style.fontWeight="700",r.style.position="absolute",r.style.top="-999999px",document.body.appendChild(r),e.created=!0}null!=t&&(Object.assign(this,t),null==t.minWidth&&(this.minWidth=this.calculateMinWithOfColumnByLabel(this.label)))}return Object.defineProperty(e.prototype,"minWidth",{get:function(){return this._minWidth},set:function(e){e<0&&(e=this.calculateMinWithOfColumnByLabel(this.label)),this._minWidth=e},enumerable:!0,configurable:!0}),e.created=!1,e}(),w={OPEN_MODAL:"OPEN_MODAL",CLOSE_MODAL:"CLOSE_MODAL"},M=function(){return{}},C=function(){return{colModel:new g,show:!1}};var j={SET_CONTEXT_MENU_TRIGGER_REF:"SET_CONTEXT_MENU_TRIGGER_REF"},T=function(){return{contextMenuTrigger:null,reactableId:Date.now()}};var A=n.combineReducers({reactable:function(e,t){if(void 0===e&&(e=h()),t.namespace!=y)return e;switch(t.type){case p.SET_COL_MODELS:return t=t,Object.assign({},d({},e),{colModels:t.payload.colModels,tableWidth:t.payload.tableWidth});case p.SET_DATA:var n=t;return Object.assign({},d({},e),{data:n.payload.data});case p.RESIZE_COLUMN:var o=(t=t).payload.e.pageX,a=e.colModels.map(function(t){return t.name==e.columnToResize.name&&e.startOffset+o>=e.columnToResize.minWidth&&(t.width=e.startOffset+o),t}),c=0;return a.forEach(function(e){c+=e.width}),r(e,{colModels:{$set:a},tableWidth:{$set:c}});case p.SET_COLUMN_TO_RESIZE:var l=d({},(n=t).payload),i=l.column,u=l.e;return null!=i?Object.assign({},d({},e),{columnToResize:i,startOffset:u.target.parentNode.offsetWidth-u.pageX}):Object.assign({},d({},e),{columnToResize:null});case p.SET_INITIAL_TABLE_OFFSET_WIDTH:var s=document.getElementById(e.reactableId+"-reactable");return Object.assign({},d({},e),{width:s.offsetWidth});case p.SELECT_ROW:return n=t,Object.assign({},d({},e),{selectedRow:n.payload.row});case p.CHANGE_ORDER_DIRECTION:var f=t,m=e.colModels.map(function(e){return e.name==f.payload.column.name?"asc"===e.orderDirection?e.orderDirection="desc":"desc"===e.orderDirection?e.orderDirection="":e.orderDirection="asc":e.orderDirection="",e});return Object.assign({},d({},e),{colModels:m});default:return e}},crudModal:function(e,t){var n;if(void 0===e&&(e=O()),t.namespace!=v)return e;switch(t.type){case _.CLOSE_MODAL:return Object.assign({},d({},e),{show:!1,rowData:e.emptyRowData});case _.OPEN_MODAL:return Object.assign({},d({},e),{show:!0});case _.GENERATE_COL_NAME_PROPERTIES_IN_ROW_DATA:var o={};return(a=t).payload.colModels.map(function(e){o[e.name]=""}),Object.assign({},d({},e),{rowData:o,emptyRowData:o});case _.ON_ROW_DATA_CHANGE:var a;return r(e,{rowData:(n={},n[(a=t).payload.name]={$set:a.payload.value},n)});default:return e}},colMenuModal:function(e,t){if(void 0===e&&(e=C()),t.namespace!=b)return e;switch(t.type){case w.OPEN_MODAL:var n=t;return Object.assign({},d({},e),{show:!0,colModel:n.payload.colModel});case w.CLOSE_MODAL:return Object.assign({},d({},e),{show:!1,colModel:null});default:return e}},contextMenuModal:function(e,t){if(void 0===e&&(e=T()),t.namespace!=E)return e;switch(t.type){case j.SET_CONTEXT_MENU_TRIGGER_REF:var n=t;return Object.assign({},d({},e),{contextMenuTrigger:n.payload.ref});default:return e}}}),R=v;var D=function(e){function t(t){var n=e.call(this,t)||this;return n.render=function(){var e={borderRadius:0,margin:1};return n.props.tableWidth<620?i.createElement(a.Row,null,i.createElement(a.Col,{xs:2},i.createElement(a.Dropdown,{style:{textAlign:"left"}},i.createElement(a.Dropdown.Toggle,{size:"sm",style:d({},e),variant:"primary",id:"dropdown-basic"},i.createElement("i",{className:"fas fa-bars"})),i.createElement(a.Dropdown.Menu,null,i.createElement(a.Dropdown.Item,{href:"#/action-1",onClick:function(){return n.props.openCrudModal()}},i.createElement("i",{className:"fas fa-plus"}),i.createElement("span",{style:{paddingLeft:10}},"Add")),i.createElement(a.Dropdown.Item,{href:"#/action-2"},i.createElement("i",{className:"fas fa-edit"}),i.createElement("span",{style:{paddingLeft:10}},"Edit")),i.createElement(a.Dropdown.Item,{href:"#/action-2"},i.createElement("i",{className:"fas fa-trash-alt"}),i.createElement("span",{style:{paddingLeft:10}},"Delete")),i.createElement(a.Dropdown.Item,{href:"#/action-2"},i.createElement("i",{className:"fas fa-eye"})," ",i.createElement("span",{style:{paddingLeft:10}},"View")),i.createElement(a.Dropdown.Item,{href:"#/action-2"},i.createElement("i",{className:"fas fa-search"})," ",i.createElement("span",{style:{paddingLeft:10}},"Search"))))),i.createElement(a.Col,{xs:6},i.createElement(a.InputGroup,{className:"",style:{textAlign:"center",alignItems:"center",justifyContent:"center"}},i.createElement(a.Button,{size:"sm",style:d({},e)},i.createElement("i",{className:"fas fa-angle-left"})),i.createElement("div",{style:{display:"inline-block"}},i.createElement(a.Form.Control,{className:"border-radius-0",style:{height:31,margin:1,padding:2,width:50},defaultValue:"asd"})),i.createElement(a.Button,{size:"sm",style:d({},e)},i.createElement("i",{className:"fas fa-angle-right"})))),i.createElement(a.Col,{xs:4}," 102 - 103 / 123 ")):i.createElement(a.Row,null,i.createElement(a.Col,{xs:4,style:{textAlign:"left"}},i.createElement(a.Button,{size:"sm",style:d({},e),onClick:function(){return n.props.openCrudModal()}},i.createElement("i",{className:"fas fa-plus"})),i.createElement(a.Button,{size:"sm",style:d({},e)},i.createElement("i",{className:"far fa-edit"})),i.createElement(a.Button,{size:"sm",style:d({},e)},i.createElement("i",{className:"fas fa-trash-alt"})),i.createElement(a.Button,{size:"sm",style:d({},e)},i.createElement("i",{className:"fas fa-eye"})),i.createElement(a.Button,{size:"sm",style:d({},e)},i.createElement("i",{className:"fas fa-search"}))),i.createElement(a.Col,{xs:4},i.createElement(a.InputGroup,{className:"",style:{textAlign:"center",alignItems:"center",justifyContent:"center"}},i.createElement(a.Button,{size:"sm",style:d({},e)},i.createElement("i",{className:"fas fa-angle-double-left"})),i.createElement(a.Button,{size:"sm",style:d({},e)},i.createElement("i",{className:"fas fa-angle-left"})),i.createElement("div",{style:{display:"inline-block"}},i.createElement(a.Form.Control,{className:"border-radius-0",style:{height:31,margin:1,padding:2,width:50},defaultValue:"asd"})),i.createElement(a.Button,{size:"sm",style:d({},e)},i.createElement("i",{className:"fas fa-angle-right"})),i.createElement(a.Button,{size:"sm",style:d({},e)},i.createElement("i",{className:"fas fa-angle-double-right"})))),i.createElement(a.Col,{xs:4,style:{textAlign:"right"}},i.createElement(a.Button,null,"<"," "),i.createElement(a.Button,null," ",">"," ")))},n.state={},n}return s(t,e),t}(t.Component),N=o.connect(function(e,t){return{}},function(e,t){return{openCrudModal:function(){return e({type:_.OPEN_MODAL,payload:null,namespace:R})}}})(D);var I=function(){this.__data__=[],this.size=0};var S=function(e,t){return e===t||e!=e&&t!=t};var L=function(e,t){for(var n=e.length;n--;)if(S(e[n][0],t))return n;return-1},z=Array.prototype.splice;var x=function(e){var t=this.__data__,n=L(t,e);return!(n<0||(n==t.length-1?t.pop():z.call(t,n,1),--this.size,0))};var W=function(e){var t=this.__data__,n=L(t,e);return n<0?void 0:t[n][1]};var B=function(e){return L(this.__data__,e)>-1};var P=function(e,t){var n=this.__data__,r=L(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function k(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}k.prototype.clear=I,k.prototype.delete=x,k.prototype.get=W,k.prototype.has=B,k.prototype.set=P;var F=k;var U=function(){this.__data__=new F,this.size=0};var G=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var H=function(e){return this.__data__.get(e)};var $=function(e){return this.__data__.has(e)},V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function X(e,t){return e(t={exports:{}},t.exports),t.exports}var Z="object"==typeof V&&V&&V.Object===Object&&V,q="object"==typeof self&&self&&self.Object===Object&&self,Y=Z||q||Function("return this")(),J=Y.Symbol,K=Object.prototype,Q=K.hasOwnProperty,ee=K.toString,te=J?J.toStringTag:void 0;var ne=function(e){var t=Q.call(e,te),n=e[te];try{e[te]=void 0;var r=!0}catch(e){}var o=ee.call(e);return r&&(t?e[te]=n:delete e[te]),o},re=Object.prototype.toString;var oe=function(e){return re.call(e)},ae="[object Null]",ce="[object Undefined]",le=J?J.toStringTag:void 0;var ie=function(e){return null==e?void 0===e?ce:ae:le&&le in Object(e)?ne(e):oe(e)};var ue=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},se="[object AsyncFunction]",de="[object Function]",fe="[object GeneratorFunction]",pe="[object Proxy]";var me,he=function(e){if(!ue(e))return!1;var t=ie(e);return t==de||t==fe||t==se||t==pe},ye=Y["__core-js_shared__"],be=(me=/[^.]+$/.exec(ye&&ye.keys&&ye.keys.IE_PROTO||""))?"Symbol(src)_1."+me:"";var ve=function(e){return!!be&&be in e},Ee=Function.prototype.toString;var _e=function(e){if(null!=e){try{return Ee.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Oe=/^\[object .+?Constructor\]$/,ge=Function.prototype,we=Object.prototype,Me=ge.toString,Ce=we.hasOwnProperty,je=RegExp("^"+Me.call(Ce).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Te=function(e){return!(!ue(e)||ve(e))&&(he(e)?je:Oe).test(_e(e))};var Ae=function(e,t){return null==e?void 0:e[t]};var Re=function(e,t){var n=Ae(e,t);return Te(n)?n:void 0},De=Re(Y,"Map"),Ne=Re(Object,"create");var Ie=function(){this.__data__=Ne?Ne(null):{},this.size=0};var Se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Le="__lodash_hash_undefined__",ze=Object.prototype.hasOwnProperty;var xe=function(e){var t=this.__data__;if(Ne){var n=t[e];return n===Le?void 0:n}return ze.call(t,e)?t[e]:void 0},We=Object.prototype.hasOwnProperty;var Be=function(e){var t=this.__data__;return Ne?void 0!==t[e]:We.call(t,e)},Pe="__lodash_hash_undefined__";var ke=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ne&&void 0===t?Pe:t,this};function Fe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Fe.prototype.clear=Ie,Fe.prototype.delete=Se,Fe.prototype.get=xe,Fe.prototype.has=Be,Fe.prototype.set=ke;var Ue=Fe;var Ge=function(){this.size=0,this.__data__={hash:new Ue,map:new(De||F),string:new Ue}};var He=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var $e=function(e,t){var n=e.__data__;return He(t)?n["string"==typeof t?"string":"hash"]:n.map};var Ve=function(e){var t=$e(this,e).delete(e);return this.size-=t?1:0,t};var Xe=function(e){return $e(this,e).get(e)};var Ze=function(e){return $e(this,e).has(e)};var qe=function(e,t){var n=$e(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ye.prototype.clear=Ge,Ye.prototype.delete=Ve,Ye.prototype.get=Xe,Ye.prototype.has=Ze,Ye.prototype.set=qe;var Je=Ye,Ke=200;var Qe=function(e,t){var n=this.__data__;if(n instanceof F){var r=n.__data__;if(!De||r.length<Ke-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Je(r)}return n.set(e,t),this.size=n.size,this};function et(e){var t=this.__data__=new F(e);this.size=t.size}et.prototype.clear=U,et.prototype.delete=G,et.prototype.get=H,et.prototype.has=$,et.prototype.set=Qe;var tt=et;var nt=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e},rt=function(){try{var e=Re(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();var ot=function(e,t,n){"__proto__"==t&&rt?rt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n},at=Object.prototype.hasOwnProperty;var ct=function(e,t,n){var r=e[t];at.call(e,t)&&S(r,n)&&(void 0!==n||t in e)||ot(e,t,n)};var lt=function(e,t,n,r){var o=!n;n||(n={});for(var a=-1,c=t.length;++a<c;){var l=t[a],i=r?r(n[l],e[l],l,n,e):void 0;void 0===i&&(i=e[l]),o?ot(n,l,i):ct(n,l,i)}return n};var it=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var ut=function(e){return null!=e&&"object"==typeof e},st="[object Arguments]";var dt=function(e){return ut(e)&&ie(e)==st},ft=Object.prototype,pt=ft.hasOwnProperty,mt=ft.propertyIsEnumerable,ht=dt(function(){return arguments}())?dt:function(e){return ut(e)&&pt.call(e,"callee")&&!mt.call(e,"callee")},yt=Array.isArray;var bt=function(){return!1},vt=X(function(e,t){var n=t&&!t.nodeType&&t,r=n&&e&&!e.nodeType&&e,o=r&&r.exports===n?Y.Buffer:void 0,a=(o?o.isBuffer:void 0)||bt;e.exports=a}),Et=9007199254740991,_t=/^(?:0|[1-9]\d*)$/;var Ot=function(e,t){var n=typeof e;return!!(t=null==t?Et:t)&&("number"==n||"symbol"!=n&&_t.test(e))&&e>-1&&e%1==0&&e<t},gt=9007199254740991;var wt=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=gt},Mt={};Mt["[object Float32Array]"]=Mt["[object Float64Array]"]=Mt["[object Int8Array]"]=Mt["[object Int16Array]"]=Mt["[object Int32Array]"]=Mt["[object Uint8Array]"]=Mt["[object Uint8ClampedArray]"]=Mt["[object Uint16Array]"]=Mt["[object Uint32Array]"]=!0,Mt["[object Arguments]"]=Mt["[object Array]"]=Mt["[object ArrayBuffer]"]=Mt["[object Boolean]"]=Mt["[object DataView]"]=Mt["[object Date]"]=Mt["[object Error]"]=Mt["[object Function]"]=Mt["[object Map]"]=Mt["[object Number]"]=Mt["[object Object]"]=Mt["[object RegExp]"]=Mt["[object Set]"]=Mt["[object String]"]=Mt["[object WeakMap]"]=!1;var Ct=function(e){return ut(e)&&wt(e.length)&&!!Mt[ie(e)]};var jt=function(e){return function(t){return e(t)}},Tt=X(function(e,t){var n=t&&!t.nodeType&&t,r=n&&e&&!e.nodeType&&e,o=r&&r.exports===n&&Z.process,a=function(){try{var e=r&&r.require&&r.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}),At=Tt&&Tt.isTypedArray,Rt=At?jt(At):Ct,Dt=Object.prototype.hasOwnProperty;var Nt=function(e,t){var n=yt(e),r=!n&&ht(e),o=!n&&!r&&vt(e),a=!n&&!r&&!o&&Rt(e),c=n||r||o||a,l=c?it(e.length,String):[],i=l.length;for(var u in e)!t&&!Dt.call(e,u)||c&&("length"==u||o&&("offset"==u||"parent"==u)||a&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||Ot(u,i))||l.push(u);return l},It=Object.prototype;var St=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||It)};var Lt=function(e,t){return function(n){return e(t(n))}},zt=Lt(Object.keys,Object),xt=Object.prototype.hasOwnProperty;var Wt=function(e){if(!St(e))return zt(e);var t=[];for(var n in Object(e))xt.call(e,n)&&"constructor"!=n&&t.push(n);return t};var Bt=function(e){return null!=e&&wt(e.length)&&!he(e)};var Pt=function(e){return Bt(e)?Nt(e):Wt(e)};var kt=function(e,t){return e&&lt(t,Pt(t),e)};var Ft=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t},Ut=Object.prototype.hasOwnProperty;var Gt=function(e){if(!ue(e))return Ft(e);var t=St(e),n=[];for(var r in e)("constructor"!=r||!t&&Ut.call(e,r))&&n.push(r);return n};var Ht=function(e){return Bt(e)?Nt(e,!0):Gt(e)};var $t=function(e,t){return e&&lt(t,Ht(t),e)},Vt=X(function(e,t){var n=t&&!t.nodeType&&t,r=n&&e&&!e.nodeType&&e,o=r&&r.exports===n?Y.Buffer:void 0,a=o?o.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var n=e.length,r=a?a(n):new e.constructor(n);return e.copy(r),r}});var Xt=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t};var Zt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var c=e[n];t(c,n,e)&&(a[o++]=c)}return a};var qt=function(){return[]},Yt=Object.prototype.propertyIsEnumerable,Jt=Object.getOwnPropertySymbols,Kt=Jt?function(e){return null==e?[]:(e=Object(e),Zt(Jt(e),function(t){return Yt.call(e,t)}))}:qt;var Qt=function(e,t){return lt(e,Kt(e),t)};var en=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},tn=Lt(Object.getPrototypeOf,Object),nn=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)en(t,Kt(e)),e=tn(e);return t}:qt;var rn=function(e,t){return lt(e,nn(e),t)};var on=function(e,t,n){var r=t(e);return yt(e)?r:en(r,n(e))};var an=function(e){return on(e,Pt,Kt)};var cn=function(e){return on(e,Ht,nn)},ln=Re(Y,"DataView"),un=Re(Y,"Promise"),sn=Re(Y,"Set"),dn=Re(Y,"WeakMap"),fn=_e(ln),pn=_e(De),mn=_e(un),hn=_e(sn),yn=_e(dn),bn=ie;(ln&&"[object DataView]"!=bn(new ln(new ArrayBuffer(1)))||De&&"[object Map]"!=bn(new De)||un&&"[object Promise]"!=bn(un.resolve())||sn&&"[object Set]"!=bn(new sn)||dn&&"[object WeakMap]"!=bn(new dn))&&(bn=function(e){var t=ie(e),n="[object Object]"==t?e.constructor:void 0,r=n?_e(n):"";if(r)switch(r){case fn:return"[object DataView]";case pn:return"[object Map]";case mn:return"[object Promise]";case hn:return"[object Set]";case yn:return"[object WeakMap]"}return t});var vn=bn,En=Object.prototype.hasOwnProperty;var _n=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&En.call(e,"index")&&(n.index=e.index,n.input=e.input),n},On=Y.Uint8Array;var gn=function(e){var t=new e.constructor(e.byteLength);return new On(t).set(new On(e)),t};var wn=function(e,t){var n=t?gn(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)},Mn=/\w*$/;var Cn=function(e){var t=new e.constructor(e.source,Mn.exec(e));return t.lastIndex=e.lastIndex,t},jn=J?J.prototype:void 0,Tn=jn?jn.valueOf:void 0;var An=function(e){return Tn?Object(Tn.call(e)):{}};var Rn=function(e,t){var n=t?gn(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)},Dn="[object Boolean]",Nn="[object Date]",In="[object Map]",Sn="[object Number]",Ln="[object RegExp]",zn="[object Set]",xn="[object String]",Wn="[object Symbol]",Bn="[object ArrayBuffer]",Pn="[object DataView]",kn="[object Float32Array]",Fn="[object Float64Array]",Un="[object Int8Array]",Gn="[object Int16Array]",Hn="[object Int32Array]",$n="[object Uint8Array]",Vn="[object Uint8ClampedArray]",Xn="[object Uint16Array]",Zn="[object Uint32Array]";var qn=function(e,t,n){var r=e.constructor;switch(t){case Bn:return gn(e);case Dn:case Nn:return new r(+e);case Pn:return wn(e,n);case kn:case Fn:case Un:case Gn:case Hn:case $n:case Vn:case Xn:case Zn:return Rn(e,n);case In:return new r;case Sn:case xn:return new r(e);case Ln:return Cn(e);case zn:return new r;case Wn:return An(e)}},Yn=Object.create,Jn=function(){function e(){}return function(t){if(!ue(t))return{};if(Yn)return Yn(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();var Kn=function(e){return"function"!=typeof e.constructor||St(e)?{}:Jn(tn(e))},Qn="[object Map]";var er=function(e){return ut(e)&&vn(e)==Qn},tr=Tt&&Tt.isMap,nr=tr?jt(tr):er,rr="[object Set]";var or=function(e){return ut(e)&&vn(e)==rr},ar=Tt&&Tt.isSet,cr=ar?jt(ar):or,lr=1,ir=2,ur=4,sr="[object Arguments]",dr="[object Function]",fr="[object GeneratorFunction]",pr="[object Object]",mr={};mr[sr]=mr["[object Array]"]=mr["[object ArrayBuffer]"]=mr["[object DataView]"]=mr["[object Boolean]"]=mr["[object Date]"]=mr["[object Float32Array]"]=mr["[object Float64Array]"]=mr["[object Int8Array]"]=mr["[object Int16Array]"]=mr["[object Int32Array]"]=mr["[object Map]"]=mr["[object Number]"]=mr[pr]=mr["[object RegExp]"]=mr["[object Set]"]=mr["[object String]"]=mr["[object Symbol]"]=mr["[object Uint8Array]"]=mr["[object Uint8ClampedArray]"]=mr["[object Uint16Array]"]=mr["[object Uint32Array]"]=!0,mr["[object Error]"]=mr[dr]=mr["[object WeakMap]"]=!1;var hr=function e(t,n,r,o,a,c){var l,i=n&lr,u=n&ir,s=n&ur;if(r&&(l=a?r(t,o,a,c):r(t)),void 0!==l)return l;if(!ue(t))return t;var d=yt(t);if(d){if(l=_n(t),!i)return Xt(t,l)}else{var f=vn(t),p=f==dr||f==fr;if(vt(t))return Vt(t,i);if(f==pr||f==sr||p&&!a){if(l=u||p?{}:Kn(t),!i)return u?rn(t,$t(l,t)):Qt(t,kt(l,t))}else{if(!mr[f])return a?t:{};l=qn(t,f,i)}}c||(c=new tt);var m=c.get(t);if(m)return m;if(c.set(t,l),cr(t))return t.forEach(function(o){l.add(e(o,n,r,o,t,c))}),l;if(nr(t))return t.forEach(function(o,a){l.set(a,e(o,n,r,a,t,c))}),l;var h=s?u?cn:an:u?keysIn:Pt,y=d?void 0:h(t);return nt(y||t,function(o,a){y&&(o=t[a=o]),ct(l,a,e(o,n,r,a,t,c))}),l},yr=1,br=4;var vr=function(e){return hr(e,yr|br)},Er=y;var _r=function(e){return function(t){return n=null,r=void 0,a=function(){return f(this,function(n){return t(function(e){var t=vr(e),n=0;return t.forEach(function(e){n+=e.width,e.showColMenuModal=!1}),{type:p.SET_COL_MODELS,payload:{colModels:t,tableWidth:n},namespace:Er}}(e)),t(function(e){return{type:_.GENERATE_COL_NAME_PROPERTIES_IN_ROW_DATA,payload:{colModels:e},namespace:R}}(e)),[2]})},new((o=void 0)||(o=Promise))(function(e,t){function c(e){try{i(a.next(e))}catch(e){t(e)}}function l(e){try{i(a.throw(e))}catch(e){t(e)}}function i(t){t.done?e(t.value):new o(function(e){e(t.value)}).then(c,l)}i((a=a.apply(n,r||[])).next())});var n,r,o,a}};function Or(e){return{type:p.RESIZE_COLUMN,payload:{e:e},namespace:Er}}function gr(e,t){return void 0===e&&(e=null),void 0===t&&(t=null),{type:p.SET_COLUMN_TO_RESIZE,payload:{e:t,column:e},namespace:Er}}function wr(){return{type:p.SET_INITIAL_TABLE_OFFSET_WIDTH,namespace:Er,payload:null}}var Mr=function(){return{}},Cr={OPEN_MODAL:"OPEN_MODAL",CLOSE_MODAL:"CLOSE_MODAL"},jr=b;var Tr=function(e){function t(t){var n=e.call(this,t)||this;return n.componentDidMount=function(){},n.onThClick=function(e){n.props.changeOrderDirection(e)},n.state=Mr(),n}return s(t,e),t.prototype.render=function(){var e=this;return i.createElement("div",{className:"rcm-header-table-holder",id:"z",onScroll:function(){var e=document.getElementById("z");document.getElementById("q").scrollLeft=e.scrollLeft}},i.createElement(a.Table,{id:"x",className:"rcm-header-table",striped:!0,bordered:!0,hover:!0,size:"sm",style:{width:this.props.tableWidth}},i.createElement("thead",{className:"rcm-header-table-thead"},i.createElement("tr",null,this.props.colModels.map(function(t){return i.createElement("th",{className:"rcm-header-table-colum-header",key:t.name,style:{width:t.width},id:t.name},i.createElement("div",{className:"column-header-content-holder"},i.createElement("div",{className:"column-header-label",onClick:function(){return e.onThClick(t)}},""!=t.orderDirection&&t.orderDirection," ",t.label),i.createElement("div",{className:"column-header-menu-holder"},i.createElement(a.Button,{onClick:function(){return e.props.openColMenuModel(t)},size:"sm",className:"border-radius-0",style:{marginRight:5,padding:"1px 4px"}},i.createElement("i",{style:{padding:0},className:"fas fa-sliders-h"})))),i.createElement("div",{className:"column-header-resize-bar",onDragStart:function(e){return e.preventDefault()},onMouseDown:function(n){return e.setColumnToResize(n,t)}}," "))})))))},t.prototype.setColumnToResize=function(e,t){this.props.setColumnToResize(t,e),document.body.style.webkitUserSelect="none",document.body.style.msUserSelect="none",document.body.style.userSelect="none"},t}(t.Component),Ar=o.connect(function(e,t){return{colModels:e.reactable.colModels,data:e.reactable.data,tableWidth:e.reactable.tableWidth,columnToResize:e.reactable.columnToResize,reactableId:e.reactable.reactableId,width:e.reactable.width}},function(e,t){return{setColModels:function(t){return e(_r(t))},resizeColumn:function(t){return e(Or(t))},setColumnToResize:function(t,n){return void 0===t&&(t=null),void 0===n&&(n=null),e(gr(t,n))},resetTableoffsetWidth:function(){return e(wr())},changeOrderDirection:function(t){return e(function(e){return{type:p.CHANGE_ORDER_DIRECTION,namespace:Er,payload:{column:e}}}(t))},openColMenuModel:function(t){return e(function(e){return{type:Cr.OPEN_MODAL,payload:{colModel:e},namespace:jr}}(t))}}})(Tr),Rr=function(){return{}},Dr=function(e){function t(t){var n=e.call(this,t)||this;return n.onClickOnRow=function(e){n.props.selectRow(e)},n.onRightClickOnRow=function(e,t){e.preventDefault(),n.openContextMenu(e),n.onClickOnRow(t)},n.openContextMenu=function(e){null!=n.props.contextTrigger&&n.props.contextTrigger.handleContextClick(e)},n.testScroll=function(e){document.getElementById("z").scrollLeft=e.target.scrollLeft;var t=document.getElementsByClassName("react-contextmenu--visible");if(t.length>0)for(var n=0;n<t.length;n++)t.item(n).style.opacity="0",t.item(n).style.pointerEvents="none",t.item(n).classList.remove("react-contextmenu--visible")},n.state=Rr(),n}return s(t,e),t.prototype.render=function(){var e=this;return i.createElement("div",{id:"q",className:"reactable-data-table-holder",style:{overflowX:"auto",overflowY:"auto"},onScroll:function(t){return e.testScroll(t)}},i.createElement(a.Table,{className:"reactable-table reactable-data-table",striped:!0,bordered:!0,hover:!0,size:"sm",style:{width:this.props.tableWidth,borderBottom:0,height:"100%"}},i.createElement("tbody",{className:"reactable-data-body"},this.props.data.map(function(t,n){return i.createElement("tr",{key:n,className:t==e.props.selectedRow?"selectedRow":"",onClick:function(){return e.onClickOnRow(t)},onContextMenu:function(n){return e.onRightClickOnRow(n,t)}},e.props.colModels.map(function(e,n){return i.createElement("td",{key:n,style:{width:e.width,wordWrap:"break-word",whiteSpace:"normal",wordBreak:"break-all"}}," ",t[e.name]," ")}))}))))},t}(t.Component),Nr=o.connect(function(e,t){return{colModels:e.reactable.colModels,data:e.reactable.data,tableWidth:e.reactable.tableWidth,columnToResize:e.reactable.columnToResize,reactableId:e.reactable.reactableId,width:e.reactable.width,selectedRow:e.reactable.selectedRow,contextTrigger:e.contextMenuModal.contextMenuTrigger}},function(e,t){return{selectRow:function(t){return e(function(e){return{type:p.SELECT_ROW,namespace:Er,payload:{row:e}}}(t))}}})(Dr),Ir=function(){return{}},Sr=function(e){function t(t){var n=e.call(this,t)||this;return n.componentDidMount=function(){},n.handleClose=function(){n.props.closeCrudModal()},n.onRowDataChange=function(e,t){n.props.onRowDataChange(e,t)},n.state=Ir(),n}return s(t,e),t.prototype.render=function(){var e=this;return i.createElement(a.Modal,{style:{borderRadius:0},show:this.props.show,onHide:this.handleClose,centered:!0},i.createElement(a.Modal.Header,{style:{borderRadius:0},closeButton:!0},i.createElement(a.Modal.Title,null,"Modal heading ")),i.createElement(a.Modal.Body,null,this.props.colModels.map(function(t){return i.createElement("div",{key:t.name},i.createElement(a.Form.Group,{controlId:"formBasicEmail",style:{marginBottom:5}},i.createElement(a.Form.Label,{style:{marginBottom:0}},t.name),i.createElement(a.Form.Control,{onChange:function(n){return e.onRowDataChange(t.name,n.target.value)},type:"text",placeholder:t.name,value:e.props.rowData[t.name]})))})),i.createElement(a.Modal.Footer,null,i.createElement(a.Button,{variant:"secondary",onClick:this.handleClose},"Close"),i.createElement(a.Button,{variant:"primary",onClick:this.handleClose},"Save Changes")))},t}(t.Component),Lr=o.connect(function(e,t){return{show:e.crudModal.show,colModels:e.reactable.colModels,rowData:e.crudModal.rowData}},function(e,t){return{closeCrudModal:function(){return e({type:_.CLOSE_MODAL,payload:null,namespace:R})},onRowDataChange:function(t,n){return e(function(e,t){return{type:_.ON_ROW_DATA_CHANGE,payload:{name:e,value:t},namespace:R}}(t,n))}}})(Sr),zr=function(e){function t(t){var n=e.call(this,t)||this;return n.componentDidMount=function(){},n.state=M(),n}return s(t,e),t.prototype.render=function(){return i.createElement(a.Modal,{size:"sm",centered:!0,show:this.props.show,onHide:this.props.closeColMenuModel},i.createElement(a.Modal.Header,{closeButton:!0},i.createElement(a.Modal.Title,{id:"contained-modal-title-vcenter"},this.props.colModel&&this.props.colModel.name)),i.createElement(a.Modal.Body,null,i.createElement("div",null,"width: ",this.props.colModel&&this.props.colModel.width),i.createElement("div",null,"freeze"),i.createElement("div",null,"group"),i.createElement("div",null,"advanced column filter")))},t}(t.Component),xr=o.connect(function(e,t){return{colModel:e.colMenuModal.colModel,show:e.colMenuModal.show}},function(e,t){return{closeColMenuModel:function(){return e({type:Cr.CLOSE_MODAL,payload:null,namespace:jr})}}})(zr),Wr=E;var Br=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){var e=this;return i.createElement(i.Fragment,null,i.createElement(c.ContextMenuTrigger,{id:"context_menu_"+this.props.reactableId,ref:function(t){return e.props.setContextMenuTriggerRef(t)}},i.createElement("span",null)),i.createElement(c.ContextMenu,{id:"context_menu_"+this.props.reactableId},i.createElement(c.MenuItem,null,i.createElement("i",{className:"fas fa-edit"}),i.createElement("span",{style:{paddingLeft:10}},"Edit")),i.createElement(c.MenuItem,null,i.createElement("i",{className:"fas fa-trash-alt"}),i.createElement("span",{style:{paddingLeft:10}},"Delete")),i.createElement(c.MenuItem,null,i.createElement("i",{className:"fas fa-eye"})," ",i.createElement("span",{style:{paddingLeft:10}},"View"))))},t}(t.Component),Pr=o.connect(function(e){return{contextMenuTrigger:e.contextMenuModal.contextMenuTrigger,reactableId:e.reactable.reactableId}},function(e){return{setContextMenuTriggerRef:function(t){return e(function(e){return console.log(e),{type:j.SET_CONTEXT_MENU_TRIGGER_REF,payload:{ref:e},namespace:Wr}}(t))}}})(Br),kr=function(e){function t(t){var n=e.call(this,t)||this;return n.componentDidMount=function(){n.props.setColModels(n.props.colModelsProp),n.props.setData(n.props.dataProp),n.props.resetTableoffsetWidth(),document.getElementById(n.props.reactableId+"-reactable").addEventListener("mouseup",function(){n.disableResizingColumnIfInResizeMode()}),document.getElementById(n.props.reactableId+"-reactable").addEventListener("mousemove",function(e){n.resizeColumnIfInResizeMode(e)})},n.componentWillMount=function(){window.addEventListener("resize",n.handleWindowSizeChange)},n.componentWillUnmount=function(){window.removeEventListener("resize",n.handleWindowSizeChange)},n.disableResizingColumnIfInResizeMode=function(){null!=n.props.columnToResize&&(n.props.setColumnToResize(),n.enableTextSelectionOnPage())},n.resizeColumnIfInResizeMode=function(e){null!=n.props.columnToResize&&n.props.resizeColumn(e)},n.enableTextSelectionOnPage=function(){document.body.style.webkitUserSelect="",document.body.style.msUserSelect="",document.body.style.userSelect=""},n.handleWindowSizeChange=function(){n.props.resetTableoffsetWidth()},n.state=m(),n}return s(t,e),t.prototype.render=function(){return i.createElement(i.Fragment,null,i.createElement(a.Card,{id:this.props.reactableId+"-reactable",style:{minWidth:360,borderRadius:0}},i.createElement(a.Card.Header,{style:{padding:5},as:"h5"},"Featured"),i.createElement(a.Card.Body,{id:"reactable-card-body-"+this.props.reactableId,className:"reactable-table-holder"},i.createElement(Ar,null),i.createElement(Nr,null)),i.createElement(a.Card.Footer,null,i.createElement(N,{tableWidth:this.props.width}))),i.createElement(Lr,null),i.createElement(xr,null),i.createElement(Pr,null))},t}(t.Component),Fr=o.connect(function(e){return{columnToResize:e.reactable.columnToResize,reactableId:e.reactable.reactableId,width:e.reactable.width}},function(e){return{setColModels:function(t){return e(_r(t))},setData:function(t){return e(function(e){var t=vr(e);return{type:p.SET_DATA,payload:{data:t},namespace:Er}}(t))},resizeColumn:function(t){return e(Or(t))},setColumnToResize:function(t,n){return void 0===t&&(t=null),void 0===n&&(n=null),e(gr(t,n))},resetTableoffsetWidth:function(){return e(wr())}}})(kr),Ur=function(e){function t(t){var r=e.call(this,t)||this;return r.store=n.createStore(A,n.applyMiddleware(l)),r}return s(t,e),t.prototype.render=function(){return i.createElement(o.Provider,{store:this.store},i.createElement(Fr,{dataProp:this.props.data,colModelsProp:this.props.colModels}))},t}(t.Component);return e.ColModel=g,e.default=Ur,e}({},React,redux,update,reactRedux,reactBootstrap,reactContextmenu,thunk);
