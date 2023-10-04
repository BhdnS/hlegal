(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function v(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n,o,i,u,l=[],a=!0,c=!1;try{if(i=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;a=!1}else for(;!(a=(n=i.call(t)).done)&&(l.push(n.value),l.length!==r);a=!0);}catch(g){c=!0,o=g}finally{try{if(!a&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(c)throw o}}return l}}function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function I(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?f(Object(t),!0).forEach(function(n){S(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function y(e){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},y(e)}function h(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function b(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m(n.key),n)}}function O(e,r,t){return r&&b(e.prototype,r),t&&b(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function S(e,r,t){return r=m(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function T(e,r){return _(e)||v(e,r)||d(e,r)||A()}function B(e){return w(e)||j(e)||d(e)||P()}function w(e){if(Array.isArray(e))return s(e)}function _(e){if(Array.isArray(e))return e}function j(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function d(e,r){if(e){if(typeof e=="string")return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,r)}}function s(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function P(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(e,r){if(typeof e!="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function m(e){var r=L(e,"string");return typeof r=="symbol"?r:String(r)}var E=function(){function e(){h(this,e),this.mask=document.querySelector("#mask"),this.burgerNav=document.querySelector("#burgerNav"),this.burger=document.querySelector("#burger"),this.body=document.querySelector("body"),this.burgerClose=document.querySelector("#burgerClose")}return O(e,[{key:"openBurger",value:function(){var t=this;this.burger.addEventListener("click",function(){t.mask.classList.remove("none"),t.burgerNav.classList.add("visible"),t.body.classList.add("hidden"),t.burger.classList.add("none")})}},{key:"closeBurger",value:function(){var t=this;this.burgerClose.addEventListener("click",function(){t.mask.classList.add("none"),t.burgerNav.classList.remove("visible"),t.body.classList.remove("hidden"),t.burger.classList.remove("none")})}}]),e}(),p=new E;p.openBurger();p.closeBurger();export{O as _,h as a,y as b,B as c,S as d,I as e,T as f};