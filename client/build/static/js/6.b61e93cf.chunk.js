(this.webpackJsonpblackboard=this.webpackJsonpblackboard||[]).push([[6],{206:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",(function(){return o}));var i=n(22),o=function(t){var e,n,o,f,v=10*-l,p=0,L=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),m=new WeakMap,b=function(t){v=Object(i.j)(t),w(t)},h=function(){clearTimeout(f),f=void 0,n&&(T(!1),n=void 0)},E=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,j(a(t),t))},w=function(t){j(void 0,t)},j=function(t,e){if(!t||t!==n){clearTimeout(f),f=void 0;var o=Object(i.k)(e),a=o.x,c=o.y;if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(s)||k(n,a,c),T(!0)}if(t){var u=m.get(t);u&&(clearTimeout(u),m.delete(t));var l=r(t)?0:d;t.classList.remove(s),f=setTimeout((function(){k(t,a,c),f=void 0}),l)}n=t}},k=function(t,e,n){p=Date.now(),t.classList.add(s);var i=L&&c(t);i&&i.addRipple&&(g(),o=i.addRipple(e,n))},g=function(){void 0!==o&&(o.then((function(t){return t()})),o=void 0)},T=function(t){g();var e=n;if(e){var i=u-Date.now()+p;if(t&&i>0&&!r(e)){var o=setTimeout((function(){e.classList.remove(s),m.delete(e)}),u);m.set(e,o)}else e.classList.remove(s)}},O=document;O.addEventListener("ionScrollStart",(function(t){e=t.target,h()})),O.addEventListener("ionScrollEnd",(function(){e=void 0})),O.addEventListener("ionGestureCaptured",h),O.addEventListener("touchstart",(function(t){v=Object(i.j)(t),E(t)}),!0),O.addEventListener("touchcancel",b,!0),O.addEventListener("touchend",b,!0),O.addEventListener("mousedown",(function(t){var e=Object(i.j)(t)-l;v<e&&E(t)}),!0),O.addEventListener("mouseup",(function(t){var e=Object(i.j)(t)-l;v<e&&w(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",d=200,u=200,l=2500}}]);
//# sourceMappingURL=6.b61e93cf.chunk.js.map