_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"7vrA":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),c=n.n(o),i=n("q1tI"),u=n.n(i),l=n("vUet"),s=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,i=e.as,s=void 0===i?"div":i,f=e.className,p=Object(a.a)(e,["bsPrefix","fluid","as","className"]),d=Object(l.a)(n,"container"),y="string"===typeof o?"-"+o:"-fluid";return u.a.createElement(s,Object(r.a)({ref:t},p,{className:c()(f,o?""+d+y:d)}))}));s.displayName="Container",s.defaultProps={fluid:!1},t.a=s},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),u=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,u=p.length;i<u;i++){var l=p[i];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var s=a.props[l],f=r[l]||new Set;f.has(s)?o=!1:(f.add(s),r[l]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function y(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}y.rewind=function(){};var m=y;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return u}));var r=n("nKUr"),a=n("8Kt/"),o=n.n(a),c=n("npV3"),i=n("7vrA");var u=!0;t.default=function(e){return Object(r.jsxs)(i.a,{children:[Object(r.jsx)(o.a,{children:Object(r.jsx)("title",{children:"Awesome HA Blueprints"})}),Object(r.jsx)(c.a,{children:e.content})]})}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),u=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),f=function(e){c(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=f},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},npV3:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/[\'\"]/,i={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},u={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},l=["style","script"],s=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,f=/mailto:/i,p=/\n{2,}$/,d=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,y=/^ *> ?/gm,m=/^ {2,}\n/,h=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,g=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,v=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,b=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,k=/^(?:\n *)*\n/,x=/\r\n?/g,w=/^\[\^([^\]]+)](:.*)\n/,O=/^\[\^([^\]]+)]/,M=/\f/g,S=/^\s*?\[(x|\s)\]/,_=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,A=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,I=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,j=/&([a-z]+);/g,H=/^<!--.*?-->/,C=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,E=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,P=/^\{.*\}$/,T=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,L=/^<([^ >]+@[^ >]+)>/,N=/^<([^ >]+:\/[^ >]+)>/,R=/ *\n+$/,$=/(?:^|\n)( *)$/,W=/-([a-z])?/gi,D=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,G=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,X=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,z=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,U=/^\[([^\]]*)\] ?\[([^\]]*)\]/,B=/(\[|\])/g,q=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Z=/\t/g,F=/^ *\| */,J=/(^ *\||\| *$)/g,K=/ *$/,Y=/^ *:-+: *$/,V=/^ *:-+ *$/,Q=/^ *-+: *$/,ee=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,te=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ne=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,re=/^\\([^0-9A-Za-z\s])/,ae=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,oe=/(^\n+|\n+$|\s+$)/g,ce=/^([ \t]*)/,ie=/\\([^0-9A-Z\s])/gi,ue=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),le=new RegExp("( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),se=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),fe="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",pe=new RegExp("^\\[("+fe+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),de=new RegExp("^!\\[("+fe+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),ye=[d,v,g,_,A,I,H,E,le,se,D,G];function me(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function he(e){return Q.test(e)?"right":Y.test(e)?"center":V.test(e)?"left":null}function ge(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var o=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&o.push([]):("text"!==e.type||null!=a[t+1]&&"tableSeparator"!==a[t+1].type||(e.content=e.content.replace(K,"")),o[o.length-1].push(e))})),o}function ve(e,t,n){n.inline=!0;var r=ge(e[1],t,n),a=e[2].replace(J,"").split("|").map(he),o=function(e,t,n){return e.trim().split("\n").map((function(e){return ge(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:o,header:r,type:"table"}}function be(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function ke(e){return function(t,n){return n.inline?e.exec(t):null}}function xe(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function we(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Oe(e){return function(t){return e.exec(t)}}function Me(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function Se(e){return e.replace(ie,"$1")}function _e(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Ae(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Ie(e,t,n){return n.inline=!1,e(t+"\n\n",n)}var je,He,Ce=function(e,t,n){return{content:_e(t,e[1],n)}};function Ee(){return{}}function Pe(){return null}function Te(){return[].slice.call(arguments).filter(Boolean).join(" ")}function Le(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function Ne(e,t){var n=Le(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:Le(t,e+".component",e):e}function Re(e,t){void 0===t&&(t={}),t.overrides=t.overrides||{},t.slugify=t.slugify||me,t.namedCodesToUnicode=t.namedCodesToUnicode?o({},u,t.namedCodesToUnicode):u;var n=t.createElement||a.a.createElement;function r(e,r){var a=Le(t.overrides,e+".props",{});return n.apply(void 0,[Ne(e,t.overrides),o({},r,a,{className:Te(null==r?void 0:r.className,a.className)||void 0})].concat([].slice.call(arguments,2)))}function J(e){var n=!1;t.forceInline?n=!0:t.forceBlock||(n=!1===q.test(e));var o=ge(he(n?e:e.replace(oe,"")+"\n\n",{inline:n}));if(null===t.wrapper)return o;var c,i=t.wrapper||(n?"span":"div");if(o.length>1||t.forceWrapper)c=o;else{if(1===o.length)return"string"==typeof(c=o[0])?r("span",{key:"outer"},c):c;c=null}return a.a.createElement(i,{key:"outer"},c)}function K(e){var t=e.match(s);return t?t.reduce((function(e,t,n){var r,o=t.indexOf("=");if(-1!==o){var u=(r=t.slice(0,o),-1!==r.indexOf("-")&&null===r.match(C)&&(r=r.replace(W,(function(e,t){return t.toUpperCase()}))),r).trim(),l=function(e){return e?(c.test(e.charAt(0))&&(e=e.substr(1)),c.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}(t.slice(o+1).trim()),s=i[u]||u,f=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":"));return e[n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}))]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Me(t):(t.match(P)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(u,l);"string"==typeof f&&(I.test(f)||E.test(f))&&(e[s]=a.a.cloneElement(J(f.trim()),{key:n}))}else"style"!==t&&(e[i[t]||t]=!0);return e}),{}):void 0}var Y=[],V={},Q={blockQuote:{match:we(d),order:je.HIGH,parse:function(e,t,n){return{content:t(e[0].replace(y,""),n)}},react:function(e,t,n){return r("blockquote",{key:n.key},t(e.content,n))}},breakLine:{match:Oe(m),order:je.HIGH,parse:Ee,react:function(e,t,n){return r("br",{key:n.key})}},breakThematic:{match:we(h),order:je.HIGH,parse:Ee,react:function(e,t,n){return r("hr",{key:n.key})}},codeBlock:{match:we(v),order:je.MAX,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,n){return r("pre",{key:n.key},r("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:we(g),order:je.MAX,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:xe(b),order:je.LOW,parse:function(e){return{content:e[2]}},react:function(e,t,n){return r("code",{key:n.key},e.content)}},footnote:{match:we(w),order:je.MAX,parse:function(e){return Y.push({footnote:e[2],identifier:e[1]}),{}},react:Pe},footnoteReference:{match:ke(O),order:je.HIGH,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,n){return r("a",{key:n.key,href:Me(e.target)},r("sup",{key:n.key},e.content))}},gfmTask:{match:ke(S),order:je.HIGH,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,n){return r("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})}},heading:{match:we(_),order:je.HIGH,parse:function(e,n,r){return{content:_e(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,n){return e.tag="h"+e.level,r(e.tag,{id:e.id,key:n.key},t(e.content,n))}},headingSetext:{match:we(A),order:je.MAX,parse:function(e,t,n){return{content:_e(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Oe(H),order:je.HIGH,parse:function(){return{}},react:Pe},image:{match:xe(de),order:je.HIGH,parse:function(e){return{alt:e[1],target:Se(e[2]),title:e[3]}},react:function(e,t,n){return r("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:Me(e.target)})}},link:{match:ke(pe),order:je.LOW,parse:function(e,t,n){return{content:Ae(t,e[1],n),target:Se(e[2]),title:e[3]}},react:function(e,t,n){return r("a",{key:n.key,href:Me(e.target),title:e.title},t(e.content,n))}},linkAngleBraceStyleDetector:{match:ke(N),order:je.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:ke(T),order:je.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:ke(L),order:je.MAX,parse:function(e){var t=e[1],n=e[1];return f.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=$.exec(n);return!r||!t._list&&t.inline?null:se.exec(e=r[1]+e)},order:je.HIGH,parse:function(e,t,n){var r=e[2],a=r.length>1,o=a?+r:void 0,c=e[0].replace(p,"\n").match(le),i=!1;return{items:c.map((function(e,r){var a=ue.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),u=e.replace(o,"").replace(ue,""),l=r===c.length-1,s=-1!==u.indexOf("\n\n")||l&&i;i=s;var f,p=n.inline,d=n._list;n._list=!0,s?(n.inline=!1,f=u.replace(R,"\n\n")):(n.inline=!0,f=u.replace(R,""));var y=t(f,n);return n.inline=p,n._list=d,y})),ordered:a,start:o}},react:function(e,t,n){return r(e.ordered?"ol":"ul",{key:n.key,start:e.start},e.items.map((function(e,a){return r("li",{key:a},t(e,n))})))}},newlineCoalescer:{match:we(k),order:je.LOW,parse:Ee,react:function(){return"\n"}},paragraph:{match:we(G),order:je.LOW,parse:Ce,react:function(e,t,n){return r("p",{key:n.key},t(e.content,n))}},ref:{match:ke(X),order:je.MAX,parse:function(e){return V[e[1]]={target:e[2],title:e[4]},{}},react:Pe},refImage:{match:xe(z),order:je.MAX,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,n){return r("img",{key:n.key,alt:e.alt,src:Me(V[e.ref].target),title:V[e.ref].title})}},refLink:{match:ke(U),order:je.MAX,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(B,"\\$1"),n),ref:e[2]}},react:function(e,t,n){return V[e.ref]?r("a",{key:n.key,href:Me(V[e.ref].target),title:V[e.ref].title},t(e.content,n)):r("span",{key:n.key},t(e.fallbackContent,n))}},table:{match:we(D),order:je.HIGH,parse:ve,react:function(e,t,n){return r("table",{key:n.key},r("thead",null,r("tr",null,e.header.map((function(a,o){return r("th",{key:o,style:be(e,o)},t(a,n))})))),r("tbody",null,e.cells.map((function(a,o){return r("tr",{key:o},a.map((function(a,o){return r("td",{key:o,style:be(e,o)},t(a,n))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?F.exec(e):null},order:je.HIGH,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Oe(ae),order:je.MIN,parse:function(e){return{content:e[0].replace(j,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:xe(ee),order:je.MED,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,n){return r("strong",{key:n.key},t(e.content,n))}},textEmphasized:{match:xe(te),order:je.LOW,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,n){return r("em",{key:n.key},t(e.content,n))}},textEscaped:{match:xe(re),order:je.HIGH,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:xe(ne),order:je.LOW,parse:Ce,react:function(e,t,n){return r("del",{key:n.key},t(e.content,n))}}};!0!==t.disableParsingRawHTML&&(Q.htmlBlock={match:Oe(I),order:je.HIGH,parse:function(e,t,n){var r,a=e[3].match(ce),o=new RegExp("^"+a[1],"gm"),c=e[3].replace(o,""),i=(r=c,ye.some((function(e){return e.test(r)}))?Ie:_e),u=e[1].toLowerCase(),s=-1!==l.indexOf(u);return{attrs:K(e[2]),content:s?e[3]:i(t,c,n),noInnerParse:s,tag:s?u:e[1]}},react:function(e,t,n){return r(e.tag,Object.assign({key:n.key},e.attrs),e.noInnerParse?e.content:t(e.content,n))}},Q.htmlSelfClosing={match:Oe(E),order:je.HIGH,parse:function(e){return{attrs:K(e[2]||""),tag:e[1]}},react:function(e,t,n){return r(e.tag,Object.assign({},e.attrs,{key:n.key}))}});var ie,fe,he=function(e){var t=Object.keys(e);function n(r,a){for(var o=[],c="";r;)for(var i=0;i<t.length;){var u=t[i],l=e[u],s=l.match(r,a,c);if(s){var f=s[0];r=r.substring(f.length);var p=l.parse(s,n,a);null==p.type&&(p.type=u),o.push(p),c=f;break}i++}return o}return t.sort((function(t,n){var r=e[t].order,a=e[n].order;return r!==a?r-a:t<n?-1:1})),function(e,t){return n(function(e){return e.replace(x,"\n").replace(M,"").replace(Z,"    ")}(e),t)}}(Q),ge=(fe=Q,ie=function(e,t,n){return fe[e.type].react(e,t,n)},function e(t,n){if(void 0===n&&(n={}),Array.isArray(t)){for(var r=n.key,a=[],o=!1,c=0;c<t.length;c++){n.key=c;var i=e(t[c],n),u="string"==typeof i;u&&o?a[a.length-1]+=i:a.push(i),o=u}return n.key=r,a}return ie(t,e,n)}),He=J(e.replace(/<!--[\s\S]*?(?:-->)/g,""));return Y.length&&He.props.children.push(r("footer",{key:"footer"},Y.map((function(e){return r("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,ge(he(e.footnote,{inline:!0})))})))),He}(He=je||(je={}))[He.MAX=0]="MAX",He[He.HIGH=1]="HIGH",He[He.MED=2]="MED",He[He.LOW=3]="LOW",He[He.MIN=4]="MIN",t.a=function(e){var t=e.children,n=e.options,r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}(e,["children","options"]);return a.a.cloneElement(Re(t,n),r)}},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("wx14");var r=n("q1tI"),a=n.n(r),o=a.a.createContext({});o.Consumer,o.Provider;function c(e,t){var n=Object(r.useContext)(o);return e||n[t]||t}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}},[["vlRD",0,1]]]);