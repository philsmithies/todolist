(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"body{\n  background-color: #FFF5EB;\n  font-family: Helvetica, sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nnav{\n  width: 100%;\n  background-color: #ffd737;\n  height: 4em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nul{\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  float: left;\n  padding: 8px;\n}\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  height: 100%;\n  text-decoration: none;\n}\n\nli a:hover{\n  cursor: pointer;\n  background-color: grey;\n}\n\n#content{\n  padding: 5em;\n  background-color: rgb(250, 225, 230);\n}\n\n#todo{\n  width: 100%;\n  border: 1px solid black;\n  height: 2.5em;\n  border-radius: 10px;\n}\n\n#todo:hover{\n  cursor: pointer;\n  background-color: rgb(203, 203, 203);\n}\n\n#toDoOptions{\n  display: flex;\n  justify-content: space-between;\n}\n\n#newTodo{\n  width: 500px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n\n#textEntry{\n  margin: 0 auto;\n  width: 100%;\n  border: 1px solid black;\n  height: 2em;\n  border-radius: 10px;\n  display: block;\n  margin-bottom: 0.5em;\n}\n\n#addBtn{\n  width: 47%;\n  height: 2em;\n  background-color: green;\n  border-radius: 5px;\n  border: 0.5px solid black;\n}\n\n#cancelBtn{\n  width: 47%;\n  height: 2em;\n  background-color: red;\n  border-radius: 5px;\n  border: 0.5px solid black;\n}\n\nbutton:hover{\n  cursor: pointer;\n}",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},695:n=>{var e={};n.exports=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],d=0;d<n.length;d++){var c=n[d],u=r.base?c[0]+r.base:c[0],l=i[u]||0,s="".concat(u," ").concat(l);i[u]=l+1;var p=t(s),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(e[p].references++,e[p].updater(f)):e.push({identifier:s,updater:o(f,r),references:1}),a.push(s)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var c=r(n,o),u=0;u<i.length;u++){var l=t(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(695),a=t.n(i),d=t(216),c=t.n(d),u=t(28),l={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=t.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=a()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}};l.domAPI=o(),l.insertStyleElement=c(),e()(u.Z,l),u.Z&&u.Z.locals&&u.Z.locals;document.body.appendChild((document.getElementById("navbar").appendChild(function(){const n=document.createElement("div");return n.innerHTML="\n  <nav><h1>Just ToDoIt</h1></nav>\n  ",n}()),function(){const n=document.getElementById("content");n.textContent="",n.appendChild(function(){const n=document.createElement("div"),e=document.createElement("h1");return e.innerText="Inbox",n.appendChild(e),n.appendChild(function(){const n=document.createElement("div");n.id="newTodo";const e=document.createElement("button");return e.innerText="+ Add Task",e.id="todo",e.addEventListener("click",(()=>{e.style.display="none";const t=document.createElement("div");t.id="enterTodo";const r=document.createElement("input");r.setAttribute("type","text"),r.id="textEntry";const o=document.createElement("div");o.id="toDoOptions";const i=document.createElement("button");i.innerText="Add",i.id="addBtn";const a=document.createElement("button");a.innerText="Cancel",a.id="cancelBtn",t.appendChild(r),o.appendChild(i),o.appendChild(a),t.appendChild(o),n.appendChild(t)})),n.appendChild(e),n}()),n}())}(),document.getElementById("content")))})()})();