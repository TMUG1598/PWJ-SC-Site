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


let intervalId;
window.onload = function () {

  showCoaches();
  AOS.refresh();
  intervalId = setInterval(() => showCoaches(), 1000);
};

window.onbeforeunload = () => {
  clearInterval(intervalId);
};
