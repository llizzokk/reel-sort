import"./assets/mob-menu-BdZTqTF9.js";import{a as w}from"./assets/vendor-BsI4OLG-.js";const L="5cd3b967f25ca5ea88c6b3955d7951c5",b="https://api.themoviedb.org/3",q=`${b}/genre/movie/list`,k=`${b}/discover/movie`;async function E(){try{return(await w.get(q,{params:{api_key:L,language:window.currentLanguage||"en"}})).data.genres}catch(e){throw console.error(e.message),e}}async function u(e,n=1,o=15){try{return(await w.get(k,{params:{api_key:L,with_genres:e,language:window.currentLanguage||"en",page:n}})).data.results}catch(t){throw console.error(t.message),t}}function S(e,n){n.innerHTML="",e.forEach(o=>{const t=document.createElement("button");t.className="genres-list-button",t.textContent=o.name,t.dataset.genreId=o.id,n.appendChild(t)})}function g(e,n){if(e.length===0){n.innerHTML="<p>No movies found.</p>";return}e.forEach(o=>{const t=document.createElement("li");t.className="movies-list-item",t.innerHTML=`
      <img src="https://image.tmdb.org/t/p/w200${o.poster_path}" alt="${o.title}" class="movies-item-img" width="234" height="351">
      <h3 class="movies-item-title">${o.title}</h3>
    `,n.insertAdjacentElement("beforeend",t),t.addEventListener("click",()=>R(o))})}const h=document.querySelector(".genresContainer"),l=document.querySelector(".moviesContainer"),i=document.getElementById("load-btn"),c=document.querySelector(".loader-container"),p=document.querySelector(".modal"),M=document.querySelector(".modal-close-btn"),_=document.querySelector(".modal-info"),C=document.querySelector(".error");let a=1,s=null,y=15,v=[];const G=new URLSearchParams(window.location.search);function I(e){return G.get(e)}s=I("genre");async function $(){let e=[];try{if(e=await E(),S(e,h),s){c.style.display="flex";const n=await u(s,a,y);g(n,l);const o=document.querySelector(".dropdown-button"),t=e.find(r=>r.id===Number(s));t&&(o.textContent=t.name),i.classList.replace("load-more-hidden","btn")}h.addEventListener("click",async n=>{if(n.target.classList.contains("genres-list-button")){document.querySelectorAll(".genres-list-button").forEach(t=>t.classList.remove("genres-activated")),window.scrollTo({top:0,behavior:"smooth"}),n.target.classList.add("genres-activated"),s=n.target.dataset.genreId,a=1,i.classList.replace("load-more-hidden","btn"),l.innerHTML="";try{c.style.display="flex";const t=await u(s,a,y);g(t,l);const r=e.find(d=>d.id===Number(s));if(r){const d=document.querySelector(".dropdown-button");d.textContent=r.name}}catch(t){console.error(t)}finally{c.style.display="none"}}})}catch(n){console.log(n.message),C.classList.replace("error-hidden","error-message")}finally{c.style.display="none"}}$();i.addEventListener("click",B);M.addEventListener("click",x);async function B(){if(s){i.classList.replace("btn","load-more-hidden"),a+=1;try{c.style.display="block";const e=await u(s,a,y);v=[...v,...e],g(e,l);const o=document.querySelector(".movies-list-item").getBoundingClientRect().height;window.scrollBy({left:0,top:o,behavior:"smooth"}),i.classList.replace("load-more-hidden","btn")}catch(e){console.log(e.message),C.classList.replace("error-hidden","error-message")}finally{i.disabled=!1,c.style.display="none"}}}function R(e){const{title:n,overview:o,poster_path:t,release_date:r,vote_average:d}=e;_.innerHTML=`
    <img src="https://image.tmdb.org/t/p/w500${t}" alt="${n}" width="300" class="modal-img">
    <div class="modal-wrap">
    <h2 class="modal-title">${n}</h2>
    <p class="modal-text">Release Date: <span class="modal-text-span">${r}</span></p>
    <p class="modal-text">Rating: <span class="modal-text-span">${d}</span></p>
    <p class="modal-text modal-overview">Overview: <span class="modal-text-span">${o}</span></p>
    </div>
  `,p.classList.remove("hidden"),document.body.classList.add("no-scroll")}function x(){p.classList.add("hidden"),document.body.classList.remove("no-scroll")}p.addEventListener("click",e=>{e.target===p&&(x(),document.body.classList.remove("no-scroll"))});function P(e,n){const o=e.find(r=>r.id===Number(n)),t=document.querySelector(".dropdown-button");o&&(t.textContent=o.name)}window.addEventListener("languageChange",async()=>{l.innerHTML="",a=1;let e=[],n=[];try{e=await E(),S(e,h),s&&(n=await u(s,a,y),g(n,l),P(e,s))}catch(o){console.error("Error loading movies on language change:",o.message)}});const f=document.querySelector(".dropdown"),T=document.querySelector(".dropdown-button"),m=document.querySelector(".genresContainer");document.querySelectorAll(".genres-list-button");f.addEventListener("mouseover",function(){m.style.display="flex"});f.addEventListener("mouseleave",function(){m.style.display="none"});document.addEventListener("click",function(e){f.contains(e.target)||(m.style.display="none")});m.addEventListener("click",function(e){e.target&&e.target.classList.contains("genres-list-button")&&(T.textContent=e.target.textContent,m.style.display="none")});
//# sourceMappingURL=page-2.js.map
