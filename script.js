var coaches = [
  {
    name: "Fizan",
    UTC: "-7",
    diff: -7,
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
    slack:
      "https://app.slack.com/client/T011D0D7T54/D012JMC0RH9/thread/C011D0D7WDC-1588478636.190000",
  },
  {
    name: "Kiska",
    UTC: "-6",
    diff: -6,
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
  },
  {
    'name': 'Jenn',
    'UTC': '-5',
    'diff': -5,
    'available': [9, 17],
    'profpic': 'img/Jenn.png',
    'description': "I am a frontend developer with expertise in CSS styling, data visualizations (using d3.js and chart.js), and UI/UX design. I am a bit quirky with a touch of fanciful imagination and a lover of shiny tech gadgets. I belive sharing memes is a true love language. I aspire to make the world a better place one smile at a time. My pronouns are She/Her.",
  },
  {
    name: "Osman",
    UTC: "-5",
    diff: -5,
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
  },
  {
    name: "Jessica",
    UTC: "-5",
    diff: -5,
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
  },
  {
    name: "Rishi",
    UTC: "-4",
    diff: -4,
    available: [9, 17],
    profpic: "img/Rishi.jpg",
    description:
      "I am a 21 year old developer who just graduated in Mobile Application Design and Development and I am based in Canada for now. I have expertise in JavaScript, React and I am very enthusiast about Augmented Reality as I am working on one project based on AR and I love how machine learning and deep learning is changing th world. Enrolling in PWJ is one of the best thing I did in my life and I swear I mean it. Becoming Success Coach is kinda first achievement in my field in my life and I am vert proud of myself for that. This is the best community and I look forward to teach and learn as much as I can.",
  },
  {
    name: "Youssef",
    UTC: "+1",
    diff: 1,
    available: [9, 17],
    profpic: "img/Yousseff.JPG",
    description:
      "I am a JavaScript Developer and a Microsoft Student Partner. I am passionate about CODING and new technologies. AND OF COURSE I LOVE PIZZA",
    slack: "https://app.slack.com/client/T011D0D7T54/D012QM7Q6MP",
  },
  {
    name: "Abdou",
    UTC: "+2",
    diff: 2,
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
  },
  {
    name: "David",
    UTC: "+2",
    diff: 2,
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
  },
  {
    name: "Muizz",
    UTC: "+2",
    diff: 2,
    available: [9, 17],
    profpic: "img/Muizz.jpg",
    description: "I'm originally from Nigeria but I've lived in  France and currently in Germany where I'm  working as a Product Owner in a sports company. I'm a stickler for web technologies and love solving problems with coding. Always interested in anything video games, web development, and travelling.",
  },
  {
    name: "Gaurav",
    UTC: "+5:30",
    diff: 5,
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
  },
  {
    name: "Van",
    UTC: "+7",
    diff: 7,
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
  },
  {
    name: "Pisoth",
    UTC: "+7",
    diff: 7,
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
  },
  {
    name: "Damir",
    UTC: "+8",
    diff: 8,
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
  },
  {
    name: "Tatyana",
    UTC: "+8",
    diff: 8,
    available: [9, 17],
    profpic: "img/Taty.jpg",
    description: "Currently located in the Philippines, I graduated in Chemistry and Material Science Engineering. Coding has always been something I thought I could do but this is the first time I really feel like I belong in the digital world. I love algorithms, rubick's cubesss, coffee, and surfing! I've also been told I am a good teacher, no matter the subject! *wink*",
  },
  {
    name: "Ushan",
    UTC: "+12",
    diff: 12,
    available: [9, 17],
    profpic: "img/js-sample-pic.png",
    description: "I am me.",
  },
];

function displayLists(btn) {
  btn.classList.toggle("active");

  let coachlist = listCoaches();
  let timelist = listTimeZones();
  let statuslist = listStatus();
  let contactlist = listContact();

  if (btn.classList.contains("active") == true) {
    // This to change the text in the button when clicked
    document.getElementById("showDetails").innerHTML = "Hide Details";
    document.getElementById("result").innerHTML = coachlist;
    document.getElementById("time").innerHTML = timelist;
    document.getElementById("status").innerHTML = statuslist;
    document.getElementById("contact").innerHTML = contactlist;
  } else {
    // This to change the text in the button when clicked
    document.getElementById("showDetails").innerHTML = "Show Details";
    document.getElementById("result").innerHTML = "";
    document.getElementById("time").innerHTML = "";
    document.getElementById("status").innerHTML = "";
    document.getElementById("contact").innerHTML = "";
  }
}

function listCoaches() {
  let coachlist = "<ul class='list-group'>";
  coaches.forEach((value) => {
    coachlist += `<li class='list-group-item bg-dark text-light'><b>${value.name}</b></li>`;
  });
  coachlist += "</ul>";
  return coachlist;
}

function listTimeZones() {
  let timelist = "<ul class='list-group'>";
  coaches.forEach((value, index) => {
    timelist += `<li class='list-group-item'>${displayTimeNow(index)}${
      value.UTC
    }</li>`;
  });
  timelist += "</ul>";
  return timelist;
}

function listStatus() {
  let statuslist = "<ul class='list-group'>";
  coaches.forEach((value, index) => {
    statuslist += checkStatus(index);
  });
  statuslist += "</ul>";
  return statuslist;
}

function listContact() {
  let contact = "<ul class='list-group'>";
  coaches.forEach((value, index) => {
    contact += contactLink(index);
  });
  contact += "</ul>";
  return contact;
}

function displayTimeNow(i) {
  var d = new Date();
  d.setHours(d.getHours() + coaches[i]["diff"]);
  var n = d.toUTCString();

  return n;
}

//Check if time if available
function checkStatus(i) {
  var date = new Date();
  date.setHours(date.getHours() + coaches[i]["diff"]);
  var hour = date.getUTCHours();

  if (hour >= coaches[i]["available"][0] && hour < coaches[i]["available"][1]) {
    return `<li class='list-group-item text-primary'><i class="fas fa-thumbs-up"></i></li>`;
  } else {
    return `<li class='list-group-item text-danger'><i class="fas fa-bed"></i></li>`;
  }
}

function contactLink(i) {
  var date = new Date();
  date.setHours(date.getHours() + coaches[i]["diff"]);
  var hour = date.getUTCHours();
  var html = `
            <li class='list-group-item text-info'>
                <a href= ${coaches[i]["slack"]} target="_blank">
                    Contact ${coaches[i]["name"]} on <i class="fab fa-slack"></i>
                </a>
            </li>
        `;

  return html;
}

window.onload = function () {
  coachesGal()
};

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
        if (tabName[i].classList.contains('active') == true){
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
