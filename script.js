showCoaches = () => {
  let cards = "";
  coaches.forEach(coach => {
    cards += getCoachCardTemplate(coach)
  });
  document.getElementById('coach-card').innerHTML = cards;
}

getCoachCardTemplate = (coach) => {
  let html = `
          <div class="card" style="width: 300px; margin: 10px">
            <div class="card-body">
              <div class="row">
                <div class="col-8">
                  <h2 class="card-title display-4" style="font-family: 'Bebas Neue';">${coach.name}</h2>
                </div>
                <div class="col-4">
                  <div class="icon">${checkStatus(coach)}</div>
                </div>
              </div>
              <h4 class="card-subtitle mb-2 text-muted">${displayTimeNow(coach)}${coach["UTC"]}</h4>
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
                    <h1>${coaches[index]["name"]}</h1>
                    <span>${coaches[index]["description"]}</span>
                </div>
            </div>
        </div>
    `;
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
  intervalId = setInterval(() => showCoaches(), 1000);
};

window.onbeforeunload = () => {
  clearInterval(intervalId);
}









//Check if time if available






