(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2476],{24093:function(e,t,n){"use strict";n.d(t,{C:function(){return k}});var r=n(87462),a=n(4942),i=n(71002),o=n(97685),c=n(94184),s=n.n(c),l=n(48555),u=n(42550),d=n(67294),f=n(53124),m=n(25378),p=n(24308),h=d.createContext("default"),v=function(e){var t=e.children,n=e.size;return d.createElement(h.Consumer,null,function(e){return d.createElement(h.Provider,{value:n||e},t)})},g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},x=d.forwardRef(function(e,t){var n,c,v,x=d.useContext(h),y=d.useState(1),w=(0,o.Z)(y,2),j=w[0],b=w[1],k=d.useState(!1),S=(0,o.Z)(k,2),Z=S[0],E=S[1],O=d.useState(!0),C=(0,o.Z)(O,2),T=C[0],z=C[1],P=d.useRef(null),N=d.useRef(null),D=(0,u.sQ)(t,P),_=d.useContext(f.E_).getPrefixCls,I=function(){if(N.current&&P.current){var t=N.current.offsetWidth,n=P.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,a=void 0===r?4:r;2*a<n&&b(n-2*a<t?(n-2*a)/t:1)}}};d.useEffect(function(){E(!0)},[]),d.useEffect(function(){z(!0),b(1)},[e.src]),d.useEffect(function(){I()},[e.gap]);var R=e.prefixCls,A=e.shape,F=void 0===A?"circle":A,M=e.size,Q=void 0===M?"default":M,q=e.src,H=e.srcSet,W=e.icon,B=e.className,U=e.alt,X=e.draggable,$=e.children,K=e.crossOrigin,Y=g(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),G="default"===Q?x:Q,L=Object.keys("object"===(0,i.Z)(G)&&G||{}).some(function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)}),V=(0,m.Z)(L),J=d.useMemo(function(){if("object"!==(0,i.Z)(G))return{};var e=G[p.c4.find(function(e){return V[e]})];return e?{width:e,height:e,lineHeight:"".concat(e,"px"),fontSize:W?e/2:18}:{}},[V,G]),ee=_("avatar",R),et=s()((n={},(0,a.Z)(n,"".concat(ee,"-lg"),"large"===G),(0,a.Z)(n,"".concat(ee,"-sm"),"small"===G),n)),en=d.isValidElement(q),er=s()(ee,et,(c={},(0,a.Z)(c,"".concat(ee,"-").concat(F),!!F),(0,a.Z)(c,"".concat(ee,"-image"),en||q&&T),(0,a.Z)(c,"".concat(ee,"-icon"),!!W),c),B);if("string"==typeof q&&T)v=d.createElement("img",{src:q,draggable:X,srcSet:H,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&z(!1)},alt:U,crossOrigin:K});else if(en)v=q;else if(W)v=W;else if(Z||1!==j){var ea="scale(".concat(j,") translateX(-50%)");v=d.createElement(l.default,{onResize:I},d.createElement("span",{className:"".concat(ee,"-string"),ref:N,style:(0,r.Z)((0,r.Z)({},"number"==typeof G?{lineHeight:"".concat(G,"px")}:{}),{msTransform:ea,WebkitTransform:ea,transform:ea})},$))}else v=d.createElement("span",{className:"".concat(ee,"-string"),style:{opacity:0},ref:N},$);return delete Y.onError,delete Y.gap,d.createElement("span",(0,r.Z)({},Y,{style:(0,r.Z)((0,r.Z)((0,r.Z)({},"number"==typeof G?{width:G,height:G,lineHeight:"".concat(G,"px"),fontSize:W?G/2:18}:{}),J),Y.style),className:er,ref:D}),v)}),y=n(50344),w=n(55241),j=n(96159),b=x;b.Group=function(e){var t=d.useContext(f.E_),n=t.getPrefixCls,r=t.direction,i=e.prefixCls,o=e.className,c=e.maxCount,l=e.maxStyle,u=e.size,m=n("avatar-group",i),p=s()(m,(0,a.Z)({},"".concat(m,"-rtl"),"rtl"===r),void 0===o?"":o),h=e.children,g=e.maxPopoverPlacement,b=e.maxPopoverTrigger,k=(0,y.Z)(h).map(function(e,t){return(0,j.Tm)(e,{key:"avatar-key-".concat(t)})}),S=k.length;if(c&&c<S){var Z=k.slice(0,c),E=k.slice(c,S);return Z.push(d.createElement(w.Z,{key:"avatar-popover-key",content:E,trigger:void 0===b?"hover":b,placement:void 0===g?"top":g,overlayClassName:"".concat(m,"-popover")},d.createElement(x,{style:l},"+".concat(S-c)))),d.createElement(v,{size:u},d.createElement("div",{className:p,style:e.style},Z))}return d.createElement(v,{size:u},d.createElement("div",{className:p,style:e.style},k))};var k=b},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},44239:function(e,t,n){var r=n(62705),a=n(89607),i=n(2333),o=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?a(e):i(e)}},27561:function(e,t,n){var r=n(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},89607:function(e,t,n){var r=n(62705),a=Object.prototype,i=a.hasOwnProperty,o=a.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(a){}var s=o.call(e);return r&&(t?e[c]=n:delete e[c]),s}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),a="object"==typeof self&&self&&self.Object===Object&&self,i=r||a||Function("return this")();e.exports=i},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),a=n(7771),i=n(14841),o=Math.max,c=Math.min;e.exports=function(e,t,n){var s,l,u,d,f,m,p=0,h=!1,v=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function x(t){var n=s,r=l;return s=l=void 0,p=t,d=e.apply(r,n)}function y(e){var n=e-m,r=e-p;return void 0===m||n>=t||n<0||v&&r>=u}function w(){var e,n,r,i=a();if(y(i))return j(i);f=setTimeout(w,(e=i-m,n=i-p,r=t-e,v?c(r,u-n):r))}function j(e){return(f=void 0,g&&s)?x(e):(s=l=void 0,d)}function b(){var e,n=a(),r=y(n);if(s=arguments,l=this,m=n,r){if(void 0===f)return p=e=m,f=setTimeout(w,t),h?x(e):d;if(v)return clearTimeout(f),f=setTimeout(w,t),x(m)}return void 0===f&&(f=setTimeout(w,t)),d}return t=i(t)||0,r(n)&&(h=!!n.leading,u=(v="maxWait"in n)?o(i(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),b.cancel=function(){void 0!==f&&clearTimeout(f),p=0,s=m=l=f=void 0},b.flush=function(){return void 0===f?d:j(a())},b}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),a=n(37005);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),a=n(13218),i=n(33448),o=0/0,c=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return o;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=s.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):c.test(e)?o:+e}},89675:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/federation/followers",function(){return n(26795)}])},26795:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(85893),a=n(67294),i=n(24093),o=n(52206),c=n(71577),s=n(90575),l=n(58091),u=n(1413),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"},f=n(42135),m=function(e,t){return a.createElement(f.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:d}))};m.displayName="UserAddOutlined";var p=a.forwardRef(m),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 655.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 518 759.6 444.7 759.6 362c0-137-110.8-248-247.5-248S264.7 225 264.7 362c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 901.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 641.2 432.2 610 512.2 610c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 534c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 362c0-45.9 17.9-89.1 50.3-121.6S466.3 190 512.2 190s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 362c0 45.9-17.9 89.1-50.3 121.6C601.1 516.1 558 534 512.2 534zM880 772H640c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-delete",theme:"outlined"},v=function(e,t){return a.createElement(f.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:h}))};v.displayName="UserDeleteOutlined";var g=a.forwardRef(v),x=n(99519),y=n(64777),w=n(70241);function j(){let[e,t]=(0,a.useState)([]),[n,u]=(0,a.useState)([]),[d,f]=(0,a.useState)([]),[m,h]=(0,a.useState)(0),[v,j]=(0,a.useState)(0),b=(0,a.useContext)(x.aC),{serverConfig:k}=b||{},{federation:S}=k,{isPrivate:Z}=S,E=async()=>{try{let e="".concat(y.HP,"?offset=").concat(50*v,"&limit=").concat(50),r=await (0,y.rQ)(e,{auth:!0}),{results:a,total:i}=r;(0,w.Qr)(a)?f([]):(h(i),f(a));let o=await (0,y.rQ)(y.E8,{auth:!0});(0,w.Qr)(o)?t([]):t(o);let c=await (0,y.rQ)(y.Y9,{auth:!0});(0,w.Qr)(n)?u([]):u(c)}catch(s){console.log("==== error",s)}};(0,a.useEffect)(()=>{E()},[]);let O=[{title:"",dataIndex:"image",key:"image",width:90,render:e=>(0,r.jsx)(i.C,{size:40,src:e||"/img/logo.svg"})},{title:"Name",dataIndex:"name",key:"name",render:(e,t)=>(0,r.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.name||t.username})},{title:"URL",dataIndex:"link",key:"link",render:(e,t)=>(0,r.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.link})}];function C(e,t){return(0,r.jsx)(o.Z,{dataSource:e,columns:t,size:"small",rowKey:e=>e.link,pagination:{pageSize:50,hideOnSinglePage:!0,showSizeChanger:!1,total:m},onChange(e){let t=e.current;j(t)}})}async function T(e){try{await (0,y.rQ)(y.kb,{auth:!0,method:"POST",data:{actorIRI:e.link,approved:!0}}),E()}catch(t){console.error(t)}}async function z(e){try{await (0,y.rQ)(y.kb,{auth:!0,method:"POST",data:{actorIRI:e.link,approved:!1}}),E()}catch(t){console.error(t)}}let P=[...O];P.unshift({title:"Approve",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",icon:(0,r.jsx)(p,{}),onClick(){T(e)}}),width:50},{title:"Reject",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",danger:!0,icon:(0,r.jsx)(g,{}),onClick(){z(e)}}),width:50}),P.push({title:"Requested",dataIndex:"timestamp",key:"requested",width:200,render(e){let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,l.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"});let N=[...O];N.unshift({title:"Approve",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",icon:(0,r.jsx)(p,{}),size:"large",onClick(){T(e)}}),width:50}),N.push({title:"Requested",dataIndex:"timestamp",key:"requested",width:200,render(e){let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,l.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Rejected/Blocked",dataIndex:"timestamp",key:"disabled_at",width:200,render(e){let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,l.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"});let D=[...O];D.push({title:"Added",dataIndex:"timestamp",key:"timestamp",width:200,render(e){let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,l.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Remove",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",danger:!0,icon:(0,r.jsx)(g,{}),onClick(){z(e)}}),width:50});let _=(0,r.jsxs)("span",{children:["Followers ",d.length>0&&"(".concat(d.length,")")]}),I=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"The following accounts get notified when you go live or send a post."}),C(d,D)," "]}),R=(0,r.jsxs)("span",{children:["Requests ",e.length>0&&"(".concat(e.length,")")]}),A=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["The following people are requesting to follow your Owncast server on the"," ",(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fediverse",target:"_blank",rel:"noopener noreferrer",children:"Fediverse"})," ","and be alerted to when you go live. Each must be approved."]}),C(e,P)]}),F=(0,r.jsxs)("span",{children:["Blocked ",n.length>0&&"(".concat(n.length,")")]}),M=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"The following people were either rejected or blocked by you. You can approve them as a follower."}),(0,r.jsx)("p",{children:C(n,N)})]});return(0,r.jsx)("div",{className:"followers-section",children:(0,r.jsx)(s.Z,{defaultActiveKey:"1",items:[{label:_,key:"1",children:I},Z&&{label:R,key:"2",children:A},{label:F,key:"3",children:M}]})})}}},function(e){e.O(0,[8909,3903,4267,2206,8091,575,9774,2888,179],function(){return e(e.s=89675)}),_N_E=e.O()}]);