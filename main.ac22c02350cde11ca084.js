(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,n,i){},QfWi:function(t,n,i){"use strict";i.r(n);i("L1EO");var a=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],e={startBtn:document.querySelector('button[data-action="start"]'),stopBtn:document.querySelector('button[data-action="stop"]')},o={intervalId:null,isActiveStartBtn:!1,min:0,max:a.length-1,start:function(){var t=this;if(!this.isActiveStartBtn){this.isActiveStartBtn=!0;this.intervalId=setInterval((function(){var n,i;document.body.style.backgroundColor=a[(n=t.min,i=t.max,Math.floor(Math.random()*(i-t.min+1)+n))]}),1e3)}},stop:function(){clearInterval(this.intervalId),this.isActiveStartBtn=!1}};e.startBtn.addEventListener("click",(function(){o.start()})),e.stopBtn.addEventListener("click",(function(){o.stop()}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.ac22c02350cde11ca084.js.map