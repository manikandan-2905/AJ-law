var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function ee(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function O(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function te(e,t){return typeof e==`object`&&e&&e.key!=null?O(``+e.key):t.toString(36)}function ne(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function re(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,re(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+te(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(k,`$&/`)+`/`),re(o,r,i,``,function(e){return e})):o!=null&&(ee(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+te(a,u),c+=re(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+te(a,u++),c+=re(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return re(ne(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ie(e,t,n){if(e==null)return e;var r=[],i=0;return re(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function A(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var j=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},M={map:ie,forEach:function(e,t,n){ie(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ie(e,function(){t++}),t},toArray:function(e){return ie(e,function(e){return e})||[]},only:function(e){if(!ee(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=M,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ee,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:A}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,j)}catch(e){j(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,ee());else{var t=n(l);t!==null&&te(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&te(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ee():S=!1}}}var ee;if(typeof y==`function`)ee=function(){y(D)};else if(typeof MessageChannel<`u`){var O=new MessageChannel,k=O.port2;O.port1.onmessage=D,ee=function(){k.postMessage(null)}}else ee=function(){_(D,0)};function te(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,te(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ee()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),ee=Symbol.for(`react.lazy`),O=Symbol.for(`react.activity`),k=Symbol.for(`react.memo_cache_sentinel`),te=Symbol.iterator;function ne(e){return typeof e!=`object`||!e?null:(e=te&&e[te]||e[`@@iterator`],typeof e==`function`?e:null)}var re=Symbol.for(`react.client.reference`);function ie(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case O:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?ie(e.type)||`Memo`:t;case ee:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var A=Array.isArray,j=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},oe=[],se=-1;function ce(e){return{current:e}}function le(e){0>se||(e.current=oe[se],oe[se]=null,se--)}function ue(e,t){se++,oe[se]=e.current,e.current=t}var de=ce(null),fe=ce(null),pe=ce(null),me=ce(null);function he(e,t){switch(ue(pe,t),ue(fe,e),ue(de,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wd(t),e=Gd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}le(de),ue(de,e)}function ge(){le(de),le(fe),le(pe)}function _e(e){e.memoizedState!==null&&ue(me,e);var t=de.current,n=Gd(t,e.type);t!==n&&(ue(fe,e),ue(de,n))}function ve(e){fe.current===e&&(le(de),le(fe)),me.current===e&&(le(me),ep._currentValue=ae)}var ye,be;function xe(e){if(ye===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ye=t&&t[1]||``,be=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ye+e+be}var Se=!1;function Ce(e,t){if(!e||Se)return``;Se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Se=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?xe(n):``}function we(e,t){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe(`Lazy`);case 13:return e.child!==t&&t!==null?xe(`Suspense Fallback`):xe(`Suspense`);case 19:return xe(`SuspenseList`);case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return xe(`Activity`);default:return``}}function Te(e){try{var t=``,n=null;do t+=we(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ee=Object.prototype.hasOwnProperty,De=t.unstable_scheduleCallback,Oe=t.unstable_cancelCallback,ke=t.unstable_shouldYield,Ae=t.unstable_requestPaint,je=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function et(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function tt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&it(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function it(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function at(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ot(e,t){var n=t&-t;return n=n&42?1:st(n),(n&(e.suspendedLanes|t))===0?n:0}function st(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ct(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function lt(){var e=M.p;return e===0?(e=window.event,e===void 0?32:gp(e.type)):e}function ut(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var dt=Math.random().toString(36).slice(2),ft=`__reactFiber$`+dt,pt=`__reactProps$`+dt,mt=`__reactContainer$`+dt,ht=`__reactEvents$`+dt,gt=`__reactListeners$`+dt,_t=`__reactHandles$`+dt,vt=`__reactResources$`+dt,yt=`__reactMarker$`+dt;function bt(e){delete e[ft],delete e[pt],delete e[ht],delete e[gt],delete e[_t]}function xt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mf(e);e!==null;){if(n=e[ft])return n;e=mf(e)}return t}e=n,n=e.parentNode}return null}function St(e){if(e=e[ft]||e[mt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ct(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function wt(e){var t=e[vt];return t||=e[vt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Tt(e){e[yt]=!0}var Et=new Set,Dt={};function Ot(e,t){kt(e,t),kt(e+`Capture`,t)}function kt(e,t){for(Dt[e]=t,e=0;e<t.length;e++)Et.add(t[e])}var At=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),jt={},Mt={};function Nt(e){return Ee.call(Mt,e)?!0:Ee.call(jt,e)?!1:At.test(e)?Mt[e]=!0:(jt[e]=!0,!1)}function Pt(e,t,n){if(Nt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ft(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function It(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Lt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Rt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function zt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bt(e){if(!e._valueTracker){var t=Rt(e)?`checked`:`value`;e._valueTracker=zt(e,t,``+e[t])}}function Vt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Rt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ht(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function Wt(e){return e.replace(Ut,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Gt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Lt(t)):e.value!==``+Lt(t)&&(e.value=``+Lt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):qt(e,o,Lt(n)):qt(e,o,Lt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Lt(s):e.removeAttribute(`name`)}function Kt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Bt(e);return}n=n==null?``:``+Lt(n),t=t==null?n:``+Lt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Bt(e)}function qt(e,t,n){t===`number`&&Ht(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yt(e,t,n){if(t!=null&&(t=``+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Lt(n)}function Xt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(A(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Lt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Bt(e)}function Zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function $t(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function en(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&$t(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&$t(e,o,t[o])}function tn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var nn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),rn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function an(e){return rn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function on(){}var sn=null;function cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ln=null,un=null;function dn(e){var t=St(e);if(t&&(e=t.stateNode)){var n=e[pt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Wt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[pt]||null;if(!a)throw Error(i(90));Gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Vt(r)}break a;case`textarea`:Yt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}}}var fn=!1;function pn(e,t,n){if(fn)return e(t,n);fn=!0;try{return e(t)}finally{if(fn=!1,(ln!==null||un!==null)&&(xu(),ln&&(t=ln,e=un,un=ln=null,dn(t),e)))for(t=0;t<e.length;t++)dn(e[t])}}function mn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[pt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var hn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),gn=!1;if(hn)try{var _n={};Object.defineProperty(_n,`passive`,{get:function(){gn=!0}}),window.addEventListener(`test`,_n,_n),window.removeEventListener(`test`,_n,_n)}catch{gn=!1}var vn=null,yn=null,bn=null;function xn(){if(bn)return bn;var e,t=yn,n=t.length,r,i=`value`in vn?vn.value:vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return bn=i.slice(e,1<r?1-r:void 0)}function Sn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cn(){return!0}function wn(){return!1}function Tn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Cn:wn,this.isPropagationStopped=wn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=Tn(En),On=f({},En,{view:0,detail:0}),kn=Tn(On),An,jn,Mn,Nn=f({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=Tn(Nn),Fn=Tn(f({},Nn,{dataTransfer:0})),In=Tn(f({},On,{relatedTarget:0})),Ln=Tn(f({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=Tn(f({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=Tn(f({},En,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function Wn(){return Un}var Gn=Tn(f({},On,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Sn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?Sn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Sn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=Tn(f({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=Tn(f({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),Jn=Tn(f({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Yn=Tn(f({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Xn=Tn(f({},En,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=hn&&`CompositionEvent`in window,$n=null;hn&&`documentMode`in document&&($n=document.documentMode);var er=hn&&`TextEvent`in window&&!$n,tr=hn&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function N(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function P(e,t){if(ar)return e===`compositionend`||!Qn&&N(e,t)?(e=xn(),bn=yn=vn=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var sr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!sr[e.type]:t===`textarea`}function lr(e,t,n,r){ln?un?un.push(r):un=[r]:ln=r,t=Od(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ur=null,dr=null;function fr(e){xd(e,0)}function pr(e){if(Vt(Ct(e)))return e}function mr(e,t){if(e===`change`)return t}var hr=!1;if(hn){var gr;if(hn){var _r=`oninput`in document;if(!_r){var vr=document.createElement(`div`);vr.setAttribute(`oninput`,`return;`),_r=typeof vr.oninput==`function`}gr=_r}else gr=!1;hr=gr&&(!document.documentMode||9<document.documentMode)}function yr(){ur&&(ur.detachEvent(`onpropertychange`,br),dr=ur=null)}function br(e){if(e.propertyName===`value`&&pr(dr)){var t=[];lr(t,dr,e,cn(e)),pn(fr,t)}}function xr(e,t,n){e===`focusin`?(yr(),ur=t,dr=n,ur.attachEvent(`onpropertychange`,br)):e===`focusout`&&yr()}function Sr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return pr(dr)}function Cr(e,t){if(e===`click`)return pr(t)}function wr(e,t){if(e===`input`||e===`change`)return pr(t)}function Tr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Er=typeof Object.is==`function`?Object.is:Tr;function Dr(e,t){if(Er(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ee.call(t,i)||!Er(e[i],t[i]))return!1}return!0}function Or(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kr(e,t){var n=Or(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Or(n)}}function Ar(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ar(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ht(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ht(e.document)}return t}function Mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Nr=hn&&`documentMode`in document&&11>=document.documentMode,Pr=null,Fr=null,Ir=null,Lr=!1;function Rr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lr||Pr==null||Pr!==Ht(r)||(r=Pr,`selectionStart`in r&&Mr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Dr(Ir,r)||(Ir=r,r=Od(Fr,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Br={animationend:zr(`Animation`,`AnimationEnd`),animationiteration:zr(`Animation`,`AnimationIteration`),animationstart:zr(`Animation`,`AnimationStart`),transitionrun:zr(`Transition`,`TransitionRun`),transitionstart:zr(`Transition`,`TransitionStart`),transitioncancel:zr(`Transition`,`TransitionCancel`),transitionend:zr(`Transition`,`TransitionEnd`)},Vr={},Hr={};hn&&(Hr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),`TransitionEvent`in window||delete Br.transitionend.transition);function Ur(e){if(Vr[e])return Vr[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hr)return Vr[e]=t[n];return e}var Wr=Ur(`animationend`),Gr=Ur(`animationiteration`),Kr=Ur(`animationstart`),qr=Ur(`transitionrun`),Jr=Ur(`transitionstart`),Yr=Ur(`transitioncancel`),Xr=Ur(`transitionend`),Zr=new Map,Qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Qr.push(`scrollEnd`);function $r(e,t){Zr.set(e,t),Ot(t,[e])}var ei=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ti=[],ni=0,ri=0;function F(){for(var e=ni,t=ri=ni=0;t<e;){var n=ti[t];ti[t++]=null;var r=ti[t];ti[t++]=null;var i=ti[t];ti[t++]=null;var a=ti[t];if(ti[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&si(n,i,a)}}function ii(e,t,n,r){ti[ni++]=e,ti[ni++]=t,ti[ni++]=n,ti[ni++]=r,ri|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ai(e,t,n,r){return ii(e,t,n,r),ci(e)}function oi(e,t){return ii(e,null,null,t),ci(e)}function si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ci(e){if(50<fu)throw fu=0,pu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var li={};function ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,r){return new ui(e,t,n,r)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pi(e,t){var n=e.alternate;return n===null?(n=di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)fi(e)&&(s=1);else if(typeof e==`string`)s=Kf(e,n,de.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case O:return e=di(31,n,t,a),e.elementType=O,e.lanes=o,e;case y:return gi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=di(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=di(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=di(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case ee:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=di(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function gi(e,t,n,r){return e=di(7,e,r,t),e.lanes=n,e}function _i(e,t,n){return e=di(6,e,null,t),e.lanes=n,e}function vi(e){var t=di(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return t=di(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bi=new WeakMap;function xi(e,t){if(typeof e==`object`&&e){var n=bi.get(e);return n===void 0?(t={value:e,source:t,stack:Te(t)},bi.set(e,t),t):n}return{value:e,source:t,stack:Te(t)}}var Si=[],Ci=0,wi=null,Ti=0,Ei=[],Di=0,Oi=null,ki=1,I=``;function L(e,t){Si[Ci++]=Ti,Si[Ci++]=wi,wi=e,Ti=t}function Ai(e,t,n){Ei[Di++]=ki,Ei[Di++]=I,Ei[Di++]=Oi,Oi=e;var r=ki;e=I;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ki=1<<32-Ue(t)+i|n<<i|r,I=a+e}else ki=1<<a|n<<i|r,I=e}function ji(e){e.return!==null&&(L(e,1),Ai(e,1,0))}function Mi(e){for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null;for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,I=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null}function Ni(e,t){Ei[Di++]=ki,Ei[Di++]=I,Ei[Di++]=Oi,ki=t.id,I=t.overflow,Oi=e}var Pi=null,Fi=null,R=!1,Ii=null,Li=!1,Ri=Error(i(519));function zi(e){throw Wi(xi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ri}function Bi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ft]=e,t[pt]=r,n){case`dialog`:X(`cancel`,t),X(`close`,t);break;case`iframe`:case`object`:case`embed`:X(`load`,t);break;case`video`:case`audio`:for(n=0;n<yd.length;n++)X(yd[n],t);break;case`source`:X(`error`,t);break;case`img`:case`image`:case`link`:X(`error`,t),X(`load`,t);break;case`details`:X(`toggle`,t);break;case`input`:X(`invalid`,t),Kt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:X(`invalid`,t);break;case`textarea`:X(`invalid`,t),Xt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Pd(t.textContent,n)?(r.popover!=null&&(X(`beforetoggle`,t),X(`toggle`,t)),r.onScroll!=null&&X(`scroll`,t),r.onScrollEnd!=null&&X(`scrollend`,t),r.onClick!=null&&(t.onclick=on),t=!0):t=!1,t||zi(e,!0)}function Vi(e){for(Pi=e.return;Pi;)switch(Pi.tag){case 5:case 31:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Pi=Pi.return}}function z(e){if(e!==Pi)return!1;if(!R)return Vi(e),R=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Kd(e.type,e.memoizedProps)),n=!n),n&&Fi&&zi(e),Vi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Fi=pf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Fi=pf(e)}else t===27?(t=Fi,ef(e.type)?(e=ff,ff=null,Fi=e):Fi=t):Fi=Pi?df(e.stateNode.nextSibling):null;return!0}function Hi(){Fi=Pi=null,R=!1}function Ui(){var e=Ii;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ii=null),e}function Wi(e){Ii===null?Ii=[e]:Ii.push(e)}var Gi=ce(null),B=null,Ki=null;function qi(e,t,n){ue(Gi,t._currentValue),t._currentValue=n}function Ji(e){e._currentValue=Gi.current,le(Gi)}function Yi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Xi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Yi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Yi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Zi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Er(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===me.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[ep]:e.push(ep))}a=a.return}e!==null&&Xi(t,e,n,r),t.flags|=262144}function Qi(e){for(e=e.firstContext;e!==null;){if(!Er(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $i(e){B=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ea(e){return na(B,e)}function ta(e,t){return B===null&&$i(e),na(e,t)}function na(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ki===null){if(e===null)throw Error(i(308));Ki=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ki=Ki.next=t;return n}var ra=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ia=t.unstable_scheduleCallback,aa=t.unstable_NormalPriority,oa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sa(){return{controller:new ra,data:new Map,refCount:0}}function ca(e){e.refCount--,e.refCount===0&&ia(aa,function(){e.controller.abort()})}var la=null,ua=0,da=0,fa=null;function pa(e,t){if(la===null){var n=la=[];ua=0,da=pd(),fa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ua++,t.then(ma,ma),t}function ma(){if(--ua===0&&la!==null){fa!==null&&(fa.status=`fulfilled`);var e=la;la=null,da=0,fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ha(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ga=j.S;j.S=function(e,t){tu=je(),typeof t==`object`&&t&&typeof t.then==`function`&&pa(e,t),ga!==null&&ga(e,t)};var _a=ce(null);function va(){var e=_a.current;return e===null?Rl.pooledCache:e}function ya(e,t){t===null?ue(_a,_a.current):ue(_a,t.pool)}function ba(){var e=va();return e===null?null:{parent:oa._currentValue,pool:e}}var xa=Error(i(460)),Sa=Error(i(474)),Ca=Error(i(542)),wa={then:function(){}};function Ta(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ea(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(on,on),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e;default:if(typeof t.status==`string`)t.then(on,on);else{if(e=Rl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e}throw Oa=t,xa}}function Da(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Oa=e,xa):e}}var Oa=null;function ka(){if(Oa===null)throw Error(i(459));var e=Oa;return Oa=null,e}function Aa(e){if(e===xa||e===Ca)throw Error(i(483))}var V=null,ja=0;function Ma(e){var t=ja;return ja+=1,V===null&&(V=[]),Ea(V,e,t)}function Na(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Pa(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Fa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=pi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ee&&Da(i)===t.type)?(t=a(t,n.props),Na(t,n),t.return=e,t):(t=hi(n.type,n.key,n.props,null,e.mode,r),Na(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=gi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=_i(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=hi(t.type,t.key,t.props,null,e.mode,n),Na(n,t),n.return=e,n;case v:return t=yi(t,e.mode,n),t.return=e,t;case ee:return t=Da(t),f(e,t,n)}if(A(t)||ne(t))return t=gi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ma(t),n);if(t.$$typeof===C)return f(e,ta(e,t),n);Pa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ee:return n=Da(n),p(e,t,n,r)}if(A(n)||ne(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ma(n),r);if(n.$$typeof===C)return p(e,t,ta(e,n),r);Pa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ee:return r=Da(r),m(e,t,n,r,i)}if(A(r)||ne(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ma(r),i);if(r.$$typeof===C)return m(e,t,n,ta(t,r),i);Pa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),R&&L(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return R&&L(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),R&&L(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),R&&L(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return R&&L(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),R&&L(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ee&&Da(l)===r.type){n(e,r.sibling),c=a(r,o.props),Na(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=gi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=hi(o.type,o.key,o.props,null,e.mode,c),Na(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=yi(o,e.mode,c),c.return=e,e=c}return s(e);case ee:return o=Da(o),b(e,r,o,c)}if(A(o))return h(e,r,o,c);if(ne(o)){if(l=ne(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ma(o),c);if(o.$$typeof===C)return b(e,r,ta(e,o),c);Pa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=_i(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ja=0;var i=b(e,t,n,r);return V=null,i}catch(t){if(t===xa||t===Ca)throw t;var a=di(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ia=Fa(!0),La=Fa(!1),Ra=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ba(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ll&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ci(e),si(e,null,n),t}return ii(e,r,t,n),ci(e)}function Ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}function Wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ga=!1;function Ka(){if(Ga){var e=fa;if(e!==null)throw e}}function qa(e,t,n,r){Ga=!1;var i=e.updateQueue;Ra=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(Y&p)===p:(r&p)===p){p!==0&&p===da&&(Ga=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Ra=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function Ja(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ya(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ja(n[e],t)}var Xa=ce(null),Za=ce(0);function Qa(e,t){e=Wl,ue(Za,e),ue(Xa,t),Wl=e|t.baseLanes}function $a(){ue(Za,Wl),ue(Xa,Xa.current)}function eo(){Wl=Za.current,le(Xa),le(Za)}var to=ce(null),no=null;function ro(e){var t=e.alternate;ue(co,co.current&1),ue(to,e),no===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(no=e)}function io(e){ue(co,co.current),ue(to,e),no===null&&(no=e)}function ao(e){e.tag===22?(ue(co,co.current),ue(to,e),no===null&&(no=e)):oo(e)}function oo(){ue(co,co.current),ue(to,to.current)}function so(e){le(to),no===e&&(no=null),le(co)}var co=ce(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||cf(n)||lf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uo=0,H=null,fo=null,po=null,mo=!1,ho=!1,go=!1,_o=0,vo=0,yo=null,bo=0;function xo(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Er(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return uo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?Is:Ls,go=!1,a=n(r,i),go=!1,ho&&(a=To(t,n,r,i)),wo(e),a}function wo(e){j.H=Fs;var t=fo!==null&&fo.next!==null;if(uo=0,po=fo=H=null,mo=!1,vo=0,yo=null,t)throw Error(i(300));e===null||ec||(e=e.dependencies,e!==null&&Qi(e)&&(ec=!0))}function To(e,t,n,r){H=e;var a=0;do{if(ho&&(yo=null),vo=0,ho=!1,25<=a)throw Error(i(301));if(a+=1,po=fo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}j.H=Rs,o=t(n,r)}while(ho);return o}function Eo(){var e=j.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(fo===null?null:fo.memoizedState)!==e&&(H.flags|=1024),t}function Do(){var e=_o!==0;return _o=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(mo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mo=!1}uo=0,po=fo=H=null,ho=!1,vo=_o=0,yo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return po===null?H.memoizedState=po=e:po=po.next=e,po}function jo(){if(fo===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=fo.next;var t=po===null?H.memoizedState:po.next;if(t!==null)po=t,fo=e;else{if(e===null)throw H.alternate===null?Error(i(467)):Error(i(310));fo=e,e={memoizedState:fo.memoizedState,baseState:fo.baseState,baseQueue:fo.baseQueue,queue:fo.queue,next:null},po===null?H.memoizedState=po=e:po=po.next=e}return po}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=vo;return vo+=1,yo===null&&(yo=[]),e=Ea(yo,e,t),t=H,(po===null?t.memoizedState:po.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?Is:Ls),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return ea(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=k;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),fo,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(uo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===da&&(d=!0);else if((uo&p)===p){u=u.next,p===da&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,H.lanes|=p,Kl|=p;f=u.action,go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,H.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Er(o,e.memoizedState)&&(ec=!0,d&&(n=fa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Er(o,t.memoizedState)||(ec=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=H,a=jo(),o=R;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Er((fo||a).memoizedState,n);if(s&&(a.memoizedState=n,ec=!0),a=a.queue,ls(U.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||po!==null&&po.memoizedState.tag&1){if(r.flags|=2048,as(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),Rl===null)throw Error(i(349));o||uo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=Mo(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Uo(t)&&Wo(e)}function U(e,t,n){return n(function(){Uo(t)&&Wo(e)})}function Uo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Er(e,n)}catch{return!0}}function Wo(e){var t=oi(e,2);t!==null&&gu(t,e,2)}function Go(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),go){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function Ko(e,t,n,r){return e.baseState=n,Ro(e,fo,typeof r==`function`?r:Io)}function qo(e,t,n,r,a){if(Ms(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};j.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Jo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Jo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=j.T,o={};j.T=o;try{var s=n(i,r),c=j.S;c!==null&&c(o,s),Yo(e,t,s)}catch(n){Zo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),j.T=a}}else try{a=n(i,r),Yo(e,t,a)}catch(n){Zo(e,t,n)}}function Yo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Xo(e,t,n)},function(n){return Zo(e,t,n)}):Xo(e,t,n)}function Xo(e,t,n){t.status=`fulfilled`,t.value=n,Qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jo(e,n)))}function Zo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Qo(t),t=t.next;while(t!==r)}e.action=null}function Qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function es(e,t){if(R){var n=Rl.formState;if(n!==null){a:{var r=H;if(R){if(Fi){b:{for(var i=Fi,a=Li;i.nodeType!==8;){if(!a){i=null;break b}if(i=df(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Fi=df(i.nextSibling),r=i.data===`F!`;break a}}zi(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},n.queue=r,n=ks.bind(null,H,r),r.dispatch=n,r=Go(!1),a=js.bind(null,H,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=qo.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ts(e){return ns(jo(),fo,e)}function ns(e,t,n){if(t=Ro(e,t,$o)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===xa?Ca:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,as(9,{destroy:void 0},rs.bind(null,i,n),null)),[r,a,e]}function rs(e,t){e.action=t}function is(e){var t=jo(),n=fo;if(n!==null)return ns(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function as(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=Mo(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function os(){return jo().memoizedState}function ss(e,t,n,r){var i=Ao();H.flags|=e,i.memoizedState=as(1|t,{destroy:void 0},n,r===void 0?null:r)}function W(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;fo!==null&&r!==null&&So(r,fo.memoizedState.deps)?i.memoizedState=as(t,a,n,r):(H.flags|=e,i.memoizedState=as(1|t,a,n,r))}function cs(e,t){ss(8390656,8,e,t)}function ls(e,t){W(2048,8,e,t)}function us(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=Mo(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ds(e){var t=jo().memoizedState;return us({ref:t,nextImpl:e}),function(){if(Ll&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function fs(e,t){return W(4,2,e,t)}function ps(e,t){return W(4,4,e,t)}function ms(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hs(e,t,n){n=n==null?null:n.concat([e]),W(4,4,ms.bind(null,t,e),n)}function G(){}function gs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),go){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function vs(e,t,n){return n===void 0||uo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=hu(),H.lanes|=e,Kl|=e,n)}function ys(e,t,n,r){return Er(n,t)?n:Xa.current===null?!(uo&42)||uo&1073741824&&!(Y&261930)?(ec=!0,e.memoizedState=n):(e=hu(),H.lanes|=e,Kl|=e,t):(e=vs(e,n,r),Er(e,t)||(ec=!0),e)}function bs(e,t,n,r,i){var a=M.p;M.p=a!==0&&8>a?a:8;var o=j.T,s={};j.T=s,js(e,!1,t,n);try{var c=i(),l=j.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?As(e,t,ha(c,r),mu(e)):As(e,t,r,mu(e))}catch(n){As(e,t,{then:function(){},status:`rejected`,reason:n},mu())}finally{M.p=a,o!==null&&s.types!==null&&(o.types=s.types),j.T=o}}function K(){}function xs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ss(e).queue;bs(e,a,t,ae,n===null?K:function(){return Cs(e),n(r)})}function Ss(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cs(e){var t=Ss(e);t.next===null&&(t=e.alternate.memoizedState),As(e,t.next.queue,{},mu())}function ws(){return ea(ep)}function Ts(){return jo().memoizedState}function Es(){return jo().memoizedState}function Ds(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mu();e=Va(n);var r=Ha(t,e,n);r!==null&&(gu(r,t,n),Ua(r,t,n)),t={cache:sa()},e.payload=t;return}t=t.return}}function Os(e,t,n){var r=mu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ms(e)?Ns(t,n):(n=ai(e,t,n,r),n!==null&&(gu(n,e,r),Ps(n,t,r)))}function ks(e,t,n){As(e,t,n,mu())}function As(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ms(e))Ns(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Er(s,o))return ii(e,t,i,0),Rl===null&&F(),!1}catch{}if(n=ai(e,t,i,r),n!==null)return gu(n,e,r),Ps(n,t,r),!0}return!1}function js(e,t,n,r){if(r={lane:2,revertLane:pd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ms(e)){if(t)throw Error(i(479))}else t=ai(e,n,r,2),t!==null&&gu(t,e,2)}function Ms(e){var t=e.alternate;return e===H||t!==null&&t===H}function Ns(e,t){ho=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ps(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}var Fs={readContext:ea,use:Po,useCallback:xo,useContext:xo,useEffect:xo,useImperativeHandle:xo,useLayoutEffect:xo,useInsertionEffect:xo,useMemo:xo,useReducer:xo,useRef:xo,useState:xo,useDebugValue:xo,useDeferredValue:xo,useTransition:xo,useSyncExternalStore:xo,useId:xo,useHostTransitionStatus:xo,useFormState:xo,useActionState:xo,useOptimistic:xo,useMemoCache:xo,useCacheRefresh:xo};Fs.useEffectEvent=xo;var Is={readContext:ea,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:ea,useEffect:cs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ss(4194308,4,ms.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(go){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(go){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Os.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,n=ks.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:G,useDeferredValue:function(e,t){return vs(Ao(),e,t)},useTransition:function(){var e=Go(!1);return e=bs.bind(null,H,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,a=Ao();if(R){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Rl===null)throw Error(i(349));Y&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,cs(U.bind(null,r,o,e),[e]),r.flags|=2048,as(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=Rl.identifierPrefix;if(R){var n=I,r=ki;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=_o++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=bo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ws,useFormState:es,useActionState:es,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=js.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=Ds.bind(null,H)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(Ll&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ls={readContext:ea,use:Po,useCallback:gs,useContext:ea,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:_s,useReducer:Lo,useRef:os,useState:function(){return Lo(Io)},useDebugValue:G,useDeferredValue:function(e,t){return ys(jo(),fo.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:Ts,useHostTransitionStatus:ws,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){return Ko(jo(),fo,e,t)},useMemoCache:Fo,useCacheRefresh:Es};Ls.useEffectEvent=ds;var Rs={readContext:ea,use:Po,useCallback:gs,useContext:ea,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:_s,useReducer:zo,useRef:os,useState:function(){return zo(Io)},useDebugValue:G,useDeferredValue:function(e,t){var n=jo();return fo===null?vs(n,e,t):ys(n,fo.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:Ts,useHostTransitionStatus:ws,useFormState:is,useActionState:is,useOptimistic:function(e,t){var n=jo();return fo===null?(n.baseState=e,[e,n.queue.dispatch]):Ko(n,fo,e,t)},useMemoCache:Fo,useCacheRefresh:Es};Rs.useEffectEvent=ds;function zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Va(r);i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(gu(t,e,r),Ua(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Va(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(gu(t,e,r),Ua(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mu(),r=Va(n);r.tag=2,t!=null&&(r.callback=t),t=Ha(e,r,n),t!==null&&(gu(t,e,n),Ua(t,e,n))}};function Vs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(i,a):!0}function Hs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function Us(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ws(e){ei(e)}function Gs(e){console.error(e)}function Ks(e){ei(e)}function qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Js(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){return n=Va(n),n.tag=3,n.payload={element:null},n.callback=function(){qs(e,t)},n}function Xs(e){return e=Va(e),e.tag=3,e}function Zs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Js(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Js(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Qs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Zi(t,n,a,!0),n=to.current,n!==null){switch(n.tag){case 31:case 13:return no===null?Ou():n.alternate===null&&Gl===0&&(Gl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),qu(e,r,a)),!1;case 22:return n.flags|=65536,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),qu(e,r,a)),!1}throw Error(i(435,n.tag))}return qu(e,r,a),Ou(),!1}if(R)return t=to.current,t===null?(r!==Ri&&(t=Error(i(423),{cause:r}),Wi(xi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=xi(r,n),a=Ys(e.stateNode,r,a),Wa(e,a),Gl!==4&&(Gl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ri&&(e=Error(i(422),{cause:r}),Wi(xi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=xi(o,n),Zl===null?Zl=[o]:Zl.push(o),Gl!==4&&(Gl=2),t===null)return!0;r=xi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ys(n.stateNode,r,e),Wa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Xs(a),Zs(a,e,n,r),Wa(n,a),!1}n=n.return}while(n!==null);return!1}var $s=Error(i(461)),ec=!1;function tc(e,t,n,r){t.child=e===null?La(t,null,n,r):Ia(t,e.child,n,r)}function nc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return $i(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ec?(Oo(e,t,i),Ec(e,t,i)):(R&&s&&ji(t),t.flags|=1,tc(e,t,r,i),t.child)}function rc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ic(e,t,a,r,i)):(e=hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Dc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Dr:n,n(o,r)&&e.ref===t.ref)return Ec(e,t,i)}return t.flags|=1,e=pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Dr(a,r)&&e.ref===t.ref)if(ec=!1,t.pendingProps=r=a,Dc(e,i))e.flags&131072&&(ec=!0);else return t.lanes=e.lanes,Ec(e,t,i)}return fc(e,t,n,r,i)}function ac(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return sc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ya(t,a===null?null:a.cachePool),a===null?$a():Qa(t,a),ao(t);else return r=t.lanes=536870912,sc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ya(t,null),$a(),oo(t)):(ya(t,a.cachePool),Qa(t,a),oo(t),t.memoizedState=null);return tc(e,t,i,n),t.child}function oc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sc(e,t,n,r,i){var a=va();return a=a===null?null:{parent:oa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ya(t,null),$a(),ao(t),e!==null&&Zi(e,t,r,!0),t.childLanes=i,null}function cc(e,t){return t=xc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function lc(e,t,n){return Ia(t,e.child,null,n),e=cc(t,t.pendingProps),e.flags|=2,so(t),t.memoizedState=null,e}function uc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(R){if(r.mode===`hidden`)return e=cc(t,r),t.lanes=536870912,oc(null,e);if(io(t),(e=Fi)?(e=sf(e,Li),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:I},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Pi=t,Fi=null)):e=null,e===null)throw zi(t);return t.lanes=536870912,null}return cc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(io(t),a)if(t.flags&256)t.flags&=-257,t=lc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ec||Zi(e,t,n,!1),a=(n&e.childLanes)!==0,ec||a){if(r=Rl,r!==null&&(s=ot(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,oi(e,s),gu(r,e,s),$s;Ou(),t=lc(e,t,n)}else e=o.treeContext,Fi=df(s.nextSibling),Pi=t,R=!0,Ii=null,Li=!1,e!==null&&Ni(t,e),t=cc(t,r),t.flags|=4096;return t}return e=pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function dc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function fc(e,t,n,r,i){return $i(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ec?(Oo(e,t,i),Ec(e,t,i)):(R&&r&&ji(t),t.flags|=1,tc(e,t,n,i),t.child)}function pc(e,t,n,r,i,a){return $i(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ec?(Oo(e,t,a),Ec(e,t,a)):(R&&r&&ji(t),t.flags|=1,tc(e,t,n,a),t.child)}function mc(e,t,n,r,i){if($i(t),t.stateNode===null){var a=li,o=n.contextType;typeof o==`object`&&o&&(a=ea(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Bs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},za(t),o=n.contextType,a.context=typeof o==`object`&&o?ea(o):li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(zs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Bs.enqueueReplaceState(a,a.state,null),qa(t,r,a,i),Ka(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Us(n,s);a.props=c;var l=a.context,u=n.contextType;o=li,typeof u==`object`&&u&&(o=ea(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Hs(t,a,r,o),Ra=!1;var f=t.memoizedState;a.state=f,qa(t,r,a,i),Ka(),l=t.memoizedState,s||f!==l||Ra?(typeof d==`function`&&(zs(t,n,d,r),l=t.memoizedState),(c=Ra||Vs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ba(e,t),o=t.memoizedProps,u=Us(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=li,typeof l==`object`&&l&&(c=ea(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Hs(t,a,r,c),Ra=!1,f=t.memoizedState,a.state=f,qa(t,r,a,i),Ka();var p=t.memoizedState;o!==d||f!==p||Ra||e!==null&&e.dependencies!==null&&Qi(e.dependencies)?(typeof s==`function`&&(zs(t,n,s,r),p=t.memoizedState),(u=Ra||Vs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Qi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,dc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ia(t,e.child,null,i),t.child=Ia(t,null,n,i)):tc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ec(e,t,i),e}function hc(e,t,n,r){return Hi(),t.flags|=256,tc(e,t,n,r),t.child}var gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _c(e){return{baseLanes:e,cachePool:ba()}}function vc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function yc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(co.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(R){if(a?ro(t):oo(t),(e=Fi)?(e=sf(e,Li),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:I},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Pi=t,Fi=null)):e=null,e===null)throw zi(t);return lf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(oo(t),a=t.mode,c=xc({mode:`hidden`,children:c},a),r=gi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,oc(null,r)):(ro(t),bc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ro(t),t.flags&=-257,t=Sc(e,t,n)):t.memoizedState===null?(oo(t),c=r.fallback,a=t.mode,r=xc({mode:`visible`,children:r.children},a),c=gi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ia(t,e.child,null,n),r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,t=oc(null,r)):(oo(t),t.child=e.child,t.flags|=128,t=null);else if(ro(t),lf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Wi({value:r,source:null,stack:null}),t=Sc(e,t,n)}else if(ec||Zi(e,t,n,!1),s=(n&e.childLanes)!==0,ec||s){if(s=Rl,s!==null&&(r=ot(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,oi(e,r),gu(s,e,r),$s;cf(c)||Ou(),t=Sc(e,t,n)}else cf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Fi=df(c.nextSibling),Pi=t,R=!0,Ii=null,Li=!1,e!==null&&Ni(t,e),t=bc(t,r.children),t.flags|=4096);return t}return a?(oo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=pi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=gi(c,a,n,null),c.flags|=2):c=pi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,oc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=_c(n):(a=c.cachePool,a===null?a=ba():(l=oa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=vc(e,s,n),t.memoizedState=gc,oc(e.child,r)):(ro(t),n=e.child,e=n.sibling,n=pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function bc(e,t){return t=xc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function xc(e,t){return e=di(22,e,null,t),e.lanes=0,e}function Sc(e,t,n){return Ia(t,e.child,null,n),e=bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yi(e.return,t,n)}function wc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Tc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=co.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,ue(co,o),tc(e,t,r,n),r=R?Ti:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cc(e,n,t);else if(e.tag===19)Cc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wc(t,!0,n,null,a,r);break;case`together`:wc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ec(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Zi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Qi(e))):!0}function Oc(e,t,n){switch(t.tag){case 3:he(t,t.stateNode.containerInfo),qi(t,oa,e.memoizedState.cache),Hi();break;case 27:case 5:_e(t);break;case 4:he(t,t.stateNode.containerInfo);break;case 10:qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,io(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ro(t),e=Ec(e,t,n),e===null?null:e.sibling):yc(e,t,n):(ro(t),t.flags|=128,null);ro(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Zi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Tc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(co,co.current),r)break;return null;case 22:return t.lanes=0,ac(e,t,n,t.pendingProps);case 24:qi(t,oa,e.memoizedState.cache)}return Ec(e,t,n)}function kc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ec=!0;else{if(!Dc(e,n)&&!(t.flags&128))return ec=!1,Oc(e,t,n);ec=!!(e.flags&131072)}else ec=!1,R&&t.flags&1048576&&Ai(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Da(t.elementType),t.type=e,typeof e==`function`)fi(e)?(r=Us(e,r),t.tag=1,t=mc(null,t,e,r,n)):(t.tag=0,t=fc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=nc(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=rc(null,t,e,r,n);break a}}throw t=ie(e)||e,Error(i(306,t,``))}}return t;case 0:return fc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Us(r,t.pendingProps),mc(e,t,r,a,n);case 3:a:{if(he(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ba(e,t),qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,qi(t,oa,r),r!==o.cache&&Xi(t,[oa],n,!0),Ka(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=hc(e,t,r,n);break a}else if(r!==a){a=xi(Error(i(424)),t),Wi(a),t=hc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Fi=df(e.firstChild),Pi=t,R=!0,Ii=null,Li=!0,n=La(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Hi(),r===a){t=Ec(e,t,n);break a}tc(e,t,r,n)}t=t.child}return t;case 26:return dc(e,t),e===null?(n=Mf(t.type,null,t.pendingProps,null))?t.memoizedState=n:R||(n=t.type,e=t.pendingProps,r=Ud(pe.current).createElement(n),r[ft]=t,r[pt]=e,Ld(r,n,e),Tt(r),t.stateNode=r):t.memoizedState=Mf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _e(t),e===null&&R&&(r=t.stateNode=hf(t.type,t.pendingProps,pe.current),Pi=t,Li=!0,a=Fi,ef(t.type)?(ff=a,Fi=df(r.firstChild)):Fi=a),tc(e,t,t.pendingProps.children,n),dc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&R&&((a=r=Fi)&&(r=af(r,t.type,t.pendingProps,Li),r===null?a=!1:(t.stateNode=r,Pi=t,Fi=df(r.firstChild),Li=!1,a=!0)),a||zi(t)),_e(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Kd(a,o)?r=null:s!==null&&Kd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),ep._currentValue=a),dc(e,t),tc(e,t,r,n),t.child;case 6:return e===null&&R&&((e=n=Fi)&&(n=of(n,t.pendingProps,Li),n===null?e=!1:(t.stateNode=n,Pi=t,Fi=null,e=!0)),e||zi(t)),null;case 13:return yc(e,t,n);case 4:return he(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ia(t,null,r,n):tc(e,t,r,n),t.child;case 11:return nc(e,t,t.type,t.pendingProps,n);case 7:return tc(e,t,t.pendingProps,n),t.child;case 8:return tc(e,t,t.pendingProps.children,n),t.child;case 12:return tc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,qi(t,t.type,r.value),tc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,$i(t),a=ea(a),r=r(a),t.flags|=1,tc(e,t,r,n),t.child;case 14:return rc(e,t,t.type,t.pendingProps,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 19:return Tc(e,t,n);case 31:return uc(e,t,n);case 22:return ac(e,t,n,t.pendingProps);case 24:return $i(t),r=ea(oa),e===null?(a=va(),a===null&&(a=Rl,o=sa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},za(t),qi(t,oa,a)):((e.lanes&n)!==0&&(Ba(e,t),qa(t,null,null,n),Ka()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,qi(t,oa,r),r!==a.cache&&Xi(t,[oa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),qi(t,oa,r))),tc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ac(e){e.flags|=4}function jc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Tu())e.flags|=8192;else throw Oa=wa,Sa}else e.flags&=-16777217}function Mc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!qf(t))if(Tu())e.flags|=8192;else throw Oa=wa,Sa}function Nc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:et(),e.lanes|=t,Xl|=t)}function Pc(e,t){if(!R)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ic(e,t,n){var r=t.pendingProps;switch(Mi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fc(t),null;case 1:return Fc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ji(oa),ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(z(t)?Ac(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ui())),Fc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ac(t),o===null?(Fc(t),jc(t,a,null,r,n)):(Fc(t),Mc(t,o))):o?o===e.memoizedState?(Fc(t),t.flags&=-16777217):(Ac(t),Fc(t),Mc(t,o)):(e=e.memoizedProps,e!==r&&Ac(t),Fc(t),jc(t,a,e,r,n)),null;case 27:if(ve(t),n=pe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Fc(t),null}e=de.current,z(t)?Bi(t,e):(e=hf(a,r,n),t.stateNode=e,Ac(t))}return Fc(t),null;case 5:if(ve(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Fc(t),null}if(o=de.current,z(t))Bi(t,o);else{var s=Ud(pe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ft]=t,o[pt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Ld(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ac(t)}}return Fc(t),jc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=pe.current,z(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Pi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ft]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Pd(e.nodeValue,n)),e||zi(t,!0)}else e=Ud(e).createTextNode(r),e[ft]=t,t.stateNode=e}return Fc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=z(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ft]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fc(t),e=!1}else n=Ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(so(t),t):(so(t),null);if(t.flags&128)throw Error(i(558))}return Fc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=z(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ft]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fc(t),a=!1}else a=Ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(so(t),t):(so(t),null)}return so(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Nc(t,t.updateQueue),Fc(t),null);case 4:return ge(),e===null&&wd(t.stateNode.containerInfo),Fc(t),null;case 10:return Ji(t.type),Fc(t),null;case 19:if(le(co),r=t.memoizedState,r===null)return Fc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Pc(r,!1);else{if(Gl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=lo(e),o!==null){for(t.flags|=128,Pc(r,!1),e=o.updateQueue,t.updateQueue=e,Nc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mi(n,e),n=n.sibling;return ue(co,co.current&1|2),R&&L(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&je()>nu&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304)}else{if(!a)if(e=lo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Nc(t,e),Pc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!R)return Fc(t),null}else 2*je()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Fc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=je(),e.sibling=null,n=co.current,ue(co,a?n&1|2:n&1),R&&L(t,r.treeForkCount),e);case 22:case 23:return so(t),eo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Fc(t),t.subtreeFlags&6&&(t.flags|=8192)):Fc(t),n=t.updateQueue,n!==null&&Nc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&le(_a),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ji(oa),Fc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Lc(e,t){switch(Mi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ji(oa),ge(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ve(t),null;case 31:if(t.memoizedState!==null){if(so(t),t.alternate===null)throw Error(i(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(so(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(co),null;case 4:return ge(),null;case 10:return Ji(t.type),null;case 22:case 23:return so(t),eo(),e!==null&&le(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ji(oa),null;case 25:return null;default:return null}}function Rc(e,t){switch(Mi(t),t.tag){case 3:Ji(oa),ge();break;case 26:case 27:case 5:ve(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&so(t);break;case 13:so(t);break;case 19:le(co);break;case 10:Ji(t.type);break;case 22:case 23:so(t),eo(),e!==null&&le(_a);break;case 24:Ji(oa)}}function zc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Ku(t,t.return,e)}}function Bc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Ku(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Ku(t,t.return,e)}}function Vc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ya(t,n)}catch(t){Ku(e,e.return,t)}}}function Hc(e,t,n){n.props=Us(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Ku(e,t,n)}}function Uc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Ku(e,t,n)}}function Wc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Ku(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Ku(e,t,n)}else n.current=null}function Gc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Ku(e,e.return,t)}}function Kc(e,t,n){try{var r=e.stateNode;Rd(r,e.type,n,t),r[pt]=t}catch(t){Ku(e,e.return,t)}}function qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ef(e.type)||e.tag===4}function Jc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ef(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=on));else if(r!==4&&(r===27&&ef(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&ef(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ld(t,r,n),t[ft]=e,t[pt]=n}catch(t){Ku(e,e.return,t)}}var Qc=!1,$c=!1,el=!1,tl=typeof WeakSet==`function`?WeakSet:Set,nl=null;function rl(e,t){if(e=e.containerInfo,Vd=lp,e=jr(e),Mr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Hd={focusedElem:e,selectionRange:n},lp=!1,nl=t;nl!==null;)if(t=nl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,nl=e;else for(;nl!==null;){switch(t=nl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Us(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Ku(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)rf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:rf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,nl=e;break}nl=t.return}}function il(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:yl(e,n),r&4&&zc(5,n);break;case 1:if(yl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Ku(n,n.return,e)}else{var i=Us(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Ku(n,n.return,e)}}r&64&&Vc(n),r&512&&Uc(n,n.return);break;case 3:if(yl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ya(e,t)}catch(e){Ku(n,n.return,e)}}break;case 27:t===null&&r&4&&Zc(n);case 26:case 5:yl(e,n),t===null&&r&4&&Gc(n),r&512&&Uc(n,n.return);break;case 12:yl(e,n);break;case 31:yl(e,n),r&4&&ul(e,n);break;case 13:yl(e,n),r&4&&dl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Xu.bind(null,n),uf(e,n))));break;case 22:if(r=n.memoizedState!==null||Qc,!r){t=t!==null&&t.memoizedState!==null||$c,i=Qc;var a=$c;Qc=r,($c=t)&&!a?xl(e,n,(n.subtreeFlags&8772)!=0):yl(e,n),Qc=i,$c=a}break;case 30:break;default:yl(e,n)}}function al(e){var t=e.alternate;t!==null&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ol=null,sl=!1;function cl(e,t,n){for(n=n.child;n!==null;)ll(e,t,n),n=n.sibling}function ll(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:$c||Wc(n,t),cl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$c||Wc(n,t);var r=ol,i=sl;ef(n.type)&&(ol=n.stateNode,sl=!1),cl(e,t,n),gf(n.stateNode),ol=r,sl=i;break;case 5:$c||Wc(n,t);case 6:if(r=ol,i=sl,ol=null,cl(e,t,n),ol=r,sl=i,ol!==null)if(sl)try{(ol.nodeType===9?ol.body:ol.nodeName===`HTML`?ol.ownerDocument.body:ol).removeChild(n.stateNode)}catch(e){Ku(n,t,e)}else try{ol.removeChild(n.stateNode)}catch(e){Ku(n,t,e)}break;case 18:ol!==null&&(sl?(e=ol,tf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Fp(e)):tf(ol,n.stateNode));break;case 4:r=ol,i=sl,ol=n.stateNode.containerInfo,sl=!0,cl(e,t,n),ol=r,sl=i;break;case 0:case 11:case 14:case 15:Bc(2,n,t),$c||Bc(4,n,t),cl(e,t,n);break;case 1:$c||(Wc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Hc(n,t,r)),cl(e,t,n);break;case 21:cl(e,t,n);break;case 22:$c=(r=$c)||n.memoizedState!==null,cl(e,t,n),$c=r;break;default:cl(e,t,n)}}function ul(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fp(e)}catch(e){Ku(t,t.return,e)}}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fp(e)}catch(e){Ku(t,t.return,e)}}function fl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tl),t;default:throw Error(i(435,e.tag))}}function pl(e,t){var n=fl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Zu.bind(null,e,t);t.then(r,r)}})}function ml(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(ef(c.type)){ol=c.stateNode,sl=!1;break a}break;case 5:ol=c.stateNode,sl=!1;break a;case 3:case 4:ol=c.stateNode.containerInfo,sl=!0;break a}c=c.return}if(ol===null)throw Error(i(160));ll(o,s,a),ol=null,sl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gl(t,e),t=t.sibling}var hl=null;function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ml(t,e),_l(e),r&4&&(Bc(3,e,e.return),zc(3,e),Bc(5,e,e.return));break;case 1:ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),r&64&&Qc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=hl;if(ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[yt]||o[ft]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Ld(o,r,n),o[ft]=e,Tt(o),r=o;break a;case`link`:var s=Wf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Ld(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Wf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Ld(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ft]=e,Tt(o),r=o}e.stateNode=r}else Gf(a,e.type,e.stateNode);else e.stateNode=zf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Kc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Gf(a,e.type,e.stateNode):zf(a,r,e.memoizedProps))}break;case 27:ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),n!==null&&r&4&&Kc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),e.flags&32){a=e.stateNode;try{Zt(a,``)}catch(t){Ku(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Kc(e,a,n===null?a:n.memoizedProps)),r&1024&&(el=!0);break;case 6:if(ml(t,e),_l(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Ku(e,e.return,t)}}break;case 3:if(Uf=null,a=hl,hl=yf(t.containerInfo),ml(t,e),hl=a,_l(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fp(t.containerInfo)}catch(t){Ku(e,e.return,t)}el&&(el=!1,vl(e));break;case 4:r=hl,hl=yf(e.stateNode.containerInfo),ml(t,e),_l(e),hl=r;break;case 12:ml(t,e),_l(e);break;case 31:ml(t,e),_l(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 13:ml(t,e),_l(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=je()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Qc,d=$c;if(Qc=u||a,$c=d||l,ml(t,e),$c=d,Qc=u,_l(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Qc||$c||bl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Ku(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Ku(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?nf(m,!0):nf(l.stateNode,!1)}catch(e){Ku(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,pl(e,n))));break;case 19:ml(t,e),_l(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 30:break;case 21:break;default:ml(t,e),_l(e)}}function _l(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Xc(e,Jc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Zt(o,``),n.flags&=-33),Xc(e,Jc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Yc(e,Jc(e),s);break;default:throw Error(i(161))}}catch(t){Ku(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function yl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)il(e,t.alternate,t),t=t.sibling}function bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bc(4,t,t.return),bl(t);break;case 1:Wc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Hc(t,t.return,n),bl(t);break;case 27:gf(t.stateNode);case 26:case 5:Wc(t,t.return),bl(t);break;case 22:t.memoizedState===null&&bl(t);break;case 30:bl(t);break;default:bl(t)}e=e.sibling}}function xl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:xl(i,a,n),zc(4,a);break;case 1:if(xl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Ku(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ja(c[i],s)}catch(e){Ku(r,r.return,e)}}n&&o&64&&Vc(a),Uc(a,a.return);break;case 27:Zc(a);case 26:case 5:xl(i,a,n),n&&r===null&&o&4&&Gc(a),Uc(a,a.return);break;case 12:xl(i,a,n);break;case 31:xl(i,a,n),n&&o&4&&ul(i,a);break;case 13:xl(i,a,n),n&&o&4&&dl(i,a);break;case 22:a.memoizedState===null&&xl(i,a,n),Uc(a,a.return);break;case 30:break;default:xl(i,a,n)}t=t.sibling}}function Sl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ca(n))}function Cl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e))}function wl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tl(e,t,n,r),t=t.sibling}function Tl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:wl(e,t,n,r),i&2048&&zc(9,t);break;case 1:wl(e,t,n,r);break;case 3:wl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e)));break;case 12:if(i&2048){wl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Ku(t,t.return,e)}}else wl(e,t,n,r);break;case 31:wl(e,t,n,r);break;case 13:wl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?wl(e,t,n,r):(a._visibility|=2,El(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?wl(e,t,n,r):Dl(e,t),i&2048&&Sl(o,t);break;case 24:wl(e,t,n,r),i&2048&&Cl(t.alternate,t);break;default:wl(e,t,n,r)}}function El(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:El(a,o,s,c,i),zc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,El(a,o,s,c,i)):u._visibility&2?El(a,o,s,c,i):Dl(a,o),i&&l&2048&&Sl(o.alternate,o);break;case 24:El(a,o,s,c,i),i&&l&2048&&Cl(o.alternate,o);break;default:El(a,o,s,c,i)}t=t.sibling}}function Dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Dl(n,r),i&2048&&Sl(r.alternate,r);break;case 24:Dl(n,r),i&2048&&Cl(r.alternate,r);break;default:Dl(n,r)}t=t.sibling}}var Ol=8192;function kl(e,t,n){if(e.subtreeFlags&Ol)for(e=e.child;e!==null;)Al(e,t,n),e=e.sibling}function Al(e,t,n){switch(e.tag){case 26:kl(e,t,n),e.flags&Ol&&e.memoizedState!==null&&Jf(n,hl,e.memoizedState,e.memoizedProps);break;case 5:kl(e,t,n);break;case 3:case 4:var r=hl;hl=yf(e.stateNode.containerInfo),kl(e,t,n),hl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ol,Ol=16777216,kl(e,t,n),Ol=r):kl(e,t,n));break;default:kl(e,t,n)}}function jl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ml(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Pl(r,e)}jl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)q(e),e=e.sibling}function q(e){switch(e.tag){case 0:case 11:case 15:Ml(e),e.flags&2048&&Bc(9,e,e.return);break;case 3:Ml(e);break;case 12:Ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Nl(e)):Ml(e);break;default:Ml(e)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Pl(r,e)}jl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bc(8,t,t.return),Nl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Nl(t));break;default:Nl(t)}e=e.sibling}}function Pl(e,t){for(;nl!==null;){var n=nl;switch(n.tag){case 0:case 11:case 15:Bc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ca(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,nl=r;else a:for(n=e;nl!==null;){r=nl;var i=r.sibling,a=r.return;if(al(r),r===n){nl=null;break a}if(i!==null){i.return=a,nl=i;break a}nl=a}}}var Fl={getCacheForType:function(e){var t=ea(oa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ea(oa).controller.signal}},Il=typeof WeakMap==`function`?WeakMap:Map,Ll=0,Rl=null,J=null,Y=0,zl=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,au=0,ou=null,su=null,cu=0,lu=0,uu=null,du=null,fu=0,pu=null;function mu(){return Ll&2&&Y!==0?Y&-Y:j.T===null?lt():pd()}function hu(){if(Yl===0)if(!(Y&536870912)||R){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),Yl=e}else Yl=536870912;return e=to.current,e!==null&&(e.flags|=32),Yl}function gu(e,t,n){(e===Rl&&(zl===2||zl===9)||e.cancelPendingCommit!==null)&&(Cu(e,0),bu(e,Y,Yl,!1)),nt(e,n),(!(Ll&2)||e!==Rl)&&(e===Rl&&(!(Ll&2)&&(ql|=n),Gl===4&&bu(e,Y,Yl,!1)),ad(e))}function _u(e,t,n){if(Ll&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Qe(e,t),a=r?ju(e,t):ku(e,t,!0),o=r;do{if(a===0){Hl&&!r&&bu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!yu(n)){a=ku(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Cu(c,s).flags|=256),s=ku(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Cu(e,0),bu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:bu(r,t,Yl,!Vl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-je(),10<a)){if(bu(r,t,Yl,!Vl),Ze(r,0,!0)!==0)break a;cu=t,r.timeoutHandle=Yd(vu.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,`Throttled`,-0,0),a);break a}vu(r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,null,-0,0)}}break}while(1);ad(e)}function vu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:on},Al(t,a,d);var m=(a&62914560)===a?eu-je():(a&4194048)===a?tu-je():0;if(m=Xf(d,m),m!==null){cu=a,e.cancelPendingCommit=m(Ru.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),bu(e,a,o,!l);return}}Ru(e,t,a,n,r,i,o,s,c)}function yu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Er(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&it(e,n,t)}function xu(){return Ll&6?!0:(od(0,!1),!1)}function Su(){if(J!==null){if(zl===0)var e=J.return;else e=J,Ki=B=null,ko(e),V=null,ja=0,e=J;for(;e!==null;)Rc(e.alternate,e),e=e.return;J=null}}function Cu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Xd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cu=0,Su(),Rl=e,J=n=pi(e.current,null),Y=t,zl=0,Bl=null,Vl=!1,Hl=Qe(e,t),Ul=!1,Xl=Yl=Jl=ql=Kl=Gl=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,F(),n}function wu(e,t){H=null,j.H=Fs,t===xa||t===Ca?(t=ka(),zl=3):t===Sa?(t=ka(),zl=4):zl=t===$s?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,J===null&&(Gl=1,qs(e,xi(t,e.current)))}function Tu(){var e=to.current;return e===null?!0:(Y&4194048)===Y?no===null:(Y&62914560)===Y||Y&536870912?e===no:!1}function Eu(){var e=j.H;return j.H=Fs,e===null?Fs:e}function Du(){var e=j.A;return j.A=Fl,e}function Ou(){Gl=4,Vl||(Y&4194048)!==Y&&to.current!==null||(Hl=!0),!(Kl&134217727)&&!(ql&134217727)||Rl===null||bu(Rl,Y,Yl,!1)}function ku(e,t,n){var r=Ll;Ll|=2;var i=Eu(),a=Du();(Rl!==e||Y!==t)&&(ru=null,Cu(e,t)),t=!1;var o=Gl;a:do try{if(zl!==0&&J!==null){var s=J,c=Bl;switch(zl){case 8:Su(),o=6;break a;case 3:case 2:case 9:case 6:to.current===null&&(t=!0);var l=zl;if(zl=0,Bl=null,Fu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=zl,zl=0,Bl=null,Fu(e,s,c,l)}}Au(),o=Gl;break}catch(t){wu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ki=B=null,Ll=r,j.H=i,j.A=a,J===null&&(Rl=null,Y=0,F()),o}function Au(){for(;J!==null;)Nu(J)}function ju(e,t){var n=Ll;Ll|=2;var r=Eu(),a=Du();Rl!==e||Y!==t?(ru=null,nu=je()+500,Cu(e,t)):Hl=Qe(e,t);a:do try{if(zl!==0&&J!==null){t=J;var o=Bl;b:switch(zl){case 1:zl=0,Bl=null,Fu(e,t,o,1);break;case 2:case 9:if(Ta(o)){zl=0,Bl=null,Pu(t);break}t=function(){zl!==2&&zl!==9||Rl!==e||(zl=7),ad(e)},o.then(t,t);break a;case 3:zl=7;break a;case 4:zl=5;break a;case 7:Ta(o)?(zl=0,Bl=null,Pu(t)):(zl=0,Bl=null,Fu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?qf(s):c.stateNode.complete){zl=0,Bl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Iu(u))}break b}}zl=0,Bl=null,Fu(e,t,o,5);break;case 6:zl=0,Bl=null,Fu(e,t,o,6);break;case 8:Su(),Gl=6;break a;default:throw Error(i(462))}}Mu();break}catch(t){wu(e,t)}while(1);return Ki=B=null,j.H=r,j.A=a,Ll=n,J===null?(Rl=null,Y=0,F(),Gl):0}function Mu(){for(;J!==null&&!ke();)Nu(J)}function Nu(e){var t=kc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Iu(e):J=t}function Pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=pc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=pc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:ko(t);default:Rc(n,t),t=J=mi(t,Wl),t=kc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Iu(e):J=t}function Fu(e,t,n,r){Ki=B=null,ko(t),V=null,ja=0;var i=t.return;try{if(Qs(e,i,t,n,Y)){Gl=1,qs(e,xi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Gl=1,qs(e,xi(n,e.current)),J=null;return}t.flags&32768?(R||r===1?e=!0:Hl||Y&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=to.current,r!==null&&r.tag===13&&(r.flags|=16384))),Lu(t,e)):Iu(t)}function Iu(e){var t=e;do{if(t.flags&32768){Lu(t,Vl);return}e=t.return;var n=Ic(t.alternate,t,Wl);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Gl===0&&(Gl=5)}function Lu(e,t){do{var n=Lc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Gl=6,J=null}function Ru(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Uu();while(au!==0);if(Ll&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ri,rt(e,n,o,s,c,l),e===Rl&&(J=Rl=null,Y=0),su=t,ou=e,cu=n,lu=o,uu=a,du=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Qu(Fe,function(){return Wu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=j.T,j.T=null,a=M.p,M.p=2,s=Ll,Ll|=4;try{rl(e,t,n)}finally{Ll=s,M.p=a,j.T=r}}au=1,zu(),Bu(),Vu()}}function zu(){if(au===1){au=0;var e=ou,t=su,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=Ll;Ll|=4;try{gl(t,e);var a=Hd,o=jr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ar(s.ownerDocument.documentElement,s)){if(c!==null&&Mr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=kr(s,h),v=kr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}lp=!!Vd,Hd=Vd=null}finally{Ll=i,M.p=r,j.T=n}}e.current=t,au=2}}function Bu(){if(au===2){au=0;var e=ou,t=su,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=Ll;Ll|=4;try{il(e,t.alternate,t)}finally{Ll=i,M.p=r,j.T=n}}au=3}}function Vu(){if(au===4||au===3){au=0,Ae();var e=ou,t=su,n=cu,r=du;t.subtreeFlags&10256||t.flags&10256?au=5:(au=0,su=ou=null,Hu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ct(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=j.T,i=M.p,M.p=2,j.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{j.T=t,M.p=i}}cu&3&&Uu(),ad(e),i=e.pendingLanes,n&261930&&i&42?e===pu?fu++:(fu=0,pu=e):fu=0,od(0,!1)}}function Hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ca(t)))}function Uu(){return zu(),Bu(),Vu(),Wu()}function Wu(){if(au!==5)return!1;var e=ou,t=lu;lu=0;var n=ct(cu),r=j.T,a=M.p;try{M.p=32>n?32:n,j.T=null,n=uu,uu=null;var o=ou,s=cu;if(au=0,su=ou=null,cu=0,Ll&6)throw Error(i(331));var c=Ll;if(Ll|=4,q(o.current),Tl(o,o.current,s,n),Ll=c,od(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{M.p=a,j.T=r,Hu(e,t)}}function Gu(e,t,n){t=xi(n,t),t=Ys(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(nt(e,2),ad(e))}function Ku(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=xi(n,e),n=Xs(2),r=Ha(t,n,2),r!==null&&(Zs(n,r,t,e),nt(r,2),ad(r));break}}t=t.return}}function qu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Il;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ju.bind(null,e,t,n),t.then(e,e))}function Ju(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Rl===e&&(Y&n)===n&&(Gl===4||Gl===3&&(Y&62914560)===Y&&300>je()-eu?!(Ll&2)&&Cu(e,0):Jl|=n,Xl===Y&&(Xl=0)),ad(e)}function Yu(e,t){t===0&&(t=et()),e=oi(e,t),e!==null&&(nt(e,t),ad(e))}function Xu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yu(e,n)}function Zu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Yu(e,n)}function Qu(e,t){return De(e,t)}var $u=null,ed=null,td=!1,nd=!1,rd=!1,id=0;function ad(e){e!==ed&&e.next===null&&(ed===null?$u=ed=e:ed=ed.next=e),nd=!0,td||(td=!0,fd())}function od(e,t){if(!rd&&nd){rd=!0;do for(var n=!1,r=$u;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,dd(r,a))}else a=Y,a=Ze(r,r===Rl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Qe(r,a)||(n=!0,dd(r,a));r=r.next}while(n);rd=!1}}function sd(){cd()}function cd(){nd=td=!1;var e=0;id!==0&&Jd()&&(e=id);for(var t=je(),n=null,r=$u;r!==null;){var i=r.next,a=ld(r,t);a===0?(r.next=null,n===null?$u=i:n.next=i,i===null&&(ed=n)):(n=r,(e!==0||a&3)&&(nd=!0)),r=i}au!==0&&au!==5||od(e,!1),id!==0&&(id=0)}function ld(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=$e(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Rl,n=Y,n=Ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(zl===2||zl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Oe(r),ct(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=ud.bind(null,e),n=De(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Oe(r),e.callbackPriority=2,e.callbackNode=null,2}function ud(e,t){if(au!==0&&au!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Uu()&&e.callbackNode!==n)return null;var r=Y;return r=Ze(e,e===Rl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_u(e,r,t),ld(e,je()),e.callbackNode!=null&&e.callbackNode===n?ud.bind(null,e):null)}function dd(e,t){if(Uu())return null;_u(e,t,!0)}function fd(){Qd(function(){Ll&6?De(Ne,sd):cd()})}function pd(){if(id===0){var e=da;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),id=e}return id}function md(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:an(``+e)}function hd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function gd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=md((i[pt]||null).action),o=r.submitter;o&&(t=(t=o[pt]||null)?md(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Dn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(id!==0){var e=o?hd(i,o):new FormData(i);xs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?hd(i,o):new FormData(i),xs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var _d=0;_d<Qr.length;_d++){var vd=Qr[_d];$r(vd.toLowerCase(),`on`+(vd[0].toUpperCase()+vd.slice(1)))}$r(Wr,`onAnimationEnd`),$r(Gr,`onAnimationIteration`),$r(Kr,`onAnimationStart`),$r(`dblclick`,`onDoubleClick`),$r(`focusin`,`onFocus`),$r(`focusout`,`onBlur`),$r(qr,`onTransitionRun`),$r(Jr,`onTransitionStart`),$r(Yr,`onTransitionCancel`),$r(Xr,`onTransitionEnd`),kt(`onMouseEnter`,[`mouseout`,`mouseover`]),kt(`onMouseLeave`,[`mouseout`,`mouseover`]),kt(`onPointerEnter`,[`pointerout`,`pointerover`]),kt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ot(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ot(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ot(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ot(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var yd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),bd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(yd));function xd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}}}}function X(e,t){var n=t[ht];n===void 0&&(n=t[ht]=new Set);var r=e+`__bubble`;n.has(r)||(Td(t,e,2,!1),n.add(r))}function Sd(e,t,n){var r=0;t&&(r|=4),Td(n,e,r,t)}var Cd=`_reactListening`+Math.random().toString(36).slice(2);function wd(e){if(!e[Cd]){e[Cd]=!0,Et.forEach(function(t){t!==`selectionchange`&&(bd.has(t)||Sd(t,!1,e),Sd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cd]||(t[Cd]=!0,Sd(`selectionchange`,!1,t))}}function Td(e,t,n,r){switch(gp(t)){case 2:var i=up;break;case 8:i=dp;break;default:i=fp}n=i.bind(null,t,n,e),i=void 0,!gn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Ed(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=xt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}pn(function(){var r=a,i=cn(n),s=[];a:{var c=Zr.get(e);if(c!==void 0){var l=Dn,u=e;switch(e){case`keypress`:if(Sn(n)===0)break a;case`keydown`:case`keyup`:l=Gn;break;case`focusin`:u=`focus`,l=In;break;case`focusout`:u=`blur`,l=In;break;case`beforeblur`:case`afterblur`:l=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=qn;break;case Wr:case Gr:case Kr:l=Ln;break;case Xr:l=Jn;break;case`scroll`:case`scrollend`:l=kn;break;case`wheel`:l=Yn;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=Xn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=mn(m,p),g!=null&&d.push(Dd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==sn&&(u=n.relatedTarget||n.fromElement)&&(xt(u)||u[mt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?xt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Pn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ct(l),h=u==null?c:Ct(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,xt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=kd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Ad(s,c,l,d,!1),u!==null&&f!==null&&Ad(s,f,u,d,!0)}}a:{if(c=r?Ct(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=mr;else if(cr(c))if(hr)v=wr;else{v=Sr;var y=xr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&tn(r.elementType)&&(v=mr):v=Cr;if(v&&=v(e,r)){lr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&qt(c,`number`,c.value)}switch(y=r?Ct(r):window,e){case`focusin`:(cr(y)||y.contentEditable===`true`)&&(Pr=y,Fr=r,Ir=null);break;case`focusout`:Ir=Fr=Pr=null;break;case`mousedown`:Lr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Lr=!1,Rr(s,n,i);break;case`selectionchange`:if(Nr)break;case`keydown`:case`keyup`:Rr(s,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?N(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=xn()):(vn=i,yn=`value`in vn?vn.value:vn.textContent,ar=!0)),y=Od(r,x),0<y.length&&(x=new zn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ir(n),b!==null&&(x.data=b)))),(b=er?or(e,n):P(e,n))&&(x=Od(r,`onBeforeInput`),0<x.length&&(y=new zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),gd(s,e,r,n,i)}xd(s,t)})}function Dd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Od(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=mn(e,n),i!=null&&r.unshift(Dd(e,i,a)),i=mn(e,t),i!=null&&r.push(Dd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function kd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ad(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=mn(n,a),l!=null&&o.unshift(Dd(n,l,c))):i||(l=mn(n,a),l!=null&&o.push(Dd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var jd=/\r\n?/g,Md=/\u0000|\uFFFD/g;function Nd(e){return(typeof e==`string`?e:``+e).replace(jd,`
`).replace(Md,``)}function Pd(e,t){return t=Nd(t),Nd(e)===t}function Fd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Zt(e,``+r);break;case`className`:Ft(e,`class`,r);break;case`tabIndex`:Ft(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ft(e,n,r);break;case`style`:en(e,r,o);break;case`data`:if(t!==`object`){Ft(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Fd(e,t,`name`,a.name,a,null),Fd(e,t,`formEncType`,a.formEncType,a,null),Fd(e,t,`formMethod`,a.formMethod,a,null),Fd(e,t,`formTarget`,a.formTarget,a,null)):(Fd(e,t,`encType`,a.encType,a,null),Fd(e,t,`method`,a.method,a,null),Fd(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=on);break;case`onScroll`:r!=null&&X(`scroll`,e);break;case`onScrollEnd`:r!=null&&X(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=an(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:X(`beforetoggle`,e),X(`toggle`,e),Pt(e,`popover`,r);break;case`xlinkActuate`:It(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:It(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:It(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:It(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Pt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=nn.get(n)||n,Pt(e,n,r))}}function Id(e,t,n,r,a,o){switch(n){case`style`:en(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Zt(e,``+r);break;case`onScroll`:r!=null&&X(`scroll`,e);break;case`onScrollEnd`:r!=null&&X(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=on);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Dt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[pt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Pt(e,n,r)}}}function Ld(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:X(`error`,e),X(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Fd(e,t,o,s,n,null)}}a&&Fd(e,t,`srcSet`,n.srcSet,n,null),r&&Fd(e,t,`src`,n.src,n,null);return;case`input`:X(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Fd(e,t,r,d,n,null)}}Kt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in X(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Fd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Jt(e,!!r,n,!0):Jt(e,!!r,t,!1);return;case`textarea`:for(s in X(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Fd(e,t,s,c,n,null)}Xt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Fd(e,t,l,r,n,null)}return;case`dialog`:X(`beforetoggle`,e),X(`toggle`,e),X(`cancel`,e),X(`close`,e);break;case`iframe`:case`object`:X(`load`,e);break;case`video`:case`audio`:for(r=0;r<yd.length;r++)X(yd[r],e);break;case`image`:X(`error`,e),X(`load`,e);break;case`details`:X(`toggle`,e);break;case`embed`:case`source`:case`link`:X(`error`,e),X(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Fd(e,t,u,r,n,null)}return;default:if(tn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Id(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Fd(e,t,c,r,n,null))}function Rd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Fd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Fd(e,t,p,m,r,f)}}Gt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Fd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Fd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Jt(e,!!n,n?[]:``,!1):Jt(e,!!n,t,!0)):Jt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Fd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Fd(e,t,s,a,r,o)}Yt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Fd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Fd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Fd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Fd(e,t,u,p,r,m)}return;default:if(tn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Id(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Id(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Fd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Fd(e,t,f,p,r,m)}function zd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Bd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&zd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&zd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Vd=null,Hd=null;function Ud(e){return e.nodeType===9?e:e.ownerDocument}function Wd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Gd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Kd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qd=null;function Jd(){var e=window.event;return e&&e.type===`popstate`?e===qd?!1:(qd=e,!0):(qd=null,!1)}var Yd=typeof setTimeout==`function`?setTimeout:void 0,Xd=typeof clearTimeout==`function`?clearTimeout:void 0,Zd=typeof Promise==`function`?Promise:void 0,Qd=typeof queueMicrotask==`function`?queueMicrotask:Zd===void 0?Yd:function(e){return Zd.resolve(null).then(e).catch($d)};function $d(e){setTimeout(function(){throw e})}function ef(e){return e===`head`}function tf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Fp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)gf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,gf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[yt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&gf(e.ownerDocument.body);n=i}while(n);Fp(t)}function nf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function rf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:rf(n),bt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function af(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[yt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=df(e.nextSibling),e===null)break}return null}function of(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=df(e.nextSibling),e===null))return null;return e}function sf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=df(e.nextSibling),e===null))return null;return e}function cf(e){return e.data===`$?`||e.data===`$~`}function lf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function uf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function df(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var ff=null;function pf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return df(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function mf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function hf(e,t,n){switch(t=Ud(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bt(e)}var _f=new Map,vf=new Set;function yf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var bf=M.d;M.d={f:xf,r:Sf,D:Tf,C:Ef,L:Df,m:Of,X:Af,S:kf,M:jf};function xf(){var e=bf.f(),t=xu();return e||t}function Sf(e){var t=St(e);t!==null&&t.tag===5&&t.type===`form`?Cs(t):bf.r(e)}var Cf=typeof document>`u`?null:document;function wf(e,t,n){var r=Cf;if(r&&typeof t==`string`&&t){var i=Wt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),vf.has(i)||(vf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Ld(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Tf(e){bf.D(e),wf(`dns-prefetch`,e,null)}function Ef(e,t){bf.C(e,t),wf(`preconnect`,e,t)}function Df(e,t,n){bf.L(e,t,n);var r=Cf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Wt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Wt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Wt(n.imageSizes)+`"]`)):i+=`[href="`+Wt(e)+`"]`;var a=i;switch(t){case`style`:a=Nf(e);break;case`script`:a=Lf(e)}_f.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),_f.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Pf(a))||t===`script`&&r.querySelector(Rf(a))||(t=r.createElement(`link`),Ld(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Of(e,t){bf.m(e,t);var n=Cf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Wt(r)+`"][href="`+Wt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Lf(e)}if(!_f.has(a)&&(e=f({rel:`modulepreload`,href:e},t),_f.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Rf(a)))return}r=n.createElement(`link`),Ld(r,`link`,e),Tt(r),n.head.appendChild(r)}}}function kf(e,t,n){bf.S(e,t,n);var r=Cf;if(r&&e){var i=wt(r).hoistableStyles,a=Nf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Pf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=_f.get(a))&&Vf(e,n);var c=o=r.createElement(`link`);Tt(c),Ld(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Bf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Af(e,t){bf.X(e,t);var n=Cf;if(n&&e){var r=wt(n).hoistableScripts,i=Lf(e),a=r.get(i);a||(a=n.querySelector(Rf(i)),a||(e=f({src:e,async:!0},t),(t=_f.get(i))&&Hf(e,t),a=n.createElement(`script`),Tt(a),Ld(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function jf(e,t){bf.M(e,t);var n=Cf;if(n&&e){var r=wt(n).hoistableScripts,i=Lf(e),a=r.get(i);a||(a=n.querySelector(Rf(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=_f.get(i))&&Hf(e,t),a=n.createElement(`script`),Tt(a),Ld(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mf(e,t,n,r){var a=(a=pe.current)?yf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Nf(n.href),n=wt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Nf(n.href);var o=wt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Pf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),_f.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},_f.set(e,n),o||If(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Lf(n),n=wt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Nf(e){return`href="`+Wt(e)+`"`}function Pf(e){return`link[rel="stylesheet"][`+e+`]`}function Ff(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function If(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Ld(t,`link`,n),Tt(t),e.head.appendChild(t))}function Lf(e){return`[src="`+Wt(e)+`"]`}function Rf(e){return`script[async]`+e}function zf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Wt(n.href)+`"]`);if(r)return t.instance=r,Tt(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Tt(r),Ld(r,`style`,a),Bf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Nf(n.href);var o=e.querySelector(Pf(a));if(o)return t.state.loading|=4,t.instance=o,Tt(o),o;r=Ff(n),(a=_f.get(a))&&Vf(r,a),o=(e.ownerDocument||e).createElement(`link`),Tt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Ld(o,`link`,r),t.state.loading|=4,Bf(o,n.precedence,e),t.instance=o;case`script`:return o=Lf(n.src),(a=e.querySelector(Rf(o)))?(t.instance=a,Tt(a),a):(r=n,(a=_f.get(o))&&(r=f({},n),Hf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Tt(a),Ld(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Bf(r,n.precedence,e));return t.instance}function Bf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Vf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Hf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Uf=null;function Wf(e,t,n){if(Uf===null){var r=new Map,i=Uf=new Map;i.set(n,r)}else i=Uf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[yt]||a[ft]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Gf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Kf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function qf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Jf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Nf(r.href),a=t.querySelector(Pf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Z.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Tt(a);return}a=t.ownerDocument||t,r=Ff(r),(i=_f.get(i))&&Vf(r,i),a=a.createElement(`link`),Tt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Ld(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Z.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Yf=0;function Xf(e,t){return e.stylesheets&&e.count===0&&Qf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Yf===0&&(Yf=62500*Bd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Yf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Z(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zf=null;function Qf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zf=new Map,t.forEach($f,e),Zf=null,Z.call(e))}function $f(e,t){if(!(t.state.loading&4)){var n=Zf.get(e);if(n)var r=n.get(null);else{n=new Map,Zf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Z.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ep={$$typeof:C,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function tp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tt(0),this.hiddenUpdates=tt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function np(e,t,n,r,i,a,o,s,c,l,u,d){return e=new tp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=di(3,null,null,t),e.current=a,a.stateNode=e,t=sa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},za(a),e}function rp(e){return e?(e=li,e):li}function ip(e,t,n,r,i,a){i=rp(i),r.context===null?r.context=i:r.pendingContext=i,r=Va(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ha(e,r,t),n!==null&&(gu(n,e,t),Ua(n,e,t))}function ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function op(e,t){ap(e,t),(e=e.alternate)&&ap(e,t)}function sp(e){if(e.tag===13||e.tag===31){var t=oi(e,67108864);t!==null&&gu(t,e,67108864),op(e,67108864)}}function cp(e){if(e.tag===13||e.tag===31){var t=mu();t=st(t);var n=oi(e,t);n!==null&&gu(n,e,t),op(e,t)}}var lp=!0;function up(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=2,fp(e,t,n,r)}finally{M.p=a,j.T=i}}function dp(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=8,fp(e,t,n,r)}finally{M.p=a,j.T=i}}function fp(e,t,n,r){if(lp){var i=pp(r);if(i===null)Ed(e,t,r,mp,n),Tp(e,r);else if(Dp(i,e,t,n,r))r.stopPropagation();else if(Tp(e,r),t&4&&-1<wp.indexOf(e)){for(;i!==null;){var a=St(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}ad(a),!(Ll&6)&&(nu=je()+500,od(0,!1))}}break;case 31:case 13:s=oi(a,2),s!==null&&gu(s,a,2),xu(),op(a,2)}if(a=pp(r),a===null&&Ed(e,t,r,mp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ed(e,t,r,null,n)}}function pp(e){return e=cn(e),hp(e)}var mp=null;function hp(e){if(mp=null,e=xt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return mp=e,null}function gp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var _p=!1,vp=null,yp=null,bp=null,xp=new Map,Sp=new Map,Cp=[],wp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Tp(e,t){switch(e){case`focusin`:case`focusout`:vp=null;break;case`dragenter`:case`dragleave`:yp=null;break;case`mouseover`:case`mouseout`:bp=null;break;case`pointerover`:case`pointerout`:xp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Sp.delete(t.pointerId)}}function Ep(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=St(t),t!==null&&sp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Dp(e,t,n,r,i){switch(t){case`focusin`:return vp=Ep(vp,e,t,n,r,i),!0;case`dragenter`:return yp=Ep(yp,e,t,n,r,i),!0;case`mouseover`:return bp=Ep(bp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return xp.set(a,Ep(xp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Sp.set(a,Ep(Sp.get(a)||null,e,t,n,r,i)),!0}return!1}function Op(e){var t=xt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ut(e.priority,function(){cp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ut(e.priority,function(){cp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sn=r,n.target.dispatchEvent(r),sn=null}else return t=St(n),t!==null&&sp(t),e.blockedOn=n,!1;t.shift()}return!0}function Ap(e,t,n){kp(e)&&n.delete(t)}function jp(){_p=!1,vp!==null&&kp(vp)&&(vp=null),yp!==null&&kp(yp)&&(yp=null),bp!==null&&kp(bp)&&(bp=null),xp.forEach(Ap),Sp.forEach(Ap)}function Mp(e,n){e.blockedOn===n&&(e.blockedOn=null,_p||(_p=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,jp)))}var Np=null;function Pp(e){Np!==e&&(Np=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Np===e&&(Np=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(hp(r||n)===null)continue;break}var a=St(n);a!==null&&(e.splice(t,3),t-=3,xs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Fp(e){function t(t){return Mp(t,e)}vp!==null&&Mp(vp,e),yp!==null&&Mp(yp,e),bp!==null&&Mp(bp,e),xp.forEach(t),Sp.forEach(t);for(var n=0;n<Cp.length;n++){var r=Cp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Cp.length&&(n=Cp[0],n.blockedOn===null);)Op(n),n.blockedOn===null&&Cp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[pt]||null;if(typeof a==`function`)o||Pp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[pt]||null)s=o.formAction;else if(hp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Pp(n)}}}function Ip(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Lp(e){this._internalRoot=e}Rp.prototype.render=Lp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;ip(n,mu(),e,t,null,null)},Rp.prototype.unmount=Lp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ip(e.current,2,null,e,null,null),xu(),t[mt]=null}};function Rp(e){this._internalRoot=e}Rp.prototype.unstable_scheduleHydration=function(e){if(e){var t=lt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cp.length&&t!==0&&t<Cp[n].priority;n++);Cp.splice(n,0,e),n===0&&Op(e)}};var zp=n.version;if(zp!==`19.2.4`)throw Error(i(527,zp,`19.2.4`));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var Bp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:j,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Vp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vp.isDisabled&&Vp.supportsFiber)try{Be=Vp.inject(Bp),Ve=Vp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ws,s=Gs,c=Ks;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=np(e,1,!1,null,null,n,r,null,o,s,c,Ip),e[mt]=t.current,wd(e),new Lp(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=u(p(),1),x=y(),S=`modulepreload`,C=function(e){return`/`+e},w={},T=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=C(t,n),t in w)return;w[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:S,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},E=`popstate`;function D(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ee(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return re(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ie(t)}return j(t,n,null,e)}function O(e,t){if(e===!1||e==null)throw Error(t)}function k(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function te(){return Math.random().toString(36).substring(2,10)}function ne(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function re(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?A(t):t,state:n,key:t&&t.key||r||te(),unstable_mask:i}}function ie({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function A(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function j(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=D(e)?e:re(h.location,e,t);n&&n(r,e),l=u()+1;let d=ne(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=D(e)?e:re(h.location,e,t);n&&n(r,e),l=u();let i=ne(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return M(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(E,d),c=e,()=>{i.removeEventListener(E,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function M(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),O(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ie(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function ae(e,t,n=`/`){return oe(e,t,n,!1)}function oe(e,t,n,r){let i=we((typeof t==`string`?A(t):t).pathname||`/`,n);if(i==null)return null;let a=ce(e);ue(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=Ce(i);o=be(a[e],t,r)}return o}function se(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function ce(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;O(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Me([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(O(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ce(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ve(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of le(e.path))a(e,t,!0,n)}),t}function le(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=le(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function ue(e){e.sort((e,t)=>e.score===t.score?ye(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var de=/^:[\w-]+$/,fe=3,pe=2,me=1,he=10,ge=-2,_e=e=>e===`*`;function ve(e,t){let n=e.split(`/`),r=n.length;return n.some(_e)&&(r+=ge),t&&(r+=pe),n.filter(e=>!_e(e)).reduce((e,t)=>e+(de.test(t)?fe:t===``?me:he),r)}function ye(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function be(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=xe({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=xe({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Me([a,u.pathname]),pathnameBase:Ne(Me([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Me([a,u.pathnameBase]))}return o}function xe(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Se(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Se(e,t=!1,n=!0){k(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Ce(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return k(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function we(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Te=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ee(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?A(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?De(n.substring(1),`/`):De(n,t)):a=t,{pathname:a,search:Pe(r),hash:Fe(i)}}function De(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Oe(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ke(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ae(e){let t=ke(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function je(e,t,n,r=!1){let i;typeof e==`string`?i=A(e):(i={...e},O(!i.pathname||!i.pathname.includes(`?`),Oe(`?`,`pathname`,`search`,i)),O(!i.pathname||!i.pathname.includes(`#`),Oe(`#`,`pathname`,`hash`,i)),O(!i.search||!i.search.includes(`#`),Oe(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ee(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Me=e=>e.join(`/`).replace(/\/\/+/g,`/`),Ne=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Pe=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Fe=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ie=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Le(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Re(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var ze=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Be(e,t){let n=e;if(typeof n!=`string`||!Te.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(ze)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=we(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{k(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ve=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ve);var He=[`GET`,...Ve];new Set(He);var Ue=b.createContext(null);Ue.displayName=`DataRouter`;var We=b.createContext(null);We.displayName=`DataRouterState`;var Ge=b.createContext(!1),Ke=b.createContext({isTransitioning:!1});Ke.displayName=`ViewTransition`;var qe=b.createContext(new Map);qe.displayName=`Fetchers`;var Je=b.createContext(null);Je.displayName=`Await`;var Ye=b.createContext(null);Ye.displayName=`Navigation`;var Xe=b.createContext(null);Xe.displayName=`Location`;var Ze=b.createContext({outlet:null,matches:[],isDataRoute:!1});Ze.displayName=`Route`;var Qe=b.createContext(null);Qe.displayName=`RouteError`;var $e=`REACT_ROUTER_ERROR`,et=`REDIRECT`,tt=`ROUTE_ERROR_RESPONSE`;function nt(e){if(e.startsWith(`${$e}:${et}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function rt(e){if(e.startsWith(`${$e}:${tt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ie(t.status,t.statusText,t.data)}catch{}}function it(e,{relative:t}={}){O(at(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=b.useContext(Ye),{hash:i,pathname:a,search:o}=dt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Me([n,a])),r.createHref({pathname:s,search:o,hash:i})}function at(){return b.useContext(Xe)!=null}function ot(){return O(at(),`useLocation() may be used only in the context of a <Router> component.`),b.useContext(Xe).location}var st=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ct(e){b.useContext(Ye).static||b.useLayoutEffect(e)}function lt(){let{isDataRoute:e}=b.useContext(Ze);return e?At():ut()}function ut(){O(at(),`useNavigate() may be used only in the context of a <Router> component.`);let e=b.useContext(Ue),{basename:t,navigator:n}=b.useContext(Ye),{matches:r}=b.useContext(Ze),{pathname:i}=ot(),a=JSON.stringify(Ae(r)),o=b.useRef(!1);return ct(()=>{o.current=!0}),b.useCallback((r,s={})=>{if(k(o.current,st),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=je(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Me([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}b.createContext(null);function dt(e,{relative:t}={}){let{matches:n}=b.useContext(Ze),{pathname:r}=ot(),i=JSON.stringify(Ae(n));return b.useMemo(()=>je(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function ft(e,t){return pt(e,t)}function pt(e,t,n){O(at(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=b.useContext(Ye),{matches:i}=b.useContext(Ze),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Mt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ot(),d;if(t){let e=typeof t==`string`?A(t):t;O(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=ae(e,{pathname:p});k(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),k(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=bt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Me([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Me([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?b.createElement(Xe.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function mt(){let e=kt(),t=Le(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=b.createElement(b.Fragment,null,b.createElement(`p`,null,`💿 Hey developer 👋`),b.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,b.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,b.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),b.createElement(b.Fragment,null,b.createElement(`h2`,null,`Unexpected Application Error!`),b.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?b.createElement(`pre`,{style:i},n):null,o)}var ht=b.createElement(mt,null),gt=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=rt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:b.createElement(Ze.Provider,{value:this.props.routeContext},b.createElement(Qe.Provider,{value:e,children:this.props.component}));return this.context?b.createElement(vt,{error:e},t):t}};gt.contextType=Ge;var _t=new WeakMap;function vt({children:e,error:t}){let{basename:n}=b.useContext(Ye);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=nt(t.digest);if(e){let r=_t.get(t);if(r)throw r;let i=Be(e.location,n);if(ze&&!_t.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw _t.set(t,n),n}return b.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function yt({routeContext:e,match:t,children:n}){let r=b.useContext(Ue);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(Ze.Provider,{value:e},n)}function bt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);O(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Re(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||ht,o&&(s<0&&c===0?(Mt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?b.createElement(n.route.Component,null):n.route.element?n.route.element:e,b.createElement(yt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?b.createElement(gt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function xt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function St(e){let t=b.useContext(Ue);return O(t,xt(e)),t}function Ct(e){let t=b.useContext(We);return O(t,xt(e)),t}function wt(e){let t=b.useContext(Ze);return O(t,xt(e)),t}function Tt(e){let t=wt(e),n=t.matches[t.matches.length-1];return O(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Et(){return Tt(`useRouteId`)}function Dt(){return Ct(`useNavigation`).navigation}function Ot(){let{matches:e,loaderData:t}=Ct(`useMatches`);return b.useMemo(()=>e.map(e=>se(e,t)),[e,t])}function kt(){let e=b.useContext(Qe),t=Ct(`useRouteError`),n=Tt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function At(){let{router:e}=St(`useNavigate`),t=Tt(`useNavigate`),n=b.useRef(!1);return ct(()=>{n.current=!0}),b.useCallback(async(r,i={})=>{k(n.current,st),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var jt={};function Mt(e,t,n){!t&&!jt[e]&&(jt[e]=!0,k(!1,n))}b.useOptimistic,b.memo(Nt);function Nt({routes:e,future:t,state:n,isStatic:r,onError:i}){return pt(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function Pt(e){O(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Ft({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){O(!at(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=b.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=A(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=b.useMemo(()=>{let e=we(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return k(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:b.createElement(Ye.Provider,{value:c},b.createElement(Xe.Provider,{children:t,value:h}))}function It({children:e,location:t}){return ft(Lt(e),t)}b.Component;function Lt(e,t=[]){let n=[];return b.Children.forEach(e,(e,r)=>{if(!b.isValidElement(e))return;let i=[...t,r];if(e.type===b.Fragment){n.push.apply(n,Lt(e.props.children,i));return}O(e.type===Pt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),O(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Lt(e.props.children,i)),n.push(a)}),n}var Rt=`get`,zt=`application/x-www-form-urlencoded`;function Bt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Vt(e){return Bt(e)&&e.tagName.toLowerCase()===`button`}function Ht(e){return Bt(e)&&e.tagName.toLowerCase()===`form`}function Ut(e){return Bt(e)&&e.tagName.toLowerCase()===`input`}function Wt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Gt(e,t){return e.button===0&&(!t||t===`_self`)&&!Wt(e)}var Kt=null;function qt(){if(Kt===null)try{new FormData(document.createElement(`form`),0),Kt=!1}catch{Kt=!0}return Kt}var Jt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Yt(e){return e!=null&&!Jt.has(e)?(k(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zt}"`),null):e}function Xt(e,t){let n,r,i,a,o;if(Ht(e)){let o=e.getAttribute(`action`);r=o?we(o,t):null,n=e.getAttribute(`method`)||Rt,i=Yt(e.getAttribute(`enctype`))||zt,a=new FormData(e)}else if(Vt(e)||Ut(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?we(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Rt,i=Yt(e.getAttribute(`formenctype`))||Yt(o.getAttribute(`enctype`))||zt,a=new FormData(o,e),!qt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Bt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Rt,r=null,i=zt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Zt={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},Qt=/[&><\u2028\u2029]/g;function $t(e){return e.replace(Qt,e=>Zt[e])}function en(e,t){if(e===!1||e==null)throw Error(t)}function tn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&we(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function nn(e,t){if(e.id in t)return t[e.id];try{let n=await T(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rn(e){return e!=null&&typeof e.page==`string`}function an(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function on(e,t,n){return dn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await nn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(an).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function sn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function cn(e,t,{includeHydrateFallback:n}={}){return ln(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function ln(e){return[...new Set(e)]}function un(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function dn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!rn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(un(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function fn(){let e=b.useContext(Ue);return en(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function pn(){let e=b.useContext(We);return en(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var mn=b.createContext(void 0);mn.displayName=`FrameworkContext`;function hn(){let e=b.useContext(mn);return en(e,`You must render this element inside a <HydratedRouter> element`),e}function gn(e,t){let n=b.useContext(mn),[r,i]=b.useState(!1),[a,o]=b.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=b.useRef(null);b.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),b.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:_n(s,p),onBlur:_n(c,m),onMouseEnter:_n(l,p),onMouseLeave:_n(u,m),onTouchStart:_n(d,p)}]:[a,f,{}]:[!1,f,{}]}function _n(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function vn({page:e,...t}){let{router:n}=fn(),r=b.useMemo(()=>ae(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?b.createElement(bn,{page:e,matches:r,...t}):null}function yn(e){let{manifest:t,routeModules:n}=hn(),[r,i]=b.useState([]);return b.useEffect(()=>{let r=!1;return on(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function bn({page:e,matches:t,...n}){let r=ot(),{future:i,manifest:a,routeModules:o}=hn(),{basename:s}=fn(),{loaderData:c,matches:l}=pn(),u=b.useMemo(()=>sn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=b.useMemo(()=>sn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=b.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=tn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=b.useMemo(()=>cn(d,a),[d,a]),m=yn(d);return b.createElement(b.Fragment,null,f.map(e=>b.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>b.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>b.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function xn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}b.Component;var Sn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Sn&&(window.__reactRouterVersion=`7.13.2`)}catch{}function Cn({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=b.useRef();i.current??=ee({window:r,v5Compat:!0});let a=i.current,[o,s]=b.useState({action:a.action,location:a.location}),c=b.useCallback(e=>{n===!1?s(e):b.startTransition(()=>s(e))},[n]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(Ft,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function wn({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=b.useState({action:n.action,location:n.location}),o=b.useCallback(e=>{r===!1?a(e):b.startTransition(()=>a(e))},[r]);return b.useLayoutEffect(()=>n.listen(o),[n,o]),b.createElement(Ft,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}wn.displayName=`unstable_HistoryRouter`;var Tn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,En=b.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=b.useContext(Ye),v=typeof l==`string`&&Tn.test(l),y=Be(l,h);l=y.to;let x=it(l,{relative:r}),S=ot(),C=null;if(o){let e=je(o,[],S.unstable_mask?S.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Me([h,e.pathname])),C=g.createHref(e)}let[w,T,E]=gn(n,p),D=Nn(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function ee(t){e&&e(t),t.defaultPrevented||D(t)}let O=!(y.isExternal||i),k=b.createElement(`a`,{...p,...E,href:(O?C:void 0)||y.absoluteURL||x,onClick:O?ee:e,ref:xn(m,T),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return w&&!v?b.createElement(b.Fragment,null,k,b.createElement(vn,{page:x})):k});En.displayName=`Link`;var Dn=b.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=dt(a,{relative:c.relative}),d=ot(),f=b.useContext(We),{navigator:p,basename:m}=b.useContext(Ye),h=f!=null&&Un(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=we(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return b.createElement(En,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});Dn.displayName=`NavLink`;var On=b.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Rt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=b.useContext(Ye),g=In(),_=Ln(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&Tn.test(s);return b.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?b.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});On.displayName=`Form`;function kn({getKey:e,storageKey:t,...n}){let r=b.useContext(mn),{basename:i}=b.useContext(Ye),a=ot(),o=Ot();Vn({getKey:e,storageKey:t});let s=b.useMemo(()=>{if(!r||!e)return null;let t=Bn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return b.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${$t(JSON.stringify(t||Rn))}, ${$t(JSON.stringify(s))})`}})}kn.displayName=`ScrollRestoration`;function An(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jn(e){let t=b.useContext(Ue);return O(t,An(e)),t}function Mn(e){let t=b.useContext(We);return O(t,An(e)),t}function Nn(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=lt(),d=ot(),f=dt(e,{relative:o});return b.useCallback(p=>{if(Gt(p,t)){p.preventDefault();let t=n===void 0?ie(d)===ie(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?b.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Pn=0,Fn=()=>`__${String(++Pn)}__`;function In(){let{router:e}=jn(`useSubmit`),{basename:t}=b.useContext(Ye),n=Et(),r=e.fetch,i=e.navigate;return b.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=Xt(e,t);a.navigate===!1?await r(a.fetcherKey||Fn(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Ln(e,{relative:t}={}){let{basename:n}=b.useContext(Ye),r=b.useContext(Ze);O(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...dt(e||`.`,{relative:t})},o=ot();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Me([n,a.pathname])),ie(a)}var Rn=`react-router-scroll-positions`,zn={};function Bn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:we(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Vn({getKey:e,storageKey:t}={}){let{router:n}=jn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Mn(`useScrollRestoration`),{basename:a}=b.useContext(Ye),o=ot(),s=Ot(),c=Dt();b.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Hn(b.useCallback(()=>{if(c.state===`idle`){let t=Bn(o,s,a,e);zn[t]=window.scrollY}try{sessionStorage.setItem(t||Rn,JSON.stringify(zn))}catch(e){k(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(b.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Rn);e&&(zn=JSON.parse(e))}catch{}},[t]),b.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(zn,()=>window.scrollY,e?(t,n)=>Bn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),b.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{k(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Hn(e,t){let{capture:n}=t||{};b.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Un(e,{relative:t}={}){let n=b.useContext(Ke);O(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=jn(`useViewTransitionState`),i=dt(e,{relative:t});if(!n.isTransitioning)return!1;let a=we(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=we(n.nextLocation.pathname,r)||n.nextLocation.pathname;return xe(i.pathname,o)!=null||xe(i.pathname,a)!=null}var Wn=s(((e,t)=>{(function(){var e={}.hasOwnProperty;function n(){for(var e=``,t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,r(n)))}return e}function r(t){if(typeof t==`string`||typeof t==`number`)return t;if(typeof t!=`object`)return``;if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes(`[native code]`))return t.toString();var r=``;for(var a in t)e.call(t,a)&&t[a]&&(r=i(r,a));return r}function i(e,t){return t?e?e+` `+t:e+t:e}t!==void 0&&t.exports?(n.default=n,t.exports=n):typeof define==`function`&&typeof define.amd==`object`&&define.amd?define(`classnames`,[],function(){return n}):window.classNames=n})()}));function Gn(){return Gn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gn.apply(null,arguments)}function Kn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}s(((e,t)=>{t.exports=function(e,t,n,r,i,a,o,s){if(!e){var c;if(t===void 0)c=Error(`Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.`);else{var l=[n,r,i,a,o,s],u=0;c=Error(t.replace(/%s/g,function(){return l[u++]})),c.name=`Invariant Violation`}throw c.framesToPop=1,c}}}))();function qn(e){return`default`+e.charAt(0).toUpperCase()+e.substr(1)}function Jn(e){var t=Yn(e,`string`);return typeof t==`symbol`?t:String(t)}function Yn(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Xn(e,t,n){var r=(0,b.useRef)(e!==void 0),i=(0,b.useState)(t),a=i[0],o=i[1],s=e!==void 0,c=r.current;return r.current=s,!s&&c&&a!==t&&o(t),[s?e:a,(0,b.useCallback)(function(e){var t=[...arguments].slice(1);n&&n.apply(void 0,[e].concat(t)),o(e)},[n])]}function Zn(e,t){return Object.keys(t).reduce(function(n,r){var i,a=n,o=a[qn(r)],s=a[r],c=Kn(a,[qn(r),r].map(Jn)),l=t[r],u=Xn(s,o,e[l]),d=u[0],f=u[1];return Gn({},c,(i={},i[r]=d,i[l]=f,i))},e)}function Qn(e,t){return Qn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Qn(e,t)}function $n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Qn(e,t)}function er(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function tr(e){function t(t){return this.constructor.getDerivedStateFromProps(e,t)??null}this.setState(t.bind(this))}function nr(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}er.__suppressDeprecationWarning=!0,tr.__suppressDeprecationWarning=!0,nr.__suppressDeprecationWarning=!0;var rr=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),N=s(((e,t)=>{t.exports=rr()}))(),ir=b.createContext({prefixes:{},breakpoints:[`xxl`,`xl`,`lg`,`md`,`sm`,`xs`],minBreakpoint:`xs`}),{Consumer:ar,Provider:or}=ir;function P(e,t){let{prefixes:n}=(0,b.useContext)(ir);return e||n[t]||t}function sr(){let{breakpoints:e}=(0,b.useContext)(ir);return e}function cr(){let{minBreakpoint:e}=(0,b.useContext)(ir);return e}function lr(){let{dir:e}=(0,b.useContext)(ir);return e===`rtl`}function ur(e){return e&&e.ownerDocument||document}function dr(e){var t=ur(e);return t&&t.defaultView||window}function fr(e,t){return dr(e).getComputedStyle(e,t)}var pr=/([A-Z])/g;function mr(e){return e.replace(pr,`-$1`).toLowerCase()}var hr=/^ms-/;function gr(e){return mr(e).replace(hr,`-ms-`)}var _r=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function vr(e){return!!(e&&_r.test(e))}function yr(e,t){var n=``,r=``;if(typeof t==`string`)return e.style.getPropertyValue(gr(t))||fr(e).getPropertyValue(gr(t));Object.keys(t).forEach(function(i){var a=t[i];!a&&a!==0?e.style.removeProperty(gr(i)):vr(i)?r+=i+`(`+a+`) `:n+=gr(i)+`: `+a+`;`}),r&&(n+=`transform: `+r+`;`),e.style.cssText+=`;`+n}var br=s(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),xr=s(((e,t)=>{var n=br();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),Sr=s(((e,t)=>{t.exports=xr()()})),Cr={disabled:!1},wr=b.createContext(null),Tr=function(e){return e.scrollTop},Er=u(_()),Dr=`unmounted`,Or=`exited`,kr=`entering`,Ar=`entered`,jr=`exiting`,Mr=function(e){$n(t,e);function t(t,n){var r=e.call(this,t,n)||this,i=n,a=i&&!i.isMounting?t.enter:t.appear,o;return r.appearStatus=null,t.in?a?(o=Or,r.appearStatus=kr):o=Ar:o=t.unmountOnExit||t.mountOnEnter?Dr:Or,r.state={status:o},r.nextCallback=null,r}t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===`unmounted`?{status:Or}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==`entering`&&n!==`entered`&&(t=kr):(n===`entering`||n===`entered`)&&(t=jr)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e=this.props.timeout,t=n=r=e,n,r;return e!=null&&typeof e!=`number`&&(t=e.exit,n=e.enter,r=e.appear===void 0?n:e.appear),{exit:t,enter:n,appear:r}},n.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===`entering`){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:Er.default.findDOMNode(this);n&&Tr(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===`exited`&&this.setState({status:Dr})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[Er.default.findDOMNode(this),r],a=i[0],o=i[1],s=this.getTimeouts(),c=r?s.appear:s.enter;if(!e&&!n||Cr.disabled){this.safeSetState({status:Ar},function(){t.props.onEntered(a)});return}this.props.onEnter(a,o),this.safeSetState({status:kr},function(){t.props.onEntering(a,o),t.onTransitionEnd(c,function(){t.safeSetState({status:Ar},function(){t.props.onEntered(a,o)})})})},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:Er.default.findDOMNode(this);if(!t||Cr.disabled){this.safeSetState({status:Or},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:jr},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:Or},function(){e.props.onExited(r)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:Er.default.findDOMNode(this),r=e==null&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=i[0],o=i[1];this.props.addEndListener(a,o)}e!=null&&setTimeout(this.nextCallback,e)},n.render=function(){var e=this.state.status;if(e===`unmounted`)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var r=Kn(t,[`children`,`in`,`mountOnEnter`,`unmountOnExit`,`appear`,`enter`,`exit`,`timeout`,`addEndListener`,`onEnter`,`onEntering`,`onEntered`,`onExit`,`onExiting`,`onExited`,`nodeRef`]);return b.createElement(wr.Provider,{value:null},typeof n==`function`?n(e,r):b.cloneElement(b.Children.only(n),r))},t}(b.Component);Mr.contextType=wr,Mr.propTypes={};function Nr(){}Mr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Nr,onEntering:Nr,onEntered:Nr,onExit:Nr,onExiting:Nr,onExited:Nr},Mr.UNMOUNTED=Dr,Mr.EXITED=Or,Mr.ENTERING=kr,Mr.ENTERED=Ar,Mr.EXITING=jr;function Pr(e){return e.code===`Escape`||e.keyCode===27}function Fr(){let e=`19.2.4`.split(`.`);return{major:+e[0],minor:+e[1],patch:+e[2]}}function Ir(e){if(!e||typeof e==`function`)return null;let{major:t}=Fr();return t>=19?e.props.ref:e.ref}var Lr=!!(typeof window<`u`&&window.document&&window.document.createElement),Rr=!1,zr=!1;try{var Br={get passive(){return Rr=!0},get once(){return zr=Rr=!0}};Lr&&(window.addEventListener(`test`,Br,Br),window.removeEventListener(`test`,Br,!0))}catch{}function Vr(e,t,n,r){if(r&&typeof r!=`boolean`&&!zr){var i=r.once,a=r.capture,o=n;!zr&&i&&(o=n.__once||function e(r){this.removeEventListener(t,e,a),n.call(this,r)},n.__once=o),e.addEventListener(t,o,Rr?r:a)}e.addEventListener(t,n,r)}function Hr(e,t,n,r){var i=r&&typeof r!=`boolean`?r.capture:r;e.removeEventListener(t,n,i),n.__once&&e.removeEventListener(t,n.__once,i)}function Ur(e,t,n,r){return Vr(e,t,n,r),function(){Hr(e,t,n,r)}}function Wr(e,t,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),e){var i=document.createEvent(`HTMLEvents`);i.initEvent(t,n,r),e.dispatchEvent(i)}}function Gr(e){var t=yr(e,`transitionDuration`)||``,n=t.indexOf(`ms`)===-1?1e3:1;return parseFloat(t)*n}function Kr(e,t,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||Wr(e,`transitionend`,!0)},t+n),a=Ur(e,`transitionend`,function(){r=!0},{once:!0});return function(){clearTimeout(i),a()}}function qr(e,t,n,r){n??=Gr(e)||0;var i=Kr(e,n,r),a=Ur(e,`transitionend`,t);return function(){i(),a()}}function Jr(e,t){let n=yr(e,t)||``,r=n.indexOf(`ms`)===-1?1e3:1;return parseFloat(n)*r}function Yr(e,t){let n=qr(e,r=>{r.target===e&&(n(),t(r))},Jr(e,`transitionDuration`)+Jr(e,`transitionDelay`))}function Xr(e){e.offsetHeight}var Zr=e=>!e||typeof e==`function`?e:t=>{e.current=t};function Qr(e,t){let n=Zr(e),r=Zr(t);return e=>{n&&n(e),r&&r(e)}}function $r(e,t){return(0,b.useMemo)(()=>Qr(e,t),[e,t])}function ei(e){return e&&`setState`in e?Er.default.findDOMNode(e):e??null}var ti=b.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:i,onExited:a,addEndListener:o,children:s,childRef:c,...l},u)=>{let d=(0,b.useRef)(null),f=$r(d,c),p=e=>{f(ei(e))},m=e=>t=>{e&&d.current&&e(d.current,t)},h=(0,b.useCallback)(m(e),[e]),g=(0,b.useCallback)(m(t),[t]),_=(0,b.useCallback)(m(n),[n]),v=(0,b.useCallback)(m(r),[r]),y=(0,b.useCallback)(m(i),[i]),x=(0,b.useCallback)(m(a),[a]),S=(0,b.useCallback)(m(o),[o]);return(0,N.jsx)(Mr,{ref:u,...l,onEnter:h,onEntered:_,onEntering:g,onExit:v,onExited:x,onExiting:y,addEndListener:S,nodeRef:d,children:typeof s==`function`?(e,t)=>s(e,{...t,ref:p}):b.cloneElement(s,{ref:p})})});ti.displayName=`TransitionWrapper`;function ni(e){let t=(0,b.useRef)(e);return(0,b.useEffect)(()=>{t.current=e},[e]),t}function ri(e){let t=ni(e);return(0,b.useCallback)(function(...e){return t.current&&t.current(...e)},[t])}var F=u(Wn()),ii=(e=>b.forwardRef((t,n)=>(0,N.jsx)(`div`,{...t,ref:n,className:(0,F.default)(t.className,e)}))),ai=ii(`h4`);ai.displayName=`DivStyledAsH4`;var oi=b.forwardRef(({className:e,bsPrefix:t,as:n=ai,...r},i)=>(t=P(t,`alert-heading`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));oi.displayName=`AlertHeading`;function si(e){let t=(0,b.useRef)(e);return(0,b.useEffect)(()=>{t.current=e},[e]),t}function ci(e){let t=si(e);return(0,b.useCallback)(function(...e){return t.current&&t.current(...e)},[t])}function li(){let e=(0,b.useRef)(!0),t=(0,b.useRef)(()=>e.current);return(0,b.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function ui(e){let t=(0,b.useRef)(null);return(0,b.useEffect)(()=>{t.current=e}),t.current}var di=typeof global<`u`&&global.navigator&&global.navigator.product===`ReactNative`,fi=typeof document<`u`||di?b.useLayoutEffect:b.useEffect,pi=[`as`,`disabled`];function mi(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function hi(e){return!e||e.trim()===`#`}function gi({tagName:e,disabled:t,href:n,target:r,rel:i,role:a,onClick:o,tabIndex:s=0,type:c}){e||=n!=null||r!=null||i!=null?`a`:`button`;let l={tagName:e};if(e===`button`)return[{type:c||`button`,disabled:t},l];let u=r=>{if((t||e===`a`&&hi(n))&&r.preventDefault(),t){r.stopPropagation();return}o?.(r)},d=e=>{e.key===` `&&(e.preventDefault(),u(e))};return e===`a`&&(n||=`#`,t&&(n=void 0)),[{role:a??`button`,disabled:void 0,tabIndex:t?void 0:s,href:n,target:e===`a`?r:void 0,"aria-disabled":t||void 0,rel:e===`a`?i:void 0,onClick:u,onKeyDown:d},l]}var _i=b.forwardRef((e,t)=>{let{as:n,disabled:r}=e,i=mi(e,pi),[a,{tagName:o}]=gi(Object.assign({tagName:n,disabled:r},i));return(0,N.jsx)(o,Object.assign({},i,a,{ref:t}))});_i.displayName=`Button`;var vi=[`onKeyDown`];function yi(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function bi(e){return!e||e.trim()===`#`}var xi=b.forwardRef((e,t)=>{let{onKeyDown:n}=e,r=yi(e,vi),[i]=gi(Object.assign({tagName:`a`},r)),a=ci(e=>{i.onKeyDown(e),n?.(e)});return bi(r.href)||r.role===`button`?(0,N.jsx)(`a`,Object.assign({ref:t},r,i,{onKeyDown:a})):(0,N.jsx)(`a`,Object.assign({ref:t},r,{onKeyDown:n}))});xi.displayName=`Anchor`;var Si=b.forwardRef(({className:e,bsPrefix:t,as:n=xi,...r},i)=>(t=P(t,`alert-link`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));Si.displayName=`AlertLink`;var Ci={[kr]:`show`,[Ar]:`show`},wi=b.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...i},a)=>{let o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},s=(0,b.useCallback)((e,t)=>{Xr(e),r?.(e,t)},[r]);return(0,N.jsx)(ti,{ref:a,addEndListener:Yr,...o,onEnter:s,childRef:Ir(t),children:(r,i)=>b.cloneElement(t,{...i,className:(0,F.default)(`fade`,e,t.props.className,Ci[r],n[r])})})});wi.displayName=`Fade`;var Ti=u(Sr()),Ei={"aria-label":Ti.default.string,onClick:Ti.default.func,variant:Ti.default.oneOf([`white`])},Di=b.forwardRef(({className:e,variant:t,"aria-label":n=`Close`,...r},i)=>(0,N.jsx)(`button`,{ref:i,type:`button`,className:(0,F.default)(`btn-close`,t&&`btn-close-${t}`,e),"aria-label":n,...r}));Di.displayName=`CloseButton`,Di.propTypes=Ei;var Oi=b.forwardRef((e,t)=>{let{bsPrefix:n,show:r=!0,closeLabel:i=`Close alert`,closeVariant:a,className:o,children:s,variant:c=`primary`,onClose:l,dismissible:u,transition:d=wi,...f}=Zn(e,{show:`onClose`}),p=P(n,`alert`),m=ri(e=>{l&&l(!1,e)}),h=d===!0?wi:d,g=(0,N.jsxs)(`div`,{role:`alert`,...h?void 0:f,ref:t,className:(0,F.default)(o,p,c&&`${p}-${c}`,u&&`${p}-dismissible`),children:[u&&(0,N.jsx)(Di,{onClick:m,"aria-label":i,variant:a}),s]});return h?(0,N.jsx)(h,{unmountOnExit:!0,...f,ref:void 0,in:r,children:g}):r?g:null});Oi.displayName=`Alert`;var ki=Object.assign(Oi,{Link:Si,Heading:oi}),I=b.forwardRef(({bsPrefix:e,bg:t=`primary`,pill:n=!1,text:r,className:i,as:a=`span`,...o},s)=>{let c=P(e,`badge`);return(0,N.jsx)(a,{ref:s,...o,className:(0,F.default)(i,c,n&&`rounded-pill`,r&&`text-${r}`,t&&`bg-${t}`)})});I.displayName=`Badge`;var L=b.forwardRef(({as:e,bsPrefix:t,variant:n=`primary`,size:r,active:i=!1,disabled:a=!1,className:o,...s},c)=>{let l=P(t,`btn`),[u,{tagName:d}]=gi({tagName:e,disabled:a,...s});return(0,N.jsx)(d,{...u,...s,ref:c,disabled:a,className:(0,F.default)(o,l,i&&`active`,n&&`${l}-${n}`,r&&`${l}-${r}`,s.href&&a&&`disabled`)})});L.displayName=`Button`;var Ai=b.forwardRef(({className:e,bsPrefix:t,as:n=`div`,...r},i)=>(t=P(t,`card-body`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));Ai.displayName=`CardBody`;var ji=b.forwardRef(({className:e,bsPrefix:t,as:n=`div`,...r},i)=>(t=P(t,`card-footer`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));ji.displayName=`CardFooter`;var Mi=b.createContext(null);Mi.displayName=`CardHeaderContext`;var Ni=b.forwardRef(({bsPrefix:e,className:t,as:n=`div`,...r},i)=>{let a=P(e,`card-header`),o=(0,b.useMemo)(()=>({cardHeaderBsPrefix:a}),[a]);return(0,N.jsx)(Mi.Provider,{value:o,children:(0,N.jsx)(n,{ref:i,...r,className:(0,F.default)(t,a)})})});Ni.displayName=`CardHeader`;var Pi=b.forwardRef(({bsPrefix:e,className:t,variant:n,as:r=`img`,...i},a)=>{let o=P(e,`card-img`);return(0,N.jsx)(r,{ref:a,className:(0,F.default)(n?`${o}-${n}`:o,t),...i})});Pi.displayName=`CardImg`;var Fi=b.forwardRef(({className:e,bsPrefix:t,as:n=`div`,...r},i)=>(t=P(t,`card-img-overlay`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));Fi.displayName=`CardImgOverlay`;var R=b.forwardRef(({className:e,bsPrefix:t,as:n=`a`,...r},i)=>(t=P(t,`card-link`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));R.displayName=`CardLink`;var Ii=ii(`h6`),Li=b.forwardRef(({className:e,bsPrefix:t,as:n=Ii,...r},i)=>(t=P(t,`card-subtitle`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));Li.displayName=`CardSubtitle`;var Ri=b.forwardRef(({className:e,bsPrefix:t,as:n=`p`,...r},i)=>(t=P(t,`card-text`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));Ri.displayName=`CardText`;var zi=ii(`h5`),Bi=b.forwardRef(({className:e,bsPrefix:t,as:n=zi,...r},i)=>(t=P(t,`card-title`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));Bi.displayName=`CardTitle`;var Vi=b.forwardRef(({bsPrefix:e,className:t,bg:n,text:r,border:i,body:a=!1,children:o,as:s=`div`,...c},l)=>{let u=P(e,`card`);return(0,N.jsx)(s,{ref:l,...c,className:(0,F.default)(t,u,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:a?(0,N.jsx)(Ai,{children:o}):o})});Vi.displayName=`Card`;var z=Object.assign(Vi,{Img:Pi,Title:Bi,Subtitle:Li,Body:Ai,Link:R,Text:Ri,Header:Ni,Footer:ji,ImgOverlay:Fi});function Hi(e){let t=(0,b.useRef)(e);return t.current=e,t}function Ui(e){let t=Hi(e);(0,b.useEffect)(()=>()=>t.current(),[])}function Wi(e,t){return b.Children.toArray(e).some(e=>b.isValidElement(e)&&e.type===t)}function Gi({as:e,bsPrefix:t,className:n,...r}){t=P(t,`col`);let i=sr(),a=cr(),o=[],s=[];return i.forEach(e=>{let n=r[e];delete r[e];let i,c,l;typeof n==`object`&&n?{span:i,offset:c,order:l}=n:i=n;let u=e===a?``:`-${e}`;i&&o.push(i===!0?`${t}${u}`:`${t}${u}-${i}`),l!=null&&s.push(`order${u}-${l}`),c!=null&&s.push(`offset${u}-${c}`)}),[{...r,className:(0,F.default)(n,...o,...s)},{as:e,bsPrefix:t,spans:o}]}var B=b.forwardRef((e,t)=>{let[{className:n,...r},{as:i=`div`,bsPrefix:a,spans:o}]=Gi(e);return(0,N.jsx)(i,{...r,ref:t,className:(0,F.default)(n,!o.length&&a)})});B.displayName=`Col`;var Ki=b.forwardRef(({bsPrefix:e,fluid:t=!1,as:n=`div`,className:r,...i},a)=>{let o=P(e,`container`),s=typeof t==`string`?`-${t}`:`-fluid`;return(0,N.jsx)(n,{ref:a,...i,className:(0,F.default)(r,t?`${o}${s}`:o)})});Ki.displayName=`Container`;var qi=Function.prototype.bind.call(Function.prototype.call,[].slice);function Ji(e,t){return qi(e.querySelectorAll(t))}function Yi(){let[,e]=(0,b.useReducer)(e=>e+1,0);return e}function Xi(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}var Zi=s(((e,t)=>{var n=!1,r=function(){};if(n){var i=function(e,t){var n=arguments.length;t=Array(n>1?n-1:0);for(var r=1;r<n;r++)t[r-1]=arguments[r];var i=0,a=`Warning: `+e.replace(/%s/g,function(){return t[i++]});typeof console<`u`&&console.error(a);try{throw Error(a)}catch{}};r=function(e,t,n){var r=arguments.length;n=Array(r>2?r-2:0);for(var a=2;a<r;a++)n[a-2]=arguments[a];if(t===void 0)throw Error("`warning(condition, format, ...args)` requires a warning message argument");e||i.apply(null,[t].concat(n))}}t.exports=r})),Qi=b.createContext(null),$i=(e,t=null)=>e==null?t||null:String(e),ea=b.createContext(null);ea.displayName=`NavContext`;var ta=`data-rr-ui-`,na=`rrUi`;function ra(e){return`${ta}${e}`}function ia(e){return`${na}${e}`}var aa=(0,b.createContext)(Lr?window:void 0);aa.Provider;function oa(){return(0,b.useContext)(aa)}var sa=typeof global<`u`&&global.navigator&&global.navigator.product===`ReactNative`,ca=typeof document<`u`||sa?b.useLayoutEffect:b.useEffect,la=b.createContext(null);la.displayName=`InputGroupContext`;var ua=b.createContext(null);ua.displayName=`NavbarContext`;var da={type:Ti.default.string,tooltip:Ti.default.bool,as:Ti.default.elementType},fa=b.forwardRef(({as:e=`div`,className:t,type:n=`valid`,tooltip:r=!1,...i},a)=>(0,N.jsx)(e,{...i,ref:a,className:(0,F.default)(t,`${n}-${r?`tooltip`:`feedback`}`)}));fa.displayName=`Feedback`,fa.propTypes=da;var pa=b.createContext({}),ma=b.forwardRef(({id:e,bsPrefix:t,className:n,type:r=`checkbox`,isValid:i=!1,isInvalid:a=!1,as:o=`input`,...s},c)=>{let{controlId:l}=(0,b.useContext)(pa);return t=P(t,`form-check-input`),(0,N.jsx)(o,{...s,ref:c,type:r,id:e||l,className:(0,F.default)(n,t,i&&`is-valid`,a&&`is-invalid`)})});ma.displayName=`FormCheckInput`;var ha=b.forwardRef(({bsPrefix:e,className:t,htmlFor:n,...r},i)=>{let{controlId:a}=(0,b.useContext)(pa);return e=P(e,`form-check-label`),(0,N.jsx)(`label`,{...r,ref:i,htmlFor:n||a,className:(0,F.default)(t,e)})});ha.displayName=`FormCheckLabel`;var ga=b.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:a=!1,isValid:o=!1,isInvalid:s=!1,feedbackTooltip:c=!1,feedback:l,feedbackType:u,className:d,style:f,title:p=``,type:m=`checkbox`,label:h,children:g,as:_=`input`,...v},y)=>{t=P(t,`form-check`),n=P(n,`form-switch`);let{controlId:x}=(0,b.useContext)(pa),S=(0,b.useMemo)(()=>({controlId:e||x}),[x,e]),C=!g&&h!=null&&h!==!1||Wi(g,ha),w=(0,N.jsx)(ma,{...v,type:m===`switch`?`checkbox`:m,ref:y,isValid:o,isInvalid:s,disabled:a,as:_});return(0,N.jsx)(pa.Provider,{value:S,children:(0,N.jsx)(`div`,{style:f,className:(0,F.default)(d,C&&t,r&&`${t}-inline`,i&&`${t}-reverse`,m===`switch`&&n),children:g||(0,N.jsxs)(N.Fragment,{children:[w,C&&(0,N.jsx)(ha,{title:p,children:h}),l&&(0,N.jsx)(fa,{type:u,tooltip:c,children:l})]})})})});ga.displayName=`FormCheck`;var _a=Object.assign(ga,{Input:ma,Label:ha});Zi();var va=b.forwardRef(({bsPrefix:e,type:t,size:n,htmlSize:r,id:i,className:a,isValid:o=!1,isInvalid:s=!1,plaintext:c,readOnly:l,as:u=`input`,...d},f)=>{let{controlId:p}=(0,b.useContext)(pa);return e=P(e,`form-control`),(0,N.jsx)(u,{...d,type:t,size:r,ref:f,readOnly:l,id:i||p,className:(0,F.default)(a,c?`${e}-plaintext`:e,n&&`${e}-${n}`,t===`color`&&`${e}-color`,o&&`is-valid`,s&&`is-invalid`)})});va.displayName=`FormControl`;var ya=Object.assign(va,{Feedback:fa}),ba=b.forwardRef(({className:e,bsPrefix:t,as:n=`div`,...r},i)=>(t=P(t,`form-floating`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));ba.displayName=`FormFloating`;var xa=b.forwardRef(({controlId:e,as:t=`div`,...n},r)=>{let i=(0,b.useMemo)(()=>({controlId:e}),[e]);return(0,N.jsx)(pa.Provider,{value:i,children:(0,N.jsx)(t,{...n,ref:r})})});xa.displayName=`FormGroup`;var Sa=b.forwardRef(({as:e=`label`,bsPrefix:t,column:n=!1,visuallyHidden:r=!1,className:i,htmlFor:a,...o},s)=>{let{controlId:c}=(0,b.useContext)(pa);t=P(t,`form-label`);let l=`col-form-label`;typeof n==`string`&&(l=`${l} ${l}-${n}`);let u=(0,F.default)(i,t,r&&`visually-hidden`,n&&l);return a||=c,n?(0,N.jsx)(B,{ref:s,as:`label`,className:u,htmlFor:a,...o}):(0,N.jsx)(e,{ref:s,className:u,htmlFor:a,...o})});Sa.displayName=`FormLabel`;var Ca=b.forwardRef(({bsPrefix:e,className:t,id:n,...r},i)=>{let{controlId:a}=(0,b.useContext)(pa);return e=P(e,`form-range`),(0,N.jsx)(`input`,{...r,type:`range`,ref:i,className:(0,F.default)(t,e),id:n||a})});Ca.displayName=`FormRange`;var wa=b.forwardRef(({bsPrefix:e,size:t,htmlSize:n,className:r,isValid:i=!1,isInvalid:a=!1,id:o,...s},c)=>{let{controlId:l}=(0,b.useContext)(pa);return e=P(e,`form-select`),(0,N.jsx)(`select`,{...s,size:n,ref:c,className:(0,F.default)(r,e,t&&`${e}-${t}`,i&&`is-valid`,a&&`is-invalid`),id:o||l})});wa.displayName=`FormSelect`;var Ta=b.forwardRef(({bsPrefix:e,className:t,as:n=`small`,muted:r,...i},a)=>(e=P(e,`form-text`),(0,N.jsx)(n,{...i,ref:a,className:(0,F.default)(t,e,r&&`text-muted`)})));Ta.displayName=`FormText`;var Ea=b.forwardRef((e,t)=>(0,N.jsx)(_a,{...e,ref:t,type:`switch`}));Ea.displayName=`Switch`;var Da=Object.assign(Ea,{Input:_a.Input,Label:_a.Label}),Oa=b.forwardRef(({bsPrefix:e,className:t,children:n,controlId:r,label:i,...a},o)=>(e=P(e,`form-floating`),(0,N.jsxs)(xa,{ref:o,className:(0,F.default)(t,e),controlId:r,...a,children:[n,(0,N.jsx)(`label`,{htmlFor:r,children:i})]})));Oa.displayName=`FloatingLabel`;var ka={_ref:Ti.default.any,validated:Ti.default.bool,as:Ti.default.elementType},Aa=b.forwardRef(({className:e,validated:t,as:n=`form`,...r},i)=>(0,N.jsx)(n,{...r,ref:i,className:(0,F.default)(e,t&&`was-validated`)}));Aa.displayName=`Form`,Aa.propTypes=ka;var V=Object.assign(Aa,{Group:xa,Control:ya,Floating:ba,Check:_a,Switch:Da,Label:Sa,Text:Ta,Range:Ca,Select:wa,FloatingLabel:Oa}),ja=b.forwardRef(({className:e,bsPrefix:t,as:n=`span`,...r},i)=>(t=P(t,`input-group-text`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));ja.displayName=`InputGroupText`;var Ma=e=>(0,N.jsx)(ja,{children:(0,N.jsx)(ma,{type:`checkbox`,...e})}),Na=e=>(0,N.jsx)(ja,{children:(0,N.jsx)(ma,{type:`radio`,...e})}),Pa=b.forwardRef(({bsPrefix:e,size:t,hasValidation:n,className:r,as:i=`div`,...a},o)=>{e=P(e,`input-group`);let s=(0,b.useMemo)(()=>({}),[]);return(0,N.jsx)(la.Provider,{value:s,children:(0,N.jsx)(i,{ref:o,...a,className:(0,F.default)(r,e,t&&`${e}-${t}`,n&&`has-validation`)})})});Pa.displayName=`InputGroup`;var Fa=Object.assign(Pa,{Text:ja,Radio:Na,Checkbox:Ma}),Ia=e=>!e||typeof e==`function`?e:t=>{e.current=t};function La(e,t){let n=Ia(e),r=Ia(t);return e=>{n&&n(e),r&&r(e)}}function Ra(e,t){return(0,b.useMemo)(()=>La(e,t),[e,t])}var za=b.createContext(null),Ba=[`as`,`active`,`eventKey`];function Va(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Ha({key:e,onClick:t,active:n,id:r,role:i,disabled:a}){let o=(0,b.useContext)(Qi),s=(0,b.useContext)(ea),c=(0,b.useContext)(za),l=n,u={role:i};if(s){!i&&s.role===`tablist`&&(u.role=`tab`);let t=s.getControllerId(e??null),a=s.getControlledId(e??null);u[ra(`event-key`)]=e,u.id=t||r,l=n==null&&e!=null?s.activeKey===e:n,(l||!(c!=null&&c.unmountOnExit)&&!(c!=null&&c.mountOnEnter))&&(u[`aria-controls`]=a)}return u.role===`tab`&&(u[`aria-selected`]=l,l||(u.tabIndex=-1),a&&(u.tabIndex=-1,u[`aria-disabled`]=!0)),u.onClick=ci(n=>{a||(t?.(n),e!=null&&o&&!n.isPropagationStopped()&&o(e,n))}),[u,{isActive:l}]}var Ua=b.forwardRef((e,t)=>{let{as:n=_i,active:r,eventKey:i}=e,a=Va(e,Ba),[o,s]=Ha(Object.assign({key:$i(i,a.href),active:r},a));return o[ra(`active`)]=s.isActive,(0,N.jsx)(n,Object.assign({},a,o,{ref:t}))});Ua.displayName=`NavItem`;var Wa=[`as`,`onSelect`,`activeKey`,`role`,`onKeyDown`];function Ga(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var Ka=()=>{},qa=ra(`event-key`),Ja=b.forwardRef((e,t)=>{let{as:n=`div`,onSelect:r,activeKey:i,role:a,onKeyDown:o}=e,s=Ga(e,Wa),c=Yi(),l=(0,b.useRef)(!1),u=(0,b.useContext)(Qi),d=(0,b.useContext)(za),f,p;d&&(a||=`tablist`,i=d.activeKey,f=d.getControlledId,p=d.getControllerId);let m=(0,b.useRef)(null),h=e=>{let t=m.current;if(!t)return null;let n=Ji(t,`[${qa}]:not([aria-disabled=true])`),r=t.querySelector(`[aria-selected=true]`);if(!r||r!==document.activeElement)return null;let i=n.indexOf(r);if(i===-1)return null;let a=i+e;return a>=n.length&&(a=0),a<0&&(a=n.length-1),n[a]},g=(e,t)=>{e!=null&&(r?.(e,t),u?.(e,t))},_=e=>{if(o?.(e),!d)return;let t;switch(e.key){case`ArrowLeft`:case`ArrowUp`:t=h(-1);break;case`ArrowRight`:case`ArrowDown`:t=h(1);break;default:return}t&&(e.preventDefault(),g(t.dataset[ia(`EventKey`)]||null,e),l.current=!0,c())};(0,b.useEffect)(()=>{m.current&&l.current&&m.current.querySelector(`[${qa}][aria-selected=true]`)?.focus(),l.current=!1});let v=Ra(t,m);return(0,N.jsx)(Qi.Provider,{value:g,children:(0,N.jsx)(ea.Provider,{value:{role:a,activeKey:$i(i),getControlledId:f||Ka,getControllerId:p||Ka},children:(0,N.jsx)(n,Object.assign({},s,{onKeyDown:_,ref:v,role:a}))})})});Ja.displayName=`Nav`;var Ya=Object.assign(Ja,{Item:Ua}),Xa;function Za(e){if((!Xa&&Xa!==0||e)&&Lr){var t=document.createElement(`div`);t.style.position=`absolute`,t.style.top=`-9999px`,t.style.width=`50px`,t.style.height=`50px`,t.style.overflow=`scroll`,document.body.appendChild(t),Xa=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Xa}function Qa(){return(0,b.useState)(null)}function $a(e){e===void 0&&(e=ur());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function eo(e){let t=(0,b.useRef)(e);return t.current=e,t}function to(e){let t=eo(e);(0,b.useEffect)(()=>()=>t.current(),[])}function no(e=document){let t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}var ro=ra(`modal-open`),io=class{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return no(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){let t={overflow:`hidden`},n=this.isRTL?`paddingLeft`:`paddingRight`,r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(yr(r,n)||`0`,10)+e.scrollBarWidth}px`),r.setAttribute(ro,``),yr(r,t)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){let t=this.getElement();t.removeAttribute(ro),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return t!==-1||(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),t!==0)?t:(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state),t)}remove(e){let t=this.modals.indexOf(e);t!==-1&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}},ao=(e,t)=>Lr?e==null?(t||ur()).body:(typeof e==`function`&&(e=e()),e&&`current`in e&&(e=e.current),e&&(`nodeType`in e||e.getBoundingClientRect)?e:null):null;function oo(e,t){let n=oa(),[r,i]=(0,b.useState)(()=>ao(e,n?.document));if(!r){let t=ao(e);t&&i(t)}return(0,b.useEffect)(()=>{t&&r&&t(r)},[t,r]),(0,b.useEffect)(()=>{let t=ao(e);t!==r&&i(t)},[e,r]),r}function so({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:i}){let a=(0,b.useRef)(null),o=(0,b.useRef)(t),s=ci(n);(0,b.useEffect)(()=>{t?o.current=!0:s(a.current)},[t,s]);let c=(0,b.cloneElement)(e,{ref:Ra(a,Ir(e))});return t?c:i||!o.current&&r?null:c}var co=[`onEnter`,`onEntering`,`onEntered`,`onExit`,`onExiting`,`onExited`,`addEndListener`,`children`];function lo(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function uo(e){let{onEnter:t,onEntering:n,onEntered:r,onExit:i,onExiting:a,onExited:o,addEndListener:s,children:c}=e,l=lo(e,co),u=(0,b.useRef)(null),d=Ra(u,Ir(c)),f=e=>t=>{e&&u.current&&e(u.current,t)},p=(0,b.useCallback)(f(t),[t]),m=(0,b.useCallback)(f(n),[n]),h=(0,b.useCallback)(f(r),[r]),g=(0,b.useCallback)(f(i),[i]),_=(0,b.useCallback)(f(a),[a]),v=(0,b.useCallback)(f(o),[o]),y=(0,b.useCallback)(f(s),[s]);return Object.assign({},l,{nodeRef:u},t&&{onEnter:p},n&&{onEntering:m},r&&{onEntered:h},i&&{onExit:g},a&&{onExiting:_},o&&{onExited:v},s&&{addEndListener:y},{children:typeof c==`function`?(e,t)=>c(e,Object.assign({},t,{ref:d})):(0,b.cloneElement)(c,{ref:d})})}var H=[`component`];function fo(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var po=b.forwardRef((e,t)=>{let{component:n}=e,r=uo(fo(e,H));return(0,N.jsx)(n,Object.assign({ref:t},r))});function mo({in:e,onTransition:t}){let n=(0,b.useRef)(null),r=(0,b.useRef)(!0),i=ci(t);return fi(()=>{if(!n.current)return;let t=!1;return i({in:e,element:n.current,initial:r.current,isStale:()=>t}),()=>{t=!0}},[e,i]),fi(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function ho({children:e,in:t,onExited:n,onEntered:r,transition:i}){let[a,o]=(0,b.useState)(!t);t&&a&&o(!1);let s=Ra(mo({in:!!t,onTransition:e=>{Promise.resolve(i(e)).then(()=>{e.isStale()||(e.in?r?.(e.element,e.initial):(o(!0),n?.(e.element)))},t=>{throw e.in||o(!0),t})}}),Ir(e));return a&&!t?null:(0,b.cloneElement)(e,{ref:s})}function go(e,t,n){return e?(0,N.jsx)(po,Object.assign({},n,{component:e})):t?(0,N.jsx)(ho,Object.assign({},n,{transition:t})):(0,N.jsx)(so,Object.assign({},n))}var _o=`show.role.className.style.children.backdrop.keyboard.onBackdropClick.onEscapeKeyDown.transition.runTransition.backdropTransition.runBackdropTransition.autoFocus.enforceFocus.restoreFocus.restoreFocusOptions.renderDialog.renderBackdrop.manager.container.onShow.onHide.onExit.onExited.onExiting.onEnter.onEntering.onEntered`.split(`.`);function vo(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var yo;function bo(e){return yo||=new io({ownerDocument:e?.document}),yo}function xo(e){let t=oa(),n=e||bo(t),r=(0,b.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:(0,b.useCallback)(e=>{r.current.dialog=e},[]),setBackdropRef:(0,b.useCallback)(e=>{r.current.backdrop=e},[])})}var So=(0,b.forwardRef)((e,t)=>{let{show:n=!1,role:r=`dialog`,className:i,style:a,children:o,backdrop:s=!0,keyboard:c=!0,onBackdropClick:l,onEscapeKeyDown:u,transition:d,runTransition:f,backdropTransition:p,runBackdropTransition:m,autoFocus:h=!0,enforceFocus:g=!0,restoreFocus:_=!0,restoreFocusOptions:v,renderDialog:y,renderBackdrop:x=e=>(0,N.jsx)(`div`,Object.assign({},e)),manager:S,container:C,onShow:w,onHide:T=()=>{},onExit:E,onExited:D,onExiting:ee,onEnter:O,onEntering:k,onEntered:te}=e,ne=vo(e,_o),re=oa(),ie=oo(C),A=xo(S),j=li(),M=ui(n),[ae,oe]=(0,b.useState)(!n),se=(0,b.useRef)(null);(0,b.useImperativeHandle)(t,()=>A,[A]),Lr&&!M&&n&&(se.current=$a(re?.document)),n&&ae&&oe(!1);let ce=ci(()=>{if(A.add(),me.current=Ur(document,`keydown`,fe),pe.current=Ur(document,`focus`,()=>setTimeout(ue),!0),w&&w(),h){let e=$a(A.dialog?.ownerDocument??re?.document);A.dialog&&e&&!Xi(A.dialog,e)&&(se.current=e,A.dialog.focus())}}),le=ci(()=>{if(A.remove(),me.current==null||me.current(),pe.current==null||pe.current(),_){var e;(e=se.current)==null||e.focus==null||e.focus(v),se.current=null}});(0,b.useEffect)(()=>{!n||!ie||ce()},[n,ie,ce]),(0,b.useEffect)(()=>{ae&&le()},[ae,le]),to(()=>{le()});let ue=ci(()=>{if(!g||!j()||!A.isTopModal())return;let e=$a(re?.document);A.dialog&&e&&!Xi(A.dialog,e)&&A.dialog.focus()}),de=ci(e=>{e.target===e.currentTarget&&(l?.(e),s===!0&&T())}),fe=ci(e=>{c&&Pr(e)&&A.isTopModal()&&(u?.(e),e.defaultPrevented||T())}),pe=(0,b.useRef)(),me=(0,b.useRef)(),he=(...e)=>{oe(!0),D?.(...e)};if(!ie)return null;let ge=Object.assign({role:r,ref:A.setDialogRef,"aria-modal":r===`dialog`?!0:void 0},ne,{style:a,className:i,tabIndex:-1}),_e=y?y(ge):(0,N.jsx)(`div`,Object.assign({},ge,{children:b.cloneElement(o,{role:`document`})}));_e=go(d,f,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:E,onExiting:ee,onExited:he,onEnter:O,onEntering:k,onEntered:te,children:_e});let ve=null;return s&&(ve=x({ref:A.setBackdropRef,onClick:de}),ve=go(p,m,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:ve})),(0,N.jsx)(N.Fragment,{children:Er.createPortal((0,N.jsxs)(N.Fragment,{children:[ve,_e]}),ie)})});So.displayName=`Modal`;var Co=Object.assign(So,{Manager:io});function wo(e,t){return e.classList?!!t&&e.classList.contains(t):(` `+(e.className.baseVal||e.className)+` `).indexOf(` `+t+` `)!==-1}function To(e,t){e.classList?e.classList.add(t):wo(e,t)||(typeof e.className==`string`?e.className=e.className+` `+t:e.setAttribute(`class`,(e.className&&e.className.baseVal||``)+` `+t))}function Eo(e,t){return e.replace(RegExp(`(^|\\s)`+t+`(?:\\s|$)`,`g`),`$1`).replace(/\s+/g,` `).replace(/^\s*|\s*$/g,``)}function Do(e,t){e.classList?e.classList.remove(t):typeof e.className==`string`?e.className=Eo(e.className,t):e.setAttribute(`class`,Eo(e.className&&e.className.baseVal||``,t))}var Oo={FIXED_CONTENT:`.fixed-top, .fixed-bottom, .is-fixed, .sticky-top`,STICKY_CONTENT:`.sticky-top`,NAVBAR_TOGGLER:`.navbar-toggler`},ko=class extends io{adjustAndStore(e,t,n){let r=t.style[e];t.dataset[e]=r,yr(t,{[e]:`${parseFloat(yr(t,e))+n}px`})}restore(e,t){let n=t.dataset[e];n!==void 0&&(delete t.dataset[e],yr(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);let t=this.getElement();if(To(t,`modal-open`),!e.scrollBarWidth)return;let n=this.isRTL?`paddingLeft`:`paddingRight`,r=this.isRTL?`marginLeft`:`marginRight`;Ji(t,Oo.FIXED_CONTENT).forEach(t=>this.adjustAndStore(n,t,e.scrollBarWidth)),Ji(t,Oo.STICKY_CONTENT).forEach(t=>this.adjustAndStore(r,t,-e.scrollBarWidth)),Ji(t,Oo.NAVBAR_TOGGLER).forEach(t=>this.adjustAndStore(r,t,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);let t=this.getElement();Do(t,`modal-open`);let n=this.isRTL?`paddingLeft`:`paddingRight`,r=this.isRTL?`marginLeft`:`marginRight`;Ji(t,Oo.FIXED_CONTENT).forEach(e=>this.restore(n,e)),Ji(t,Oo.STICKY_CONTENT).forEach(e=>this.restore(r,e)),Ji(t,Oo.NAVBAR_TOGGLER).forEach(e=>this.restore(r,e))}},Ao;function jo(e){return Ao||=new ko(e),Ao}var Mo=b.forwardRef(({className:e,bsPrefix:t,as:n=`div`,...r},i)=>(t=P(t,`modal-body`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));Mo.displayName=`ModalBody`;var No=b.createContext({onHide(){}}),Po=b.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:r,size:i,fullscreen:a,children:o,scrollable:s,...c},l)=>{e=P(e,`modal`);let u=`${e}-dialog`,d=typeof a==`string`?`${e}-fullscreen-${a}`:`${e}-fullscreen`;return(0,N.jsx)(`div`,{...c,ref:l,className:(0,F.default)(u,t,i&&`${e}-${i}`,r&&`${u}-centered`,s&&`${u}-scrollable`,a&&d),children:(0,N.jsx)(`div`,{className:(0,F.default)(`${e}-content`,n),children:o})})});Po.displayName=`ModalDialog`;var Fo=b.forwardRef(({className:e,bsPrefix:t,as:n=`div`,...r},i)=>(t=P(t,`modal-footer`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));Fo.displayName=`ModalFooter`;var Io=b.forwardRef(({closeLabel:e=`Close`,closeVariant:t,closeButton:n=!1,onHide:r,children:i,...a},o)=>{let s=(0,b.useContext)(No),c=ri(()=>{s?.onHide(),r?.()});return(0,N.jsxs)(`div`,{ref:o,...a,children:[i,n&&(0,N.jsx)(Di,{"aria-label":e,variant:t,onClick:c})]})});Io.displayName=`AbstractModalHeader`;var Lo=b.forwardRef(({bsPrefix:e,className:t,closeLabel:n=`Close`,closeButton:r=!1,...i},a)=>(e=P(e,`modal-header`),(0,N.jsx)(Io,{ref:a,...i,className:(0,F.default)(t,e),closeLabel:n,closeButton:r})));Lo.displayName=`ModalHeader`;var Ro=ii(`h4`),zo=b.forwardRef(({className:e,bsPrefix:t,as:n=Ro,...r},i)=>(t=P(t,`modal-title`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));zo.displayName=`ModalTitle`;function Bo(e){return(0,N.jsx)(wi,{...e,timeout:null})}function Vo(e){return(0,N.jsx)(wi,{...e,timeout:null})}var Ho=b.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:r,contentClassName:i,children:a,dialogAs:o=Po,"data-bs-theme":s,"aria-labelledby":c,"aria-describedby":l,"aria-label":u,show:d=!1,animation:f=!0,backdrop:p=!0,keyboard:m=!0,onEscapeKeyDown:h,onShow:g,onHide:_,container:v,autoFocus:y=!0,enforceFocus:x=!0,restoreFocus:S=!0,restoreFocusOptions:C,onEntered:w,onExit:T,onExiting:E,onEnter:D,onEntering:ee,onExited:O,backdropClassName:k,manager:te,...ne},re)=>{let[ie,A]=(0,b.useState)({}),[j,M]=(0,b.useState)(!1),ae=(0,b.useRef)(!1),oe=(0,b.useRef)(!1),se=(0,b.useRef)(null),[ce,le]=Qa(),ue=$r(re,le),de=ri(_),fe=lr();e=P(e,`modal`);let pe=(0,b.useMemo)(()=>({onHide:de}),[de]);function me(){return te||jo({isRTL:fe})}function he(e){if(!Lr)return;let t=me().getScrollbarWidth()>0,n=e.scrollHeight>ur(e).documentElement.clientHeight;A({paddingRight:t&&!n?Za():void 0,paddingLeft:!t&&n?Za():void 0})}let ge=ri(()=>{ce&&he(ce.dialog)});Ui(()=>{Hr(window,`resize`,ge),se.current==null||se.current()});let _e=()=>{ae.current=!0},ve=e=>{ae.current&&ce&&e.target===ce.dialog&&(oe.current=!0),ae.current=!1},ye=()=>{M(!0),se.current=qr(ce.dialog,()=>{M(!1)})},be=e=>{e.target===e.currentTarget&&ye()},xe=e=>{if(p===`static`){be(e);return}if(oe.current||e.target!==e.currentTarget){oe.current=!1;return}_?.()},Se=e=>{m?h?.(e):(e.preventDefault(),p===`static`&&ye())},Ce=(e,t)=>{e&&he(e),D?.(e,t)},we=e=>{se.current==null||se.current(),T?.(e)},Te=(e,t)=>{ee?.(e,t),Vr(window,`resize`,ge)},Ee=e=>{e&&(e.style.display=``),O?.(e),Hr(window,`resize`,ge)},De=(0,b.useCallback)(t=>(0,N.jsx)(`div`,{...t,className:(0,F.default)(`${e}-backdrop`,k,!f&&`show`)}),[f,k,e]),Oe={...n,...ie};return Oe.display=`block`,(0,N.jsx)(No.Provider,{value:pe,children:(0,N.jsx)(Co,{show:d,ref:ue,backdrop:p,container:v,keyboard:!0,autoFocus:y,enforceFocus:x,restoreFocus:S,restoreFocusOptions:C,onEscapeKeyDown:Se,onShow:g,onHide:_,onEnter:Ce,onEntering:Te,onEntered:w,onExit:we,onExiting:E,onExited:Ee,manager:me(),transition:f?Bo:void 0,backdropTransition:f?Vo:void 0,renderBackdrop:De,renderDialog:n=>(0,N.jsx)(`div`,{role:`dialog`,...n,style:Oe,className:(0,F.default)(t,e,j&&`${e}-static`,!f&&`show`),onClick:p?xe:void 0,onMouseUp:ve,"data-bs-theme":s,"aria-label":u,"aria-labelledby":c,"aria-describedby":l,children:(0,N.jsx)(o,{...ne,onMouseDown:_e,className:r,contentClassName:i,children:a})})})})});Ho.displayName=`Modal`;var U=Object.assign(Ho,{Body:Mo,Header:Lo,Title:zo,Footer:Fo,Dialog:Po,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),Uo=b.forwardRef(({className:e,bsPrefix:t,as:n=`div`,...r},i)=>(t=P(t,`nav-item`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));Uo.displayName=`NavItem`;var Wo=b.forwardRef(({bsPrefix:e,className:t,as:n=xi,active:r,eventKey:i,disabled:a=!1,...o},s)=>{e=P(e,`nav-link`);let[c,l]=Ha({key:$i(i,o.href),active:r,disabled:a,...o});return(0,N.jsx)(n,{...o,...c,ref:s,disabled:a,className:(0,F.default)(t,e,a&&`disabled`,l.isActive&&`active`)})});Wo.displayName=`NavLink`;var Go=b.forwardRef((e,t)=>{let{as:n=`div`,bsPrefix:r,variant:i,fill:a=!1,justify:o=!1,navbar:s,navbarScroll:c,className:l,activeKey:u,...d}=Zn(e,{activeKey:`onSelect`}),f=P(r,`nav`),p,m,h=!1,g=(0,b.useContext)(ua),_=(0,b.useContext)(Mi);return g?(p=g.bsPrefix,h=s??!0):_&&({cardHeaderBsPrefix:m}=_),(0,N.jsx)(Ya,{as:n,ref:t,activeKey:u,className:(0,F.default)(l,{[f]:!h,[`${p}-nav`]:h,[`${p}-nav-scroll`]:h&&c,[`${m}-${i}`]:!!m,[`${f}-${i}`]:!!i,[`${f}-fill`]:a,[`${f}-justified`]:o}),...d})});Go.displayName=`Nav`;var Ko=Object.assign(Go,{Item:Uo,Link:Wo}),qo=new WeakMap,Jo=(e,t)=>{if(!e||!t)return;let n=qo.get(t)||new Map;qo.set(t,n);let r=n.get(e);return r||(r=t.matchMedia(e),r.refCount=0,n.set(r.media,r)),r};function Yo(e,t=typeof window>`u`?void 0:window){let n=Jo(e,t),[r,i]=(0,b.useState)(()=>n?n.matches:!1);return ca(()=>{let n=Jo(e,t);if(!n)return i(!1);let r=qo.get(t),a=()=>{i(n.matches)};return n.refCount++,n.addListener(a),a(),()=>{n.removeListener(a),n.refCount--,n.refCount<=0&&r?.delete(n.media),n=void 0}},[e]),r}function Xo(e){let t=Object.keys(e);function n(e,t){return e===t?t:e?`${e} and ${t}`:t}function r(e){return t[Math.min(t.indexOf(e)+1,t.length-1)]}function i(t){let n=e[r(t)];return n=typeof n==`number`?`${n-.2}px`:`calc(${n} - 0.2px)`,`(max-width: ${n})`}function a(t){let n=e[t];return typeof n==`number`&&(n=`${n}px`),`(min-width: ${n})`}function o(e,t,r){let o;return typeof e==`object`?(o=e,r=t,t=!0):(t||=!0,o={[e]:t}),Yo((0,b.useMemo)(()=>Object.entries(o).reduce((e,[t,r])=>((r===`up`||r===!0)&&(e=n(e,a(t))),(r===`down`||r===!0)&&(e=n(e,i(t))),e),``),[JSON.stringify(o)]),r)}return o}var Zo=Xo({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Qo=b.forwardRef(({className:e,bsPrefix:t,as:n=`div`,...r},i)=>(t=P(t,`offcanvas-body`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));Qo.displayName=`OffcanvasBody`;var $o={[kr]:`show`,[Ar]:`show`},es=b.forwardRef(({bsPrefix:e,className:t,children:n,in:r=!1,mountOnEnter:i=!1,unmountOnExit:a=!1,appear:o=!1,...s},c)=>(e=P(e,`offcanvas`),(0,N.jsx)(ti,{ref:c,addEndListener:Yr,in:r,mountOnEnter:i,unmountOnExit:a,appear:o,...s,childRef:Ir(n),children:(r,i)=>b.cloneElement(n,{...i,className:(0,F.default)(t,n.props.className,(r===`entering`||r===`exiting`)&&`${e}-toggling`,$o[r])})})));es.displayName=`OffcanvasToggling`;var ts=b.forwardRef(({bsPrefix:e,className:t,closeLabel:n=`Close`,closeButton:r=!1,...i},a)=>(e=P(e,`offcanvas-header`),(0,N.jsx)(Io,{ref:a,...i,className:(0,F.default)(t,e),closeLabel:n,closeButton:r})));ts.displayName=`OffcanvasHeader`;var ns=ii(`h5`),rs=b.forwardRef(({className:e,bsPrefix:t,as:n=ns,...r},i)=>(t=P(t,`offcanvas-title`),(0,N.jsx)(n,{ref:i,className:(0,F.default)(e,t),...r})));rs.displayName=`OffcanvasTitle`;function is(e){return(0,N.jsx)(es,{...e})}function as(e){return(0,N.jsx)(wi,{...e})}var os=b.forwardRef(({bsPrefix:e,className:t,children:n,"aria-labelledby":r,placement:i=`start`,responsive:a,show:o=!1,backdrop:s=!0,keyboard:c=!0,scroll:l=!1,onEscapeKeyDown:u,onShow:d,onHide:f,container:p,autoFocus:m=!0,enforceFocus:h=!0,restoreFocus:g=!0,restoreFocusOptions:_,onEntered:v,onExit:y,onExiting:x,onEnter:S,onEntering:C,onExited:w,backdropClassName:T,manager:E,renderStaticNode:D=!1,...ee},O)=>{let k=(0,b.useRef)();e=P(e,`offcanvas`);let[te,ne]=(0,b.useState)(!1),re=ri(f),ie=Zo(a||`xs`,`up`);(0,b.useEffect)(()=>{ne(a?o&&!ie:o)},[o,a,ie]);let A=(0,b.useMemo)(()=>({onHide:re}),[re]);function j(){return E||(l?(k.current||=new ko({handleContainerOverflow:!1}),k.current):jo())}let M=(e,...t)=>{e&&(e.style.visibility=`visible`),S?.(e,...t)},ae=(e,...t)=>{e&&(e.style.visibility=``),w?.(...t)},oe=(0,b.useCallback)(t=>(0,N.jsx)(`div`,{...t,className:(0,F.default)(`${e}-backdrop`,T)}),[T,e]),se=o=>(0,N.jsx)(`div`,{...o,...ee,className:(0,F.default)(t,a?`${e}-${a}`:e,`${e}-${i}`),"aria-labelledby":r,children:n});return(0,N.jsxs)(N.Fragment,{children:[!te&&(a||D)&&se({}),(0,N.jsx)(No.Provider,{value:A,children:(0,N.jsx)(Co,{show:te,ref:O,backdrop:s,container:p,keyboard:c,autoFocus:m,enforceFocus:h&&!l,restoreFocus:g,restoreFocusOptions:_,onEscapeKeyDown:u,onShow:d,onHide:re,onEnter:M,onEntering:C,onEntered:v,onExit:y,onExiting:x,onExited:ae,manager:j(),transition:is,backdropTransition:as,renderBackdrop:oe,renderDialog:se})})]})});os.displayName=`Offcanvas`;var ss=Object.assign(os,{Body:Qo,Header:ts,Title:rs}),W=b.forwardRef(({bsPrefix:e,className:t,as:n=`div`,...r},i)=>{let a=P(e,`row`),o=sr(),s=cr(),c=`${a}-cols`,l=[];return o.forEach(e=>{let t=r[e];delete r[e];let n;typeof t==`object`&&t?{cols:n}=t:n=t;let i=e===s?``:`-${e}`;n!=null&&l.push(`${c}${i}-${n}`)}),(0,N.jsx)(n,{ref:i,...r,className:(0,F.default)(t,a,...l)})});W.displayName=`Row`;var cs=b.forwardRef(({bsPrefix:e,className:t,striped:n,bordered:r,borderless:i,hover:a,size:o,variant:s,responsive:c,...l},u)=>{let d=P(e,`table`),f=(0,F.default)(t,d,s&&`${d}-${s}`,o&&`${d}-${o}`,n&&`${d}-${typeof n==`string`?`striped-${n}`:`striped`}`,r&&`${d}-bordered`,i&&`${d}-borderless`,a&&`${d}-hover`),p=(0,N.jsx)(`table`,{...l,className:f,ref:u});if(c){let e=`${d}-responsive`;return typeof c==`string`&&(e=`${e}-${c}`),(0,N.jsx)(`div`,{className:e,children:p})}return p});cs.displayName=`Table`;function ls(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function us(e){if(Array.isArray(e))return e}function ds(e){if(Array.isArray(e))return ls(e)}function fs(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function ps(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,ws(r.key),r)}}function ms(e,t,n){return t&&ps(e.prototype,t),n&&ps(e,n),Object.defineProperty(e,`prototype`,{writable:!1}),e}function hs(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Es(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function G(e,t,n){return(t=ws(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gs(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function _s(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function vs(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ys(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bs(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?bs(Object(n),!0).forEach(function(t){G(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bs(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function xs(e,t){return us(e)||_s(e,t)||Es(e,t)||vs()}function Ss(e){return ds(e)||gs(e)||Es(e)||ys()}function Cs(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ws(e){var t=Cs(e,`string`);return typeof t==`symbol`?t:t+``}function Ts(e){"@babel/helpers - typeof";return Ts=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ts(e)}function Es(e,t){if(e){if(typeof e==`string`)return ls(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ls(e,t):void 0}}var Ds=function(){},Os={},ks={},As=null,js={mark:Ds,measure:Ds};try{typeof window<`u`&&(Os=window),typeof document<`u`&&(ks=document),typeof MutationObserver<`u`&&(As=MutationObserver),typeof performance<`u`&&(js=performance)}catch{}var Ms=(Os.navigator||{}).userAgent,Ns=Ms===void 0?``:Ms,Ps=Os,Fs=ks,Is=As,Ls=js;Ps.document;var Rs=!!Fs.documentElement&&!!Fs.head&&typeof Fs.addEventListener==`function`&&typeof Fs.createElement==`function`,zs=~Ns.indexOf(`MSIE`)||~Ns.indexOf(`Trident/`),Bs,Vs=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Hs=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Us={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Ws={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Gs=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],Ks=`classic`,qs=`duotone`,Js=`sharp`,Ys=`sharp-duotone`,Xs=`chisel`,Zs=`etch`,Qs=`graphite`,$s=`jelly`,ec=`jelly-duo`,tc=`jelly-fill`,nc=`notdog`,rc=`notdog-duo`,ic=`slab`,ac=`slab-press`,oc=`thumbprint`,sc=`utility`,cc=`utility-duo`,lc=`utility-fill`,uc=`whiteboard`,dc=`Classic`,fc=`Duotone`,pc=`Sharp`,mc=`Sharp Duotone`,hc=`Chisel`,gc=`Etch`,_c=`Graphite`,vc=`Jelly`,yc=`Jelly Duo`,bc=`Jelly Fill`,xc=`Notdog`,Sc=`Notdog Duo`,Cc=`Slab`,wc=`Slab Press`,Tc=`Thumbprint`,Ec=`Utility`,Dc=`Utility Duo`,Oc=`Utility Fill`,kc=`Whiteboard`,Ac=[Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc];Bs={},G(G(G(G(G(G(G(G(G(G(Bs,Ks,dc),qs,fc),Js,pc),Ys,mc),Xs,hc),Zs,gc),Qs,_c),$s,vc),ec,yc),tc,bc),G(G(G(G(G(G(G(G(G(Bs,nc,xc),rc,Sc),ic,Cc),ac,wc),oc,Tc),sc,Ec),cc,Dc),lc,Oc),uc,kc);var jc={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Mc={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},Nc=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Pc={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},Fc=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Ic={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Lc=[`kit`];G(G({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Rc={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},zc={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Bc={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Vc={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Hc,Uc={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Wc=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Hc={},G(G(G(G(G(G(G(G(G(G(Hc,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),G(G(G(G(G(G(G(G(G(Hc,`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),G(G({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Gc={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Kc={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},qc={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Jc=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Wc,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Yc=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Xc=[1,2,3,4,5,6,7,8,9,10],Zc=Xc.concat([11,12,13,14,15,16,17,18,19,20]),Qc=[].concat(Ss(Object.keys(Kc)),Yc,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,Uc.GROUP,Uc.SWAP_OPACITY,Uc.PRIMARY,Uc.SECONDARY],Xc.map(function(e){return`${e}x`}),Zc.map(function(e){return`w-${e}`})),$c={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},el=`___FONT_AWESOME___`,tl=16,nl=`fa`,rl=`svg-inline--fa`,il=`data-fa-i2svg`,al=`data-fa-pseudo-element`,ol=`data-fa-pseudo-element-pending`,sl=`data-prefix`,cl=`data-icon`,ll=`fontawesome-i2svg`,ul=`async`,dl=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],fl=[`::before`,`::after`,`:before`,`:after`],pl=function(){try{return!0}catch{return!1}}();function ml(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[Ks]}})}var hl=K({},Us);hl[Ks]=K(K(K(K({},{"fa-duotone":`duotone`}),Us[Ks]),Ic.kit),Ic[`kit-duotone`]);var gl=ml(hl),_l=K({},Pc);_l[Ks]=K(K(K(K({},{duotone:`fad`}),_l[Ks]),Vc.kit),Vc[`kit-duotone`]);var vl=ml(_l),yl=K({},qc);yl[Ks]=K(K({},yl[Ks]),Bc.kit);var bl=ml(yl),xl=K({},Gc);xl[Ks]=K(K({},xl[Ks]),Rc.kit),ml(xl);var Sl=Vs,Cl=`fa-layers-text`,wl=Hs;ml(K({},jc));var Tl=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],El=Ws,Dl=[].concat(Ss(Lc),Ss(Qc)),Ol=Ps.FontAwesomeConfig||{};function kl(e){var t=Fs.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Al(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}Fs&&typeof Fs.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=xs(e,2),n=t[0],r=t[1],i=Al(kl(n));i!=null&&(Ol[r]=i)});var jl={styleDefault:`solid`,familyDefault:Ks,cssPrefix:nl,replacementClass:rl,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ol.familyPrefix&&(Ol.cssPrefix=Ol.familyPrefix);var Ml=K(K({},jl),Ol);Ml.autoReplaceSvg||(Ml.observeMutations=!1);var q={};Object.keys(jl).forEach(function(e){Object.defineProperty(q,e,{enumerable:!0,set:function(t){Ml[e]=t,Nl.forEach(function(e){return e(q)})},get:function(){return Ml[e]}})}),Object.defineProperty(q,`familyPrefix`,{enumerable:!0,set:function(e){Ml.cssPrefix=e,Nl.forEach(function(e){return e(q)})},get:function(){return Ml.cssPrefix}}),Ps.FontAwesomeConfig=q;var Nl=[];function Pl(e){return Nl.push(e),function(){Nl.splice(Nl.indexOf(e),1)}}var Fl=tl,Il={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ll(e){if(!(!e||!Rs)){var t=Fs.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=Fs.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return Fs.head.insertBefore(t,r),e}}var Rl=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function J(){for(var e=12,t=``;e-- >0;)t+=Rl[Math.random()*62|0];return t}function Y(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function zl(e){return e.classList?Y(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function Bl(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Vl(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${Bl(e[n])}" `},``).trim()}function Hl(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Ul(e){return e.size!==Il.size||e.x!==Il.x||e.y!==Il.y||e.rotate!==Il.rotate||e.flipX||e.flipY}function Wl(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Gl(e){var t=e.transform,n=e.width,r=n===void 0?tl:n,i=e.height,a=i===void 0?tl:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&zs?c+=`translate(${t.x/Fl-r/2}em, ${t.y/Fl-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/Fl}em), calc(-50% + ${t.y/Fl}em)) `:c+=`translate(${t.x/Fl}em, ${t.y/Fl}em) `,c+=`scale(${t.size/Fl*(t.flipX?-1:1)}, ${t.size/Fl*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var Kl=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ql(){var e=nl,t=rl,n=q.cssPrefix,r=q.replacementClass,i=Kl;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Jl=!1;function Yl(){q.autoAddCss&&!Jl&&(Ll(ql()),Jl=!0)}var Xl={mixout:function(){return{dom:{css:ql,insertCss:Yl}}},hooks:function(){return{beforeDOMElementCreation:function(){Yl()},beforeI2svg:function(){Yl()}}}},Zl=Ps||{};Zl[el]||(Zl[el]={}),Zl[el].styles||(Zl[el].styles={}),Zl[el].hooks||(Zl[el].hooks={}),Zl[el].shims||(Zl[el].shims=[]);var Ql=Zl[el],$l=[],eu=function(){Fs.removeEventListener(`DOMContentLoaded`,eu),tu=1,$l.map(function(e){return e()})},tu=!1;Rs&&(tu=(Fs.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Fs.readyState),tu||Fs.addEventListener(`DOMContentLoaded`,eu));function nu(e){Rs&&(tu?setTimeout(e,0):$l.push(e))}function ru(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?Bl(e):`<${t} ${Vl(r)}>${a.map(ru).join(``)}</${t}>`}function iu(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var au=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},ou=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:au(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function su(e){return Ss(e).length===1?e.codePointAt(0).toString(16):null}function cu(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function lu(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=cu(t);typeof Ql.hooks.addPack==`function`&&!r?Ql.hooks.addPack(e,cu(t)):Ql.styles[e]=K(K({},Ql.styles[e]||{}),i),e===`fas`&&lu(`fa`,t)}var uu=Ql.styles,du=Ql.shims,fu=Object.keys(bl),pu=fu.reduce(function(e,t){return e[t]=Object.keys(bl[t]),e},{}),mu=null,hu={},gu={},_u={},vu={},yu={};function bu(e){return~Dl.indexOf(e)}function xu(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!bu(i)?i:null}var Su=function(){var e=function(e){return ou(uu,function(t,n,r){return t[r]=ou(n,e,{}),t},{})};hu=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),gu=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),yu=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in uu||q.autoFetchSvg,n=ou(du,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});_u=n.names,vu=n.unicodes,mu=ju(q.styleDefault,{family:q.familyDefault})};Pl(function(e){mu=ju(e.styleDefault,{family:q.familyDefault})}),Su();function Cu(e,t){return(hu[e]||{})[t]}function wu(e,t){return(gu[e]||{})[t]}function Tu(e,t){return(yu[e]||{})[t]}function Eu(e){return _u[e]||{prefix:null,iconName:null}}function Du(e){var t=vu[e],n=Cu(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function Ou(){return mu}var ku=function(){return{prefix:null,iconName:null,rest:[]}};function Au(e){var t=Ks,n=fu.reduce(function(e,t){return e[t]=`${q.cssPrefix}-${t}`,e},{});return Ac.forEach(function(r){(e.includes(n[r])||e.some(function(e){return pu[r].includes(e)}))&&(t=r)}),t}function ju(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?Ks:t,r=gl[n][e];if(n===qs&&!e)return`fad`;var i=vl[n][e]||vl[n][r],a=e in Ql.styles?e:null;return i||a||null}function Mu(e){var t=[],n=null;return e.forEach(function(e){var r=xu(q.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Nu(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Pu=Jc.concat(Fc);function Fu(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=Nu(e.filter(function(e){return Pu.includes(e)})),a=Nu(e.filter(function(e){return!Pu.includes(e)})),o=xs(i.filter(function(e){return r=e,!Gs.includes(e)}),1)[0],s=o===void 0?null:o,c=Au(i),l=K(K({},Mu(a)),{},{prefix:ju(s,{family:c})});return K(K(K({},l),zu({values:e,family:c,styles:uu,config:q,canonical:l,givenPrefix:r})),Iu(n,r,l))}function Iu(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Eu(i):{},o=Tu(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!uu.far&&uu.fas&&!q.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Lu=Ac.filter(function(e){return e!==Ks||e!==qs}),Ru=Object.keys(qc).filter(function(e){return e!==Ks}).map(function(e){return Object.keys(qc[e])}).flat();function zu(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===qs,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Lu.includes(n)&&(Object.keys(s).find(function(e){return Ru.includes(e)})||l.autoFetchSvg)&&(r.prefix=Nc.get(n).defaultShortPrefixId,r.iconName=Tu(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=Ou()||`fas`),r}var Bu=function(){function e(){fs(this,e),this.definitions={}}return ms(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=K(K({},e.definitions[n]||{}),t[n]),lu(n,t[n]);var r=bl[Ks][n];r&&lu(r,t[n]),Su()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Vu=[],Hu={},Uu={},Wu=Object.keys(Uu);function Gu(e,t){var n=t.mixoutsTo;return Vu=e,Hu={},Object.keys(Uu).forEach(function(e){Wu.indexOf(e)===-1&&delete Uu[e]}),Vu.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),Ts(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){Hu[e]||(Hu[e]=[]),Hu[e].push(r[e])})}e.provides&&e.provides(Uu)}),n}function Ku(e,t){var n=[...arguments].slice(2);return(Hu[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function qu(e){var t=[...arguments].slice(1);(Hu[e]||[]).forEach(function(e){e.apply(null,t)})}function Ju(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Uu[e]?Uu[e].apply(null,t):void 0}function Yu(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||Ou();if(t)return t=Tu(n,t)||t,iu(Xu.definitions,n,t)||iu(Ql.styles,n,t)}var Xu=new Bu,Zu={noAuto:function(){q.autoReplaceSvg=!1,q.observeMutations=!1,qu(`noAuto`)},config:q,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Rs?(qu(`beforeI2svg`,e),Ju(`pseudoElements2svg`,e),Ju(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,nu(function(){Qu({autoReplaceSvgRoot:t}),qu(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(Ts(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Tu(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=ju(e[0]);return{prefix:n,iconName:Tu(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${q.cssPrefix}-`)>-1||e.match(Sl))){var r=Fu(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||Ou(),iconName:Tu(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=Ou();return{prefix:i,iconName:Tu(i,e)||e}}}},library:Xu,findIconDefinition:Yu,toHtml:ru},Qu=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?Fs:e;(Object.keys(Ql.styles).length>0||q.autoFetchSvg)&&Rs&&q.autoReplaceSvg&&Zu.dom.i2svg({node:t})};function $u(e,t){return Object.defineProperty(e,`abstract`,{get:t}),Object.defineProperty(e,`html`,{get:function(){return e.abstract.map(function(e){return ru(e)})}}),Object.defineProperty(e,`node`,{get:function(){if(Rs){var t=Fs.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function ed(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Ul(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Hl(K(K({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function td(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${q.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:K(K({},i),{},{id:o}),children:r}]}]}function nd(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function rd(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[q.replacementClass,a?`${q.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:K(K({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!nd(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[il]=``);var _=K(K({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:K({},l.styles)}),v=r.found&&n.found?Ju(`generateAbstractMask`,_)||{children:[],attributes:{}}:Ju(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?td(_):ed(_)}function id(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=K(K({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[il]=``);var l=K({},a.styles);Ul(i)&&(l.transform=Gl({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Hl(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function ad(e){var t=e.content,n=e.extra,r=K(K({},n.attributes),{},{class:n.classes.join(` `)}),i=Hl(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var od=Ql.styles;function sd(e){var t=e[0],n=e[1],r=xs(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${q.cssPrefix}-${El.GROUP}`},children:[{tag:`path`,attributes:{class:`${q.cssPrefix}-${El.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${q.cssPrefix}-${El.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var cd={found:!1,width:512,height:512};function ld(e,t){!pl&&!q.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function ud(e,t){var n=t;return t===`fa`&&q.styleDefault!==null&&(t=Ou()),new Promise(function(r,i){if(n===`fa`){var a=Eu(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&od[t]&&od[t][e]){var o=od[t][e];return r(sd(o))}ld(e,t),r(K(K({},cd),{},{icon:q.showMissingIcons&&e&&Ju(`missingIconAbstract`)||{}}))})}var dd=function(){},fd=q.measurePerformance&&Ls&&Ls.mark&&Ls.measure?Ls:{mark:dd,measure:dd},pd=`FA "7.2.0"`,md=function(e){return fd.mark(`${pd} ${e} begins`),function(){return hd(e)}},hd=function(e){fd.mark(`${pd} ${e} ends`),fd.measure(`${pd} ${e}`,`${pd} ${e} begins`,`${pd} ${e} ends`)},gd={begin:md,end:hd},_d=function(){};function vd(e){return typeof(e.getAttribute?e.getAttribute(il):null)==`string`}function yd(e){var t=e.getAttribute?e.getAttribute(sl):null,n=e.getAttribute?e.getAttribute(cl):null;return t&&n}function bd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(q.replacementClass)}function xd(){return q.autoReplaceSvg===!0?Td.replace:Td[q.autoReplaceSvg]||Td.replace}function X(e){return Fs.createElementNS(`http://www.w3.org/2000/svg`,e)}function Sd(e){return Fs.createElement(e)}function Cd(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?X:Sd:t;if(typeof e==`string`)return Fs.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Cd(e,{ceFn:n}))}),r}function wd(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Td={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Cd(e),t)}),t.getAttribute(il)===null&&q.keepOriginalSource){var n=Fs.createComment(wd(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~zl(t).indexOf(q.replacementClass))return Td.replace(e);var r=RegExp(`${q.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===q.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return ru(e)}).join(`
`);t.setAttribute(il,``),t.innerHTML=a}};function Ed(e){e()}function Dd(e,t){var n=typeof t==`function`?t:_d;if(e.length===0)n();else{var r=Ed;q.mutateApproach===ul&&(r=Ps.requestAnimationFrame||Ed),r(function(){var t=xd(),r=gd.begin(`mutate`);e.map(t),r(),n()})}}var Od=!1;function kd(){Od=!0}function Ad(){Od=!1}var jd=null;function Md(e){if(Is&&q.observeMutations){var t=e.treeCallback,n=t===void 0?_d:t,r=e.nodeCallback,i=r===void 0?_d:r,a=e.pseudoElementsCallback,o=a===void 0?_d:a,s=e.observeMutationsRoot,c=s===void 0?Fs:s;jd=new Is(function(e){if(!Od){var t=Ou();Y(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!vd(e.addedNodes[0])&&(q.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&q.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&vd(e.target)&&~Tl.indexOf(e.attributeName))if(e.attributeName===`class`&&yd(e.target)){var r=Fu(zl(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(sl,a||t),s&&e.target.setAttribute(cl,s)}else bd(e.target)&&i(e.target)})}}),Rs&&jd.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Nd(){jd&&jd.disconnect()}function Pd(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Fd(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Fu(zl(e));return i.prefix||=Ou(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=wu(i.prefix,e.innerText)||Cu(i.prefix,su(e.innerText))),!i.iconName&&q.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Id(e){return Y(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Ld(){return{iconName:null,prefix:null,transform:Il,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Rd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Fd(e),r=n.iconName,i=n.prefix,a=n.rest,o=Id(e),s=Ku(`parseNodeAttributes`,{},e);return K({iconName:r,prefix:i,transform:Il,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Pd(e):[],attributes:o}},s)}var zd=Ql.styles;function Bd(e){var t=q.autoReplaceSvg===`nest`?Rd(e,{styleParser:!1}):Rd(e);return~t.extra.classes.indexOf(Cl)?Ju(`generateLayersText`,e,t):Ju(`generateSvgReplacementMutation`,e,t)}function Vd(){return[].concat(Ss(Fc),Ss(Jc))}function Hd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Rs)return Promise.resolve();var n=Fs.documentElement.classList,r=function(e){return n.add(`${ll}-${e}`)},i=function(e){return n.remove(`${ll}-${e}`)},a=q.autoFetchSvg?Vd():Gs.concat(Object.keys(zd));a.includes(`fa`)||a.push(`fa`);var o=[`.${Cl}:not([${il}])`].concat(a.map(function(e){return`.${e}:not([${il}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=Y(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=gd.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Bd(t);n&&e.push(n)}catch(e){pl||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Dd(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Ud(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bd(e).then(function(e){e&&Dd([e],t)})}function Wd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Yu(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Yu(i||{}),e(r,K(K({},n),{},{mask:i}))}}var Gd=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Il:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return $u(K({type:`icon`},e),function(){return qu(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),rd({icons:{main:sd(v),mask:s?sd(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:K(K({},Il),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Kd={mixout:function(){return{icon:Wd(Gd)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Hd,e.nodeCallback=Ud,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?Fs:t,r=e.callback;return Hd(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([ud(n,r),o.iconName?ud(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=xs(o,2),u=l[0],d=l[1];t([e,rd({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=Hl(a);o.length>0&&(n.style=o);var s;return Ul(i)&&(s=Ju(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},qd={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return $u({type:`layer`},function(){qu(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${q.cssPrefix}-layers`].concat(Ss(r)).join(` `)},children:n}]})}}}},Jd={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return $u({type:`counter`,content:e},function(){return qu(`beforeDOMElementCreation`,{content:e,params:t}),ad({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${q.cssPrefix}-layers-counter`].concat(Ss(a))}})})}}}},Yd={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Il:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return $u({type:`text`,content:e},function(){return qu(`beforeDOMElementCreation`,{content:e,params:t}),id({content:e,transform:K(K({},Il),r),extra:{attributes:s,styles:l,classes:[`${q.cssPrefix}-layers-text`].concat(Ss(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(zs){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,id({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Xd=RegExp(`"`,`ug`),Zd=[1105920,1112319],Qd=K(K(K(K({},{FontAwesome:{normal:`fas`,400:`fas`}}),Mc),$c),zc),$d=Object.keys(Qd).reduce(function(e,t){return e[t.toLowerCase()]=Qd[t],e},{}),ef=Object.keys($d).reduce(function(e,t){var n=$d[t];return e[t]=n[900]||Ss(Object.entries(n))[0][1],e},{});function tf(e){return su(Ss(e.replace(Xd,``))[0]||``)}function nf(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Xd,``),r=n.codePointAt(0),i=r>=Zd[0]&&r<=Zd[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function rf(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return($d[n]||{})[i]||ef[n]}function af(e,t){var n=`${ol}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Y(e.children).filter(function(e){return e.getAttribute(al)===t})[0],o=Ps.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(wl),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=rf(s,l),p=tf(d),m=c[0].startsWith(`FontAwesome`),h=nf(o),g=Cu(f,p),_=g;if(m){var v=Du(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(sl)!==f||a.getAttribute(cl)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Ld(),b=y.extra;b.attributes[al]=t,ud(g,f).then(function(i){var a=rd(K(K({},y),{},{icons:{main:i,mask:ku()},prefix:f,iconName:_,extra:b,watchable:!0})),o=Fs.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return ru(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function of(e){return Promise.all([af(e,`::before`),af(e,`::after`)])}function sf(e){return e.parentNode!==document.head&&!~dl.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(al)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var cf=function(e){return!!e&&fl.some(function(t){return e.includes(t)})},lf=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=hs(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(cf(a)){var o=fl.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function uf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Rs){var n;if(t)n=e;else if(q.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=hs(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=hs(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=hs(lf(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){q.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=Y(n).filter(sf).map(of),i=gd.begin(`searchPseudoElements`);kd(),Promise.all(r).then(function(){i(),Ad(),e()}).catch(function(){i(),Ad(),t()})})}}var df={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=uf,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?Fs:t;q.searchPseudoElements&&uf(n)}}},ff=!1,pf={mixout:function(){return{dom:{unwatch:function(){kd(),ff=!0}}}},hooks:function(){return{bootstrap:function(){Md(Ku(`mutationObserverCallbacks`,{}))},noAuto:function(){Nd()},watch:function(e){var t=e.observeMutationsRoot;ff?Ad():Md(Ku(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},mf=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},hf={mixout:function(){return{parse:{transform:function(e){return mf(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=mf(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:K({},a.outer),children:[{tag:`g`,attributes:K({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:K(K({},t.icon.attributes),a.path)}]}]}}}},gf={x:0,y:0,width:`100%`,height:`100%`};function _f(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function vf(e){return e.tag===`g`?e.children:[e]}Gu([Xl,Kd,qd,Jd,Yd,df,pf,hf,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Fu(n.split(` `).map(function(e){return e.trim()})):ku();return r.prefix||=Ou(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=Wl({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:K(K({},gf),{},{fill:`white`})},p=c.children?{children:c.children.map(_f)}:{},m={tag:`g`,attributes:K({},d.inner),children:[_f(K({tag:c.tag,attributes:K(K({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:K({},d.outer),children:[m]},g=`mask-${a||J()}`,_=`clip-${a||J()}`,v={tag:`mask`,attributes:K(K({},gf),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:vf(u)},v]};return t.push(y,{tag:`rect`,attributes:K({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},gf)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;Ps.matchMedia&&(t=Ps.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:K(K({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=K(K({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:K(K({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:K(K({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:K(K({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:K(K({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:K(K({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:K(K({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:K(K({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:Zu}),Zu.noAuto;var yf=Zu.config;Zu.library,Zu.dom;var bf=Zu.parse;Zu.findIconDefinition,Zu.toHtml;var xf=Zu.icon;Zu.layer,Zu.text,Zu.counter;function Sf(e){return e-=0,e===e}function Cf(e){return Sf(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var wf=(e,t)=>b.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Tf(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Ef=new Map,Df=1e3;function Of(e){if(Ef.has(e))return Ef.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Cf(n);t[e.startsWith(`webkit`)?Tf(e):e]=r}}}n=a+1}if(Ef.size===Df){let e=Ef.keys().next().value;e&&Ef.delete(e)}return Ef.set(e,t),t}function kf(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),kf(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Of(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Cf(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(wf)))}return e(t.tag,{...a,...u},...r)}var Af=kf.bind(null,b.createElement),jf=(e,t)=>{let n=(0,b.useId)();return e||(t?n:void 0)},Mf=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}?.FA_VERSION;var Nf=`searchPseudoElementsFullScan`in yf&&typeof yf.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,Pf=Number.parseInt(Nf)>=7,Ff=()=>Pf,If=`fa`,Lf={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`},Rf={left:`fa-pull-left`,right:`fa-pull-right`},zf={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},Bf={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},Vf={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`},Hf={default:`fa-layers`};function Uf(e){let t=yf.cssPrefix||yf.familyPrefix||If;return t===If?e:e.replace(new RegExp(String.raw`(?<=^|\s)${If}-`,`g`),`${t}-`)}function Wf(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,className:b}=e,x=[];return b&&x.push(...b.split(` `)),t&&x.push(Lf.beat),n&&x.push(Lf.fade),r&&x.push(Lf.beatFade),i&&x.push(Lf.bounce),a&&x.push(Lf.shake),o&&x.push(Lf.spin),c&&x.push(Lf.spinReverse),s&&x.push(Lf.spinPulse),l&&x.push(Lf.pulse),u&&x.push(Vf.fixedWidth),d&&x.push(Vf.inverse),f&&x.push(Vf.border),p===!0&&x.push(Vf.flip),(p===`horizontal`||p===`both`)&&x.push(Vf.flipHorizontal),(p===`vertical`||p===`both`)&&x.push(Vf.flipVertical),m!=null&&x.push(Bf[m]),h!=null&&h!==0&&x.push(zf[h]),g!=null&&x.push(Rf[g]),_&&x.push(Vf.swapOpacity),Ff()?(v&&x.push(Vf.rotateBy),y&&x.push(Vf.widthAuto),(yf.cssPrefix||yf.familyPrefix||If)===If?x:x.map(Uf)):x}var Gf=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function Kf(e){if(e)return Gf(e)?e:bf.icon(e)}function qf(e){return Object.keys(e)}var Jf=new Mf(`FontAwesomeIcon`),Yf={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Xf=new Set(Object.keys(Yf)),Z=b.forwardRef((e,t)=>{let n={...Yf,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=jf(c,!!i),d=jf(s,!!o),f=Kf(r);if(!f)return Jf.error(`Icon lookup is undefined`,r),null;let p=Wf(n),m=typeof l==`string`?bf.transform(l):l,h=Kf(i),g=xf(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return Jf.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of qf(n))Xf.has(e)||(v[e]=n[e]);return Af(_[0],v)});Z.displayName=`FontAwesomeIcon`,`${Hf.default}${Vf.fixedWidth}`;var Zf={prefix:`fas`,iconName:`calendar-check`,icon:[448,512,[],`f274`,`M320 0c17.7 0 32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32zm22 161.7c-10.7-7.8-25.7-5.4-33.5 5.3L189.1 331.2 137 279.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.9 7.5 18.8 7s13.4-4.1 17.5-9.8L347.3 195.2c7.8-10.7 5.4-25.7-5.3-33.5z`]},Qf={prefix:`fas`,iconName:`scale-balanced`,icon:[640,512,[9878,`balance-scale`],`f24e`,`M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3l0 294.7 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288L584.4 320 512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1-10.8 44.8-63.1 78.9-126 78.9zM126.8 195.8L54.4 320 199.3 320 126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1-10.8 44.8-63.1 78.9-126 78.9S11.7 382 .9 337.1z`]},$f={prefix:`fas`,iconName:`scroll`,icon:[576,512,[128220],`f70e`,`M0 112C0 70.5 31.6 36.4 72 32.4l0-.4 280 0c53 0 96 43 96 96l0 176-176 0c-39.8 0-72 32.2-72 72l0 60c0 24.3-19.7 44-44 44s-44-19.7-44-44l0-228-64 0c-26.5 0-48-21.5-48-48l0-48zM236.8 480c7.1-13.1 11.2-28.1 11.2-44l0-60c0-13.3 10.7-24 24-24l248 0c13.3 0 24 10.7 24 24l0 24c0 44.2-35.8 80-80 80l-227.2 0zM80 80c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32z`]},ep={prefix:`fas`,iconName:`wallet`,icon:[512,512,[],`f555`,`M64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L72 128c-13.3 0-24-10.7-24-24S58.7 80 72 80l384 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L64 32zM416 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64z`]},tp={prefix:`fas`,iconName:`calendar-days`,icon:[448,512,[`calendar-alt`],`f073`,`M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zM64 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z`]},np={prefix:`fas`,iconName:`gauge`,icon:[512,512,[`dashboard`,`gauge-med`,`tachometer-alt-average`],`f624`,`M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z`]},rp={prefix:`fas`,iconName:`user-tie`,icon:[448,512,[],`f508`,`M224 248a120 120 0 1 1 0-240 120 120 0 1 1 0 240zm-30.5 56l61 0c9.7 0 17.5 7.8 17.5 17.5 0 4.2-1.5 8.2-4.2 11.4l-27.4 32 31 115.1 .6 0 34.6-138.5c2.2-8.7 11.1-14 19.5-10.8 61.9 23.6 105.9 83.6 105.9 153.8 0 15.1-12.3 27.4-27.4 27.4L43.4 512c-15.1 0-27.4-12.3-27.4-27.4 0-70.2 44-130.2 105.9-153.8 8.4-3.2 17.3 2.1 19.5 10.8l34.6 138.5 .6 0 31-115.1-27.4-32c-2.7-3.2-4.2-7.2-4.2-11.4 0-9.7 7.8-17.5 17.5-17.5z`]},ip={prefix:`fas`,iconName:`map-location-dot`,icon:[640,512,[`map-marked-alt`],`f5a0`,`M576 48c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4L413.5 77.5 234.1 17.6c-8.1-2.7-16.8-2.1-24.4 1.7l-128 64C70.8 88.8 64 99.9 64 112l0 352c0 11.1 5.7 21.4 15.2 27.2s21.2 6.4 31.1 1.4l116.1-58.1 173.3 57.8c-4.3-6.4-8.5-13.1-12.6-19.9-11-18.3-21.9-39.3-30-61.8l-101.2-33.7 0-284.5 128 42.7 0 99.3c31-35.8 77-58.4 128-58.4 22.6 0 44.2 4.4 64 12.5L576 48zM512 224c-66.3 0-120 52.8-120 117.9 0 68.9 64.1 150.4 98.6 189.3 11.6 13 31.3 13 42.9 0 34.5-38.9 98.6-120.4 98.6-189.3 0-65.1-53.7-117.9-120-117.9zM472 344a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z`]},ap={prefix:`fas`,iconName:`magnifying-glass`,icon:[512,512,[128269,`search`],`f002`,`M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`]},op={prefix:`fas`,iconName:`eye`,icon:[576,512,[128065],`f06e`,`M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z`]},sp={prefix:`fas`,iconName:`trash`,icon:[448,512,[],`f1f8`,`M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z`]},cp={prefix:`fas`,iconName:`pen-to-square`,icon:[512,512,[`edit`],`f044`,`M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z`]},lp={prefix:`fas`,iconName:`clock`,icon:[512,512,[128339,`clock-four`],`f017`,`M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`]},up={prefix:`fas`,iconName:`book`,icon:[448,512,[128212],`f02d`,`M384 512L96 512c-53 0-96-43-96-96L0 96C0 43 43 0 96 0L400 0c26.5 0 48 21.5 48 48l0 288c0 20.9-13.4 38.7-32 45.3l0 66.7c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zM96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0 0-64-256 0zm32-232c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z`]},dp={prefix:`fas`,iconName:`folder-open`,icon:[576,512,[128194,128449,61717],`f07c`,`M56 225.6L32.4 296.2 32.4 96c0-35.3 28.7-64 64-64l138.7 0c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4l117.3 0c35.3 0 64 28.7 64 64l0 16-365.4 0c-41.3 0-78 26.4-91.1 65.6zM477.8 448L99 448c-32.8 0-55.9-32.1-45.5-63.2l48-144C108 221.2 126.4 208 147 208l378.8 0c32.8 0 55.9 32.1 45.5 63.2l-48 144c-6.5 19.6-24.9 32.8-45.5 32.8z`]},fp={prefix:`fas`,iconName:`users`,icon:[640,512,[],`f0c0`,`M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z`]},pp={prefix:`fas`,iconName:`user-shield`,icon:[576,512,[],`f505`,`M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l251.5 0C261 469.4 240 414.5 240 356.4l0-31.1c0-7.3 1-14.5 2.9-21.3l-48.6 0zm251 184.5l-13.3 6.3 0-188.1 96 32 0 19.6c0 55.8-32.2 106.5-82.7 130.3zM421.9 259.5l-112 37.3c-13.1 4.4-21.9 16.6-21.9 30.4l0 31.1c0 74.4 43 142.1 110.2 173.7l18.5 8.7c4.8 2.2 10 3.4 15.2 3.4s10.5-1.2 15.2-3.4l18.5-8.7C533 500.3 576 432.6 576 358.2l0-31.1c0-13.8-8.8-26-21.9-30.4l-112-37.3c-6.6-2.2-13.7-2.2-20.2 0z`]},mp={prefix:`fas`,iconName:`clipboard-list`,icon:[384,512,[],`f46d`,`M311.4 32l8.6 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l8.6 0C83.6 12.9 104.3 0 128 0L256 0c23.7 0 44.4 12.9 55.4 32zM248 112c13.3 0 24-10.7 24-24s-10.7-24-24-24L136 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0zM128 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32 0c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zm0 128c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zM96 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64z`]},hp={prefix:`fas`,iconName:`money-bill-wave`,icon:[512,512,[],`f53a`,`M0 419.6L0 109.5c0-23.2 24.1-38.6 46.3-32 87.7 26.2 149.7 5.5 212.1-15.3 64.5-21.5 129.4-43.1 223.3-13.1 18.5 5.9 30.3 23.8 30.3 43.3l0 310.1c0 23.2-24.1 38.6-46.2 32-87.7-26.2-149.8-5.5-212.1 15.3-64.5 21.5-129.4 43.1-223.3 13.1-18.5-5.9-30.3-23.8-30.3-43.3zM336 256c0-53-35.8-96-80-96s-80 43-80 96 35.8 96 80 96 80-43 80-96zM120 413.6c4.4 0 7.9-3.8 7.2-8.1-4.6-27.8-27-49.5-55.2-53-4.4-.5-8 3.1-8 7.5l0 39.9c0 3.6 2.4 6.8 6 7.7 17.9 4.2 34.3 6.1 50 6.1zm318.5-51.1c5 .8 9.5-3 9.5-8l0-42.6c0-4.4-3.6-8.1-8-7.5-25.2 3.1-45.9 20.9-53.2 44.6-1.4 4.7 2.3 9.1 7.2 9.2 14.2 .4 29 1.7 44.4 4.3zM448 152l0-39.9c0-3.6-2.5-6.8-6-7.7-17.9-4.2-34.3-6.1-50-6.1-4.4 0-7.9 3.8-7.2 8.1 4.6 27.8 27 49.5 55.2 53 4.4 .5 8-3.1 8-7.5zM125.2 162.9c1.4-4.7-2.3-9.1-7.2-9.2-14.2-.4-29-1.7-44.4-4.3-5-.8-9.5 3-9.5 8L64 200c0 4.4 3.6 8.1 8 7.5 25.2-3.1 45.9-20.9 53.2-44.6z`]},gp={prefix:`fas`,iconName:`chart-line`,icon:[512,512,[`line-chart`],`f201`,`M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z`]},_p={prefix:`fas`,iconName:`building`,icon:[384,512,[127970,61687],`f1ad`,`M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z`]},vp={prefix:`fas`,iconName:`user-group`,icon:[576,512,[128101,`user-friends`],`f500`,`M64 128a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zM0 464c0-97.2 78.8-176 176-176s176 78.8 176 176l0 6c0 23.2-18.8 42-42 42L42 512c-23.2 0-42-18.8-42-42l0-6zM432 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 240c79.5 0 144 64.5 144 144l0 22.4c0 23-18.6 41.6-41.6 41.6l-144.8 0c6.6-12.5 10.4-26.8 10.4-42l0-6c0-51.5-17.4-98.9-46.5-136.7 22.6-14.7 49.6-23.3 78.5-23.3z`]},yp={prefix:`fas`,iconName:`right-from-bracket`,icon:[512,512,[`sign-out-alt`],`f2f5`,`M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z`]},bp={prefix:`fas`,iconName:`arrow-up`,icon:[384,512,[8593],`f062`,`M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z`]},xp={prefix:`fas`,iconName:`gavel`,icon:[576,512,[`legal`],`f0e3`,`M169.6 153.4l-18.7-18.7c-12.5-12.5-12.5-32.8 0-45.3L265.6-25.4c12.5-12.5 32.8-12.5 45.3 0L329.6-6.6c12.5 12.5 12.5 32.8 0 45.3L214.9 153.4c-12.5 12.5-32.8 12.5-45.3 0zM276 211.7l-31.4-31.4 112-112 119.4 119.4-112 112-31.4-31.4-232 232c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6l232-232zM390.9 374.6c-12.5-12.5-12.5-32.8 0-45.3L505.6 214.6c12.5-12.5 32.8-12.5 45.3 0l18.7 18.7c12.5 12.5 12.5 32.8 0 45.3L454.9 393.4c-12.5 12.5-32.8 12.5-45.3 0l-18.7-18.7z`]},Sp={prefix:`fas`,iconName:`user`,icon:[448,512,[128100,62144,62470,`user-alt`,`user-large`],`f007`,`M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z`]},Cp={prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`]},wp={prefix:`fas`,iconName:`file-lines`,icon:[384,512,[128441,128462,61686,`file-alt`,`file-text`],`f15c`,`M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM120 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z`]},Tp={prefix:`fas`,iconName:`circle-check`,icon:[512,512,[61533,`check-circle`],`f058`,`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`]},Ep={prefix:`fas`,iconName:`phone`,icon:[512,512,[128222,128379],`f095`,`M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z`]},Dp={prefix:`fas`,iconName:`clock-rotate-left`,icon:[576,512,[`history`],`f1da`,`M288 64c106 0 192 86 192 192S394 448 288 448c-65.2 0-122.9-32.5-157.6-82.3-10.1-14.5-30.1-18-44.6-7.9s-18 30.1-7.9 44.6C124.1 468.6 201 512 288 512 429.4 512 544 397.4 544 256S429.4 0 288 0C202.3 0 126.5 42.1 80 106.7L80 80c0-17.7-14.3-32-32-32S16 62.3 16 80l0 112c0 17.7 14.3 32 32 32l24.6 0c.5 0 1 0 1.5 0l86 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-38.3 0C154.9 102.6 217 64 288 64zm24 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1z`]},Op={prefix:`fas`,iconName:`chart-pie`,icon:[576,512,[`pie-chart`],`f200`,`M512.4 240l-176 0c-17.7 0-32-14.3-32-32l0-176c0-17.7 14.4-32.2 31.9-29.9 107 14.2 191.8 99 206 206 2.3 17.5-12.2 31.9-29.9 31.9zM222.6 37.2c18.1-3.8 33.8 11 33.8 29.5l0 197.3c0 5.6 2 11 5.5 15.3L394 438.7c11.7 14.1 9.2 35.4-6.9 44.1-34.1 18.6-73.2 29.2-114.7 29.2-132.5 0-240-107.5-240-240 0-115.5 81.5-211.9 190.2-234.8zM477.8 288l64 0c18.5 0 33.3 15.7 29.5 33.8-10.2 48.4-35 91.4-69.6 124.2-12.3 11.7-31.6 9.2-42.4-3.9L374.9 340.4c-17.3-20.9-2.4-52.4 24.6-52.4l78.2 0z`]},kp={prefix:`fas`,iconName:`credit-card`,icon:[512,512,[128179,62083,`credit-card-alt`],`f09d`,`M0 128l0 32 512 0 0-32c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm0 80L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-176-512 0zM64 360c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm144 0c0-13.3 10.7-24 24-24l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-13.3 0-24-10.7-24-24z`]},Ap={prefix:`fas`,iconName:`lock`,icon:[384,512,[128274],`f023`,`M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z`]},jp={prefix:`fas`,iconName:`shield-halved`,icon:[512,512,[`shield-alt`],`f3ed`,`M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z`]},Mp={prefix:`fas`,iconName:`plus`,icon:[448,512,[10133,61543,`add`],`2b`,`M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z`]},Np={prefix:`fas`,iconName:`money-check-dollar`,icon:[512,512,[`money-check-alt`],`f53d`,`M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM296 288l128 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-128 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm-24-88c0-13.3 10.7-24 24-24l128 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-128 0c-13.3 0-24-10.7-24-24zM148 144c11 0 20 9 20 20l0 4 8 0c11 0 20 9 20 20s-9 20-20 20l-47.5 0c-6.9 0-12.5 5.6-12.5 12.5 0 6.1 4.4 11.3 10.4 12.3l41.7 7c25.3 4.2 43.9 26.1 43.9 51.8 0 26.1-19 47.7-44 51.8l0 4.7c0 11-9 20-20 20s-20-9-20-20l0-4-24 0c-11 0-20-9-20-20s9-20 20-20l55.5 0c6.9 0 12.5-5.6 12.5-12.5 0-6.1-4.4-11.3-10.4-12.3l-41.7-7C94.5 268 76 246.1 76 220.5 76 191.7 99.2 168.3 128 168l0-4c0-11 9-20 20-20z`]},Pp={prefix:`fas`,iconName:`file-contract`,icon:[384,512,[],`f56c`,`M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM88 64C74.7 64 64 74.7 64 88s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm70.3 160c-11.3 0-21.9 5.1-28.9 13.9L69.3 409c-8.3 10.3-6.6 25.5 3.7 33.7s25.5 6.6 33.7-3.8l47.1-58.8 15.2 50.7c3 10.2 12.4 17.1 23 17.1l104 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-86.1 0-16.1-53.6c-4.7-15.7-19.1-26.4-35.5-26.4z`]},Fp={prefix:`fas`,iconName:`arrow-down`,icon:[384,512,[8595],`f063`,`M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`]},Ip={prefix:`fas`,iconName:`location-dot`,icon:[384,512,[`map-marker-alt`],`f3c5`,`M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z`]},Lp={prefix:`fas`,iconName:`bars`,icon:[448,512,[`navicon`],`f0c9`,`M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`]},Rp={prefix:`fas`,iconName:`table-cells-large`,icon:[448,512,[`th-large`],`f009`,`M384 96l-128 0 0 128 128 0 0-128zm64 128l0 192c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 128zM64 288l0 128 128 0 0-128-128 0zm128-64l0-128-128 0 0 128 128 0zm64 64l0 128 128 0 0-128-128 0z`]},zp=(0,b.createContext)({});function Bp(e){let t=(0,b.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Vp=typeof window<`u`?b.useLayoutEffect:b.useEffect,Hp=(0,b.createContext)(null);function Up(e,t){e.indexOf(t)===-1&&e.push(t)}function Wp(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Gp=(e,t,n)=>n>t?t:n<e?e:n,Kp={},qp=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Jp(e){return typeof e==`object`&&!!e}var Yp=e=>/^0[^.\s]+$/u.test(e);function Xp(e){let t;return()=>(t===void 0&&(t=e()),t)}var Zp=e=>e,Qp=(e,t)=>n=>t(e(n)),$p=(...e)=>e.reduce(Qp),em=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},tm=class{constructor(){this.subscriptions=[]}add(e){return Up(this.subscriptions,e),()=>Wp(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},nm=e=>e*1e3,rm=e=>e/1e3;function im(e,t){return t?1e3/t*e:0}var am=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,om=1e-7,sm=12;function cm(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=am(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>om&&++s<sm);return o}function lm(e,t,n,r){if(e===t&&n===r)return Zp;let i=t=>cm(t,0,1,e,n);return e=>e===0||e===1?e:am(i(e),t,r)}var um=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,dm=e=>t=>1-e(1-t),fm=lm(.33,1.53,.69,.99),pm=dm(fm),mm=um(pm),hm=e=>e>=1?1:(e*=2)<1?.5*pm(e):.5*(2-2**(-10*(e-1))),gm=e=>1-Math.sin(Math.acos(e)),_m=dm(gm),vm=um(gm),ym=lm(.42,0,1,1),bm=lm(0,0,.58,1),xm=lm(.42,0,.58,1),Sm=e=>Array.isArray(e)&&typeof e[0]!=`number`,Cm=e=>Array.isArray(e)&&typeof e[0]==`number`,wm={linear:Zp,easeIn:ym,easeInOut:xm,easeOut:bm,circIn:gm,circInOut:vm,circOut:_m,backIn:pm,backInOut:mm,backOut:fm,anticipate:hm},Tm=e=>typeof e==`string`,Em=e=>{if(Cm(e)){e.length;let[t,n,r,i]=e;return lm(t,n,r,i)}else if(Tm(e))return wm[e],`${e}`,wm[e];return e},Dm=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],Om={value:null,addProjectionMetrics:null};function km(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&Om.value&&Om.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Am=40;function jm(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Dm.reduce((e,n)=>(e[n]=km(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Kp.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Am),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Dm.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Dm.length;t++)o[Dm[t]].cancel(e)},state:i,steps:o}}var{schedule:Mm,cancel:Nm,state:Pm,steps:Fm}=jm(typeof requestAnimationFrame<`u`?requestAnimationFrame:Zp,!0),Im;function Lm(){Im=void 0}var Rm={now:()=>(Im===void 0&&Rm.set(Pm.isProcessing||Kp.useManualTiming?Pm.timestamp:performance.now()),Im),set:e=>{Im=e,queueMicrotask(Lm)}},zm={layout:0,mainThread:0,waapi:0},Bm=e=>t=>typeof t==`string`&&t.startsWith(e),Vm=Bm(`--`),Hm=Bm(`var(--`),Um=e=>Hm(e)?Wm.test(e.split(`/*`)[0].trim()):!1,Wm=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Gm(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Km={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},qm={...Km,transform:e=>Gp(0,1,e)},Jm={...Km,default:1},Ym=e=>Math.round(e*1e5)/1e5,Xm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Zm(e){return e==null}var Qm=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,$m=(e,t)=>n=>!!(typeof n==`string`&&Qm.test(n)&&n.startsWith(e)||t&&!Zm(n)&&Object.prototype.hasOwnProperty.call(n,t)),eh=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Xm);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},th=e=>Gp(0,255,e),nh={...Km,transform:e=>Math.round(th(e))},rh={test:$m(`rgb`,`red`),parse:eh(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+nh.transform(e)+`, `+nh.transform(t)+`, `+nh.transform(n)+`, `+Ym(qm.transform(r))+`)`};function ih(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var ah={test:$m(`#`),parse:ih,transform:rh.transform},oh=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),sh=oh(`deg`),ch=oh(`%`),Q=oh(`px`),lh=oh(`vh`),uh=oh(`vw`),dh={...ch,parse:e=>ch.parse(e)/100,transform:e=>ch.transform(e*100)},fh={test:$m(`hsl`,`hue`),parse:eh(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+ch.transform(Ym(t))+`, `+ch.transform(Ym(n))+`, `+Ym(qm.transform(r))+`)`},ph={test:e=>rh.test(e)||ah.test(e)||fh.test(e),parse:e=>rh.test(e)?rh.parse(e):fh.test(e)?fh.parse(e):ah.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?rh.transform(e):fh.transform(e),getAnimatableNone:e=>{let t=ph.parse(e);return t.alpha=0,ph.transform(t)}},mh=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function hh(e){return isNaN(e)&&typeof e==`string`&&(e.match(Xm)?.length||0)+(e.match(mh)?.length||0)>0}var gh=`number`,_h=`color`,vh=`var`,yh=`var(`,bh="${}",xh=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Sh(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(xh,e=>(ph.test(e)?(r.color.push(a),i.push(_h),n.push(ph.parse(e))):e.startsWith(yh)?(r.var.push(a),i.push(vh),n.push(e)):(r.number.push(a),i.push(gh),n.push(parseFloat(e))),++a,bh)).split(bh),indexes:r,types:i}}function Ch(e){return Sh(e).values}function wh({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===gh?i+=Ym(r[a]):e===_h?i+=ph.transform(r[a]):i+=r[a]}return i}}function Th(e){return wh(Sh(e))}var Eh=e=>typeof e==`number`?0:ph.test(e)?ph.getAnimatableNone(e):e,Dh=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:Eh(e);function Oh(e){let t=Sh(e);return wh(t)(t.values.map((e,n)=>Dh(e,t.split[n])))}var kh={test:hh,parse:Ch,createTransformer:Th,getAnimatableNone:Oh};function Ah(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function jh({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Ah(s,r,e+1/3),a=Ah(s,r,e),o=Ah(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Mh(e,t){return n=>n>0?t:e}var Nh=(e,t,n)=>e+(t-e)*n,Ph=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Fh=[ah,rh,fh],Ih=e=>Fh.find(t=>t.test(e));function Lh(e){let t=Ih(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===fh&&(n=jh(n)),n}var Rh=(e,t)=>{let n=Lh(e),r=Lh(t);if(!n||!r)return Mh(e,t);let i={...n};return e=>(i.red=Ph(n.red,r.red,e),i.green=Ph(n.green,r.green,e),i.blue=Ph(n.blue,r.blue,e),i.alpha=Nh(n.alpha,r.alpha,e),rh.transform(i))},zh=new Set([`none`,`hidden`]);function Bh(e,t){return zh.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Vh(e,t){return n=>Nh(e,t,n)}function Hh(e){return typeof e==`number`?Vh:typeof e==`string`?Um(e)?Mh:ph.test(e)?Rh:Kh:Array.isArray(e)?Uh:typeof e==`object`?ph.test(e)?Rh:Wh:Mh}function Uh(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Hh(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Wh(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Hh(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Gh(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Kh=(e,t)=>{let n=kh.createTransformer(t),r=Sh(e),i=Sh(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?zh.has(e)&&!i.values.length||zh.has(t)&&!r.values.length?Bh(e,t):$p(Uh(Gh(r,i),i.values),n):(`${e}${t}`,Mh(e,t))};function qh(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?Nh(e,t,n):Hh(e)(e,t)}var Jh=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>Mm.update(t,e),stop:()=>Nm(t),now:()=>Pm.isProcessing?Pm.timestamp:Rm.now()}},Yh=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Xh=2e4;function Zh(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Qh(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Zh(r),Xh);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:rm(i)}}var $h={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function eg(e,t){return e*Math.sqrt(1-t*t)}var tg=12;function ng(e,t,n){let r=n;for(let n=1;n<tg;n++)r-=e(r)/t(r);return r}var rg=.001;function ig({duration:e=$h.duration,bounce:t=$h.bounce,velocity:n=$h.velocity,mass:r=$h.mass}){let i,a;$h.maxDuration;let o=1-t;o=Gp($h.minDamping,$h.maxDamping,o),e=Gp($h.minDuration,$h.maxDuration,rm(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=eg(t,o),c=Math.exp(-i);return rg-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=eg(t**2,o);return(-i(t)+rg>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-rg+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=ng(i,a,s);if(e=nm(e),isNaN(c))return{stiffness:$h.stiffness,damping:$h.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var ag=[`duration`,`bounce`],og=[`stiffness`,`damping`,`mass`];function sg(e,t){return t.some(t=>e[t]!==void 0)}function cg(e){let t={velocity:$h.velocity,stiffness:$h.stiffness,damping:$h.damping,mass:$h.mass,isResolvedFromDuration:!1,...e};if(!sg(e,og)&&sg(e,ag))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Gp(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:$h.mass,stiffness:i,damping:a}}else{let n=ig({...e,velocity:0});t={...t,...n,mass:$h.mass},t.isResolvedFromDuration=!0}return t}function lg(e=$h.visualDuration,t=$h.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=cg({...n,velocity:-rm(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=rm(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?$h.restSpeed.granular:$h.restSpeed.default,i||=v?$h.restDelta.granular:$h.restDelta.default;let y,b,x,S,C,w;if(h<1)x=eg(_,h),S=(m+h*_*g)/x,y=e=>o-Math.exp(-h*_*e)*(S*Math.sin(x*e)+g*Math.cos(x*e)),C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>nm(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=nm(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=nm(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Zh(T),Xh),t=Yh(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}lg.applyToOptions=e=>{let t=Qh(e,100,lg);return e.ease=t.ease,e.duration=nm(t.duration),e.type=`keyframes`,e};var ug=5;function dg(e,t,n){let r=Math.max(t-ug,0);return im(n-e(r),t-r)}function fg({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=lg({keyframes:[f.value,m(f.value)],velocity:dg(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function pg(e,t,n){let r=[],i=n||Kp.mix||qh,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=$p(Array.isArray(t)?t[n]||Zp:t,a)),r.push(a)}return r}function mg(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=pg(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=em(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Gp(e[0],e[a-1],t)):l}function hg(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=em(0,t,r);e.push(Nh(n,1,i))}}function gg(e){let t=[0];return hg(t,e.length-1),t}function _g(e,t){return e.map(e=>e*t)}function vg(e,t){return e.map(()=>t||xm).splice(0,e.length-1)}function yg({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=Sm(r)?r.map(Em):Em(r),a={done:!1,value:t[0]},o=mg(_g(n&&n.length===t.length?n:gg(t),e),t,{ease:Array.isArray(i)?i:vg(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var bg=e=>e!==null;function xg(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(bg),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Sg={decay:fg,inertia:fg,tween:yg,keyframes:yg,spring:lg};function Cg(e){typeof e.type==`string`&&(e.type=Sg[e.type])}var wg=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},Tg=e=>e/100,Eg=class extends wg{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Rm.now()&&this.tick(Rm.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},zm.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Cg(e);let{type:t=yg,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||yg;s!==yg&&typeof o[0]!=`number`&&(this.mixKeyframes=$p(Tg,qh(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Zh(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Gp(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==fg&&(b.value=xg(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return rm(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+rm(e)}get time(){return rm(this.currentTime)}set time(e){e=nm(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return dg(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Rm.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=rm(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Jh,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Rm.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,zm.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function Dg(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Og=e=>e*180/Math.PI,kg=e=>jg(Og(Math.atan2(e[1],e[0]))),Ag={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:kg,rotateZ:kg,skewX:e=>Og(Math.atan(e[1])),skewY:e=>Og(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},jg=e=>(e%=360,e<0&&(e+=360),e),Mg=kg,Ng=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Pg=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Fg={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ng,scaleY:Pg,scale:e=>(Ng(e)+Pg(e))/2,rotateX:e=>jg(Og(Math.atan2(e[6],e[5]))),rotateY:e=>jg(Og(Math.atan2(-e[2],e[0]))),rotateZ:Mg,rotate:Mg,skewX:e=>Og(Math.atan(e[4])),skewY:e=>Og(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Ig(e){return e.includes(`scale`)?1:0}function Lg(e,t){if(!e||e===`none`)return Ig(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Fg,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Ag,i=t}if(!i)return Ig(t);let a=r[t],o=i[1].split(`,`).map(zg);return typeof a==`function`?a(o):o[a]}var Rg=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Lg(n,t)};function zg(e){return parseFloat(e.trim())}var Bg=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Vg=new Set(Bg),Hg=e=>e===Km||e===Q,Ug=new Set([`x`,`y`,`z`]),Wg=Bg.filter(e=>!Ug.has(e));function Gg(e){let t=[];return Wg.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var Kg={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Lg(t,`x`),y:(e,{transform:t})=>Lg(t,`y`)};Kg.translateX=Kg.x,Kg.translateY=Kg.y;var qg=new Set,Jg=!1,Yg=!1,Xg=!1;function Zg(){if(Yg){let e=Array.from(qg).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Gg(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Yg=!1,Jg=!1,qg.forEach(e=>e.complete(Xg)),qg.clear()}function Qg(){qg.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Yg=!0)})}function $g(){Xg=!0,Qg(),Zg(),Xg=!1}var e_=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(qg.add(this),Jg||(Jg=!0,Mm.read(Qg),Mm.resolveKeyframes(Zg))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Dg(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),qg.delete(this)}cancel(){this.state===`scheduled`&&(qg.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},t_=e=>e.startsWith(`--`);function n_(e,t,n){t_(t)?e.style.setProperty(t,n):e.style[t]=n}var r_={};function i_(e,t){let n=Xp(e);return()=>r_[t]??n()}var a_=i_(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),o_=i_(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),s_=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,c_={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:s_([0,.65,.55,1]),circOut:s_([.55,0,1,.45]),backIn:s_([.31,.01,.66,-.59]),backOut:s_([.33,1.53,.69,.99])};function l_(e,t){if(e)return typeof e==`function`?o_()?Yh(e,t):`ease-out`:Cm(e)?s_(e):Array.isArray(e)?e.map(e=>l_(e,t)||c_.easeOut):c_[e]}function u_(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=l_(s,i);Array.isArray(d)&&(u.easing=d),Om.value&&zm.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return Om.value&&p.finished.finally(()=>{zm.waapi--}),p}function d_(e){return typeof e==`function`&&`applyToOptions`in e}function f_({type:e,...t}){return d_(e)&&o_()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var p_=class extends wg{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=f_(e);this.animation=u_(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=xg(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),n_(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return rm(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+rm(e)}get time(){return rm(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=nm(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&a_()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),Zp):r(this)}},m_={anticipate:hm,backInOut:mm,circInOut:vm};function h_(e){return e in m_}function g_(e){typeof e.ease==`string`&&h_(e.ease)&&(e.ease=m_[e.ease])}var __=10,v_=class extends p_{constructor(e){g_(e),Cg(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Eg({...a,autoplay:!1}),s=Math.max(__,Rm.now()-this.startTime),c=Gp(0,__,s-__),l=o.sample(s).value,{name:u}=this.options;i&&u&&n_(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},y_=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(kh.test(e)||e===`0`)&&!e.startsWith(`url(`));function b_(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function x_(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=y_(i,t),s=y_(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:b_(e)||(n===`spring`||d_(n))&&r}function S_(e){e.duration=0,e.type=`keyframes`}var C_=new Set([`opacity`,`clipPath`,`filter`,`transform`]),w_=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function T_(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&w_.test(e[t]))return!0;return!1}var E_=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),D_=Xp(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function O_(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return D_()&&n&&(C_.has(n)||E_.has(n)&&T_(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var k_=40,A_=class extends wg{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Rm.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||e_)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Rm.now();let u=!0;x_(e,i,a,o)||(u=!1,(Kp.instantAnimations||!s)&&l?.(xg(e,n,t)),e[0]=e[e.length-1],S_(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>k_?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&O_(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new v_({...d,element:p})}catch{m=new Eg(d)}else m=new Eg(d);m.finished.then(()=>{this.notifyFinished()}).catch(Zp),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),$g()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function j_(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var M_=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function N_(e){let t=M_.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function P_(e,t,n=1){`${e}`;let[r,i]=N_(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return qp(e)?parseFloat(e):e}return Um(i)?P_(i,t,n+1):i}var F_={type:`spring`,stiffness:500,damping:25,restSpeed:10},I_=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),L_={type:`keyframes`,duration:.8},R_={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},z_=(e,{keyframes:t})=>t.length>2?L_:Vg.has(e)?e.startsWith(`scale`)?I_(t[1]):F_:R_;function B_(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function V_(e,t){let n=e?.[t]??e?.default??e;return n===e?n:B_(n,e)}var H_=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function U_(e){for(let t in e)if(!H_.has(t))return!0;return!1}var W_=(e,t,n,r={},i,a)=>o=>{let s=V_(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=nm(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};U_(s)||Object.assign(u,z_(e,u)),u.duration&&=nm(u.duration),u.repeatDelay&&=nm(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(S_(u),u.delay===0&&(d=!0)),(Kp.instantAnimations||Kp.skipAnimations||i?.shouldSkipAnimations)&&(d=!0,S_(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=xg(u.keyframes,s);if(e!==void 0){Mm.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Eg(u):new A_(u)};function G_(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function K_(e,t,n,r){if(typeof t==`function`){let[i,a]=G_(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=G_(r);t=t(n===void 0?e.custom:n,i,a)}return t}function q_(e,t,n){let r=e.getProps();return K_(r,t,n===void 0?r.custom:n,e)}var J_=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Bg]),Y_=30,X_=e=>!isNaN(parseFloat(e)),Z_={current:void 0},Q_=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Rm.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Rm.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=X_(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new tm);let n=this.events[e].add(t);return e===`change`?()=>{n(),Mm.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Z_.current&&Z_.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Rm.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Y_)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Y_);return im(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function $_(e,t){return new Q_(e,t)}var ev=e=>Array.isArray(e);function tv(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,$_(n))}function nv(e){return ev(e)?e[e.length-1]||0:e}function rv(e,t){let{transitionEnd:n={},transition:r={},...i}=q_(e,t)||{};i={...i,...n};for(let t in i)tv(e,t,nv(i[t]))}var iv=e=>!!(e&&e.getVelocity);function av(e){return!!(iv(e)&&e.add)}function ov(e,t){let n=e.getValue(`willChange`);if(av(n))return n.add(t);if(!n&&Kp.WillChange){let n=new Kp.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function sv(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var cv=`data-`+sv(`framerAppearId`);function lv(e){return e.props[cv]}function uv({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function dv(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?B_(a,c):c;let l=a?.reduceMotion;r&&(a=r);let u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||d&&uv(d,t))continue;let o={delay:n,...V_(a||{},t)},c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){Mm.update(()=>r.set(i));continue}let f=!1;if(window.MotionHandoffAnimation){let n=lv(e);if(n){let e=window.MotionHandoffAnimation(n,t,Mm);e!==null&&(o.startTime=e,f=!0)}}ov(e,t);let p=l??e.shouldReduceMotion;r.start(W_(t,r,i,p&&J_.has(t)?{type:!1}:o,e,f));let m=r.animation;m&&u.push(m)}if(o){let t=()=>Mm.update(()=>{o&&rv(e,o)});u.length?Promise.all(u).then(t):t()}return u}function fv(e,t,n={}){let r=q_(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(dv(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return pv(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function pv(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(fv(c,t,{...o,delay:n+(typeof r==`function`?0:r)+j_(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function mv(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>fv(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=fv(e,t,n);else{let i=typeof t==`function`?q_(e,t,n.custom):t;r=Promise.all(dv(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var hv={test:e=>e===`auto`,parse:e=>e},gv=e=>t=>t.test(e),_v=[Km,Q,ch,sh,uh,lh,hv],vv=e=>_v.find(gv(e));function yv(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||Yp(e)}var bv=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function xv(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Xm)||[];if(!r)return e;let i=n.replace(r,``),a=bv.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var Sv=/\b([a-z-]*)\(.*?\)/gu,Cv={...kh,getAnimatableNone:e=>{let t=e.match(Sv);return t?t.map(xv).join(` `):e}},wv={...kh,getAnimatableNone:e=>{let t=kh.parse(e);return kh.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Tv={...Km,transform:Math.round},Ev={borderWidth:Q,borderTopWidth:Q,borderRightWidth:Q,borderBottomWidth:Q,borderLeftWidth:Q,borderRadius:Q,borderTopLeftRadius:Q,borderTopRightRadius:Q,borderBottomRightRadius:Q,borderBottomLeftRadius:Q,width:Q,maxWidth:Q,height:Q,maxHeight:Q,top:Q,right:Q,bottom:Q,left:Q,inset:Q,insetBlock:Q,insetBlockStart:Q,insetBlockEnd:Q,insetInline:Q,insetInlineStart:Q,insetInlineEnd:Q,padding:Q,paddingTop:Q,paddingRight:Q,paddingBottom:Q,paddingLeft:Q,paddingBlock:Q,paddingBlockStart:Q,paddingBlockEnd:Q,paddingInline:Q,paddingInlineStart:Q,paddingInlineEnd:Q,margin:Q,marginTop:Q,marginRight:Q,marginBottom:Q,marginLeft:Q,marginBlock:Q,marginBlockStart:Q,marginBlockEnd:Q,marginInline:Q,marginInlineStart:Q,marginInlineEnd:Q,fontSize:Q,backgroundPositionX:Q,backgroundPositionY:Q,rotate:sh,rotateX:sh,rotateY:sh,rotateZ:sh,scale:Jm,scaleX:Jm,scaleY:Jm,scaleZ:Jm,skew:sh,skewX:sh,skewY:sh,distance:Q,translateX:Q,translateY:Q,translateZ:Q,x:Q,y:Q,z:Q,perspective:Q,transformPerspective:Q,opacity:qm,originX:dh,originY:dh,originZ:Q,zIndex:Tv,fillOpacity:qm,strokeOpacity:qm,numOctaves:Tv},Dv={...Ev,color:ph,backgroundColor:ph,outlineColor:ph,fill:ph,stroke:ph,borderColor:ph,borderTopColor:ph,borderRightColor:ph,borderBottomColor:ph,borderLeftColor:ph,filter:Cv,WebkitFilter:Cv,mask:wv,WebkitMask:wv},Ov=e=>Dv[e],kv=new Set([Cv,wv]);function Av(e,t){let n=Ov(e);return kv.has(n)||(n=kh),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var jv=new Set([`auto`,`none`,`0`]);function Mv(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!jv.has(t)&&Sh(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Av(n,i)}var Nv=class extends e_{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Um(r))){let i=P_(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!J_.has(n)||e.length!==2)return;let[r,i]=e,a=vv(r),o=vv(i);if(Gm(r)!==Gm(i)&&Kg[n]){this.needsMeasurement=!0;return}if(a!==o)if(Hg(a)&&Hg(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Kg[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||yv(e[t]))&&n.push(t);n.length&&Mv(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Kg[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Kg[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function Pv(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var Fv=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Iv(e){return Jp(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:Lv,cancel:Rv}=jm(queueMicrotask,!1),zv={x:!1,y:!1};function Bv(){return zv.x||zv.y}function Vv(e){return e===`x`||e===`y`?zv[e]?null:(zv[e]=!0,()=>{zv[e]=!1}):zv.x||zv.y?null:(zv.x=zv.y=!0,()=>{zv.x=zv.y=!1})}function Hv(e,t){let n=Pv(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Uv(e){return!(e.pointerType===`touch`||Bv())}function Wv(e,t,n={}){let[r,i,a]=Hv(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!Uv(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Gv=(e,t)=>t?e===t?!0:Gv(e,t.parentElement):!1,Kv=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,qv=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Jv(e){return qv.has(e.tagName)||e.isContentEditable===!0}var Yv=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function Xv(e){return Yv.has(e.tagName)||e.isContentEditable===!0}var Zv=new WeakSet;function Qv(e){return t=>{t.key===`Enter`&&e(t)}}function $v(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var ey=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Qv(()=>{if(Zv.has(n))return;$v(n,`down`);let e=Qv(()=>{$v(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>$v(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function ty(e){return Kv(e)&&!Bv()}var ny=new WeakSet;function ry(e,t,n={}){let[r,i,a]=Hv(e,n),o=e=>{let r=e.currentTarget;if(!ty(e)||ny.has(e))return;Zv.add(r),n.stopPropagation&&ny.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),Zv.has(r)&&Zv.delete(r),ty(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Gv(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Iv(e)&&(e.addEventListener(`focus`,e=>ey(e,i)),!Jv(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function iy(e){return Jp(e)&&`ownerSVGElement`in e}var ay=new WeakMap,oy,sy=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:iy(r)&&`getBBox`in r?r.getBBox()[t]:r[n],cy=sy(`inline`,`width`,`offsetWidth`),ly=sy(`block`,`height`,`offsetHeight`);function uy({target:e,borderBoxSize:t}){ay.get(e)?.forEach(n=>{n(e,{get width(){return cy(e,t)},get height(){return ly(e,t)}})})}function dy(e){e.forEach(uy)}function fy(){typeof ResizeObserver>`u`||(oy=new ResizeObserver(dy))}function py(e,t){oy||fy();let n=Pv(e);return n.forEach(e=>{let n=ay.get(e);n||(n=new Set,ay.set(e,n)),n.add(t),oy?.observe(e)}),()=>{n.forEach(e=>{let n=ay.get(e);n?.delete(t),n?.size||oy?.unobserve(e)})}}var my=new Set,hy;function gy(){hy=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};my.forEach(t=>t(e))},window.addEventListener(`resize`,hy)}function _y(e){return my.add(e),hy||gy(),()=>{my.delete(e),!my.size&&typeof hy==`function`&&(window.removeEventListener(`resize`,hy),hy=void 0)}}function vy(e,t){return typeof e==`function`?_y(e):py(e,t)}function yy(e){return iy(e)&&e.tagName===`svg`}var by=[..._v,ph,kh],xy=e=>by.find(gv(e)),Sy=()=>({translate:0,scale:1,origin:0,originPoint:0}),Cy=()=>({x:Sy(),y:Sy()}),wy=()=>({min:0,max:0}),Ty=()=>({x:wy(),y:wy()}),Ey=new WeakMap;function Dy(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Oy(e){return typeof e==`string`||Array.isArray(e)}var ky=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Ay=[`initial`,...ky];function jy(e){return Dy(e.animate)||Ay.some(t=>Oy(e[t]))}function My(e){return!!(jy(e)||e.variants)}function Ny(e,t,n){for(let r in t){let i=t[r],a=n[r];if(iv(i))e.addValue(r,i);else if(iv(a))e.addValue(r,$_(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,$_(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Py={current:null},Fy={current:!1},Iy=typeof window<`u`;function Ly(){if(Fy.current=!0,Iy)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Py.current=e.matches;e.addEventListener(`change`,t),t()}else Py.current=!1}var Ry=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],zy={};function By(e){zy=e}function Vy(){return zy}var Hy=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=e_,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Rm.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,Mm.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=jy(t),this.isVariantNode=My(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&iv(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Ey.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Fy.current||Ly(),this.shouldReduceMotion=Py.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Nm(this.notifyUpdate),Nm(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&C_.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new p_({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:nm(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=Vg.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&Mm.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in zy){let t=zy[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ty()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Ry.length;t++){let n=Ry[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Ny(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=$_(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(qp(n)||Yp(n))?n=parseFloat(n):!xy(n)&&kh.test(t)&&(n=Av(e,t)),this.setBaseTarget(e,iv(n)?n.get():n)),iv(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=K_(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!iv(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new tm),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Lv.render(this.render)}},Uy=class extends Hy{constructor(){super(...arguments),this.KeyframeResolver=Nv}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;iv(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},Wy=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Gy({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Ky({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function qy(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Jy(e){return e===void 0||e===1}function Yy({scale:e,scaleX:t,scaleY:n}){return!Jy(e)||!Jy(t)||!Jy(n)}function Xy(e){return Yy(e)||Zy(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Zy(e){return Qy(e.x)||Qy(e.y)}function Qy(e){return e&&e!==`0%`}function $y(e,t,n){return n+t*(e-n)}function eb(e,t,n,r,i){return i!==void 0&&(e=$y(e,i,r)),$y(e,n,r)+t}function tb(e,t=0,n=1,r,i){e.min=eb(e.min,t,n,r,i),e.max=eb(e.max,t,n,r,i)}function nb(e,{x:t,y:n}){tb(e.x,t.translate,t.scale,t.originPoint),tb(e.y,n.translate,n.scale,n.originPoint)}var rb=.999999999999,ib=1.0000000000001;function ab(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(ob(e.x,-a.scroll.offset.x),ob(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,nb(e,o)),r&&Xy(a.latestValues)&&lb(e,a.latestValues,a.layout?.layoutBox))}t.x<ib&&t.x>rb&&(t.x=1),t.y<ib&&t.y>rb&&(t.y=1)}function ob(e,t){e.min+=t,e.max+=t}function sb(e,t,n,r,i=.5){tb(e,t,n,Nh(e.min,e.max,i),r)}function cb(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function lb(e,t,n){let r=n??e;sb(e.x,cb(t.x,r.x),t.scaleX,t.scale,t.originX),sb(e.y,cb(t.y,r.y),t.scaleY,t.scale,t.originY)}function ub(e,t){return Gy(qy(e.getBoundingClientRect(),t))}function db(e,t,n){let r=ub(e,n),{scroll:i}=t;return i&&(ob(r.x,i.offset.x),ob(r.y,i.offset.y)),r}var fb={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},pb=Bg.length;function mb(e,t,n){let r=``,i=!0;for(let a=0;a<pb;a++){let o=Bg[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=Fv(s,Ev[o]);if(!c){i=!1;let t=fb[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function hb(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Vg.has(e)){o=!0;continue}else if(Vm(e)){i[e]=n;continue}else{let t=Fv(n,Ev[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=mb(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function gb(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function _b(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var vb={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(Q.test(e))e=parseFloat(e);else return e;return`${_b(e,t.target.x)}% ${_b(e,t.target.y)}%`}},yb={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=kh.parse(e);if(i.length>5)return r;let a=kh.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=Nh(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},bb={borderRadius:{...vb,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:vb,borderTopRightRadius:vb,borderBottomLeftRadius:vb,borderBottomRightRadius:vb,boxShadow:yb};function xb(e,{layout:t,layoutId:n}){return Vg.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!bb[e]||e===`opacity`)}function Sb(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(iv(r[t])||i&&iv(i[t])||xb(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Cb(e){return window.getComputedStyle(e)}var wb=class extends Uy{constructor(){super(...arguments),this.type=`html`,this.renderInstance=gb}readValueFromInstance(e,t){if(Vg.has(t))return this.projection?.isProjecting?Ig(t):Rg(e,t);{let n=Cb(e),r=(Vm(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return ub(e,t)}build(e,t,n){hb(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Sb(e,t,n)}},Tb={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Eb={offset:`strokeDashoffset`,array:`strokeDasharray`};function Db(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Tb:Eb;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Ob=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function kb(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(hb(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Ob)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Db(d,i,a,o,!1)}var Ab=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),jb=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Mb(e,t,n,r){gb(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Ab.has(n)?n:sv(n),t.attrs[n])}function Nb(e,t,n){let r=Sb(e,t,n);for(let n in e)if(iv(e[n])||iv(t[n])){let t=Bg.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Pb=class extends Uy{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Ty}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Vg.has(t)){let e=Ov(t);return e&&e.default||0}return t=Ab.has(t)?t:sv(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Nb(e,t,n)}build(e,t,n){kb(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Mb(e,t,n,r)}mount(e){this.isSVGTag=jb(e.tagName),super.mount(e)}},Fb=Ay.length;function Ib(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&Ib(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Fb;n++){let r=Ay[n],i=e.props[r];(Oy(i)||i===!1)&&(t[r]=i)}return t}function Lb(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var Rb=[...ky].reverse(),zb=ky.length;function Bb(e){return t=>Promise.all(t.map(({animation:t,options:n})=>mv(e,t,n)))}function Vb(e){let t=Bb(e),n=Wb(),r=!0,i=!1,a=t=>(n,r)=>{let i=q_(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=Ib(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<zb;t++){let p=Rb[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=Oy(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||Dy(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=Hb(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},E=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=ev(t)&&ev(n)?!Lb(t,n):t!==n,r?t==null?u.add(e):E(e):t!==void 0&&u.has(e)?E(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let D=v&&y;b&&(!D||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!D&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=q_(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=j_(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=q_(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Wb(),i=!0}}}function Hb(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!Lb(t,e):!1}function Ub(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Wb(){return{animate:Ub(!0),whileInView:Ub(),whileHover:Ub(),whileTap:Ub(),whileDrag:Ub(),whileFocus:Ub(),exit:Ub()}}function Gb(e,t){e.min=t.min,e.max=t.max}function Kb(e,t){Gb(e.x,t.x),Gb(e.y,t.y)}function qb(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Jb=1e-4,Yb=1-Jb,Xb=1+Jb,Zb=.01,Qb=0-Zb,$b=0+Zb;function ex(e){return e.max-e.min}function tx(e,t,n){return Math.abs(e-t)<=n}function nx(e,t,n,r=.5){e.origin=r,e.originPoint=Nh(t.min,t.max,e.origin),e.scale=ex(n)/ex(t),e.translate=Nh(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Yb&&e.scale<=Xb||isNaN(e.scale))&&(e.scale=1),(e.translate>=Qb&&e.translate<=$b||isNaN(e.translate))&&(e.translate=0)}function rx(e,t,n,r){nx(e.x,t.x,n.x,r?r.originX:void 0),nx(e.y,t.y,n.y,r?r.originY:void 0)}function ix(e,t,n,r=0){e.min=(r?Nh(n.min,n.max,r):n.min)+t.min,e.max=e.min+ex(t)}function ax(e,t,n,r){ix(e.x,t.x,n.x,r?.x),ix(e.y,t.y,n.y,r?.y)}function ox(e,t,n,r=0){let i=r?Nh(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+ex(t)}function sx(e,t,n,r){ox(e.x,t.x,n.x,r?.x),ox(e.y,t.y,n.y,r?.y)}function cx(e,t,n,r,i){return e-=t,e=$y(e,1/n,r),i!==void 0&&(e=$y(e,1/i,r)),e}function lx(e,t=0,n=1,r=.5,i,a=e,o=e){if(ch.test(t)&&(t=parseFloat(t),t=Nh(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=Nh(a.min,a.max,r);e===a&&(s-=t),e.min=cx(e.min,t,n,s,i),e.max=cx(e.max,t,n,s,i)}function ux(e,t,[n,r,i],a,o){lx(e,t[n],t[r],t[i],t.scale,a,o)}var dx=[`x`,`scaleX`,`originX`],fx=[`y`,`scaleY`,`originY`];function px(e,t,n,r){ux(e.x,t,dx,n?n.x:void 0,r?r.x:void 0),ux(e.y,t,fx,n?n.y:void 0,r?r.y:void 0)}function mx(e){return e.translate===0&&e.scale===1}function hx(e){return mx(e.x)&&mx(e.y)}function gx(e,t){return e.min===t.min&&e.max===t.max}function _x(e,t){return gx(e.x,t.x)&&gx(e.y,t.y)}function vx(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function yx(e,t){return vx(e.x,t.x)&&vx(e.y,t.y)}function bx(e){return ex(e.x)/ex(e.y)}function xx(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Sx(e){return[e(`x`),e(`y`)]}function Cx(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var wx=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`],Tx=wx.length,Ex=e=>typeof e==`string`?parseFloat(e):e,Dx=e=>typeof e==`number`||Q.test(e);function Ox(e,t,n,r,i,a){i?(e.opacity=Nh(0,n.opacity??1,Ax(r)),e.opacityExit=Nh(t.opacity??1,0,jx(r))):a&&(e.opacity=Nh(t.opacity??1,n.opacity??1,r));for(let i=0;i<Tx;i++){let a=wx[i],o=kx(t,a),s=kx(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Dx(o)===Dx(s)?(e[a]=Math.max(Nh(Ex(o),Ex(s),r),0),(ch.test(s)||ch.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=Nh(t.rotate||0,n.rotate||0,r))}function kx(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Ax=Mx(0,.5,_m),jx=Mx(.5,.95,Zp);function Mx(e,t,n){return r=>r<e?0:r>t?1:n(em(e,t,r))}function Nx(e,t,n){let r=iv(e)?e:$_(e);return r.start(W_(``,r,t,n)),r.animation}function Px(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var Fx=(e,t)=>e.depth-t.depth,Ix=class{constructor(){this.children=[],this.isDirty=!1}add(e){Up(this.children,e),this.isDirty=!0}remove(e){Wp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Fx),this.isDirty=!1,this.children.forEach(e)}};function Lx(e,t){let n=Rm.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Nm(r),e(a-t))};return Mm.setup(r,!0),()=>Nm(r)}function Rx(e){return iv(e)?e.get():e}var zx=class{constructor(){this.members=[]}add(e){Up(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(Wp(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(Wp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},Bx={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Vx={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Hx=[``,`X`,`Y`,`Z`],Ux=1e3,Wx=0;function Gx(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Kx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=lv(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,Mm,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Kx(r)}function qx({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Wx++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Om.value&&(Vx.nodes=Vx.calculatedTargetDeltas=Vx.calculatedProjections=0),this.nodes.forEach(Xx),this.nodes.forEach(aS),this.nodes.forEach(oS),this.nodes.forEach(Zx),Om.addProjectionMetrics&&Om.addProjectionMetrics(Vx)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ix)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new tm),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=iy(t)&&!yy(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;Mm.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Lx(i,250),Bx.hasAnimatedSinceResize&&(Bx.hasAnimatedSinceResize=!1,this.nodes.forEach(iS)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||pS,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!yx(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...V_(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||iS(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Nm(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(sS),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Kx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(eS),this.nodes.forEach($x);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(tS);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(nS),this.nodes.forEach(rS),this.nodes.forEach(Jx),this.nodes.forEach(Yx)):this.nodes.forEach(tS),this.clearAllSnapshots();let e=Rm.now();Pm.delta=Gp(0,1e3/60,e-Pm.timestamp),Pm.timestamp=e,Pm.isProcessing=!0,Fm.update.process(Pm),Fm.preRender.process(Pm),Fm.render.process(Pm),Pm.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Lv.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Qx),this.sharedNodes.forEach(cS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Mm.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Mm.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ex(this.snapshot.measuredBox.x)&&!ex(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=Ty(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!hx(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Xy(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),_S(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Ty();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(yS))){let{scroll:e}=this.root;e&&(ob(t.x,e.offset.x),ob(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Ty();if(Kb(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Kb(t,e),ob(t.x,i.offset.x),ob(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||Ty();Kb(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(ob(r.x,-n.scroll.offset.x),ob(r.y,-n.scroll.offset.y)),Xy(n.latestValues)&&lb(r,n.latestValues,n.layout?.layoutBox)}return Xy(this.latestValues)&&lb(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=Ty();Kb(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!Xy(n.latestValues))continue;let r;n.instance&&(Yy(n.latestValues)&&n.updateSnapshot(),r=Ty(),Kb(r,n.measurePageBox())),px(t,n.latestValues,n.snapshot?.layoutBox,r)}return Xy(this.latestValues)&&px(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Pm.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=Pm.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ty(),this.targetWithTransforms=Ty()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ax(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Kb(this.target,this.layout.layoutBox),nb(this.target,this.targetDelta)):Kb(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Om.value&&Vx.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Yy(this.parent.latestValues)||Zy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ty(),this.relativeTargetOrigin=Ty(),sx(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),Kb(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Pm.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;Kb(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;ab(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Ty());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(qb(this.prevProjectionDelta.x,this.projectionDelta.x),qb(this.prevProjectionDelta.y,this.projectionDelta.y)),rx(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!xx(this.projectionDelta.x,this.prevProjectionDelta.x)||!xx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Om.value&&Vx.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Cy(),this.projectionDelta=Cy(),this.projectionDeltaWithTransform=Cy()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Cy();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=Ty(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(fS));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;lS(a.x,e.x,n),lS(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(sx(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),dS(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&_x(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=Ty(),Kb(d,this.relativeTarget)),s&&(this.animationValues=i,Ox(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Nm(this.pendingAnimation),void 0),this.pendingAnimation=Mm.update(()=>{Bx.hasAnimatedSinceResize=!0,zm.layout++,this.motionValue||=$_(0),this.motionValue.jump(0,!1),this.currentAnimation=Nx(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{zm.layout--},onComplete:()=>{zm.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ux),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&vS(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||Ty();let t=ex(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=ex(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Kb(t,n),lb(t,i),rx(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new zx),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&Gx(`z`,e,r,this.animationValues);for(let t=0;t<Hx.length;t++)Gx(`rotate${Hx[t]}`,e,r,this.animationValues),Gx(`skew${Hx[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Rx(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Rx(t?.pointerEvents)||``),this.hasProjected&&!Xy(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Cx(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in bb){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=bb[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Rx(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach($x),this.root.sharedNodes.clear()}}}function Jx(e){e.updateLayout()}function Yx(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)Sx(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=ex(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;Gb(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else vS(i,t.layoutBox,n)&&Sx(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=ex(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Cy();rx(o,n,t.layoutBox);let s=Cy();a?rx(s,e.applyTransform(r,!0),t.measuredBox):rx(s,n,t.layoutBox);let c=!hx(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=Ty();sx(s,t.layoutBox,i.layoutBox,o);let c=Ty();sx(c,n,a.layoutBox,o),yx(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Xx(e){Om.value&&Vx.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function Zx(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Qx(e){e.clearSnapshot()}function $x(e){e.clearMeasurements()}function eS(e){e.isLayoutDirty=!0,e.updateLayout()}function tS(e){e.isLayoutDirty=!1}function nS(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function rS(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function iS(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function aS(e){e.resolveTargetDelta()}function oS(e){e.calcProjection()}function sS(e){e.resetSkewAndRotation()}function cS(e){e.removeLeadSnapshot()}function lS(e,t,n){e.translate=Nh(t.translate,0,n),e.scale=Nh(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function uS(e,t,n,r){e.min=Nh(t.min,n.min,r),e.max=Nh(t.max,n.max,r)}function dS(e,t,n,r){uS(e.x,t.x,n.x,r),uS(e.y,t.y,n.y,r)}function fS(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var pS={duration:.45,ease:[.4,0,.1,1]},mS=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),hS=mS(`applewebkit/`)&&!mS(`chrome/`)?Math.round:Zp;function gS(e){e.min=hS(e.min),e.max=hS(e.max)}function _S(e){gS(e.x),gS(e.y)}function vS(e,t,n){return e===`position`||e===`preserve-aspect`&&!tx(bx(t),bx(n),.2)}function yS(e){return e!==e.root&&e.scroll?.wasRoot}var bS=qx({attachResizeListener:(e,t)=>Px(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),xS={current:void 0},SS=qx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!xS.current){let e=new bS({});e.mount(window),e.setOptions({layoutScroll:!0}),xS.current=e}return xS.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),CS=(0,b.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function wS(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function TS(...e){return t=>{let n=!1,r=e.map(e=>{let r=wS(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():wS(e[t],null)}}}}function ES(...e){return b.useCallback(TS(...e),e)}var DS=class extends b.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(Iv(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=Iv(e)&&e.offsetWidth||0,r=Iv(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}};function OS({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,b.useId)(),s=(0,b.useRef)(null),c=(0,b.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:l}=(0,b.useContext)(CS),u=ES(s,e.props?.ref??e?.ref);return(0,b.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m}=c.current;if(t||a===!1||!s.current||!e||!u)return;let h=n===`left`?`left: ${f}`:`right: ${p}`,g=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let _=document.createElement(`style`);l&&(_.nonce=l);let v=i??document.head;return v.appendChild(_),_.sheet&&_.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),v.contains(_)&&v.removeChild(_)}},[t]),(0,N.jsx)(DS,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:b.cloneElement(e,{ref:u})})}var kS=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Bp(AS),d=(0,b.useId)(),f=!0,p=(0,b.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,b.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),b.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,N.jsx)(OS,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,N.jsx)(Hp.Provider,{value:p,children:e})};function AS(){return new Map}function jS(e=!0){let t=(0,b.useContext)(Hp);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,b.useId)();(0,b.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,b.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var MS=e=>e.key||``;function NS(e){let t=[];return b.Children.forEach(e,e=>{(0,b.isValidElement)(e)&&t.push(e)}),t}var PS=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=jS(o),f=(0,b.useMemo)(()=>NS(e),[e]),p=o&&!u?[]:f.map(MS),m=(0,b.useRef)(!0),h=(0,b.useRef)(f),g=Bp(()=>new Map),_=(0,b.useRef)(new Set),[v,y]=(0,b.useState)(f),[x,S]=(0,b.useState)(f);Vp(()=>{m.current=!1,h.current=f;for(let e=0;e<x.length;e++){let t=MS(x[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[x,p.length,p.join(`-`)]);let C=[];if(f!==v){let e=[...f];for(let t=0;t<x.length;t++){let n=x[t],r=MS(n);p.includes(r)||(e.splice(t,0,n),C.push(n))}return a===`wait`&&C.length&&(e=C),S(NS(e)),y(f),null}let{forceRender:w}=(0,b.useContext)(zp);return(0,N.jsx)(N.Fragment,{children:x.map(e=>{let v=MS(e),y=o&&!u?!1:f===x||p.includes(v);return(0,N.jsx)(kS,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(w?.(),S(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},FS=(0,b.createContext)({strict:!1}),IS={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},LS=!1;function RS(){if(LS)return;let e={};for(let t in IS)e[t]={isEnabled:e=>IS[t].some(t=>!!e[t])};By(e),LS=!0}function zS(){return RS(),Vy()}function BS(e){let t=zS();for(let n in e)t[n]={...t[n],...e[n]};By(t)}var VS=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function HS(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||VS.has(e)}var US=c({default:()=>WS}),WS,GS=o((()=>{throw WS={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),KS=e=>!HS(e);function qS(e){typeof e==`function`&&(KS=t=>t.startsWith(`on`)?!HS(t):e(t))}try{qS((GS(),d(US)).default)}catch{}function JS(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||iv(e[i])||(KS(i)||n===!0&&HS(i)||!t&&!HS(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var YS=(0,b.createContext)({});function XS(e,t){if(jy(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Oy(t)?t:void 0,animate:Oy(n)?n:void 0}}return e.inherit===!1?{}:t}function ZS(e){let{initial:t,animate:n}=XS(e,(0,b.useContext)(YS));return(0,b.useMemo)(()=>({initial:t,animate:n}),[QS(t),QS(n)])}function QS(e){return Array.isArray(e)?e.join(` `):e}var $S=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function eC(e,t,n){for(let r in t)!iv(t[r])&&!xb(r,n)&&(e[r]=t[r])}function tC({transformTemplate:e},t){return(0,b.useMemo)(()=>{let n=$S();return hb(n,t,e),Object.assign({},n.vars,n.style)},[t])}function nC(e,t){let n=e.style||{},r={};return eC(r,n,e),Object.assign(r,tC(e,t)),r}function rC(e,t){let n={},r=nC(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var iC=()=>({...$S(),attrs:{}});function aC(e,t,n,r){let i=(0,b.useMemo)(()=>{let n=iC();return kb(n,t,jb(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};eC(t,e.style,e),i.style={...t,...i.style}}return i}var oC=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function sC(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(oC.indexOf(e)>-1||/[A-Z]/u.test(e))}function cC(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??sC(e)?aC:rC)(t,r,i,e),c=JS(t,typeof e==`string`,a),l=e===b.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,b.useMemo)(()=>iv(u)?u.get():u,[u]);return(0,b.createElement)(e,{...l,children:d})}function lC({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:uC(n,r,i,e),renderState:t()}}function uC(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Rx(a[e]);let{initial:o,animate:s}=e,c=jy(e),l=My(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Dy(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=K_(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var dC=e=>(t,n)=>{let r=(0,b.useContext)(YS),i=(0,b.useContext)(Hp),a=()=>lC(e,t,r,i);return n?a():Bp(a)},fC=dC({scrapeMotionValuesFromProps:Sb,createRenderState:$S}),pC=dC({scrapeMotionValuesFromProps:Nb,createRenderState:iC}),mC=Symbol.for(`motionComponentSymbol`);function hC(e,t,n){let r=(0,b.useRef)(n);(0,b.useInsertionEffect)(()=>{r.current=n});let i=(0,b.useRef)(null);return(0,b.useCallback)(n=>{n&&e.onMount?.(n);let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n);t&&(n?t.mount(n):t.unmount())},[t])}var gC=(0,b.createContext)({});function _C(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function vC(e,t,n,r,i,a){let{visualElement:o}=(0,b.useContext)(YS),s=(0,b.useContext)(FS),c=(0,b.useContext)(Hp),l=(0,b.useContext)(CS),u=l.reducedMotion,d=l.skipAnimations,f=(0,b.useRef)(null),p=(0,b.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,b.useContext)(gC);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&yC(f.current,n,i,h);let g=(0,b.useRef)(!1);(0,b.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[cv],v=(0,b.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return Vp(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,b.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function yC(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:bC(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&_C(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function bC(e){if(e)return e.options.allowProjection===!1?bC(e.parent):e.projection}function xC(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&BS(r);let a=n?n===`svg`:sC(e),o=a?pC:fC;function s(n,s){let c,l={...(0,b.useContext)(CS),...n,layoutId:SC(n)},{isStatic:u}=l,d=ZS(n),f=o(n,u);if(!u&&typeof window<`u`){CC(l,r);let t=wC(l);c=t.MeasureLayout,d.visualElement=vC(e,f,l,i,t.ProjectionNode,a)}return(0,N.jsxs)(YS.Provider,{value:d,children:[c&&d.visualElement?(0,N.jsx)(c,{visualElement:d.visualElement,...l}):null,cC(e,n,hC(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,b.forwardRef)(s);return c[mC]=e,c}function SC({layoutId:e}){let t=(0,b.useContext)(zp).id;return t&&e!==void 0?t+`-`+e:e}function CC(e,t){(0,b.useContext)(FS).strict}function wC(e){let{drag:t,layout:n}=zS();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function TC(e,t){if(typeof Proxy>`u`)return xC;let n=new Map,r=(n,r)=>xC(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,xC(a,void 0,e,t)),n.get(a))})}var EC=(e,t)=>t.isSVG??sC(e)?new Pb(t):new wb(t,{allowProjection:e!==b.Fragment}),DC=class extends Wy{constructor(e){super(e),e.animationState||=Vb(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Dy(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},OC=0,kC={animation:{Feature:DC},exit:{Feature:class extends Wy{constructor(){super(...arguments),this.id=OC++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`){let n=q_(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function AC(e){return{point:{x:e.pageX,y:e.pageY}}}var jC=e=>t=>Kv(t)&&e(t,AC(t));function MC(e,t,n,r){return Px(e,t,jC(n),r)}var NC=({current:e})=>e?e.ownerDocument.defaultView:null,PC=(e,t)=>Math.abs(e-t);function FC(e,t){let n=PC(e.x,t.x),r=PC(e.y,t.y);return Math.sqrt(n**2+r**2)}var IC=new Set([`auto`,`scroll`]),LC=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=RC(this.lastRawMoveEventInfo,this.transformPagePoint));let e=BC(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=FC(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=Pm;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=RC(t,this.transformPagePoint),Mm.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=BC(e.type===`pointercancel`?this.lastMoveEventInfo:RC(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Kv(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=RC(AC(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=Pm;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,BC(s,this.history)),this.removeListeners=$p(MC(this.contextWindow,`pointermove`,this.handlePointerMove),MC(this.contextWindow,`pointerup`,this.handlePointerUp),MC(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(IC.has(e.overflowX)||IC.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),Mm.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Nm(this.updatePoint)}};function RC(e,t){return t?{point:t(e.point)}:e}function zC(e,t){return{x:e.x-t.x,y:e.y-t.y}}function BC({point:e},t){return{point:e,delta:zC(e,HC(t)),offset:zC(e,VC(t)),velocity:UC(t,.1)}}function VC(e){return e[0]}function HC(e){return e[e.length-1]}function UC(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=HC(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>nm(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>nm(t)*2&&(r=e[1]);let a=rm(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function WC(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Nh(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Nh(n,e,r.max):Math.min(e,n)),e}function GC(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function KC(e,{top:t,left:n,bottom:r,right:i}){return{x:GC(e.x,n,i),y:GC(e.y,t,r)}}function qC(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function JC(e,t){return{x:qC(e.x,t.x),y:qC(e.y,t.y)}}function YC(e,t){let n=.5,r=ex(e),i=ex(t);return i>r?n=em(t.min,t.max-r,e.min):r>i&&(n=em(e.min,e.max-i,t.min)),Gp(0,1,n)}function XC(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var ZC=.35;function QC(e=ZC){return e===!1?e=0:e===!0&&(e=ZC),{x:$C(e,`left`,`right`),y:$C(e,`top`,`bottom`)}}function $C(e,t,n){return{min:ew(e,t),max:ew(e,n)}}function ew(e,t){return typeof e==`number`?e:e[t]||0}var tw=new WeakMap,nw=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ty(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(AC(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Vv(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Sx(e=>{let t=this.getAxisMotionValue(e).get()||0;if(ch.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=ex(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&Mm.update(()=>i(e,t),!1,!0),ov(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=ow(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&Mm.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new LC(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:NC(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&Mm.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!aw(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=WC(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&_C(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=KC(n.layoutBox,e):this.constraints=!1,this.elastic=QC(t),r!==this.constraints&&!_C(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Sx(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=XC(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!_C(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=db(n,r.root,this.visualElement.getTransformPagePoint()),a=JC(r.layout.layoutBox,i);if(t){let e=t(Ky(a));this.hasMutatedConstraints=!!e,e&&(a=Gy(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Sx(o=>{if(!aw(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return ov(this.visualElement,e),n.start(W_(e,n,0,t,this.visualElement,!1))}stopAnimation(){Sx(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Sx(t=>{let{drag:n}=this.getProps();if(!aw(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-Nh(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!_C(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Sx(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=YC({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Sx(t=>{if(!aw(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(Nh(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;tw.set(this.visualElement,this);let e=this.visualElement.current,t=MC(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Xv(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();_C(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=iw(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Mm.read(r);let o=Px(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Sx(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=ZC,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function rw(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function iw(e,t,n){let r=vy(e,rw(n)),i=vy(t,rw(n));return()=>{r(),i()}}function aw(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function ow(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var sw=class extends Wy{constructor(e){super(e),this.removeGroupControls=Zp,this.removeListeners=Zp,this.controls=new nw(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Zp}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},cw=e=>(t,n)=>{e&&Mm.update(()=>e(t,n),!1,!0)},lw=class extends Wy{constructor(){super(...arguments),this.removePointerDownListener=Zp}onPointerDown(e){this.session=new LC(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:NC(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:cw(e),onStart:cw(t),onMove:cw(n),onEnd:(e,t)=>{delete this.session,r&&Mm.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=MC(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},uw=!1,dw=class extends b.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),uw&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Bx.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),uw=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||Mm.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Lv.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;uw=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function fw(e){let[t,n]=jS(),r=(0,b.useContext)(zp);return(0,N.jsx)(dw,{...e,layoutGroup:r,switchLayoutGroup:(0,b.useContext)(gC),isPresent:t,safeToRemove:n})}var pw={pan:{Feature:lw},drag:{Feature:sw,ProjectionNode:SS,MeasureLayout:fw}};function mw(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&Mm.postRender(()=>i(t,AC(t)))}var hw=class extends Wy{mount(){let{current:e}=this.node;e&&(this.unmount=Wv(e,(e,t)=>(mw(this.node,t,`Start`),e=>mw(this.node,e,`End`))))}unmount(){}},gw=class extends Wy{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=$p(Px(this.node.current,`focus`,()=>this.onFocus()),Px(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function _w(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&Mm.postRender(()=>i(t,AC(t)))}var vw=class extends Wy{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=ry(e,(e,t)=>(_w(this.node,t,`Start`),(e,{success:t})=>_w(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},yw=new WeakMap,bw=new WeakMap,xw=e=>{let t=yw.get(e.target);t&&t(e)},Sw=e=>{e.forEach(xw)};function Cw({root:e,...t}){let n=e||document;bw.has(n)||bw.set(n,{});let r=bw.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Sw,{root:e,...t})),r[i]}function ww(e,t,n){let r=Cw(t);return yw.set(e,n),r.observe(e),()=>{yw.delete(e),r.unobserve(e)}}var Tw={some:0,all:1},Ew=class extends Wy{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Tw[r]};this.stopObserver=ww(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Dw(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function Dw({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Ow={inView:{Feature:Ew},tap:{Feature:vw},focus:{Feature:gw},hover:{Feature:hw}},kw={layout:{ProjectionNode:SS,MeasureLayout:fw}},$=TC({...kC,...Ow,...pw,...kw},EC),Aw={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.1,delayChildren:.3}}},jw={hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{duration:.5}}},Mw=()=>{let[e,t]=(0,b.useState)({username:``,password:``}),[n,r]=(0,b.useState)(0),i=lt();return(0,b.useEffect)(()=>{let e=setInterval(()=>{r(e=>e+1)},3e3);return()=>clearInterval(e)},[]),(0,N.jsxs)(`div`,{className:`login-screen`,children:[(0,N.jsx)(`style`,{children:`
        html, body {
          width: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        * {
          box-sizing: border-box;
        }
        .login-screen {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
          overflow-y: auto;
          position: relative;
        }

        /* Decorative Background Elements for Login */
        .login-screen::before {
          content: "⚖";
          position: fixed;
          font-size: 350px;
          opacity: 0.06;
          top: -80px;
          left: -100px;
          color: #fbbf24;
          z-index: 0;
          transform: rotate(-45deg);
          pointer-events: none;
        }

        .login-screen::after {
          content: "";
          position: fixed;
          bottom: -150px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
          border-radius: 50%;
        }

        .glass-login-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          width: 100%;
          max-width: 100%;
          padding: 50px 40px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
          position: relative;
          z-index: 1;
        }
        .login-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .desktop-panel {
          display: none;
        }
        .form-panel {
          width: 100%;
        }
        @media (min-width: 1200px) {
          .glass-login-card {
            max-width: 900px;
            border-radius: 20px;
            padding: 50px 40px;
          }
          .login-grid {
            flex-direction: row;
          }
          .desktop-panel {
            display: block;
            width: 40%;
            background: rgba(255,255,255,0.08);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
          }
          .desktop-panel .fa-icon {
            font-size: 5rem;
            color: #fbbf24;
            margin-bottom: 20px;
          }
          .desktop-panel h2 {
            color: #fff;
            font-family: 'Merriweather', 'Georgia', serif;
            font-size: 2.1rem;
            font-weight: 700;
            margin-bottom: 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .desktop-panel p {
            color: rgba(255,255,255,0.87);
            font-family: 'Georgia', 'Times New Roman', serif;
            font-size: 1rem;
            line-height: 1.5;
            letter-spacing: 0.4px;
            margin-bottom: 10px;
          }
          .form-panel {
            width: 60%;
          }
        }
        .gold-text {
          color: #fbbf24;
          font-weight: 800;
          letter-spacing: 4px;
          font-size: 2.2rem;
          text-align: center;
          margin-bottom: 10px;
        }
        .law-icon-bg {
          font-size: 6rem;
          color: rgba(251, 191, 36, 0.05);
          position: absolute;
          top: -10px;
          right: -10px;
          transform: rotate(-15deg);
        }
        .input-dark {
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: white !important;
          border-radius: 14px !important;
          padding: 14px !important;
          transition: 0.3s;
        }
        .input-dark::placeholder {
          color: rgba(255, 255, 255, 0.9) !important;
          opacity: 1 !important;
        }
        .input-dark:focus {
          border-color: #fbbf24 !important;
          box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.1) !important;
        }
        .btn-gold {
          background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
          border: none;
          border-radius: 14px;
          padding: 16px;
          font-weight: 800;
          color: #0f172a;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: 0.3s;
          margin-top: 10px;
        }
        .btn-gold:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(217, 119, 6, 0.4);
        }
        .sub-text {
          color: rgba(255,255,255,0.5);
          font-size: 0.75rem;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 40px;
        }
      `}),(0,N.jsx)($.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8,ease:`easeOut`},className:`glass-login-card position-relative overflow-hidden`,children:(0,N.jsxs)(`div`,{className:`login-grid`,children:[(0,N.jsxs)(`div`,{className:`desktop-panel`,children:[(0,N.jsx)(Z,{icon:Qf,className:`fa-icon`}),(0,N.jsx)(`h2`,{children:`AJ LAW FIRM`}),(0,N.jsx)(`p`,{children:`Secure civil & land records management.`}),(0,N.jsx)(`p`,{children:`Fast case tracking, document verification, and dashboard access.`})]}),(0,N.jsxs)(`div`,{className:`form-panel`,children:[(0,N.jsx)(`div`,{className:`law-icon-bg`,children:(0,N.jsx)(Z,{icon:Qf})}),(0,N.jsx)($.div,{variants:Aw,initial:`hidden`,animate:`show`,className:`gold-text`,children:`AJ LAW FIRM`.split(``).map((e,t)=>(0,N.jsx)($.span,{variants:jw,style:{display:`inline-block`},children:e===` `?`\xA0`:e},t))},n),(0,N.jsx)(`p`,{className:`sub-text`,children:`Civil & Land Records Management`}),(0,N.jsxs)(V,{onSubmit:t=>{t.preventDefault(),e.username===`admin`&&e.password===`123`?i(`/dashboard`):alert(`Invalid Credentials. (Hint: admin / 123)`)},children:[(0,N.jsx)(V.Group,{className:`mb-3`,children:(0,N.jsxs)(Fa,{children:[(0,N.jsx)(Fa.Text,{className:`bg-transparent border-0 pe-0 text-white-50`,children:(0,N.jsx)(Z,{icon:rp})}),(0,N.jsx)(V.Control,{className:`input-dark`,placeholder:`Username`,autoComplete:`off`,value:e.username,onChange:n=>t({...e,username:n.target.value})})]})}),(0,N.jsx)(V.Group,{className:`mb-4`,children:(0,N.jsxs)(Fa,{children:[(0,N.jsx)(Fa.Text,{className:`bg-transparent border-0 pe-0 text-white-50`,children:(0,N.jsx)(Z,{icon:Ap})}),(0,N.jsx)(V.Control,{type:`password`,className:`input-dark`,placeholder:`Password`,value:e.password,onChange:n=>t({...e,password:n.target.value})})]})}),(0,N.jsx)($.div,{whileHover:{scale:1.02},whileTap:{scale:.98},children:(0,N.jsxs)(L,{type:`submit`,className:`btn-gold w-100`,children:[`SIGN IN `,(0,N.jsx)(Z,{icon:jp,className:`ms-2`})]})})]}),(0,N.jsx)(`div`,{className:`text-center mt-4`,children:(0,N.jsx)(`small`,{style:{color:`rgba(255,255,255,0.3)`},children:`Authorized Personnel Only`})})]})]})})]})},Nw=({activeTab:e,setActiveTab:t})=>{let[n,r]=(0,b.useState)(!1),i=lt(),a=[{id:`dashboard`,label:`Dashboard`,icon:Rp},{id:`vendor`,label:`Vendor Management`,icon:vp},{id:`ec`,label:`Land EC`,icon:ip},{id:`nagal`,label:`Nagal/Adangal`,icon:wp},{id:`aggrement`,label:`Agreements`,icon:dp},{id:`deed`,label:`Deed Records`,icon:vp},{id:`payment`,label:`Payment History`,icon:Dp}],o=()=>r(!1),s=()=>r(!0),c=()=>{i(`/`)},l=()=>(0,N.jsxs)(`div`,{className:`sidebar-inner`,children:[(0,N.jsx)(`div`,{className:`sidebar-header`,children:(0,N.jsxs)($.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:`brand-box`,children:[(0,N.jsx)(Z,{icon:xp,className:`gold-icon`}),(0,N.jsx)(`span`,{className:`brand-name`,children:`AJ LAW FIRM`})]})}),(0,N.jsx)(Ko,{className:`flex-column mt-4`,children:a.map(n=>(0,N.jsx)($.div,{whileHover:{x:5},whileTap:{scale:.95},children:(0,N.jsxs)(Ko.Link,{className:`nav-item-custom ${e===n.id?`active`:``}`,onClick:()=>{t(n.id),o(),i({dashboard:`/dashboard`,vendor:`/vendor`,ec:`/ec`,nagal:`/nagal`,aggrement:`/aggrement`,deed:`/deed`,payment:`/payment`}[n.id]||`/dashboard`)},children:[(0,N.jsx)(Z,{icon:n.icon,className:`nav-icon`}),(0,N.jsx)(`span`,{children:n.label}),e===n.id&&(0,N.jsx)($.div,{layoutId:`activePill`,className:`active-indicator`})]})},n.id))}),(0,N.jsx)(`div`,{className:`sidebar-footer`,children:(0,N.jsxs)(L,{variant:`link`,className:`logout-btn`,onClick:c,children:[(0,N.jsx)(Z,{icon:yp,className:`me-2`}),` Logout`]})})]});return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        /* Global Sidebar Styles */
        .sidebar-desktop {
          background: #0f172a;
          min-height: 100vh;
          width: 280px;
          position: fixed;
          left: 0;
          top: 0;
          border-right: 1px solid rgba(251, 191, 36, 0.1);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Decorative Background Elements */
        .sidebar-desktop::before {
          content: "⚖";
          position: absolute;
          font-size: 180px;
          opacity: 0.05;
          top: -40px;
          right: -50px;
          color: #fbbf24;
          z-index: 0;
          transform: rotate(25deg);
          pointer-events: none;
        }

        .sidebar-desktop::after {
          content: "⚖";
          position: absolute;
          font-size: 150px;
          opacity: 0.03;
          bottom: 50px;
          left: -40px;
          color: #fbbf24;
          z-index: 0;
          transform: rotate(-30deg);
          pointer-events: none;
        }

        .sidebar-inner {
          padding: 30px 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
        }

        .brand-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          margin-bottom: 20px;
          position: relative;
        }

        .brand-box::after {
          content: "";
          position: absolute;
          bottom: -15px;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #fbbf24 0%, rgba(251, 191, 36, 0) 100%);
          border-radius: 1px;
        }

        .gold-icon {
          color: #fbbf24;
          font-size: 1.5rem;
        }

        .brand-name {
          color: white;
          font-weight: 800;
          letter-spacing: 1px;
          font-size: 1.2rem;
        }

        .nav-item-custom {
          color: rgba(255, 255, 255, 0.6) !important;
          padding: 14px 18px !important;
          border-radius: 12px;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 15px;
          font-weight: 500;
          position: relative;
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-item-custom::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 24px;
          background: linear-gradient(90deg, #fbbf24 0%, rgba(251, 191, 36, 0.3) 100%);
          border-radius: 0 4px 4px 0;
          transition: width 0.3s ease;
          opacity: 0;
        }

        .nav-item-custom:hover {
          background: rgba(255, 255, 255, 0.08);
          color: white !important;
          box-shadow: inset 0 0 12px rgba(251, 191, 36, 0.08);
          transform: translateX(2px);
        }

        .nav-item-custom:hover::before {
          width: 4px;
          opacity: 1;
        }

        .nav-item-custom.active {
          color: #fbbf24 !important;
          background: rgba(251, 191, 36, 0.1);
        }

        .active-indicator {
          position: absolute;
          left: 0;
          width: 4px;
          height: 20px;
          background: #fbbf24;
          border-radius: 0 4px 4px 0;
        }

        .nav-icon {
          width: 20px;
          font-size: 1.1rem;
        }

        .sidebar-footer {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.05);
          position: relative;
        }

        .sidebar-footer::before {
          content: "";
          position: absolute;
          top: -2px;
          right: 0;
          width: 50px;
          height: 2px;
          background: linear-gradient(90deg, rgba(251, 191, 36, 0) 0%, #fbbf24 100%);
          border-radius: 1px;
        }

        .logout-btn {
          color: #ef4444 !important;
          text-decoration: none !important;
          font-weight: 600;
          width: 100%;
          text-align: left;
          padding: 10px 18px;
        }

        /* Mobile Styles */
        .mobile-header {
          display: none;
          background: #0f172a;
          padding: 15px 20px;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 1100;
        }

        .hamburger-btn {
          color: #fbbf24;
          background: rgba(251, 191, 36, 0.1);
          border: none;
          padding: 8px 12px;
          border-radius: 8px;
        }

        .mobile-drawer {
          background-color: #0f172a !important;
          width: 280px !important;
        }

        @media (max-width: 991px) {
          .sidebar-desktop { display: none; }
          .mobile-header { display: flex; }
        }
      `}),(0,N.jsxs)(`div`,{className:`mobile-header`,children:[(0,N.jsxs)(`div`,{className:`d-flex align-items-center gap-2`,children:[(0,N.jsx)(Z,{icon:xp,className:`gold-icon`}),(0,N.jsx)(`span`,{className:`brand-name`,style:{fontSize:`1rem`},children:`AJ LAW FIRM`})]}),(0,N.jsx)(`button`,{className:`hamburger-btn`,onClick:s,children:(0,N.jsx)(Z,{icon:Lp})})]}),(0,N.jsx)(`div`,{className:`sidebar-desktop`,children:(0,N.jsx)(l,{})}),(0,N.jsx)(ss,{show:n,onHide:o,className:`mobile-drawer`,children:(0,N.jsx)(ss.Body,{className:`p-0`,children:(0,N.jsx)(l,{})})})]})},Pw=[{title:`Vendors`,value:48,subtitle:`Active vendors`,icon:vp,accent:`#f59e0b`},{title:`Agreements`,value:34,subtitle:`Open agreements`,icon:dp,accent:`#0ea5e9`},{title:`Deeds`,value:28,subtitle:`Signed deeds`,icon:wp,accent:`#10b981`},{title:`EC Records`,value:22,subtitle:`Pending certificates`,icon:ip,accent:`#8b5cf6`},{title:`Payments`,value:17,subtitle:`Due payments`,icon:Np,accent:`#ef4444`},{title:`Clients`,value:76,subtitle:`Active clients`,icon:pp,accent:`#14b8a6`}],Fw=[118,132,145,160,173,168,180,192,206,220,234,248],Iw=[{label:`Agreements`,value:35,color:`#0ea5e9`},{label:`Deeds`,value:25,color:`#10b981`},{label:`EC`,value:18,color:`#8b5cf6`},{label:`Nagal`,value:12,color:`#f59e0b`},{label:`Payments`,value:10,color:`#ef4444`}],Lw=[{time:`1h ago`,action:`New rental agreement created`,user:`Alex Sharma`},{time:`3h ago`,action:`Deed document signed`,user:`Priya Singh`},{time:`7h ago`,action:`Payment pending reminder sent`,user:`Finance team`},{time:`1d ago`,action:`EC record verified`,user:`Rohit Kumar`}],Rw=[{title:`Vendor Management`,value:`14%`,detail:`growth`,icon:vp},{title:`EC Processing`,value:`8%`,detail:`faster review`,icon:ip},{title:`Agreement Flow`,value:`22%`,detail:`new contracts`,icon:dp},{title:`Payment Pulse`,value:`12%`,detail:`collection rate`,icon:Np}],zw=({activeTab:e})=>(0,N.jsxs)(`div`,{className:`main-content dashboard-shell`,children:[(0,N.jsx)(`style`,{children:`
        .dashboard-shell {
          margin-left: 280px;
          padding: 30px;
          min-height: 100vh;
          background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
          color: #0f172a;
          position: relative;
          overflow: hidden;
        }

        /* Decorative Background Elements */
        .dashboard-shell::before {
          content: "⚖";
          position: fixed;
          font-size: 320px;
          opacity: 0.04;
          bottom: -80px;
          left: 50px;
          color: #0f172a;
          z-index: 0;
          transform: rotate(-20deg);
          pointer-events: none;
        }

        .dashboard-shell::after {
          content: "";
          position: fixed;
          bottom: 0;
          right: 0;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
          border-radius: 50%;
        }

        .dashboard-hero {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 32px;
          position: relative;
          z-index: 1;
        }

        .dashboard-heading {
          font-size: clamp(2rem, 2.6vw, 3rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 12px;
        }

        .dashboard-subtitle {
          font-size: 1rem;
          color: #475569;
          max-width: 680px;
          line-height: 1.7;
        }

        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 20px;
          background: rgba(255,255,255,0.8);
          border-radius: 999px;
          border: 1px solid rgba(148,163,184,0.2);
          box-shadow: 0 14px 50px rgba(15,23,42,0.08);
          font-weight: 600;
          color: #0f172a;
        }

        .metric-card,
        .chart-card,
        .overview-card,
        .insight-card,
        .activity-card {
          background: rgba(255,255,255,0.92);
          border: none;
          border-radius: 24px;
          box-shadow: 0 18px 40px rgba(15,23,42,0.06);
        }

        .metric-card {
          min-height: 150px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
        }

        .metric-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          color: white;
          box-shadow: 0 12px 24px rgba(15,23,42,0.12);
        }

        .metric-value {
          font-size: 2.4rem;
          font-weight: 800;
          margin: 0;
          color: #0f172a;
        }

        .metric-label {
          color: #475569;
          font-size: 0.95rem;
          margin-top: 10px;
        }

        .chart-card {
          overflow: hidden;
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 24px;
          border-bottom: 1px solid rgba(148,163,184,0.15);
        }

        .chart-header h4 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .chart-header small {
          color: #64748b;
        }

        .line-chart {
          padding: 28px 24px 24px;
        }

        .line-chart svg {
          width: 100%;
          height: 280px;
        }

        .chart-legend {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          padding: 0 24px 20px;
        }

        .chart-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(15,23,42,0.04);
          color: #475569;
          font-size: 0.88rem;
          font-weight: 600;
        }

        .progress-bar-group {
          display: grid;
          gap: 16px;
          padding: 24px;
        }

        .progress-item {
          display: grid;
          gap: 8px;
        }

        .progress-item strong {
          display: flex;
          justify-content: space-between;
          color: #0f172a;
          font-size: 0.95rem;
        }

        .bar-track {
          width: 100%;
          height: 10px;
          background: #e2e8f0;
          border-radius: 999px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 999px;
        }

        .insight-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .insight-card {
          padding: 24px;
        }

        .insight-card h5 {
          margin: 0 0 16px;
          font-size: 1rem;
          color: #0f172a;
          font-weight: 700;
        }

        .insight-card p {
          margin: 0;
          color: #64748b;
          line-height: 1.8;
        }

        .activity-card {
          padding: 24px;
        }

        .activity-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 0;
          border-bottom: 1px solid rgba(148,163,184,0.12);
        }

        .activity-item:last-child {
          border-bottom: none;
        }

        .activity-content {
          min-width: 0;
        }

        .activity-title {
          font-weight: 700;
          margin-bottom: 6px;
        }

        .activity-time {
          color: #64748b;
          font-size: 0.9rem;
        }

        .activity-user {
          color: #0f172a;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .overview-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 20px;
        }

        @media (max-width: 1199px) {
          .dashboard-hero {
            flex-direction: column;
          }

          .insight-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .dashboard-shell {
            padding: 20px 16px;
          }
        }

        .dashboard-content {
          position: relative;
          z-index: 1;
        }
      `}),(0,N.jsx)(`div`,{className:`dashboard-content`,children:(()=>{switch(e){case`dashboard`:return(0,N.jsx)(Vw,{});case`ec`:return(0,N.jsx)(Uw,{});case`nagal`:return(0,N.jsx)(Ww,{});case`patta`:return(0,N.jsx)(Gw,{});case`clients`:return(0,N.jsx)(Kw,{});case`history`:return(0,N.jsx)(qw,{});default:return(0,N.jsx)(Vw,{})}})()})]}),Bw=(e,t=760,n=280)=>{let r=Math.max(...e)+20,i=Math.min(...e)-10;return e.map((a,o)=>{let s=30+o/(e.length-1)*(t-60),c=(a-i)/(r-i);return`${s},${n-30-c*(n-60)}`}).join(` `)},Vw=()=>{let e=Bw(Fw),t=`${e} 730,250 30,250`;return(0,N.jsxs)(Ki,{fluid:!0,children:[(0,N.jsxs)(`div`,{className:`dashboard-hero`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h1`,{className:`dashboard-heading`,children:`Admin Dashboard`}),(0,N.jsx)(`p`,{className:`dashboard-subtitle`,children:`Monitor all law firm workflows from one place. Track vendor activity, agreement progress, deed workflow, record health, and payment performance with clear charts and instant insights.`}),(0,N.jsxs)(`div`,{className:`hero-pill`,children:[(0,N.jsx)(Z,{icon:np}),`Live operational pulse — updated hourly`]})]}),(0,N.jsxs)(z,{className:`overview-card`,style:{minWidth:300,padding:24},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:16},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{style:{margin:0,color:`#64748b`,fontWeight:600},children:`Monthly revenue`}),(0,N.jsx)(`h3`,{style:{margin:`12px 0 0`,fontSize:`2.2rem`,color:`#0f172a`},children:`₹ 2.4M`})]}),(0,N.jsx)(`div`,{style:{display:`grid`,placeItems:`center`,width:56,height:56,borderRadius:18,background:`#eff6ff`},children:(0,N.jsx)(Z,{icon:ep,style:{color:`#0ea5e9`,fontSize:`1.4rem`}})})]}),(0,N.jsxs)(`div`,{className:`overview-badges`,children:[(0,N.jsx)(I,{bg:`success`,text:`light`,children:`+11.6% vs last month`}),(0,N.jsx)(I,{bg:`warning`,text:`dark`,children:`32 pending actions`})]})]})]}),(0,N.jsx)(W,{className:`g-4 mb-4`,children:Pw.map(e=>(0,N.jsx)(B,{xl:4,lg:6,children:(0,N.jsx)($.div,{whileHover:{y:-6},transition:{duration:.25},children:(0,N.jsxs)(z,{className:`metric-card`,children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:18},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{style:{margin:0,color:`#64748b`,fontSize:`0.95rem`,fontWeight:600},children:e.subtitle}),(0,N.jsx)(`h2`,{className:`metric-value`,children:e.value})]}),(0,N.jsx)(`div`,{className:`metric-icon`,style:{background:e.accent},children:(0,N.jsx)(Z,{icon:e.icon})})]}),(0,N.jsxs)(`p`,{className:`metric-label`,children:[e.title,` across the firm`]})]})})},e.title))}),(0,N.jsxs)(W,{className:`g-4 mb-4`,children:[(0,N.jsx)(B,{xl:8,children:(0,N.jsxs)(z,{className:`chart-card`,children:[(0,N.jsxs)(`div`,{className:`chart-header`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{children:`Monthly record momentum`}),(0,N.jsx)(`small`,{children:`Shows the trend of new records and case activity this year.`})]}),(0,N.jsxs)(`div`,{className:`chart-pill`,children:[(0,N.jsx)(Z,{icon:gp}),` Monthly gain`]})]}),(0,N.jsx)(`div`,{className:`line-chart`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 760 280`,preserveAspectRatio:`none`,children:[(0,N.jsxs)(`defs`,{children:[(0,N.jsxs)(`linearGradient`,{id:`lineGrad`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,N.jsx)(`stop`,{offset:`0%`,stopColor:`#0ea5e9`}),(0,N.jsx)(`stop`,{offset:`100%`,stopColor:`#10b981`})]}),(0,N.jsxs)(`linearGradient`,{id:`areaGrad`,x1:`0%`,y1:`0%`,x2:`0%`,y2:`100%`,children:[(0,N.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(14,165,233,0.25)`}),(0,N.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(16,185,129,0)`})]})]}),(0,N.jsx)(`rect`,{x:`0`,y:`0`,width:`760`,height:`280`,fill:`transparent`}),(0,N.jsx)(`polygon`,{points:t,fill:`url(#areaGrad)`}),(0,N.jsx)(`polyline`,{points:e,fill:`none`,stroke:`url(#lineGrad)`,strokeWidth:`5`,strokeLinecap:`round`,strokeLinejoin:`round`}),Fw.map((e,t)=>{let n=Math.max(...Fw)+20,r=Math.min(...Fw)-10,i=30+t/(Fw.length-1)*700,a=(e-r)/(n-r);return(0,N.jsx)(`g`,{children:(0,N.jsx)(`circle`,{cx:i,cy:250-a*220,r:`6`,fill:`#fff`,stroke:`#0ea5e9`,strokeWidth:`3`})},t)})]})}),(0,N.jsxs)(`div`,{className:`chart-legend`,children:[(0,N.jsxs)(`span`,{className:`chart-pill`,children:[(0,N.jsx)(Z,{icon:tp}),` 12 months`]}),(0,N.jsxs)(`span`,{className:`chart-pill`,children:[(0,N.jsx)(Z,{icon:mp}),` Case load growth`]})]})]})}),(0,N.jsx)(B,{xl:4,children:(0,N.jsxs)(z,{className:`chart-card`,children:[(0,N.jsxs)(`div`,{className:`chart-header`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{children:`Record distribution`}),(0,N.jsx)(`small`,{children:`How your workload is split across firm modules.`})]}),(0,N.jsxs)(`div`,{className:`chart-pill`,children:[(0,N.jsx)(Z,{icon:Op}),` Module mix`]})]}),(0,N.jsx)(`div`,{className:`progress-bar-group`,children:Iw.map(e=>(0,N.jsxs)(`div`,{className:`progress-item`,children:[(0,N.jsxs)(`strong`,{children:[(0,N.jsx)(`span`,{children:e.label}),(0,N.jsxs)(`span`,{children:[e.value,`%`]})]}),(0,N.jsx)(`div`,{className:`bar-track`,children:(0,N.jsx)(`div`,{className:`bar-fill`,style:{width:`${e.value}%`,background:e.color}})})]},e.label))})]})})]}),(0,N.jsxs)(W,{className:`g-4`,children:[(0,N.jsx)(B,{xl:5,children:(0,N.jsxs)(z,{className:`insight-card`,children:[(0,N.jsx)(`h5`,{children:`Operational insights`}),(0,N.jsx)(`p`,{children:`The dashboard blends classic law firm reporting with modern visual cues so admin can act quickly. Filter by module, compare monthly trends, and keep important workflows visible at a glance.`}),(0,N.jsxs)(`div`,{className:`overview-badges`,children:[(0,N.jsx)(I,{bg:`primary`,children:`Trusted metrics`}),(0,N.jsx)(I,{bg:`info`,text:`dark`,children:`Live update`}),(0,N.jsx)(I,{bg:`secondary`,children:`Admin-ready`})]})]})}),(0,N.jsx)(B,{xl:7,children:(0,N.jsxs)(z,{className:`activity-card`,children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:24},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{style:{margin:0},children:`Recent activity feed`}),(0,N.jsx)(`small`,{style:{color:`#64748b`},children:`Latest firm actions and status updates.`})]}),(0,N.jsx)(L,{variant:`outline-primary`,size:`sm`,children:`View all`})]}),Lw.map(e=>(0,N.jsxs)(`div`,{className:`activity-item`,children:[(0,N.jsxs)(`div`,{className:`activity-content`,children:[(0,N.jsx)(`div`,{className:`activity-title`,children:e.action}),(0,N.jsx)(`div`,{className:`activity-time`,children:e.time})]}),(0,N.jsx)(`div`,{className:`activity-user`,children:e.user})]},e.time+e.action))]})})]}),(0,N.jsx)(`div`,{className:`insight-grid`,style:{marginTop:32},children:Rw.map(e=>(0,N.jsx)($.div,{whileHover:{y:-4},transition:{duration:.2},children:(0,N.jsxs)(z,{className:`insight-card`,children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:16},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h5`,{children:e.title}),(0,N.jsx)(`p`,{style:{margin:0,color:`#64748b`},children:`Key admin performance indicator.`})]}),(0,N.jsx)(`div`,{style:{display:`grid`,placeItems:`center`,width:44,height:44,borderRadius:16,background:`#eef2ff`,color:`#4338ca`},children:(0,N.jsx)(Z,{icon:e.icon})})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:12},children:[(0,N.jsx)(`h2`,{style:{margin:0,color:`#0f172a`},children:e.value}),(0,N.jsx)(I,{bg:`light`,text:`dark`,style:{fontWeight:700,borderRadius:9999},children:e.detail})]})]})},e.title))})]})},Hw=(e,t,n)=>(0,N.jsxs)(Ki,{fluid:!0,children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:18,flexWrap:`wrap`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h2`,{style:{fontSize:`2rem`,marginBottom:8},children:e}),(0,N.jsx)(`p`,{style:{maxWidth:760,color:`#475569`,lineHeight:1.8},children:t})]}),(0,N.jsx)(L,{variant:`outline-primary`,children:n})]}),(0,N.jsxs)(W,{className:`g-4 mt-4`,children:[(0,N.jsx)(B,{xl:4,md:6,children:(0,N.jsxs)(z,{className:`metric-card`,children:[(0,N.jsx)(`p`,{style:{margin:0,color:`#64748b`,fontWeight:700},children:`Open workflows`}),(0,N.jsx)(`h3`,{style:{marginTop:16,fontSize:`2.3rem`},children:`28`}),(0,N.jsx)(`p`,{style:{margin:`14px 0 0`,color:`#475569`},children:`Tasks that need administrative action.`})]})}),(0,N.jsx)(B,{xl:4,md:6,children:(0,N.jsxs)(z,{className:`metric-card`,children:[(0,N.jsx)(`p`,{style:{margin:0,color:`#64748b`,fontWeight:700},children:`Average turnaround`}),(0,N.jsx)(`h3`,{style:{marginTop:16,fontSize:`2.3rem`},children:`4.2 days`}),(0,N.jsx)(`p`,{style:{margin:`14px 0 0`,color:`#475569`},children:`Speed of completion across records.`})]})}),(0,N.jsx)(B,{xl:4,md:12,children:(0,N.jsxs)(z,{className:`metric-card`,children:[(0,N.jsx)(`p`,{style:{margin:0,color:`#64748b`,fontWeight:700},children:`Team utilization`}),(0,N.jsx)(`h3`,{style:{marginTop:16,fontSize:`2.3rem`},children:`82%`}),(0,N.jsx)(`p`,{style:{margin:`14px 0 0`,color:`#475569`},children:`Capacity used by the legal operations team.`})]})})]})]}),Uw=()=>Hw(`Encumbrance Certificate Control`,`See how EC processing is progressing and identify priority documents that need verification.`,`Manage EC`),Ww=()=>Hw(`Nagal / Adangal Tracker`,`Track Adangal and Nagal paperwork with clear status indicators and fast upload controls.`,`Upload Record`),Gw=()=>Hw(`Patta / Agreement Hub`,`Centralize patta and agreement records for audit-ready reporting and quick admin review.`,`New Patta Entry`),Kw=()=>Hw(`Client Relationship Insights`,`Monitor new client intake, active matters, and billing-ready accounts from one dashboard.`,`Add Client`),qw=()=>Hw(`Case History Overview`,`Review recent case milestones and keep a clean timeline of closed and ongoing matters.`,`View History`),Jw=()=>{let[e,t]=(0,b.useState)(`dashboard`);return(0,N.jsxs)(`div`,{className:`app-container`,children:[(0,N.jsx)(Nw,{activeTab:e,setActiveTab:t}),(0,N.jsx)(zw,{activeTab:e})]})},Yw=[{id:1,vendorId:`VEN001`,name:`Vendor A`,phone:`9876543210`,address:`123 Business Park, Suite 100`,district:`Mumbai`,status:`Active`},{id:2,vendorId:`VEN002`,name:`Vendor B`,phone:`9876543211`,address:`456 Trade Center, Floor 5`,district:`Bangalore`,status:`Active`},{id:3,vendorId:`VEN003`,name:`Vendor C`,phone:`9876543212`,address:`789 Commerce Street, Block 3`,district:`Pune`,status:`Inactive`},{id:4,vendorId:`VEN004`,name:`Vendor D`,phone:`9876543213`,address:`321 Enterprise Road, Unit 2`,district:`Ahmedabad`,status:`Active`},{id:5,vendorId:`VEN005`,name:`Vendor E`,phone:`9876543214`,address:`654 Market Plaza, Tower 4`,district:`Delhi`,status:`Active`}],Xw=[{id:1,name:`Customer 1`,phone:`1234567890`,address:`Address 1, Mumbai`,vendorId:`VEN001`,ecRecords:[{id:1,status:`Active`,date:`2023-01-01`,details:`EC for property ABC`}],nagalRecords:[{id:1,status:`Completed`,date:`2023-02-01`,details:`Nagal record XYZ`}],agreementRecords:[{id:1,status:`Signed`,date:`2023-03-01`,details:`Rental agreement`}],deedRecords:[{id:1,status:`Registered`,date:`2023-04-01`,details:`Deed for land DEF`}],paymentHistory:[{id:1,amount:1e3,date:`2023-05-01`,status:`Paid`,description:`Initial payment`}]},{id:2,name:`Customer 2`,phone:`1234567891`,address:`Address 2, Bangalore`,vendorId:`VEN002`,ecRecords:[{id:2,status:`Pending`,date:`2023-01-15`,details:`EC for property GHI`}],nagalRecords:[{id:2,status:`In Progress`,date:`2023-02-15`,details:`Nagal record JKL`}],agreementRecords:[{id:2,status:`Draft`,date:`2023-03-15`,details:`Lease agreement`}],deedRecords:[{id:2,status:`Pending`,date:`2023-04-15`,details:`Deed for land MNO`}],paymentHistory:[{id:2,amount:1500,date:`2023-05-15`,status:`Pending`,description:`Advance payment`}]},{id:3,name:`Customer 3`,phone:`1234567892`,address:`Address 3, Pune`,vendorId:`VEN003`,ecRecords:[{id:3,status:`Completed`,date:`2023-01-20`,details:`EC for property PQR`}],nagalRecords:[{id:3,status:`Completed`,date:`2023-02-20`,details:`Nagal record STU`}],agreementRecords:[{id:3,status:`Signed`,date:`2023-03-20`,details:`Sale agreement`}],deedRecords:[{id:3,status:`Registered`,date:`2023-04-20`,details:`Deed for land VWX`}],paymentHistory:[{id:3,amount:2e3,date:`2023-05-20`,status:`Paid`,description:`Full payment`}]},{id:4,name:`Customer 4`,phone:`1234567893`,address:`Address 4, Ahmedabad`,vendorId:`VEN004`,ecRecords:[{id:4,status:`Active`,date:`2023-01-25`,details:`EC for property YZA`}],nagalRecords:[{id:4,status:`Completed`,date:`2023-02-25`,details:`Nagal record BCD`}],agreementRecords:[{id:4,status:`Signed`,date:`2023-03-25`,details:`Partnership agreement`}],deedRecords:[{id:4,status:`Registered`,date:`2023-04-25`,details:`Deed for land EFG`}],paymentHistory:[{id:4,amount:1200,date:`2023-05-25`,status:`Paid`,description:`Deposit`}]},{id:5,name:`Customer 5`,phone:`1234567894`,address:`Address 5, Delhi`,vendorId:`VEN005`,ecRecords:[{id:5,status:`Pending`,date:`2023-01-30`,details:`EC for property HIJ`}],nagalRecords:[{id:5,status:`In Progress`,date:`2023-02-28`,details:`Nagal record KLM`}],agreementRecords:[{id:5,status:`Draft`,date:`2023-03-30`,details:`Service agreement`}],deedRecords:[{id:5,status:`Pending`,date:`2023-04-30`,details:`Deed for land NOP`}],paymentHistory:[{id:5,amount:800,date:`2023-05-30`,status:`Pending`,description:`Partial payment`}]}],Zw={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},Qw={hidden:{opacity:0,y:30,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:`spring`,stiffness:100,damping:12}}},$w={rest:{scale:1,y:0},hover:{scale:1.02,y:-5,transition:{type:`spring`,stiffness:400,damping:17}}},eT={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0},exit:{opacity:0,x:20}},tT={hidden:{opacity:0,scale:.8,y:50},visible:{opacity:1,scale:1,y:0,transition:{type:`spring`,stiffness:300,damping:25}},exit:{opacity:0,scale:.9,y:50,transition:{duration:.2}}},nT=()=>{let[e,t]=(0,b.useState)(`vendor`),[n,r]=(0,b.useState)(`vendor`),[i,a]=(0,b.useState)(Yw),[o,s]=(0,b.useState)(Yw),[c,l]=(0,b.useState)(!1),[u,d]=(0,b.useState)(!1),[f,p]=(0,b.useState)(!1),[m,h]=(0,b.useState)(null),[g,_]=(0,b.useState)(``),[v,y]=(0,b.useState)({status:``}),[x,S]=(0,b.useState)({key:null,direction:`asc`}),[C,w]=(0,b.useState)(``),[T,E]=(0,b.useState)(null),[D,ee]=(0,b.useState)(!1),[O,k]=(0,b.useState)({vendorId:``,name:``,phone:``,address:``,status:`Active`}),te=i.length,ne=i.filter(e=>e.status===`Active`).length,re=i.filter(e=>e.status===`Inactive`).length,ie=Xw.length,A=C?Xw.filter(e=>e.vendorId===C):[];(0,b.useEffect)(()=>{let e=i.filter(e=>e.vendorId.toLowerCase().includes(g.toLowerCase())||e.name.toLowerCase().includes(g.toLowerCase())||e.phone.includes(g)||e.address.toLowerCase().includes(g.toLowerCase()));v.status&&(e=e.filter(e=>e.status===v.status)),x.key&&e.sort((e,t)=>e[x.key]<t[x.key]?x.direction===`asc`?-1:1:e[x.key]>t[x.key]?x.direction===`asc`?1:-1:0),s(e)},[i,g,v,x]);let j=e=>{S(t=>({key:e,direction:t.key===e&&t.direction===`asc`?`desc`:`asc`}))},M=()=>{p(!1),h(null),k({vendorId:``,name:``,phone:``,address:``,status:`Active`}),l(!0)},ae=e=>{p(!0),h(e),k({vendorId:e.vendorId,name:e.name,phone:e.phone,address:e.address,status:e.status}),l(!0)},oe=e=>{h(e),d(!0)},se=e=>{window.confirm(`Are you sure you want to delete this vendor?`)&&a(i.filter(t=>t.id!==e))},ce=()=>{let e={...O,id:f?m.id:Date.now()};a(f?i.map(t=>t.id===m.id?e:t):[...i,e]),l(!1)},le=(e,t)=>{y({...v,[e]:t})},ue=()=>{y({status:``}),_(``)},de=e=>{let t={Active:{bg:`#10b981`,icon:Tp},Inactive:{bg:`#f59e0b`,icon:lp}},n=t[e]||t.Active;return(0,N.jsxs)(I,{style:{background:`linear-gradient(135deg, ${n.bg} 0%, ${n.bg}dd 100%)`,border:`none`,padding:`8px 16px`,borderRadius:`20px`,fontWeight:`600`,fontSize:`0.85rem`,display:`inline-flex`,alignItems:`center`,gap:`6px`,boxShadow:`0 4px 15px ${n.bg}40`},children:[(0,N.jsx)(Z,{icon:n.icon,size:`sm`}),e]})},fe=e=>typeof e==`number`?e.toLocaleString(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}):`₹0`,pe=e=>{let t=e.paymentHistory?.reduce((e,t)=>t.status===`Paid`?e+t.amount:e,0)||0,n=e.paymentHistory?.reduce((e,t)=>t.status===`Paid`?e:e+t.amount,0)||0;return{collected:t,balance:n,total:t+n}},me=e=>Xw.reduce((t,n)=>{if(n.vendorId!==e)return t;let{collected:r,balance:i}=pe(n);return t.collected+=r,t.balance+=i,t},{collected:0,balance:0});return(0,N.jsxs)(`div`,{className:`vendor-page`,children:[(0,N.jsx)(Nw,{activeTab:e,setActiveTab:t}),(0,N.jsxs)(`div`,{className:`main-content`,children:[(0,N.jsxs)(`div`,{className:`floating-icons`,children:[(0,N.jsx)(Z,{icon:Qf,className:`float-icon icon1`}),(0,N.jsx)(Z,{icon:up,className:`float-icon icon2`}),(0,N.jsx)(Z,{icon:$f,className:`float-icon icon3`}),(0,N.jsx)(Z,{icon:Qf,className:`float-icon icon4`}),(0,N.jsx)(Z,{icon:up,className:`float-icon icon5`}),(0,N.jsx)(Z,{icon:$f,className:`float-icon icon6`})]}),(0,N.jsx)(`style`,{children:`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
          
          .vendor-page {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 50%, #f0f4f8 100%);
            min-height: 100vh;
            font-family: 'Inter', sans-serif;
          }
          
          .main-content {
            margin-left: 280px;
            padding: 40px;
          }
          
          /* Glassmorphism Cards */
          .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 24px;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: 
              0 8px 32px rgba(31, 38, 135, 0.07),
              0 2px 8px rgba(31, 38, 135, 0.04),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .glass-card:hover {
            box-shadow: 
              0 20px 60px rgba(31, 38, 135, 0.12),
              0 4px 12px rgba(31, 38, 135, 0.06),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
          }
          
          /* Neumorphic Stats Cards */
          .stat-card {
            background: #0f172a;
            border-radius: 24px;
            padding: 16px 12px;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 
              20px 20px 60px rgba(0,0,0,0.5),
              -20px -20px 60px rgba(251,191,36,0.1);
            transition: all 0.4s ease;
            color: white;
          }
          
          .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
          }
          
          .stat-icon-wrapper {
            width: 48px;
            height: 48px;
            border-radius: 20px;
            background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 12px;
            box-shadow: 
              8px 8px 16px rgba(0,0,0,0.5),
              -8px -8px 16px rgba(251,191,36,0.2);
            transition: all 0.3s ease;
          }
          
          .stat-card:hover .stat-icon-wrapper {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 
              12px 12px 24px rgba(0,0,0,0.5),
              -12px -12px 24px rgba(251,191,36,0.2);
          }
          
          .stat-icon {
            font-size: 1.5rem;
            color: #0f172a;
          }
          
          .stat-number {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 700;
            color: #fbbf24;
            margin-bottom: 4px;
          }
          
          .stat-label {
            font-size: 0.8rem;
            color: rgba(255,255,255,0.7);
            font-weight: 500;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          
          /* Modern Search Bar */
          .search-container {
            position: relative;
          }
          
          .search-bar {
            background: rgba(255, 255, 255, 0.9);
            border: 2px solid #0f172a;
            border-radius: 16px;
            padding: 14px 20px 14px 50px;
            color: #334155;
            font-size: 0.95rem;
            font-weight: 500;
            width: 100%;
            transition: all 0.3s ease;
            box-shadow: none;
          }
          
          .search-bar:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.15);
          }
          
          .search-bar::placeholder {
            color: #94a3b8;
          }
          
          .search-icon {
            position: absolute;
            left: 18px;
            top: 50%;
            transform: translateY(-50%);
            color: #94a3b8;
            font-size: 1.1rem;
          }
          
          /* Neumorphic Filter Selects */
          .filter-select {
            background: linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%);
            border: 2px solid #0f172a;
            border-radius: 16px;
            padding: 12px 16px;
            color: #475569;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            box-shadow: none;
            transition: all 0.3s ease;
          }
          
          .filter-select:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.15);
          }
          
          /* Gold Gradient Button */
          .btn-gold {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
            border: none;
            border-radius: 16px;
            padding: 14px 28px;
            font-weight: 600;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 0.9rem;
            position: relative;
            overflow: hidden;
            box-shadow: 
              0 4px 15px rgba(217, 119, 6, 0.3),
              0 8px 25px rgba(217, 119, 6, 0.2);
            transition: all 0.3s ease;
          }
          
          .btn-gold::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
          }
          
          .btn-gold:hover {
            transform: translateY(-2px);
            box-shadow: 
              0 8px 25px rgba(217, 119, 6, 0.4),
              0 12px 35px rgba(217, 119, 6, 0.3);
          }
          
          .btn-gold:hover::before {
            left: 100%;
          }
          
          .btn-gold:active {
            transform: translateY(0);
            box-shadow: 
              0 2px 10px rgba(217, 119, 6, 0.3);
          }
          
          /* Modern Table */
          .table-modern {
            background: rgba(255, 255, 255, 0.6);
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 
              0 4px 20px rgba(31, 38, 135, 0.05),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
          }
          
          .table-modern thead th {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: #fbbf24;
            border: none;
            font-weight: 700;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 18px 16px;
            position: sticky;
            top: 0;
            z-index: 10;
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: left;
          }
          
          .table-modern thead th:hover {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: #fbbf24;
          }
          
          .table-modern tbody tr {
            transition: all 0.3s ease;
            border-bottom: 1px solid rgba(226, 232, 240, 0.5);
          }
          
          .table-modern tbody tr:hover {
            background: rgba(251, 191, 36, 0.05);
            transform: scale(1.005);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }
          
          .table-modern tbody td {
            color: #334155;
            border: none;
            padding: 16px;
            font-weight: 500;
            vertical-align: middle;
            text-align: left;
          }
          
          .table-modern tbody td:last-child {
            text-align: center;
          }
          
          .table-modern thead th:last-child {
            text-align: center;
          }
          
          /* Action Buttons */
          .action-btn {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            border: none;
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            color: #64748b;
            margin: 0 4px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 
              4px 4px 8px #d1d5db,
              -4px -4px 8px #ffffff;
            transition: all 0.3s ease;
          }
          
          .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          .action-btn.view:hover {
            color: #3b82f6;
            background: linear-gradient(145deg, #eff6ff 0%, #dbeafe 100%);
          }
          
          .action-btn.edit:hover {
            color: #f59e0b;
            background: linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%);
          }
          
          .action-btn.delete:hover {
            color: #ef4444;
            background: linear-gradient(145deg, #fef2f2 0%, #fee2e2 100%);
          }
          
          /* Modern Modal */
          .modal-content {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.9);
            border-radius: 24px;
            box-shadow: 
              0 25px 50px -12px rgba(0, 0, 0, 0.15),
              0 0 0 1px rgba(255, 255, 255, 0.5) inset;
            overflow: hidden;
          }
          
          .modal-header {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border-bottom: 1px solid rgba(226, 232, 240, 0.8);
            padding: 24px;
          }
          
          .modal-title {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            color: #1e293b;
            font-size: 1.5rem;
          }
          
          .modal-body {
            padding: 28px;
          }

          /* Tab Styles */
          .tab-link {
            font-weight: 600;
            color: #64748b;
            border: none;
            background: none;
            padding: 12px 24px;
            border-radius: 12px 12px 0 0;
            transition: all 0.3s ease;
          }
          
          .tab-link.active {
            color: #1e293b;
            background: rgba(251, 191, 36, 0.1);
            border-bottom: 3px solid #fbbf24;
          }
          
          .tab-link:hover {
            color: #1e293b;
            background: rgba(251, 191, 36, 0.05);
          }
          
          /* Neumorphic Form Inputs */
          .form-control-modern {
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border: 2px solid transparent;
            border-radius: 16px;
            padding: 14px 18px;
            color: #334155;
            font-weight: 500;
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
            transition: all 0.3s ease;
          }
          
          .form-control-modern:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 
              0 0 0 4px rgba(251, 191, 36, 0.15),
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          .form-label-modern {
            font-weight: 600;
            color: #475569;
            margin-bottom: 8px;
            font-size: 0.9rem;
          }
          
          /* Page Title */
          .page-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .page-subtitle {
            color: #64748b;
            font-size: 1.1rem;
            font-weight: 500;
            margin-bottom: 32px;
          }
          
          /* Filter Toggle Button */
          .filter-toggle {
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border: none;
            border-radius: 12px;
            padding: 12px 16px;
            color: #64748b;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 
              4px 4px 8px #d1d5db,
              -4px -4px 8px #ffffff;
            transition: all 0.3s ease;
          }
          
          .filter-toggle:hover {
            color: #f59e0b;
            transform: translateY(-1px);
          }
          
          .filter-toggle.active {
            color: #f59e0b;
            background: linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%);
          }
          
          /* Responsive */
          @media (max-width: 991px) {
            .main-content {
              margin-left: 0;
              padding: 20px;
            }
            
            .page-title {
              font-size: 1.8rem;
            }
            
            .stat-number {
              font-size: 1.6rem;
            }
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%);
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%);
          }
          
          /* Floating Background Icons */
          .floating-icons {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
          }
          
          .float-icon {
            position: absolute;
            opacity: 0.08;
            color: #fbbf24;
            font-size: 3rem;
          }
          
          .icon1 {
            top: 10%;
            left: 10%;
            animation: float1 20s infinite linear;
          }
          
          .icon2 {
            top: 20%;
            right: 15%;
            animation: float2 25s infinite linear reverse;
          }
          
          .icon3 {
            bottom: 30%;
            left: 20%;
            animation: float3 30s infinite linear;
          }
          
          .icon4 {
            top: 60%;
            right: 10%;
            animation: float1 22s infinite linear reverse;
          }
          
          .icon5 {
            bottom: 20%;
            left: 60%;
            animation: float2 28s infinite linear;
          }
          
          .icon6 {
            top: 40%;
            left: 70%;
            animation: float3 24s infinite linear reverse;
          }
          
          @keyframes float1 {
            0% { transform: translateY(0) rotate(0deg) scale(1); }
            25% { transform: translateY(-20px) rotate(90deg) scale(1.1); }
            50% { transform: translateY(0) rotate(180deg) scale(1); }
            75% { transform: translateY(20px) rotate(270deg) scale(0.9); }
            100% { transform: translateY(0) rotate(360deg) scale(1); }
          }
          
          @keyframes float2 {
            0% { transform: translateX(0) translateY(0) rotate(0deg); }
            33% { transform: translateX(30px) translateY(-30px) rotate(120deg); }
            66% { transform: translateX(-30px) translateY(30px) rotate(240deg); }
            100% { transform: translateX(0) translateY(0) rotate(360deg); }
          }
          
          @keyframes float3 {
            0% { transform: translateY(0) scale(1) rotate(0deg); }
            50% { transform: translateY(-40px) scale(1.2) rotate(180deg); }
            100% { transform: translateY(0) scale(1) rotate(360deg); }
          }
        `}),(0,N.jsxs)($.div,{variants:Zw,initial:`hidden`,animate:`visible`,children:[(0,N.jsxs)(W,{className:`mb-4`,children:[(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:Qw,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:$w,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:fp,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:te}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Total Vendors`})]})})})}),(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:Qw,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:$w,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:Tp,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:ne}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Active Vendors`})]})})})}),(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:Qw,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:$w,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:lp,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:re}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Inactive Vendors`})]})})})}),(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:Qw,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:$w,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:vp,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:ie}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Total Customers`})]})})})})]}),(0,N.jsx)($.div,{variants:Qw,children:(0,N.jsx)(z,{className:`glass-card`,children:(0,N.jsxs)(z.Body,{children:[(0,N.jsxs)(Ko,{variant:`tabs`,activeKey:n,onSelect:e=>r(e),className:`mb-4`,children:[(0,N.jsx)(Ko.Item,{children:(0,N.jsx)(Ko.Link,{eventKey:`vendor`,className:`tab-link`,children:`Vendor Records`})}),(0,N.jsx)(Ko.Item,{children:(0,N.jsx)(Ko.Link,{eventKey:`customer`,className:`tab-link`,children:`Customer Details`})})]}),n===`vendor`&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(`div`,{className:`d-flex justify-content-between align-items-center mb-4`,children:[(0,N.jsx)(`h4`,{style:{fontFamily:`Playfair Display, serif`,fontWeight:700,color:`#1e293b`,margin:0},children:`Vendor Records`}),(0,N.jsxs)(I,{bg:`light`,text:`dark`,style:{fontSize:`0.9rem`,padding:`8px 16px`,borderRadius:`12px`},children:[`Showing `,o.length,` of `,i.length,` vendors`]})]}),(0,N.jsxs)(W,{className:`align-items-center g-3 mb-4`,children:[(0,N.jsx)(B,{lg:3,md:6,children:(0,N.jsxs)(`div`,{className:`search-container`,children:[(0,N.jsx)(Z,{icon:ap,className:`search-icon`}),(0,N.jsx)(V.Control,{className:`search-bar`,placeholder:`Search by Name, Phone, Address...`,value:g,onChange:e=>_(e.target.value)})]})}),(0,N.jsx)(B,{lg:3,md:6,children:(0,N.jsxs)(V.Select,{className:`filter-select`,value:v.status,onChange:e=>le(`status`,e.target.value),children:[(0,N.jsx)(`option`,{value:``,children:`All Status`}),(0,N.jsx)(`option`,{value:`Active`,children:`Active`}),(0,N.jsx)(`option`,{value:`Inactive`,children:`Inactive`})]})}),(0,N.jsx)(B,{lg:3,md:6,children:(0,N.jsxs)(`button`,{className:`filter-toggle w-100`,onClick:ue,children:[(0,N.jsx)(Z,{icon:Cp,className:`me-2`}),`Clear`]})}),(0,N.jsx)(B,{lg:3,md:12,className:`text-lg-end`,children:(0,N.jsxs)(L,{className:`btn-gold`,onClick:M,children:[(0,N.jsx)(Z,{icon:Mp,className:`me-2`}),`Add New Vendor`]})})]}),(0,N.jsx)(`div`,{className:`table-responsive`,children:(0,N.jsxs)(cs,{className:`table-modern`,children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsxs)(`th`,{onClick:()=>j(`vendorId`),children:[`Vendor ID `,x.key===`vendorId`&&(0,N.jsx)(Z,{icon:x.direction===`asc`?bp:Fp,size:`sm`,className:`ms-1`})]}),(0,N.jsx)(`th`,{onClick:()=>j(`name`),children:`Name`}),(0,N.jsx)(`th`,{onClick:()=>j(`phone`),children:`Phone`}),(0,N.jsx)(`th`,{onClick:()=>j(`address`),children:`Address`}),(0,N.jsx)(`th`,{onClick:()=>j(`status`),children:`Status`}),(0,N.jsx)(`th`,{children:`Collected`}),(0,N.jsx)(`th`,{children:`Balance`}),(0,N.jsx)(`th`,{children:`Actions`})]})}),(0,N.jsx)(`tbody`,{children:(0,N.jsx)(PS,{mode:`popLayout`,children:o.map((e,t)=>(0,N.jsxs)($.tr,{variants:eT,initial:`hidden`,animate:`visible`,exit:`exit`,transition:{delay:t*.05},layout:!0,children:[(0,N.jsx)(`td`,{children:(0,N.jsx)(`strong`,{children:e.vendorId})}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(Z,{icon:Sp,className:`me-2 text-muted`,size:`sm`}),e.name]}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(Z,{icon:Ep,className:`me-2 text-muted`,size:`sm`}),e.phone]}),(0,N.jsx)(`td`,{children:e.address}),(0,N.jsx)(`td`,{children:de(e.status)}),(0,N.jsx)(`td`,{children:fe(me(e.vendorId).collected)}),(0,N.jsx)(`td`,{children:fe(me(e.vendorId).balance)}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(`button`,{className:`action-btn view`,onClick:()=>oe(e),title:`View`,children:(0,N.jsx)(Z,{icon:op})}),(0,N.jsx)(`button`,{className:`action-btn edit`,onClick:()=>ae(e),title:`Edit`,children:(0,N.jsx)(Z,{icon:cp})}),(0,N.jsx)(`button`,{className:`action-btn delete`,onClick:()=>se(e.id),title:`Delete`,children:(0,N.jsx)(Z,{icon:sp})})]})]},e.id))})})]})}),o.length===0&&(0,N.jsxs)($.div,{initial:{opacity:0},animate:{opacity:1},className:`text-center py-5`,children:[(0,N.jsx)(`div`,{style:{fontSize:`3rem`,marginBottom:`16px`},children:`🔍`}),(0,N.jsx)(`h5`,{style:{color:`#64748b`,fontWeight:600},children:`No vendors found`}),(0,N.jsx)(`p`,{style:{color:`#94a3b8`},children:`Try adjusting your search or filters`})]})]}),n===`customer`&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`h4`,{style:{fontFamily:`Playfair Display, serif`,fontWeight:700,color:`#1e293b`,marginBottom:`24px`},children:`Customer Details`}),(0,N.jsx)(W,{className:`align-items-center g-3 mb-4`,children:(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Select Vendor`}),(0,N.jsxs)(V.Select,{className:`filter-select`,value:C,onChange:e=>w(e.target.value),children:[(0,N.jsx)(`option`,{value:``,children:`Choose a Vendor`}),i.map(e=>(0,N.jsxs)(`option`,{value:e.vendorId,children:[e.name,` (`,e.vendorId,`)`]},e.id))]})]})})}),C&&(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`h5`,{children:[`Customers for `,i.find(e=>e.vendorId===C)?.name]}),(0,N.jsxs)(cs,{className:`table-modern`,children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`th`,{children:`Name`}),(0,N.jsx)(`th`,{children:`Phone`}),(0,N.jsx)(`th`,{children:`Address`}),(0,N.jsx)(`th`,{children:`Collected`}),(0,N.jsx)(`th`,{children:`Balance`}),(0,N.jsx)(`th`,{children:`Actions`})]})}),(0,N.jsx)(`tbody`,{children:A.map(e=>{let t=pe(e);return(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{children:e.name}),(0,N.jsx)(`td`,{children:e.phone}),(0,N.jsx)(`td`,{children:e.address}),(0,N.jsx)(`td`,{children:fe(t.collected)}),(0,N.jsx)(`td`,{children:fe(t.balance)}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`button`,{className:`action-btn view`,onClick:()=>{E(e),ee(!0)},title:`View Details`,children:(0,N.jsx)(Z,{icon:op})})})]},e.id)})})]}),A.length===0&&(0,N.jsx)(`p`,{children:`No customers found for this vendor.`})]})]})]})})})]}),(0,N.jsx)(PS,{children:u&&m&&(0,N.jsx)(U,{show:u,onHide:()=>d(!1),centered:!0,size:`lg`,children:(0,N.jsxs)($.div,{variants:tT,initial:`hidden`,animate:`visible`,exit:`exit`,children:[(0,N.jsx)(U.Header,{closeButton:!0,className:`modal-header`,children:(0,N.jsx)(U.Title,{className:`modal-title`,children:`👁️ View Vendor Details`})}),(0,N.jsxs)(U.Body,{className:`modal-body`,children:[(0,N.jsxs)(W,{className:`g-3`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Vendor ID`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:m.vendorId,disabled:!0})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Name`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:m.name,disabled:!0})]})})]}),(0,N.jsx)(W,{className:`g-3 mt-1`,children:(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Phone`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:m.phone,disabled:!0})]})})}),(0,N.jsx)(W,{className:`g-3 mt-1`,children:(0,N.jsx)(B,{md:12,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Address`}),(0,N.jsx)(V.Control,{as:`textarea`,rows:3,className:`form-control-modern`,value:m.address,disabled:!0})]})})}),(0,N.jsx)(W,{className:`g-3 mt-1`,children:(0,N.jsx)(B,{md:12,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Status`}),(0,N.jsx)(`div`,{className:`mt-2`,children:de(m.status)})]})})}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Collected`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:fe(me(m.vendorId).collected),disabled:!0})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Outstanding Balance`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:fe(me(m.vendorId).balance),disabled:!0})]})})]})]}),(0,N.jsx)(U.Footer,{className:`border-0 px-4 pb-4`,children:(0,N.jsx)(L,{className:`btn-gold`,onClick:()=>d(!1),children:`Close`})})]})})}),(0,N.jsx)(PS,{children:c&&(0,N.jsx)(U,{show:c,onHide:()=>l(!1),centered:!0,size:`lg`,children:(0,N.jsxs)($.div,{variants:tT,initial:`hidden`,animate:`visible`,exit:`exit`,children:[(0,N.jsx)(U.Header,{closeButton:!0,className:`modal-header`,children:(0,N.jsx)(U.Title,{className:`modal-title`,children:f?`✏️ Edit Vendor Details`:`➕ Add New Vendor`})}),(0,N.jsx)(U.Body,{className:`modal-body`,children:(0,N.jsxs)(V,{children:[(0,N.jsxs)(W,{className:`g-3`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Vendor ID`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter Vendor ID`,value:O.vendorId,onChange:e=>k({...O,vendorId:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Name`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter vendor name`,value:O.name,onChange:e=>k({...O,name:e.target.value})})]})})]}),(0,N.jsx)(W,{className:`g-3 mt-1`,children:(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Phone`}),(0,N.jsx)(V.Control,{type:`tel`,className:`form-control-modern`,placeholder:`Enter phone number`,value:O.phone,onChange:e=>k({...O,phone:e.target.value})})]})})}),(0,N.jsx)(W,{className:`g-3 mt-1`,children:(0,N.jsx)(B,{md:12,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Address`}),(0,N.jsx)(V.Control,{as:`textarea`,rows:3,className:`form-control-modern`,placeholder:`Enter full address`,value:O.address,onChange:e=>k({...O,address:e.target.value})})]})})}),(0,N.jsx)(W,{className:`g-3 mt-1`,children:(0,N.jsx)(B,{md:12,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Status`}),(0,N.jsxs)(V.Select,{className:`form-control-modern`,value:O.status,onChange:e=>k({...O,status:e.target.value}),children:[(0,N.jsx)(`option`,{value:`Active`,children:`Active`}),(0,N.jsx)(`option`,{value:`Inactive`,children:`Inactive`})]})]})})})]})}),(0,N.jsxs)(U.Footer,{className:`border-0 px-4 pb-4`,children:[(0,N.jsx)(L,{variant:`light`,onClick:()=>l(!1),style:{borderRadius:`16px`,padding:`12px 24px`,fontWeight:600,boxShadow:`4px 4px 8px #d1d5db, -4px -4px 8px #ffffff`},children:`Cancel`}),(0,N.jsxs)(L,{className:`btn-gold`,onClick:ce,children:[(0,N.jsx)(Z,{icon:f?cp:Mp,className:`me-2`}),f?`Update Vendor`:`Add Vendor`]})]})]})})}),(0,N.jsx)(PS,{children:D&&T&&(0,N.jsx)(U,{show:D,onHide:()=>ee(!1),centered:!0,size:`lg`,children:(0,N.jsxs)($.div,{variants:tT,initial:`hidden`,animate:`visible`,exit:`exit`,children:[(0,N.jsx)(U.Header,{closeButton:!0,className:`modal-header`,children:(0,N.jsxs)(U.Title,{className:`modal-title`,children:[`👁️ Customer Details: `,T.name]})}),(0,N.jsxs)(U.Body,{className:`modal-body`,children:[(0,N.jsxs)(W,{className:`g-3 mb-4`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Name`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:T.name,disabled:!0})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Phone`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:T.phone,disabled:!0})]})})]}),(0,N.jsx)(W,{className:`g-3 mb-4`,children:(0,N.jsx)(B,{md:12,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Address`}),(0,N.jsx)(V.Control,{as:`textarea`,rows:2,className:`form-control-modern`,value:T.address,disabled:!0})]})})}),(0,N.jsxs)(`h6`,{style:{marginTop:`24px`,marginBottom:`12px`,fontFamily:`Playfair Display, serif`,fontWeight:600,color:`#1e293b`},children:[(0,N.jsx)(Z,{icon:Ip,className:`me-2`}),` EC Records`]}),T.ecRecords.length>0?(0,N.jsx)(`div`,{className:`table-responsive mb-4`,children:(0,N.jsxs)(cs,{striped:!0,bordered:!0,hover:!0,size:`sm`,className:`table-modern`,children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`th`,{children:`ID`}),(0,N.jsx)(`th`,{children:`Status`}),(0,N.jsx)(`th`,{children:`Date`}),(0,N.jsx)(`th`,{children:`Details`})]})}),(0,N.jsx)(`tbody`,{children:T.ecRecords.map(e=>(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{children:e.id}),(0,N.jsx)(`td`,{children:e.status}),(0,N.jsx)(`td`,{children:e.date}),(0,N.jsx)(`td`,{children:e.details})]},e.id))})]})}):(0,N.jsx)(`p`,{className:`text-muted`,children:`No EC records.`}),(0,N.jsxs)(`h6`,{style:{marginTop:`24px`,marginBottom:`12px`,fontFamily:`Playfair Display, serif`,fontWeight:600,color:`#1e293b`},children:[(0,N.jsx)(Z,{icon:up,className:`me-2`}),` Nagal Records`]}),T.nagalRecords.length>0?(0,N.jsx)(`div`,{className:`table-responsive mb-4`,children:(0,N.jsxs)(cs,{striped:!0,bordered:!0,hover:!0,size:`sm`,className:`table-modern`,children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`th`,{children:`ID`}),(0,N.jsx)(`th`,{children:`Status`}),(0,N.jsx)(`th`,{children:`Date`}),(0,N.jsx)(`th`,{children:`Details`})]})}),(0,N.jsx)(`tbody`,{children:T.nagalRecords.map(e=>(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{children:e.id}),(0,N.jsx)(`td`,{children:e.status}),(0,N.jsx)(`td`,{children:e.date}),(0,N.jsx)(`td`,{children:e.details})]},e.id))})]})}):(0,N.jsx)(`p`,{className:`text-muted`,children:`No Nagal records.`}),(0,N.jsxs)(`h6`,{style:{marginTop:`24px`,marginBottom:`12px`,fontFamily:`Playfair Display, serif`,fontWeight:600,color:`#1e293b`},children:[(0,N.jsx)(Z,{icon:wp,className:`me-2`}),` Agreement Records`]}),T.agreementRecords.length>0?(0,N.jsx)(`div`,{className:`table-responsive mb-4`,children:(0,N.jsxs)(cs,{striped:!0,bordered:!0,hover:!0,size:`sm`,className:`table-modern`,children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`th`,{children:`ID`}),(0,N.jsx)(`th`,{children:`Status`}),(0,N.jsx)(`th`,{children:`Date`}),(0,N.jsx)(`th`,{children:`Details`})]})}),(0,N.jsx)(`tbody`,{children:T.agreementRecords.map(e=>(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{children:e.id}),(0,N.jsx)(`td`,{children:e.status}),(0,N.jsx)(`td`,{children:e.date}),(0,N.jsx)(`td`,{children:e.details})]},e.id))})]})}):(0,N.jsx)(`p`,{className:`text-muted`,children:`No Agreement records.`}),(0,N.jsxs)(`h6`,{style:{marginTop:`24px`,marginBottom:`12px`,fontFamily:`Playfair Display, serif`,fontWeight:600,color:`#1e293b`},children:[(0,N.jsx)(Z,{icon:$f,className:`me-2`}),` Deed Records`]}),T.deedRecords.length>0?(0,N.jsx)(`div`,{className:`table-responsive mb-4`,children:(0,N.jsxs)(cs,{striped:!0,bordered:!0,hover:!0,size:`sm`,className:`table-modern`,children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`th`,{children:`ID`}),(0,N.jsx)(`th`,{children:`Status`}),(0,N.jsx)(`th`,{children:`Date`}),(0,N.jsx)(`th`,{children:`Details`})]})}),(0,N.jsx)(`tbody`,{children:T.deedRecords.map(e=>(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{children:e.id}),(0,N.jsx)(`td`,{children:e.status}),(0,N.jsx)(`td`,{children:e.date}),(0,N.jsx)(`td`,{children:e.details})]},e.id))})]})}):(0,N.jsx)(`p`,{className:`text-muted`,children:`No Deed records.`}),(0,N.jsxs)(`h6`,{style:{marginTop:`24px`,marginBottom:`12px`,fontFamily:`Playfair Display, serif`,fontWeight:600,color:`#1e293b`},children:[(0,N.jsx)(Z,{icon:hp,className:`me-2`}),` Payment History`]}),T.paymentHistory.length>0?(0,N.jsx)(`div`,{className:`table-responsive`,children:(0,N.jsxs)(cs,{striped:!0,bordered:!0,hover:!0,size:`sm`,className:`table-modern`,children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`th`,{children:`ID`}),(0,N.jsx)(`th`,{children:`Amount`}),(0,N.jsx)(`th`,{children:`Date`}),(0,N.jsx)(`th`,{children:`Status`}),(0,N.jsx)(`th`,{children:`Description`})]})}),(0,N.jsx)(`tbody`,{children:T.paymentHistory.map(e=>(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{children:e.id}),(0,N.jsxs)(`td`,{children:[`₹`,e.amount]}),(0,N.jsx)(`td`,{children:e.date}),(0,N.jsx)(`td`,{children:e.status}),(0,N.jsx)(`td`,{children:e.description})]},e.id))})]})}):(0,N.jsx)(`p`,{className:`text-muted`,children:`No payment history.`})]}),(0,N.jsx)(U.Footer,{className:`border-0 px-4 pb-4`,children:(0,N.jsx)(L,{className:`btn-gold`,onClick:()=>ee(!1),children:`Close`})})]})})})]})]})},rT=[{id:1,date:`2024-10-01`,ecNo:`EC001`,vendor:`Vendor A`,customerName:`John Doe`,office:`Office 1`,nagar:`Nagar 1`,surveyNo:`12345`,amount:5e4,commission:5e3,others:1e3,total:56e3,status:`Paid`},{id:2,date:`2024-10-05`,ecNo:`EC002`,vendor:`Vendor B`,customerName:`Jane Smith`,office:`Office 2`,nagar:`Nagar 2`,surveyNo:`67890`,amount:75e3,commission:7500,others:2e3,total:84500,status:`Pending`},{id:3,date:`2024-10-10`,ecNo:`EC003`,vendor:`Vendor C`,customerName:`Bob Johnson`,office:`Office 1`,nagar:`Nagar 3`,surveyNo:`54321`,amount:6e4,commission:6e3,others:1500,total:67500,status:`Paid`},{id:4,date:`2024-10-15`,ecNo:`EC004`,vendor:`Vendor D`,customerName:`Alice Williams`,office:`Office 3`,nagar:`Nagar 4`,surveyNo:`98765`,amount:45e3,commission:4500,others:800,total:50300,status:`Pending`},{id:5,date:`2024-10-20`,ecNo:`EC005`,vendor:`Vendor A`,customerName:`Charlie Brown`,office:`Office 2`,nagar:`Nagar 1`,surveyNo:`11111`,amount:8e4,commission:8e3,others:2500,total:90500,status:`Paid`}],iT={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},aT={hidden:{opacity:0,y:30,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:`spring`,stiffness:100,damping:12}}},oT={rest:{scale:1,y:0},hover:{scale:1.02,y:-5,transition:{type:`spring`,stiffness:400,damping:17}}},sT={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0},exit:{opacity:0,x:20}},cT={hidden:{opacity:0,scale:.8,y:50},visible:{opacity:1,scale:1,y:0,transition:{type:`spring`,stiffness:300,damping:25}},exit:{opacity:0,scale:.9,y:50,transition:{duration:.2}}},lT=()=>{let[e,t]=(0,b.useState)(`ec`),[n,r]=(0,b.useState)(rT),[i,a]=(0,b.useState)(rT),[o,s]=(0,b.useState)(!1),[c,l]=(0,b.useState)(!1),[u,d]=(0,b.useState)(!1),[f,p]=(0,b.useState)(null),[m,h]=(0,b.useState)(``),[g,_]=(0,b.useState)({vendor:``,date:``}),[v,y]=(0,b.useState)({key:null,direction:`asc`}),[x,S]=(0,b.useState)({date:``,ecNo:``,vendor:``,customerName:``,office:``,nagar:``,surveyNo:``,amount:``,commission:``,others:``}),C=n.length,w=n.filter(e=>e.status===`Pending`).length,T=n.filter(e=>new Date(e.date).getMonth()===new Date().getMonth()).length,E=n.filter(e=>e.status===`Paid`).length;(0,b.useEffect)(()=>{let e=n.filter(e=>e.vendor.toLowerCase().includes(m.toLowerCase())||e.nagar.toLowerCase().includes(m.toLowerCase())||e.surveyNo.includes(m)||e.customerName.toLowerCase().includes(m.toLowerCase())||e.ecNo.toLowerCase().includes(m.toLowerCase()));g.vendor&&(e=e.filter(e=>e.vendor===g.vendor)),g.date&&(e=e.filter(e=>e.date===g.date)),v.key&&e.sort((e,t)=>e[v.key]<t[v.key]?v.direction===`asc`?-1:1:e[v.key]>t[v.key]?v.direction===`asc`?1:-1:0),a(e)},[n,m,g,v]);let D=e=>{y(t=>({key:e,direction:t.key===e&&t.direction===`asc`?`desc`:`asc`}))},ee=()=>{d(!1),p(null),S({date:``,ecNo:``,vendor:``,customerName:``,office:``,nagar:``,surveyNo:``,amount:``,commission:``,others:``}),s(!0)},O=e=>{d(!0),p(e),S({date:e.date,ecNo:e.ecNo,vendor:e.vendor,customerName:e.customerName,office:e.office,nagar:e.nagar,surveyNo:e.surveyNo,amount:e.amount.toString(),commission:e.commission.toString(),others:e.others.toString()}),s(!0)},k=e=>{p(e),l(!0)},te=e=>{window.confirm(`Are you sure you want to delete this EC?`)&&r(n.filter(t=>t.id!==e))},ne=()=>{let e=(parseFloat(x.amount)||0)+(parseFloat(x.commission)||0)+(parseFloat(x.others)||0),t={...x,id:u?f.id:Date.now(),total:e,status:`Pending`};r(u?n.map(e=>e.id===f.id?t:e):[...n,t]),s(!1)},re=(e,t)=>{_({...g,[e]:t})},ie=()=>{_({vendor:``,date:``}),h(``)},A=e=>{let t={Paid:{bg:`#10b981`,icon:Tp},Pending:{bg:`#f59e0b`,icon:lp}},n=t[e]||t.Pending;return(0,N.jsxs)(I,{style:{background:`linear-gradient(135deg, ${n.bg} 0%, ${n.bg}dd 100%)`,border:`none`,padding:`8px 16px`,borderRadius:`20px`,fontWeight:`600`,fontSize:`0.85rem`,display:`inline-flex`,alignItems:`center`,gap:`6px`,boxShadow:`0 4px 15px ${n.bg}40`},children:[(0,N.jsx)(Z,{icon:n.icon,size:`sm`}),e]})};return(0,N.jsxs)(`div`,{className:`ec-page`,children:[(0,N.jsx)(Nw,{activeTab:e,setActiveTab:t}),(0,N.jsxs)(`div`,{className:`main-content`,children:[(0,N.jsx)(`style`,{children:`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
          
          .ec-page {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 50%, #f0f4f8 100%);
            min-height: 100vh;
            font-family: 'Inter', sans-serif;
            position: relative;
            overflow: hidden;
          }

          /* Decorative Background Elements */
          .ec-page::before {
            content: "📋";
            position: fixed;
            font-size: 300px;
            opacity: 0.04;
            top: 50%;
            right: -80px;
            z-index: 0;
            transform: rotate(30deg) translateY(-50%);
            pointer-events: none;
          }

          .ec-page::after {
            content: "";
            position: fixed;
            bottom: 0;
            left: 50%;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%);
            z-index: 0;
            pointer-events: none;
            border-radius: 50%;
            transform: translate(-50%, 50%);
          }
          
          .main-content {
            margin-left: 280px;
            padding: 40px;
            position: relative;
            z-index: 1;
          }
          
          /* Glassmorphism Cards */
          .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 24px;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: 
              0 8px 32px rgba(31, 38, 135, 0.07),
              0 2px 8px rgba(31, 38, 135, 0.04),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .glass-card:hover {
            box-shadow: 
              0 20px 60px rgba(31, 38, 135, 0.12),
              0 4px 12px rgba(31, 38, 135, 0.06),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
          }
          
          /* Neumorphic Stats Cards */
          .stat-card {
            background: #0f172a;
            border-radius: 24px;
            padding: 16px 12px; /* Reduced padding */
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 
              20px 20px 60px rgba(0,0,0,0.5),
              -20px -20px 60px rgba(251,191,36,0.1);
            transition: all 0.4s ease;
            color: white;
          }
          
          .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
          }
          
          .stat-icon-wrapper {
            width: 48px;
            height: 48px;
            border-radius: 20px;
            background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 12px;
            box-shadow: 
              8px 8px 16px rgba(0,0,0,0.5),
              -8px -8px 16px rgba(251,191,36,0.2);
            transition: all 0.3s ease;
          }
          
          .stat-card:hover .stat-icon-wrapper {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 
              12px 12px 24px rgba(0,0,0,0.5),
              -12px -12px 24px rgba(251,191,36,0.2);
          }
          
          .stat-icon {
            font-size: 1.5rem;
            color: #0f172a;
          }
          
          .stat-number {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 700;
            color: #fbbf24;
            margin-bottom: 4px;
          }
          
          .stat-label {
            font-size: 0.8rem;
            color: rgba(255,255,255,0.7);
            font-weight: 500;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          
          /* Modern Search Bar */
          .search-container {
            position: relative;
          }
          
          .search-bar {
            background: rgba(255, 255, 255, 0.9);
            border: 2px solid #0f172a;
            border-radius: 16px;
            padding: 14px 20px 14px 50px;
            color: #334155;
            font-size: 0.95rem;
            font-weight: 500;
            width: 100%;
            transition: all 0.3s ease;
            box-shadow: none;
          }
          
          .search-bar:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.15);
          }
          
          .search-bar::placeholder {
            color: #94a3b8;
          }
          
          .search-icon {
            position: absolute;
            left: 18px;
            top: 50%;
            transform: translateY(-50%);
            color: #94a3b8;
            font-size: 1.1rem;
          }
          
          /* Neumorphic Filter Selects */
          .filter-select {
            background: linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%);
            border: 2px solid #0f172a;
            border-radius: 16px;
            padding: 12px 16px;
            color: #475569;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            box-shadow: none;
            transition: all 0.3s ease;
          }
          
          .filter-select:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.15);
          }
          
          /* Gold Gradient Button */
          .btn-gold {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
            border: none;
            border-radius: 16px;
            padding: 14px 28px;
            font-weight: 600;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 0.9rem;
            position: relative;
            overflow: hidden;
            box-shadow: 
              0 4px 15px rgba(217, 119, 6, 0.3),
              0 8px 25px rgba(217, 119, 6, 0.2);
            transition: all 0.3s ease;
          }
          
          .btn-gold::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
          }
          
          .btn-gold:hover {
            transform: translateY(-2px);
            box-shadow: 
              0 8px 25px rgba(217, 119, 6, 0.4),
              0 12px 35px rgba(217, 119, 6, 0.3);
          }
          
          .btn-gold:hover::before {
            left: 100%;
          }
          
          .btn-gold:active {
            transform: translateY(0);
            box-shadow: 
              0 2px 10px rgba(217, 119, 6, 0.3);
          }
          
          /* Modern Table */
          .table-modern {
            background: rgba(255, 255, 255, 0.6);
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 
              0 4px 20px rgba(31, 38, 135, 0.05),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
          }
          
          .table-modern thead th {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: #fbbf24;
            border: none;
            font-weight: 700;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 18px 16px;
            position: sticky;
            top: 0;
            z-index: 10;
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: left;
          }
          
          .table-modern thead th:hover {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: #fbbf24;
          }
          
          .table-modern tbody tr {
            transition: all 0.3s ease;
            border-bottom: 1px solid rgba(226, 232, 240, 0.5);
          }
          
          .table-modern tbody tr:hover {
            background: rgba(251, 191, 36, 0.05);
            transform: scale(1.005);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }
          
          .table-modern tbody td {
            color: #334155;
            border: none;
            padding: 16px;
            font-weight: 500;
            vertical-align: middle;
            text-align: left;
          }
          
          .table-modern tbody td:last-child {
            text-align: center;
          }
          
          .table-modern thead th:last-child {
            text-align: center;
          }
          
          /* Action Buttons */
          .action-btn {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            border: none;
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            color: #64748b;
            margin: 0 4px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 
              4px 4px 8px #d1d5db,
              -4px -4px 8px #ffffff;
            transition: all 0.3s ease;
          }
          
          .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          .action-btn.view:hover {
            color: #3b82f6;
            background: linear-gradient(145deg, #eff6ff 0%, #dbeafe 100%);
          }
          
          .action-btn.edit:hover {
            color: #f59e0b;
            background: linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%);
          }
          
          .action-btn.delete:hover {
            color: #ef4444;
            background: linear-gradient(145deg, #fef2f2 0%, #fee2e2 100%);
          }
          
          /* Modern Modal */
          .modal-content {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.9);
            border-radius: 24px;
            box-shadow: 
              0 25px 50px -12px rgba(0, 0, 0, 0.15),
              0 0 0 1px rgba(255, 255, 255, 0.5) inset;
            overflow: hidden;
          }
          
          .modal-header {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border-bottom: 1px solid rgba(226, 232, 240, 0.8);
            padding: 24px;
          }
          
          .modal-title {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            color: #1e293b;
            font-size: 1.5rem;
          }
          
          .modal-body {
            padding: 28px;
          }
          
          /* Neumorphic Form Inputs */
          .form-control-modern {
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border: 2px solid transparent;
            border-radius: 16px;
            padding: 14px 18px;
            color: #334155;
            font-weight: 500;
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
            transition: all 0.3s ease;
          }
          
          .form-control-modern:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 
              0 0 0 4px rgba(251, 191, 36, 0.15),
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          .form-label-modern {
            font-weight: 600;
            color: #475569;
            margin-bottom: 8px;
            font-size: 0.9rem;
          }
          
          /* Total Alert */
          .total-alert {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: none;
            border-radius: 16px;
            padding: 20px;
            font-weight: 700;
            color: #92400e;
            font-size: 1.2rem;
            text-align: center;
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          /* Page Title */
          .page-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .page-subtitle {
            color: #64748b;
            font-size: 1.1rem;
            font-weight: 500;
            margin-bottom: 32px;
          }
          
          /* Filter Toggle Button */
          .filter-toggle {
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border: none;
            border-radius: 12px;
            padding: 12px 16px;
            color: #64748b;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 
              4px 4px 8px #d1d5db,
              -4px -4px 8px #ffffff;
            transition: all 0.3s ease;
          }
          
          .filter-toggle:hover {
            color: #f59e0b;
            transform: translateY(-1px);
          }
          
          .filter-toggle.active {
            color: #f59e0b;
            background: linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%);
          }
          
          /* Responsive */
          @media (max-width: 991px) {
            .main-content {
              margin-left: 0;
              padding: 20px;
            }
            
            .page-title {
              font-size: 1.8rem;
            }
            
            .stat-number {
              font-size: 1.6rem;
            }
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%);
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%);
          }
        `}),(0,N.jsxs)($.div,{variants:iT,initial:`hidden`,animate:`visible`,children:[(0,N.jsxs)(W,{className:`mb-4`,children:[(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:aT,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:oT,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:wp,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:C}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Total EC Records`})]})})})}),(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:aT,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:oT,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:lp,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:w}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Pending EC`})]})})})}),(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:aT,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:oT,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:Zf,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:T}),(0,N.jsx)(`div`,{className:`stat-label`,children:`This Month`})]})})})}),(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:aT,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:oT,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:kp,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:E}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Paid EC`})]})})})})]}),(0,N.jsx)($.div,{variants:aT,children:(0,N.jsx)(z,{className:`glass-card`,children:(0,N.jsxs)(z.Body,{children:[(0,N.jsxs)(`div`,{className:`d-flex justify-content-between align-items-center mb-4`,children:[(0,N.jsx)(`h4`,{style:{fontFamily:`Playfair Display, serif`,fontWeight:700,color:`#1e293b`,margin:0},children:`EC Records`}),(0,N.jsxs)(I,{bg:`light`,text:`dark`,style:{fontSize:`0.9rem`,padding:`8px 16px`,borderRadius:`12px`},children:[`Showing `,i.length,` of `,n.length,` records`]})]}),(0,N.jsxs)(W,{className:`align-items-center g-3 mb-4`,children:[(0,N.jsx)(B,{lg:3,md:6,children:(0,N.jsxs)(`div`,{className:`search-container`,children:[(0,N.jsx)(Z,{icon:ap,className:`search-icon`}),(0,N.jsx)(V.Control,{className:`search-bar`,placeholder:`Search by Vendor, Nagar, Survey No...`,value:m,onChange:e=>h(e.target.value)})]})}),(0,N.jsx)(B,{lg:2,md:6,children:(0,N.jsxs)(V.Select,{className:`filter-select`,value:g.vendor,onChange:e=>re(`vendor`,e.target.value),children:[(0,N.jsx)(`option`,{value:``,children:`All Vendors`}),[...new Set(n.map(e=>e.vendor))].map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))]})}),(0,N.jsx)(B,{lg:2,md:6,children:(0,N.jsx)(V.Control,{type:`date`,className:`filter-select`,value:g.date,onChange:e=>re(`date`,e.target.value)})}),(0,N.jsx)(B,{lg:2,md:6,children:(0,N.jsxs)(`button`,{className:`filter-toggle w-100`,onClick:ie,children:[(0,N.jsx)(Z,{icon:Cp,className:`me-2`}),`Clear`]})}),(0,N.jsx)(B,{lg:3,md:12,className:`text-lg-end`,children:(0,N.jsxs)(L,{className:`btn-gold`,onClick:ee,children:[(0,N.jsx)(Z,{icon:Mp,className:`me-2`}),`Add New EC`]})})]}),(0,N.jsx)(`div`,{className:`table-responsive`,children:(0,N.jsxs)(cs,{className:`table-modern`,children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsxs)(`th`,{onClick:()=>D(`date`),children:[`Date `,v.key===`date`&&(0,N.jsx)(Z,{icon:v.direction===`asc`?bp:Fp,size:`sm`,className:`ms-1`})]}),(0,N.jsx)(`th`,{onClick:()=>D(`ecNo`),children:`EC No`}),(0,N.jsx)(`th`,{onClick:()=>D(`vendor`),children:`Vendor`}),(0,N.jsx)(`th`,{onClick:()=>D(`customerName`),children:`Customer`}),(0,N.jsx)(`th`,{onClick:()=>D(`office`),children:`Office`}),(0,N.jsx)(`th`,{onClick:()=>D(`nagar`),children:`Nagar`}),(0,N.jsx)(`th`,{onClick:()=>D(`surveyNo`),children:`Survey No`}),(0,N.jsx)(`th`,{onClick:()=>D(`total`),children:`Total (₹)`}),(0,N.jsx)(`th`,{onClick:()=>D(`status`),children:`Status`}),(0,N.jsx)(`th`,{children:`Actions`})]})}),(0,N.jsx)(`tbody`,{children:(0,N.jsx)(PS,{mode:`popLayout`,children:i.map((e,t)=>(0,N.jsxs)($.tr,{variants:sT,initial:`hidden`,animate:`visible`,exit:`exit`,transition:{delay:t*.05},layout:!0,children:[(0,N.jsx)(`td`,{children:new Date(e.date).toLocaleDateString(`en-GB`)}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`strong`,{children:e.ecNo})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(I,{bg:`light`,text:`dark`,style:{fontWeight:500},children:e.vendor})}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(Z,{icon:Sp,className:`me-2 text-muted`,size:`sm`}),e.customerName]}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(Z,{icon:_p,className:`me-2 text-muted`,size:`sm`}),e.office]}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(Z,{icon:Ip,className:`me-2 text-muted`,size:`sm`}),e.nagar]}),(0,N.jsx)(`td`,{children:e.surveyNo}),(0,N.jsx)(`td`,{children:(0,N.jsxs)(`strong`,{style:{color:`#059669`},children:[(0,N.jsx)(Z,{icon:hp,className:`me-2`,size:`sm`}),`₹`,e.total.toLocaleString()]})}),(0,N.jsx)(`td`,{children:A(e.status)}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(`button`,{className:`action-btn view`,onClick:()=>k(e),title:`View`,children:(0,N.jsx)(Z,{icon:op})}),(0,N.jsx)(`button`,{className:`action-btn edit`,onClick:()=>O(e),title:`Edit`,children:(0,N.jsx)(Z,{icon:cp})}),(0,N.jsx)(`button`,{className:`action-btn delete`,onClick:()=>te(e.id),title:`Delete`,children:(0,N.jsx)(Z,{icon:sp})})]})]},e.id))})})]})}),i.length===0&&(0,N.jsxs)($.div,{initial:{opacity:0},animate:{opacity:1},className:`text-center py-5`,children:[(0,N.jsx)(`div`,{style:{fontSize:`3rem`,marginBottom:`16px`},children:`🔍`}),(0,N.jsx)(`h5`,{style:{color:`#64748b`,fontWeight:600},children:`No records found`}),(0,N.jsx)(`p`,{style:{color:`#94a3b8`},children:`Try adjusting your search or filters`})]})]})})})]}),(0,N.jsx)(PS,{children:c&&f&&(0,N.jsx)(U,{show:c,onHide:()=>l(!1),centered:!0,size:`lg`,children:(0,N.jsxs)($.div,{variants:cT,initial:`hidden`,animate:`visible`,exit:`exit`,children:[(0,N.jsx)(U.Header,{closeButton:!0,className:`modal-header`,children:(0,N.jsx)(U.Title,{className:`modal-title`,children:`👁️ View EC Record`})}),(0,N.jsxs)(U.Body,{className:`modal-body`,children:[(0,N.jsxs)(W,{className:`g-3`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Date`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:new Date(f.date).toLocaleDateString(`en-GB`),disabled:!0})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`EC Number`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:f.ecNo,disabled:!0})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Vendor`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:f.vendor,disabled:!0})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Customer Name`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:f.customerName,disabled:!0})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Office`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:f.office,disabled:!0})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Nagar`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:f.nagar,disabled:!0})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Survey Number`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:f.surveyNo,disabled:!0})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Status`}),(0,N.jsx)(`div`,{className:`mt-2`,children:A(f.status)})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Amount (₹)`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:`₹${f.amount.toLocaleString()}`,disabled:!0})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Commission (₹)`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:`₹${f.commission.toLocaleString()}`,disabled:!0})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Others (₹)`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:`₹${f.others.toLocaleString()}`,disabled:!0})]})})]}),(0,N.jsx)(W,{className:`mt-4`,children:(0,N.jsx)(B,{children:(0,N.jsxs)(ki,{className:`total-alert`,children:[(0,N.jsx)(Z,{icon:hp,className:`me-2`}),`Total Amount: ₹`,f.total.toLocaleString()]})})})]}),(0,N.jsx)(U.Footer,{className:`border-0 px-4 pb-4`,children:(0,N.jsx)(L,{className:`btn-gold`,onClick:()=>l(!1),children:`Close`})})]})})}),(0,N.jsx)(PS,{children:o&&(0,N.jsx)(U,{show:o,onHide:()=>s(!1),centered:!0,size:`lg`,children:(0,N.jsxs)($.div,{variants:cT,initial:`hidden`,animate:`visible`,exit:`exit`,children:[(0,N.jsx)(U.Header,{closeButton:!0,className:`modal-header`,children:(0,N.jsx)(U.Title,{className:`modal-title`,children:u?`✏️ Edit EC Record`:`➕ Add New EC Record`})}),(0,N.jsx)(U.Body,{className:`modal-body`,children:(0,N.jsxs)(V,{children:[(0,N.jsxs)(W,{className:`g-3`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Date`}),(0,N.jsx)(V.Control,{type:`date`,className:`form-control-modern`,value:x.date,onChange:e=>S({...x,date:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`EC Number`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter EC Number`,value:x.ecNo,onChange:e=>S({...x,ecNo:e.target.value})})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Vendor`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter vendor name`,value:x.vendor,onChange:e=>S({...x,vendor:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Customer Name`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter customer name`,value:x.customerName,onChange:e=>S({...x,customerName:e.target.value})})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Office`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter office`,value:x.office,onChange:e=>S({...x,office:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Nagar`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter nagar`,value:x.nagar,onChange:e=>S({...x,nagar:e.target.value})})]})})]}),(0,N.jsx)(W,{className:`g-3 mt-1`,children:(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Survey Number`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter survey number`,value:x.surveyNo,onChange:e=>S({...x,surveyNo:e.target.value})})]})})}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Amount (₹)`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`0.00`,value:x.amount,onChange:e=>S({...x,amount:e.target.value})})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Commission (₹)`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`0.00`,value:x.commission,onChange:e=>S({...x,commission:e.target.value})})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Others (₹)`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`0.00`,value:x.others,onChange:e=>S({...x,others:e.target.value})})]})})]}),(0,N.jsx)(W,{className:`mt-4`,children:(0,N.jsx)(B,{children:(0,N.jsxs)(ki,{className:`total-alert`,children:[(0,N.jsx)(Z,{icon:hp,className:`me-2`}),`Total Amount: ₹`,((parseFloat(x.amount)||0)+(parseFloat(x.commission)||0)+(parseFloat(x.others)||0)).toLocaleString()]})})})]})}),(0,N.jsxs)(U.Footer,{className:`border-0 px-4 pb-4`,children:[(0,N.jsx)(L,{variant:`light`,onClick:()=>s(!1),style:{borderRadius:`16px`,padding:`12px 24px`,fontWeight:600,boxShadow:`4px 4px 8px #d1d5db, -4px -4px 8px #ffffff`},children:`Cancel`}),(0,N.jsxs)(L,{className:`btn-gold`,onClick:ne,children:[(0,N.jsx)(Z,{icon:u?cp:Mp,className:`me-2`}),u?`Update Record`:`Add Record`]})]})]})})})]})]})},uT=[{id:1,date:`2024-10-01`,nagalNo:`NAG001`,vendor:`Vendor A`,customerName:`John Doe`,office:`Office 1`,nagar:`Nagar 1`,surveyNo:`12345`,amount:5e4,commission:5e3,others:1e3,total:56e3,status:`Paid`},{id:2,date:`2024-10-05`,nagalNo:`NAG002`,vendor:`Vendor B`,customerName:`Jane Smith`,office:`Office 2`,nagar:`Nagar 2`,surveyNo:`67890`,amount:75e3,commission:7500,others:2e3,total:84500,status:`Pending`},{id:3,date:`2024-10-10`,nagalNo:`NAG003`,vendor:`Vendor C`,customerName:`Bob Johnson`,office:`Office 1`,nagar:`Nagar 3`,surveyNo:`54321`,amount:6e4,commission:6e3,others:1500,total:67500,status:`Paid`},{id:4,date:`2024-10-15`,nagalNo:`NAG004`,vendor:`Vendor D`,customerName:`Alice Williams`,office:`Office 3`,nagar:`Nagar 4`,surveyNo:`98765`,amount:45e3,commission:4500,others:800,total:50300,status:`Pending`},{id:5,date:`2024-10-20`,nagalNo:`NAG005`,vendor:`Vendor A`,customerName:`Charlie Brown`,office:`Office 2`,nagar:`Nagar 1`,surveyNo:`11111`,amount:8e4,commission:8e3,others:2500,total:90500,status:`Paid`}],dT={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},fT={hidden:{opacity:0,y:30,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:`spring`,stiffness:100,damping:12}}},pT={rest:{scale:1,y:0},hover:{scale:1.02,y:-5,transition:{type:`spring`,stiffness:400,damping:17}}},mT={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0},exit:{opacity:0,x:20}},hT={hidden:{opacity:0,scale:.8,y:50},visible:{opacity:1,scale:1,y:0,transition:{type:`spring`,stiffness:300,damping:25}},exit:{opacity:0,scale:.9,y:50,transition:{duration:.2}}},gT=()=>{let[e,t]=(0,b.useState)(`nagal`),[n,r]=(0,b.useState)(uT),[i,a]=(0,b.useState)(uT),[o,s]=(0,b.useState)(!1),[c,l]=(0,b.useState)(!1),[u,d]=(0,b.useState)(!1),[f,p]=(0,b.useState)(null),[m,h]=(0,b.useState)(``),[g,_]=(0,b.useState)({vendor:``,date:``}),[v,y]=(0,b.useState)({key:null,direction:`asc`}),[x,S]=(0,b.useState)({date:``,nagalNo:``,vendor:``,customerName:``,office:``,nagar:``,surveyNo:``,amount:``,commission:``,others:``}),C=n.length,w=n.filter(e=>e.status===`Pending`).length,T=n.filter(e=>new Date(e.date).getMonth()===new Date().getMonth()).length,E=n.filter(e=>e.status===`Paid`).length;(0,b.useEffect)(()=>{let e=n.filter(e=>e.vendor.toLowerCase().includes(m.toLowerCase())||e.nagar.toLowerCase().includes(m.toLowerCase())||e.surveyNo.includes(m)||e.customerName.toLowerCase().includes(m.toLowerCase())||e.nagalNo.toLowerCase().includes(m.toLowerCase()));g.vendor&&(e=e.filter(e=>e.vendor===g.vendor)),g.date&&(e=e.filter(e=>e.date===g.date)),v.key&&e.sort((e,t)=>e[v.key]<t[v.key]?v.direction===`asc`?-1:1:e[v.key]>t[v.key]?v.direction===`asc`?1:-1:0),a(e)},[n,m,g,v]);let D=e=>{y(t=>({key:e,direction:t.key===e&&t.direction===`asc`?`desc`:`asc`}))},ee=()=>{d(!1),p(null),S({date:``,nagalNo:``,vendor:``,customerName:``,office:``,nagar:``,surveyNo:``,amount:``,commission:``,others:``}),s(!0)},O=e=>{d(!0),p(e),S({date:e.date,nagalNo:e.nagalNo,vendor:e.vendor,customerName:e.customerName,office:e.office,nagar:e.nagar,surveyNo:e.surveyNo,amount:e.amount.toString(),commission:e.commission.toString(),others:e.others.toString()}),s(!0)},k=e=>{p(e),l(!0)},te=e=>{window.confirm(`Are you sure you want to delete this Nagal?`)&&r(n.filter(t=>t.id!==e))},ne=()=>{let e=(parseFloat(x.amount)||0)+(parseFloat(x.commission)||0)+(parseFloat(x.others)||0),t={...x,id:u?f.id:Date.now(),total:e,status:`Pending`};r(u?n.map(e=>e.id===f.id?t:e):[...n,t]),s(!1)},re=(e,t)=>{_({...g,[e]:t})},ie=()=>{_({vendor:``,date:``}),h(``)},A=e=>{let t={Paid:{bg:`#10b981`,icon:Tp},Pending:{bg:`#f59e0b`,icon:lp}},n=t[e]||t.Pending;return(0,N.jsxs)(I,{style:{background:`linear-gradient(135deg, ${n.bg} 0%, ${n.bg}dd 100%)`,border:`none`,padding:`8px 16px`,borderRadius:`20px`,fontWeight:`600`,fontSize:`0.85rem`,display:`inline-flex`,alignItems:`center`,gap:`6px`,boxShadow:`0 4px 15px ${n.bg}40`},children:[(0,N.jsx)(Z,{icon:n.icon,size:`sm`}),e]})};return(0,N.jsxs)(`div`,{className:`nagal-page`,children:[(0,N.jsx)(Nw,{activeTab:e,setActiveTab:t}),(0,N.jsxs)(`div`,{className:`main-content`,children:[(0,N.jsx)(`style`,{children:`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
          
          .nagal-page {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 50%, #f0f4f8 100%);
            min-height: 100vh;
            font-family: 'Inter', sans-serif;
            position: relative;
            overflow: hidden;
          }

          /* Decorative Background Elements */
          .nagal-page::before {
            content: "📄";
            position: fixed;
            font-size: 320px;
            opacity: 0.04;
            bottom: -100px;
            left: 100px;
            z-index: 0;
            transform: rotate(-35deg);
            pointer-events: none;
          }

          .nagal-page::after {
            content: "";
            position: fixed;
            top: 10%;
            right: 5%;
            width: 380px;
            height: 380px;
            background: radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%);
            z-index: 0;
            pointer-events: none;
            border-radius: 50%;
          }
          
          .main-content {
            margin-left: 280px;
            padding: 40px;
            position: relative;
            z-index: 1;
          }
          
          /* Glassmorphism Cards */
          .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 24px;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: 
              0 8px 32px rgba(31, 38, 135, 0.07),
              0 2px 8px rgba(31, 38, 135, 0.04),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .glass-card:hover {
            box-shadow: 
              0 20px 60px rgba(31, 38, 135, 0.12),
              0 4px 12px rgba(31, 38, 135, 0.06),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
          }
          
          /* Neumorphic Stats Cards */
          .stat-card {
            background: #0f172a;
            border-radius: 24px;
            padding: 16px 12px; /* Reduced padding */
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 
              20px 20px 60px rgba(0,0,0,0.5),
              -20px -20px 60px rgba(251,191,36,0.1);
            transition: all 0.4s ease;
            color: white;
          }
          
          .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
          }
          
          .stat-icon-wrapper {
            width: 48px;
            height: 48px;
            border-radius: 20px;
            background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 12px;
            box-shadow: 
              8px 8px 16px rgba(0,0,0,0.5),
              -8px -8px 16px rgba(251,191,36,0.2);
            transition: all 0.3s ease;
          }
          
          .stat-card:hover .stat-icon-wrapper {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 
              12px 12px 24px rgba(0,0,0,0.5),
              -12px -12px 24px rgba(251,191,36,0.2);
          }
          
          .stat-icon {
            font-size: 1.5rem;
            color: #0f172a;
          }
          
          .stat-number {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 700;
            color: #fbbf24;
            margin-bottom: 4px;
          }
          
          .stat-label {
            font-size: 0.8rem;
            color: rgba(255,255,255,0.7);
            font-weight: 500;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          
          /* Modern Search Bar */
          .search-container {
            position: relative;
          }
          
          .search-bar {
            background: rgba(255, 255, 255, 0.9);
            border: 2px solid #0f172a;
            border-radius: 16px;
            padding: 14px 20px 14px 50px;
            color: #334155;
            font-size: 0.95rem;
            font-weight: 500;
            width: 100%;
            transition: all 0.3s ease;
            box-shadow: none;
          }
          
          .search-bar:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.15);
          }
          
          .search-bar::placeholder {
            color: #94a3b8;
          }
          
          .search-icon {
            position: absolute;
            left: 18px;
            top: 50%;
            transform: translateY(-50%);
            color: #94a3b8;
            font-size: 1.1rem;
          }
          
          /* Neumorphic Filter Selects */
          .filter-select {
            background: linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%);
            border: 2px solid #0f172a;
            border-radius: 16px;
            padding: 12px 16px;
            color: #475569;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            box-shadow: none;
            transition: all 0.3s ease;
          }
          
          .filter-select:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.15);
          }
          
          /* Gold Gradient Button */
          .btn-gold {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
            border: none;
            border-radius: 16px;
            padding: 14px 28px;
            font-weight: 600;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 0.9rem;
            position: relative;
            overflow: hidden;
            box-shadow: 
              0 4px 15px rgba(217, 119, 6, 0.3),
              0 8px 25px rgba(217, 119, 6, 0.2);
            transition: all 0.3s ease;
          }
          
          .btn-gold::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
          }
          
          .btn-gold:hover {
            transform: translateY(-2px);
            box-shadow: 
              0 8px 25px rgba(217, 119, 6, 0.4),
              0 12px 35px rgba(217, 119, 6, 0.3);
          }
          
          .btn-gold:hover::before {
            left: 100%;
          }
          
          .btn-gold:active {
            transform: translateY(0);
            box-shadow: 
              0 2px 10px rgba(217, 119, 6, 0.3);
          }
          
          /* Modern Table */
          .table-modern {
            background: rgba(255, 255, 255, 0.6);
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 
              0 4px 20px rgba(31, 38, 135, 0.05),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
          }
          
          .table-modern thead th {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: #fbbf24;
            border: none;
            font-weight: 700;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 18px 16px;
            position: sticky;
            top: 0;
            z-index: 10;
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: left;
          }
          
          .table-modern thead th:hover {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: #fbbf24;
          }
          
          .table-modern tbody tr {
            transition: all 0.3s ease;
            border-bottom: 1px solid rgba(226, 232, 240, 0.5);
          }
          
          .table-modern tbody tr:hover {
            background: rgba(251, 191, 36, 0.05);
            transform: scale(1.005);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }
          
          .table-modern tbody td {
            color: #334155;
            border: none;
            padding: 16px;
            font-weight: 500;
            vertical-align: middle;
            text-align: left;
          }
          
          .table-modern tbody td:last-child {
            text-align: center;
          }
          
          .table-modern thead th:last-child {
            text-align: center;
          }
          
          /* Action Buttons */
          .action-btn {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            border: none;
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            color: #64748b;
            margin: 0 4px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 
              4px 4px 8px #d1d5db,
              -4px -4px 8px #ffffff;
            transition: all 0.3s ease;
          }
          
          .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          .action-btn.view:hover {
            color: #3b82f6;
            background: linear-gradient(145deg, #eff6ff 0%, #dbeafe 100%);
          }
          
          .action-btn.edit:hover {
            color: #f59e0b;
            background: linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%);
          }
          
          .action-btn.delete:hover {
            color: #ef4444;
            background: linear-gradient(145deg, #fef2f2 0%, #fee2e2 100%);
          }
          
          /* Modern Modal */
          .modal-content {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.9);
            border-radius: 24px;
            box-shadow: 
              0 25px 50px -12px rgba(0, 0, 0, 0.15),
              0 0 0 1px rgba(255, 255, 255, 0.5) inset;
            overflow: hidden;
          }
          
          .modal-header {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border-bottom: 1px solid rgba(226, 232, 240, 0.8);
            padding: 24px;
          }
          
          .modal-title {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            color: #1e293b;
            font-size: 1.5rem;
          }
          
          .modal-body {
            padding: 28px;
          }
          
          /* Neumorphic Form Inputs */
          .form-control-modern {
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border: 2px solid transparent;
            border-radius: 16px;
            padding: 14px 18px;
            color: #334155;
            font-weight: 500;
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
            transition: all 0.3s ease;
          }
          
          .form-control-modern:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 
              0 0 0 4px rgba(251, 191, 36, 0.15),
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          .form-label-modern {
            font-weight: 600;
            color: #475569;
            margin-bottom: 8px;
            font-size: 0.9rem;
          }
          
          /* Total Alert */
          .total-alert {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: none;
            border-radius: 16px;
            padding: 20px;
            font-weight: 700;
            color: #92400e;
            font-size: 1.2rem;
            text-align: center;
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          /* Page Title */
          .page-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .page-subtitle {
            color: #64748b;
            font-size: 1.1rem;
            font-weight: 500;
            margin-bottom: 32px;
          }
          
          /* Filter Toggle Button */
          .filter-toggle {
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border: none;
            border-radius: 12px;
            padding: 12px 16px;
            color: #64748b;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 
              4px 4px 8px #d1d5db,
              -4px -4px 8px #ffffff;
            transition: all 0.3s ease;
          }
          
          .filter-toggle:hover {
            color: #f59e0b;
            transform: translateY(-1px);
          }
          
          .filter-toggle.active {
            color: #f59e0b;
            background: linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%);
          }
          
          /* Responsive */
          @media (max-width: 991px) {
            .main-content {
              margin-left: 0;
              padding: 20px;
            }
            
            .page-title {
              font-size: 1.8rem;
            }
            
            .stat-number {
              font-size: 1.6rem;
            }
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%);
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%);
          }
        `}),(0,N.jsxs)($.div,{variants:dT,initial:`hidden`,animate:`visible`,children:[(0,N.jsxs)(W,{className:`mb-4`,children:[(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:fT,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:pT,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:wp,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:C}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Total Nagal Records`})]})})})}),(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:fT,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:pT,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:lp,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:w}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Pending Nagal`})]})})})}),(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:fT,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:pT,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:Zf,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:T}),(0,N.jsx)(`div`,{className:`stat-label`,children:`This Month`})]})})})}),(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:fT,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:pT,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:kp,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:E}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Paid Nagal`})]})})})})]}),(0,N.jsx)($.div,{variants:fT,children:(0,N.jsx)(z,{className:`glass-card`,children:(0,N.jsxs)(z.Body,{children:[(0,N.jsxs)(`div`,{className:`d-flex justify-content-between align-items-center mb-4`,children:[(0,N.jsx)(`h4`,{style:{fontFamily:`Playfair Display, serif`,fontWeight:700,color:`#1e293b`,margin:0},children:`Nagal Records`}),(0,N.jsxs)(I,{bg:`light`,text:`dark`,style:{fontSize:`0.9rem`,padding:`8px 16px`,borderRadius:`12px`},children:[`Showing `,i.length,` of `,n.length,` records`]})]}),(0,N.jsxs)(W,{className:`align-items-center g-3 mb-4`,children:[(0,N.jsx)(B,{lg:3,md:6,children:(0,N.jsxs)(`div`,{className:`search-container`,children:[(0,N.jsx)(Z,{icon:ap,className:`search-icon`}),(0,N.jsx)(V.Control,{className:`search-bar`,placeholder:`Search by Vendor, Nagar, Survey No...`,value:m,onChange:e=>h(e.target.value)})]})}),(0,N.jsx)(B,{lg:2,md:6,children:(0,N.jsxs)(V.Select,{className:`filter-select`,value:g.vendor,onChange:e=>re(`vendor`,e.target.value),children:[(0,N.jsx)(`option`,{value:``,children:`All Vendors`}),[...new Set(n.map(e=>e.vendor))].map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))]})}),(0,N.jsx)(B,{lg:2,md:6,children:(0,N.jsx)(V.Control,{type:`date`,className:`filter-select`,value:g.date,onChange:e=>re(`date`,e.target.value)})}),(0,N.jsx)(B,{lg:2,md:6,children:(0,N.jsxs)(`button`,{className:`filter-toggle w-100`,onClick:ie,children:[(0,N.jsx)(Z,{icon:Cp,className:`me-2`}),`Clear`]})}),(0,N.jsx)(B,{lg:3,md:12,className:`text-lg-end`,children:(0,N.jsxs)(L,{className:`btn-gold`,onClick:ee,children:[(0,N.jsx)(Z,{icon:Mp,className:`me-2`}),`Add New Nagal`]})})]}),(0,N.jsx)(`div`,{className:`table-responsive`,children:(0,N.jsxs)(cs,{className:`table-modern`,children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsxs)(`th`,{onClick:()=>D(`date`),children:[`Date `,v.key===`date`&&(0,N.jsx)(Z,{icon:v.direction===`asc`?bp:Fp,size:`sm`,className:`ms-1`})]}),(0,N.jsx)(`th`,{onClick:()=>D(`nagalNo`),children:`Nagal No`}),(0,N.jsx)(`th`,{onClick:()=>D(`vendor`),children:`Vendor`}),(0,N.jsx)(`th`,{onClick:()=>D(`customerName`),children:`Customer`}),(0,N.jsx)(`th`,{onClick:()=>D(`office`),children:`Office`}),(0,N.jsx)(`th`,{onClick:()=>D(`nagar`),children:`Nagar`}),(0,N.jsx)(`th`,{onClick:()=>D(`surveyNo`),children:`Survey No`}),(0,N.jsx)(`th`,{onClick:()=>D(`total`),children:`Total (₹)`}),(0,N.jsx)(`th`,{onClick:()=>D(`status`),children:`Status`}),(0,N.jsx)(`th`,{children:`Actions`})]})}),(0,N.jsx)(`tbody`,{children:(0,N.jsx)(PS,{mode:`popLayout`,children:i.map((e,t)=>(0,N.jsxs)($.tr,{variants:mT,initial:`hidden`,animate:`visible`,exit:`exit`,transition:{delay:t*.05},layout:!0,children:[(0,N.jsx)(`td`,{children:new Date(e.date).toLocaleDateString(`en-GB`)}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`strong`,{children:e.nagalNo})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(I,{bg:`light`,text:`dark`,style:{fontWeight:500},children:e.vendor})}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(Z,{icon:Sp,className:`me-2 text-muted`,size:`sm`}),e.customerName]}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(Z,{icon:_p,className:`me-2 text-muted`,size:`sm`}),e.office]}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(Z,{icon:Ip,className:`me-2 text-muted`,size:`sm`}),e.nagar]}),(0,N.jsx)(`td`,{children:e.surveyNo}),(0,N.jsx)(`td`,{children:(0,N.jsxs)(`strong`,{style:{color:`#059669`},children:[(0,N.jsx)(Z,{icon:hp,className:`me-2`,size:`sm`}),`₹`,e.total.toLocaleString()]})}),(0,N.jsx)(`td`,{children:A(e.status)}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(`button`,{className:`action-btn view`,onClick:()=>k(e),title:`View`,children:(0,N.jsx)(Z,{icon:op})}),(0,N.jsx)(`button`,{className:`action-btn edit`,onClick:()=>O(e),title:`Edit`,children:(0,N.jsx)(Z,{icon:cp})}),(0,N.jsx)(`button`,{className:`action-btn delete`,onClick:()=>te(e.id),title:`Delete`,children:(0,N.jsx)(Z,{icon:sp})})]})]},e.id))})})]})}),i.length===0&&(0,N.jsxs)($.div,{initial:{opacity:0},animate:{opacity:1},className:`text-center py-5`,children:[(0,N.jsx)(`div`,{style:{fontSize:`3rem`,marginBottom:`16px`},children:`🔍`}),(0,N.jsx)(`h5`,{style:{color:`#64748b`,fontWeight:600},children:`No records found`}),(0,N.jsx)(`p`,{style:{color:`#94a3b8`},children:`Try adjusting your search or filters`})]})]})})})]}),(0,N.jsx)(PS,{children:c&&f&&(0,N.jsx)(U,{show:c,onHide:()=>l(!1),centered:!0,size:`lg`,children:(0,N.jsxs)($.div,{variants:hT,initial:`hidden`,animate:`visible`,exit:`exit`,children:[(0,N.jsx)(U.Header,{closeButton:!0,className:`modal-header`,children:(0,N.jsx)(U.Title,{className:`modal-title`,children:`👁️ View Nagal Record`})}),(0,N.jsxs)(U.Body,{className:`modal-body`,children:[(0,N.jsxs)(W,{className:`g-3`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Date`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:new Date(f.date).toLocaleDateString(`en-GB`),disabled:!0})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Nagal Number`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:f.nagalNo,disabled:!0})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Vendor`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:f.vendor,disabled:!0})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Customer Name`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:f.customerName,disabled:!0})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Office`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:f.office,disabled:!0})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Nagar`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:f.nagar,disabled:!0})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Survey Number`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:f.surveyNo,disabled:!0})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Status`}),(0,N.jsx)(`div`,{className:`mt-2`,children:A(f.status)})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Amount (₹)`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:`₹${f.amount.toLocaleString()}`,disabled:!0})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Commission (₹)`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:`₹${f.commission.toLocaleString()}`,disabled:!0})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Others (₹)`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,value:`₹${f.others.toLocaleString()}`,disabled:!0})]})})]}),(0,N.jsx)(W,{className:`mt-4`,children:(0,N.jsx)(B,{children:(0,N.jsxs)(ki,{className:`total-alert`,children:[(0,N.jsx)(Z,{icon:hp,className:`me-2`}),`Total Amount: ₹`,f.total.toLocaleString()]})})})]}),(0,N.jsx)(U.Footer,{className:`border-0 px-4 pb-4`,children:(0,N.jsx)(L,{className:`btn-gold`,onClick:()=>l(!1),children:`Close`})})]})})}),(0,N.jsx)(PS,{children:o&&(0,N.jsx)(U,{show:o,onHide:()=>s(!1),centered:!0,size:`lg`,children:(0,N.jsxs)($.div,{variants:hT,initial:`hidden`,animate:`visible`,exit:`exit`,children:[(0,N.jsx)(U.Header,{closeButton:!0,className:`modal-header`,children:(0,N.jsx)(U.Title,{className:`modal-title`,children:u?`✏️ Edit Nagal Record`:`➕ Add New Nagal Record`})}),(0,N.jsx)(U.Body,{className:`modal-body`,children:(0,N.jsxs)(V,{children:[(0,N.jsxs)(W,{className:`g-3`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Date`}),(0,N.jsx)(V.Control,{type:`date`,className:`form-control-modern`,value:x.date,onChange:e=>S({...x,date:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Nagal Number`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter Nagal Number`,value:x.nagalNo,onChange:e=>S({...x,nagalNo:e.target.value})})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Vendor`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter vendor name`,value:x.vendor,onChange:e=>S({...x,vendor:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Customer Name`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter customer name`,value:x.customerName,onChange:e=>S({...x,customerName:e.target.value})})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Office`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter office`,value:x.office,onChange:e=>S({...x,office:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Nagar`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter nagar`,value:x.nagar,onChange:e=>S({...x,nagar:e.target.value})})]})})]}),(0,N.jsx)(W,{className:`g-3 mt-1`,children:(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Survey Number`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter survey number`,value:x.surveyNo,onChange:e=>S({...x,surveyNo:e.target.value})})]})})}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Amount (₹)`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`0.00`,value:x.amount,onChange:e=>S({...x,amount:e.target.value})})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Commission (₹)`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`0.00`,value:x.commission,onChange:e=>S({...x,commission:e.target.value})})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Others (₹)`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`0.00`,value:x.others,onChange:e=>S({...x,others:e.target.value})})]})})]}),(0,N.jsx)(W,{className:`mt-4`,children:(0,N.jsx)(B,{children:(0,N.jsxs)(ki,{className:`total-alert`,children:[(0,N.jsx)(Z,{icon:hp,className:`me-2`}),`Total Amount: ₹`,((parseFloat(x.amount)||0)+(parseFloat(x.commission)||0)+(parseFloat(x.others)||0)).toLocaleString()]})})})]})}),(0,N.jsxs)(U.Footer,{className:`border-0 px-4 pb-4`,children:[(0,N.jsx)(L,{variant:`light`,onClick:()=>s(!1),style:{borderRadius:`16px`,padding:`12px 24px`,fontWeight:600,boxShadow:`4px 4px 8px #d1d5db, -4px -4px 8px #ffffff`},children:`Cancel`}),(0,N.jsxs)(L,{className:`btn-gold`,onClick:ne,children:[(0,N.jsx)(Z,{icon:u?cp:Mp,className:`me-2`}),u?`Update Record`:`Add Record`]})]})]})})})]})]})},_T=[{id:1,date:`2024-10-01`,vendor:`Vendor A`,customerName:`John Doe`,reference:`Vendor A`,agreementType:`Sale Agreement`,tpNo:`TP001`,office:`Office 1`,plotNo:`12345`,nagar:`Nagar 1`,fieldVisit:`Yes`,docNo:`DOC001`,returnDocument:`Yes`,editFee:5e3,stamp:1e4,others:1e3,totalFee:16e3,writingFee:2e3,ddCommission:500,status:`Completed`},{id:2,date:`2024-10-05`,vendor:`Normal Customer`,customerName:`Jane Smith`,reference:`Manual Entry`,agreementType:`Rental Agreement`,tpNo:`TP002`,office:`Office 2`,plotNo:`67890`,nagar:`Nagar 2`,fieldVisit:`No`,docNo:`DOC002`,returnDocument:`No`,editFee:7500,stamp:15e3,others:2e3,totalFee:24500,writingFee:3e3,ddCommission:750,status:`Pending`},{id:3,date:`2024-10-10`,vendor:`Vendor C`,customerName:`Bob Johnson`,reference:`Vendor C`,agreementType:`Partnership Agreement`,tpNo:`TP003`,office:`Office 1`,plotNo:`54321`,nagar:`Nagar 3`,fieldVisit:`Yes`,docNo:`DOC003`,returnDocument:`Yes`,editFee:6e3,stamp:12e3,others:1500,totalFee:19500,writingFee:2500,ddCommission:600,status:`Completed`},{id:4,date:`2024-10-15`,vendor:`Vendor D`,customerName:`Alice Williams`,reference:`Manual Entry`,agreementType:`Sale Agreement`,tpNo:`TP004`,office:`Office 3`,plotNo:`98765`,nagar:`Nagar 4`,fieldVisit:`No`,docNo:`DOC004`,returnDocument:`Yes`,editFee:4500,stamp:9e3,others:800,totalFee:14300,writingFee:1800,ddCommission:450,status:`Pending`},{id:5,date:`2024-10-20`,vendor:`Vendor A`,customerName:`Charlie Brown`,reference:`Vendor A`,agreementType:`Rental Agreement`,tpNo:`TP005`,office:`Office 2`,plotNo:`11111`,nagar:`Nagar 1`,fieldVisit:`Yes`,docNo:`DOC005`,returnDocument:`No`,editFee:8e3,stamp:16e3,others:2500,totalFee:26500,writingFee:4e3,ddCommission:800,status:`Completed`}],vT=[{id:1,name:`Vendor A`},{id:2,name:`Vendor B`},{id:3,name:`Vendor C`},{id:4,name:`Vendor D`},{id:5,name:`Vendor E`}],yT={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},bT={hidden:{opacity:0,y:30,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:`spring`,stiffness:100,damping:12}}},xT={rest:{scale:1,y:0},hover:{scale:1.02,y:-5,transition:{type:`spring`,stiffness:400,damping:17}}},ST={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0},exit:{opacity:0,x:20}},CT={hidden:{opacity:0,scale:.8,y:50},visible:{opacity:1,scale:1,y:0,transition:{type:`spring`,stiffness:300,damping:25}},exit:{opacity:0,scale:.9,y:50,transition:{duration:.2}}},wT=()=>{let[e,t]=(0,b.useState)(`aggrement`),[n,r]=(0,b.useState)(_T),[i,a]=(0,b.useState)(_T),[o,s]=(0,b.useState)(!1),[c,l]=(0,b.useState)(!1),[u,d]=(0,b.useState)(!1),[f,p]=(0,b.useState)(null),[m,h]=(0,b.useState)(``),[g,_]=(0,b.useState)({vendor:``,agreementType:``,status:``}),[v,y]=(0,b.useState)({key:null,direction:`asc`}),[x,S]=(0,b.useState)(`vendor`),[C,w]=(0,b.useState)(`all`),[T,E]=(0,b.useState)({date:``,vendor:``,customerName:``,reference:``,agreementType:``,tpNo:``,office:``,plotNo:``,nagar:``,fieldVisit:`No`,docNo:``,returnDocument:`No`,editFee:``,stamp:``,others:``,totalFee:``,writingFee:``,ddCommission:``});n.length,n.filter(e=>e.status===`Completed`).length,n.filter(e=>e.status===`Pending`).length,n.filter(e=>new Date(e.date).getMonth()===new Date().getMonth()).length,(0,b.useEffect)(()=>{let e=n.filter(e=>e.docNo.toLowerCase().includes(m.toLowerCase())||e.customerName.toLowerCase().includes(m.toLowerCase())||e.tpNo.includes(m)||e.vendor.toLowerCase().includes(m.toLowerCase())||e.agreementType.toLowerCase().includes(m.toLowerCase()));g.vendor&&(e=e.filter(e=>e.vendor===g.vendor)),g.agreementType&&(e=e.filter(e=>e.agreementType===g.agreementType)),g.status&&(e=e.filter(e=>e.status===g.status)),C!==`all`&&(e=e.filter(e=>e.agreementType===C)),v.key&&e.sort((e,t)=>e[v.key]<t[v.key]?v.direction===`asc`?-1:1:e[v.key]>t[v.key]?v.direction===`asc`?1:-1:0),a(e)},[n,m,g,v,C]);let D=e=>{y(t=>({key:e,direction:t.key===e&&t.direction===`asc`?`desc`:`asc`}))},ee=()=>{d(!1),p(null),E({date:``,vendor:``,customerName:``,reference:``,agreementType:``,tpNo:``,office:``,plotNo:``,nagar:``,fieldVisit:`No`,docNo:``,returnDocument:`No`,editFee:``,stamp:``,others:``,totalFee:``,writingFee:``,ddCommission:``}),s(!0)},O=e=>{d(!0),p(e),E({date:e.date,vendor:e.vendor,customerName:e.customerName,reference:e.reference,agreementType:e.agreementType,tpNo:e.tpNo,office:e.office,plotNo:e.plotNo,nagar:e.nagar,fieldVisit:e.fieldVisit,docNo:e.docNo,returnDocument:e.returnDocument,editFee:e.editFee,stamp:e.stamp,others:e.others,totalFee:e.totalFee,writingFee:e.writingFee,ddCommission:e.ddCommission}),s(!0)},k=e=>{p(e),l(!0)},te=e=>{window.confirm(`Are you sure you want to delete this agreement?`)&&r(n.filter(t=>t.id!==e))},ne=()=>{let e={...T,id:u?f.id:Date.now(),status:u?f.status:`Pending`};r(u?n.map(t=>t.id===f.id?e:t):[...n,e]),s(!1)},re=(e,t)=>{_({...g,[e]:t})},ie=()=>{_({vendor:``,agreementType:``,status:``}),h(``),w(`all`)},A=e=>{w(e)},j=e=>{let t={Completed:{bg:`#10b981`,icon:Tp},Pending:{bg:`#f59e0b`,icon:lp}},n=t[e]||t.Pending;return(0,N.jsxs)(I,{style:{background:`linear-gradient(135deg, ${n.bg} 0%, ${n.bg}dd 100%)`,border:`none`,padding:`8px 16px`,borderRadius:`20px`,fontWeight:`600`,fontSize:`0.85rem`,display:`inline-flex`,alignItems:`center`,gap:`6px`,boxShadow:`0 4px 15px ${n.bg}40`},children:[(0,N.jsx)(Z,{icon:n.icon,size:`sm`}),e]})},M=[`Sale Agreement`,`Rental Agreement`,`Partnership Agreement`];return(0,N.jsxs)(`div`,{className:`aggrement-page`,children:[(0,N.jsx)(Nw,{activeTab:e,setActiveTab:t}),(0,N.jsxs)(`div`,{className:`main-content`,children:[(0,N.jsxs)(`div`,{className:`floating-icons`,children:[(0,N.jsx)(Z,{icon:Qf,className:`float-icon icon1`}),(0,N.jsx)(Z,{icon:up,className:`float-icon icon2`}),(0,N.jsx)(Z,{icon:$f,className:`float-icon icon3`}),(0,N.jsx)(Z,{icon:Qf,className:`float-icon icon4`}),(0,N.jsx)(Z,{icon:up,className:`float-icon icon5`}),(0,N.jsx)(Z,{icon:$f,className:`float-icon icon6`})]}),(0,N.jsx)(`style`,{children:`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
          
          .aggrement-page {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 50%, #f0f4f8 100%);
            min-height: 100vh;
            font-family: 'Inter', sans-serif;
          }
          
          .main-content {
            margin-left: 280px;
            padding: 40px;
          }
          
          /* Glassmorphism Cards */
          .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 24px;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: 
              0 8px 32px rgba(31, 38, 135, 0.07),
              0 2px 8px rgba(31, 38, 135, 0.04),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .glass-card:hover {
            box-shadow: 
              0 20px 60px rgba(31, 38, 135, 0.12),
              0 4px 12px rgba(31, 38, 135, 0.06),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
          }
          
          /* Neumorphic Stats Cards */
          .stat-card {
            background: #0f172a;
            border-radius: 24px;
            padding: 16px 12px;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 
              20px 20px 60px rgba(0,0,0,0.5),
              -20px -20px 60px rgba(251,191,36,0.1);
            transition: all 0.4s ease;
            color: white;
            cursor: pointer;
          }
          
          .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
          }
          
          .stat-icon-wrapper {
            width: 48px;
            height: 48px;
            border-radius: 20px;
            background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 12px;
            box-shadow: 
              8px 8px 16px rgba(0,0,0,0.5),
              -8px -8px 16px rgba(251,191,36,0.2);
            transition: all 0.3s ease;
          }
          
          .stat-card:hover .stat-icon-wrapper {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 
              12px 12px 24px rgba(0,0,0,0.5),
              -12px -12px 24px rgba(251,191,36,0.2);
          }
          
          .stat-icon {
            font-size: 1.5rem;
            color: #0f172a;
          }
          
          .stat-number {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 700;
            color: #fbbf24;
            margin-bottom: 4px;
          }
          
          .stat-label {
            font-size: 0.8rem;
            color: rgba(255,255,255,0.7);
            font-weight: 500;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          
          /* Modern Search Bar */
          .search-container {
            position: relative;
          }
          
          .search-bar {
            background: rgba(255, 255, 255, 0.9);
            border: 2px solid #0f172a;
            border-radius: 16px;
            padding: 14px 20px 14px 50px;
            color: #334155;
            font-size: 0.95rem;
            font-weight: 500;
            width: 100%;
            transition: all 0.3s ease;
            box-shadow: none;
          }
          
          .search-bar:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.15);
          }
          
          .search-bar::placeholder {
            color: #94a3b8;
          }
          
          .search-icon {
            position: absolute;
            left: 18px;
            top: 50%;
            transform: translateY(-50%);
            color: #94a3b8;
            font-size: 1.1rem;
          }
          
          /* Neumorphic Filter Selects */
          .filter-select {
            background: linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%);
            border: 2px solid #0f172a;
            border-radius: 16px;
            padding: 12px 16px;
            color: #475569;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            box-shadow: none;
            transition: all 0.3s ease;
          }
          
          .filter-select:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.15);
          }
          
          /* Gold Gradient Button */
          .btn-gold {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
            border: none;
            border-radius: 16px;
            padding: 14px 28px;
            font-weight: 600;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 0.9rem;
            position: relative;
            overflow: hidden;
            box-shadow: 
              0 4px 15px rgba(217, 119, 6, 0.3),
              0 8px 25px rgba(217, 119, 6, 0.2);
            transition: all 0.3s ease;
          }
          
          .btn-gold::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
          }
          
          .btn-gold:hover {
            transform: translateY(-2px);
            box-shadow: 
              0 8px 25px rgba(217, 119, 6, 0.4),
              0 12px 35px rgba(217, 119, 6, 0.3);
          }
          
          .btn-gold:hover::before {
            left: 100%;
          }
          
          .btn-gold:active {
            transform: translateY(0);
            box-shadow: 
              0 2px 10px rgba(217, 119, 6, 0.3);
          }
          
          /* Modern Table */
          .table-modern {
            background: rgba(255, 255, 255, 0.6);
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 
              0 4px 20px rgba(31, 38, 135, 0.05),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
          }
          
          .table-modern thead th {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: #fbbf24;
            border: none;
            font-weight: 700;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 18px 16px;
            position: sticky;
            top: 0;
            z-index: 10;
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: left;
          }
          
          .table-modern thead th:hover {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: #fbbf24;
          }
          
          .table-modern tbody tr {
            transition: all 0.3s ease;
            border-bottom: 1px solid rgba(226, 232, 240, 0.5);
          }
          
          .table-modern tbody tr:hover {
            background: rgba(251, 191, 36, 0.05);
            transform: scale(1.005);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }
          
          .table-modern tbody td {
            color: #334155;
            border: none;
            padding: 16px;
            font-weight: 500;
            vertical-align: middle;
            text-align: left;
          }
          
          .table-modern tbody td:last-child {
            text-align: center;
          }
          
          .table-modern thead th:last-child {
            text-align: center;
          }
          
          /* Action Buttons */
          .action-btn {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            border: none;
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            color: #64748b;
            margin: 0 4px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 
              4px 4px 8px #d1d5db,
              -4px -4px 8px #ffffff;
            transition: all 0.3s ease;
          }
          
          .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          .action-btn.view:hover {
            color: #3b82f6;
            background: linear-gradient(145deg, #eff6ff 0%, #dbeafe 100%);
          }
          
          .action-btn.edit:hover {
            color: #f59e0b;
            background: linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%);
          }
          
          .action-btn.delete:hover {
            color: #ef4444;
            background: linear-gradient(145deg, #fef2f2 0%, #fee2e2 100%);
          }
          
          /* Modern Modal */
          .modal-content {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.9);
            border-radius: 24px;
            box-shadow: 
              0 25px 50px -12px rgba(0, 0, 0, 0.15),
              0 0 0 1px rgba(255, 255, 255, 0.5) inset;
            overflow: hidden;
          }
          
          .modal-header {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border-bottom: 1px solid rgba(226, 232, 240, 0.8);
            padding: 24px;
          }
          
          .modal-title {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            color: #1e293b;
            font-size: 1.5rem;
          }
          
          .modal-body {
            padding: 28px;
          }
          
          /* Neumorphic Form Inputs */
          .form-control-modern {
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border: 2px solid transparent;
            border-radius: 16px;
            padding: 14px 18px;
            color: #334155;
            font-weight: 500;
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
            transition: all 0.3s ease;
          }
          
          .form-control-modern:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 
              0 0 0 4px rgba(251, 191, 36, 0.15),
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          .form-label-modern {
            font-weight: 600;
            color: #475569;
            margin-bottom: 8px;
            font-size: 0.9rem;
          }
          
          /* Page Title */
          .page-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .page-subtitle {
            color: #64748b;
            font-size: 1.1rem;
            font-weight: 500;
            margin-bottom: 32px;
          }
          
          /* Filter Toggle Button */
          .filter-toggle {
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border: none;
            border-radius: 12px;
            padding: 12px 16px;
            color: #64748b;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 
              4px 4px 8px #d1d5db,
              -4px -4px 8px #ffffff;
            transition: all 0.3s ease;
          }
          
          .filter-toggle:hover {
            color: #f59e0b;
            transform: translateY(-1px);
          }
          
          .filter-toggle.active {
            color: #f59e0b;
            background: linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%);
          }
          
          /* Responsive */
          @media (max-width: 991px) {
            .main-content {
              margin-left: 0;
              padding: 20px;
            }
            
            .page-title {
              font-size: 1.8rem;
            }
            
            .stat-number {
              font-size: 1.6rem;
            }
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%);
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%);
          }
          
          /* Floating Background Icons */
          .floating-icons {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
          }
          
          .float-icon {
            position: absolute;
            opacity: 0.08;
            color: #fbbf24;
            font-size: 3rem;
          }
          
          .icon1 {
            top: 10%;
            left: 10%;
            animation: float1 20s infinite linear;
          }
          
          .icon2 {
            top: 20%;
            right: 15%;
            animation: float2 25s infinite linear reverse;
          }
          
          .icon3 {
            bottom: 30%;
            left: 20%;
            animation: float3 30s infinite linear;
          }
          
          .icon4 {
            top: 60%;
            right: 10%;
            animation: float1 22s infinite linear reverse;
          }
          
          .icon5 {
            bottom: 20%;
            left: 60%;
            animation: float2 28s infinite linear;
          }
          
          .icon6 {
            top: 40%;
            left: 70%;
            animation: float3 24s infinite linear reverse;
          }
          
          @keyframes float1 {
            0% { transform: translateY(0) rotate(0deg) scale(1); }
            25% { transform: translateY(-20px) rotate(90deg) scale(1.1); }
            50% { transform: translateY(0) rotate(180deg) scale(1); }
            75% { transform: translateY(20px) rotate(270deg) scale(0.9); }
            100% { transform: translateY(0) rotate(360deg) scale(1); }
          }
          
          @keyframes float2 {
            0% { transform: translateX(0) translateY(0) rotate(0deg); }
            33% { transform: translateX(30px) translateY(-30px) rotate(120deg); }
            66% { transform: translateX(-30px) translateY(30px) rotate(240deg); }
            100% { transform: translateX(0) translateY(0) rotate(360deg); }
          }
          
          @keyframes float3 {
            0% { transform: translateY(0) scale(1) rotate(0deg); }
            50% { transform: translateY(-40px) scale(1.2) rotate(180deg); }
            100% { transform: translateY(0) scale(1) rotate(360deg); }
          }
        `}),(0,N.jsxs)($.div,{variants:yT,initial:`hidden`,animate:`visible`,children:[(0,N.jsxs)(W,{className:`mb-4`,children:[(0,N.jsx)(B,{lg:4,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:bT,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:xT,children:(0,N.jsxs)(z,{className:`stat-card`,onClick:()=>A(`Sale Agreement`),children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:Pp,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:n.filter(e=>e.agreementType===`Sale Agreement`).length}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Sale Agreements`})]})})})}),(0,N.jsx)(B,{lg:4,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:bT,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:xT,children:(0,N.jsxs)(z,{className:`stat-card`,onClick:()=>A(`Rental Agreement`),children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:_p,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:n.filter(e=>e.agreementType===`Rental Agreement`).length}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Rental Agreements`})]})})})}),(0,N.jsx)(B,{lg:4,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:bT,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:xT,children:(0,N.jsxs)(z,{className:`stat-card`,onClick:()=>A(`Partnership Agreement`),children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:fp,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:n.filter(e=>e.agreementType===`Partnership Agreement`).length}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Partnership Agreements`})]})})})})]}),(0,N.jsx)($.div,{variants:bT,children:(0,N.jsx)(z,{className:`glass-card`,children:(0,N.jsxs)(z.Body,{children:[(0,N.jsxs)(`div`,{className:`d-flex justify-content-between align-items-center mb-4`,children:[(0,N.jsxs)(`h4`,{style:{fontFamily:`Playfair Display, serif`,fontWeight:700,color:`#1e293b`,margin:0},children:[`Agreement Records `,C===`all`?``:`- ${C}`]}),(0,N.jsxs)(I,{bg:`light`,text:`dark`,style:{fontSize:`0.9rem`,padding:`8px 16px`,borderRadius:`12px`},children:[`Showing `,i.length,` of `,n.length,` agreements`]})]}),(0,N.jsxs)(W,{className:`align-items-center g-3 mb-4`,children:[(0,N.jsx)(B,{lg:3,md:6,children:(0,N.jsxs)(`div`,{className:`search-container`,children:[(0,N.jsx)(Z,{icon:ap,className:`search-icon`}),(0,N.jsx)(V.Control,{className:`search-bar`,placeholder:`Search by Doc No, Customer...`,value:m,onChange:e=>h(e.target.value)})]})}),(0,N.jsx)(B,{lg:2,md:6,children:(0,N.jsxs)(V.Select,{className:`filter-select`,value:g.vendor,onChange:e=>re(`vendor`,e.target.value),children:[(0,N.jsx)(`option`,{value:``,children:`All Vendors`}),vT.map(e=>(0,N.jsx)(`option`,{value:e.name,children:e.name},e.id))]})}),(0,N.jsx)(B,{lg:2,md:6,children:(0,N.jsxs)(V.Select,{className:`filter-select`,value:g.agreementType,onChange:e=>re(`agreementType`,e.target.value),children:[(0,N.jsx)(`option`,{value:``,children:`All Types`}),M.map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))]})}),(0,N.jsx)(B,{lg:2,md:6,children:(0,N.jsxs)(V.Select,{className:`filter-select`,value:g.status,onChange:e=>re(`status`,e.target.value),children:[(0,N.jsx)(`option`,{value:``,children:`All Status`}),(0,N.jsx)(`option`,{value:`Completed`,children:`Completed`}),(0,N.jsx)(`option`,{value:`Pending`,children:`Pending`})]})}),(0,N.jsx)(B,{lg:1,md:6,children:(0,N.jsx)(`button`,{className:`filter-toggle w-100`,onClick:ie,children:(0,N.jsx)(Z,{icon:Cp})})}),(0,N.jsx)(B,{lg:2,md:12,className:`text-lg-end`,children:(0,N.jsxs)(L,{className:`btn-gold`,onClick:ee,children:[(0,N.jsx)(Z,{icon:Mp,className:`me-2`}),`Add Agreement`]})})]}),(0,N.jsx)(`div`,{className:`table-responsive`,children:(0,N.jsxs)(cs,{className:`table-modern`,children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`th`,{onClick:()=>D(`date`),children:`Date`}),(0,N.jsx)(`th`,{onClick:()=>D(`customerName`),children:`Customer`}),(0,N.jsx)(`th`,{onClick:()=>D(`agreementType`),children:`Type`}),(0,N.jsx)(`th`,{onClick:()=>D(`docNo`),children:`Doc No`}),(0,N.jsx)(`th`,{onClick:()=>D(`tpNo`),children:`TP No`}),(0,N.jsx)(`th`,{onClick:()=>D(`stamp`),children:`Stamp`}),(0,N.jsx)(`th`,{onClick:()=>D(`totalFee`),children:`Total Fee`}),(0,N.jsx)(`th`,{onClick:()=>D(`status`),children:`Status`}),(0,N.jsx)(`th`,{children:`Actions`})]})}),(0,N.jsx)(`tbody`,{children:(0,N.jsx)(PS,{mode:`popLayout`,children:i.map((e,t)=>(0,N.jsxs)($.tr,{variants:ST,initial:`hidden`,animate:`visible`,exit:`exit`,transition:{delay:t*.05},layout:!0,children:[(0,N.jsx)(`td`,{children:new Date(e.date).toLocaleDateString()}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(Z,{icon:Sp,className:`me-2 text-muted`,size:`sm`}),e.customerName]}),(0,N.jsx)(`td`,{children:e.agreementType}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`strong`,{children:e.docNo})}),(0,N.jsx)(`td`,{children:e.tpNo}),(0,N.jsxs)(`td`,{children:[`₹`,e.stamp.toLocaleString()]}),(0,N.jsxs)(`td`,{children:[`₹`,e.totalFee.toLocaleString()]}),(0,N.jsx)(`td`,{children:j(e.status)}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(`button`,{className:`action-btn view`,onClick:()=>k(e),title:`View`,children:(0,N.jsx)(Z,{icon:op})}),(0,N.jsx)(`button`,{className:`action-btn edit`,onClick:()=>O(e),title:`Edit`,children:(0,N.jsx)(Z,{icon:cp})}),(0,N.jsx)(`button`,{className:`action-btn delete`,onClick:()=>te(e.id),title:`Delete`,children:(0,N.jsx)(Z,{icon:sp})})]})]},e.id))})})]})}),i.length===0&&(0,N.jsxs)($.div,{initial:{opacity:0},animate:{opacity:1},className:`text-center py-5`,children:[(0,N.jsx)(`div`,{style:{fontSize:`3rem`,marginBottom:`16px`},children:`🔍`}),(0,N.jsx)(`h5`,{style:{color:`#64748b`,fontWeight:600},children:`No agreements found`}),(0,N.jsx)(`p`,{style:{color:`#94a3b8`},children:`Try adjusting your search or filters`})]})]})})})]}),(0,N.jsx)(PS,{children:c&&f&&(0,N.jsx)(U,{show:c,onHide:()=>l(!1),centered:!0,size:`lg`,children:(0,N.jsxs)($.div,{variants:CT,initial:`hidden`,animate:`visible`,exit:`exit`,children:[(0,N.jsx)(U.Header,{closeButton:!0,className:`modal-header`,children:(0,N.jsx)(U.Title,{className:`modal-title`,children:`👁️ View Agreement Details`})}),(0,N.jsxs)(U.Body,{className:`modal-body`,style:{padding:`32px`},children:[(0,N.jsx)(`div`,{className:`text-center mb-4`,children:j(f.status)}),(0,N.jsxs)(z,{className:`glass-card mb-4`,children:[(0,N.jsx)(z.Header,{style:{background:`linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)`,borderBottom:`1px solid rgba(226, 232, 240, 0.8)`,padding:`20px 24px`},children:(0,N.jsxs)(`h5`,{className:`mb-0`,style:{color:`#1e293b`,fontWeight:700},children:[(0,N.jsx)(Z,{icon:wp,className:`me-2`}),`Basic Information`]})}),(0,N.jsx)(z.Body,{style:{padding:`24px`},children:(0,N.jsxs)(W,{className:`g-4`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`d-flex align-items-center mb-3`,children:[(0,N.jsx)(`div`,{style:{width:`40px`,height:`40px`,borderRadius:`12px`,background:`linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginRight:`16px`,boxShadow:`0 4px 12px rgba(251, 191, 36, 0.3)`},children:(0,N.jsx)(Z,{icon:Zf,style:{color:`#0f172a`,fontSize:`1.1rem`}})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Date`}),(0,N.jsx)(`div`,{style:{fontSize:`1.1rem`,color:`#1e293b`,fontWeight:700},children:new Date(f.date).toLocaleDateString(`en-GB`)})]})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`d-flex align-items-center mb-3`,children:[(0,N.jsx)(`div`,{style:{width:`40px`,height:`40px`,borderRadius:`12px`,background:`linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginRight:`16px`,boxShadow:`0 4px 12px rgba(251, 191, 36, 0.3)`},children:(0,N.jsx)(Z,{icon:Sp,style:{color:`#0f172a`,fontSize:`1.1rem`}})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Customer`}),(0,N.jsx)(`div`,{style:{fontSize:`1.1rem`,color:`#1e293b`,fontWeight:700},children:f.customerName})]})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`d-flex align-items-center mb-3`,children:[(0,N.jsx)(`div`,{style:{width:`40px`,height:`40px`,borderRadius:`12px`,background:`linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginRight:`16px`,boxShadow:`0 4px 12px rgba(251, 191, 36, 0.3)`},children:(0,N.jsx)(Z,{icon:_p,style:{color:`#0f172a`,fontSize:`1.1rem`}})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Vendor`}),(0,N.jsx)(`div`,{style:{fontSize:`1.1rem`,color:`#1e293b`,fontWeight:700},children:f.vendor})]})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`d-flex align-items-center mb-3`,children:[(0,N.jsx)(`div`,{style:{width:`40px`,height:`40px`,borderRadius:`12px`,background:`linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginRight:`16px`,boxShadow:`0 4px 12px rgba(251, 191, 36, 0.3)`},children:(0,N.jsx)(Z,{icon:Pp,style:{color:`#0f172a`,fontSize:`1.1rem`}})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Agreement Type`}),(0,N.jsx)(`div`,{style:{fontSize:`1.1rem`,color:`#1e293b`,fontWeight:700},children:f.agreementType})]})]})})]})})]}),(0,N.jsxs)(z,{className:`glass-card mb-4`,children:[(0,N.jsx)(z.Header,{style:{background:`linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)`,borderBottom:`1px solid rgba(226, 232, 240, 0.8)`,padding:`20px 24px`},children:(0,N.jsxs)(`h5`,{className:`mb-0`,style:{color:`#1e293b`,fontWeight:700},children:[(0,N.jsx)(Z,{icon:Ip,className:`me-2`}),`Property Details`]})}),(0,N.jsxs)(z.Body,{style:{padding:`24px`},children:[(0,N.jsxs)(W,{className:`g-4`,children:[(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(`div`,{className:`text-center`,children:[(0,N.jsx)(`div`,{style:{width:`60px`,height:`60px`,borderRadius:`20px`,background:`linear-gradient(135deg, #10b981 0%, #059669 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(16, 185, 129, 0.3)`},children:(0,N.jsx)(Z,{icon:Ip,style:{color:`white`,fontSize:`1.5rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`TP No`}),(0,N.jsx)(`div`,{style:{fontSize:`1.2rem`,color:`#1e293b`,fontWeight:700},children:f.tpNo})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(`div`,{className:`text-center`,children:[(0,N.jsx)(`div`,{style:{width:`60px`,height:`60px`,borderRadius:`20px`,background:`linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(59, 130, 246, 0.3)`},children:(0,N.jsx)(Z,{icon:_p,style:{color:`white`,fontSize:`1.5rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`Office`}),(0,N.jsx)(`div`,{style:{fontSize:`1.2rem`,color:`#1e293b`,fontWeight:700},children:f.office})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(`div`,{className:`text-center`,children:[(0,N.jsx)(`div`,{style:{width:`60px`,height:`60px`,borderRadius:`20px`,background:`linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(139, 92, 246, 0.3)`},children:(0,N.jsx)(Z,{icon:Ip,style:{color:`white`,fontSize:`1.5rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`Nagar`}),(0,N.jsx)(`div`,{style:{fontSize:`1.2rem`,color:`#1e293b`,fontWeight:700},children:f.nagar})]})})]}),(0,N.jsx)(W,{className:`mt-4`,children:(0,N.jsx)(B,{md:12,children:(0,N.jsxs)(`div`,{className:`text-center p-3`,style:{background:`linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)`,borderRadius:`16px`,border:`2px solid #0ea5e9`},children:[(0,N.jsx)(`div`,{style:{width:`60px`,height:`60px`,borderRadius:`16px`,background:`linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(14, 165, 233, 0.3)`},children:(0,N.jsx)(Z,{icon:wp,style:{color:`white`,fontSize:`1.5rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`Document No`}),(0,N.jsx)(`div`,{style:{fontSize:`1.3rem`,color:`#0ea5e9`,fontWeight:700},children:f.docNo})]})})})]})]}),(0,N.jsxs)(z,{className:`glass-card mb-4`,children:[(0,N.jsx)(z.Header,{style:{background:`linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)`,borderBottom:`1px solid rgba(226, 232, 240, 0.8)`,padding:`20px 24px`},children:(0,N.jsxs)(`h5`,{className:`mb-0`,style:{color:`#1e293b`,fontWeight:700},children:[(0,N.jsx)(Z,{icon:lp,className:`me-2`}),`Process Information`]})}),(0,N.jsx)(z.Body,{style:{padding:`24px`},children:(0,N.jsxs)(W,{className:`g-4`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`d-flex align-items-center justify-content-center p-3`,style:{background:f.fieldVisit===`Yes`?`linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)`:`linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)`,borderRadius:`16px`,border:`2px solid ${f.fieldVisit===`Yes`?`#16a34a`:`#dc2626`}`},children:[(0,N.jsx)(`div`,{style:{width:`50px`,height:`50px`,borderRadius:`16px`,background:f.fieldVisit===`Yes`?`linear-gradient(135deg, #16a34a 0%, #15803d 100%)`:`linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginRight:`16px`,boxShadow:`0 4px 12px ${f.fieldVisit===`Yes`?`rgba(22, 163, 74, 0.3)`:`rgba(220, 38, 38, 0.3)`}`},children:(0,N.jsx)(Z,{icon:f.fieldVisit===`Yes`?Tp:Cp,style:{color:`white`,fontSize:`1.3rem`}})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.9rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Field Visit`}),(0,N.jsx)(`div`,{style:{fontSize:`1.3rem`,color:f.fieldVisit===`Yes`?`#16a34a`:`#dc2626`,fontWeight:700},children:f.fieldVisit})]})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`d-flex align-items-center justify-content-center p-3`,style:{background:f.returnDocument===`Yes`?`linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)`:`linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)`,borderRadius:`16px`,border:`2px solid ${f.returnDocument===`Yes`?`#16a34a`:`#dc2626`}`},children:[(0,N.jsx)(`div`,{style:{width:`50px`,height:`50px`,borderRadius:`16px`,background:f.returnDocument===`Yes`?`linear-gradient(135deg, #16a34a 0%, #15803d 100%)`:`linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginRight:`16px`,boxShadow:`0 4px 12px ${f.returnDocument===`Yes`?`rgba(22, 163, 74, 0.3)`:`rgba(220, 38, 38, 0.3)`}`},children:(0,N.jsx)(Z,{icon:f.returnDocument===`Yes`?Tp:Cp,style:{color:`white`,fontSize:`1.3rem`}})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.9rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Return Document`}),(0,N.jsx)(`div`,{style:{fontSize:`1.3rem`,color:f.returnDocument===`Yes`?`#16a34a`:`#dc2626`,fontWeight:700},children:f.returnDocument})]})]})})]})})]}),(0,N.jsxs)(z,{className:`glass-card mb-4`,children:[(0,N.jsx)(z.Header,{style:{background:`linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)`,borderBottom:`1px solid rgba(226, 232, 240, 0.8)`,padding:`20px 24px`},children:(0,N.jsxs)(`h5`,{className:`mb-0`,style:{color:`#1e293b`,fontWeight:700},children:[(0,N.jsx)(Z,{icon:hp,className:`me-2`}),`Financial Details`]})}),(0,N.jsxs)(z.Body,{style:{padding:`24px`},children:[(0,N.jsxs)(W,{className:`g-4`,children:[(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(`div`,{className:`text-center p-3`,style:{background:`linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)`,borderRadius:`16px`,border:`2px solid #f59e0b`},children:[(0,N.jsx)(`div`,{style:{width:`50px`,height:`50px`,borderRadius:`16px`,background:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(245, 158, 11, 0.3)`},children:(0,N.jsx)(Z,{icon:hp,style:{color:`white`,fontSize:`1.3rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.8rem`,color:`#92400e`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`Edit Fee`}),(0,N.jsxs)(`div`,{style:{fontSize:`1.2rem`,color:`#92400e`,fontWeight:700},children:[`₹`,f.editFee.toLocaleString()]})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(`div`,{className:`text-center p-3`,style:{background:`linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)`,borderRadius:`16px`,border:`2px solid #f59e0b`},children:[(0,N.jsx)(`div`,{style:{width:`50px`,height:`50px`,borderRadius:`16px`,background:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(245, 158, 11, 0.3)`},children:(0,N.jsx)(Z,{icon:hp,style:{color:`white`,fontSize:`1.3rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.8rem`,color:`#92400e`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`Stamp`}),(0,N.jsxs)(`div`,{style:{fontSize:`1.2rem`,color:`#92400e`,fontWeight:700},children:[`₹`,f.stamp.toLocaleString()]})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(`div`,{className:`text-center p-3`,style:{background:`linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)`,borderRadius:`16px`,border:`2px solid #f59e0b`},children:[(0,N.jsx)(`div`,{style:{width:`50px`,height:`50px`,borderRadius:`16px`,background:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(245, 158, 11, 0.3)`},children:(0,N.jsx)(Z,{icon:hp,style:{color:`white`,fontSize:`1.3rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.8rem`,color:`#92400e`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`Others`}),(0,N.jsxs)(`div`,{style:{fontSize:`1.2rem`,color:`#92400e`,fontWeight:700},children:[`₹`,f.others.toLocaleString()]})]})})]}),(0,N.jsxs)(W,{className:`mt-4 g-4`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`text-center p-3`,style:{background:`linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)`,borderRadius:`16px`,border:`2px solid #0ea5e9`},children:[(0,N.jsx)(`div`,{style:{width:`50px`,height:`50px`,borderRadius:`16px`,background:`linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(14, 165, 233, 0.3)`},children:(0,N.jsx)(Z,{icon:hp,style:{color:`white`,fontSize:`1.3rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.8rem`,color:`#0c4a6e`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`Writing Fee`}),(0,N.jsxs)(`div`,{style:{fontSize:`1.2rem`,color:`#0c4a6e`,fontWeight:700},children:[`₹`,f.writingFee.toLocaleString()]})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`text-center p-3`,style:{background:`linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)`,borderRadius:`16px`,border:`2px solid #0ea5e9`},children:[(0,N.jsx)(`div`,{style:{width:`50px`,height:`50px`,borderRadius:`16px`,background:`linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(14, 165, 233, 0.3)`},children:(0,N.jsx)(Z,{icon:hp,style:{color:`white`,fontSize:`1.3rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.8rem`,color:`#0c4a6e`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`DD Commission`}),(0,N.jsxs)(`div`,{style:{fontSize:`1.2rem`,color:`#0c4a6e`,fontWeight:700},children:[`₹`,f.ddCommission.toLocaleString()]})]})})]})]})]}),(0,N.jsx)(z,{className:`glass-card`,children:(0,N.jsxs)(z.Body,{style:{padding:`32px`,textAlign:`center`},children:[(0,N.jsx)(`div`,{style:{width:`80px`,height:`80px`,borderRadius:`24px`,background:`linear-gradient(135deg, #10b981 0%, #059669 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 20px`,boxShadow:`0 8px 24px rgba(16, 185, 129, 0.4)`},children:(0,N.jsx)(Z,{icon:hp,style:{color:`white`,fontSize:`2rem`}})}),(0,N.jsx)(`h3`,{style:{color:`#059669`,fontWeight:700,marginBottom:`8px`},children:`Total Fee`}),(0,N.jsxs)(`div`,{style:{fontSize:`2.5rem`,fontWeight:800,color:`#059669`,textShadow:`0 2px 4px rgba(5, 150, 105, 0.2)`},children:[`₹`,f.totalFee.toLocaleString()]}),(0,N.jsx)(`div`,{style:{color:`#64748b`,fontSize:`1rem`,marginTop:`8px`},children:`(Edit Fee + Stamp + Others + Writing Fee + DD Commission)`})]})})]}),(0,N.jsx)(U.Footer,{className:`border-0 px-4 pb-4`,children:(0,N.jsx)(L,{className:`btn-gold`,onClick:()=>l(!1),children:`Close`})})]})})}),(0,N.jsx)(PS,{children:o&&(0,N.jsx)(U,{show:o,onHide:()=>s(!1),centered:!0,size:`lg`,children:(0,N.jsxs)($.div,{variants:CT,initial:`hidden`,animate:`visible`,exit:`exit`,children:[(0,N.jsx)(U.Header,{closeButton:!0,className:`modal-header`,children:(0,N.jsx)(U.Title,{className:`modal-title`,children:u?`✏️ Edit Agreement Details`:`➕ Add New Agreement`})}),(0,N.jsx)(U.Body,{className:`modal-body`,children:(0,N.jsxs)(V,{children:[(0,N.jsxs)(W,{className:`g-3`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Date`}),(0,N.jsx)(V.Control,{type:`date`,className:`form-control-modern`,value:T.date,onChange:e=>E({...T,date:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Customer Name`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter customer name`,value:T.customerName,onChange:e=>E({...T,customerName:e.target.value})})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Agreement Type`}),(0,N.jsxs)(V.Select,{className:`form-control-modern`,value:T.agreementType,onChange:e=>E({...T,agreementType:e.target.value}),children:[(0,N.jsx)(`option`,{value:``,children:`Select Type`}),M.map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))]})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Doc No`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter document number`,value:T.docNo,onChange:e=>E({...T,docNo:e.target.value})})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`TP No`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter TP number`,value:T.tpNo,onChange:e=>E({...T,tpNo:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Office`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter office`,value:T.office,onChange:e=>E({...T,office:e.target.value})})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Vendor / Party`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter vendor or party`,value:T.vendor,onChange:e=>E({...T,vendor:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Reference`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter reference`,value:T.reference,onChange:e=>E({...T,reference:e.target.value})})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Plot No`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter plot number`,value:T.plotNo,onChange:e=>E({...T,plotNo:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Nagar`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter nagar`,value:T.nagar,onChange:e=>E({...T,nagar:e.target.value})})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Field Visit`}),(0,N.jsxs)(V.Select,{className:`form-control-modern`,value:T.fieldVisit,onChange:e=>E({...T,fieldVisit:e.target.value}),children:[(0,N.jsx)(`option`,{value:`Yes`,children:`Yes`}),(0,N.jsx)(`option`,{value:`No`,children:`No`})]})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Return Document`}),(0,N.jsxs)(V.Select,{className:`form-control-modern`,value:T.returnDocument,onChange:e=>E({...T,returnDocument:e.target.value}),children:[(0,N.jsx)(`option`,{value:`Yes`,children:`Yes`}),(0,N.jsx)(`option`,{value:`No`,children:`No`})]})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Edit Fee`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`Enter edit fee`,value:T.editFee,onChange:e=>E({...T,editFee:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Others`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`Enter other charges`,value:T.others,onChange:e=>E({...T,others:e.target.value})})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Stamp`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`Enter stamp amount`,value:T.stamp,onChange:e=>E({...T,stamp:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Writing Fee`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`Enter writing fee`,value:T.writingFee,onChange:e=>E({...T,writingFee:e.target.value})})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`DD Commission`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`Enter DD commission`,value:T.ddCommission,onChange:e=>E({...T,ddCommission:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Total Fee`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`Enter total fee`,value:T.totalFee,onChange:e=>E({...T,totalFee:e.target.value})})]})})]})]})}),(0,N.jsxs)(U.Footer,{className:`border-0 px-4 pb-4`,children:[(0,N.jsx)(L,{variant:`light`,onClick:()=>s(!1),style:{borderRadius:`16px`,padding:`12px 24px`,fontWeight:600,boxShadow:`4px 4px 8px #d1d5db, -4px -4px 8px #ffffff`},children:`Cancel`}),(0,N.jsxs)(L,{className:`btn-gold`,onClick:ne,children:[(0,N.jsx)(Z,{icon:u?cp:Mp,className:`me-2`}),u?`Update Agreement`:`Add Agreement`]})]})]})})})]})]})},TT=[{id:1,date:`2024-10-01`,vendor:`Vendor A`,customerName:`John Doe`,reference:`Vendor A`,deed:`Sale Deed`,tpNo:`TP001`,office:`Office 1`,plotNo:`12345`,nagar:`Nagar 1`,fieldVisit:`Yes`,docNo:`DOC001`,returnDocument:`Yes`,editFee:5e3,stamp:1e4,others:1e3,totalFee:16e3,writingFee:2e3,ddCommission:500,status:`Completed`},{id:2,date:`2024-10-05`,vendor:`Normal Customer`,customerName:`Jane Smith`,reference:`Manual Entry`,deed:`Settlement`,tpNo:`TP002`,office:`Office 2`,plotNo:`67890`,nagar:`Nagar 2`,fieldVisit:`No`,docNo:`DOC002`,returnDocument:`No`,editFee:7500,stamp:15e3,others:2e3,totalFee:24500,writingFee:3e3,ddCommission:750,status:`Pending`},{id:3,date:`2024-10-10`,vendor:`Vendor C`,customerName:`Bob Johnson`,reference:`Vendor C`,deed:`Power`,tpNo:`TP003`,office:`Office 1`,plotNo:`54321`,nagar:`Nagar 3`,fieldVisit:`Yes`,docNo:`DOC003`,returnDocument:`Yes`,editFee:6e3,stamp:12e3,others:1500,totalFee:19500,writingFee:2500,ddCommission:600,status:`Completed`},{id:4,date:`2024-10-15`,vendor:`Vendor D`,customerName:`Alice Williams`,reference:`Manual Entry`,deed:`Release`,tpNo:`TP004`,office:`Office 3`,plotNo:`98765`,nagar:`Nagar 4`,fieldVisit:`No`,docNo:`DOC004`,returnDocument:`Yes`,editFee:4500,stamp:9e3,others:800,totalFee:14300,writingFee:1800,ddCommission:450,status:`Pending`},{id:5,date:`2024-10-20`,vendor:`Vendor A`,customerName:`Charlie Brown`,reference:`Vendor A`,deed:`Rectification`,tpNo:`TP005`,office:`Office 2`,plotNo:`11111`,nagar:`Nagar 1`,fieldVisit:`Yes`,docNo:`DOC005`,returnDocument:`No`,editFee:8e3,stamp:16e3,others:2500,totalFee:26500,writingFee:4e3,ddCommission:800,status:`Completed`}],ET=[{id:1,name:`Vendor A`},{id:2,name:`Vendor B`},{id:3,name:`Vendor C`},{id:4,name:`Vendor D`},{id:5,name:`Vendor E`}],DT={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},OT={hidden:{opacity:0,y:30,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:`spring`,stiffness:100,damping:12}}},kT={rest:{scale:1,y:0},hover:{scale:1.02,y:-5,transition:{type:`spring`,stiffness:400,damping:17}}},AT={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0},exit:{opacity:0,x:20}},jT={hidden:{opacity:0,scale:.8,y:50},visible:{opacity:1,scale:1,y:0,transition:{type:`spring`,stiffness:300,damping:25}},exit:{opacity:0,scale:.9,y:50,transition:{duration:.2}}},MT=()=>{let[e,t]=(0,b.useState)(`deed`),[n,r]=(0,b.useState)(TT),[i,a]=(0,b.useState)(TT),[o,s]=(0,b.useState)(!1),[c,l]=(0,b.useState)(!1),[u,d]=(0,b.useState)(!1),[f,p]=(0,b.useState)(null),[m,h]=(0,b.useState)(``),[g,_]=(0,b.useState)({vendor:``,deed:``,status:``}),[v,y]=(0,b.useState)({key:null,direction:`asc`}),[x,S]=(0,b.useState)(`vendor`),[C,w]=(0,b.useState)({date:``,vendor:``,customerName:``,reference:``,deed:``,tpNo:``,office:``,plotNo:``,nagar:``,fieldVisit:`No`,docNo:``,returnDocument:`No`,editFee:``,stamp:``,others:``,totalFee:``,writingFee:``,ddCommission:``}),T=n.length,E=n.filter(e=>e.status===`Completed`).length,D=n.filter(e=>e.status===`Pending`).length,ee=n.filter(e=>new Date(e.date).getMonth()===new Date().getMonth()).length;(0,b.useEffect)(()=>{let e=n.filter(e=>e.vendor.toLowerCase().includes(m.toLowerCase())||e.customerName.toLowerCase().includes(m.toLowerCase())||e.tpNo.toLowerCase().includes(m.toLowerCase())||e.deed.toLowerCase().includes(m.toLowerCase())||e.nagar.toLowerCase().includes(m.toLowerCase()));g.vendor&&(e=e.filter(e=>e.vendor===g.vendor)),g.deed&&(e=e.filter(e=>e.deed===g.deed)),g.status&&(e=e.filter(e=>e.status===g.status)),v.key&&e.sort((e,t)=>e[v.key]<t[v.key]?v.direction===`asc`?-1:1:e[v.key]>t[v.key]?v.direction===`asc`?1:-1:0),a(e)},[n,m,g,v]);let O=e=>{y(t=>({key:e,direction:t.key===e&&t.direction===`asc`?`desc`:`asc`}))},k=()=>{d(!1),p(null),S(`vendor`),w({date:``,vendor:``,customerName:``,reference:``,deed:``,tpNo:``,office:``,plotNo:``,nagar:``,fieldVisit:`No`,docNo:``,returnDocument:`No`,editFee:``,stamp:``,others:``,totalFee:``,writingFee:``,ddCommission:``}),s(!0)},te=e=>{d(!0),p(e),S(e.reference===`Manual Entry`?`manual`:`vendor`),w({date:e.date,vendor:e.vendor,customerName:e.customerName,reference:e.reference,deed:e.deed,tpNo:e.tpNo,office:e.office,plotNo:e.plotNo,nagar:e.nagar,fieldVisit:e.fieldVisit,docNo:e.docNo,returnDocument:e.returnDocument,editFee:e.editFee.toString(),stamp:e.stamp.toString(),others:e.others.toString(),totalFee:e.totalFee.toString(),writingFee:e.writingFee.toString(),ddCommission:e.ddCommission.toString()}),s(!0)},ne=e=>{p(e),l(!0)},re=e=>{window.confirm(`Are you sure you want to delete this deed?`)&&r(n.filter(t=>t.id!==e))},ie=()=>{let e=(parseFloat(C.editFee)||0)+(parseFloat(C.stamp)||0)+(parseFloat(C.others)||0),t={...C,id:u?f.id:Date.now(),totalFee:e,status:`Pending`};r(u?n.map(e=>e.id===f.id?t:e):[...n,t]),s(!1)},A=(e,t)=>{_({...g,[e]:t})},j=e=>{let t={Completed:{bg:`#10b981`,icon:Tp},Pending:{bg:`#f59e0b`,icon:lp}},n=t[e]||t.Pending;return(0,N.jsxs)(I,{style:{background:`linear-gradient(135deg, ${n.bg} 0%, ${n.bg}dd 100%)`,border:`none`,padding:`8px 16px`,borderRadius:`20px`,fontWeight:`600`,fontSize:`0.85rem`,display:`inline-flex`,alignItems:`center`,gap:`6px`,boxShadow:`0 4px 15px ${n.bg}40`},children:[(0,N.jsx)(Z,{icon:n.icon,size:`sm`}),e]})},M=[`Sale Deed`,`Settlement`,`Power`,`Release`,`Rectification`,`Participation`,`Will`,`MOD`,`Cancel`];return(0,N.jsxs)(`div`,{className:`deed-page`,children:[(0,N.jsx)(Nw,{activeTab:e,setActiveTab:t}),(0,N.jsxs)(`div`,{className:`main-content`,children:[(0,N.jsx)(`style`,{children:`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
          
          .deed-page {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 50%, #f0f4f8 100%);
            min-height: 100vh;
            font-family: 'Inter', sans-serif;
            position: relative;
            overflow: hidden;
          }

          /* Decorative Background Elements */
          .deed-page::before {
            content: "📜";
            position: fixed;
            font-size: 280px;
            opacity: 0.04;
            bottom: 100px;
            right: -50px;
            z-index: 0;
            transform: rotate(-25deg);
            pointer-events: none;
          }

          .deed-page::after {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 350px;
            height: 350px;
            background: radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%);
            z-index: 0;
            pointer-events: none;
            border-radius: 50%;
            transform: translate(-30%, -30%);
          }
          
          .main-content {
            margin-left: 280px;
            padding: 40px;
            position: relative;
            z-index: 1;
          }
          
          /* Glassmorphism Cards */
          .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 24px;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: 
              0 8px 32px rgba(31, 38, 135, 0.07),
              0 2px 8px rgba(31, 38, 135, 0.04),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .glass-card:hover {
            box-shadow: 
              0 20px 60px rgba(31, 38, 135, 0.12),
              0 4px 12px rgba(31, 38, 135, 0.06),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
          }
          
          /* Neumorphic Stats Cards */
          .stat-card {
            background: #0f172a;
            border-radius: 24px;
            padding: 16px 12px;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 
              20px 20px 60px rgba(0,0,0,0.5),
              -20px -20px 60px rgba(251,191,36,0.1);
            transition: all 0.4s ease;
            color: white;
          }
          
          .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
          }
          
          .stat-icon-wrapper {
            width: 48px;
            height: 48px;
            border-radius: 20px;
            background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 12px;
            box-shadow: 
              8px 8px 16px rgba(0,0,0,0.5),
              -8px -8px 16px rgba(251,191,36,0.2);
            transition: all 0.3s ease;
          }
          
          .stat-card:hover .stat-icon-wrapper {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 
              12px 12px 24px rgba(0,0,0,0.5),
              -12px -12px 24px rgba(251,191,36,0.2);
          }
          
          .stat-icon {
            font-size: 1.5rem;
            color: #0f172a;
          }
          
          .stat-number {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 700;
            color: #fbbf24;
            margin-bottom: 4px;
          }
          
          .stat-label {
            font-size: 0.8rem;
            color: rgba(255,255,255,0.7);
            font-weight: 500;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          
          /* Modern Search Bar */
          .search-container {
            position: relative;
          }
          
          .search-bar {
            background: rgba(255, 255, 255, 0.9);
            border: 2px solid #0f172a;
            border-radius: 16px;
            padding: 14px 20px 14px 50px;
            color: #334155;
            font-size: 0.95rem;
            font-weight: 500;
            width: 100%;
            transition: all 0.3s ease;
            box-shadow: none;
          }
          
          .search-bar:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.15);
          }
          
          .search-bar::placeholder {
            color: #94a3b8;
          }
          
          .search-icon {
            position: absolute;
            left: 18px;
            top: 50%;
            transform: translateY(-50%);
            color: #94a3b8;
            font-size: 1.1rem;
          }
          
          /* Neumorphic Filter Selects */
          .filter-select {
            background: linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%);
            border: 2px solid #0f172a;
            border-radius: 16px;
            padding: 12px 16px;
            color: #475569;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            box-shadow: none;
            transition: all 0.3s ease;
          }
          
          .filter-select:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.15);
          }
          
          /* Gold Gradient Button */
          .btn-gold {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
            border: none;
            border-radius: 16px;
            padding: 14px 28px;
            font-weight: 600;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 0.9rem;
            position: relative;
            overflow: hidden;
            box-shadow: 
              0 4px 15px rgba(217, 119, 6, 0.3),
              0 8px 25px rgba(217, 119, 6, 0.2);
            transition: all 0.3s ease;
          }
          
          .btn-gold::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
          }
          
          .btn-gold:hover {
            transform: translateY(-2px);
            box-shadow: 
              0 8px 25px rgba(217, 119, 6, 0.4),
              0 12px 35px rgba(217, 119, 6, 0.3);
          }
          
          .btn-gold:hover::before {
            left: 100%;
          }
          
          .btn-gold:active {
            transform: translateY(0);
            box-shadow: 
              0 2px 10px rgba(217, 119, 6, 0.3);
          }
          
          /* Modern Table */
          .table-modern {
            background: rgba(255, 255, 255, 0.6);
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 
              0 4px 20px rgba(31, 38, 135, 0.05),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
          }
          
          .table-modern thead th {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: #fbbf24;
            border: none;
            font-weight: 700;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 18px 16px;
            position: sticky;
            top: 0;
            z-index: 10;
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: left;
          }
          
          .table-modern thead th:hover {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: #fbbf24;
          }
          
          .table-modern tbody tr {
            transition: all 0.3s ease;
            border-bottom: 1px solid rgba(226, 232, 240, 0.5);
          }
          
          .table-modern tbody tr:hover {
            background: rgba(251, 191, 36, 0.05);
            transform: scale(1.005);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }
          
          .table-modern tbody td {
            color: #334155;
            border: none;
            padding: 16px;
            font-weight: 500;
            vertical-align: middle;
            text-align: left;
          }
          
          .table-modern tbody td:last-child {
            text-align: center;
          }
          
          .table-modern thead th:last-child {
            text-align: center;
          }
          
          /* Action Buttons */
          .action-btn {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            border: none;
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            color: #64748b;
            margin: 0 4px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 
              4px 4px 8px #d1d5db,
              -4px -4px 8px #ffffff;
            transition: all 0.3s ease;
          }
          
          .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          .action-btn.view:hover {
            color: #3b82f6;
            background: linear-gradient(145deg, #eff6ff 0%, #dbeafe 100%);
          }
          
          .action-btn.edit:hover {
            color: #f59e0b;
            background: linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%);
          }
          
          .action-btn.delete:hover {
            color: #ef4444;
            background: linear-gradient(145deg, #fef2f2 0%, #fee2e2 100%);
          }
          
          /* Modern Modal */
          .modal-content {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.9);
            border-radius: 24px;
            box-shadow: 
              0 25px 50px -12px rgba(0, 0, 0, 0.15),
              0 0 0 1px rgba(255, 255, 255, 0.5) inset;
            overflow: hidden;
          }
          
          .modal-header {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border-bottom: 1px solid rgba(226, 232, 240, 0.8);
            padding: 24px;
          }
          
          .modal-title {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            color: #1e293b;
            font-size: 1.5rem;
          }
          
          .modal-body {
            padding: 28px;
          }
          
          /* Neumorphic Form Inputs */
          .form-control-modern {
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border: 2px solid transparent;
            border-radius: 16px;
            padding: 14px 18px;
            color: #334155;
            font-weight: 500;
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
            transition: all 0.3s ease;
          }
          
          .form-control-modern:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 
              0 0 0 4px rgba(251, 191, 36, 0.15),
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          .form-label-modern {
            font-weight: 600;
            color: #475569;
            margin-bottom: 8px;
            font-size: 0.9rem;
          }
          
          /* Total Alert */
          .total-alert {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: none;
            border-radius: 16px;
            padding: 20px;
            font-weight: 700;
            color: #92400e;
            font-size: 1.2rem;
            text-align: center;
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          /* Page Title */
          .page-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .page-subtitle {
            color: #64748b;
            font-size: 1.1rem;
            font-weight: 500;
            margin-bottom: 32px;
          }
          
          /* Filter Toggle Button */
          .filter-toggle {
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border: none;
            border-radius: 12px;
            padding: 12px 16px;
            color: #64748b;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 
              4px 4px 8px #d1d5db,
              -4px -4px 8px #ffffff;
            transition: all 0.3s ease;
          }
          
          .filter-toggle:hover {
            color: #f59e0b;
            transform: translateY(-1px);
          }
          
          .filter-toggle.active {
            color: #f59e0b;
            background: linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%);
          }
          
          /* Responsive */
          @media (max-width: 991px) {
            .main-content {
              margin-left: 0;
              padding: 20px;
            }
            
            .page-title {
              font-size: 1.8rem;
            }
            
            .stat-number {
              font-size: 1.6rem;
            }
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%);
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%);
          }
        `}),(0,N.jsxs)($.div,{variants:DT,initial:`hidden`,animate:`visible`,children:[(0,N.jsxs)(W,{className:`mb-4`,children:[(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:OT,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:kT,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:Pp,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:T}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Total Deeds`})]})})})}),(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:OT,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:kT,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:Tp,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:E}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Completed`})]})})})}),(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:OT,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:kT,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:lp,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:D}),(0,N.jsx)(`div`,{className:`stat-label`,children:`Pending`})]})})})}),(0,N.jsx)(B,{lg:3,md:6,className:`mb-3`,children:(0,N.jsx)($.div,{variants:OT,whileHover:`hover`,initial:`rest`,animate:`rest`,children:(0,N.jsx)($.div,{variants:kT,children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,N.jsx)(Z,{icon:Zf,className:`stat-icon`})}),(0,N.jsx)(`div`,{className:`stat-number`,children:ee}),(0,N.jsx)(`div`,{className:`stat-label`,children:`This Month`})]})})})})]}),(0,N.jsx)($.div,{variants:OT,children:(0,N.jsx)(z,{className:`glass-card`,children:(0,N.jsxs)(z.Body,{children:[(0,N.jsxs)(`div`,{className:`d-flex justify-content-between align-items-center mb-4`,children:[(0,N.jsx)(`h4`,{style:{fontFamily:`Playfair Display, serif`,fontWeight:700,color:`#1e293b`,margin:0},children:`Deed Records`}),(0,N.jsxs)(I,{bg:`light`,text:`dark`,style:{fontSize:`0.9rem`,padding:`8px 16px`,borderRadius:`12px`},children:[`Showing `,i.length,` of `,n.length,` deeds`]})]}),(0,N.jsxs)(W,{className:`align-items-center g-3 mb-4`,children:[(0,N.jsx)(B,{lg:3,md:6,children:(0,N.jsxs)(`div`,{className:`search-container`,children:[(0,N.jsx)(Z,{icon:ap,className:`search-icon`}),(0,N.jsx)(V.Control,{className:`search-bar`,placeholder:`Search by Vendor, Customer, TP No...`,value:m,onChange:e=>h(e.target.value)})]})}),(0,N.jsx)(B,{lg:2,md:6,children:(0,N.jsxs)(V.Select,{className:`filter-select`,value:g.vendor,onChange:e=>A(`vendor`,e.target.value),children:[(0,N.jsx)(`option`,{value:``,children:`All Vendors`}),[...new Set(n.map(e=>e.vendor))].map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))]})}),(0,N.jsx)(B,{lg:2,md:6,children:(0,N.jsxs)(V.Select,{className:`filter-select`,value:g.deed,onChange:e=>A(`deed`,e.target.value),children:[(0,N.jsx)(`option`,{value:``,children:`All Deed Types`}),M.map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))]})}),(0,N.jsx)(B,{lg:2,md:6,children:(0,N.jsxs)(V.Select,{className:`filter-select`,value:g.status,onChange:e=>A(`status`,e.target.value),children:[(0,N.jsx)(`option`,{value:``,children:`All Status`}),(0,N.jsx)(`option`,{value:`Completed`,children:`Completed`}),(0,N.jsx)(`option`,{value:`Pending`,children:`Pending`})]})}),(0,N.jsx)(B,{lg:3,md:12,className:`text-lg-end`,children:(0,N.jsxs)(L,{className:`btn-gold`,onClick:k,children:[(0,N.jsx)(Z,{icon:Mp,className:`me-2`}),`Add New Deed`]})})]}),(0,N.jsx)(`div`,{className:`table-responsive`,children:(0,N.jsxs)(cs,{className:`table-modern`,children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsxs)(`th`,{onClick:()=>O(`date`),children:[`Date `,v.key===`date`&&(0,N.jsx)(Z,{icon:v.direction===`asc`?bp:Fp,size:`sm`,className:`ms-1`})]}),(0,N.jsx)(`th`,{onClick:()=>O(`customerName`),children:`Customer`}),(0,N.jsx)(`th`,{onClick:()=>O(`deed`),children:`Deed Type`}),(0,N.jsx)(`th`,{onClick:()=>O(`tpNo`),children:`TP No`}),(0,N.jsx)(`th`,{onClick:()=>O(`nagar`),children:`Nagar`}),(0,N.jsx)(`th`,{onClick:()=>O(`totalFee`),children:`Total Fee (₹)`}),(0,N.jsx)(`th`,{onClick:()=>O(`status`),children:`Status`}),(0,N.jsx)(`th`,{children:`Actions`})]})}),(0,N.jsx)(`tbody`,{children:(0,N.jsx)(PS,{mode:`popLayout`,children:i.map((e,t)=>(0,N.jsxs)($.tr,{variants:AT,initial:`hidden`,animate:`visible`,exit:`exit`,transition:{delay:t*.05},layout:!0,children:[(0,N.jsx)(`td`,{children:new Date(e.date).toLocaleDateString(`en-GB`)}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(Z,{icon:Sp,className:`me-2 text-muted`,size:`sm`}),e.customerName]}),(0,N.jsx)(`td`,{children:(0,N.jsx)(I,{bg:`light`,text:`dark`,style:{fontWeight:500},children:e.deed})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`strong`,{children:e.tpNo})}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(Z,{icon:Ip,className:`me-2 text-muted`,size:`sm`}),e.nagar]}),(0,N.jsx)(`td`,{children:(0,N.jsxs)(`strong`,{style:{color:`#059669`},children:[(0,N.jsx)(Z,{icon:hp,className:`me-2`,size:`sm`}),`₹`,e.totalFee.toLocaleString()]})}),(0,N.jsx)(`td`,{children:j(e.status)}),(0,N.jsxs)(`td`,{children:[(0,N.jsx)(`button`,{className:`action-btn view`,onClick:()=>ne(e),title:`View`,children:(0,N.jsx)(Z,{icon:op})}),(0,N.jsx)(`button`,{className:`action-btn edit`,onClick:()=>te(e),title:`Edit`,children:(0,N.jsx)(Z,{icon:cp})}),(0,N.jsx)(`button`,{className:`action-btn delete`,onClick:()=>re(e.id),title:`Delete`,children:(0,N.jsx)(Z,{icon:sp})})]})]},e.id))})})]})}),i.length===0&&(0,N.jsxs)($.div,{initial:{opacity:0},animate:{opacity:1},className:`text-center py-5`,children:[(0,N.jsx)(`div`,{style:{fontSize:`3rem`,marginBottom:`16px`},children:`🔍`}),(0,N.jsx)(`h5`,{style:{color:`#64748b`,fontWeight:600},children:`No deeds found`}),(0,N.jsx)(`p`,{style:{color:`#94a3b8`},children:`Try adjusting your search or filters`})]})]})})})]}),(0,N.jsx)(PS,{children:c&&f&&(0,N.jsx)(U,{show:c,onHide:()=>l(!1),centered:!0,size:`xl`,children:(0,N.jsxs)($.div,{variants:jT,initial:`hidden`,animate:`visible`,exit:`exit`,children:[(0,N.jsx)(U.Header,{closeButton:!0,className:`modal-header`,children:(0,N.jsxs)(U.Title,{className:`modal-title`,children:[(0,N.jsx)(Z,{icon:Pp,className:`me-3`}),`Deed Details - `,f.tpNo]})}),(0,N.jsxs)(U.Body,{className:`modal-body`,style:{padding:`32px`},children:[(0,N.jsx)(`div`,{className:`text-center mb-4`,children:j(f.status)}),(0,N.jsxs)(z,{className:`glass-card mb-4`,children:[(0,N.jsx)(z.Header,{style:{background:`linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)`,borderBottom:`1px solid rgba(226, 232, 240, 0.8)`,padding:`20px 24px`},children:(0,N.jsxs)(`h5`,{className:`mb-0`,style:{color:`#1e293b`,fontWeight:700},children:[(0,N.jsx)(Z,{icon:wp,className:`me-2`}),`Basic Information`]})}),(0,N.jsx)(z.Body,{style:{padding:`24px`},children:(0,N.jsxs)(W,{className:`g-4`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`d-flex align-items-center mb-3`,children:[(0,N.jsx)(`div`,{style:{width:`40px`,height:`40px`,borderRadius:`12px`,background:`linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginRight:`16px`,boxShadow:`0 4px 12px rgba(251, 191, 36, 0.3)`},children:(0,N.jsx)(Z,{icon:Zf,style:{color:`#0f172a`,fontSize:`1.1rem`}})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Date`}),(0,N.jsx)(`div`,{style:{fontSize:`1.1rem`,color:`#1e293b`,fontWeight:600},children:new Date(f.date).toLocaleDateString(`en-GB`)})]})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`d-flex align-items-center mb-3`,children:[(0,N.jsx)(`div`,{style:{width:`40px`,height:`40px`,borderRadius:`12px`,background:`linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginRight:`16px`,boxShadow:`0 4px 12px rgba(251, 191, 36, 0.3)`},children:(0,N.jsx)(Z,{icon:Sp,style:{color:`#0f172a`,fontSize:`1.1rem`}})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Customer`}),(0,N.jsx)(`div`,{style:{fontSize:`1.1rem`,color:`#1e293b`,fontWeight:600},children:f.customerName})]})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`d-flex align-items-center mb-3`,children:[(0,N.jsx)(`div`,{style:{width:`40px`,height:`40px`,borderRadius:`12px`,background:`linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginRight:`16px`,boxShadow:`0 4px 12px rgba(251, 191, 36, 0.3)`},children:(0,N.jsx)(Z,{icon:_p,style:{color:`#0f172a`,fontSize:`1.1rem`}})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Vendor`}),(0,N.jsx)(`div`,{style:{fontSize:`1.1rem`,color:`#1e293b`,fontWeight:600},children:f.vendor})]})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`d-flex align-items-center mb-3`,children:[(0,N.jsx)(`div`,{style:{width:`40px`,height:`40px`,borderRadius:`12px`,background:`linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginRight:`16px`,boxShadow:`0 4px 12px rgba(251, 191, 36, 0.3)`},children:(0,N.jsx)(Z,{icon:Pp,style:{color:`#0f172a`,fontSize:`1.1rem`}})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Deed Type`}),(0,N.jsx)(`div`,{style:{fontSize:`1.1rem`,color:`#1e293b`,fontWeight:600},children:f.deed})]})]})})]})})]}),(0,N.jsxs)(z,{className:`glass-card mb-4`,children:[(0,N.jsx)(z.Header,{style:{background:`linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)`,borderBottom:`1px solid rgba(226, 232, 240, 0.8)`,padding:`20px 24px`},children:(0,N.jsxs)(`h5`,{className:`mb-0`,style:{color:`#1e293b`,fontWeight:700},children:[(0,N.jsx)(Z,{icon:Ip,className:`me-2`}),`Property Information`]})}),(0,N.jsxs)(z.Body,{style:{padding:`24px`},children:[(0,N.jsxs)(W,{className:`g-4`,children:[(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(`div`,{className:`text-center`,children:[(0,N.jsx)(`div`,{style:{width:`60px`,height:`60px`,borderRadius:`20px`,background:`linear-gradient(135deg, #10b981 0%, #059669 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(16, 185, 129, 0.3)`},children:(0,N.jsx)(Z,{icon:Ip,style:{color:`white`,fontSize:`1.5rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`TP No`}),(0,N.jsx)(`div`,{style:{fontSize:`1.2rem`,color:`#1e293b`,fontWeight:700},children:f.tpNo})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(`div`,{className:`text-center`,children:[(0,N.jsx)(`div`,{style:{width:`60px`,height:`60px`,borderRadius:`20px`,background:`linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(59, 130, 246, 0.3)`},children:(0,N.jsx)(Z,{icon:_p,style:{color:`white`,fontSize:`1.5rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`Office`}),(0,N.jsx)(`div`,{style:{fontSize:`1.2rem`,color:`#1e293b`,fontWeight:700},children:f.office})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(`div`,{className:`text-center`,children:[(0,N.jsx)(`div`,{style:{width:`60px`,height:`60px`,borderRadius:`20px`,background:`linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(139, 92, 246, 0.3)`},children:(0,N.jsx)(Z,{icon:Ip,style:{color:`white`,fontSize:`1.5rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`Nagar`}),(0,N.jsx)(`div`,{style:{fontSize:`1.2rem`,color:`#1e293b`,fontWeight:700},children:f.nagar})]})})]}),(0,N.jsx)(W,{className:`mt-4`,children:(0,N.jsx)(B,{md:12,children:(0,N.jsxs)(`div`,{className:`text-center`,children:[(0,N.jsx)(`div`,{style:{width:`60px`,height:`60px`,borderRadius:`20px`,background:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(245, 158, 11, 0.3)`},children:(0,N.jsx)(Z,{icon:Ip,style:{color:`white`,fontSize:`1.5rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`Plot No`}),(0,N.jsx)(`div`,{style:{fontSize:`1.2rem`,color:`#1e293b`,fontWeight:700},children:f.plotNo})]})})})]})]}),(0,N.jsxs)(z,{className:`glass-card mb-4`,children:[(0,N.jsx)(z.Header,{style:{background:`linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)`,borderBottom:`1px solid rgba(226, 232, 240, 0.8)`,padding:`20px 24px`},children:(0,N.jsxs)(`h5`,{className:`mb-0`,style:{color:`#1e293b`,fontWeight:700},children:[(0,N.jsx)(Z,{icon:lp,className:`me-2`}),`Process Information`]})}),(0,N.jsxs)(z.Body,{style:{padding:`24px`},children:[(0,N.jsxs)(W,{className:`g-4`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`d-flex align-items-center justify-content-center p-3`,style:{background:f.fieldVisit===`Yes`?`linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)`:`linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)`,borderRadius:`16px`,border:`2px solid ${f.fieldVisit===`Yes`?`#16a34a`:`#dc2626`}`},children:[(0,N.jsx)(`div`,{style:{width:`50px`,height:`50px`,borderRadius:`16px`,background:f.fieldVisit===`Yes`?`linear-gradient(135deg, #16a34a 0%, #15803d 100%)`:`linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginRight:`16px`,boxShadow:`0 4px 12px ${f.fieldVisit===`Yes`?`rgba(22, 163, 74, 0.3)`:`rgba(220, 38, 38, 0.3)`}`},children:(0,N.jsx)(Z,{icon:f.fieldVisit===`Yes`?Tp:Cp,style:{color:`white`,fontSize:`1.3rem`}})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.9rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Field Visit`}),(0,N.jsx)(`div`,{style:{fontSize:`1.3rem`,color:f.fieldVisit===`Yes`?`#16a34a`:`#dc2626`,fontWeight:700},children:f.fieldVisit})]})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`d-flex align-items-center justify-content-center p-3`,style:{background:f.returnDocument===`Yes`?`linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)`:`linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)`,borderRadius:`16px`,border:`2px solid ${f.returnDocument===`Yes`?`#16a34a`:`#dc2626`}`},children:[(0,N.jsx)(`div`,{style:{width:`50px`,height:`50px`,borderRadius:`16px`,background:f.returnDocument===`Yes`?`linear-gradient(135deg, #16a34a 0%, #15803d 100%)`:`linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginRight:`16px`,boxShadow:`0 4px 12px ${f.returnDocument===`Yes`?`rgba(22, 163, 74, 0.3)`:`rgba(220, 38, 38, 0.3)`}`},children:(0,N.jsx)(Z,{icon:f.returnDocument===`Yes`?Tp:Cp,style:{color:`white`,fontSize:`1.3rem`}})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.9rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Return Document`}),(0,N.jsx)(`div`,{style:{fontSize:`1.3rem`,color:f.returnDocument===`Yes`?`#16a34a`:`#dc2626`,fontWeight:700},children:f.returnDocument})]})]})})]}),(0,N.jsx)(W,{className:`mt-4`,children:(0,N.jsx)(B,{md:12,children:(0,N.jsxs)(`div`,{className:`text-center p-3`,style:{background:`linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)`,borderRadius:`16px`,border:`2px solid #0ea5e9`},children:[(0,N.jsx)(`div`,{style:{width:`50px`,height:`50px`,borderRadius:`16px`,background:`linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(14, 165, 233, 0.3)`},children:(0,N.jsx)(Z,{icon:wp,style:{color:`white`,fontSize:`1.3rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.9rem`,color:`#64748b`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`Document Number`}),(0,N.jsx)(`div`,{style:{fontSize:`1.3rem`,color:`#0ea5e9`,fontWeight:700},children:f.docNo})]})})})]})]}),(0,N.jsxs)(z,{className:`glass-card mb-4`,children:[(0,N.jsx)(z.Header,{style:{background:`linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)`,borderBottom:`1px solid rgba(226, 232, 240, 0.8)`,padding:`20px 24px`},children:(0,N.jsxs)(`h5`,{className:`mb-0`,style:{color:`#1e293b`,fontWeight:700},children:[(0,N.jsx)(Z,{icon:hp,className:`me-2`}),`Financial Details`]})}),(0,N.jsxs)(z.Body,{style:{padding:`24px`},children:[(0,N.jsxs)(W,{className:`g-4`,children:[(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(`div`,{className:`text-center p-3`,style:{background:`linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)`,borderRadius:`16px`,border:`2px solid #f59e0b`},children:[(0,N.jsx)(`div`,{style:{width:`50px`,height:`50px`,borderRadius:`16px`,background:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(245, 158, 11, 0.3)`},children:(0,N.jsx)(Z,{icon:hp,style:{color:`white`,fontSize:`1.3rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.8rem`,color:`#92400e`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`Edit Fee`}),(0,N.jsxs)(`div`,{style:{fontSize:`1.2rem`,color:`#92400e`,fontWeight:700},children:[`₹`,f.editFee.toLocaleString()]})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(`div`,{className:`text-center p-3`,style:{background:`linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)`,borderRadius:`16px`,border:`2px solid #f59e0b`},children:[(0,N.jsx)(`div`,{style:{width:`50px`,height:`50px`,borderRadius:`16px`,background:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(245, 158, 11, 0.3)`},children:(0,N.jsx)(Z,{icon:hp,style:{color:`white`,fontSize:`1.3rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.8rem`,color:`#92400e`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`Stamp`}),(0,N.jsxs)(`div`,{style:{fontSize:`1.2rem`,color:`#92400e`,fontWeight:700},children:[`₹`,f.stamp.toLocaleString()]})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(`div`,{className:`text-center p-3`,style:{background:`linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)`,borderRadius:`16px`,border:`2px solid #f59e0b`},children:[(0,N.jsx)(`div`,{style:{width:`50px`,height:`50px`,borderRadius:`16px`,background:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(245, 158, 11, 0.3)`},children:(0,N.jsx)(Z,{icon:hp,style:{color:`white`,fontSize:`1.3rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.8rem`,color:`#92400e`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`Others`}),(0,N.jsxs)(`div`,{style:{fontSize:`1.2rem`,color:`#92400e`,fontWeight:700},children:[`₹`,f.others.toLocaleString()]})]})})]}),(0,N.jsxs)(W,{className:`mt-4 g-4`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`text-center p-3`,style:{background:`linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)`,borderRadius:`16px`,border:`2px solid #0ea5e9`},children:[(0,N.jsx)(`div`,{style:{width:`50px`,height:`50px`,borderRadius:`16px`,background:`linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(14, 165, 233, 0.3)`},children:(0,N.jsx)(Z,{icon:hp,style:{color:`white`,fontSize:`1.3rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.8rem`,color:`#0c4a6e`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`Writing Fee`}),(0,N.jsxs)(`div`,{style:{fontSize:`1.2rem`,color:`#0c4a6e`,fontWeight:700},children:[`₹`,f.writingFee.toLocaleString()]})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(`div`,{className:`text-center p-3`,style:{background:`linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)`,borderRadius:`16px`,border:`2px solid #0ea5e9`},children:[(0,N.jsx)(`div`,{style:{width:`50px`,height:`50px`,borderRadius:`16px`,background:`linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 12px`,boxShadow:`0 4px 12px rgba(14, 165, 233, 0.3)`},children:(0,N.jsx)(Z,{icon:hp,style:{color:`white`,fontSize:`1.3rem`}})}),(0,N.jsx)(`div`,{style:{fontSize:`0.8rem`,color:`#0c4a6e`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`4px`},children:`DD Commission`}),(0,N.jsxs)(`div`,{style:{fontSize:`1.2rem`,color:`#0c4a6e`,fontWeight:700},children:[`₹`,f.ddCommission.toLocaleString()]})]})})]})]})]}),(0,N.jsx)(z,{className:`glass-card`,children:(0,N.jsxs)(z.Body,{style:{padding:`32px`,textAlign:`center`},children:[(0,N.jsx)(`div`,{style:{width:`80px`,height:`80px`,borderRadius:`24px`,background:`linear-gradient(135deg, #10b981 0%, #059669 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 20px`,boxShadow:`0 8px 24px rgba(16, 185, 129, 0.4)`},children:(0,N.jsx)(Z,{icon:hp,style:{color:`white`,fontSize:`2rem`}})}),(0,N.jsx)(`h3`,{style:{color:`#059669`,fontWeight:700,marginBottom:`8px`},children:`Total Amount`}),(0,N.jsxs)(`div`,{style:{fontSize:`2.5rem`,fontWeight:800,color:`#059669`,textShadow:`0 2px 4px rgba(5, 150, 105, 0.2)`},children:[`₹`,f.totalFee.toLocaleString()]}),(0,N.jsx)(`div`,{style:{color:`#64748b`,fontSize:`1rem`,marginTop:`8px`},children:`(Edit Fee + Stamp + Others)`})]})})]}),(0,N.jsx)(U.Footer,{className:`border-0 px-4 pb-4`,children:(0,N.jsxs)(L,{className:`btn-gold`,onClick:()=>l(!1),children:[(0,N.jsx)(Z,{icon:Cp,className:`me-2`}),`Close`]})})]})})}),(0,N.jsx)(PS,{children:o&&(0,N.jsx)(U,{show:o,onHide:()=>s(!1),centered:!0,size:`lg`,children:(0,N.jsxs)($.div,{variants:jT,initial:`hidden`,animate:`visible`,exit:`exit`,children:[(0,N.jsx)(U.Header,{closeButton:!0,className:`modal-header`,children:(0,N.jsx)(U.Title,{className:`modal-title`,children:u?`✏️ Edit Deed Details`:`➕ Add New Deed`})}),(0,N.jsx)(U.Body,{className:`modal-body`,children:(0,N.jsxs)(V,{children:[(0,N.jsxs)(W,{className:`g-3`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Date`}),(0,N.jsx)(V.Control,{type:`date`,className:`form-control-modern`,value:C.date,onChange:e=>w({...C,date:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Vendor`}),(0,N.jsxs)(V.Select,{className:`form-control-modern`,value:C.vendor,onChange:e=>w({...C,vendor:e.target.value}),children:[(0,N.jsx)(`option`,{value:``,children:`Select Vendor`}),ET.map(e=>(0,N.jsx)(`option`,{value:e.name,children:e.name},e.id)),(0,N.jsx)(`option`,{value:`Normal Customer`,children:`Normal Customer`})]})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Customer Name`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter customer name`,value:C.customerName,onChange:e=>w({...C,customerName:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Reference`}),(0,N.jsxs)(`div`,{className:`d-flex gap-2`,children:[(0,N.jsxs)(V.Select,{className:`form-control-modern`,style:{flex:1},value:x,onChange:e=>S(e.target.value),children:[(0,N.jsx)(`option`,{value:`vendor`,children:`Vendor`}),(0,N.jsx)(`option`,{value:`manual`,children:`Manual Entry`})]}),x===`vendor`?(0,N.jsxs)(V.Select,{className:`form-control-modern`,style:{flex:2},value:C.reference,onChange:e=>w({...C,reference:e.target.value}),children:[(0,N.jsx)(`option`,{value:``,children:`Select Vendor`}),ET.map(e=>(0,N.jsx)(`option`,{value:e.name,children:e.name},e.id))]}):(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,style:{flex:2},placeholder:`Enter reference manually`,value:C.reference,onChange:e=>w({...C,reference:e.target.value})})]})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Deed Type`}),(0,N.jsxs)(V.Select,{className:`form-control-modern`,value:C.deed,onChange:e=>w({...C,deed:e.target.value}),children:[(0,N.jsx)(`option`,{value:``,children:`Select Deed Type`}),M.map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))]})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`TP No`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter TP number`,value:C.tpNo,onChange:e=>w({...C,tpNo:e.target.value})})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Office`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter office`,value:C.office,onChange:e=>w({...C,office:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Plot No`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter plot number`,value:C.plotNo,onChange:e=>w({...C,plotNo:e.target.value})})]})})]}),(0,N.jsx)(W,{className:`g-3 mt-1`,children:(0,N.jsx)(B,{md:12,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Nagar`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter nagar`,value:C.nagar,onChange:e=>w({...C,nagar:e.target.value})})]})})}),u&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`hr`,{className:`my-4`}),(0,N.jsx)(`h6`,{className:`mb-3`,style:{color:`#475569`,fontWeight:600},children:`Additional Details`}),(0,N.jsxs)(W,{className:`g-3`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Field Visit`}),(0,N.jsxs)(V.Select,{className:`form-control-modern`,value:C.fieldVisit,onChange:e=>w({...C,fieldVisit:e.target.value}),children:[(0,N.jsx)(`option`,{value:`No`,children:`No`}),(0,N.jsx)(`option`,{value:`Yes`,children:`Yes`})]})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Doc No`}),(0,N.jsx)(V.Control,{type:`text`,className:`form-control-modern`,placeholder:`Enter document number`,value:C.docNo,onChange:e=>w({...C,docNo:e.target.value})})]})})]}),(0,N.jsx)(W,{className:`g-3 mt-1`,children:(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Return Document`}),(0,N.jsxs)(V.Select,{className:`form-control-modern`,value:C.returnDocument,onChange:e=>w({...C,returnDocument:e.target.value}),children:[(0,N.jsx)(`option`,{value:`No`,children:`No`}),(0,N.jsx)(`option`,{value:`Yes`,children:`Yes`})]})]})})}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Edit Fee (₹)`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`0.00`,value:C.editFee,onChange:e=>w({...C,editFee:e.target.value})})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Stamp (₹)`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`0.00`,value:C.stamp,onChange:e=>w({...C,stamp:e.target.value})})]})}),(0,N.jsx)(B,{md:4,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Others (₹)`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`0.00`,value:C.others,onChange:e=>w({...C,others:e.target.value})})]})})]}),(0,N.jsxs)(W,{className:`g-3 mt-1`,children:[(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`Writing Fee (₹)`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`0.00`,value:C.writingFee,onChange:e=>w({...C,writingFee:e.target.value})})]})}),(0,N.jsx)(B,{md:6,children:(0,N.jsxs)(V.Group,{children:[(0,N.jsx)(V.Label,{className:`form-label-modern`,children:`DD Commission (₹)`}),(0,N.jsx)(V.Control,{type:`number`,className:`form-control-modern`,placeholder:`0.00`,value:C.ddCommission,onChange:e=>w({...C,ddCommission:e.target.value})})]})})]}),(0,N.jsx)(W,{className:`mt-4`,children:(0,N.jsx)(B,{children:(0,N.jsxs)(ki,{className:`total-alert`,children:[(0,N.jsx)(Z,{icon:hp,className:`me-2`}),`Total Fee: ₹`,((parseFloat(C.editFee)||0)+(parseFloat(C.stamp)||0)+(parseFloat(C.others)||0)).toLocaleString()]})})})]})]})}),(0,N.jsxs)(U.Footer,{className:`border-0 px-4 pb-4`,children:[(0,N.jsx)(L,{variant:`light`,onClick:()=>s(!1),style:{borderRadius:`16px`,padding:`12px 24px`,fontWeight:600,boxShadow:`4px 4px 8px #d1d5db, -4px -4px 8px #ffffff`},children:`Cancel`}),(0,N.jsxs)(L,{className:`btn-gold`,onClick:ie,children:[(0,N.jsx)(Z,{icon:u?cp:Mp,className:`me-2`}),u?`Update Deed`:`Add Deed`]})]})]})})})]})]})},NT=[{id:1,date:`2024-10-01`,recordType:`EC`,recordNo:`EC001`,vendor:`Vendor A`,customerName:`John Doe`,office:`Office 1`,nagar:`Nagar 1`,tpNo:`TP001`,plotNo:`A1`,reference:`REF001`,deed:`Sale Deed`,docNo:`DOC001`,fieldVisit:`Yes`,returnDocument:`No`,amount:5e4,commission:5e3,others:1e3,total:56e3,status:`Paid`},{id:2,date:`2024-10-05`,recordType:`Nagal`,recordNo:`NAG001`,vendor:`Vendor B`,customerName:`Jane Smith`,office:`Office 2`,nagar:`Nagar 2`,tpNo:`TP002`,plotNo:`B2`,reference:`REF002`,deed:`Nagal/Adangal`,docNo:`DOC002`,fieldVisit:`No`,returnDocument:`Yes`,amount:75e3,commission:7500,others:2e3,total:84500,status:`Pending`},{id:3,date:`2024-10-10`,recordType:`Agreement`,recordNo:`AGR001`,vendor:`Vendor C`,customerName:`Bob Johnson`,office:`Office 1`,nagar:`Nagar 3`,tpNo:`TP003`,plotNo:`C3`,reference:`REF003`,deed:`Agreement`,docNo:`DOC003`,fieldVisit:`Yes`,returnDocument:`Yes`,amount:65e3,commission:6500,others:1500,total:73e3,status:`Paid`},{id:4,date:`2024-10-15`,recordType:`Deed`,recordNo:`DEED001`,vendor:`Vendor D`,customerName:`Alice Williams`,office:`Office 3`,nagar:`Nagar 4`,tpNo:`TP004`,plotNo:`D4`,reference:`REF004`,deed:`Release`,docNo:`DOC004`,fieldVisit:`No`,returnDocument:`No`,amount:6e4,commission:6e3,others:1800,total:67800,status:`Pending`}],PT={hidden:{opacity:0,scale:.95,y:20},visible:{opacity:1,scale:1,y:0,transition:{duration:.18}},exit:{opacity:0,scale:.96,y:20,transition:{duration:.12}}},FT=()=>{let[e,t]=(0,b.useState)(`payment`),[n]=(0,b.useState)(NT),[r,i]=(0,b.useState)(NT),[a,o]=(0,b.useState)(``),[s,c]=(0,b.useState)({recordType:``,status:``,vendor:``,date:``}),[l,u]=(0,b.useState)({key:`date`,direction:`desc`}),[d,f]=(0,b.useState)(!1),[p,m]=(0,b.useState)(null);(0,b.useEffect)(()=>{let e=[...n],t=a.trim().toLowerCase();t&&(e=e.filter(e=>e.recordNo.toLowerCase().includes(t)||e.customerName.toLowerCase().includes(t)||e.vendor.toLowerCase().includes(t)||e.reference.toLowerCase().includes(t)||e.nagar.toLowerCase().includes(t))),s.recordType&&(e=e.filter(e=>e.recordType===s.recordType)),s.status&&(e=e.filter(e=>e.status===s.status)),s.vendor&&(e=e.filter(e=>e.vendor===s.vendor)),s.date&&(e=e.filter(e=>e.date===s.date)),l.key&&e.sort((e,t)=>{let n=e[l.key],r=t[l.key];return l.key===`date`?l.direction===`asc`?new Date(n)-new Date(r):new Date(r)-new Date(n):typeof n==`number`&&typeof r==`number`?l.direction===`asc`?n-r:r-n:l.direction===`asc`?String(n).localeCompare(String(r)):String(r).localeCompare(String(n))}),i(e)},[n,a,s,l]);let h=e=>{u(t=>({key:e,direction:t.key===e&&t.direction===`asc`?`desc`:`asc`}))},g=e=>{m(e),f(!0)},_=r.length,v=r.filter(e=>e.status===`Pending`).length,y=r.filter(e=>e.status===`Paid`).reduce((e,t)=>e+t.total,0),x=r.filter(e=>e.status===`Pending`).reduce((e,t)=>e+t.total,0);return(0,N.jsxs)(`div`,{className:`app-container`,children:[(0,N.jsx)(Nw,{activeTab:e,setActiveTab:t}),(0,N.jsxs)(`div`,{className:`main-content payment-shell`,children:[(0,N.jsx)(`style`,{children:`
          .payment-shell {
            margin-left: 280px;
            padding: 30px;
            min-height: 100vh;
            background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
            color: #0f172a;
            position: relative;
            overflow: hidden;
          }

          /* Decorative Background Elements */
          .payment-shell::before {
            content: "₹";
            position: fixed;
            font-size: 280px;
            opacity: 0.04;
            top: -60px;
            right: 40px;
            color: #10b981;
            z-index: 0;
            transform: rotate(15deg);
            pointer-events: none;
            font-weight: 800;
          }

          .payment-shell::after {
            content: "";
            position: fixed;
            top: 50%;
            left: 0;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%);
            z-index: 0;
            pointer-events: none;
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }

          .payment-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 24px;
            margin-bottom: 32px;
            position: relative;
            z-index: 1;
          }

          .payment-heading {
            font-size: clamp(2rem, 2.6vw, 3rem);
            font-weight: 800;
            line-height: 1.05;
            letter-spacing: -0.03em;
            margin-bottom: 12px;
          }

          .payment-subtitle {
            font-size: 1rem;
            color: #475569;
            max-width: 680px;
            line-height: 1.7;
          }

          .stat-card {
            background: rgba(255,255,255,0.92);
            border: none;
            border-radius: 24px;
            box-shadow: 0 18px 40px rgba(15,23,42,0.06);
            padding: 24px;
            min-height: 140px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .stat-icon {
            width: 48px;
            height: 48px;
            min-width: 48px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            color: white;
            box-shadow: 0 12px 24px rgba(15,23,42,0.12);
            flex-shrink: 0;
          }

          .stat-label {
            color: #64748b;
            font-size: 0.95rem;
            font-weight: 600;
          }

          .stat-value {
            font-size: 2rem;
            font-weight: 800;
            color: #0f172a;
            margin: 0;
          }

          .filter-card {
            background: rgba(255,255,255,0.92);
            border: none;
            border-radius: 24px;
            box-shadow: 0 18px 40px rgba(15,23,42,0.06);
            padding: 24px;
          }

          .filter-label {
            font-weight: 700;
            color: #0f172a;
            font-size: 0.95rem;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #475569;
          }

          .filter-input, .filter-select {
            border: 1px solid rgba(148,163,184,0.3);
            border-radius: 12px;
            padding: 10px 14px;
            font-size: 0.95rem;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            background: rgba(255,255,255,0.5);
          }

          .filter-input:focus, .filter-select:focus {
            border-color: #0ea5e9;
            box-shadow: 0 0 0 3px rgba(14,165,233,0.1);
            background: white;
            transform: translateY(-2px);
          }

          .filter-input::placeholder {
            color: #94a3b8;
          }

          .table-card {
            background: rgba(255,255,255,0.92);
            border: none;
            border-radius: 24px;
            box-shadow: 0 18px 40px rgba(15,23,42,0.06);
            overflow: hidden;
          }

          .table-card table {
            margin-bottom: 0;
          }

          .table-card thead {
            background: linear-gradient(135deg, rgba(15,23,42,0.04) 0%, rgba(14,165,233,0.02) 100%);
            border-bottom: 2px solid rgba(148,163,184,0.15);
          }

          .table-card th {
            padding: 18px 16px;
            font-weight: 800;
            color: #0f172a;
            font-size: 0.95rem;
            letter-spacing: -0.01em;
            border: none;
            text-transform: uppercase;
            font-size: 0.85rem;
            color: #475569;
            position: relative;
          }

          .table-card td {
            padding: 16px;
            vertical-align: middle;
            border-color: rgba(148,163,184,0.08);
            font-weight: 500;
          }

          .table-card tbody tr {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border-bottom: 1px solid rgba(148,163,184,0.08);
          }

          .table-card tbody tr:hover {
            background: linear-gradient(90deg, rgba(14,165,233,0.04) 0%, rgba(16,185,129,0.04) 100%);
            transform: scale(1.01);
            box-shadow: inset 0 4px 12px rgba(14,165,233,0.06);
          }

          .table-card tbody tr:last-child {
            border-bottom: none;
          }

          .sort-icon {
            margin-left: 6px;
            opacity: 0.6;
            font-size: 0.85rem;
            transition: all 0.2s ease;
          }

          .table-card th:hover {
            color: #0ea5e9;
          }

          .table-card th:hover .sort-icon {
            opacity: 1;
            transform: scale(1.2);
          }

          .view-modal .modal-content {
            background: rgba(255,255,255,0.96);
            border: 1px solid rgba(148,163,184,0.2);
            border-radius: 20px;
            box-shadow: 0 25px 50px rgba(15,23,42,0.15);
          }

          .view-modal .modal-header {
            border-bottom: 1px solid rgba(148,163,184,0.15);
            padding: 24px;
          }

          .view-modal .modal-title {
            font-weight: 700;
            color: #0f172a;
            font-size: 1.25rem;
            letter-spacing: -0.02em;
          }

          .view-modal .modal-body {
            padding: 24px;
          }

          .detail-section {
            margin-bottom: 24px;
            padding: 16px;
            background: rgba(15,23,42,0.04);
            border-radius: 16px;
            border-left: 4px solid #0ea5e9;
          }

          .detail-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .detail-item {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .detail-label {
            font-weight: 700;
            color: #0f172a;
            font-size: 0.95rem;
          }

          .detail-value {
            color: #475569;
            font-size: 0.95rem;
          }

          .amount-badge {
            padding: 8px 12px;
            border-radius: 12px;
            font-weight: 700;
            display: inline-block;
          }

          .no-records {
            text-align: center;
            padding: 48px 24px;
            color: #64748b;
          }

          .no-records-icon {
            font-size: 3rem;
            margin-bottom: 16px;
            opacity: 0.4;
          }

          @media (max-width: 1199px) {
            .payment-header {
              flex-direction: column;
            }

            .detail-row {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 767px) {
            .payment-shell {
              padding: 16px;
              margin-left: 0;
            }

            .stat-card {
              min-height: auto;
            }
          }

          .payment-content {
            position: relative;
            z-index: 1;
          }
        `}),(0,N.jsx)(`div`,{className:`payment-content`,children:(0,N.jsxs)(Ki,{fluid:!0,children:[(0,N.jsxs)(W,{className:`g-4 mb-4`,children:[(0,N.jsx)(B,{xl:3,lg:6,md:6,children:(0,N.jsx)($.div,{whileHover:{y:-6},transition:{duration:.25},children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:16},children:[(0,N.jsx)(`div`,{className:`stat-icon`,style:{background:`#0ea5e9`},children:(0,N.jsx)(Z,{icon:wp})}),(0,N.jsx)(`p`,{className:`stat-label`,style:{margin:0},children:`Total Records`})]}),(0,N.jsx)(`h2`,{className:`stat-value`,children:_})]})})}),(0,N.jsx)(B,{xl:3,lg:6,md:6,children:(0,N.jsx)($.div,{whileHover:{y:-6},transition:{duration:.25},children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:16},children:[(0,N.jsx)(`div`,{className:`stat-icon`,style:{background:`#f59e0b`},children:(0,N.jsx)(Z,{icon:lp})}),(0,N.jsx)(`p`,{className:`stat-label`,style:{margin:0},children:`Pending Payments`})]}),(0,N.jsx)(`h2`,{className:`stat-value`,children:v})]})})}),(0,N.jsx)(B,{xl:3,lg:6,md:6,children:(0,N.jsx)($.div,{whileHover:{y:-6},transition:{duration:.25},children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:16},children:[(0,N.jsx)(`div`,{className:`stat-icon`,style:{background:`#10b981`},children:(0,N.jsx)(Z,{icon:Tp})}),(0,N.jsx)(`p`,{className:`stat-label`,style:{margin:0},children:`Paid Amount`})]}),(0,N.jsxs)(`h2`,{className:`stat-value`,children:[`₹`,(y/1e5).toFixed(1),`L`]})]})})}),(0,N.jsx)(B,{xl:3,lg:6,md:6,children:(0,N.jsx)($.div,{whileHover:{y:-6},transition:{duration:.25},children:(0,N.jsxs)(z,{className:`stat-card`,children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:16},children:[(0,N.jsx)(`div`,{className:`stat-icon`,style:{background:`#ef4444`},children:(0,N.jsx)(Z,{icon:Np})}),(0,N.jsx)(`p`,{className:`stat-label`,style:{margin:0},children:`Pending Amount`})]}),(0,N.jsxs)(`h2`,{className:`stat-value`,children:[`₹`,(x/1e5).toFixed(1),`L`]})]})})})]}),(0,N.jsx)(z,{className:`filter-card mb-4`,children:(0,N.jsxs)(W,{className:`g-3`,children:[(0,N.jsx)(B,{lg:3,children:(0,N.jsxs)($.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.05},children:[(0,N.jsxs)(`label`,{className:`filter-label`,children:[(0,N.jsx)(Z,{icon:ap,className:`me-2`,style:{color:`#0ea5e9`}}),`Search Records`]}),(0,N.jsx)($.div,{whileHover:{scale:1.02},children:(0,N.jsx)(V.Control,{className:`filter-input`,placeholder:`Customer/Vendor/Ref...`,value:a,onChange:e=>o(e.target.value)})})]})}),(0,N.jsx)(B,{lg:2,children:(0,N.jsxs)($.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,N.jsx)(`label`,{className:`filter-label`,children:`Record Type`}),(0,N.jsx)($.div,{whileHover:{scale:1.02},children:(0,N.jsxs)(V.Select,{className:`filter-select`,value:s.recordType,onChange:e=>c(t=>({...t,recordType:e.target.value})),children:[(0,N.jsx)(`option`,{value:``,children:`All Types`}),(0,N.jsx)(`option`,{value:`EC`,children:`EC`}),(0,N.jsx)(`option`,{value:`Nagal`,children:`Nagal`}),(0,N.jsx)(`option`,{value:`Agreement`,children:`Agreement`}),(0,N.jsx)(`option`,{value:`Deed`,children:`Deed`})]})})]})}),(0,N.jsx)(B,{lg:2,children:(0,N.jsxs)($.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.15},children:[(0,N.jsx)(`label`,{className:`filter-label`,children:`Payment Status`}),(0,N.jsx)($.div,{whileHover:{scale:1.02},children:(0,N.jsxs)(V.Select,{className:`filter-select`,value:s.status,onChange:e=>c(t=>({...t,status:e.target.value})),children:[(0,N.jsx)(`option`,{value:``,children:`All Status`}),(0,N.jsx)(`option`,{value:`Paid`,children:`Paid`}),(0,N.jsx)(`option`,{value:`Pending`,children:`Pending`})]})})]})}),(0,N.jsx)(B,{lg:2,children:(0,N.jsxs)($.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,N.jsx)(`label`,{className:`filter-label`,children:`Vendor`}),(0,N.jsx)($.div,{whileHover:{scale:1.02},children:(0,N.jsxs)(V.Select,{className:`filter-select`,value:s.vendor,onChange:e=>c(t=>({...t,vendor:e.target.value})),children:[(0,N.jsx)(`option`,{value:``,children:`All Vendors`}),[...new Set(n.map(e=>e.vendor))].map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))]})})]})}),(0,N.jsx)(B,{lg:2,children:(0,N.jsxs)($.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.25},children:[(0,N.jsx)(`label`,{className:`filter-label`,children:`Date`}),(0,N.jsx)($.div,{whileHover:{scale:1.02},children:(0,N.jsx)(V.Control,{type:`date`,className:`filter-input`,value:s.date,onChange:e=>c(t=>({...t,date:e.target.value}))})})]})}),(0,N.jsx)(B,{lg:1,className:`d-flex align-items-end`,children:(0,N.jsx)($.div,{whileHover:{scale:1.05},whileTap:{scale:.95},style:{width:`100%`},children:(0,N.jsx)(L,{variant:`outline-secondary`,className:`w-100`,style:{fontWeight:700,borderColor:`#cbd5e1`,color:`#475569`,transition:`all 0.3s ease`,borderRadius:`12px`},onMouseEnter:e=>{e.target.style.borderColor=`#64748b`,e.target.style.color=`#0f172a`,e.target.style.background=`rgba(15,23,42,0.05)`},onMouseLeave:e=>{e.target.style.borderColor=`#cbd5e1`,e.target.style.color=`#475569`,e.target.style.background=`transparent`},onClick:()=>{c({recordType:``,status:``,vendor:``,date:``}),o(``)},children:`Reset`})})})]})}),(0,N.jsx)(z,{className:`table-card`,children:(0,N.jsx)(z.Body,{style:{padding:0},children:r.length===0?(0,N.jsxs)($.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:`no-records`,children:[(0,N.jsx)(`div`,{className:`no-records-icon`,children:(0,N.jsx)(Z,{icon:Dp})}),(0,N.jsx)(`h5`,{children:`No records found`}),(0,N.jsx)(`p`,{children:`Try adjusting your filters or search criteria`})]}):(0,N.jsxs)(cs,{responsive:!0,hover:!0,className:`mb-0`,children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsxs)(`th`,{style:{cursor:`pointer`,userSelect:`none`},onClick:()=>h(`date`),children:[`Date `,l.key===`date`&&(0,N.jsx)($.span,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},className:`sort-icon`,children:(0,N.jsx)(Z,{icon:l.direction===`asc`?bp:Fp})})]}),(0,N.jsxs)(`th`,{style:{cursor:`pointer`,userSelect:`none`},onClick:()=>h(`recordType`),children:[`Type `,l.key===`recordType`&&(0,N.jsx)($.span,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},className:`sort-icon`,children:(0,N.jsx)(Z,{icon:l.direction===`asc`?bp:Fp})})]}),(0,N.jsxs)(`th`,{style:{cursor:`pointer`,userSelect:`none`},onClick:()=>h(`recordNo`),children:[`Record `,l.key===`recordNo`&&(0,N.jsx)($.span,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},className:`sort-icon`,children:(0,N.jsx)(Z,{icon:l.direction===`asc`?bp:Fp})})]}),(0,N.jsx)(`th`,{children:`Customer`}),(0,N.jsx)(`th`,{children:`Vendor`}),(0,N.jsxs)(`th`,{style:{cursor:`pointer`,userSelect:`none`},onClick:()=>h(`total`),children:[`Amount `,l.key===`total`&&(0,N.jsx)($.span,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},className:`sort-icon`,children:(0,N.jsx)(Z,{icon:l.direction===`asc`?bp:Fp})})]}),(0,N.jsxs)(`th`,{style:{cursor:`pointer`,userSelect:`none`},onClick:()=>h(`status`),children:[`Status `,l.key===`status`&&(0,N.jsx)($.span,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},className:`sort-icon`,children:(0,N.jsx)(Z,{icon:l.direction===`asc`?bp:Fp})})]}),(0,N.jsx)(`th`,{style:{textAlign:`center`},children:`Action`})]})}),(0,N.jsx)(`tbody`,{children:r.map((e,t)=>(0,N.jsxs)($.tr,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:t*.04,duration:.3},whileHover:{scale:1.01},children:[(0,N.jsx)(`td`,{children:(0,N.jsx)($.span,{whileHover:{color:`#0ea5e9`},children:new Date(e.date).toLocaleDateString(`en-GB`)})}),(0,N.jsx)(`td`,{children:(0,N.jsx)($.div,{whileHover:{scale:1.08},children:(0,N.jsx)(I,{bg:`light`,text:`dark`,style:{fontWeight:700,borderRadius:`8px`},children:e.recordType})})}),(0,N.jsx)(`td`,{style:{fontWeight:700,color:`#0f172a`},children:e.recordNo}),(0,N.jsx)(`td`,{children:e.customerName}),(0,N.jsx)(`td`,{style:{color:`#475569`},children:e.vendor}),(0,N.jsxs)(`td`,{style:{fontWeight:800,color:`#10b981`,fontSize:`0.98rem`},children:[`₹`,e.total.toLocaleString()]}),(0,N.jsx)(`td`,{children:(0,N.jsx)($.div,{whileHover:{scale:1.1},children:e.status===`Paid`?(0,N.jsx)(I,{bg:`success`,style:{fontWeight:700,borderRadius:`8px`},children:`✓ Paid`}):(0,N.jsx)(I,{bg:`warning`,text:`dark`,style:{fontWeight:700,borderRadius:`8px`},children:`⧗ Pending`})})}),(0,N.jsx)(`td`,{style:{textAlign:`center`},children:(0,N.jsx)($.div,{whileHover:{scale:1.15},whileTap:{scale:.9},children:(0,N.jsx)(L,{size:`sm`,variant:`outline-primary`,onClick:()=>g(e),style:{borderRadius:`10px`,padding:`6px 12px`,fontWeight:700,border:`2px solid #0ea5e9`,color:`#0ea5e9`,transition:`all 0.2s ease`},onMouseEnter:e=>{e.target.style.background=`#0ea5e9`,e.target.style.color=`white`},onMouseLeave:e=>{e.target.style.background=`transparent`,e.target.style.color=`#0ea5e9`},children:(0,N.jsx)(Z,{icon:op})})})})]},e.id))})]})})})]})}),(0,N.jsx)(PS,{children:d&&p&&(0,N.jsx)(U,{show:!0,onHide:()=>f(!1),centered:!0,className:`view-modal`,size:`lg`,children:(0,N.jsxs)($.div,{variants:PT,initial:`hidden`,animate:`visible`,exit:`exit`,children:[(0,N.jsx)(U.Header,{closeButton:!0,children:(0,N.jsxs)(U.Title,{children:[(0,N.jsx)(Z,{icon:wp,className:`me-3`,style:{color:`#0ea5e9`}}),`Payment Details`]})}),(0,N.jsxs)(U.Body,{children:[(0,N.jsx)(`div`,{className:`detail-section`,style:{borderLeftColor:`#0ea5e9`},children:(0,N.jsxs)(`div`,{className:`detail-row`,children:[(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Date`}),(0,N.jsx)(`span`,{className:`detail-value`,children:new Date(p.date).toLocaleDateString(`en-GB`)})]}),(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Record Type`}),(0,N.jsx)(`span`,{className:`detail-value`,style:{fontWeight:600},children:p.recordType})]}),(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Record No`}),(0,N.jsx)(`span`,{className:`detail-value`,style:{fontWeight:600},children:p.recordNo})]}),(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Status`}),(0,N.jsx)(`div`,{children:p.status===`Paid`?(0,N.jsx)(I,{bg:`success`,children:`Paid`}):(0,N.jsx)(I,{bg:`warning`,text:`dark`,children:`Pending`})})]})]})}),(0,N.jsxs)(`div`,{className:`detail-section`,style:{borderLeftColor:`#10b981`},children:[(0,N.jsx)(`h6`,{style:{fontWeight:700,marginBottom:16,color:`#0f172a`},children:`Customer & Vendor Details`}),(0,N.jsxs)(`div`,{className:`detail-row`,children:[(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Customer Name`}),(0,N.jsx)(`span`,{className:`detail-value`,children:p.customerName})]}),(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Vendor`}),(0,N.jsx)(`span`,{className:`detail-value`,children:p.vendor})]}),(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Office`}),(0,N.jsx)(`span`,{className:`detail-value`,children:p.office})]}),(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Nagar`}),(0,N.jsx)(`span`,{className:`detail-value`,children:p.nagar})]})]})]}),(0,N.jsxs)(`div`,{className:`detail-section`,style:{borderLeftColor:`#f59e0b`},children:[(0,N.jsx)(`h6`,{style:{fontWeight:700,marginBottom:16,color:`#0f172a`},children:`Property Details`}),(0,N.jsxs)(`div`,{className:`detail-row`,children:[(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`TP No`}),(0,N.jsx)(`span`,{className:`detail-value`,children:p.tpNo})]}),(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Plot No`}),(0,N.jsx)(`span`,{className:`detail-value`,children:p.plotNo})]}),(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Reference`}),(0,N.jsx)(`span`,{className:`detail-value`,children:p.reference})]}),(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Deed Type`}),(0,N.jsx)(`span`,{className:`detail-value`,children:p.deed})]})]})]}),(0,N.jsxs)(`div`,{className:`detail-section`,style:{borderLeftColor:`#8b5cf6`},children:[(0,N.jsx)(`h6`,{style:{fontWeight:700,marginBottom:16,color:`#0f172a`},children:`Document & Field Information`}),(0,N.jsxs)(`div`,{className:`detail-row`,children:[(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Document No`}),(0,N.jsx)(`span`,{className:`detail-value`,children:p.docNo})]}),(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Field Visit`}),(0,N.jsx)(I,{bg:p.fieldVisit===`Yes`?`success`:`secondary`,children:p.fieldVisit})]}),(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Return Document`}),(0,N.jsx)(I,{bg:p.returnDocument===`Yes`?`success`:`secondary`,children:p.returnDocument})]})]})]}),(0,N.jsxs)(`div`,{className:`detail-section`,style:{borderLeftColor:`#ef4444`},children:[(0,N.jsx)(`h6`,{style:{fontWeight:700,marginBottom:16,color:`#0f172a`},children:`Payment Breakdown`}),(0,N.jsxs)(`div`,{className:`detail-row`,children:[(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Base Amount`}),(0,N.jsxs)(`span`,{className:`detail-value`,style:{fontWeight:700,fontSize:`1.1rem`},children:[`₹`,p.amount.toLocaleString()]})]}),(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Commission`}),(0,N.jsxs)(`span`,{className:`detail-value`,style:{fontWeight:700,fontSize:`1.1rem`,color:`#10b981`},children:[`+ ₹`,p.commission.toLocaleString()]})]}),(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Others`}),(0,N.jsxs)(`span`,{className:`detail-value`,style:{fontWeight:700,fontSize:`1.1rem`,color:`#0ea5e9`},children:[`+ ₹`,p.others.toLocaleString()]})]}),(0,N.jsxs)(`div`,{className:`detail-item`,children:[(0,N.jsx)(`span`,{className:`detail-label`,children:`Total Amount`}),(0,N.jsxs)(`span`,{className:`amount-badge`,style:{background:`#fef3c7`,color:`#d97706`,fontSize:`1.15rem`},children:[`₹`,p.total.toLocaleString()]})]})]})]})]}),(0,N.jsx)(U.Footer,{style:{borderTop:`1px solid rgba(148,163,184,0.15)`,padding:`16px 24px`},children:(0,N.jsxs)(L,{variant:`secondary`,onClick:()=>f(!1),children:[(0,N.jsx)(Z,{icon:Cp,className:`me-2`}),` Close`]})})]})})})]})]})};function IT(){return(0,N.jsx)(Cn,{children:(0,N.jsxs)(It,{children:[(0,N.jsx)(Pt,{path:`/`,element:(0,N.jsx)(Mw,{})}),(0,N.jsx)(Pt,{path:`/dashboard`,element:(0,N.jsx)(Jw,{})}),(0,N.jsx)(Pt,{path:`/vendor`,element:(0,N.jsx)(nT,{})}),(0,N.jsx)(Pt,{path:`/ec`,element:(0,N.jsx)(lT,{})}),(0,N.jsx)(Pt,{path:`/nagal`,element:(0,N.jsx)(gT,{})}),(0,N.jsx)(Pt,{path:`/aggrement`,element:(0,N.jsx)(wT,{})}),(0,N.jsx)(Pt,{path:`/deed`,element:(0,N.jsx)(MT,{})}),(0,N.jsx)(Pt,{path:`/payment`,element:(0,N.jsx)(FT,{})})]})})}(0,x.createRoot)(document.getElementById(`root`)).render((0,N.jsx)(b.StrictMode,{children:(0,N.jsx)(IT,{})}));