const firstButton = document.querySelector("#first-button");
let x = 0;

firstButton.addEventListener("click", () => {
  x++;
  document.querySelector(".buttons").innerHTML += `<button>${x}</button>`;
});

const ikki = document.querySelector(".ikki");

window.addEventListener("keydown", (e) => {
  if (e.key == "q" || e.key == "й") {
    ikki.style.background = "red";
  } else if (e.key == "s" || e.key == "ы") {
    ikki.style.background = "yellow";
  } else if (e.key == "d" || e.key == "в") {
    ikki.style.background = "black";
  } else if (e.key == "b" || e.key == "и") {
    ikki.style.background = "blue";
  } else {
    console.log("bu harfga ivent yoq");
  }
});

const uchbutton = document.querySelector("#uch-button");
const uch = document.querySelector(".uch");
const randSon = document.querySelector(".random-son");

uchbutton.addEventListener("click", () => {
  randSon.textContent = Math.floor(Math.random() * 100);
  uch.style.background = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;
});

const tort = document.querySelector(".tort");
const tortStart = document.querySelector(".tort-boshlash");

let intervalId = null;

tortStart.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    tortStart.textContent = "boshlash";
  } else {
    intervalId = setInterval(() => {
      tort.style.background = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
    }, 1000);
    tortStart.textContent = "toxtatish";
  }
});

const imgs = document.querySelector(".imgs");
let poryadok = 1;

intervalId = setInterval(() => {
  if (poryadok >= 6) {
    poryadok = 1;
  }

  imgs.innerHTML = `
    <img src="./${poryadok}.jpeg" alt="">
  `;
  poryadok++;
}, 2000);

const randStart = document.querySelector(".boshlash");
const rand = document.getElementById("rand-inp");
const randtek = document.getElementById("random-go");
const rt = document.querySelector("#randomson-text");

randStart.addEventListener("click", () => {
  x = Math.floor(Math.random() * 10);
  a = 0;
  console.log(x);

  randtek.addEventListener("click", () => {
    if (x == rand.value) {
      rt.textContent = "javob tog'ri";
    } else if (x < rand.value) {
      rt.textContent = "siz kiritkan son biz oylagandan kattaroq";
    } else if (x > rand.value) {
      rt.textContent = "siz kiritkan son biz oylagandan kichikroq";
    }
  });
});
