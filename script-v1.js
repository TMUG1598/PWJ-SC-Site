showCoaches = () => {
    let cards = "";
    coaches.forEach((coach) => {
      cards += getCoachCardTemplate(coach);
    });
    document.getElementById("coach-card").innerHTML = cards;
};
  
getCoachCardTemplate = (coach) => {
    let html = `
            <div class="card" style="width: 400px; margin: 10px">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <h2>${coach.name}</h2>
                    <div style="width: 100px; height: 100px; border-radius: 50%; overflow: hidden;">
                      <img src=${coach.profpic} alt="" width="100px"></img>
                    </div>
                </div>
                <p class="card-subtitle text-muted">${displayTimeNow(coach)}${coach["UTC"]}</p>
                <a class="text-primary" href= ${coach["slack"].profileSearchUrl}${coach["slack"].userId} target="_blank">
                    Open ${coach["name"]}'s <i class="fab fa-slack"></i> Profile
                </a>
              </div>
            </div>
          `;
    return html;
};

displayTimeNow = (coach) => {
    let date = new Date();
    date.setHours(date.getHours() + coach["diff"].hours);
    date.setMinutes(date.getMinutes() + coach["diff"].minutes);
    var n = date.toUTCString();
  
    return n;
};

displayCoachSlide = () => {
    setTimeout(() => {
      var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        spaceBetween: 0,
        autoplay: 3000,
        speed: 800,
  
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },
  
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  
        // And if we need scrollbar
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    }, 0);
    let slidesHTML = "";
    coaches.forEach((coach) => {
      slidesHTML += `
          <div class="p-5 swiper-slide">
            <div class="coach-info-container">
              <div class="profile-picture" style="background-image: url(${coach.profpic})"></div>
              <div class="coach-info">
                <h1>${coach.name}</h1>
                <p>${coach.description}</p>
              </div>
            </div>
            <div class="skill-container">
                <h2>Statistics</h2>
                <p><span>Skills:</span> ${coach.skills}</p>
                <p><span>Rating:</span> ${coach.rating}</p>
                <p><span>Clients:</span> ${coach.clients}</p>
            </div>
          </div>
      `;
    });
    document.querySelector(".swiper-wrapper").innerHTML = slidesHTML;
};

scrollBar = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
};


let intervalId;
window.onload = function () {
    showCoaches();
    AOS.refresh();
    intervalId = setInterval(() => showCoaches(), 1000);
    displayCoachSlide();
};

window.onscroll = function () {
    scrollBar();
};

window.onbeforeunload = () => {
    clearInterval(intervalId);
};
