import"./assets/top-link-2D5TQWkj.js";import{a as d,A as l,S as u,N as m,K as p,i as v}from"./assets/vendor-C0Nsn3Ff.js";const y="https://api.themoviedb.org/3",h="/trending/movie/week",b="5cd3b967f25ca5ea88c6b3955d7951c5",r=document.querySelector(".top-movie-list"),a=document.querySelector(".loader-container"),f=document.querySelector(".error");async function w(){const{data:e}=await d(`${y}${h}`,{params:{api_key:b}});return e.results}w().then(e=>{a.style.display="block";const s=c(e);r.insertAdjacentHTML("beforeend",s);const n=c(e);r.insertAdjacentHTML("beforeend",n);const o=r.firstElementChild.offsetWidth,t=e.length*2,i=(o+16)*t;r.style.width=`${i}px`,r.style.animationDuration=`${t*2}s`}).catch(e=>{console.log(e.message),f.classList.replace("error-hidden","error-message")}).finally(()=>{a.style.display="none"});function c(e){return e.map(({poster_path:s,original_title:n,overview:o})=>`<li class="movie-card">
            <img src="https://image.tmdb.org/t/p/w300${s}" alt="${n}" class="movie-card-img" width="252" height="375">
            <div class="movie-card-overlay">
              <h3 class="movie-card-title">${n}</h3>
              <p class="movie-card-description">${o}</p>
            </div>
        </li>`).join("")}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".genres-item");function s(){e.forEach((o,t)=>{setTimeout(()=>{o.style.opacity=1,o.style.transform="translateX(0)"},t*300)})}const n=new IntersectionObserver(o=>{o.forEach(t=>{t.isIntersecting&&(s(),n.disconnect())})},{threshold:.3});n.observe(document.querySelector(".genres-section"))});document.addEventListener("DOMContentLoaded",()=>{new l("#ac-list",{closeOther:!0}).open(0)});new u(".swiper",{keyboard:{enabled:!0,onlyInViewport:!0},modules:[m,p],slidesPerView:1,spaceBetween:20,direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},centeredSlides:!0,breakpoints:{768:{slidesPerView:1,spaceBetween:32},1280:{spaceBetween:32,centeredSlides:!1,slidesPerView:2}}});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("feedbackForm"),s=document.getElementById("submitButton"),n=document.querySelectorAll(".feedback-input");if(!e||!s){console.error("Форма или кнопка не найдены!");return}const o=()=>{const t=Array.from(n).every(i=>i.value.trim()!=="");s.disabled=!t};n.forEach(t=>{t.addEventListener("input",o)}),e.addEventListener("submit",t=>{t.preventDefault(),v.success({message:"Feedback was successfully sent!",messageColor:"#dfe0e2",backgroundColor:"#37302c",position:"topRight"}),e.reset(),s.disabled=!0}),o()});window.addEventListener("load",()=>{window.scrollTo(0,0)});
//# sourceMappingURL=index.js.map
