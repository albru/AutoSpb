"use strict";!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/build/",i(i.s=7)}([function(e,t,n){$(document).ready(function(){for(var e=document.getElementsByTagName("INPUT"),t=0;t<e.length;t++)e[t].oninvalid=function(e){if(!e.target.validity.valid)switch(e.target.id){case"name":case"name1":e.target.setCustomValidity("Введите имя");break;case"phone":case"phone1":e.target.setCustomValidity("Введите телефон");break;case"form-check-input":case"form-check-input1":e.target.setCustomValidity("Необходимо согласие на обработку");break;default:e.target.setCustomValidity("")}},e[t].oninput=function(e){e.target.setCustomValidity("")}})},function(e,t,n){var o=$(".popup__DoneJS"),i=$("#submit-form"),r=$(".popup__DoneJS1"),c=$("#submit-form1"),u=$(".loader");function a(e,t,o){$(document).ready(function(){var n=t;e.submit(function(e){e.preventDefault(),u[o].style.opacity=1,u[o].style.display="inline-block";var t=$(this);return $.ajax({type:"POST",url:"server.php",data:t.serialize()}).done(function(){u[o].style.opacity=0,u[o].style.display="none",n.fadeTo("slow",0,function(){$(this).fadeTo("slow",1).after(function(){var e=this;setTimeout(function(){$(e).fadeTo("slow",0)},7e3)})}),setTimeout(function(){t.trigger("reset")},1e3)}).catch(function(e){e.statusText&&console.log(e.statusText)}),!1})})}a(i,o,1),a(c,r,0)},function(e,t,n){document.addEventListener("DOMContentLoaded",function(e){!function(e){var t=document.querySelectorAll('[href^="#"]'),n=document.querySelector(".header-container").offsetHeight,o=document.querySelector(".header-second__container"),i=document.querySelector(".header-wrap");"static"!==window.getComputedStyle(i).position&&(o.style.paddingTop=n+"px");for(var r=0;r<t.length;r++)t[r].addEventListener("click",function(e){e.preventDefault();var i=window.pageYOffset,t=this.href.replace(/[^#]*(.*)/,"$1"),r=document.querySelector(t).getBoundingClientRect().top-n,c=null;requestAnimationFrame(function e(t){null===c&&(c=t);var n=t-c,o=r<0?Math.max(i-n/.3,i+r):Math.min(i+n/.3,i+r);window.scrollTo(0,o),o!=i+r&&requestAnimationFrame(e)})},!1)}()})},function(e,t,n){document.addEventListener("DOMContentLoaded",function(e){var t;t=document.querySelectorAll(".ourworks-btn"),Array.from(t).forEach(function(n){n.addEventListener("mouseover",function(e){var t=e.target.innerHTML;e.target.innerHTML="Заказать",n.addEventListener("mouseout",function(e){e.target.innerHTML=t})})});var n=document.querySelector(".header-second__form-privacy"),o=document.querySelector(".privacy-cont"),i=document.querySelector(".popup__form-privacy"),r=document.querySelector(".popup-privacy-cont");function c(e,t){e.addEventListener("mouseover",function(){t.style.display="initial"}),e.addEventListener("mouseleave",function(){t.style.display="none"})}c(n,o),c(i,r),function(){var e=document.querySelectorAll(".js-popup-btn"),t=Array.from(e),o=document.querySelector(".popup-cont"),i=document.querySelector(".popup-wrap"),n=document.querySelector(".popup-exit"),r=document.body,c=!1;function u(e){e.addEventListener("click",function(e){e.stopPropagation(),c=!1,o.style.display="none",i.style.display="none",r.style.overflow="initial"})}u(o),u(n),t.forEach(function(e){e.addEventListener("click",function(n){requestAnimationFrame(function(){return function(e){n.preventDefault();var t=-document.body.getBoundingClientRect().top;o.style.display="block",o.style.top=t+"px",i.style.display="block",i.style.top=t+"px",r.style.overflow="hidden",c=!c}()})})})}()})},function(e,t,n){document.addEventListener("DOMContentLoaded",function(e){!function(){var e=document.querySelectorAll(".howitworks-right__tab"),t=document.querySelectorAll(".howitworks-right__line"),c=document.querySelector(".howitworks-left__desc-text"),u=[],a=[],s=[{id:"jsDocs",text:"Мы проверяем автомобиль на наличие штрафов, залогов и ограничений на регистрационные действия. Затем идет проверка на достоверность идентификационных номеров на кузове, VIN кода, соответствие кодов комплектации и сравнение их с настоящими данными"},{id:"jsBody",text:"Полностью осматриваем силовую конструкцию (усилители, крышу, стойки, лонжероны, днище) и навесные элементы (крылья, двери, капот и т.д) на наличие повреждений, в том числе скрытых. Лакокрасочное покрытие сначала проходит визуальный осмотр, затем каждый элемент кузова проверяется толщиномером"},{id:"jsEngine",text:"Проводим общий осмотр двигателя и всех прилегающих агрегатов, заводим, слушаем, и оцениваем его работу. Выполняем компьютерную диагностику. Если все хорошо, едем на тест драйв"},{id:"jsWheel",text:"Выполняем диагностику амортизаторов, сайлентблоков, резиновых уплотнений, пыльников, и всех остальных подвижных и неподвижных элементов подвески. Осматриваем систему рулевого управления автомобиля (рейка, тяги, наконечники и и т.д.)"},{id:"jsBrake",text:"Особое внимание уделяется тормозной системе, так как от ее исправного состояния зависит Ваша безопасноть на дороге. Проверяем механические элементы (тормозные диски, колодки, шланги) и электронные (антипробуксовка, антизанос, антиблокировка и т.д)"}];function n(e,t,n){for(var o=Array.from(e),i=0;i<=t;i++)n.push(o[i]);return n}c.innerHTML="<p>"+s[0].text+"</p>",n(e,s.length-1,u),n(t,s.length-1,a),u.forEach(function(e){e.addEventListener("click",function(e){var t=e.target.getAttribute("id"),n=[].concat(s).filter(function(e){return e.id===t}),o=[].concat(a).filter(function(e){return e.classList.contains(t)});for(var i in u)u[i].classList.remove("js-tab-active");for(var r in a)a[r].classList.remove("js-line-active");!e.target.classList.contains("js-tab-active")&&(e.target.classList.add("js-tab-active"),o[0].classList.add("js-line-active"),c.innerHTML="<p>"+n[0].text+"</p>")})})}()})},function(e,t,n){document.addEventListener("DOMContentLoaded",function(e){!function(){var t=document.querySelector(".js-slider-left"),n=document.querySelector(".js-slider-right"),o=document.querySelector(".js-slider-items"),e=Array.from(document.querySelectorAll(".ourcustomers-item")),i=document.querySelector(".ourcustomers-slider__wrap").offsetWidth,r=Array.from(document.querySelectorAll(".slide-desc-JS")),c=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=c;var u=0,a=0,s=2*i,l=i;r[1].style.display="none",r[2].style.display="none",e.forEach(function(e){e.style.width=i+"px"});var d=0;function f(e){if(a<2&&(r[a].style.display="none",r[a+=1].style.display="initial"),d<s&&(d+=l,o.style.right=d+"px",t.style.opacity=1,t.style.cursor="pointer"),d!==s)return null;n.style.opacity=.2,n.style.cursor="initial"}function y(e){if(0<a&&(r[a].style.display="none",r[a-=1].style.display="initial"),u<d&&(d-=l,o.style.right=d+"px",n.style.opacity=1,n.style.cursor="pointer"),d!==u)return null;t.style.opacity=.2,t.style.cursor="initial"}o.style.right=d,n.onclick=function(){c(f)},t.onclick=function(){c(y)}}()})},function(e,t,n){function o(e){document.body.style.overflow=e}o("hidden"),window.onload=function(){var t,n;o("initial"),t=document.querySelector(".speedometer"),n=document.querySelector(".spinner-bg"),new Promise(function(e){t.style.opacity=0,n.style.opacity=0,setTimeout(function(){t.style.display="none",n.style.display="none",e()},300)}),document.querySelector(".header-second__container--left").style.left="0px"}},function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}o(n(6)),o(n(5)),o(n(4)),o(n(3)),o(n(2)),o(n(1)),o(n(0))}]);