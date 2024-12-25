import"./assets/top-link-Cs-_7EIG.js";import{a as r}from"./assets/vendor-C0Nsn3Ff.js";const a="https://api.themoviedb.org/3",c="/movie/top_rated",i="5cd3b967f25ca5ea88c6b3955d7951c5",n=document.querySelector(".moviesContainer"),s=document.querySelector(".loader-container"),l=document.querySelector(".error");async function m(){const{data:e}=await r(`${a}${c}`,{params:{api_key:i}});return e.results}m().then(e=>{s.style.display="block";const o=d(e);n.insertAdjacentHTML("beforeend",o)}).catch(e=>{console.log(e.message),l.classList.replace("error-hidden","error-message")}).finally(()=>{s.style.display="none"});function d(e){return e.map(({poster_path:o,title:t})=>`<li class="movies-list-item">
            <img src="https://image.tmdb.org/t/p/w200${o}" alt="${t}" class="movies-item-img">
      <h3 class="movies-item-title">${t}</h3>
        </li>`).join("")}
//# sourceMappingURL=page-3.js.map
