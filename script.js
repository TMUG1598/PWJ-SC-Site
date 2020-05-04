var coaches = [
    {
        'name': 'Fizan',
        'UTC': '-7',
        'diff': -7,
        'available': [9, 17],
        'profpic': 'img/js-sample-pic.png',
        'description': "I am me.",
    },
    {
        'name': 'Kiska',
        'UTC': '-6',
        'diff': -6,
        'available': [9, 17],
        'profpic': 'img/js-sample-pic.png',
        'description': "I am me.",
    },
    {
        'name': 'Jenn',
        'UTC': '-5',
        'diff': -5,
        'available': [9, 17],
        'profpic': 'img/js-sample-pic.png',
        'description': "I am me.",
    },
    {
        'name': 'Osman',
        'UTC': '-5',
        'diff': -5,
        'available': [9, 17],
        'profpic': 'img/js-sample-pic.png',
        'description': "I am me.",
    },
    {
        'name': 'Jessica',
        'UTC': '-5',
        'diff': -5,
        'available': [9, 17],
        'profpic': 'img/js-sample-pic.png',
        'description': "I am me.",
    },
    {
        'name': 'Rishi',
        'UTC': '-4',
        'diff': -4,
        'available': [9, 17],
        'profpic': 'img/Rishi.jpg',
        'description': "I am a 21 year old developer who just graduated in Mobile Application Design and Development and I am based in Canada for now. I have expertise in JavaScript, React and I am very enthusiast about Augmented Reality as I am working on one project based on AR and I love how machine learning and deep learning is changing th world. Enrolling in PWJ is one of the best thing I did in my life and I swear I mean it. Becoming Success Coach is kinda first achievement in my field in my life and I am vert proud of myself for that. This is the best community and I look forward to teach and learn as much as I can.",
    },
    {
        'name': 'Youssef',
        'UTC': '+1',
        'diff': 1,
        'available': [9, 17],
        'profpic': 'img/js-sample-pic.png',
        'description': "I am me.",
    },
    {
        'name': 'Abdou',
        'UTC': '+2',
        'diff': 2,
        'available': [9, 17],
        'profpic': 'img/js-sample-pic.png',
        'description': "I am me.",
    },
    {
        'name': 'David',
        'UTC': '+2',
        'diff': 2,
        'available': [9, 17],
        'profpic': 'img/js-sample-pic.png',
        'description': "I am me.",
    },
    {
        'name': 'Muizz',
        'UTC': '+2',
        'diff': 2,
        'available': [9, 17],
        'profpic': 'img/js-sample-pic.png',
        'description': "I am me.",
    },
    {
        'name': 'Gaurav',
        'UTC': '+5:30',
        'diff': 5,
        'available': [9, 17],
        'profpic': 'img/js-sample-pic.png',
        'description': "I am me.",
    },
    {
        'name': 'Van',
        'UTC': '+7',
        'diff': 7,
        'available': [9, 17],
        'profpic': 'img/js-sample-pic.png',
        'description': "I am me.",
    },
    {
        'name': 'Pisoth',
        'UTC': '+7',
        'diff': 7,
        'available': [9, 17],
        'profpic': 'img/js-sample-pic.png',
        'description': "I am me.",
    },
    {
        'name': 'Damir',
        'UTC': '+8',
        'diff': 8,
        'available': [9, 17],
        'profpic': 'img/js-sample-pic.png',
        'description': "I am me.",
    },
    {
        'name': 'Tatyana',
        'UTC': '+8',
        'diff': 8,
        'available': [9, 17],
        'profpic': 'img/Taty.jpg',
        'description': "I am me.",
    },
    {
        'name': 'Ushan',
        'UTC': '+12',
        'diff': 12,
        'available': [9, 17],
        'profpic': 'img/js-sample-pic.png',
        'description': "I am me.",
    },
];

function displayLists(btn) {
    btn.classList.toggle('active');

    let coachlist = listCoaches();
    let timelist = listTimeZones();
    let statuslist = listStatus();
    let contactlist = listContact();

    if (btn.classList.contains('active') == true) {
        document.getElementById("result").innerHTML = coachlist;
        document.getElementById("time").innerHTML = timelist;
        document.getElementById("status").innerHTML = statuslist;
        document.getElementById("contact").innerHTML = contactlist;
    } else {
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
    })
    coachlist += '</ul>';
    return coachlist;
}

function listTimeZones() {
    let timelist = "<ul class='list-group'>";
    coaches.forEach((value, index) => {
        timelist += `<li class='list-group-item'>${displayTimeNow(index)}${value.UTC}</li>`;
    })
    timelist += '</ul>';
    return timelist;
}

function listStatus() {
    let statuslist = "<ul class='list-group'>";
    coaches.forEach((value, index) => {
        statuslist += checkStatus(index);
    })
    statuslist += '</ul>';
    return statuslist;
}

function listContact() {
    let contact = "<ul class='list-group'>";
    coaches.forEach((value, index) => {
        contact += contactLink(index);
    })
    contact += '</ul>';
    return contact;
}

function displayTimeNow(i) {
    var d = new Date();
    d.setHours(d.getHours() + coaches[i]['diff']);
    var n = d.toUTCString();

    return n;
}

//Check if time if available
function checkStatus(i) {
    var d = new Date();
    d.setHours(d.getHours() + coaches[i]['diff']);
    var hour = d.getUTCHours();

    if (hour >= coaches[i]['available'][0] && hour < coaches[i]['available'][1]) {
        return `<li class='list-group-item text-primary'><i class="fas fa-thumbs-up"></i></li>`;
    } else {
        return `<li class='list-group-item text-danger'><i class="fas fa-bed"></i></li>`;
    }
}

function contactLink(i) {
    var d = new Date();
    d.setHours(d.getHours() + coaches[i]['diff']);
    var hour = d.getUTCHours();
    var html = `
            <li class='list-group-item text-info'>
                <a href='https://google.com/'>
                    Contact ${coaches[i]['name']} on <i class="fab fa-slack"></i>
                </a>
            </li>
        `;

    return html;
}

function coachesGal(btn) {
    btn.classList.toggle('active');
    
    let coachGallerylist = [];
    coaches.forEach((value, index) => {
        coachGallerylist += `<button class="tablinks" onclick="openCity(${index})">${value.name}</button>`;
    })

    document.getElementById("tab").innerHTML = coachGallerylist;
    let arrow = "<i class='fas fa-arrow-circle-left'></i>".repeat(3);
    document.getElementById('tabcontent').innerHTML = `
        <div class="d-flex flex-column justify-content-center align-items-center" style="height: 380px;">
            <h1 class="text-primary">${arrow}</h1>
            <h1>CHOOSE TO SEE COACH'S INFO</h1>
            <h1 class="text-primary">${arrow}</h1>
        </div>
        `;

}

function openCity(i) {
    document.getElementById('tabcontent').innerHTML = `
        <div style="padding: 20px; height: 380px;">
            <h1>${coaches[i]['name']}</h1>
            <div class="row"> 
                <div class="col"> 
                    <img src=${coaches[i]['profpic']} alt="" height="300px"></img>
                </div>
                <div class="col" style="text-align: left;"> 
                    <p>${coaches[i]['description']}</p>
                </div>
            </div>
        </div>
    `;
}