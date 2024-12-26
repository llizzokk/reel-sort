import"./assets/top-link-2D5TQWkj.js";import{a as p}from"./assets/vendor-C0Nsn3Ff.js";const h="5cd3b967f25ca5ea88c6b3955d7951c5",f="https://api.themoviedb.org/3",L=`${f}/genre/movie/list`,v=`${f}/discover/movie`;async function w(){try{return(await p.get(L,{params:{api_key:h}})).data.genres}catch(e){throw console.error("Ошибка загрузки жанров:",e),e}}async function d(e,n=1,o=15){try{return(await p.get(v,{params:{api_key:h,with_genres:e,page:n}})).data.results}catch(t){throw console.error("Ошибка загрузки фильмов:",t),t}}function E(e,n){n.innerHTML="",e.forEach(o=>{const t=document.createElement("button");t.className="genres-list-button",t.textContent=o.name,t.dataset.genreId=o.id,n.appendChild(t)})}function m(e,n){if(e.length===0){n.innerHTML="<p>Фильмы не найдены.</p>";return}e.forEach(o=>{const t=document.createElement("li");t.className="movies-list-item",t.innerHTML=`
      <img src="https://image.tmdb.org/t/p/w200${o.poster_path}" alt="${o.title}" class="movies-item-img" width="234" height="351">
      <h3 class="movies-item-title">${o.title}</h3>
    `,n.insertAdjacentElement("beforeend",t)})}const y=document.querySelector(".genresContainer"),l=document.querySelector(".moviesContainer"),a=document.getElementById("load-btn"),r=document.querySelector(".loader-container");let i=1,s=null,u=15;const b=new URLSearchParams(window.location.search);function S(e){return b.get(e)}function C(e){return b.get(e)}s=S("genre");const q=C("genreName");async function I(){try{if(s){r.style.display="flex";const n=await d(s,i,u);m(n,l);const o=document.querySelector(".dropdown-button");o.textContent=q,a.classList.replace("load-more-hidden","btn")}const e=await w();E(e,y),y.addEventListener("click",async n=>{if(n.target.classList.contains("genres-list-button")){document.querySelectorAll(".genres-list-button").forEach(t=>t.classList.remove("genres-activated")),window.scrollTo({top:0,behavior:"smooth"}),n.target.classList.add("genres-activated"),s=n.target.dataset.genreId,i=1,a.classList.replace("load-more-hidden","btn"),l.innerHTML="";try{r.style.display="flex";const t=await d(s,i,u);m(t,l)}catch(t){console.error("Ошибка при загрузке фильмов:",t)}finally{r.style.display="none"}}})}catch(e){console.log(e.message),errorMessage.classList.replace("error-hidden","error-message")}finally{r.style.display="none"}}I();a.addEventListener("click",k);async function k(){if(s){a.classList.replace("btn","load-more-hidden"),i+=1;try{r.style.display="block";const e=await d(s,i,u);m(e,l);const o=document.querySelector(".movies-list-item").getBoundingClientRect().height;window.scrollBy({left:0,top:o,behavior:"smooth"}),a.classList.replace("load-more-hidden","btn")}catch(e){console.log(e.message),errorMessage.classList.replace("error-hidden","error-message")}finally{a.disabled=!1,r.style.display="none"}}}const g=document.querySelector(".dropdown"),M=document.querySelector(".dropdown-button"),c=document.querySelector(".genresContainer");document.querySelectorAll(".genres-list-button");g.addEventListener("mouseover",function(){c.style.display="flex"});g.addEventListener("mouseleave",function(){c.style.display="none"});document.addEventListener("click",function(e){g.contains(e.target)||(c.style.display="none")});c.addEventListener("click",function(e){e.target&&e.target.classList.contains("genres-list-button")&&(M.textContent=e.target.textContent,c.style.display="none")});
//# sourceMappingURL=page-2.js.map
