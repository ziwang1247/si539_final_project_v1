//image hover effect
const items = document.querySelectorAll("li");

items.forEach((item) => {
  const photo = item.querySelector(".image"),
    parent = item.parentElement;

  item.addEventListener("mousemove", function (event) {
    photo.classList.add("active");
    parent.classList.add("active");

    const cursorX = event.pageX,
      cursorY = event.pageY;

    const itemLeft = item.getBoundingClientRect().left,
      itemTop = item.getBoundingClientRect().top;

    const photoPositionX = cursorX - itemLeft,
      photoPositionY = cursorY - itemTop - window.scrollY;

    if (photo.offsetHeight + 40 > event.clientY) {
      photo.style.top = `${photoPositionY + 20}px`;
    } else {
      photo.style.top = `${photoPositionY - photo.offsetHeight - 20}px`;
    }
    photo.style.left = `${photoPositionX - 100}px`;
  });
  item.addEventListener("mouseout", function (event) {
    photo.classList.remove("active");
    parent.classList.remove("active");
  });
});

var waList = document.querySelector("#wa-name");
var vgaList = document.querySelector("#vga-name");
var typoList = document.querySelector("#typo-name");

var listName2 = document.querySelector("#core-2-lab-name");
var listName4 = document.querySelector("#website-name");
var listName5 = document.querySelector("#uiux-name");

var listName7 = document.querySelector("#typography-name");

var waContainer = document.querySelector("#wa-container");
var vgaContainer = document.querySelector("#vga-container");
var typoContainer = document.querySelector("#typo-container");

var container2 = document.querySelector("#core-2-lab-project-container");
var container4 = document.querySelector("#website-project-container");
var container5 = document.querySelector("#uiux-project-container");

var container7 = document.querySelector("#typography-project-container");

listName2.addEventListener("click", function () {
  if (container2.classList.contains("open")) {
    container2.classList.remove("open");
  } else {
    container2.classList.add("open");
  }
});

listName4.addEventListener("click", function () {
  if (container4.classList.contains("open")) {
    container4.classList.remove("open");
  } else {
    container4.classList.add("open");
  }
});

listName5.addEventListener("click", function () {
  if (container5.classList.contains("open")) {
    container5.classList.remove("open");
  } else {
    container5.classList.add("open");
  }
});



listName7.addEventListener("click", function () {
  if (container7.classList.contains("open")) {
    container7.classList.remove("open");
  } else {
    container7.classList.add("open");
  }
});

waList.addEventListener("click", function () {
  if (waContainer.classList.contains("open")) {
    waContainer.classList.remove("open");
  } else {
    waContainer.classList.add("open");
  }
});
vgaList.addEventListener("click", function () {
  if (vgaContainer.classList.contains("open")) {
    vgaContainer.classList.remove("open");
  } else {
    vgaContainer.classList.add("open");
  }
});
typoList.addEventListener("click", function () {
  if (typoContainer.classList.contains("open")) {
    typoContainer.classList.remove("open");
  } else {
    typoContainer.classList.add("open");
  }
});

var container = document.querySelector("#ball-container"); //get element from html

for (let i = 0; i < 20; i++) {
  // a 30-time loop
  let ball = document.createElement("div"); // create tag <div> in html
  ball.classList.add("ball"); // give it a class name "ball"
  ball.style.left = 90 * Math.random() + "%"; // give it a random left value from 0% to 90%
  ball.style.top = 190 * Math.random() + "%"; // give it a random top value from 0% to 90%, and each time you refresh the page, the layout will change
  container.appendChild(ball); // attach child "ball" to ID #ball-container
}

//random image display
var images = [
  "work4.jpeg",
  "work12.jpg",
  "work13.jpg",
  "work14.jpg",
  "work15.jpg",
  "work16.jpg",
  "work17.jpg",
  "work19.jpg",
  "work21.jpeg",
  "work23.jpg",
];

exploreview();

function exploreview() {
  var num = Math.floor(Math.random() * images.length);
  var image = images[num];
  console.log(image);
  var imageBox = document.querySelector(".image-box");
  imageBox.style.display = "block";
  imageBox.style.width = 100 + 500 * Math.random() + "px";
  imageBox.style.height = imageBox.style.width;
  imageBox.style.left = 5 + 75 * Math.random() + "%";
  imageBox.style.top = 5 + 60 * Math.random() + "%";
  imageBox.innerHTML = `<img class = "back" src="./project-image/${image}">`;
  document.querySelector(".image").style.opacity = "1";

  setInterval(function () {
    var num = Math.floor(Math.random() * images.length);
    var image = images[num];
    console.log(image);
    var imageBox = document.querySelector(".image-box");
    imageBox.style.width = 200 + 300 * Math.random() + "px";
    imageBox.style.height = 200 + 300 * Math.random() + "px";
    imageBox.style.left = 5 + 75 * Math.random() + "%";
    imageBox.style.top = 0 + 60 * Math.random() + "%";
    imageBox.style.opacity = "1";
    imageBox.innerHTML = `<img class = "back" src="./project-image/${image}">`;
    document.querySelector(".image").style.opacity = "1";
  }, 3000);

  imageBox.style.opacity = "0";
}

//scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    document.getElementById("all-project-container").style.opacity = "1";
  } else {
    document.getElementById("all-project-container").style.opacity = "0";
  }
}

let logo = document.querySelector(".logo");
logo.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

