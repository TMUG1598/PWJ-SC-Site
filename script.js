scrollBar = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

showCoaches = () => {
  let cards = "";
  coaches.forEach(coach => {
    cards += getCoachCardTemplate(coach)
  });
  document.getElementById('coach-card').innerHTML = cards;
}

getCoachCardTemplate = (coach) => {
  let html = `
          <div class="card" style="width: 400px; margin: 10px">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                  <h2 class="card-title display-4" style="font-family: 'Bebas Neue';">${coach.name}</h2>
                  <div style="width: 100px; height: 100px; border-radius: 50%; overflow: hidden;">
                    <img src=${coach.profpic} alt="" width="100px"></img>
                  </div>
              </div>
              <h6 class="card-subtitle mb-2 text-muted">${displayTimeNow(coach)}${coach["UTC"]}</h6>
              <p class="card-text"></p>
              <a class="text-primary" href= ${coach["slack"].profileSearchUrl}${coach["slack"].userId} target="_blank">
                  Open ${coach["name"]}'s <i class="fab fa-slack"></i> Profile
              </a>
            </div>
          </div>
        `;
  return html;
}

checkStatus = (coach) => {
  let date = new Date();
  date.setHours(date.getHours() + coach["diff"].hours);
  date.setMinutes(date.getMinutes() + coach["diff"].minutes);
  var hour = date.getUTCHours();

  if (hour >= coach["available"][0] && hour < coach["available"][1]) {
    return `<div class="text-primary"><i class="fas fa-thumbs-up"></i></div>`;
  } else {
    return `<div class="text-danger"><i class="fas fa-bed"></i></div>`;
  }
}

displayTimeNow = (coach) => {
  let date = new Date();
  date.setHours(date.getHours() + coach["diff"].hours);
  date.setMinutes(date.getMinutes() + coach["diff"].minutes);
  var n = date.toUTCString();

  return n;
}


openProfile = (btn, index) => {
  let tabName = document.getElementsByClassName('tabname');
  for (let i = 0; i < tabName.length; i++) {
    if (tabName[i].classList.contains('active') == true) {
      tabName[i].classList.remove('active');
    }
  }
  btn.classList.toggle("active");
  document.getElementById("tabcontent").innerHTML = `
        <div class="gallery-info text-light" data-aos="zoom-in">
            
            <div class="row"> 
                <div class="col col-md-auto gallery-img-col"> 
                    <img class="img-thumbnail" src=${coaches[index]["profpic"]} alt="" width="380px" ></img>
                </div>

                <div class="col gallery-info-desc"> 

              
                <div id="mySidenav" class="sidenav">
                  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                  <a href="#"><span>Our Stats</span></a>
                  <a href="#"><span>Skills:</span> ${stats[index]['skills']}</a>
                  <a href="#"><span>Rating:</span> ${stats[index]['rating']}</a>
                  <a href="#"><span>Clients:</span> ${stats[index]['clients']}</a>
                </div>
                    <h1 class = "gallery-header">${coaches[index]["name"]}</h1>
                    <button type = "button" class = "btn  btn-info btn-stats" onclick="openNav()">Click To see stats</button>
                    <span class = "gallery-desc">${coaches[index]["description"]}</span>
                </div>
            </div>
        </div>
    `;
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

createCoachesGallery = () => {
  let coachGallerylist = [];
  coaches.forEach((coach, index) => {
    coachGallerylist += `<button class="tabname tablinks" onclick="openProfile(this, ${index})">${coach.name}</button>`;
  });

  document.getElementById("tab").innerHTML = coachGallerylist;
  let arrow = "<i class='fas fa-arrow-circle-left arrow-icon'></i>".repeat(3);
  document.getElementById("tabcontent").innerHTML = `
        <div class="d-flex flex-column justify-content-center align-items-center" style="height: 400px;">
            <h1 class="text-primary display-1">${arrow}</h1>
        </div>
        `;
}


let intervalId;
window.onload = function () {
  createCoachesGallery();
  showCoaches();
  AOS.refresh();
  intervalId = setInterval(() => showCoaches(), 1000);
};

window.onscroll = function() {scrollBar()};

window.onbeforeunload = () => {
  clearInterval(intervalId);
}









//Check if time if available






