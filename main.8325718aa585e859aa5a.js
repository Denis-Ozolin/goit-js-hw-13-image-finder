(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e);t("L1EO"),t("Anew"),t("JBxO"),t("FdtR");var a={searchQuery:"",page:1,perPage:12,fetchImages:function(){var n=this,e="https://pixabay.com/api/?image_type=photo&orientation=horizontal\n  &q="+this.searchQuery+"&page="+this.page+"&per_page="+this.perPage+"&key=20731913-04720c2299aa0ca3b12520f7d";return fetch(e).then((function(n){return n.json()})).then((function(e){return n.incrementPage(),e.hits}))},getQuery:function(){return this.searchQuery},setQuery:function(n){this.searchQuery=n},incrementPage:function(){this.page+=1},resetPage:function(){this.page=1}},l=t("vEB5"),r=t.n(l),o={searchInput:document.querySelector("#search-form"),imgGallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more-btn")},i=0;function s(n){o.imgGallery.insertAdjacentHTML("beforeend",r()(n))}o.searchInput.addEventListener("submit",(function(n){n.preventDefault(),o.imgGallery.innerHTML="";var e=n.currentTarget.elements.query.value;a.setQuery(e),a.resetPage(),a.fetchImages().then((function(n){s(n),o.loadMoreBtn.classList.add("is-hidden")}))})),o.loadMoreBtn.addEventListener("click",(function(){a.fetchImages().then((function(n){s(n),i+=window.innerHeight,window.scrollTo({top:i,behavior:"smooth"})}))}))},vEB5:function(n,e,t){var a=t("mp5j");n.exports=(a.default||a).template({1:function(n,e,t,a,l){var r,o=null!=e?e:n.nullContext||{},i=n.hooks.helperMissing,s="function",c=n.escapeExpression,u=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<li>\r\n  <div class="photo-card">\r\n    <img src='+c(typeof(r=null!=(r=u(t,"webformatURL")||(null!=e?u(e,"webformatURL"):e))?r:i)===s?r.call(o,{name:"webformatURL",hash:{},data:l,loc:{start:{line:4,column:13},end:{line:4,column:29}}}):r)+" alt="+c(typeof(r=null!=(r=u(t,"tags")||(null!=e?u(e,"tags"):e))?r:i)===s?r.call(o,{name:"tags",hash:{},data:l,loc:{start:{line:4,column:34},end:{line:4,column:42}}}):r)+' />\r\n\r\n    <div class="stats">\r\n      <p class="stats-item">\r\n        <i class="material-icons">thumb_up</i>\r\n        '+c(typeof(r=null!=(r=u(t,"likes")||(null!=e?u(e,"likes"):e))?r:i)===s?r.call(o,{name:"likes",hash:{},data:l,loc:{start:{line:9,column:8},end:{line:9,column:17}}}):r)+'\r\n      </p>\r\n      <p class="stats-item">\r\n        <i class="material-icons">visibility</i>\r\n        '+c(typeof(r=null!=(r=u(t,"views")||(null!=e?u(e,"views"):e))?r:i)===s?r.call(o,{name:"views",hash:{},data:l,loc:{start:{line:13,column:8},end:{line:13,column:17}}}):r)+'\r\n      </p>\r\n      <p class="stats-item">\r\n        <i class="material-icons">comment</i>\r\n        '+c(typeof(r=null!=(r=u(t,"comments")||(null!=e?u(e,"comments"):e))?r:i)===s?r.call(o,{name:"comments",hash:{},data:l,loc:{start:{line:17,column:8},end:{line:17,column:20}}}):r)+'\r\n      </p>\r\n      <p class="stats-item">\r\n        <i class="material-icons">cloud_download</i>\r\n        '+c(typeof(r=null!=(r=u(t,"downloads")||(null!=e?u(e,"downloads"):e))?r:i)===s?r.call(o,{name:"downloads",hash:{},data:l,loc:{start:{line:21,column:8},end:{line:21,column:21}}}):r)+"\r\n      </p>\r\n    </div>\r\n  </div>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,a,l){var r;return null!=(r=(n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]})(t,"each").call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:1,column:0},end:{line:26,column:9}}}))?r:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.8325718aa585e859aa5a.js.map