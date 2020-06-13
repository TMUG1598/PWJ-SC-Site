showCoaches = () => {
    let cards = "";
    coaches.forEach((coach) => {
      cards += getCoachCardTemplate(coach);
    });
    document.getElementById("coach-card").innerHTML = cards;
};
  
getCoachCardTemplate = (coach) => {
    let html = `
            <div class="card" style="width: 400px; margin: 10px" data-aos="zoom-in-up">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <a class="text-dark" href=#${coach.name}><h2 class="text-dark">${coach.name}</h2></a>
                    <a class="text-primary" href=#${coach.name}>
                        <div style="width: 100px; height: 100px; border-radius: 50%; overflow: hidden;">
                            <img src=${coach.profpic} alt="" width="100px"></img>
                        </div>
                    </a>
                </div>
                <p class="card-subtitle text-muted">${coach.country} (GMT${coach.UTC})</p>
                <a class="text-primary" href=#${coach.name}><p>Know More About ${coach.name}</p></a>
                <a class="text-info" href= ${coach["slack"].profileSearchUrl}${coach["slack"].userId} target="_blank">
                    <p>Open ${coach["name"]}'s <i class="fab fa-slack"></i> Profile</p>
                </a>
              </div>
            </div>
          `;
    return html;
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
    let slidesHTML = `
      <div class="p-5 swiper-slide d-flex flex-column align-items-center justify-content-center text-center" data-aos="zoom-out">
          <h1>Learn more about<br> the coaches<br> here!</h1>
          <h2 class="text-info">Use the arrows on the sides</h2>
      </div>
    `;
    coaches.forEach((coach) => {
      slidesHTML += `
          <div class="p-5 swiper-slide d-flex align-items-start justify-content-center" id=${coach.name} data-aos="zoom-out">
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
                  ${bookingCall(coach)}
              </div>
          </div>
      `;
    });
    document.querySelector(".swiper-wrapper").innerHTML = slidesHTML;
};

bookingCall = (coach) => {
    if (coach.setmore === "") {
        return `<button class="btn btn-lg btn-dark">Book a Coaching Call Now</button>`;
    } else {
        return `
        <a href=${coach.setmore} target="_blank">
            <button class="btn btn-lg btn-info">Book a Coaching Call Now</button>
        </a>
        `;
    }
}

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
    // intervalId = setInterval(() => showCoaches(), 1000);
    displayCoachSlide();
};

window.onscroll = function () {
    scrollBar();
};

window.onbeforeunload = () => {
    clearInterval(intervalId);
};
