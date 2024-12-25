import"./assets/top-link-Cs-_7EIG.js";import{a as p}from"./assets/vendor-C0Nsn3Ff.js";const f="5cd3b967f25ca5ea88c6b3955d7951c5",h="https://api.themoviedb.org/3",v=`${h}/genre/movie/list`,w=`${h}/discover/movie`;async function L(){try{return(await p.get(v,{params:{api_key:f}})).data.genres}catch(e){throw console.error("Ошибка загрузки жанров:",e),e}}async function d(e,n=1,o=15){try{return(await p.get(w,{params:{api_key:f,with_genres:e,page:n}})).data.results}catch(t){throw console.error("Ошибка загрузки фильмов:",t),t}}function E(e,n){n.innerHTML="",e.forEach(o=>{const t=document.createElement("button");t.className="genres-list-button",t.textContent=o.name,t.dataset.genreId=o.id,n.appendChild(t)})}function m(e,n){if(e.length===0){n.innerHTML="<p>Фильмы не найдены.</p>";return}e.forEach(o=>{const t=document.createElement("li");t.className="movies-list-item",t.innerHTML=`
      <img src="https://image.tmdb.org/t/p/w200${o.poster_path}" alt="${o.title}" class="movies-item-img">
      <h3 class="movies-item-title">${o.title}</h3>
    `,n.insertAdjacentElement("beforeend",t)})}const g=document.querySelector(".genresContainer"),l=document.querySelector(".moviesContainer"),s=document.getElementById("load-btn"),a=document.querySelector(".loader-container");let c=1,r=null,u=15;const b=new URLSearchParams(window.location.search);function S(e){return b.get(e)}function C(e){return b.get(e)}r=S("genre");const q=C("genreName");async function I(){try{if(r){a.style.display="flex";const n=await d(r,c,u);m(n,l);const o=document.querySelector(".dropdown-button");o.textContent=q,s.classList.replace("load-more-hidden","btn")}const e=await L();E(e,g),g.addEventListener("click",async n=>{if(n.target.classList.contains("genres-list-button")){document.querySelectorAll(".genres-list-button").forEach(t=>t.classList.remove("genres-activated")),window.scrollTo({top:0,behavior:"smooth"}),n.target.classList.add("genres-activated"),r=n.target.dataset.genreId,c=1,s.classList.replace("load-more-hidden","btn"),l.innerHTML="";try{a.style.display="flex";const t=await d(r,c,u);m(t,l)}catch(t){console.error("Ошибка при загрузке фильмов:",t)}finally{a.style.display="none"}}})}catch(e){console.error("Ошибка инициализации приложения:",e)}finally{a.style.display="none"}}I();s.addEventListener("click",x);async function x(){if(r){s.classList.replace("btn","load-more-hidden"),c+=1;try{a.style.display="flex";const e=await d(r,c,u);m(e,l);const o=document.querySelector(".movies-list-item").getBoundingClientRect().height;window.scrollBy({left:0,top:o,behavior:"smooth"}),s.classList.replace("load-more-hidden","btn")}catch(e){console.log("Ошибка при загрузке следующих фильмов:",e)}finally{s.disabled=!1}}}const y=document.querySelector(".dropdown"),P=document.querySelector(".dropdown-button"),i=document.querySelector(".genresContainer");document.querySelectorAll(".genres-list-button");y.addEventListener("mouseover",function(){i.style.display="flex"});y.addEventListener("mouseleave",function(){i.style.display="none"});document.addEventListener("click",function(e){y.contains(e.target)||(i.style.display="none")});i.addEventListener("click",function(e){e.target&&e.target.classList.contains("genres-list-button")&&(P.textContent=e.target.textContent,i.style.display="none")});
//# sourceMappingURL=page-2.js.map