import{S as c,A as l}from"./assets/vendor-yB96FJs9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(){new c(".swiper",{modules:[l],loop:!0,autoplay:{delay:8e3,disableOnInteraction:!1},on:{init:()=>a(),resize:()=>a()}})}function a(){const i=window.innerWidth,o=window.devicePixelRatio;document.querySelectorAll(".swiper-slide").forEach(r=>{let e;i>=1280?e=o>1?r.dataset.bgPc2x:r.dataset.bgPc:i>=768?e=o>1?r.dataset.bgTablet2x:r.dataset.bgTablet:e=o>1?r.dataset.bgMobile2x:r.dataset.bgMobile,r.style.backgroundImage=`url(${e})`})}function u(){d()}u();
//# sourceMappingURL=index.js.map
