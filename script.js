var coaches = [
    {
        'name': 'Fizan',
        'UTC': '-7',
        'diff': -7,
        'available': [9, 17],
    },
    {
        'name': 'Kiska',
        'UTC': '-6',
        'diff': -6,
        'available': [9, 17],
    },
    {
        'name': 'Jenn',
        'UTC': '-5',
        'diff': -5,
        'available': [9, 17],
    },
    {
        'name': 'Osman',
        'UTC': '-5',
        'diff': -5,
        'available': [9, 17],
    },
    {
        'name': 'Rishi',
        'UTC': '-4',
        'diff': -4,
        'available': [9, 17],
    },
    {
        'name': 'Youssef',
        'UTC': '+1',
        'diff': 1,
        'available': [9, 17],
    },
    {
        'name': 'David',
        'UTC': '+2',
        'diff': 2,
        'available': [9, 17],
    },
    {
        'name': 'Muizz',
        'UTC': '+2',
        'diff': 2,
        'available': [9, 17],
    },
    {
        'name': 'Gaurav',
        'UTC': '+5:30',
        'diff': 5,
        'available': [9, 17],
    },
    {
        'name': 'Van',
        'UTC': '+7',
        'diff': 7,
        'available': [9, 17],
    },
    {
        'name': 'Damir',
        'UTC': '+8',
        'diff': 8,
        'available': [9, 17],
    },
    {
        'name': 'Tatyana',
        'UTC': '+8',
        'diff': 8,
        'available': [9, 17],
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