"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[3123,4067],{34067:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var o=r(89526),n=r(92070),a=r(72215),i=r(71529),l=(r(57170),r(20785),r(783)),c=(0,i.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},header:{background:"#61112b",fontSize:20,padding:15,lineHeight:"45px",height:78},headerAction:{textAlign:"right","&:hover":{color:e.palette.text.main,transition:"color ease-in 0.15s"}},body:{padding:10},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"},list:{position:"inherit"}}}));const s=function(e){var t=e.coins,r=(e.loading,c()),i=(0,n.v9)((function(e){return e.data.data.player})),s=Boolean(t)&&Boolean(i.Crypto)?t.filter((function(e){return Boolean(i.Crypto[e.Short])})):Array();return o.createElement("div",{className:r.body},Boolean(s)&&Object.keys(s).length>0?o.createElement(a.Z,{className:r.list},Object.keys(i.Crypto).map((function(e){return o.createElement(l.default,{key:"coin-".concat(e),coin:t.filter((function(t){return t.Short==e}))[0],owned:{Short:e,Quantity:i.Crypto[e]}})}))):o.createElement("div",{className:r.emptyMsg},"You Don't Own Any Crypto"))}},3123:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var o=r(89526),n=r(92070),a=r(20088),i=r(38355),l=r(88590),c=r(14710),s=r(33933),u=r(16025),p=r(71529),d=r(68621),f=r(53059),m=r(57170),h=r(21447),b=r(87961),g=r(8684),y=r(34067),v=r(20785);function k(e,t,r,o,n,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(o,n)}function x(e){return function(){var t=this,r=arguments;return new Promise((function(o,n){var a=e.apply(t,r);function i(e){k(a,o,n,i,l,"next",e)}function l(e){k(a,o,n,i,l,"throw",e)}i(void 0)}))}}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,n,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(e){l=!0,n=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var E=(0,p.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},content:{height:"93.75%",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},tabPanel:{height:"89%"},phoneTab:{minWidth:"25%"},header:{background:"#b0e655",color:e.palette.secondary.dark,fontSize:20,padding:15,lineHeight:"50px",height:78},headerAction:{color:e.palette.secondary.dark}}})),C=(0,d.Z)((function(e){return{root:{borderBottom:"1px solid #b0e655"},indicator:{backgroundColor:"#b0e655"}}}))((function(e){return o.createElement(a.Z,e)})),S=(0,d.Z)((function(e){return{root:{width:"50%","&:hover":{color:"#b0e655",transition:"color ease-in 0.15s"},"&$selected":{color:"#b0e655",transition:"color ease-in 0.15s"},"&:focus":{color:"#b0e655",transition:"color ease-in 0.15s"}},selected:{}}}))((function(e){return o.createElement(i.Z,e)}));const A=function(){var e=E(),t=(0,n.I0)(),r=((0,b.vI)(),(0,n.v9)((function(e){return e.data.data.player})),(0,n.v9)((function(e){return e.crypto.tab}))),a=(0,n.v9)((function(e){return e.data.data.cryptoCoins})),i=w((0,o.useState)(!1),2),p=i[0],d=i[1],k=w((0,o.useState)(null),2),Z=k[0],A=k[1],N=(0,o.useMemo)((function(){return(0,f.throttle)(x(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=2;break}return e.abrupt("return");case 2:return d(!0),e.prev=3,e.next=6,h.Z.send("GetCryptoCoins");case 6:return e.next=8,e.sent.json();case 8:t=e.sent,A(t||Array()),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0),A(a);case 16:d(!1);case 17:case"end":return e.stop()}}),e,null,[[3,12]])}))),1e3)}),[]);return(0,o.useEffect)((function(){N()}),[]),o.createElement("div",{className:e.wrapper},o.createElement("div",{className:e.content},o.createElement("div",{className:e.wrapper},o.createElement(l.Z,{position:"static",className:e.header},o.createElement(c.ZP,{container:!0},o.createElement(c.ZP,{item:!0,xs:8},"CryptoX"),o.createElement(c.ZP,{item:!0,xs:4,style:{textAlign:"right"}},o.createElement(s.Z,{title:"Refresh Coin Listing"},o.createElement(u.Z,{onClick:N,className:e.headerAction},o.createElement(m.G,{className:"fa ".concat(p?"fa-spin":""),icon:["fas","arrows-rotate"]})))))),Boolean(Z)?o.createElement(o.Fragment,null,o.createElement("div",{className:e.tabPanel,role:"tabpanel",hidden:0!==r,id:"portfolio"},0===r&&o.createElement(y.default,{coins:Z,loading:p,onRefresh:N})),o.createElement("div",{className:e.tabPanel,role:"tabpanel",hidden:1!==r,id:"exchange"},1===r&&o.createElement(g.default,{coins:Z,loading:p,onRefresh:N}))):o.createElement(o.Fragment,null,o.createElement(v.aN,{static:!0,text:"Loading Coins"})))),o.createElement("div",{className:e.tabs},o.createElement(C,{value:r,onChange:function(e,r){t({type:"SET_CRYPTO_TAB",payload:{tab:r}})},scrollButtons:!1,centered:!0},o.createElement(S,{label:"Portfolio"}),o.createElement(S,{label:"Xchange"}))))}},88590:(e,t,r)=>{r.d(t,{Z:()=>g});var o=r(71972),n=r(17692),a=r(89526),i=r(23060),l=r(82082),c=r(47671),s=r(26966),u=r(9333),p=r(72757),d=r(24989);function f(e){return(0,d.Z)("MuiAppBar",e)}(0,r(36787).Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var m=r(67557);const h=["className","color","enableColorOnDark","position"],b=(0,c.ZP)(p.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`position${(0,u.Z)(r.position)}`],t[`color${(0,u.Z)(r.color)}`]]}})((({theme:e,ownerState:t})=>{const r="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,n.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},"default"===t.color&&{backgroundColor:r,color:e.palette.getContrastText(r)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===e.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,n.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"}))})),g=a.forwardRef((function(e,t){const r=(0,s.Z)({props:e,name:"MuiAppBar"}),{className:a,color:c="primary",enableColorOnDark:p=!1,position:d="fixed"}=r,g=(0,o.Z)(r,h),y=(0,n.Z)({},r,{color:c,position:d,enableColorOnDark:p}),v=(e=>{const{color:t,position:r,classes:o}=e,n={root:["root",`color${(0,u.Z)(t)}`,`position${(0,u.Z)(r)}`]};return(0,l.Z)(n,f,o)})(y);return(0,m.jsx)(b,(0,n.Z)({square:!0,component:"header",ownerState:y,elevation:4,className:(0,i.Z)(v.root,a,"fixed"===d&&"mui-fixed"),ref:t},g))}))}}]);