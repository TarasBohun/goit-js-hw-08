function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var r,o,i,u,a,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,a=setTimeout(O,t),l?y(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function O(){var e=m();if(h(e))return S(e);a=setTimeout(O,function(e){var n=t-(e-f);return s?v(n,i-(e-c)):n}(e))}function S(e){return a=void 0,p&&r?y(e):(r=o=void 0,u)}function T(){var e=m(),n=h(e);if(r=arguments,o=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(O,t),y(f)}return void 0===a&&(a=setTimeout(O,t)),u}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=o=a=void 0},T.flush=function(){return void 0===a?u:S(m())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector("form"),j=document.querySelector("input"),h=document.querySelector("textarea");let O={};!function(){let e=localStorage.getItem("feedback-form-state");e?(e=JSON.parse(e),Object.entries(e).forEach((([e,t])=>{O[e]=t,y.elements[e].value=t}))):(j.value="",h.value="")}(),y.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),y.addEventListener("submit",(function(e){e.preventDefault();const t={email:j.value,message:h.value};(j.value||""!=h.value)&&console.log("user feedback",t);O={},e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.7f94ddd8.js.map
