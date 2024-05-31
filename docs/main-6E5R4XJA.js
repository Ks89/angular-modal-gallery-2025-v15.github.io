import{$ as I4,Aa as g1,Ba as C1,C as z1,Ca as Y4,Da as y2,Ea as R2,Fa as Y2,Ga as X4,Ha as H2,I as t,Ia as L1,Ja as J4,Ka as p8,M as V1,Q as D4,R as K,S as F4,Ta as Z4,Ua as d8,Va as c6,Wa as H8,Xa as e6,Y as B4,Ya as a6,Z as R4,Za as i6,_ as o3,a as d1,aa as O4,ab as r6,b as T4,ba as u8,bb as z8,c as B,ca as U4,d as h8,da as q4,e as w,ea as M1,g as H1,ga as f3,h as p2,i as F2,ia as G4,j as Z,ja as W4,k as d2,ka as v8,la as B2,n as l3,p as $2,q as j,r as P4,s as _4,u as Q2,ua as j4,v as o,w as f,wa as K4,x as C,xa as $4,ya as m3,za as Q4}from"./chunk-YDJJYJFN.js";function s6(i,c=null){return{type:S.Sequence,steps:i,options:c}}function h3(i){return{type:S.Style,styles:i,offset:null}}var S,r2,z2,X2,x1,t6=B(()=>{"use strict";S=function(i){return i[i.State=0]="State",i[i.Transition=1]="Transition",i[i.Sequence=2]="Sequence",i[i.Group=3]="Group",i[i.Animate=4]="Animate",i[i.Keyframes=5]="Keyframes",i[i.Style=6]="Style",i[i.Trigger=7]="Trigger",i[i.Reference=8]="Reference",i[i.AnimateChild=9]="AnimateChild",i[i.AnimateRef=10]="AnimateRef",i[i.Query=11]="Query",i[i.Stagger=12]="Stagger",i}(S||{}),r2="*";z2=class{constructor(c=0,e=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=c+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(c=>c()),this._onDoneFns=[])}onStart(c){this._originalOnStartFns.push(c),this._onStartFns.push(c)}onDone(c){this._originalOnDoneFns.push(c),this._onDoneFns.push(c)}onDestroy(c){this._onDestroyFns.push(c)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(c=>c()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(c=>c()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(c){this._position=this.totalTime?c*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(c){let e=c=="start"?this._onStartFns:this._onDoneFns;e.forEach(a=>a()),e.length=0}},X2=class{constructor(c){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=c;let e=0,a=0,r=0,s=this.players.length;s==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(n=>{n.onDone(()=>{++e==s&&this._onFinish()}),n.onDestroy(()=>{++a==s&&this._onDestroy()}),n.onStart(()=>{++r==s&&this._onStart()})}),this.totalTime=this.players.reduce((n,l)=>Math.max(n,l.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(c=>c()),this._onDoneFns=[])}init(){this.players.forEach(c=>c.init())}onStart(c){this._onStartFns.push(c)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(c=>c()),this._onStartFns=[])}onDone(c){this._onDoneFns.push(c)}onDestroy(c){this._onDestroyFns.push(c)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(c=>c.play())}pause(){this.players.forEach(c=>c.pause())}restart(){this.players.forEach(c=>c.restart())}finish(){this._onFinish(),this.players.forEach(c=>c.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(c=>c.destroy()),this._onDestroyFns.forEach(c=>c()),this._onDestroyFns=[])}reset(){this.players.forEach(c=>c.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(c){let e=c*this.totalTime;this.players.forEach(a=>{let r=a.totalTime?Math.min(1,e/a.totalTime):1;a.setPosition(r)})}getPosition(){let c=this.players.reduce((e,a)=>e===null||a.totalTime>e.totalTime?a:e,null);return c!=null?c.getPosition():0}beforeDestroy(){this.players.forEach(c=>{c.beforeDestroy&&c.beforeDestroy()})}triggerCallback(c){let e=c=="start"?this._onStartFns:this._onDoneFns;e.forEach(a=>a()),e.length=0}},x1="!"});function n6(i){return new w(3e3,!1)}function V8(){return new w(3100,!1)}function M8(){return new w(3101,!1)}function g8(i){return new w(3001,!1)}function C8(i){return new w(3003,!1)}function L8(i){return new w(3004,!1)}function x8(i,c){return new w(3005,!1)}function S8(){return new w(3006,!1)}function y8(){return new w(3007,!1)}function b8(i,c){return new w(3008,!1)}function N8(i){return new w(3002,!1)}function w8(i,c,e,a,r){return new w(3010,!1)}function k8(){return new w(3011,!1)}function A8(){return new w(3012,!1)}function E8(){return new w(3200,!1)}function T8(){return new w(3202,!1)}function P8(){return new w(3013,!1)}function _8(i){return new w(3014,!1)}function D8(i){return new w(3015,!1)}function F8(i){return new w(3016,!1)}function B8(i,c){return new w(3404,!1)}function R8(i){return new w(3502,!1)}function I8(i){return new w(3503,!1)}function O8(){return new w(3300,!1)}function U8(i){return new w(3504,!1)}function q8(i){return new w(3301,!1)}function G8(i,c){return new w(3302,!1)}function W8(i){return new w(3303,!1)}function j8(i,c){return new w(3400,!1)}function K8(i){return new w(3401,!1)}function $8(i){return new w(3402,!1)}function Q8(i,c){return new w(3505,!1)}function V2(i){switch(i.length){case 0:return new z2;case 1:return i[0];default:return new X2(i)}}function g6(i,c,e=new Map,a=new Map){let r=[],s=[],n=-1,l=null;if(c.forEach(m=>{let h=m.get("offset"),u=h==n,v=u&&l||new Map;m.forEach((p,d)=>{let H=d,g=p;if(d!=="offset")switch(H=i.normalizePropertyName(H,r),g){case x1:g=e.get(d);break;case r2:g=a.get(d);break;default:g=i.normalizeStyleValue(d,H,g,r);break}v.set(H,g)}),u||s.push(v),l=v,n=h}),r.length)throw R8(r);return s}function _3(i,c,e,a){switch(c){case"start":i.onStart(()=>a(e&&u3(e,"start",i)));break;case"done":i.onDone(()=>a(e&&u3(e,"done",i)));break;case"destroy":i.onDestroy(()=>a(e&&u3(e,"destroy",i)));break}}function u3(i,c,e){let a=e.totalTime,r=!!e.disabled,s=D3(i.element,i.triggerName,i.fromState,i.toState,c||i.phaseName,a??i.totalTime,r),n=i._data;return n!=null&&(s._data=n),s}function D3(i,c,e,a,r="",s=0,n){return{element:i,triggerName:c,fromState:e,toState:a,phaseName:r,totalTime:s,disabled:!!n}}function Y(i,c,e){let a=i.get(c);return a||i.set(c,a=e),a}function l6(i){let c=i.indexOf(":"),e=i.substring(1,c),a=i.slice(c+1);return[e,a]}function F3(i){let c=i.parentNode||i.host||null;return c===Y8?null:c}function X8(i){return i.substring(1,6)=="ebkit"}function J8(i){b2||(b2=Z8()||{},o6=b2.style?"WebkitAppearance"in b2.style:!1);let c=!0;return b2.style&&!X8(i)&&(c=i in b2.style,!c&&o6&&(c="Webkit"+i.charAt(0).toUpperCase()+i.slice(1)in b2.style)),c}function Z8(){return typeof document<"u"?document.body:null}function C6(i,c){for(;c;){if(c===i)return!0;c=F3(c)}return!1}function L6(i,c,e){if(e)return Array.from(i.querySelectorAll(c));let a=i.querySelector(c);return a?[a]:[]}function l2(i){if(typeof i=="number")return i;let c=i.match(/^(-?[\.\d]+)(m?s)/);return!c||c.length<2?0:g3(parseFloat(c[1]),c[2])}function g3(i,c){switch(c){case"s":return i*c5;default:return i}}function A1(i,c,e){return i.hasOwnProperty("duration")?i:a5(i,c,e)}function a5(i,c,e){let a=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,r,s=0,n="";if(typeof i=="string"){let l=i.match(a);if(l===null)return c.push(n6(i)),{duration:0,delay:0,easing:""};r=g3(parseFloat(l[1]),l[2]);let m=l[3];m!=null&&(s=g3(parseFloat(m),l[4]));let h=l[5];h&&(n=h)}else r=i;if(!e){let l=!1,m=c.length;r<0&&(c.push(V8()),l=!0),s<0&&(c.push(M8()),l=!0),l&&c.splice(m,0,n6(i))}return{duration:r,delay:s,easing:n}}function i5(i){return i.length?i[0]instanceof Map?i:i.map(c=>new Map(Object.entries(c))):[]}function s2(i,c,e){c.forEach((a,r)=>{let s=R3(r);e&&!e.has(r)&&e.set(r,i.style[s]),i.style[s]=a})}function w2(i,c){c.forEach((e,a)=>{let r=R3(a);i.style[r]=""})}function J2(i){return Array.isArray(i)?i.length==1?i[0]:s6(i):i}function r5(i,c,e){let a=c.params||{},r=y6(i);r.length&&r.forEach(s=>{a.hasOwnProperty(s)||e.push(g8(s))})}function y6(i){let c=[];if(typeof i=="string"){let e;for(;e=C3.exec(i);)c.push(e[1]);C3.lastIndex=0}return c}function c1(i,c,e){let a=`${i}`,r=a.replace(C3,(s,n)=>{let l=c[n];return l==null&&(e.push(C8(n)),l=""),l.toString()});return r==a?i:r}function R3(i){return i.replace(s5,(...c)=>c[1].toUpperCase())}function t5(i,c){return i===0||c===0}function n5(i,c,e){if(e.size&&c.length){let a=c[0],r=[];if(e.forEach((s,n)=>{a.has(n)||r.push(n),a.set(n,s)}),r.length)for(let s=1;s<c.length;s++){let n=c[s];r.forEach(l=>n.set(l,I3(i,l)))}}return c}function Q(i,c,e){switch(c.type){case S.Trigger:return i.visitTrigger(c,e);case S.State:return i.visitState(c,e);case S.Transition:return i.visitTransition(c,e);case S.Sequence:return i.visitSequence(c,e);case S.Group:return i.visitGroup(c,e);case S.Animate:return i.visitAnimate(c,e);case S.Keyframes:return i.visitKeyframes(c,e);case S.Style:return i.visitStyle(c,e);case S.Reference:return i.visitReference(c,e);case S.AnimateChild:return i.visitAnimateChild(c,e);case S.AnimateRef:return i.visitAnimateRef(c,e);case S.Query:return i.visitQuery(c,e);case S.Stagger:return i.visitStagger(c,e);default:throw L8(c.type)}}function I3(i,c){return window.getComputedStyle(i)[c]}function o5(i,c){let e=[];return typeof i=="string"?i.split(/\s*,\s*/).forEach(a=>f5(a,e,c)):e.push(i),e}function f5(i,c,e){if(i[0]==":"){let m=m5(i,e);if(typeof m=="function"){c.push(m);return}i=m}let a=i.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(a==null||a.length<4)return e.push(D8(i)),c;let r=a[1],s=a[2],n=a[3];c.push(m6(r,n));let l=r==T1&&n==T1;s[0]=="<"&&!l&&c.push(m6(n,r))}function m5(i,c){switch(i){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,a)=>parseFloat(a)>parseFloat(e);case":decrement":return(e,a)=>parseFloat(a)<parseFloat(e);default:return c.push(F8(i)),"* => *"}}function m6(i,c){let e=y1.has(i)||b1.has(i),a=y1.has(c)||b1.has(c);return(r,s)=>{let n=i==T1||i==r,l=c==T1||c==s;return!n&&e&&typeof r=="boolean"&&(n=r?y1.has(i):b1.has(i)),!l&&a&&typeof s=="boolean"&&(l=s?y1.has(c):b1.has(c)),n&&l}}function N6(i,c,e,a){return new L3(i).build(c,e,a)}function u5(i){let c=!!i.split(/\s*,\s*/).find(e=>e==b6);return c&&(i=i.replace(h5,"")),i=i.replace(/@\*/g,k1).replace(/@\w+/g,e=>k1+"-"+e.slice(1)).replace(/:animating/g,M3),[i,c]}function v5(i){return i?d1({},i):null}function p5(i){if(typeof i=="string")return null;let c=null;if(Array.isArray(i))i.forEach(e=>{if(e instanceof Map&&e.has("offset")){let a=e;c=parseFloat(a.get("offset")),a.delete("offset")}});else if(i instanceof Map&&i.has("offset")){let e=i;c=parseFloat(e.get("offset")),e.delete("offset")}return c}function d5(i,c){if(i.hasOwnProperty("duration"))return i;if(typeof i=="number"){let s=A1(i,c).duration;return v3(s,0,"")}let e=i;if(e.split(/\s+/).some(s=>s.charAt(0)=="{"&&s.charAt(1)=="{")){let s=v3(0,0,"");return s.dynamic=!0,s.strValue=e,s}let r=A1(e,c);return v3(r.duration,r.delay,r.easing)}function N2(i){return i?(i=d1({},i),i.params&&(i.params=v5(i.params))):i={},i}function v3(i,c,e){return{duration:i,delay:c,easing:e}}function O3(i,c,e,a,r,s,n=null,l=!1){return{type:1,element:i,keyframes:c,preStyleProps:e,postStyleProps:a,duration:r,delay:s,totalTime:r+s,easing:n,subTimeline:l}}function w6(i,c,e,a,r,s=new Map,n=new Map,l,m,h=[]){return new S3().buildKeyframes(i,c,e,a,r,s,n,l,m,h)}function u6(i,c=3){let e=Math.pow(10,c-1);return Math.round(i*e)/e}function C5(i,c){let e=new Map,a;return i.forEach(r=>{if(r==="*"){a??=c.keys();for(let s of a)e.set(s,r2)}else for(let[s,n]of r)e.set(s,n)}),e}function v6(i,c,e,a,r,s,n,l,m,h,u,v,p){return{type:0,element:i,triggerName:c,isRemovalTransition:r,fromState:e,fromStyles:s,toState:a,toStyles:n,timelines:l,queriedElements:m,preStyleProps:h,postStyleProps:u,totalTime:v,errors:p}}function L5(i,c,e,a,r){return i.some(s=>s(c,e,a,r))}function k6(i,c){let e=d1({},c);return Object.entries(i).forEach(([a,r])=>{r!=null&&(e[a]=r)}),e}function x5(i,c,e){return new w3(i,c,e)}function S5(i,c,e){let a=[(n,l)=>!0],r={type:S.Sequence,steps:[],options:null},s={type:S.Transition,animation:r,matchers:a,options:null,queryCount:0,depCount:0};return new D1(i,s,c)}function p6(i,c,e){i.has(c)?i.has(e)||i.set(e,i.get(c)):i.has(e)&&i.set(c,i.get(e))}function T5(i,c,e){let a=i.get(c);if(a){if(a.length){let r=a.indexOf(e);a.splice(r,1)}a.length==0&&i.delete(c)}return a}function P5(i){return i??null}function N1(i){return i&&i.nodeType===1}function _5(i){return i=="start"||i=="done"}function H6(i,c){let e=i.style.display;return i.style.display=c??"none",e}function z6(i,c,e,a,r){let s=[];e.forEach(m=>s.push(H6(m)));let n=[];a.forEach((m,h)=>{let u=new Map;m.forEach(v=>{let p=c.computeStyle(h,v,r);u.set(v,p),(!p||p.length==0)&&(h[e2]=E5,n.push(h))}),i.set(h,u)});let l=0;return e.forEach(m=>H6(m,s[l++])),n}function V6(i,c){let e=new Map;if(i.forEach(l=>e.set(l,[])),c.length==0)return e;let a=1,r=new Set(c),s=new Map;function n(l){if(!l)return a;let m=s.get(l);if(m)return m;let h=l.parentNode;return e.has(h)?m=h:r.has(h)?m=a:m=n(h),s.set(l,m),m}return c.forEach(l=>{let m=n(l);m!==a&&e.get(m).push(l)}),e}function c2(i,c){i.classList?.add(c)}function I2(i,c){i.classList?.remove(c)}function D5(i,c,e){V2(e).onDone(()=>i.processLeaveNode(c))}function F5(i){let c=[];return E6(i,c),c}function E6(i,c){for(let e=0;e<i.length;e++){let a=i[e];a instanceof X2?E6(a.players,c):c.push(a)}}function B5(i,c){let e=Object.keys(i),a=Object.keys(c);if(e.length!=a.length)return!1;for(let r=0;r<e.length;r++){let s=e[r];if(!c.hasOwnProperty(s)||i[s]!==c[s])return!1}return!0}function M6(i,c,e){let a=e.get(i);if(!a)return!1;let r=c.get(i);return r?a.forEach(s=>r.add(s)):c.set(i,a),e.delete(i),!0}function R5(i,c){let e=null,a=null;return Array.isArray(c)&&c.length?(e=z3(c[0]),c.length>1&&(a=z3(c[c.length-1]))):c instanceof Map&&(e=z3(c)),e||a?new T3(i,e,a):null}function z3(i){let c=null;return i.forEach((e,a)=>{I5(a)&&(c=c||new Map,c.set(a,e))}),c}function I5(i){return i==="display"||i==="position"}function O5(i){switch(i){case"body":return document.body;case"document":return document;case"window":return window;default:return i}}function U5(i){let c=i.indexOf("."),e=i.substring(0,c),a=i.slice(c+1);return[e,a]}var Y8,b2,o6,B3,U3,k2,A2,c5,x6,e5,S6,V3,S1,k1,f6,M3,C3,s5,l5,E1,T1,y1,b1,b6,h5,h6,L3,x3,e1,H5,z5,V5,M5,g5,S3,P1,y3,_1,b3,p3,D1,N3,w3,y5,k3,d6,b5,d3,N5,w5,k5,A5,A6,E5,e2,a1,Z2,H3,A3,E3,i1,U2,O2,T3,F1,B1,w1,T6,R1,P3,I1,q3=B(()=>{"use strict";t6();K();K();Y8=typeof document>"u"?null:document.documentElement;b2=null,o6=!1;B3=(()=>{let c=class c{validateStyleProperty(a){return J8(a)}containsElement(a,r){return C6(a,r)}getParentElement(a){return F3(a)}query(a,r,s){return L6(a,r,s)}computeStyle(a,r,s){return s||""}animate(a,r,s,n,l,m=[],h){return new z2(s,n)}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=H1({token:c,factory:c.\u0275fac});let i=c;return i})(),U3=class U3{};U3.NOOP=new B3;k2=U3,A2=class{},c5=1e3,x6="{{",e5="}}",S6="ng-enter",V3="ng-leave",S1="ng-trigger",k1=".ng-trigger",f6="ng-animating",M3=".ng-animating";C3=new RegExp(`${x6}\\s*(.+?)\\s*${e5}`,"g");s5=/-+([a-z0-9])/g;l5=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),E1=class extends A2{normalizePropertyName(c,e){return R3(c)}normalizeStyleValue(c,e,a,r){let s="",n=a.toString().trim();if(l5.has(e)&&a!==0&&a!=="0")if(typeof a=="number")s="px";else{let l=a.match(/^[+-]?[\d\.]+([a-z]*)$/);l&&l[1].length==0&&r.push(x8(c,a))}return n+s}},T1="*";y1=new Set(["true","1"]),b1=new Set(["false","0"]);b6=":self",h5=new RegExp(`s*${b6}s*,?`,"g");h6="",L3=class{constructor(c){this._driver=c}build(c,e,a){let r=new x3(e);return this._resetContextStyleTimingState(r),Q(this,J2(c),r)}_resetContextStyleTimingState(c){c.currentQuerySelector=h6,c.collectedStyles=new Map,c.collectedStyles.set(h6,new Map),c.currentTime=0}visitTrigger(c,e){let a=e.queryCount=0,r=e.depCount=0,s=[],n=[];return c.name.charAt(0)=="@"&&e.errors.push(S8()),c.definitions.forEach(l=>{if(this._resetContextStyleTimingState(e),l.type==S.State){let m=l,h=m.name;h.toString().split(/\s*,\s*/).forEach(u=>{m.name=u,s.push(this.visitState(m,e))}),m.name=h}else if(l.type==S.Transition){let m=this.visitTransition(l,e);a+=m.queryCount,r+=m.depCount,n.push(m)}else e.errors.push(y8())}),{type:S.Trigger,name:c.name,states:s,transitions:n,queryCount:a,depCount:r,options:null}}visitState(c,e){let a=this.visitStyle(c.styles,e),r=c.options&&c.options.params||null;if(a.containsDynamicStyles){let s=new Set,n=r||{};a.styles.forEach(l=>{l instanceof Map&&l.forEach(m=>{y6(m).forEach(h=>{n.hasOwnProperty(h)||s.add(h)})})}),s.size&&e.errors.push(b8(c.name,[...s.values()]))}return{type:S.State,name:c.name,style:a,options:r?{params:r}:null}}visitTransition(c,e){e.queryCount=0,e.depCount=0;let a=Q(this,J2(c.animation),e),r=o5(c.expr,e.errors);return{type:S.Transition,matchers:r,animation:a,queryCount:e.queryCount,depCount:e.depCount,options:N2(c.options)}}visitSequence(c,e){return{type:S.Sequence,steps:c.steps.map(a=>Q(this,a,e)),options:N2(c.options)}}visitGroup(c,e){let a=e.currentTime,r=0,s=c.steps.map(n=>{e.currentTime=a;let l=Q(this,n,e);return r=Math.max(r,e.currentTime),l});return e.currentTime=r,{type:S.Group,steps:s,options:N2(c.options)}}visitAnimate(c,e){let a=d5(c.timings,e.errors);e.currentAnimateTimings=a;let r,s=c.styles?c.styles:h3({});if(s.type==S.Keyframes)r=this.visitKeyframes(s,e);else{let n=c.styles,l=!1;if(!n){l=!0;let h={};a.easing&&(h.easing=a.easing),n=h3(h)}e.currentTime+=a.duration+a.delay;let m=this.visitStyle(n,e);m.isEmptyStep=l,r=m}return e.currentAnimateTimings=null,{type:S.Animate,timings:a,style:r,options:null}}visitStyle(c,e){let a=this._makeStyleAst(c,e);return this._validateStyleAst(a,e),a}_makeStyleAst(c,e){let a=[],r=Array.isArray(c.styles)?c.styles:[c.styles];for(let l of r)typeof l=="string"?l===r2?a.push(l):e.errors.push(N8(l)):a.push(new Map(Object.entries(l)));let s=!1,n=null;return a.forEach(l=>{if(l instanceof Map&&(l.has("easing")&&(n=l.get("easing"),l.delete("easing")),!s)){for(let m of l.values())if(m.toString().indexOf(x6)>=0){s=!0;break}}}),{type:S.Style,styles:a,easing:n,offset:c.offset,containsDynamicStyles:s,options:null}}_validateStyleAst(c,e){let a=e.currentAnimateTimings,r=e.currentTime,s=e.currentTime;a&&s>0&&(s-=a.duration+a.delay),c.styles.forEach(n=>{typeof n!="string"&&n.forEach((l,m)=>{let h=e.collectedStyles.get(e.currentQuerySelector),u=h.get(m),v=!0;u&&(s!=r&&s>=u.startTime&&r<=u.endTime&&(e.errors.push(w8(m,u.startTime,u.endTime,s,r)),v=!1),s=u.startTime),v&&h.set(m,{startTime:s,endTime:r}),e.options&&r5(l,e.options,e.errors)})})}visitKeyframes(c,e){let a={type:S.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(k8()),a;let r=1,s=0,n=[],l=!1,m=!1,h=0,u=c.steps.map(A=>{let b=this._makeStyleAst(A,e),k=b.offset!=null?b.offset:p5(b.styles),E=0;return k!=null&&(s++,E=b.offset=k),m=m||E<0||E>1,l=l||E<h,h=E,n.push(E),b});m&&e.errors.push(A8()),l&&e.errors.push(E8());let v=c.steps.length,p=0;s>0&&s<v?e.errors.push(T8()):s==0&&(p=r/(v-1));let d=v-1,H=e.currentTime,g=e.currentAnimateTimings,y=g.duration;return u.forEach((A,b)=>{let k=p>0?b==d?1:p*b:n[b],E=k*y;e.currentTime=H+g.delay+E,g.duration=E,this._validateStyleAst(A,e),A.offset=k,a.styles.push(A)}),a}visitReference(c,e){return{type:S.Reference,animation:Q(this,J2(c.animation),e),options:N2(c.options)}}visitAnimateChild(c,e){return e.depCount++,{type:S.AnimateChild,options:N2(c.options)}}visitAnimateRef(c,e){return{type:S.AnimateRef,animation:this.visitReference(c.animation,e),options:N2(c.options)}}visitQuery(c,e){let a=e.currentQuerySelector,r=c.options||{};e.queryCount++,e.currentQuery=c;let[s,n]=u5(c.selector);e.currentQuerySelector=a.length?a+" "+s:s,Y(e.collectedStyles,e.currentQuerySelector,new Map);let l=Q(this,J2(c.animation),e);return e.currentQuery=null,e.currentQuerySelector=a,{type:S.Query,selector:s,limit:r.limit||0,optional:!!r.optional,includeSelf:n,animation:l,originalSelector:c.selector,options:N2(c.options)}}visitStagger(c,e){e.currentQuery||e.errors.push(P8());let a=c.timings==="full"?{duration:0,delay:0,easing:"full"}:A1(c.timings,e.errors,!0);return{type:S.Stagger,animation:Q(this,J2(c.animation),e),timings:a,options:null}}};x3=class{constructor(c){this.errors=c,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles=new Map,this.options=null,this.unsupportedCSSPropertiesFound=new Set}};e1=class{constructor(){this._map=new Map}get(c){return this._map.get(c)||[]}append(c,e){let a=this._map.get(c);a||this._map.set(c,a=[]),a.push(...e)}has(c){return this._map.has(c)}clear(){this._map.clear()}},H5=1,z5=":enter",V5=new RegExp(z5,"g"),M5=":leave",g5=new RegExp(M5,"g");S3=class{buildKeyframes(c,e,a,r,s,n,l,m,h,u=[]){h=h||new e1;let v=new y3(c,e,h,r,s,u,[]);v.options=m;let p=m.delay?l2(m.delay):0;v.currentTimeline.delayNextStep(p),v.currentTimeline.setStyles([n],null,v.errors,m),Q(this,a,v);let d=v.timelines.filter(H=>H.containsAnimation());if(d.length&&l.size){let H;for(let g=d.length-1;g>=0;g--){let y=d[g];if(y.element===e){H=y;break}}H&&!H.allowOnlyTimelineStyles()&&H.setStyles([l],null,v.errors,m)}return d.length?d.map(H=>H.buildKeyframes()):[O3(e,[],[],[],0,p,"",!1)]}visitTrigger(c,e){}visitState(c,e){}visitTransition(c,e){}visitAnimateChild(c,e){let a=e.subInstructions.get(e.element);if(a){let r=e.createSubContext(c.options),s=e.currentTimeline.currentTime,n=this._visitSubInstructions(a,r,r.options);s!=n&&e.transformIntoNewTimeline(n)}e.previousNode=c}visitAnimateRef(c,e){let a=e.createSubContext(c.options);a.transformIntoNewTimeline(),this._applyAnimationRefDelays([c.options,c.animation.options],e,a),this.visitReference(c.animation,a),e.transformIntoNewTimeline(a.currentTimeline.currentTime),e.previousNode=c}_applyAnimationRefDelays(c,e,a){for(let r of c){let s=r?.delay;if(s){let n=typeof s=="number"?s:l2(c1(s,r?.params??{},e.errors));a.delayNextStep(n)}}}_visitSubInstructions(c,e,a){let s=e.currentTimeline.currentTime,n=a.duration!=null?l2(a.duration):null,l=a.delay!=null?l2(a.delay):null;return n!==0&&c.forEach(m=>{let h=e.appendInstructionToTimeline(m,n,l);s=Math.max(s,h.duration+h.delay)}),s}visitReference(c,e){e.updateOptions(c.options,!0),Q(this,c.animation,e),e.previousNode=c}visitSequence(c,e){let a=e.subContextCount,r=e,s=c.options;if(s&&(s.params||s.delay)&&(r=e.createSubContext(s),r.transformIntoNewTimeline(),s.delay!=null)){r.previousNode.type==S.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=P1);let n=l2(s.delay);r.delayNextStep(n)}c.steps.length&&(c.steps.forEach(n=>Q(this,n,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>a&&r.transformIntoNewTimeline()),e.previousNode=c}visitGroup(c,e){let a=[],r=e.currentTimeline.currentTime,s=c.options&&c.options.delay?l2(c.options.delay):0;c.steps.forEach(n=>{let l=e.createSubContext(c.options);s&&l.delayNextStep(s),Q(this,n,l),r=Math.max(r,l.currentTimeline.currentTime),a.push(l.currentTimeline)}),a.forEach(n=>e.currentTimeline.mergeTimelineCollectedStyles(n)),e.transformIntoNewTimeline(r),e.previousNode=c}_visitTiming(c,e){if(c.dynamic){let a=c.strValue,r=e.params?c1(a,e.params,e.errors):a;return A1(r,e.errors)}else return{duration:c.duration,delay:c.delay,easing:c.easing}}visitAnimate(c,e){let a=e.currentAnimateTimings=this._visitTiming(c.timings,e),r=e.currentTimeline;a.delay&&(e.incrementTime(a.delay),r.snapshotCurrentStyles());let s=c.style;s.type==S.Keyframes?this.visitKeyframes(s,e):(e.incrementTime(a.duration),this.visitStyle(s,e),r.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=c}visitStyle(c,e){let a=e.currentTimeline,r=e.currentAnimateTimings;!r&&a.hasCurrentStyleProperties()&&a.forwardFrame();let s=r&&r.easing||c.easing;c.isEmptyStep?a.applyEmptyStep(s):a.setStyles(c.styles,s,e.errors,e.options),e.previousNode=c}visitKeyframes(c,e){let a=e.currentAnimateTimings,r=e.currentTimeline.duration,s=a.duration,l=e.createSubContext().currentTimeline;l.easing=a.easing,c.styles.forEach(m=>{let h=m.offset||0;l.forwardTime(h*s),l.setStyles(m.styles,m.easing,e.errors,e.options),l.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(l),e.transformIntoNewTimeline(r+s),e.previousNode=c}visitQuery(c,e){let a=e.currentTimeline.currentTime,r=c.options||{},s=r.delay?l2(r.delay):0;s&&(e.previousNode.type===S.Style||a==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=P1);let n=a,l=e.invokeQuery(c.selector,c.originalSelector,c.limit,c.includeSelf,!!r.optional,e.errors);e.currentQueryTotal=l.length;let m=null;l.forEach((h,u)=>{e.currentQueryIndex=u;let v=e.createSubContext(c.options,h);s&&v.delayNextStep(s),h===e.element&&(m=v.currentTimeline),Q(this,c.animation,v),v.currentTimeline.applyStylesToKeyframe();let p=v.currentTimeline.currentTime;n=Math.max(n,p)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(n),m&&(e.currentTimeline.mergeTimelineCollectedStyles(m),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=c}visitStagger(c,e){let a=e.parentContext,r=e.currentTimeline,s=c.timings,n=Math.abs(s.duration),l=n*(e.currentQueryTotal-1),m=n*e.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":m=l-m;break;case"full":m=a.currentStaggerTime;break}let u=e.currentTimeline;m&&u.delayNextStep(m);let v=u.currentTime;Q(this,c.animation,e),e.previousNode=c,a.currentStaggerTime=r.currentTime-v+(r.startTime-a.currentTimeline.startTime)}},P1={},y3=class i{constructor(c,e,a,r,s,n,l,m){this._driver=c,this.element=e,this.subInstructions=a,this._enterClassName=r,this._leaveClassName=s,this.errors=n,this.timelines=l,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=P1,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=m||new _1(this._driver,e,0),l.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(c,e){if(!c)return;let a=c,r=this.options;a.duration!=null&&(r.duration=l2(a.duration)),a.delay!=null&&(r.delay=l2(a.delay));let s=a.params;if(s){let n=r.params;n||(n=this.options.params={}),Object.keys(s).forEach(l=>{(!e||!n.hasOwnProperty(l))&&(n[l]=c1(s[l],n,this.errors))})}}_copyOptions(){let c={};if(this.options){let e=this.options.params;if(e){let a=c.params={};Object.keys(e).forEach(r=>{a[r]=e[r]})}}return c}createSubContext(c=null,e,a){let r=e||this.element,s=new i(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,a||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(c),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(c){return this.previousNode=P1,this.currentTimeline=this.currentTimeline.fork(this.element,c),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(c,e,a){let r={duration:e??c.duration,delay:this.currentTimeline.currentTime+(a??0)+c.delay,easing:""},s=new b3(this._driver,c.element,c.keyframes,c.preStyleProps,c.postStyleProps,r,c.stretchStartingKeyframe);return this.timelines.push(s),r}incrementTime(c){this.currentTimeline.forwardTime(this.currentTimeline.duration+c)}delayNextStep(c){c>0&&this.currentTimeline.delayNextStep(c)}invokeQuery(c,e,a,r,s,n){let l=[];if(r&&l.push(this.element),c.length>0){c=c.replace(V5,"."+this._enterClassName),c=c.replace(g5,"."+this._leaveClassName);let m=a!=1,h=this._driver.query(this.element,c,m);a!==0&&(h=a<0?h.slice(h.length+a,h.length):h.slice(0,a)),l.push(...h)}return!s&&l.length==0&&n.push(_8(e)),l}},_1=class i{constructor(c,e,a,r){this._driver=c,this.element=e,this.startTime=a,this._elementTimelineStylesLookup=r,this.duration=0,this.easing=null,this._previousKeyframe=new Map,this._currentKeyframe=new Map,this._keyframes=new Map,this._styleSummary=new Map,this._localTimelineStyles=new Map,this._pendingStyles=new Map,this._backFill=new Map,this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(c){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+c),e&&this.snapshotCurrentStyles()):this.startTime+=c}fork(c,e){return this.applyStylesToKeyframe(),new i(this._driver,c,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=H5,this._loadKeyframe()}forwardTime(c){this.applyStylesToKeyframe(),this.duration=c,this._loadKeyframe()}_updateStyle(c,e){this._localTimelineStyles.set(c,e),this._globalTimelineStyles.set(c,e),this._styleSummary.set(c,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(c){c&&this._previousKeyframe.set("easing",c);for(let[e,a]of this._globalTimelineStyles)this._backFill.set(e,a||r2),this._currentKeyframe.set(e,r2);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(c,e,a,r){e&&this._previousKeyframe.set("easing",e);let s=r&&r.params||{},n=C5(c,this._globalTimelineStyles);for(let[l,m]of n){let h=c1(m,s,a);this._pendingStyles.set(l,h),this._localTimelineStyles.has(l)||this._backFill.set(l,this._globalTimelineStyles.get(l)??r2),this._updateStyle(l,h)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((c,e)=>{this._currentKeyframe.set(e,c)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((c,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,c)}))}snapshotCurrentStyles(){for(let[c,e]of this._localTimelineStyles)this._pendingStyles.set(c,e),this._updateStyle(c,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let c=[];for(let e in this._currentKeyframe)c.push(e);return c}mergeTimelineCollectedStyles(c){c._styleSummary.forEach((e,a)=>{let r=this._styleSummary.get(a);(!r||e.time>r.time)&&this._updateStyle(a,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let c=new Set,e=new Set,a=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((l,m)=>{let h=new Map([...this._backFill,...l]);h.forEach((u,v)=>{u===x1?c.add(v):u===r2&&e.add(v)}),a||h.set("offset",m/this.duration),r.push(h)});let s=[...c.values()],n=[...e.values()];if(a){let l=r[0],m=new Map(l);l.set("offset",0),m.set("offset",1),r=[l,m]}return O3(this.element,r,s,n,this.duration,this.startTime,this.easing,!1)}},b3=class extends _1{constructor(c,e,a,r,s,n,l=!1){super(c,e,n.delay),this.keyframes=a,this.preStyleProps=r,this.postStyleProps=s,this._stretchStartingKeyframe=l,this.timings={duration:n.duration,delay:n.delay,easing:n.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let c=this.keyframes,{delay:e,duration:a,easing:r}=this.timings;if(this._stretchStartingKeyframe&&e){let s=[],n=a+e,l=e/n,m=new Map(c[0]);m.set("offset",0),s.push(m);let h=new Map(c[0]);h.set("offset",u6(l)),s.push(h);let u=c.length-1;for(let v=1;v<=u;v++){let p=new Map(c[v]),d=p.get("offset"),H=e+d*a;p.set("offset",u6(H/n)),s.push(p)}a=n,e=0,r="",c=s}return O3(this.element,c,this.preStyleProps,this.postStyleProps,a,e,r,!0)}};p3={},D1=class{constructor(c,e,a){this._triggerName=c,this.ast=e,this._stateStyles=a}match(c,e,a,r){return L5(this.ast.matchers,c,e,a,r)}buildStyles(c,e,a){let r=this._stateStyles.get("*");return c!==void 0&&(r=this._stateStyles.get(c?.toString())||r),r?r.buildStyles(e,a):new Map}build(c,e,a,r,s,n,l,m,h,u){let v=[],p=this.ast.options&&this.ast.options.params||p3,d=l&&l.params||p3,H=this.buildStyles(a,d,v),g=m&&m.params||p3,y=this.buildStyles(r,g,v),A=new Set,b=new Map,k=new Map,E=r==="void",R={params:k6(g,p),delay:this.ast.options?.delay},O=u?[]:w6(c,e,this.ast.animation,s,n,H,y,R,h,v),_=0;return O.forEach(U=>{_=Math.max(U.duration+U.delay,_)}),v.length?v6(e,this._triggerName,a,r,E,H,y,[],[],b,k,_,v):(O.forEach(U=>{let G=U.element,u2=Y(b,G,new Set);U.preStyleProps.forEach(x2=>u2.add(x2));let w4=Y(k,G,new Set);U.postStyleProps.forEach(x2=>w4.add(x2)),G!==e&&A.add(G)}),v6(e,this._triggerName,a,r,E,H,y,O,[...A.values()],b,k,_))}};N3=class{constructor(c,e,a){this.styles=c,this.defaultParams=e,this.normalizer=a}buildStyles(c,e){let a=new Map,r=k6(c,this.defaultParams);return this.styles.styles.forEach(s=>{typeof s!="string"&&s.forEach((n,l)=>{n&&(n=c1(n,r,e));let m=this.normalizer.normalizePropertyName(l,e);n=this.normalizer.normalizeStyleValue(l,m,n,e),a.set(l,n)})}),a}};w3=class{constructor(c,e,a){this.name=c,this.ast=e,this._normalizer=a,this.transitionFactories=[],this.states=new Map,e.states.forEach(r=>{let s=r.options&&r.options.params||{};this.states.set(r.name,new N3(r.style,s,a))}),p6(this.states,"true","1"),p6(this.states,"false","0"),e.transitions.forEach(r=>{this.transitionFactories.push(new D1(c,r,this.states))}),this.fallbackTransition=S5(c,this.states,this._normalizer)}get containsQueries(){return this.ast.queryCount>0}matchTransition(c,e,a,r){return this.transitionFactories.find(n=>n.match(c,e,a,r))||null}matchStyles(c,e,a){return this.fallbackTransition.buildStyles(c,e,a)}};y5=new e1,k3=class{constructor(c,e,a){this.bodyNode=c,this._driver=e,this._normalizer=a,this._animations=new Map,this._playersById=new Map,this.players=[]}register(c,e){let a=[],r=[],s=N6(this._driver,e,a,r);if(a.length)throw I8(a);r.length&&void 0,this._animations.set(c,s)}_buildPlayer(c,e,a){let r=c.element,s=g6(this._normalizer,c.keyframes,e,a);return this._driver.animate(r,s,c.duration,c.delay,c.easing,[],!0)}create(c,e,a={}){let r=[],s=this._animations.get(c),n,l=new Map;if(s?(n=w6(this._driver,e,s,S6,V3,new Map,new Map,a,y5,r),n.forEach(u=>{let v=Y(l,u.element,new Map);u.postStyleProps.forEach(p=>v.set(p,null))})):(r.push(O8()),n=[]),r.length)throw U8(r);l.forEach((u,v)=>{u.forEach((p,d)=>{u.set(d,this._driver.computeStyle(v,d,r2))})});let m=n.map(u=>{let v=l.get(u.element);return this._buildPlayer(u,new Map,v)}),h=V2(m);return this._playersById.set(c,h),h.onDestroy(()=>this.destroy(c)),this.players.push(h),h}destroy(c){let e=this._getPlayer(c);e.destroy(),this._playersById.delete(c);let a=this.players.indexOf(e);a>=0&&this.players.splice(a,1)}_getPlayer(c){let e=this._playersById.get(c);if(!e)throw q8(c);return e}listen(c,e,a,r){let s=D3(e,"","","");return _3(this._getPlayer(c),a,s,r),()=>{}}command(c,e,a,r){if(a=="register"){this.register(c,r[0]);return}if(a=="create"){let n=r[0]||{};this.create(c,e,n);return}let s=this._getPlayer(c);switch(a){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(c);break}}},d6="ng-animate-queued",b5=".ng-animate-queued",d3="ng-animate-disabled",N5=".ng-animate-disabled",w5="ng-star-inserted",k5=".ng-star-inserted",A5=[],A6={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},E5={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},e2="__ng_removed",a1=class{get params(){return this.options.params}constructor(c,e=""){this.namespaceId=e;let a=c&&c.hasOwnProperty("value"),r=a?c.value:c;if(this.value=P5(r),a){let s=c,{value:n}=s,l=T4(s,["value"]);this.options=l}else this.options={};this.options.params||(this.options.params={})}absorbOptions(c){let e=c.params;if(e){let a=this.options.params;Object.keys(e).forEach(r=>{a[r]==null&&(a[r]=e[r])})}}},Z2="void",H3=new a1(Z2),A3=class{constructor(c,e,a){this.id=c,this.hostElement=e,this._engine=a,this.players=[],this._triggers=new Map,this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+c,c2(e,this._hostClassName)}listen(c,e,a,r){if(!this._triggers.has(e))throw G8(a,e);if(a==null||a.length==0)throw W8(e);if(!_5(a))throw j8(a,e);let s=Y(this._elementListeners,c,[]),n={name:e,phase:a,callback:r};s.push(n);let l=Y(this._engine.statesByElement,c,new Map);return l.has(e)||(c2(c,S1),c2(c,S1+"-"+e),l.set(e,H3)),()=>{this._engine.afterFlush(()=>{let m=s.indexOf(n);m>=0&&s.splice(m,1),this._triggers.has(e)||l.delete(e)})}}register(c,e){return this._triggers.has(c)?!1:(this._triggers.set(c,e),!0)}_getTrigger(c){let e=this._triggers.get(c);if(!e)throw K8(c);return e}trigger(c,e,a,r=!0){let s=this._getTrigger(e),n=new i1(this.id,e,c),l=this._engine.statesByElement.get(c);l||(c2(c,S1),c2(c,S1+"-"+e),this._engine.statesByElement.set(c,l=new Map));let m=l.get(e),h=new a1(a,this.id);if(!(a&&a.hasOwnProperty("value"))&&m&&h.absorbOptions(m.options),l.set(e,h),m||(m=H3),!(h.value===Z2)&&m.value===h.value){if(!B5(m.params,h.params)){let g=[],y=s.matchStyles(m.value,m.params,g),A=s.matchStyles(h.value,h.params,g);g.length?this._engine.reportError(g):this._engine.afterFlush(()=>{w2(c,y),s2(c,A)})}return}let p=Y(this._engine.playersByElement,c,[]);p.forEach(g=>{g.namespaceId==this.id&&g.triggerName==e&&g.queued&&g.destroy()});let d=s.matchTransition(m.value,h.value,c,h.params),H=!1;if(!d){if(!r)return;d=s.fallbackTransition,H=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:c,triggerName:e,transition:d,fromState:m,toState:h,player:n,isFallbackTransition:H}),H||(c2(c,d6),n.onStart(()=>{I2(c,d6)})),n.onDone(()=>{let g=this.players.indexOf(n);g>=0&&this.players.splice(g,1);let y=this._engine.playersByElement.get(c);if(y){let A=y.indexOf(n);A>=0&&y.splice(A,1)}}),this.players.push(n),p.push(n),n}deregister(c){this._triggers.delete(c),this._engine.statesByElement.forEach(e=>e.delete(c)),this._elementListeners.forEach((e,a)=>{this._elementListeners.set(a,e.filter(r=>r.name!=c))})}clearElementCache(c){this._engine.statesByElement.delete(c),this._elementListeners.delete(c);let e=this._engine.playersByElement.get(c);e&&(e.forEach(a=>a.destroy()),this._engine.playersByElement.delete(c))}_signalRemovalForInnerTriggers(c,e){let a=this._engine.driver.query(c,k1,!0);a.forEach(r=>{if(r[e2])return;let s=this._engine.fetchNamespacesByElement(r);s.size?s.forEach(n=>n.triggerLeaveAnimation(r,e,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>a.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(c,e,a,r){let s=this._engine.statesByElement.get(c),n=new Map;if(s){let l=[];if(s.forEach((m,h)=>{if(n.set(h,m.value),this._triggers.has(h)){let u=this.trigger(c,h,Z2,r);u&&l.push(u)}}),l.length)return this._engine.markElementAsRemoved(this.id,c,!0,e,n),a&&V2(l).onDone(()=>this._engine.processLeaveNode(c)),!0}return!1}prepareLeaveAnimationListeners(c){let e=this._elementListeners.get(c),a=this._engine.statesByElement.get(c);if(e&&a){let r=new Set;e.forEach(s=>{let n=s.name;if(r.has(n))return;r.add(n);let m=this._triggers.get(n).fallbackTransition,h=a.get(n)||H3,u=new a1(Z2),v=new i1(this.id,n,c);this._engine.totalQueuedPlayers++,this._queue.push({element:c,triggerName:n,transition:m,fromState:h,toState:u,player:v,isFallbackTransition:!0})})}}removeNode(c,e){let a=this._engine;if(c.childElementCount&&this._signalRemovalForInnerTriggers(c,e),this.triggerLeaveAnimation(c,e,!0))return;let r=!1;if(a.totalAnimations){let s=a.players.length?a.playersByQueriedElement.get(c):[];if(s&&s.length)r=!0;else{let n=c;for(;n=n.parentNode;)if(a.statesByElement.get(n)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(c),r)a.markElementAsRemoved(this.id,c,!1,e);else{let s=c[e2];(!s||s===A6)&&(a.afterFlush(()=>this.clearElementCache(c)),a.destroyInnerAnimations(c),a._onRemovalComplete(c,e))}}insertNode(c,e){c2(c,this._hostClassName)}drainQueuedTransitions(c){let e=[];return this._queue.forEach(a=>{let r=a.player;if(r.destroyed)return;let s=a.element,n=this._elementListeners.get(s);n&&n.forEach(l=>{if(l.name==a.triggerName){let m=D3(s,a.triggerName,a.fromState.value,a.toState.value);m._data=c,_3(a.player,l.phase,m,l.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):e.push(a)}),this._queue=[],e.sort((a,r)=>{let s=a.transition.ast.depCount,n=r.transition.ast.depCount;return s==0||n==0?s-n:this._engine.driver.containsElement(a.element,r.element)?1:-1})}destroy(c){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,c)}},E3=class{_onRemovalComplete(c,e){this.onRemovalComplete(c,e)}constructor(c,e,a){this.bodyNode=c,this.driver=e,this._normalizer=a,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(r,s)=>{}}get queuedPlayers(){let c=[];return this._namespaceList.forEach(e=>{e.players.forEach(a=>{a.queued&&c.push(a)})}),c}createNamespace(c,e){let a=new A3(c,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(a,e):(this.newHostElements.set(e,a),this.collectEnterElement(e)),this._namespaceLookup[c]=a}_balanceNamespaceList(c,e){let a=this._namespaceList,r=this.namespacesByHostElement;if(a.length-1>=0){let n=!1,l=this.driver.getParentElement(e);for(;l;){let m=r.get(l);if(m){let h=a.indexOf(m);a.splice(h+1,0,c),n=!0;break}l=this.driver.getParentElement(l)}n||a.unshift(c)}else a.push(c);return r.set(e,c),c}register(c,e){let a=this._namespaceLookup[c];return a||(a=this.createNamespace(c,e)),a}registerTrigger(c,e,a){let r=this._namespaceLookup[c];r&&r.register(e,a)&&this.totalAnimations++}destroy(c,e){c&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let a=this._fetchNamespace(c);this.namespacesByHostElement.delete(a.hostElement);let r=this._namespaceList.indexOf(a);r>=0&&this._namespaceList.splice(r,1),a.destroy(e),delete this._namespaceLookup[c]}))}_fetchNamespace(c){return this._namespaceLookup[c]}fetchNamespacesByElement(c){let e=new Set,a=this.statesByElement.get(c);if(a){for(let r of a.values())if(r.namespaceId){let s=this._fetchNamespace(r.namespaceId);s&&e.add(s)}}return e}trigger(c,e,a,r){if(N1(e)){let s=this._fetchNamespace(c);if(s)return s.trigger(e,a,r),!0}return!1}insertNode(c,e,a,r){if(!N1(e))return;let s=e[e2];if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;let n=this.collectedLeaveElements.indexOf(e);n>=0&&this.collectedLeaveElements.splice(n,1)}if(c){let n=this._fetchNamespace(c);n&&n.insertNode(e,a)}r&&this.collectEnterElement(e)}collectEnterElement(c){this.collectedEnterElements.push(c)}markElementAsDisabled(c,e){e?this.disabledNodes.has(c)||(this.disabledNodes.add(c),c2(c,d3)):this.disabledNodes.has(c)&&(this.disabledNodes.delete(c),I2(c,d3))}removeNode(c,e,a){if(N1(e)){let r=c?this._fetchNamespace(c):null;r?r.removeNode(e,a):this.markElementAsRemoved(c,e,!1,a);let s=this.namespacesByHostElement.get(e);s&&s.id!==c&&s.removeNode(e,a)}else this._onRemovalComplete(e,a)}markElementAsRemoved(c,e,a,r,s){this.collectedLeaveElements.push(e),e[e2]={namespaceId:c,setForRemoval:r,hasAnimation:a,removedBeforeQueried:!1,previousTriggersValues:s}}listen(c,e,a,r,s){return N1(e)?this._fetchNamespace(c).listen(e,a,r,s):()=>{}}_buildInstruction(c,e,a,r,s){return c.transition.build(this.driver,c.element,c.fromState.value,c.toState.value,a,r,c.fromState.options,c.toState.options,e,s)}destroyInnerAnimations(c){let e=this.driver.query(c,k1,!0);e.forEach(a=>this.destroyActiveAnimationsForElement(a)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(c,M3,!0),e.forEach(a=>this.finishActiveQueriedAnimationOnElement(a)))}destroyActiveAnimationsForElement(c){let e=this.playersByElement.get(c);e&&e.forEach(a=>{a.queued?a.markedForDestroy=!0:a.destroy()})}finishActiveQueriedAnimationOnElement(c){let e=this.playersByQueriedElement.get(c);e&&e.forEach(a=>a.finish())}whenRenderingDone(){return new Promise(c=>{if(this.players.length)return V2(this.players).onDone(()=>c());c()})}processLeaveNode(c){let e=c[e2];if(e&&e.setForRemoval){if(c[e2]=A6,e.namespaceId){this.destroyInnerAnimations(c);let a=this._fetchNamespace(e.namespaceId);a&&a.clearElementCache(c)}this._onRemovalComplete(c,e.setForRemoval)}c.classList?.contains(d3)&&this.markElementAsDisabled(c,!1),this.driver.query(c,N5,!0).forEach(a=>{this.markElementAsDisabled(a,!1)})}flush(c=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((a,r)=>this._balanceNamespaceList(a,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let a=0;a<this.collectedEnterElements.length;a++){let r=this.collectedEnterElements[a];c2(r,w5)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let a=[];try{e=this._flushAnimations(a,c)}finally{for(let r=0;r<a.length;r++)a[r]()}}else for(let a=0;a<this.collectedLeaveElements.length;a++){let r=this.collectedLeaveElements[a];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(a=>a()),this._flushFns=[],this._whenQuietFns.length){let a=this._whenQuietFns;this._whenQuietFns=[],e.length?V2(e).onDone(()=>{a.forEach(r=>r())}):a.forEach(r=>r())}}reportError(c){throw $8(c)}_flushAnimations(c,e){let a=new e1,r=[],s=new Map,n=[],l=new Map,m=new Map,h=new Map,u=new Set;this.disabledNodes.forEach(V=>{u.add(V);let L=this.driver.query(V,b5,!0);for(let x=0;x<L.length;x++)u.add(L[x])});let v=this.bodyNode,p=Array.from(this.statesByElement.keys()),d=V6(p,this.collectedEnterElements),H=new Map,g=0;d.forEach((V,L)=>{let x=S6+g++;H.set(L,x),V.forEach(N=>c2(N,x))});let y=[],A=new Set,b=new Set;for(let V=0;V<this.collectedLeaveElements.length;V++){let L=this.collectedLeaveElements[V],x=L[e2];x&&x.setForRemoval&&(y.push(L),A.add(L),x.hasAnimation?this.driver.query(L,k5,!0).forEach(N=>A.add(N)):b.add(L))}let k=new Map,E=V6(p,Array.from(A));E.forEach((V,L)=>{let x=V3+g++;k.set(L,x),V.forEach(N=>c2(N,x))}),c.push(()=>{d.forEach((V,L)=>{let x=H.get(L);V.forEach(N=>I2(N,x))}),E.forEach((V,L)=>{let x=k.get(L);V.forEach(N=>I2(N,x))}),y.forEach(V=>{this.processLeaveNode(V)})});let R=[],O=[];for(let V=this._namespaceList.length-1;V>=0;V--)this._namespaceList[V].drainQueuedTransitions(e).forEach(x=>{let N=x.player,q=x.element;if(R.push(N),this.collectedEnterElements.length){let W=q[e2];if(W&&W.setForMove){if(W.previousTriggersValues&&W.previousTriggersValues.has(x.triggerName)){let S2=W.previousTriggersValues.get(x.triggerName),J=this.statesByElement.get(x.element);if(J&&J.has(x.triggerName)){let p1=J.get(x.triggerName);p1.value=S2,J.set(x.triggerName,p1)}}N.destroy();return}}let i2=!v||!this.driver.containsElement(v,q),$=k.get(q),v2=H.get(q),D=this._buildInstruction(x,a,v2,$,i2);if(D.errors&&D.errors.length){O.push(D);return}if(i2){N.onStart(()=>w2(q,D.fromStyles)),N.onDestroy(()=>s2(q,D.toStyles)),r.push(N);return}if(x.isFallbackTransition){N.onStart(()=>w2(q,D.fromStyles)),N.onDestroy(()=>s2(q,D.toStyles)),r.push(N);return}let E4=[];D.timelines.forEach(W=>{W.stretchStartingKeyframe=!0,this.disabledNodes.has(W.element)||E4.push(W)}),D.timelines=E4,a.append(q,D.timelines);let m8={instruction:D,player:N,element:q};n.push(m8),D.queriedElements.forEach(W=>Y(l,W,[]).push(N)),D.preStyleProps.forEach((W,S2)=>{if(W.size){let J=m.get(S2);J||m.set(S2,J=new Set),W.forEach((p1,n3)=>J.add(n3))}}),D.postStyleProps.forEach((W,S2)=>{let J=h.get(S2);J||h.set(S2,J=new Set),W.forEach((p1,n3)=>J.add(n3))})});if(O.length){let V=[];O.forEach(L=>{V.push(Q8(L.triggerName,L.errors))}),R.forEach(L=>L.destroy()),this.reportError(V)}let _=new Map,U=new Map;n.forEach(V=>{let L=V.element;a.has(L)&&(U.set(L,L),this._beforeAnimationBuild(V.player.namespaceId,V.instruction,_))}),r.forEach(V=>{let L=V.element;this._getPreviousPlayers(L,!1,V.namespaceId,V.triggerName,null).forEach(N=>{Y(_,L,[]).push(N),N.destroy()})});let G=y.filter(V=>M6(V,m,h)),u2=new Map;z6(u2,this.driver,b,h,r2).forEach(V=>{M6(V,m,h)&&G.push(V)});let x2=new Map;d.forEach((V,L)=>{z6(x2,this.driver,new Set(V),m,x1)}),G.forEach(V=>{let L=u2.get(V),x=x2.get(V);u2.set(V,new Map([...L?.entries()??[],...x?.entries()??[]]))});let t3=[],k4=[],A4={};n.forEach(V=>{let{element:L,player:x,instruction:N}=V;if(a.has(L)){if(u.has(L)){x.onDestroy(()=>s2(L,N.toStyles)),x.disabled=!0,x.overrideTotalTime(N.totalTime),r.push(x);return}let q=A4;if(U.size>1){let $=L,v2=[];for(;$=$.parentNode;){let D=U.get($);if(D){q=D;break}v2.push($)}v2.forEach(D=>U.set(D,q))}let i2=this._buildAnimation(x.namespaceId,N,_,s,x2,u2);if(x.setRealPlayer(i2),q===A4)t3.push(x);else{let $=this.playersByElement.get(q);$&&$.length&&(x.parentPlayer=V2($)),r.push(x)}}else w2(L,N.fromStyles),x.onDestroy(()=>s2(L,N.toStyles)),k4.push(x),u.has(L)&&r.push(x)}),k4.forEach(V=>{let L=s.get(V.element);if(L&&L.length){let x=V2(L);V.setRealPlayer(x)}}),r.forEach(V=>{V.parentPlayer?V.syncPlayerEvents(V.parentPlayer):V.destroy()});for(let V=0;V<y.length;V++){let L=y[V],x=L[e2];if(I2(L,V3),x&&x.hasAnimation)continue;let N=[];if(l.size){let i2=l.get(L);i2&&i2.length&&N.push(...i2);let $=this.driver.query(L,M3,!0);for(let v2=0;v2<$.length;v2++){let D=l.get($[v2]);D&&D.length&&N.push(...D)}}let q=N.filter(i2=>!i2.destroyed);q.length?D5(this,L,q):this.processLeaveNode(L)}return y.length=0,t3.forEach(V=>{this.players.push(V),V.onDone(()=>{V.destroy();let L=this.players.indexOf(V);this.players.splice(L,1)}),V.play()}),t3}afterFlush(c){this._flushFns.push(c)}afterFlushAnimationsDone(c){this._whenQuietFns.push(c)}_getPreviousPlayers(c,e,a,r,s){let n=[];if(e){let l=this.playersByQueriedElement.get(c);l&&(n=l)}else{let l=this.playersByElement.get(c);if(l){let m=!s||s==Z2;l.forEach(h=>{h.queued||!m&&h.triggerName!=r||n.push(h)})}}return(a||r)&&(n=n.filter(l=>!(a&&a!=l.namespaceId||r&&r!=l.triggerName))),n}_beforeAnimationBuild(c,e,a){let r=e.triggerName,s=e.element,n=e.isRemovalTransition?void 0:c,l=e.isRemovalTransition?void 0:r;for(let m of e.timelines){let h=m.element,u=h!==s,v=Y(a,h,[]);this._getPreviousPlayers(h,u,n,l,e.toState).forEach(d=>{let H=d.getRealPlayer();H.beforeDestroy&&H.beforeDestroy(),d.destroy(),v.push(d)})}w2(s,e.fromStyles)}_buildAnimation(c,e,a,r,s,n){let l=e.triggerName,m=e.element,h=[],u=new Set,v=new Set,p=e.timelines.map(H=>{let g=H.element;u.add(g);let y=g[e2];if(y&&y.removedBeforeQueried)return new z2(H.duration,H.delay);let A=g!==m,b=F5((a.get(g)||A5).map(_=>_.getRealPlayer())).filter(_=>{let U=_;return U.element?U.element===g:!1}),k=s.get(g),E=n.get(g),R=g6(this._normalizer,H.keyframes,k,E),O=this._buildPlayer(H,R,b);if(H.subTimeline&&r&&v.add(g),A){let _=new i1(c,l,g);_.setRealPlayer(O),h.push(_)}return O});h.forEach(H=>{Y(this.playersByQueriedElement,H.element,[]).push(H),H.onDone(()=>T5(this.playersByQueriedElement,H.element,H))}),u.forEach(H=>c2(H,f6));let d=V2(p);return d.onDestroy(()=>{u.forEach(H=>I2(H,f6)),s2(m,e.toStyles)}),v.forEach(H=>{Y(r,H,[]).push(d)}),d}_buildPlayer(c,e,a){return e.length>0?this.driver.animate(c.element,e,c.duration,c.delay,c.easing,a):new z2(c.duration,c.delay)}},i1=class{constructor(c,e,a){this.namespaceId=c,this.triggerName=e,this.element=a,this._player=new z2,this._containsRealPlayer=!1,this._queuedCallbacks=new Map,this.destroyed=!1,this.parentPlayer=null,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(c){this._containsRealPlayer||(this._player=c,this._queuedCallbacks.forEach((e,a)=>{e.forEach(r=>_3(c,a,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(c.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(c){this.totalTime=c}syncPlayerEvents(c){let e=this._player;e.triggerCallback&&c.onStart(()=>e.triggerCallback("start")),c.onDone(()=>this.finish()),c.onDestroy(()=>this.destroy())}_queueEvent(c,e){Y(this._queuedCallbacks,c,[]).push(e)}onDone(c){this.queued&&this._queueEvent("done",c),this._player.onDone(c)}onStart(c){this.queued&&this._queueEvent("start",c),this._player.onStart(c)}onDestroy(c){this.queued&&this._queueEvent("destroy",c),this._player.onDestroy(c)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(c){this.queued||this._player.setPosition(c)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(c){let e=this._player;e.triggerCallback&&e.triggerCallback(c)}};U2=class{constructor(c,e,a){this._driver=e,this._normalizer=a,this._triggerCache={},this.onRemovalComplete=(r,s)=>{},this._transitionEngine=new E3(c.body,e,a),this._timelineEngine=new k3(c.body,e,a),this._transitionEngine.onRemovalComplete=(r,s)=>this.onRemovalComplete(r,s)}registerTrigger(c,e,a,r,s){let n=c+"-"+r,l=this._triggerCache[n];if(!l){let m=[],h=[],u=N6(this._driver,s,m,h);if(m.length)throw B8(r,m);h.length&&void 0,l=x5(r,u,this._normalizer),this._triggerCache[n]=l}this._transitionEngine.registerTrigger(e,r,l)}register(c,e){this._transitionEngine.register(c,e)}destroy(c,e){this._transitionEngine.destroy(c,e)}onInsert(c,e,a,r){this._transitionEngine.insertNode(c,e,a,r)}onRemove(c,e,a){this._transitionEngine.removeNode(c,e,a)}disableAnimations(c,e){this._transitionEngine.markElementAsDisabled(c,e)}process(c,e,a,r){if(a.charAt(0)=="@"){let[s,n]=l6(a),l=r;this._timelineEngine.command(s,e,n,l)}else this._transitionEngine.trigger(c,e,a,r)}listen(c,e,a,r,s){if(a.charAt(0)=="@"){let[n,l]=l6(a);return this._timelineEngine.listen(n,e,l,s)}return this._transitionEngine.listen(c,e,a,r,s)}flush(c=-1){this._transitionEngine.flush(c)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(c){this._transitionEngine.afterFlushAnimationsDone(c)}};O2=class O2{constructor(c,e,a){this._element=c,this._startStyles=e,this._endStyles=a,this._state=0;let r=O2.initialStylesByElement.get(c);r||O2.initialStylesByElement.set(c,r=new Map),this._initialStyles=r}start(){this._state<1&&(this._startStyles&&s2(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(s2(this._element,this._initialStyles),this._endStyles&&(s2(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(O2.initialStylesByElement.delete(this._element),this._startStyles&&(w2(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(w2(this._element,this._endStyles),this._endStyles=null),s2(this._element,this._initialStyles),this._state=3)}};O2.initialStylesByElement=new WeakMap;T3=O2;F1=class{constructor(c,e,a,r){this.element=c,this.keyframes=e,this.options=a,this._specialStyles=r,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this._originalOnDoneFns=[],this._originalOnStartFns=[],this.time=0,this.parentPlayer=null,this.currentSnapshot=new Map,this._duration=a.duration,this._delay=a.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(c=>c()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;let c=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,c,this.options),this._finalKeyframe=c.length?c[c.length-1]:new Map;let e=()=>this._onFinish();this.domPlayer.addEventListener("finish",e),this.onDestroy(()=>{this.domPlayer.removeEventListener("finish",e)})}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(c){let e=[];return c.forEach(a=>{e.push(Object.fromEntries(a))}),e}_triggerWebAnimation(c,e,a){return c.animate(this._convertKeyframesToObject(e),a)}onStart(c){this._originalOnStartFns.push(c),this._onStartFns.push(c)}onDone(c){this._originalOnDoneFns.push(c),this._onDoneFns.push(c)}onDestroy(c){this._onDestroyFns.push(c)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(c=>c()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(c=>c()),this._onDestroyFns=[])}setPosition(c){this.domPlayer===void 0&&this.init(),this.domPlayer.currentTime=c*this.time}getPosition(){return+(this.domPlayer.currentTime??0)/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){let c=new Map;this.hasStarted()&&this._finalKeyframe.forEach((a,r)=>{r!=="offset"&&c.set(r,this._finished?a:I3(this.element,r))}),this.currentSnapshot=c}triggerCallback(c){let e=c==="start"?this._onStartFns:this._onDoneFns;e.forEach(a=>a()),e.length=0}},B1=class{validateStyleProperty(c){return!0}validateAnimatableStyleProperty(c){return!0}containsElement(c,e){return C6(c,e)}getParentElement(c){return F3(c)}query(c,e,a){return L6(c,e,a)}computeStyle(c,e,a){return I3(c,e)}animate(c,e,a,r,s,n=[]){let l=r==0?"both":"forwards",m={duration:a,delay:r,fill:l};s&&(m.easing=s);let h=new Map,u=n.filter(d=>d instanceof F1);t5(a,r)&&u.forEach(d=>{d.currentSnapshot.forEach((H,g)=>h.set(g,H))});let v=i5(e).map(d=>new Map(d));v=n5(c,v,h);let p=R5(c,v);return new F1(c,v,m,p)}},w1="@",T6="@.disabled",R1=class{constructor(c,e,a,r){this.namespaceId=c,this.delegate=e,this.engine=a,this._onDestroy=r,this.\u0275type=0}get data(){return this.delegate.data}destroyNode(c){this.delegate.destroyNode?.(c)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(c,e){return this.delegate.createElement(c,e)}createComment(c){return this.delegate.createComment(c)}createText(c){return this.delegate.createText(c)}appendChild(c,e){this.delegate.appendChild(c,e),this.engine.onInsert(this.namespaceId,e,c,!1)}insertBefore(c,e,a,r=!0){this.delegate.insertBefore(c,e,a),this.engine.onInsert(this.namespaceId,e,c,r)}removeChild(c,e,a){this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(c,e){return this.delegate.selectRootElement(c,e)}parentNode(c){return this.delegate.parentNode(c)}nextSibling(c){return this.delegate.nextSibling(c)}setAttribute(c,e,a,r){this.delegate.setAttribute(c,e,a,r)}removeAttribute(c,e,a){this.delegate.removeAttribute(c,e,a)}addClass(c,e){this.delegate.addClass(c,e)}removeClass(c,e){this.delegate.removeClass(c,e)}setStyle(c,e,a,r){this.delegate.setStyle(c,e,a,r)}removeStyle(c,e,a){this.delegate.removeStyle(c,e,a)}setProperty(c,e,a){e.charAt(0)==w1&&e==T6?this.disableAnimations(c,!!a):this.delegate.setProperty(c,e,a)}setValue(c,e){this.delegate.setValue(c,e)}listen(c,e,a){return this.delegate.listen(c,e,a)}disableAnimations(c,e){this.engine.disableAnimations(c,e)}},P3=class extends R1{constructor(c,e,a,r,s){super(e,a,r,s),this.factory=c,this.namespaceId=e}setProperty(c,e,a){e.charAt(0)==w1?e.charAt(1)=="."&&e==T6?(a=a===void 0?!0:!!a,this.disableAnimations(c,a)):this.engine.process(this.namespaceId,c,e.slice(1),a):this.delegate.setProperty(c,e,a)}listen(c,e,a){if(e.charAt(0)==w1){let r=O5(c),s=e.slice(1),n="";return s.charAt(0)!=w1&&([s,n]=U5(s)),this.engine.listen(this.namespaceId,r,s,n,l=>{let m=l._data||-1;this.factory.scheduleListenerCallback(m,a,l)})}return this.delegate.listen(c,e,a)}};I1=class{constructor(c,e,a){this.delegate=c,this.engine=e,this._zone=a,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,e.onRemovalComplete=(r,s)=>{let n=s?.parentNode(r);n&&s.removeChild(n,r)}}createRenderer(c,e){let a="",r=this.delegate.createRenderer(c,e);if(!c||!e?.data?.animation){let h=this._rendererCache,u=h.get(r);if(!u){let v=()=>h.delete(r);u=new R1(a,r,this.engine,v),h.set(r,u)}return u}let s=e.id,n=e.id+"-"+this._currentId;this._currentId++,this.engine.register(n,c);let l=h=>{Array.isArray(h)?h.forEach(l):this.engine.registerTrigger(s,n,c,h.name,h)};return e.data.animation.forEach(l),new P3(this,n,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(c,e,a){if(c>=0&&c<this._microtaskId){this._zone.run(()=>e(a));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(s=>{let[n,l]=s;n(l)}),this._animationCallbacksBuffer=[]})}),r.push([e,a])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}});function W5(){return new E1}function j5(i,c,e){return new I1(i,c,e)}var G5,_6,P6,K5,D6,F6=B(()=>{"use strict";K();K();f3();q3();q3();o3();G5=(()=>{let c=class c extends U2{constructor(a,r,s){super(a,r,s)}ngOnDestroy(){this.flush()}};c.\u0275fac=function(r){return new(r||c)(F2(F4),F2(k2),F2(A2))},c.\u0275prov=H1({token:c,factory:c.\u0275fac});let i=c;return i})();_6=[{provide:A2,useFactory:W5},{provide:U2,useClass:G5},{provide:P4,useFactory:j5,deps:[U4,U2,_4]}],P6=[{provide:k2,useFactory:()=>new B1},{provide:l3,useValue:"BrowserAnimations"},..._6],K5=[{provide:k2,useClass:B3},{provide:l3,useValue:"NoopAnimations"},..._6],D6=(()=>{let c=class c{static withConfig(a){return{ngModule:c,providers:a.disableAnimations?K5:P6}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=d2({type:c}),c.\u0275inj=p2({providers:P6,imports:[M1]});let i=c;return i})()});function B6(i,c){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);c&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),e.push.apply(e,a)}return e}function z(i){for(var c=1;c<arguments.length;c++){var e=arguments[c]!=null?arguments[c]:{};c%2?B6(Object(e),!0).forEach(function(a){I(i,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):B6(Object(e)).forEach(function(a){Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(e,a))})}return i}function J1(i){"@babel/helpers - typeof";return J1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},J1(i)}function $5(i,c){if(!(i instanceof c))throw new TypeError("Cannot call a class as a function")}function R6(i,c){for(var e=0;e<c.length;e++){var a=c[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}function Q5(i,c,e){return c&&R6(i.prototype,c),e&&R6(i,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function I(i,c,e){return c in i?Object.defineProperty(i,c,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[c]=e,i}function s4(i,c){return X5(i)||Z5(i,c)||f0(i,c)||e7()}function h1(i){return Y5(i)||J5(i)||f0(i)||c7()}function Y5(i){if(Array.isArray(i))return $3(i)}function X5(i){if(Array.isArray(i))return i}function J5(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Z5(i,c){var e=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(e!=null){var a=[],r=!0,s=!1,n,l;try{for(e=e.call(i);!(r=(n=e.next()).done)&&(a.push(n.value),!(c&&a.length===c));r=!0);}catch(m){s=!0,l=m}finally{try{!r&&e.return!=null&&e.return()}finally{if(s)throw l}}return a}}function f0(i,c){if(i){if(typeof i=="string")return $3(i,c);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return $3(i,c)}}function $3(i,c){(c==null||c>i.length)&&(c=i.length);for(var e=0,a=new Array(c);e<c;e++)a[e]=i[e];return a}function c7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u1(i){return new Proxy(i,{get:function(e,a){return a in e?e[a]:e[T]}})}function u7(i){var c=P.querySelector("script["+i+"]");if(c)return c.getAttribute(i)}function v7(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}function p7(i){return t1.push(i),function(){t1.splice(t1.indexOf(i),1)}}function d7(i){if(!(!i||!h2)){var c=P.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=i;for(var e=P.head.childNodes,a=null,r=e.length-1;r>-1;r--){var s=e[r],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(a=s)}return P.head.insertBefore(c,a),i}}function m1(){for(var i=12,c="";i-- >0;)c+=H7[Math.random()*62|0];return c}function K2(i){for(var c=[],e=(i||[]).length>>>0;e--;)c[e]=i[e];return c}function f4(i){return i.classList?K2(i.classList):(i.getAttribute("class")||"").split(" ").filter(function(c){return c})}function g0(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function z7(i){return Object.keys(i||{}).reduce(function(c,e){return c+"".concat(e,'="').concat(g0(i[e]),'" ')},"").trim()}function e3(i){return Object.keys(i||{}).reduce(function(c,e){return c+"".concat(e,": ").concat(i[e].trim(),";")},"")}function m4(i){return i.size!==n2.size||i.x!==n2.x||i.y!==n2.y||i.rotate!==n2.rotate||i.flipX||i.flipY}function V7(i){var c=i.transform,e=i.containerWidth,a=i.iconWidth,r={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(c.x*32,", ").concat(c.y*32,") "),n="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),l="rotate(".concat(c.rotate," 0 0)"),m={transform:"".concat(s," ").concat(n," ").concat(l)},h={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:m,path:h}}function M7(i){var c=i.transform,e=i.width,a=e===void 0?Q3:e,r=i.height,s=r===void 0?Q3:r,n=i.startCentered,l=n===void 0?!1:n,m="";return l&&v0?m+="translate(".concat(c.x/M2-a/2,"em, ").concat(c.y/M2-s/2,"em) "):l?m+="translate(calc(-50% + ".concat(c.x/M2,"em), calc(-50% + ").concat(c.y/M2,"em)) "):m+="translate(".concat(c.x/M2,"em, ").concat(c.y/M2,"em) "),m+="scale(".concat(c.size/M2*(c.flipX?-1:1),", ").concat(c.size/M2*(c.flipY?-1:1),") "),m+="rotate(".concat(c.rotate,"deg) "),m}function C0(){var i=p0,c=d0,e=M.cssPrefix,a=M.replacementClass,r=g7;if(e!==i||a!==c){var s=new RegExp("\\.".concat(i,"\\-"),"g"),n=new RegExp("\\--".concat(i,"\\-"),"g"),l=new RegExp("\\.".concat(c),"g");r=r.replace(s,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(l,".".concat(a))}return r}function G3(){M.autoAddCss&&!j6&&(d7(C0()),j6=!0)}function x7(i){h2&&(Z1?setTimeout(i,0):L0.push(i))}function v1(i){var c=i.tag,e=i.attributes,a=e===void 0?{}:e,r=i.children,s=r===void 0?[]:r;return typeof i=="string"?g0(i):"<".concat(c," ").concat(z7(a),">").concat(s.map(v1).join(""),"</").concat(c,">")}function K6(i,c,e){if(i&&i[c]&&i[c][e])return{prefix:c,iconName:e,icon:i[c][e]}}function y7(i){for(var c=[],e=0,a=i.length;e<a;){var r=i.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var s=i.charCodeAt(e++);(s&64512)==56320?c.push(((r&1023)<<10)+(s&1023)+65536):(c.push(r),e--)}else c.push(r)}return c}function X3(i){var c=y7(i);return c.length===1?c[0].toString(16):null}function b7(i,c){var e=i.length,a=i.charCodeAt(c),r;return a>=55296&&a<=56319&&e>c+1&&(r=i.charCodeAt(c+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function $6(i){return Object.keys(i).reduce(function(c,e){var a=i[e],r=!!a.icon;return r?c[a.iconName]=a.icon:c[e]=a,c},{})}function J3(i,c){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,s=$6(c);typeof a2.hooks.addPack=="function"&&!r?a2.hooks.addPack(i,$6(c)):a2.styles[i]=z(z({},a2.styles[i]||{}),s),i==="fas"&&J3("fa",c)}function A7(i){return~h7.indexOf(i)}function E7(i,c){var e=c.split("-"),a=e[0],r=e.slice(1).join("-");return a===i&&r!==""&&!A7(r)?r:null}function u4(i,c){return(x0[i]||{})[c]}function T7(i,c){return(S0[i]||{})[c]}function T2(i,c){return(N0[i]||{})[c]}function k0(i){return y0[i]||{prefix:null,iconName:null}}function P7(i){var c=b0[i],e=u4("fas",i);return c||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function C2(){return h4}function a3(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.family,a=e===void 0?T:e,r=n1[a][i],s=l1[a][i]||l1[a][r],n=i in a2.styles?i:null;return s||n||null}function i3(i){var c,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,s=(c={},I(c,T,"".concat(M.cssPrefix,"-").concat(T)),I(c,F,"".concat(M.cssPrefix,"-").concat(F)),c),n=null,l=T;(i.includes(s[T])||i.some(function(h){return Q6[T].includes(h)}))&&(l=T),(i.includes(s[F])||i.some(function(h){return Q6[F].includes(h)}))&&(l=F);var m=i.reduce(function(h,u){var v=E7(M.cssPrefix,u);if(q2[u]?(u=w7[l].includes(u)?t7[l][u]:u,n=u,h.prefix=u):k7[l].indexOf(u)>-1?(n=u,h.prefix=a3(u,{family:l})):v?h.iconName=v:u!==M.replacementClass&&u!==s[T]&&u!==s[F]&&h.rest.push(u),!r&&h.prefix&&h.iconName){var p=n==="fa"?k0(h.iconName):{},d=T2(h.prefix,h.iconName);p.prefix&&(n=null),h.iconName=p.iconName||d||h.iconName,h.prefix=p.prefix||h.prefix,h.prefix==="far"&&!q2.far&&q2.fas&&!M.autoFetchSvg&&(h.prefix="fas")}return h},v4());return(i.includes("fa-brands")||i.includes("fab"))&&(m.prefix="fab"),(i.includes("fa-duotone")||i.includes("fad"))&&(m.prefix="fad"),!m.prefix&&l===F&&(q2.fass||M.autoFetchSvg)&&(m.prefix="fass",m.iconName=T2(m.prefix,m.iconName)||m.iconName),(m.prefix==="fa"||n==="fa")&&(m.prefix=C2()||"fas"),m}function F7(i,c){var e=c.mixoutsTo;return Y6=i,G2={},Object.keys(W2).forEach(function(a){D7.indexOf(a)===-1&&delete W2[a]}),Y6.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(e[n]=r[n]),J1(r[n])==="object"&&Object.keys(r[n]).forEach(function(l){e[n]||(e[n]={}),e[n][l]=r[n][l]})}),a.hooks){var s=a.hooks();Object.keys(s).forEach(function(n){G2[n]||(G2[n]=[]),G2[n].push(s[n])})}a.provides&&a.provides(W2)}),e}function Z3(i,c){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var s=G2[i]||[];return s.forEach(function(n){c=n.apply(null,[c].concat(a))}),c}function _2(i){for(var c=arguments.length,e=new Array(c>1?c-1:0),a=1;a<c;a++)e[a-1]=arguments[a];var r=G2[i]||[];r.forEach(function(s){s.apply(null,e)})}function m2(){var i=arguments[0],c=Array.prototype.slice.call(arguments,1);return W2[i]?W2[i].apply(null,c):void 0}function c4(i){i.prefix==="fa"&&(i.prefix="fas");var c=i.iconName,e=i.prefix||C2();if(c)return c=T2(e,c)||c,K6(A0.definitions,e,c)||K6(a2.styles,e,c)}function r3(i,c){return Object.defineProperty(i,"abstract",{get:c}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(function(a){return v1(a)})}}),Object.defineProperty(i,"node",{get:function(){if(h2){var a=P.createElement("div");return a.innerHTML=i.html,a.children}}}),i}function U7(i){var c=i.children,e=i.main,a=i.mask,r=i.attributes,s=i.styles,n=i.transform;if(m4(n)&&e.found&&!a.found){var l=e.width,m=e.height,h={x:l/m/2,y:.5};r.style=e3(z(z({},s),{},{"transform-origin":"".concat(h.x+n.x/16,"em ").concat(h.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:c}]}function q7(i){var c=i.prefix,e=i.iconName,a=i.children,r=i.attributes,s=i.symbol,n=s===!0?"".concat(c,"-").concat(M.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},r),{},{id:n}),children:a}]}]}function p4(i){var c=i.icons,e=c.main,a=c.mask,r=i.prefix,s=i.iconName,n=i.transform,l=i.symbol,m=i.title,h=i.maskId,u=i.titleId,v=i.extra,p=i.watchable,d=p===void 0?!1:p,H=a.found?a:e,g=H.width,y=H.height,A=r==="fak",b=[M.replacementClass,s?"".concat(M.cssPrefix,"-").concat(s):""].filter(function(G){return v.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(v.classes).join(" "),k={children:[],attributes:z(z({},v.attributes),{},{"data-prefix":r,"data-icon":s,class:b,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(y)})},E=A&&!~v.classes.indexOf("fa-fw")?{width:"".concat(g/y*16*.0625,"em")}:{};d&&(k.attributes[P2]=""),m&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||m1())},children:[m]}),delete k.attributes.title);var R=z(z({},k),{},{prefix:r,iconName:s,main:e,mask:a,maskId:h,transform:n,symbol:l,styles:z(z({},E),v.styles)}),O=a.found&&e.found?m2("generateAbstractMask",R)||{children:[],attributes:{}}:m2("generateAbstractIcon",R)||{children:[],attributes:{}},_=O.children,U=O.attributes;return R.children=_,R.attributes=U,l?q7(R):U7(R)}function X6(i){var c=i.content,e=i.width,a=i.height,r=i.transform,s=i.title,n=i.extra,l=i.watchable,m=l===void 0?!1:l,h=z(z(z({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});m&&(h[P2]="");var u=z({},n.styles);m4(r)&&(u.transform=M7({transform:r,startCentered:!0,width:e,height:a}),u["-webkit-transform"]=u.transform);var v=e3(u);v.length>0&&(h.style=v);var p=[];return p.push({tag:"span",attributes:h,children:[c]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function G7(i){var c=i.content,e=i.title,a=i.extra,r=z(z(z({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),s=e3(a.styles);s.length>0&&(r.style=s);var n=[];return n.push({tag:"span",attributes:r,children:[c]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}function e4(i){var c=i[0],e=i[1],a=i.slice(4),r=s4(a,1),s=r[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(E2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(E2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(E2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:c,height:e,icon:n}}function j7(i,c){!H0&&!M.showMissingIcons&&i&&console.error('Icon with name "'.concat(i,'" and prefix "').concat(c,'" is missing.'))}function a4(i,c){var e=c;return c==="fa"&&M.styleDefault!==null&&(c=C2()),new Promise(function(a,r){var s={found:!1,width:512,height:512,icon:m2("missingIconAbstract")||{}};if(e==="fa"){var n=k0(i)||{};i=n.iconName||i,c=n.prefix||c}if(i&&c&&j3[c]&&j3[c][i]){var l=j3[c][i];return a(e4(l))}j7(i,c),a(z(z({},W7),{},{icon:M.showMissingIcons&&i?m2("missingIconAbstract")||{}:{}}))})}function Z6(i){var c=i.getAttribute?i.getAttribute(P2):null;return typeof c=="string"}function $7(i){var c=i.getAttribute?i.getAttribute(n4):null,e=i.getAttribute?i.getAttribute(l4):null;return c&&e}function Q7(i){return i&&i.classList&&i.classList.contains&&i.classList.contains(M.replacementClass)}function Y7(){if(M.autoReplaceSvg===!0)return X1.replace;var i=X1[M.autoReplaceSvg];return i||X1.replace}function X7(i){return P.createElementNS("http://www.w3.org/2000/svg",i)}function J7(i){return P.createElement(i)}function T0(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.ceFn,a=e===void 0?i.tag==="svg"?X7:J7:e;if(typeof i=="string")return P.createTextNode(i);var r=a(i.tag);Object.keys(i.attributes||[]).forEach(function(n){r.setAttribute(n,i.attributes[n])});var s=i.children||[];return s.forEach(function(n){r.appendChild(T0(n,{ceFn:a}))}),r}function Z7(i){var c=" ".concat(i.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}function c0(i){i()}function P0(i,c){var e=typeof c=="function"?c:Y1;if(i.length===0)e();else{var a=c0;M.mutateApproach===r7&&(a=g2.requestAnimationFrame||c0),a(function(){var r=Y7(),s=d4.begin("mutate");i.map(r),s(),e()})}}function _0(){H4=!0}function r4(){H4=!1}function e0(i){if(q6&&M.observeMutations){var c=i.treeCallback,e=c===void 0?Y1:c,a=i.nodeCallback,r=a===void 0?Y1:a,s=i.pseudoElementsCallback,n=s===void 0?Y1:s,l=i.observeMutationsRoot,m=l===void 0?P:l;c3=new q6(function(h){if(!H4){var u=C2();K2(h).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!Z6(v.addedNodes[0])&&(M.searchPseudoElements&&n(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&M.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&Z6(v.target)&&~m7.indexOf(v.attributeName))if(v.attributeName==="class"&&$7(v.target)){var p=i3(f4(v.target)),d=p.prefix,H=p.iconName;v.target.setAttribute(n4,d||u),H&&v.target.setAttribute(l4,H)}else Q7(v.target)&&r(v.target)})}}),h2&&c3.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function cc(){c3&&c3.disconnect()}function ec(i){var c=i.getAttribute("style"),e=[];return c&&(e=c.split(";").reduce(function(a,r){var s=r.split(":"),n=s[0],l=s.slice(1);return n&&l.length>0&&(a[n]=l.join(":").trim()),a},{})),e}function ac(i){var c=i.getAttribute("data-prefix"),e=i.getAttribute("data-icon"),a=i.innerText!==void 0?i.innerText.trim():"",r=i3(f4(i));return r.prefix||(r.prefix=C2()),c&&e&&(r.prefix=c,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=T7(r.prefix,i.innerText)||u4(r.prefix,X3(i.innerText))),!r.iconName&&M.autoFetchSvg&&i.firstChild&&i.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=i.firstChild.data)),r}function ic(i){var c=K2(i.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),e=i.getAttribute("title"),a=i.getAttribute("data-fa-title-id");return M.autoA11y&&(e?c["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(a||m1()):(c["aria-hidden"]="true",c.focusable="false")),c}function rc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:n2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function a0(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=ac(i),a=e.iconName,r=e.prefix,s=e.rest,n=ic(i),l=Z3("parseNodeAttributes",{},i),m=c.styleParser?ec(i):[];return z({iconName:a,title:i.getAttribute("title"),titleId:i.getAttribute("data-fa-title-id"),prefix:r,transform:n2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:m,attributes:n}},l)}function D0(i){var c=M.autoReplaceSvg==="nest"?a0(i,{styleParser:!1}):a0(i);return~c.extra.classes.indexOf(z0)?m2("generateLayersText",i,c):m2("generateSvgReplacementMutation",i,c)}function i0(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!h2)return Promise.resolve();var e=P.documentElement.classList,a=function(v){return e.add("".concat(G6,"-").concat(v))},r=function(v){return e.remove("".concat(G6,"-").concat(v))},s=M.autoFetchSvg?L2:o4.map(function(u){return"fa-".concat(u)}).concat(Object.keys(sc));s.includes("fa")||s.push("fa");var n=[".".concat(z0,":not([").concat(P2,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(P2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=K2(i.querySelectorAll(n))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();var m=d4.begin("onTree"),h=l.reduce(function(u,v){try{var p=D0(v);p&&u.push(p)}catch(d){H0||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,v){Promise.all(h).then(function(p){P0(p,function(){a("active"),a("complete"),r("pending"),typeof c=="function"&&c(),m(),u()})}).catch(function(p){m(),v(p)})})}function tc(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;D0(i).then(function(e){e&&P0([e],c)})}function nc(i){return function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(c||{}).icon?c:c4(c||{}),r=e.mask;return r&&(r=(r||{}).icon?r:c4(r||{})),i(a,z(z({},e),{},{mask:r}))}}function vc(i){var c=i.replace(uc,""),e=b7(c,0),a=e>=r0[0]&&e<=r0[1],r=c.length===2?c[0]===c[1]:!1;return{value:X3(r?c[0]:c),isSecondary:a||r}}function s0(i,c){var e="".concat(i7).concat(c.replace(":","-"));return new Promise(function(a,r){if(i.getAttribute(e)!==null)return a();var s=K2(i.children),n=s.filter(function(_){return _.getAttribute(Y3)===c})[0],l=g2.getComputedStyle(i,c),m=l.getPropertyValue("font-family").match(l7),h=l.getPropertyValue("font-weight"),u=l.getPropertyValue("content");if(n&&!m)return i.removeChild(n),a();if(m&&u!=="none"&&u!==""){var v=l.getPropertyValue("content"),p=~["Sharp"].indexOf(m[2])?F:T,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(m[2])?l1[p][m[2].toLowerCase()]:o7[p][h],H=vc(v),g=H.value,y=H.isSecondary,A=m[0].startsWith("FontAwesome"),b=u4(d,g),k=b;if(A){var E=P7(g);E.iconName&&E.prefix&&(b=E.iconName,d=E.prefix)}if(b&&!y&&(!n||n.getAttribute(n4)!==d||n.getAttribute(l4)!==k)){i.setAttribute(e,k),n&&i.removeChild(n);var R=rc(),O=R.extra;O.attributes[Y3]=c,a4(b,d).then(function(_){var U=p4(z(z({},R),{},{icons:{main:_,mask:v4()},prefix:d,iconName:k,extra:O,watchable:!0})),G=P.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?i.insertBefore(G,i.firstChild):i.appendChild(G),G.outerHTML=U.map(function(u2){return v1(u2)}).join(`
`),i.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function pc(i){return Promise.all([s0(i,"::before"),s0(i,"::after")])}function dc(i){return i.parentNode!==document.head&&!~s7.indexOf(i.tagName.toUpperCase())&&!i.getAttribute(Y3)&&(!i.parentNode||i.parentNode.tagName!=="svg")}function t0(i){if(h2)return new Promise(function(c,e){var a=K2(i.querySelectorAll("*")).filter(dc).map(pc),r=d4.begin("searchPseudoElements");_0(),Promise.all(a).then(function(){r(),r4(),c()}).catch(function(){r(),r4(),e()})})}function o0(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||c)&&(i.attributes.fill="black"),i}function Mc(i){return i.tag==="g"?i.children:[i]}var I6,t4,m0,h0,u0,a7,O6,U6,g2,P,q6,O1,Wc,h2,v0,U1,q1,G1,W1,j1,o2,Q3,p0,d0,P2,Y3,i7,n4,l4,G6,r7,s7,H0,T,F,o4,n1,l1,o1,t7,n7,z0,l7,o7,V0,f7,m7,E2,f1,h7,s1,W6,M0,j2,M,t1,M2,n2,H7,g7,j6,C7,f2,a2,L0,L7,Z1,S7,W3,K1,$1,Q1,q2,N7,w7,h4,x0,S0,y0,b0,N0,k7,w0,v4,Q6,_7,Y6,G2,W2,D7,A0,B7,R7,I7,X,O7,j3,W7,J6,i4,r1,K7,E0,d4,Y1,X1,H4,c3,sc,L2,lc,oc,fc,mc,hc,uc,r0,Hc,n0,zc,l0,Vc,K3,gc,Cc,Lc,xc,jc,Kc,F0,B0,$c,Qc,Yc,Xc,Jc,Zc,c9,R0=B(()=>{"use strict";I6=function(){},t4={},m0={},h0=null,u0={mark:I6,measure:I6};try{typeof window<"u"&&(t4=window),typeof document<"u"&&(m0=document),typeof MutationObserver<"u"&&(h0=MutationObserver),typeof performance<"u"&&(u0=performance)}catch{}a7=t4.navigator||{},O6=a7.userAgent,U6=O6===void 0?"":O6,g2=t4,P=m0,q6=h0,O1=u0,Wc=!!g2.document,h2=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",v0=~U6.indexOf("MSIE")||~U6.indexOf("Trident/"),o2="___FONT_AWESOME___",Q3=16,p0="fa",d0="svg-inline--fa",P2="data-fa-i2svg",Y3="data-fa-pseudo-element",i7="data-fa-pseudo-element-pending",n4="data-prefix",l4="data-icon",G6="fontawesome-i2svg",r7="async",s7=["HTML","HEAD","STYLE","SCRIPT"],H0=function(){try{return!0}catch{return!1}}(),T="classic",F="sharp",o4=[T,F];n1=u1((U1={},I(U1,T,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),I(U1,F,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),U1)),l1=u1((q1={},I(q1,T,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),I(q1,F,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),q1)),o1=u1((G1={},I(G1,T,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),I(G1,F,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),G1)),t7=u1((W1={},I(W1,T,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),I(W1,F,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),W1)),n7=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,z0="fa-layers-text",l7=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,o7=u1((j1={},I(j1,T,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),I(j1,F,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),j1)),V0=[1,2,3,4,5,6,7,8,9,10],f7=V0.concat([11,12,13,14,15,16,17,18,19,20]),m7=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],E2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},f1=new Set;Object.keys(l1[T]).map(f1.add.bind(f1));Object.keys(l1[F]).map(f1.add.bind(f1));h7=[].concat(o4,h1(f1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",E2.GROUP,E2.SWAP_OPACITY,E2.PRIMARY,E2.SECONDARY]).concat(V0.map(function(i){return"".concat(i,"x")})).concat(f7.map(function(i){return"w-".concat(i)})),s1=g2.FontAwesomeConfig||{};P&&typeof P.querySelector=="function"&&(W6=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],W6.forEach(function(i){var c=s4(i,2),e=c[0],a=c[1],r=v7(u7(e));r!=null&&(s1[a]=r)}));M0={styleDefault:"solid",familyDefault:"classic",cssPrefix:p0,replacementClass:d0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};s1.familyPrefix&&(s1.cssPrefix=s1.familyPrefix);j2=z(z({},M0),s1);j2.autoReplaceSvg||(j2.observeMutations=!1);M={};Object.keys(M0).forEach(function(i){Object.defineProperty(M,i,{enumerable:!0,set:function(e){j2[i]=e,t1.forEach(function(a){return a(M)})},get:function(){return j2[i]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(c){j2.cssPrefix=c,t1.forEach(function(e){return e(M)})},get:function(){return j2.cssPrefix}});g2.FontAwesomeConfig=M;t1=[];M2=Q3,n2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};H7="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";g7=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
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
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
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
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
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
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
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

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;j6=!1;C7={mixout:function(){return{dom:{css:C0,insertCss:G3}}},hooks:function(){return{beforeDOMElementCreation:function(){G3()},beforeI2svg:function(){G3()}}}},f2=g2||{};f2[o2]||(f2[o2]={});f2[o2].styles||(f2[o2].styles={});f2[o2].hooks||(f2[o2].hooks={});f2[o2].shims||(f2[o2].shims=[]);a2=f2[o2],L0=[],L7=function i(){P.removeEventListener("DOMContentLoaded",i),Z1=1,L0.map(function(c){return c()})},Z1=!1;h2&&(Z1=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),Z1||P.addEventListener("DOMContentLoaded",L7));S7=function(c,e){return function(a,r,s,n){return c.call(e,a,r,s,n)}},W3=function(c,e,a,r){var s=Object.keys(c),n=s.length,l=r!==void 0?S7(e,r):e,m,h,u;for(a===void 0?(m=1,u=c[s[0]]):(m=0,u=a);m<n;m++)h=s[m],u=l(u,c[h],h,c);return u};q2=a2.styles,N7=a2.shims,w7=(K1={},I(K1,T,Object.values(o1[T])),I(K1,F,Object.values(o1[F])),K1),h4=null,x0={},S0={},y0={},b0={},N0={},k7=($1={},I($1,T,Object.keys(n1[T])),I($1,F,Object.keys(n1[F])),$1);w0=function(){var c=function(s){return W3(q2,function(n,l,m){return n[m]=W3(l,s,{}),n},{})};x0=c(function(r,s,n){if(s[3]&&(r[s[3]]=n),s[2]){var l=s[2].filter(function(m){return typeof m=="number"});l.forEach(function(m){r[m.toString(16)]=n})}return r}),S0=c(function(r,s,n){if(r[n]=n,s[2]){var l=s[2].filter(function(m){return typeof m=="string"});l.forEach(function(m){r[m]=n})}return r}),N0=c(function(r,s,n){var l=s[2];return r[n]=n,l.forEach(function(m){r[m]=n}),r});var e="far"in q2||M.autoFetchSvg,a=W3(N7,function(r,s){var n=s[0],l=s[1],m=s[2];return l==="far"&&!e&&(l="fas"),typeof n=="string"&&(r.names[n]={prefix:l,iconName:m}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:l,iconName:m}),r},{names:{},unicodes:{}});y0=a.names,b0=a.unicodes,h4=a3(M.styleDefault,{family:M.familyDefault})};p7(function(i){h4=a3(i.styleDefault,{family:M.familyDefault})});w0();v4=function(){return{prefix:null,iconName:null,rest:[]}};Q6=(Q1={},I(Q1,T,Object.keys(o1[T])),I(Q1,F,Object.keys(o1[F])),Q1);_7=function(){function i(){$5(this,i),this.definitions={}}return Q5(i,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){e.definitions[l]=z(z({},e.definitions[l]||{}),n[l]),J3(l,n[l]);var m=o1[T][l];m&&J3(m,n[l]),w0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(s){var n=r[s],l=n.prefix,m=n.iconName,h=n.icon,u=h[2];e[l]||(e[l]={}),u.length>0&&u.forEach(function(v){typeof v=="string"&&(e[l][v]=h)}),e[l][m]=h}),e}}]),i}(),Y6=[],G2={},W2={},D7=Object.keys(W2);A0=new _7,B7=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,_2("noAuto")},R7={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return h2?(_2("beforeI2svg",c),m2("pseudoElements2svg",c),m2("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,x7(function(){O7({autoReplaceSvgRoot:e}),_2("watch",c)})}},I7={icon:function(c){if(c===null)return null;if(J1(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:T2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],a=a3(c[0]);return{prefix:a,iconName:T2(a,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(M.cssPrefix,"-"))>-1||c.match(n7))){var r=i3(c.split(" "),{skipLookups:!0});return{prefix:r.prefix||C2(),iconName:T2(r.prefix,r.iconName)||r.iconName}}if(typeof c=="string"){var s=C2();return{prefix:s,iconName:T2(s,c)||c}}}},X={noAuto:B7,config:M,dom:R7,parse:I7,library:A0,findIconDefinition:c4,toHtml:v1},O7=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot,a=e===void 0?P:e;(Object.keys(a2.styles).length>0||M.autoFetchSvg)&&h2&&M.autoReplaceSvg&&X.dom.i2svg({node:a})};j3=a2.styles;W7={found:!1,width:512,height:512};J6=function(){},i4=M.measurePerformance&&O1&&O1.mark&&O1.measure?O1:{mark:J6,measure:J6},r1='FA "6.5.2"',K7=function(c){return i4.mark("".concat(r1," ").concat(c," begins")),function(){return E0(c)}},E0=function(c){i4.mark("".concat(r1," ").concat(c," ends")),i4.measure("".concat(r1," ").concat(c),"".concat(r1," ").concat(c," begins"),"".concat(r1," ").concat(c," ends"))},d4={begin:K7,end:E0},Y1=function(){};X1={replace:function(c){var e=c[0];if(e.parentNode)if(c[1].forEach(function(r){e.parentNode.insertBefore(T0(r),e)}),e.getAttribute(P2)===null&&M.keepOriginalSource){var a=P.createComment(Z7(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(c){var e=c[0],a=c[1];if(~f4(e).indexOf(M.replacementClass))return X1.replace(c);var r=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var s=a[0].attributes.class.split(" ").reduce(function(l,m){return m===M.replacementClass||m.match(r)?l.toSvg.push(m):l.toNode.push(m),l},{toNode:[],toSvg:[]});a[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var n=a.map(function(l){return v1(l)}).join(`
`);e.setAttribute(P2,""),e.innerHTML=n}};H4=!1;c3=null;sc=a2.styles;L2=new Set;o4.map(function(i){L2.add("fa-".concat(i))});Object.keys(n1[T]).map(L2.add.bind(L2));Object.keys(n1[F]).map(L2.add.bind(L2));L2=h1(L2);lc=function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?n2:a,s=e.symbol,n=s===void 0?!1:s,l=e.mask,m=l===void 0?null:l,h=e.maskId,u=h===void 0?null:h,v=e.title,p=v===void 0?null:v,d=e.titleId,H=d===void 0?null:d,g=e.classes,y=g===void 0?[]:g,A=e.attributes,b=A===void 0?{}:A,k=e.styles,E=k===void 0?{}:k;if(c){var R=c.prefix,O=c.iconName,_=c.icon;return r3(z({type:"icon"},c),function(){return _2("beforeDOMElementCreation",{iconDefinition:c,params:e}),M.autoA11y&&(p?b["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(H||m1()):(b["aria-hidden"]="true",b.focusable="false")),p4({icons:{main:e4(_),mask:m?e4(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:O,transform:z(z({},n2),r),symbol:n,title:p,maskId:u,titleId:H,extra:{attributes:b,styles:E,classes:y}})})}},oc={mixout:function(){return{icon:nc(lc)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=i0,e.nodeCallback=tc,e}}},provides:function(c){c.i2svg=function(e){var a=e.node,r=a===void 0?P:a,s=e.callback,n=s===void 0?function(){}:s;return i0(r,n)},c.generateSvgReplacementMutation=function(e,a){var r=a.iconName,s=a.title,n=a.titleId,l=a.prefix,m=a.transform,h=a.symbol,u=a.mask,v=a.maskId,p=a.extra;return new Promise(function(d,H){Promise.all([a4(r,l),u.iconName?a4(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var y=s4(g,2),A=y[0],b=y[1];d([e,p4({icons:{main:A,mask:b},prefix:l,iconName:r,transform:m,symbol:h,maskId:v,title:s,titleId:n,extra:p,watchable:!0})])}).catch(H)})},c.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,s=e.main,n=e.transform,l=e.styles,m=e3(l);m.length>0&&(r.style=m);var h;return m4(n)&&(h=m2("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),a.push(h||s.icon),{children:a,attributes:r}}}},fc={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,s=r===void 0?[]:r;return r3({type:"layer"},function(){_2("beforeDOMElementCreation",{assembler:e,params:a});var n=[];return e(function(l){Array.isArray(l)?l.map(function(m){n=n.concat(m.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(h1(s)).join(" ")},children:n}]})}}}},mc={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,s=r===void 0?null:r,n=a.classes,l=n===void 0?[]:n,m=a.attributes,h=m===void 0?{}:m,u=a.styles,v=u===void 0?{}:u;return r3({type:"counter",content:e},function(){return _2("beforeDOMElementCreation",{content:e,params:a}),G7({content:e.toString(),title:s,extra:{attributes:h,styles:v,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(h1(l))}})})}}}},hc={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,s=r===void 0?n2:r,n=a.title,l=n===void 0?null:n,m=a.classes,h=m===void 0?[]:m,u=a.attributes,v=u===void 0?{}:u,p=a.styles,d=p===void 0?{}:p;return r3({type:"text",content:e},function(){return _2("beforeDOMElementCreation",{content:e,params:a}),X6({content:e,transform:z(z({},n2),s),title:l,extra:{attributes:v,styles:d,classes:["".concat(M.cssPrefix,"-layers-text")].concat(h1(h))}})})}}},provides:function(c){c.generateLayersText=function(e,a){var r=a.title,s=a.transform,n=a.extra,l=null,m=null;if(v0){var h=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();l=u.width/h,m=u.height/h}return M.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,X6({content:e.innerHTML,width:l,height:m,transform:s,title:r,extra:n,watchable:!0})])}}},uc=new RegExp('"',"ug"),r0=[1105920,1112319];Hc={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=t0,e}}},provides:function(c){c.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?P:a;M.searchPseudoElements&&t0(r)}}},n0=!1,zc={mixout:function(){return{dom:{unwatch:function(){_0(),n0=!0}}}},hooks:function(){return{bootstrap:function(){e0(Z3("mutationObserverCallbacks",{}))},noAuto:function(){cc()},watch:function(e){var a=e.observeMutationsRoot;n0?r4():e0(Z3("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},l0=function(c){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(a,r){var s=r.toLowerCase().split("-"),n=s[0],l=s.slice(1).join("-");if(n&&l==="h")return a.flipX=!0,a;if(n&&l==="v")return a.flipY=!0,a;if(l=parseFloat(l),isNaN(l))return a;switch(n){case"grow":a.size=a.size+l;break;case"shrink":a.size=a.size-l;break;case"left":a.x=a.x-l;break;case"right":a.x=a.x+l;break;case"up":a.y=a.y-l;break;case"down":a.y=a.y+l;break;case"rotate":a.rotate=a.rotate+l;break}return a},e)},Vc={mixout:function(){return{parse:{transform:function(e){return l0(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=l0(r)),e}}},provides:function(c){c.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,s=e.containerWidth,n=e.iconWidth,l={transform:"translate(".concat(s/2," 256)")},m="translate(".concat(r.x*32,", ").concat(r.y*32,") "),h="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(m," ").concat(h," ").concat(u)},p={transform:"translate(".concat(n/2*-1," -256)")},d={outer:l,inner:v,path:p};return{tag:"g",attributes:z({},d.outer),children:[{tag:"g",attributes:z({},d.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:z(z({},a.icon.attributes),d.path)}]}]}}}},K3={x:0,y:0,width:"100%",height:"100%"};gc={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),s=r?i3(r.split(" ").map(function(n){return n.trim()})):v4();return s.prefix||(s.prefix=C2()),e.mask=s,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(c){c.generateAbstractMask=function(e){var a=e.children,r=e.attributes,s=e.main,n=e.mask,l=e.maskId,m=e.transform,h=s.width,u=s.icon,v=n.width,p=n.icon,d=V7({transform:m,containerWidth:v,iconWidth:h}),H={tag:"rect",attributes:z(z({},K3),{},{fill:"white"})},g=u.children?{children:u.children.map(o0)}:{},y={tag:"g",attributes:z({},d.inner),children:[o0(z({tag:u.tag,attributes:z(z({},u.attributes),d.path)},g))]},A={tag:"g",attributes:z({},d.outer),children:[y]},b="mask-".concat(l||m1()),k="clip-".concat(l||m1()),E={tag:"mask",attributes:z(z({},K3),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[H,A]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:Mc(p)},E]};return a.push(R,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(b,")")},K3)}),{children:a,attributes:r}}}},Cc={provides:function(c){var e=!1;g2.matchMedia&&(e=g2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:z(z({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=z(z({},s),{},{attributeName:"opacity"}),l={tag:"circle",attributes:z(z({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||l.children.push({tag:"animate",attributes:z(z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},n),{},{values:"1;0;1;1;0;1;"})}),a.push(l),a.push({tag:"path",attributes:z(z({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:z(z({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:z(z({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Lc={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return e.symbol=s,e}}}},xc=[C7,oc,fc,mc,hc,Hc,zc,Vc,gc,Cc,Lc];F7(xc,{mixoutsTo:X});jc=X.noAuto,Kc=X.config,F0=X.library,B0=X.dom,$c=X.parse,Qc=X.findIconDefinition,Yc=X.toHtml,Xc=X.icon,Jc=X.layer,Zc=X.text,c9=X.counter});var Sc,I0,O0,U0,yc,q0,G0=B(()=>{"use strict";Sc={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},I0=Sc,O0={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},U0={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},yc={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},q0=yc});var bc,D2,s3,V4=B(()=>{"use strict";m3();X4();K();L1();m3();R2();p8();bc=()=>["/features"],D2=Y2.imgPath,s3=(()=>{let c=class c{constructor(a,r){this.uiService=a,this.modalGalleryService=r,this.images=[new B2(0,{img:`${D2}/assets/images/gallery/img1.jpg`,extUrl:"http://www.google.com"}),new B2(1,{img:`${D2}/assets/images/gallery/img2.jpg`,description:"Description 2"}),new B2(2,{img:`${D2}/assets/images/gallery/img3.jpg`,description:"Description 3",extUrl:"http://www.google.com"},{img:`${D2}/assets/images/gallery/thumbs/img3.png`,title:"custom title 2",alt:"custom alt 2",ariaLabel:"arial label 2"}),new B2(3,{img:`${D2}/assets/images/gallery/img4.jpg`,description:"Description 4",extUrl:"http://www.google.com"}),new B2(4,{img:`${D2}/assets/images/gallery/img5.jpg`},{img:`${D2}/assets/images/gallery/thumbs/img5.jpg`})]}ngOnInit(){this.metaData()}onShow(a,r,s=this.images){let n=this.modalGalleryService.open({id:a,images:s,currentImage:s[r]})}metaData(){this.uiService.setMetaData({title:"Home"})}};c.\u0275fac=function(r){return new(r||c)(j(H2),j(j4))},c.\u0275cmp=Z({type:c,selectors:[["app-home-page"]],decls:23,vars:4,consts:[["id","home"],[1,"container-fluid"],[1,"row"],[1,"col-12","col-sm-12","col-md-12","col-lg-12","col-xl-12"],[1,"container"],[1,"lead"],["href","http://semver.org/"],["href","#features",3,"routerLink"],[3,"clickImage","id","images"]],template:function(r,s){r&1&&(C(0,"app-intro-header",0),o(1,"div",1)(2,"div",2)(3,"div",3)(4,"section",4)(5,"h2"),t(6,"Welcome"),f(),o(7,"p",5),t(8,"This is the official @ks89/angular-modal-gallery documentation. To get started quickly you can follow installation instructions or just browse demos for the existing examples. Would you help to either improve this library or fix bugs? If the answer is yes, please open issues and create pull requests with new features and bugfixes. This library uses "),o(9,"a",6),t(10,"Semantic versioning 2.0.0"),f(),t(11," also known as 'semver'."),f()(),C(12,"br"),o(13,"section",4)(14,"h2"),t(15,"Demo"),f(),o(16,"p",5),t(17,"Small demo with all default values. For more information, go to "),o(18,"a",7),t(19,"Features"),f(),t(20,"."),f(),C(21,"br"),o(22,"ks-plain-gallery",8),z1("clickImage",function(l){return s.onShow(1,l)}),f()()()()()),r&2&&($2(18),Q2("routerLink",V1(3,bc)),$2(4),Q2("id",1)("images",s.images))},dependencies:[C1,K4,J4],encapsulation:2});let i=c;return i})()});var Nc,M4,g4=B(()=>{"use strict";K();L1();R2();o3();Nc=()=>["/migration"],M4=(()=>{let c=class c{constructor(a,r,s){this.uiService=a,this.router=r,this.viewPortScroller=s}ngOnInit(){this.metaData()}onScrollTo(a){this.viewPortScroller.scrollToAnchor(a)}metaData(){this.uiService.setMetaData({title:"Getting started"})}};c.\u0275fac=function(r){return new(r||c)(j(H2),j(g1),j(R4))},c.\u0275cmp=Z({type:c,selectors:[["app-getting-started-page"]],decls:342,vars:2,consts:[["id","getting-started",1,"title"],[1,"container"],[1,"row"],[1,"col-12"],[1,"table-responsive"],[1,"table","table-hover"],[3,"routerLink"],["href","https://www.npmjs.com/package/angular-modal-gallery"],[1,"link",3,"click"],["id","examples",1,"container"],["href","https://github.com/Ks89/angular-modal-gallery/tree/master/examples/angular-cli-18"],["href","https://github.com/Ks89/angular-modal-gallery/tree/master/examples/angular-cli-material"],["href","https://github.com/Ks89/angular-modal-gallery/tree/master/examples/universal"],["href","https://github.com/Ks89/angular-modal-gallery/issues"],["href","https://github.com/Ks89/angular-modal-gallery/blob/master/CONTRIBUTING.md"],["href","https://github.com/sponsors/Ks89"]],template:function(r,s){r&1&&(o(0,"div",0)(1,"div",1)(2,"h1"),t(3,"Getting started"),f()()(),o(4,"div",1)(5,"div",2)(6,"div",3)(7,"section",1)(8,"h2"),t(9,"Dependencies"),f(),o(10,"p"),t(11,"Based on the table below, choose the right version of @ks89/angular-modal-gallery."),f(),o(12,"p"),t(13,"However, only the latest stable release of @ks89/angular-modal-gallery is supported. For this reason, I really suggest to always stay up-to-date with all your dependencies."),f(),o(14,"p"),t(15,"The supported versions are:"),f(),o(16,"div",4)(17,"table",5)(18,"tbody")(19,"tr")(20,"td")(21,"b"),t(22,"@ks89/angular-modal-gallery"),f()(),o(23,"td"),t(24,"angular"),f(),o(25,"td"),t(26,"@angular/cdk"),f(),o(27,"td"),t(28,"mousetrap"),f(),o(29,"td"),t(30,"hammerjs"),f(),o(31,"td"),t(32,"Font Awesome"),f(),o(33,"td"),t(34,"IE11 support"),f(),o(35,"td"),t(36,"Microsoft Edge (pre-chromium) support"),f()(),o(37,"tr")(38,"td")(39,"b"),t(40,"3.3.5"),f()(),o(41,"td"),t(42,"2.0.0"),f(),o(43,"td"),t(44,"not required"),f(),o(45,"td"),t(46,">=1.6.1"),f(),o(47,"td"),t(48,">=2.0.0"),f(),o(49,"td"),t(50,">= 4.0.0"),f(),o(51,"td"),t(52,"Yes"),f(),o(53,"td"),t(54,"Yes"),f()(),o(55,"tr")(56,"td")(57,"b"),t(58,"5.7.1"),f()(),o(59,"td"),t(60,"4.0.0"),f(),o(61,"td"),t(62,"not required"),f(),o(63,"td"),t(64,">=1.6.1"),f(),o(65,"td"),t(66,">=2.0.0"),f(),o(67,"td"),t(68,"optional"),f(),o(69,"td"),t(70,"Yes"),f(),o(71,"td"),t(72,"Yes"),f()(),o(73,"tr")(74,"td")(75,"b"),t(76,"6.3.0"),f()(),o(77,"td"),t(78,"5.0.0"),f(),o(79,"td"),t(80,"not required"),f(),o(81,"td"),t(82,">=1.6.1"),f(),o(83,"td"),t(84,">=2.0.0"),f(),o(85,"td"),t(86,"optional"),f(),o(87,"td"),t(88,"Yes"),f(),o(89,"td"),t(90,"Yes"),f()(),o(91,"tr")(92,"td")(93,"b"),t(94,"7.2.5"),f()(),o(95,"td"),t(96,"6.0.0"),C(97,"br"),t(98,"7.0.0"),C(99,"br"),t(100,"8.0.0"),C(101,"br"),t(102,"9.0.0*"),C(103,"br"),t(104,"10.0.0*"),C(105,"br"),t(106,"11.0.0*"),f(),o(107,"td"),t(108,"6.0.0"),C(109,"br"),t(110,"7.0.0"),C(111,"br"),t(112,"8.0.0"),C(113,"br"),t(114,"9.0.0*"),C(115,"br"),t(116,"10.0.0*"),C(117,"br"),t(118,"11.0.0*"),f(),o(119,"td"),t(120,">=1.6.1"),f(),o(121,"td"),t(122,">=2.0.0"),f(),o(123,"td"),t(124,"optional"),f(),o(125,"td"),t(126,"Yes"),f(),o(127,"td"),t(128,"Yes"),f()(),o(129,"tr")(130,"td")(131,"b"),t(132,"8.0.1"),f()(),o(133,"td"),t(134,"12.0.0"),f(),o(135,"td"),t(136,"12.0.0"),f(),o(137,"td"),t(138,">=1.6.1"),f(),o(139,"td"),t(140,">=2.0.0"),f(),o(141,"td"),t(142,"optional"),f(),o(143,"td"),t(144,"Yes"),f(),o(145,"td"),t(146,"Yes"),f()(),o(147,"tr")(148,"td")(149,"b"),t(150,"9.1.0"),f()(),o(151,"td"),t(152,"13.0.0"),f(),o(153,"td"),t(154,"13.0.0"),f(),o(155,"td"),t(156,">=1.6.1"),f(),o(157,"td"),t(158,">=2.0.0"),f(),o(159,"td"),t(160,"optional"),f(),o(161,"td"),t(162,"No"),f(),o(163,"td"),t(164,"No"),f()(),o(165,"tr")(166,"td")(167,"b"),t(168,"10.0.1"),f()(),o(169,"td"),t(170,"15.0.0"),f(),o(171,"td"),t(172,"15.0.0"),f(),o(173,"td"),t(174,">=1.6.1"),f(),o(175,"td"),t(176,">=2.0.0"),f(),o(177,"td"),t(178,"optional"),f(),o(179,"td"),t(180,"No"),f(),o(181,"td"),t(182,"No"),f()(),o(183,"tr")(184,"td")(185,"b"),t(186,"11.1.1"),f()(),o(187,"td"),t(188,"16.0.0"),f(),o(189,"td"),t(190,"16.0.0"),f(),o(191,"td"),t(192,"No"),f(),o(193,"td"),t(194,"No"),f(),o(195,"td"),t(196,"optional"),f(),o(197,"td"),t(198,"No"),f(),o(199,"td"),t(200,"No"),f()(),o(201,"tr")(202,"td")(203,"b"),t(204,"12.0.0 (recommended)"),f()(),o(205,"td"),t(206,"18.0.0"),f(),o(207,"td"),t(208,"18.0.0"),f(),o(209,"td"),t(210,"No"),f(),o(211,"td"),t(212,"No"),f(),o(213,"td"),t(214,"optional"),f(),o(215,"td"),t(216,"No"),f(),o(217,"td"),t(218,"No"),f()()()()(),o(219,"p"),t(220,"*not officially supported but they should work without issues."),f(),C(221,"br"),o(222,"p")(223,"b"),t(224,"If you are already using @ks89/angular-modal-gallery and you want to migrate to the latest release, check the "),o(225,"a",6),t(226,"official guide"),f(),t(227,"."),f()()(),C(228,"br"),o(229,"section",1)(230,"h2"),t(231,"Supported Browsers"),f(),o(232,"p"),t(233,"Starting from version 9.0.0 of this library, Internet Explorer 11 and legacy Microsoft Edge (pre-chromium) are not supported!"),f()(),C(234,"br"),o(235,"section",1)(236,"h2"),t(237,"Installation"),f(),o(238,"p"),t(239,"Based on the table above, install the required dependencies."),f(),o(240,"p"),t(241,"For the latest version of "),o(242,"strong"),t(243,"@ks89/angular-modal-gallery"),f(),t(244," run"),f(),o(245,"ul")(246,"li")(247,"code"),t(248,"npm i --save @ks89/angular-modal-gallery@latest"),f()(),o(249,"li")(250,"code"),t(251,"npm i --save @angular/cdk"),f()()(),o(252,"p"),t(253,"Please note that if you need angular-modal-gallery versions 5 or 3, you must use the older npm package called "),o(254,"a",7),t(255,"angular-modal-gallery"),f(),t(256," without @ks89 scope."),f(),o(257,"p"),t(258,"All default icons don't require font-awesome, so starting from angular-modal-gallery 5.0.0 font-awesome is optional. However, if you want to use custom button icons, you are free to use either your own css or font-awesome (versions 4 or 5). Font Awesome 5 is officially supported from angular-modal-gallery 5.3.0 or greater."),f()(),C(259,"br"),o(260,"section",1)(261,"h2"),t(262,"Update your project"),f(),o(263,"p"),t(264,"Once finished to install dependencies, you need to follow some simple steps."),f(),o(265,"p"),t(266,"I consider only angular-cli projects. If you want to use "),o(267,"code"),t(268,"@angular/universal"),f(),t(269,", please check "),o(270,"span",8),z1("click",function(){return s.onScrollTo("examples")}),t(271,"official examples"),f(),t(272,"."),f(),o(273,"h3"),t(274,"Step 1: Import dependencies"),f(),o(275,"p"),t(276,"Import "),o(277,"code"),t(278,"GalleryModule"),f(),t(279,"."),f(),o(280,"pre"),t(281,`        import { GalleryModule } from '@ks89/angular-modal-gallery';
        `),f(),o(282,"p"),t(283,"Then list "),o(284,"code"),t(285,"GalleryModule"),f(),t(286," in your root module and any additional application modules that make use of the components in this library."),f(),o(287,"pre"),t(288,`        import {GalleryModule} from '@ks89/angular-modal-gallery';
        @NgModule({
          imports: [
            GalleryModule,
            ...],
          declarations: [ AppComponent, ... ],
          providers: [ ... ],
          bootstrap: [ AppComponent ]
        })
        export class AppModule {}
        `),f(),o(289,"h3"),t(290,"Step 2: Update global CSS"),f(),o(291,"p"),t(292,"Update your global styles (CSS/SCSS/LESS) file adding this:"),f(),o(293,"pre"),t(294,`        @import "~@angular/cdk/overlay-prebuilt.css";
        .ks-modal-gallery-backdrop {
                  background: #000 !important;;
                  opacity: 0.85 !important;;
        }
        .ks-modal-gallery-panel {
                  z-index: 90000 !important;
        }
        `),f(),o(295,"h3"),t(296,"Step 3: (optional) update tsconfig file"),f(),o(297,"p"),t(298,"Add @types to tsconfig.json (in case on angular-cli project it's called "),o(299,"code"),t(300,"tsconfig.base.json"),f(),t(301,") as follow:"),f(),o(302,"pre"),t(303,`        {
          ...
          "compilerOptions": {
            ...
            "typeRoots": ["node_modules/@types"]
          }
        }
        `),f()(),C(304,"br"),o(305,"section",9)(306,"h2"),t(307,"Official examples"),f(),o(308,"ul")(309,"li")(310,"a",10),t(311,"angular-cli 18 (recommended)"),f()(),o(312,"li")(313,"a",11),t(314,"angular-cli with material"),f()(),o(315,"li")(316,"a",12),t(317,"angular-universal"),f()()()(),C(318,"br"),o(319,"section",1)(320,"h2"),t(321,"Support requests"),f(),o(322,"p"),t(323,"If you need support, "),o(324,"a",13),t(325,"open an issue"),f(),t(326," filling the template with all information."),f()(),C(327,"br"),o(328,"section",1)(329,"h2"),t(330,"Contributing"),f(),o(331,"p"),t(332,"This project is becoming bigger year after year. Also, It requires many time staying up-to-date and supporting the latest Angular version."),f(),o(333,"p"),t(334,"For these reasons I'm searching for "),o(335,"a",14),t(336,"contributions"),f(),t(337,". Also, "),o(338,"a",15),t(339,"donations via Github Sponsors"),f(),t(340," are very appreciated."),f()(),C(341,"br"),f()()()),r&2&&($2(225),Q2("routerLink",V1(1,Nc)))},dependencies:[C1],styles:[".col-12[_ngcontent-%COMP%]{padding-right:20px;padding-left:20px}#getting-started[_ngcontent-%COMP%]{padding:4rem 2rem 4rem 0;border-radius:0;margin-bottom:2rem}"]});let i=c;return i})()});var C4,L4=B(()=>{"use strict";K();L1();C4=(()=>{let c=class c{constructor(a){this.uiService=a}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Migration"})}};c.\u0275fac=function(r){return new(r||c)(j(H2))},c.\u0275cmp=Z({type:c,selectors:[["app-migration-page"]],decls:273,vars:0,consts:[["id","migration",1,"title"],[1,"container"],[1,"row"],[1,"col-12"],["href","https://github.com/Ks89/angular-modal-gallery/tree/master/examples/angular-cli-13"],["href","https://ks89.github.io/angular-modal-gallery-2022-v10.github.io/features/carousel"],["href","https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code"]],template:function(r,s){r&1&&(o(0,"div",0)(1,"div",1)(2,"h1"),t(3,"Migration guide"),f()()(),o(4,"div",1)(5,"div",2)(6,"div",3)(7,"h2"),t(8,"How to upgrade?"),f(),C(9,"hr"),o(10,"section")(11,"h3"),t(12,"from 11.x.x to 12.x.x"),f(),C(13,"br"),o(14,"h4"),t(15,"Step 1 - upgrade @ks89/angular-modal-gallery to the latest 12.x.x version"),f(),o(16,"p"),t(17,"So, in your terminal run: "),o(18,"code"),t(19,"npm install --save @ks89/angular-modal-gallery@latest"),f()(),C(20,"br"),o(21,"h4"),t(22,"Step 2 - upgrade Angular and rxjs"),f(),o(23,"p"),t(24,"Use the latest version of Angular (with the recommended rxjs version). It must be Angular 18 or higher."),f()(),C(25,"br")(26,"br"),o(27,"section")(28,"h3"),t(29,"from 10.x.x to 11.x.x"),f(),C(30,"br"),o(31,"h4"),t(32,"Step 1 - upgrade @ks89/angular-modal-gallery to the latest 11.x.x version"),f(),o(33,"p"),t(34,"So, in your terminal run: "),o(35,"code"),t(36,"npm install --save @ks89/angular-modal-gallery@latest"),f()(),C(37,"br"),o(38,"h4"),t(39,"Step 2 - upgrade Angular and rxjs"),f(),o(40,"p"),t(41,"Use the latest version of Angular (with the recommended rxjs version). It must be Angular 16 or higher."),f(),C(42,"br"),o(43,"h4"),t(44,"Step 3 - remove 'hammerjs' and 'mousetrap'"),f(),o(45,"p")(46,"b"),t(47,"Remove "),o(48,"code"),t(49,"hammerjs"),f(),t(50," and "),o(51,"code"),t(52,"mousetrap"),f(),t(53," from your "),o(54,"code"),t(55,"package.json"),f(),t(56," and all imports from your application."),f()(),C(57,"br"),o(58,"h4"),t(59,"Step 4 - remove 'keyboardServiceConfig' from 'ModalLibConfig' configuration object"),f(),o(60,"p"),t(61,"Without "),o(62,"code"),t(63,"mousetrap"),f(),t(64," you won't be able to customize download shortcuts anymore."),f()(),C(65,"br")(66,"br"),o(67,"section")(68,"h3"),t(69,"from 9.x.x to 10.x.x"),f(),C(70,"br"),o(71,"h4"),t(72,"Step 1 - upgrade @ks89/angular-modal-gallery to the latest 10.x.x version"),f(),o(73,"p"),t(74,"So, in your terminal run: "),o(75,"code"),t(76,"npm install --save @ks89/angular-modal-gallery@latest"),f()(),C(77,"br"),o(78,"h4"),t(79,"Step 2 - upgrade Angular and rxjs"),f(),o(80,"p"),t(81,"Use the latest version of Angular (with the recommended rxjs version). It must be Angular 15 or higher."),f()(),C(82,"br")(83,"br"),o(84,"section")(85,"h3"),t(86,"from 8.x.x to 9.x.x"),f(),C(87,"br"),o(88,"h4"),t(89,"Step 1 - upgrade @ks89/angular-modal-gallery to the latest 9.x.x version"),f(),o(90,"p"),t(91,"So, in your terminal run: "),o(92,"code"),t(93,"npm install --save @ks89/angular-modal-gallery@latest"),f()(),C(94,"br"),o(95,"h4"),t(96,"Step 2 - upgrade Angular and rxjs"),f(),o(97,"p"),t(98,"Use the latest version of Angular (with the recommended rxjs version). It must be Angular 13 or higher."),f(),C(99,"br"),o(100,"h4"),t(101,"Step 3 - remove the generic "),o(102,"code"),t(103,"LibConfig"),f(),t(104," interface, because no more exported."),f(),o(105,"p"),t(106,"Choose the specific interfaces based on your needs"),f(),o(107,"ul")(108,"li"),t(109,"in modal-gallery configuration use "),o(110,"code"),t(111,"ModalLibConfig"),f()(),o(112,"li"),t(113,"in plain-gallery configuration use "),o(114,"code"),t(115,"PlainLibConfig"),f()(),o(116,"li"),t(117,"in carousel configuration use "),o(118,"code"),t(119,"CarouselLibConfig"),f()()(),C(120,"br"),o(121,"h4"),t(122,"Step 4 - update plain-gallery"),f(),o(123,"ul")(124,"li"),t(125,"remove "),o(126,"code"),t(127,"AdvancedLayout"),f(),t(128," from PlainGallery, because already unused since v8.0.0"),f(),o(129,"li"),t(130,"remove "),o(131,"code"),t(132,'[showGallery]="true"'),f(),t(133," input from plain-gallery HTML component, because it's unused"),f(),o(134,"li"),t(135,"rename "),o(136,"code"),t(137,'(showImage)="..."'),f(),t(138," output into "),o(139,"code"),t(140,'(clickImage)="..."'),f(),t(141," output"),f()(),C(142,"br"),o(143,"h4"),t(144,"Step 5 - update carousel"),f(),o(145,"ul")(146,"li"),t(147,"IE11 legacy mode has been removed from the library, because Angular doesn't support Internet Explorer 11 anymore. So you have to remove "),o(148,"code"),t(149,"legacyIE11Mode: true"),f(),t(150," in your code"),f(),o(151,"li"),t(152,"remove "),o(153,"code"),t(154,"[previewConfig]"),f(),t(155," and "),o(156,"code"),t(157,"[carouselConfig]"),f(),t(158," inputs from HTML, because replaced with a single "),o(159,"code"),t(160,'[config]="..."'),f(),t(161," like all other components of the library. For more information check the "),o(162,"a",4),t(163,"official example"),f(),t(164," and the "),o(165,"a",5),t(166,"documentation page"),f(),t(167,". Don't be scared, it's easies then you think. You only need to pass an object moving previews configuration inside it."),f(),o(168,"li"),t(169,"rename "),o(170,"code"),t(171,'(showImage)="..."'),f(),t(172," output into "),o(173,"code"),t(174,'(changeImage)="..."'),f(),t(175," output"),f()(),C(176,"br"),o(177,"h4"),t(178,"Step 6 - "),o(179,"code"),t(180,"KeyboardEvent.keyCode"),f(),t(181," is no more supported"),f(),o(182,"p"),t(183,"If you are using custom keyCodes via "),o(184,"code"),t(185,"keyboardConfig"),f(),t(186," you have to migrate to the newer "),o(187,"code"),t(188,"KeyboardEvent.code"),f()(),o(189,"p"),t(190,"For more information, please check the "),o(191,"a",6),t(192,"MDN documentation here"),f(),t(193,"."),f(),o(194,"p"),t(195,"As a quick example. Previously, you were using integer keyCodes:"),f(),o(196,"pre"),t(197,`        keyboardConfig: {
          esc: 81, // Q keyCode
          left: 40, // Arrow down keyCode
          right: 38 // Arrow ip keyCode
        }
        `),f(),o(198,"p"),t(199,"instead, starting from v9.0.0, you have to use the equivalent codes:"),f(),o(200,"pre"),t(201,`        keyboardConfig: {
          esc: 'KeyQ',
          left: 'ArrowDown',
          right: 'ArrowUp'
        }
        `),f(),C(202,"br"),f(),C(203,"br")(204,"br"),o(205,"section")(206,"h3"),t(207,"from 7.x.x to 8.x.x"),f(),C(208,"br"),o(209,"h4"),t(210,"Step 1 - upgrade @ks89/angular-modal-gallery to the latest 8.x.x version"),f(),o(211,"p"),t(212,"So, in your terminal run: "),o(213,"code"),t(214,"npm install --save @ks89/angular-modal-gallery@latest"),f()(),C(215,"br"),o(216,"h4"),t(217,"Step 2 - upgrade Angular and rxjs"),f(),o(218,"p"),t(219,"Use the latest version of Angular (with the recommended rxjs version). It must be Angular 12 or higher."),f(),C(220,"br"),o(221,"h4"),t(222,"Step 3 - be sure to install the mandatory dependency `@angular/cdk`"),f(),o(223,"p"),t(224,"@angular/cdk is mandatory to support responsiveness of carousel component and to show modal gallery."),f(),o(225,"p"),t(226,"So, in your terminal run: "),o(227,"code"),t(228,"npm install --save @angular/cdk"),f()(),C(229,"br"),o(230,"h4"),t(231,"Step 4 - update module import"),f(),o(232,"p"),t(233,"Replace all occurrences of "),o(234,"code"),t(235,"GalleryModule.forRoot()"),f(),t(236," with "),o(237,"code"),t(238,"GalleryModule"),f(),t(239,"."),f(),C(240,"br"),o(241,"h4"),t(242,"Step 5 - update your global style file"),f(),o(243,"p"),t(244,"Add these classes to your global style file:"),f(),o(245,"pre"),t(246,`    @import "~@angular/cdk/overlay-prebuilt.css";

    .ks-modal-gallery-backdrop {
      background: #000 !important;;
      opacity: 0.85 !important;;
    }

    .ks-modal-gallery-panel {
      z-index: 90000 !important;
    }
        `),f(),C(247,"br"),o(248,"h4"),t(249,"Step 6 - update your code"),f(),C(250,"br"),o(251,"h5"),t(252,"Plain Gallery"),f(),o(253,"p"),t(254,"Change HTML code"),f(),o(255,"pre"),t(256,`  <ks-modal-gallery [id]="1" [modalImages]="images"
    [plainGalleryConfig]="plainGalleryRowATags"></ks-modal-gallery>
        `),f(),o(257,"p"),t(258,"with"),f(),o(259,"pre"),t(260,`  <ks-plain-gallery [id]="1" [images]="images" [showGallery]="true"
    [config]="libConfigPlainGallery"
    (showImage)="onShow(1, $event)"></ks-plain-gallery>
        `),f(),o(261,"p"),t(262,"Then add the LibConfig object and "),o(263,"code"),t(264,"onShow"),f(),t(265," method in Typescript component:"),f(),o(266,"pre"),t(267,`  images: Image[]; // init this value with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  libConfigPlainGallery: LibConfig = {
    plainGalleryConfig: {
      // your custom plain gallery configuration here
    } as PlainGalleryConfig
  };

  onShow(id: number, index: number, images: Image[] = this.images): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index]
    }) as ModalGalleryRef;
  }
        `),f(),C(268,"br"),o(269,"h5"),t(270,"Modal Gallery"),f(),o(271,"p"),t(272,"In case of Modal Galley, you have to remove HTML selector from all you HTML files, because now it's an Angular service and not a component."),f()()()()())},styles:[".col-12[_ngcontent-%COMP%]{padding-right:20px;padding-left:20px}#migration[_ngcontent-%COMP%]{padding:4rem 2rem 4rem 0;border-radius:0;margin-bottom:2rem}"]});let i=c;return i})()});var x4,S4=B(()=>{"use strict";K();L1();x4=(()=>{let c=class c{constructor(a){this.uiService=a}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"About"})}};c.\u0275fac=function(r){return new(r||c)(j(H2))},c.\u0275cmp=Z({type:c,selectors:[["app-about-page"]],decls:202,vars:0,consts:[["id","about",1,"title"],[1,"container"],[1,"row"],[1,"col-12"],["href","https://www.flaticon.com/authors/smartline","title","Smartline"],["href","https://www.flaticon.com/","title","Flaticon"],["href","http://creativecommons.org/licenses/by/3.0/","title","Creative Commons BY 3.0","target","_blank"],["href","https://www.flaticon.com/authors/dave-gandy","title","Dave Gandy"],["href","http://www.freepik.com","title","Freepik"],["href","https://www.flaticon.com/authors/those-icons","title","Those Icons"],["href","https://www.flaticon.com/authors/gregor-cresnar","title","Gregor Cresnar"],["href","https://www.flaticon.com/authors/smashicons","title","Smashicons"],["href","https://www.flaticon.com/authors/pixel-perfect","title","Pixel perfect"],["href","https://github.com/lukehaas"],["href","https://github.com/lukehaas/css-loaders"],["href","https://github.com/martinvd"],["href","https://codepen.io/martinvd/pen/xbQJom"],["href","https://devalchemist.com/"],["href","https://codepen.io/devilishalchemist/pen/emOVYQ"],["href","https://github.com/nikhil8krishnan"],["href","https://codepen.io/nikhil8krishnan/pen/dMEzGx"],["href","https://codepen.io/WebSonata/"],["href","https://codepen.io/WebSonata/pen/bRaONB"]],template:function(r,s){r&1&&(o(0,"div",0)(1,"div",1)(2,"h1"),t(3,"About"),f()()(),o(4,"div",1)(5,"div",2)(6,"div",3)(7,"section")(8,"p")(9,"b"),t(10,"A special thank to all that helped me with contributions, issues and testing beta releases"),f()(),o(11,"ul")(12,"li"),t(13,"alhazmy13"),f(),o(14,"li"),t(15,"vixriihi"),f(),o(16,"li"),t(17,"Enngage"),f(),o(18,"li"),t(19,"matiishyn"),f(),o(20,"li"),t(21,"odahcam"),f(),o(22,"li"),t(23,"vugar005"),f(),o(24,"li"),t(25,"patrickmichalina"),f(),o(26,"li"),t(27,"Alados"),f(),o(28,"li"),t(29,"Iamguy84"),f(),o(30,"li"),t(31,"yarozar"),f(),o(32,"li"),t(33,"ckelkar"),f(),o(34,"li"),t(35,"tobi-or-not-tobi"),f(),o(36,"li"),t(37,"mlc-mlapis"),f(),o(38,"li"),t(39,"pieterdegraeuwe"),f(),o(40,"li"),t(41,"istrdev"),f(),o(42,"li"),t(43,"mrVers"),f(),o(44,"li"),t(45,"smardine"),f(),o(46,"li"),t(47,"hn6pot"),f(),o(48,"li"),t(49,"momopaper"),f(),o(50,"li"),t(51,"pavilionweb"),f(),o(52,"li"),t(53,"srtab"),f(),o(54,"li"),t(55,"MiaAlSaif"),f(),o(56,"li"),t(57,"rezo-evodion"),f(),o(58,"li"),t(59,"anacatarinasousaaa"),f(),o(60,"li"),t(61,"SebastianFreund"),f(),o(62,"li"),t(63,"circy"),f(),o(64,"li"),t(65,"iss936"),f(),o(66,"li"),t(67,"@alvinmactal"),f(),o(68,"li"),t(69,"mohaxspb"),f(),o(70,"li"),t(71,"vlafranca"),f(),o(72,"li"),t(73,"aslubsky"),f(),o(74,"li"),t(75,"cihancelen"),f(),o(76,"li"),t(77,"locinus"),f(),o(78,"li"),t(79,"luca-peruzzo"),f(),o(80,"li"),t(81,"and many others"),f()()(),o(82,"section")(83,"p")(84,"b"),t(85,"A special thank to all authors of icons used in this library"),f()(),o(86,"ul")(87,"li"),t(88,"Icons made by "),o(89,"a",4),t(90,"Smartline"),f(),t(91," from "),o(92,"a",5),t(93,"www.flaticon.com"),f(),t(94," is licensed by "),o(95,"a",6),t(96,"CC 3.0 BY"),f()(),o(97,"li"),t(98,"Icons made by "),o(99,"a",7),t(100,"Dave Gandy"),f(),t(101," from "),o(102,"a",5),t(103,"www.flaticon.com"),f(),t(104," is licensed by "),o(105,"a",6),t(106,"CC 3.0 BY"),f()(),o(107,"li"),t(108,"Icons made by "),o(109,"a",8),t(110,"Freepik"),f(),t(111," from "),o(112,"a",5),t(113,"www.flaticon.com"),f(),t(114," is licensed by "),o(115,"a",6),t(116,"CC 3.0 BY"),f()(),o(117,"li"),t(118,"Icons made by "),o(119,"a",9),t(120,"Those Icons"),f(),t(121," from "),o(122,"a",5),t(123,"www.flaticon.com"),f(),t(124," is licensed by "),o(125,"a",6),t(126,"CC 3.0 BY"),f()(),o(127,"li"),t(128,"Icons made by "),o(129,"a",10),t(130,"Gregor Cresnar"),f(),t(131," from "),o(132,"a",5),t(133,"www.flaticon.com"),f(),t(134," is licensed by "),o(135,"a",6),t(136,"CC 3.0 BY"),f()(),o(137,"li"),t(138,"Icons made by "),o(139,"a",11),t(140,"Smashicons"),f(),t(141," from "),o(142,"a",5),t(143,"www.flaticon.com"),f(),t(144," is licensed by "),o(145,"a",6),t(146,"CC 3.0 BY"),f()(),o(147,"li"),t(148,"Icons made by "),o(149,"a",8),t(150,"Freepik"),f(),t(151," from "),o(152,"a",5),t(153,"www.flaticon.com"),f(),t(154," is licensed by "),o(155,"a",6),t(156,"CC 3.0 BY"),f()(),o(157,"li"),t(158,"Icons made by "),o(159,"a",12),t(160,"Pixel perfect"),f(),t(161," from "),o(162,"a",5),t(163,"www.flaticon.com"),f(),t(164," is licensed by "),o(165,"a",6),t(166,"CC 3.0 BY"),f()()()(),o(167,"section")(168,"p")(169,"b"),t(170,"A special thanks to all authors of spinners used in this library"),f()(),o(171,"ul")(172,"li")(173,"a",13),t(174,"Luke Haas (@lukehaas)"),f(),t(175," - "),o(176,"a",14),t(177,"lukehaas/css-loaders"),f()(),o(178,"li")(179,"a",15),t(180,"Martin van Driel (@martinvd)"),f(),t(181," - "),o(182,"a",16),t(183,"martinvd example on codepen.io"),f()(),o(184,"li")(185,"a",17),t(186,"Devilish Alchemist"),f(),t(187," - "),o(188,"a",18),t(189,"devilishalchemist example on codepen.io"),f()(),o(190,"li")(191,"a",19),t(192,"Nikhil Krishnan"),f(),t(193," - "),o(194,"a",20),t(195,"nikhil8krishnan example on codepen.io"),f()(),o(196,"li")(197,"a",21),t(198,"Anastasiya Kuligina"),f(),t(199," - "),o(200,"a",22),t(201,"Anastasiya Kuligina example on codepen.io"),f()()()()()()())},styles:[".col-12[_ngcontent-%COMP%]{padding-right:20px;padding-left:20px}#about[_ngcontent-%COMP%]{padding:4rem 2rem 4rem 0;border-radius:0;margin-bottom:2rem}"]});let i=c;return i})()});var y4,b4=B(()=>{"use strict";K();y4=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=Z({type:c,selectors:[["app-not-found-page"]],decls:2,vars:0,template:function(r,s){r&1&&(o(0,"h3"),t(1,"Error 404: Page not found"),f())},encapsulation:2});let i=c;return i})()});var wc,j0,K0=B(()=>{"use strict";R2();V4();g4();L4();S4();b4();K();wc=[{path:"",component:s3},{path:"home",component:s3},{path:"getting-started",component:M4},{path:"features",loadChildren:()=>import("./chunk-UCIDH2FE.js").then(i=>i.FeaturesModule)},{path:"demo",loadChildren:()=>import("./chunk-YZSGMYYP.js").then(i=>i.DemoModule)},{path:"migration",component:C4},{path:"about",component:x4},{path:"**",component:y4}],j0=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=d2({type:c}),c.\u0275inj=p2({imports:[y2.forRoot(wc,{scrollPositionRestoration:"top",useHash:!history.pushState,preloadingStrategy:Y4}),y2]});let i=c;return i})()});function $0(i,c){if(i)throw new Error(`${c} has already been loaded. Import Core modules in the AppModule only.`)}var Q0=B(()=>{"use strict"});var Y0,X0=B(()=>{"use strict";o3();R2();i6();Q0();K();Y0=(()=>{let c=class c{constructor(a){$0(a,"CoreModule")}};c.\u0275fac=function(r){return new(r||c)(F2(c,12))},c.\u0275mod=d2({type:c}),c.\u0275inj=p2({providers:[a6],imports:[B4,y2]});let i=c;return i})()});var J0=B(()=>{"use strict";S4();b4();V4();g4();L4()});var Z0,c8=B(()=>{"use strict";K();R2();i6();d8();H8();Z0=(()=>{let c=class c{constructor(a,r){this.router=a,this.accordionService=r,this.title="app"}ngOnInit(){this.accordionService.resetAccordion(),this.accordionService.initAccordion()}};c.\u0275fac=function(r){return new(r||c)(j(g1),j(e6))},c.\u0275cmp=Z({type:c,selectors:[["app-root"]],decls:3,vars:0,template:function(r,s){r&1&&C(0,"app-navbar")(1,"router-outlet")(2,"app-footer")},dependencies:[Q4,Z4,c6],encapsulation:2});let i=c;return i})()});var e8,a8=B(()=>{"use strict";v8();f3();F6();u8();m3();R0();G0();K0();z8();X0();J0();c8();R2();K();F0.add(I0,U0,q0,O0);B0.watch();e8=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=d2({type:c,bootstrap:[Z0]}),c.\u0275inj=p2({providers:[I4(O4())],imports:[M1,D6,G4,W4,j0,$4,Y0,r6,y2]});let i=c;return i})()});function i8(i){let c=Array.prototype.map.call(i,function(e){let a=document.createElement(e.tagName),r=e.parentNode,s=a.style.display;a.style.display="none",r.insertBefore(a,e);function n(){a.style.display=s;try{r.removeChild(e)}catch{}}return n});return function(){c.forEach(a=>a())}}var r8=B(()=>{"use strict"});var s8=B(()=>{"use strict"});var t8=B(()=>{"use strict"});var n8=B(()=>{"use strict";r8();s8();t8()});var l8,o8=B(()=>{"use strict";K();n8();l8=(i,c)=>{let e;i.hot.accept(),c().then(a=>e=a),i.hot.dispose(()=>{let r=e.injector.get(D4).components.map(n=>n.location.nativeElement),s=i8(r);e.destroy(),s()})}});var kc=h8((me,N4)=>{f3();a8();X4();o8();Y2.production&&void 0;var f8=()=>q4().bootstrapModule(e8);Y2.hmr?N4.hot?l8(N4,f8):(console.error("HMR is not enabled for webpack-dev-server!"),console.log("Are you using the --hmr flag for ng serve?")):document.addEventListener("DOMContentLoaded",()=>{f8().catch(i=>console.error(i))})});export default kc();
