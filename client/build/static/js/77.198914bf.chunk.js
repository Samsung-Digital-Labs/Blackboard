(this.webpackJsonpblackboard=this.webpackJsonpblackboard||[]).push([[77],{190:function(t,o,e){"use strict";e.r(o),e.d(o,"ion_toast",(function(){return h}));var r=e(2),i=e(20),n=e(14),a=(e(22),e(3)),s=e(46),d=(e(31),e(27)),l=e(200),c=function(t,o){var e=Object(a.a)(),r=Object(a.a)(),i=t.host||t,n=t.querySelector(".toast-wrapper");switch(r.addElement(n),o){case"top":r.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":var s=Math.floor(i.clientHeight/2-n.clientHeight/2);n.style.top=s+"px",r.fromTo("opacity",.01,1);break;default:r.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return e.addElement(i).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(r)},p=function(t,o){var e=Object(a.a)(),r=Object(a.a)(),i=t.host||t,n=t.querySelector(".toast-wrapper");switch(r.addElement(n),o){case"top":r.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return e.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(r)},u=function(t,o){var e=Object(a.a)(),r=Object(a.a)(),i=t.host||t,n=t.querySelector(".toast-wrapper");switch(r.addElement(n),o){case"top":n.style.top="calc(8px + var(--ion-safe-area-top, 0px))",r.fromTo("opacity",.01,1);break;case"middle":var s=Math.floor(i.clientHeight/2-n.clientHeight/2);n.style.top=s+"px",r.fromTo("opacity",.01,1);break;default:n.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",r.fromTo("opacity",.01,1)}return e.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(r)},b=function(t){var o=Object(a.a)(),e=Object(a.a)(),r=t.host||t,i=t.querySelector(".toast-wrapper");return e.addElement(i).fromTo("opacity",.99,0),o.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(e)},h=function(){function t(t){var o=this;Object(i.l)(this,t),this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=function(t){var e=t.detail.role;if(Object(d.j)(e)){var r=o.getButtons().find((function(t){return"cancel"===t.role}));o.callButtonHandler(r)}},Object(d.e)(this.el),this.didPresent=Object(i.e)(this,"ionToastDidPresent",7),this.willPresent=Object(i.e)(this,"ionToastWillPresent",7),this.willDismiss=Object(i.e)(this,"ionToastWillDismiss",7),this.didDismiss=Object(i.e)(this,"ionToastDidDismiss",7)}return t.prototype.present=function(){return Object(r.a)(this,void 0,void 0,(function(){var t=this;return Object(r.c)(this,(function(o){switch(o.label){case 0:return[4,Object(d.f)(this,"toastEnter",c,u,this.position)];case 1:return o.sent(),this.duration>0&&(this.durationTimeout=setTimeout((function(){return t.dismiss(void 0,"timeout")}),this.duration)),[2]}}))}))},t.prototype.dismiss=function(t,o){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(d.g)(this,t,o,"toastLeave",p,b,this.position)},t.prototype.onDidDismiss=function(){return Object(d.h)(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(d.h)(this.el,"ionToastWillDismiss")},t.prototype.getButtons=function(){return this.buttons?this.buttons.map((function(t){return"string"===typeof t?{text:t}:t})):[]},t.prototype.buttonClick=function(t){return Object(r.a)(this,void 0,void 0,(function(){var o;return Object(r.c)(this,(function(e){switch(e.label){case 0:return o=t.role,Object(d.j)(o)?[2,this.dismiss(void 0,o)]:[4,this.callButtonHandler(t)];case 1:return e.sent()?[2,this.dismiss(void 0,o)]:[2,Promise.resolve()]}}))}))},t.prototype.callButtonHandler=function(t){return Object(r.a)(this,void 0,void 0,(function(){var o;return Object(r.c)(this,(function(e){switch(e.label){case 0:if(!t||!t.handler)return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,Object(d.n)(t.handler)];case 2:return!1===e.sent()?[2,!1]:[3,4];case 3:return o=e.sent(),console.error(o),[3,4];case 4:return[2,!0]}}))}))},t.prototype.renderButtons=function(t,o){var e,r=this;if(0!==t.length){var a=Object(n.b)(this),s=((e={"toast-button-group":!0})["toast-button-group-"+o]=!0,e);return Object(i.j)("div",{class:s},t.map((function(t){return Object(i.j)("button",{type:"button",class:g(t),tabIndex:0,onClick:function(){return r.buttonClick(t)},part:"button"},Object(i.j)("div",{class:"toast-button-inner"},t.icon&&Object(i.j)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===a&&Object(i.j)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))})))}},t.prototype.render=function(){var t,o,e=this.getButtons(),r=e.filter((function(t){return"start"===t.side})),a=e.filter((function(t){return"start"!==t.side})),d=Object(n.b)(this),c=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return Object(i.j)(i.b,{style:{zIndex:""+(6e4+this.overlayIndex)},class:Object.assign(Object.assign(Object.assign((o={},o[d]=!0,o),Object(l.a)(this.color)),Object(l.b)(this.cssClass)),{"toast-translucent":this.translucent}),tabindex:"-1",onIonToastWillDismiss:this.dispatchCancelHandler},Object(i.j)("div",{class:c},Object(i.j)("div",{class:"toast-container",part:"container"},this.renderButtons(r,"start"),Object(i.j)("div",{class:"toast-content"},void 0!==this.header&&Object(i.j)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&Object(i.j)("div",{class:"toast-message",part:"message",innerHTML:Object(s.a)(this.message)})),this.renderButtons(a,"end"))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.g)(this)},enumerable:!1,configurable:!0}),t}(),g=function(t){var o;return Object.assign(((o={"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text})["toast-button-"+t.role]=void 0!==t.role,o["ion-focusable"]=!0,o["ion-activatable"]=!0,o),Object(l.b)(t.cssClass))};h.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}},200:function(t,o,e){"use strict";e.d(o,"a",(function(){return n})),e.d(o,"b",(function(){return a})),e.d(o,"c",(function(){return i})),e.d(o,"d",(function(){return d}));var r=e(2),i=function(t,o){return null!==o.closest(t)},n=function(t){var o;return"string"===typeof t&&t.length>0?((o={"ion-color":!0})["ion-color-"+t]=!0,o):void 0},a=function(t){var o={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return o[t]=!0})),o},s=/^[a-z][a-z0-9+\-.]*:/,d=function(t,o,e,i){return Object(r.a)(void 0,void 0,void 0,(function(){var n;return Object(r.c)(this,(function(r){return null!=t&&"#"!==t[0]&&!s.test(t)&&(n=document.querySelector("ion-router"))?(null!=o&&o.preventDefault(),[2,n.push(t,e,i)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=77.198914bf.chunk.js.map