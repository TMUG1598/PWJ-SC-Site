var coaches = [
  {
    'name': 'Fizan',
    'UTC': '-7',
    'diff': -7,
    'available': [9, 17],
    'profpic': 'img/js-sample-pic.png',
    'description': "I am me.",
    'coordinates': [36.7783, -119.4179],
    'slack': 'https://app.slack.com/client/T011D0D7T54/D012JMC0RH9/thread/C011D0D7WDC-1588478636.190000'
    
  },
  {
    'name': 'Kiska',
    'UTC': '-6',
    'diff': -6,
    'available': [9, 17],
    'profpic': 'img/js-sample-pic.png',
    'description': "I am me.",
    'coordinates': [31.9686, -99.9018],
  },
  {
    'name': 'Jenn',
    'UTC': '-5',
    'diff': -5,
    'available': [9, 17],
    'profpic': 'img/Jenn.png',
    'description': "I am a frontend developer with expertise in CSS styling, data visualizations (using d3.js and chart.js), and UI/UX design. I am a bit quirky with a touch of fanciful imagination and a lover of shiny tech gadgets. I belive sharing memes is a true love language. I aspire to make the world a better place one smile at a time. My pronouns are She/Her.",
    'coordinates': [45.2538, -69.4455],
  },
  {
    'name': 'Osman',
    'UTC': '-5',
    'diff': -5,
    'available': [9, 17],
    'profpic': 'img/js-sample-pic.png',
    'description': "I am me.",
    'coordinates': [45.5017, -73.5673], //not his
  },
  {
    'name': 'Jessica',
    'UTC': '-5',
    'diff': -5,
    'available': [9, 17],
    'profpic': 'img/js-sample-pic.png',
    'description': "I am me.",
    'coordinates': [40.7128, -74.0060],
  },
  {
    'name': 'Rishi',
    'UTC': '-4',
    'diff': -4,
    'available': [9, 17],
    'profpic': 'img/Rishi.jpg',
    'description': "I am a 21 year old developer who just graduated in Mobile Application Design and Development and I am based in Canada for now. I have expertise in JavaScript, React and I am very enthusiast about Augmented Reality as I am working on one project based on AR and I love how machine learning and deep learning is changing th world. Enrolling in PWJ is one of the best thing I did in my life and I swear I mean it. Becoming Success Coach is kinda first achievement in my field in my life and I am vert proud of myself for that. This is the best community and I look forward to teach and learn as much as I can.",
    'coordinates': [45.4215, -75.6972],
  },
  {
    'name': 'Youssef',
    'UTC': '+1',
    'diff': 1,
    'available': [9, 17],
    'profpic': 'img/Yousseff.JPG',
    'description': "I am a JavaScript Developer and a Microsoft Student Partner. I am passionate about CODING and new technologies. AND OF COURSE I LOVE PIZZA",
    'coordinates': [35.628140, 10.760760],
    'slack': 'https://app.slack.com/client/T011D0D7T54/D012QM7Q6MP'
  },
  {
    'name': 'Abdou',
    'UTC': '+2',
    'diff': 2,
    'available': [9, 17],
    'profpic': 'img/js-sample-pic.png',
    'description': "I am me.",
    'coordinates': [51.1657, 10.4510],
  },
  {
    'name': 'David',
    'UTC': '+2',
    'diff': 2,
    'available': [9, 17],
    'profpic': 'img/js-sample-pic.png',
    'description': "I am me.",
    'coordinates': [47.1625, 19.5033],
  },
  {
    'name': 'Muizz',
    'UTC': '+2',
    'diff': 2,
    'available': [9, 17],
    'profpic': 'img/js-sample-pic.png',
    'description': "I am me.",
    'coordinates': [51.1657, 10.4520],
  },
  {
    'name': 'Gaurav',
    'UTC': '+5:30',
    'diff': 5,
    'available': [9, 17],
    'profpic': 'img/js-sample-pic.png',
    'description': "I am me.",
    'coordinates': [20.5937, 78.9629],
  },
  {
    'name': 'Van',
    'UTC': '+7',
    'diff': 7,
    'available': [9, 17],
    'profpic': 'img/js-sample-pic.png',
    'description': "I am me.",
    'coordinates': [14.0583, 108.2772],
  },
  {
    'name': 'Pisoth',
    'UTC': '+7',
    'diff': 7,
    'available': [9, 17],
    'profpic': 'img/js-sample-pic.png',
    'description': "I am me.",
    'coordinates': [35.8617, 104.1954],
  },
  {
    'name': 'Damir',
    'UTC': '+8',
    'diff': 8,
    'available': [9, 17],
    'profpic': 'img/js-sample-pic.png',
    'description': "I am me.",
    'coordinates': [45.8617, 121.7740],
  },
  {
    'name': 'Tatyana',
    'UTC': '+8',
    'diff': 8,
    'available': [9, 17],
    'profpic': 'img/Taty.jpg',
    'description': "I am me.",
    'coordinates': [12.8797, 121.7740],
  },
  {
    'name': 'Ushan',
    'UTC': '+12',
    'diff': 12,
    'available': [9, 17],
    'profpic': 'img/js-sample-pic.png',
    'description': "I am me.",
    'coordinates': [-40.9006, 174.8860],
  },
];

