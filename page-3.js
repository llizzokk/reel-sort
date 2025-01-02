import"./assets/lang-toggle-A8p9mm5l.js";import{a as y}from"./assets/vendor-C0Nsn3Ff.js";const f="https://api.themoviedb.org/3",L="/movie/top_rated",b="/search/movie",w="5cd3b967f25ca5ea88c6b3955d7951c5",i=document.querySelector(".moviesContainer"),o=document.getElementById("top-load-btn"),E=document.querySelector(".top-form"),l=document.querySelector(".loader-container"),r=document.querySelector(".error"),d=document.querySelector(".modal"),M=document.querySelector(".modal-close-btn"),S=document.querySelector(".modal-info");let c=1,m="",a=[];async function p(e="",t=1){const s=e?b:L;try{l.style.display="block";const{data:n}=await y(`${f}${s}`,{params:{api_key:w,query:e,language:window.currentLanguage||"en",page:t}});return o.classList.replace("load-more-hidden","btn"),n.results}catch(n){return console.log(n.message),r.classList.replace("error-hidden","error-message"),[]}finally{l.style.display="none"}}(async function(){try{a=await p(),g(a)}catch(t){console.log(t.message),r.classList.replace("error-hidden","error-message")}})();function T(e){return e.map(({poster_path:t,title:s})=>`<li class="movies-list-item">
          <img src="https://image.tmdb.org/t/p/w200${t}" alt="${s}" class="movies-item-img" width="234" height="351">
          <h3 class="movies-item-title">${s}</h3>
      </li>`).join("")}function g(e){if(!e||e.length===0){r.classList.replace("error-hidden","error-message");return}r.classList.replace("error-message","error-hidden");const t=T(e);i.insertAdjacentHTML("beforeend",t)}o.addEventListener("click",$);E.addEventListener("submit",_);M.addEventListener("click",h);i.addEventListener("click",e=>{const t=e.target.closest(".movies-list-item");if(t){const s=[...i.children].indexOf(t);k(a[s])}});async function $(){o.classList.replace("btn","load-more-hidden"),o.disabled=!0,c+=1;try{const e=await p(m,c);a=[...a,...e],g(e);const t=document.querySelector(".movies-list-item");if(t){const s=t.getBoundingClientRect().height;window.scrollBy({left:0,top:s,behavior:"smooth"})}}catch(e){console.log(e.message),r.classList.replace("error-hidden","error-message")}finally{o.classList.replace("load-more-hidden","btn"),o.disabled=!1}}async function _(e){e.preventDefault();const t=e.currentTarget.elements.search.value.trim();t!==m&&(m=t,c=1,i.innerHTML=""),l.classList.remove("hidden"),o.classList.replace("btn","load-more-hidden");try{a=await p(t,c),g(a),a.length>0&&o.classList.replace("load-more-hidden","btn")}catch(s){console.log(s.message),r.classList.replace("error-hidden","error-message")}finally{l.classList.add("hidden"),e.target.elements.search.value=""}}function k(e){const{title:t,overview:s,poster_path:n,release_date:u,vote_average:v}=e;S.innerHTML=`
    <img src="https://image.tmdb.org/t/p/w500${n}" alt="${t}" width="300" class="modal-img">
    <div class="modal-wrap">
    <h2 class="modal-title">${t}</h2>
    <p class="modal-text">Release Date: <span class="modal-text-span">${u}</span></p>
    <p class="modal-text">Rating: <span class="modal-text-span">${v}</span></p>
    <p class="modal-text">Overview: <span class="modal-text-span">${s}</span></p>
    </div>
  `,d.classList.remove("hidden")}function h(){d.classList.add("hidden")}d.addEventListener("click",e=>{e.target===d&&h()});window.addEventListener("languageChange",async()=>{i.innerHTML="",m="",c=1,a=[];try{a=await p(),g(a)}catch(e){console.error("Error loading movies on language change:",e.message)}});
//# sourceMappingURL=page-3.js.map
