var coaches = [
  {
    name: "Fizan",
    UTC: "-7",
    diff: { hours: -7, minutes: 0 },
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
    slack: { userId: "U011EKCLJKE", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
  {
    name: "Kiska",
    UTC: "-6",
    diff: { hours: -6, minutes: 0 },
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
    slack: { userId: "U011ZGK9T70", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
  {
    name: 'Jenn',
    UTC: '-5',
    diff: { hours: -5, minutes: 0 },
    available: [9, 17],
    profpic: 'img/Jenn.png',
    description: "I am a frontend developer with expertise in CSS styling, data visualizations (using d3.js and chart.js), and UI/UX design. I am a bit quirky with a touch of fanciful imagination and a lover of shiny tech gadgets. I belive sharing memes is a true love language. I aspire to make the world a better place one smile at a time. My pronouns are She/Her.",
    slack: { userId: "U012QP89WTB", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
  {
    name: "Usman",
    UTC: "-5",
    diff: { hours: -5, minutes: 0 },
    available: [10, 18],
    profpic: "img/Usman.jpg",
    description: "I am QA Automation Tester &  Becoming Full Stack Developer very soon. I am in EST time zone. I am good in HTML, CSS, JSON, and JS and my available time 10 am est to 18 est (14 est to 14:30 est is exception)",
    slack: { userId: "U0132DUPHCY", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
  {
    name: "Jessica",
    UTC: "-5",
    diff: { hours: -5, minutes: 0 },
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
    slack: { userId: "U011CNDCVSB", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
  {
    name: "Rishi",
    UTC: "-4",
    diff: { hours: -4, minutes: 0 },
    available: [9, 17],
    profpic: "img/Rishi.jpg",
    description:
      "I am a 21 year old developer who just graduated in Mobile Application Design and Development and I am based in Canada for now. I have expertise in JavaScript, React and I am very enthusiast about Augmented Reality as I am working on one project based on AR and I love how machine learning and deep learning is changing th world. Enrolling in PWJ is one of the best thing I did in my life and I swear I mean it. Becoming Success Coach is kinda first achievement in my field in my life and I am vert proud of myself for that. This is the best community and I look forward to teach and learn as much as I can.",
    slack: { userId: "U0123Q83D6X", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
  {
    name: "Youssef",
    UTC: "+1",
    diff: { hours: 1, minutes: 0 },
    available: [9, 17],
    profpic: "img/Yousseff.JPG",
    description:
      "I am a JavaScript Developer and a Microsoft Student Partner. I am passionate about CODING and new technologies. AND OF COURSE I LOVE PIZZA",
    slack: { userId: "U012C8ZKXNF", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
  {
    name: "Abdou",
    UTC: "+2",
    diff: { hours: 2, minutes: 0 },
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
    slack: { userId: "U011B8BFZBR", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
  {
    name: "David",
    UTC: "+2",
    diff: { hours: 2, minutes: 0 },
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
    slack: { userId: "U011LV52PMG", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
  {
    name: "Muizz",
    UTC: "+2",
    diff: { hours: 2, minutes: 0 },
    available: [9, 17],
    profpic: "img/Muizz.jpg",
    description: "I'm originally from Nigeria but I've lived in  France and currently in Germany where I'm  working as a Product Owner in a sports company. I'm a stickler for web technologies and love solving problems with coding. Always interested in anything video games, web development, and travelling.",
    slack: { userId: "U011ZTC6SEM", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
  {
    name: "Gaurav",
    UTC: "+5:30",
    diff: { hours: 5, minutes: 30 },
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
    slack: { userId: "U011D000RNZ", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
  {
    name: "Van",
    UTC: "+7",
    diff: { hours: 7, minutes: 0 },
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
    slack: { userId: "U012DA935HA", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
  {
    name: "Pisoth",
    UTC: "+7",
    diff: { hours: 7, minutes: 0 },
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
    slack: { userId: "U012ACS7FUG", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
  {
    name: "Damir",
    UTC: "+8",
    diff: { hours: 8, minutes: 0 },
    available: [9, 13], // Available on Monday/Tuesday 1-7 PM, Other days 9am - 1pm
    profpic: "img/Damir.jpg",
    description: "Musician and JavaScript developer. I have around one year of experience in HTML/CSS/JS. If you are a beginner in some of these areas [(1) html/ structure & data structures; (2) css/ grid, flexbox, bootstrap, responsive web design; (3)javascript/ fundamentals and manipulating the data] I can introduce them to you step by step. I am familiar with different teaching styles and processes regarding to my previous teaching experience of 6 years.",
    slack: { userId: "U011CNAAEP9", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
  {
    name: "Tatyana",
    UTC: "+8",
    diff: { hours: 8, minutes: 0 },
    available: [9, 17],
    profpic: "img/Taty.jpg",
    description: "Currently located in the Philippines, I graduated in Chemistry and Material Science Engineering. Coding has always been something I thought I could do but this is the first time I really feel like I belong in the digital world. I love algorithms, rubick's cubesss, coffee, and surfing! I've also been told I am a good teacher, no matter the subject! *wink*",
    slack: { userId: "U012BAWNUG5", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
  {
    name: "Ushan",
    UTC: "+12",
    diff: { hours: 12, minutes: 0 },
    available: [20, 23], //Monday - Thursday  NZST  20:00 - 23:00, Saturday - Sunday NZST  10:00 - 12:00
    profpic: "img/Ushan.jpg",
    description: "I am Tech Lover with passion for Coding and Teaching. Nowadays my free time is spent learning Javascript, HTML, CSS and working on projects here at PWJ Course. I have over decade of experience in Tech Support and Product Training and hoping to combine that with my Javascipt and coding knowledge to help any beginner get to the next level in their coding journey.",
    slack: { userId: "U0119RT1A5P", profileSearchUrl: "https://app.slack.com/client/T011D0D7T54/browse-people/user_profile/" }
  },
];
var intervalId;

window.onload = function () {
  coachesGal();
  intervalId = setInterval(() => {showCoaches()}, 1000);
};

function showCoaches() {
  let cards = "";
  for (let i = 0; i < coaches.length; i++) {
    cards += coachCard(i);
  }
  document.getElementById('coach-card').innerHTML = cards;
}

function coachCard(i) {
  let html = `
    <div class="card" style="width: 300px; margin: 10px">
      <div class="card-body">
        <div class="row">
          <div class="col-8">
            <h2 class="card-title display-4" style="font-family: 'Bebas Neue';">${coaches[i].name}</h2>
          </div>
          <div class="col-4">
            <div class="icon">${checkStatus(i)}</div>
          </div>
        </div>
        <h4 class="card-subtitle mb-2 text-muted">${displayTimeNow(i)}${coaches[i]["UTC"]}</h4>
        <p class="card-text"></p>
        <a class="text-primary" href= ${coaches[i]["slack"].profileSearchUrl}${coaches[i]["slack"].userId} target="_blank">
            Open ${coaches[i]["name"]}'s <i class="fab fa-slack"></i> Profile
        </a>
      </div>
    </div>
  `;
  console.log(html);
  return html;
}


function displayTimeNow(i) {
  let date = new Date();
  date.setHours(date.getHours() + coaches[i]["diff"].hours);
  date.setMinutes(date.getMinutes() + coaches[i]["diff"].minutes);
  var n = date.toUTCString();

  return n;
}

//Check if time if available
function checkStatus(i) {
  let date = new Date();
  date.setHours(date.getHours() + coaches[i]["diff"].hours);
  date.setMinutes(date.getMinutes() + coaches[i]["diff"].minutes);
  var hour = date.getUTCHours();

  if (hour >= coaches[i]["available"][0] && hour < coaches[i]["available"][1]) {
    return `<div class="text-primary"><i class="fas fa-thumbs-up"></i></div>`;
  } else {
    return `<div class="text-danger"><i class="fas fa-bed"></i></div>`;
  }
}


var coachGallerylist = [];

function coachesGal() {
  coaches.forEach((value, index) => {
    coachGallerylist += `<button class="tabname tablinks" onclick="openProfile(this, ${index})">${value.name}</button>`;
  });

  document.getElementById("tab").innerHTML = coachGallerylist;
  let arrow = "<i class='fas fa-arrow-circle-left arrow-icon'></i>".repeat(3);
  document.getElementById("tabcontent").innerHTML = `
        <div class="d-flex flex-column justify-content-center align-items-center" style="height: 400px;">
            <h1 class="text-primary display-1">${arrow}</h1>
        </div>
        `;
}

function openProfile(btn, i) {
  let tabName = document.getElementsByClassName('tabname');
  for (let i = 0; i < tabName.length; i++) {
    if (tabName[i].classList.contains('active') == true) {
      tabName[i].classList.remove('active');
    }
  }
  btn.classList.toggle("active");
  document.getElementById("tabcontent").innerHTML = `
        <div class="gallery-info" data-aos="zoom-in">
            
            <div class="row"> 
                <div class="col col-md-auto gallery-img-col"> 
                    <img class="img-thumbnail" src=${coaches[i]["profpic"]} alt="" width="380px" ></img>
                </div>

                <div class="col gallery-info-desc"> 
                    <h1>${coaches[i]["name"]}</h1>
                    <span>${coaches[i]["description"]}</span>
                </div>
            </div>
        </div>
    `;
}