function displayLists(btn) {
  btn.classList.toggle('active');

  let coachlist = listCoaches();
  let timelist = listTimeZones();
  let statuslist = listStatus();
  let contactlist = listContact();

  if (btn.classList.contains('active') == true) {
    // This to change the text in the button when clicked
    document.getElementById('showDetails').innerHTML = 'Hide Details'
    document.getElementById("result").innerHTML = coachlist;
    document.getElementById("time").innerHTML = timelist;
    document.getElementById("status").innerHTML = statuslist;
    document.getElementById("contact").innerHTML = contactlist;
  } else {
    // This to change the text in the button when clicked
    document.getElementById('showDetails').innerHTML = 'Show Details'
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
  var date = new Date();
  date.setHours(date.getHours() + coaches[i]['diff']);
  var hour = date.getUTCHours();

  if (hour >= coaches[i]['available'][0] && hour < coaches[i]['available'][1]) {
    return `<li class='list-group-item text-primary'><i class="fas fa-thumbs-up"></i></li>`;
  } else {
    return `<li class='list-group-item text-danger'><i class="fas fa-bed"></i></li>`;
  }
}

function contactLink(i) {
  var date = new Date();
  date.setHours(date.getHours() + coaches[i]['diff']);
  var hour = date.getUTCHours();
  var html = `
            <li class='list-group-item text-info'>
                <a href= ${coaches[i]['slack']} target="_blank">
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

var map;
var markers = [];
var infoWindow;


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40, lng: -55 },
    zoom: 2,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
    }
  });
  var styledMapType = new google.maps.StyledMapType(
    [
      { "elementType": "geometry", "stylers": [{ "color": "#1d2c4d" }] },
      { "elementType": "labels.text.fill", "stylers": [{ "color": "#8ec3b9" }] },
      { "elementType": "labels.text.stroke", "stylers": [{ "color": "#1a3646" }] },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [{ "color": "#4b6878" }]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#64779e" }]
      },
      {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [{ "color": "#4b6878" }]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [{ "color": "#334e87" }]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [{ "color": "#023e58" }]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{ "color": "#283d6a" }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#6f9ba5" }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [{ "color": "#1d2c4d" }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{ "color": "#023e58" }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#3C7680" }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{ "color": "#304a7d" }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#98a5be" }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{ "color": "#1d2c4d" }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{ "color": "#2c6675" }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{ "color": "#255763" }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#b0d5ce" }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [{ "color": "#023e58" }]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#98a5be" }]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [{ "color": "#1d2c4d" }]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [{ "color": "#283d6a" }]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{ "color": "#3a4762" }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{ "color": "#0e1626" }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#4e6d70" }]
      }
    ], { name: 'Styled Map' });
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  infoWindow = new google.maps.InfoWindow();
  showMarkers(coaches);
}

function showMarkers(coaches) {
  coaches.forEach((value) => {
    var latlng = new google.maps.LatLng(value.coordinates[0], value.coordinates[1]);
    //var name = value.name;
    var image = value.profpic;
    createMarker(latlng, image);
  })
  // var bounds = new google.maps.LatLngBounds();
  // map.fitBounds(bounds);


  // for(var [index, store] of stores.entries()){
  //     var latlng = new google.maps.LatLng(
  //         store["coordinates"]["latitude"],
  //         store["coordinates"]["longitude"]);
  //     var name = store["name"];
  //     var address = store["addressLines"][0];
  //     var hours = store["openStatusText"];
  //     var phone = store["storeNumber"];

  //     bounds.extend(latlng);
  //     createMarker(latlng, name, address, index+1, hours, phone)
  // }
}

function createMarker(latlng, image) {
  var html = `
      <img src=${image} alt="" height="200px"></img>
      `;

  var marker = new google.maps.Marker({
    map: map,
    position: latlng,
    animation: google.maps.Animation.DROP
  });

  google.maps.event.addListener(marker, 'mouseover', function () {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  });

  google.maps.event.addListener(marker, 'click', function () {
    infoWindow.setContent(html);
    infoWindow.open(map, marker);
  });

  google.maps.event.addListener(marker, 'mouseout', function () {
    marker.setAnimation(null);
  });

  markers.push(marker);
  console.log(markers);
}

//Start scroll heightfunctionality for About typewriter animation
window.addEventListener("scroll", throttle(typwriterText, 1000));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

function typwriterText() {
  if(window.scrollY>= 300){
    document.getElementById('about-typewriter').innerHTML = 
     `<p class="line-1 anim-typewriter">
        Let's just put whatever we need to tell them.
      </p>`;
  }
}
//End scroll heightfunctionality for About typewriter animation