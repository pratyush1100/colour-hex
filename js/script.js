const loader = document.querySelector("#loader");
const navLinks = document.querySelector(".navlinks");
const toggle = document.querySelector("#toggle");
const copied = document.querySelector(".copied");
const copiedh1 = document.querySelector(".copied h1");
const details = document.querySelector(".details")

// Loader...
window.addEventListener("load", () => {
  loader.classList.add("hide");
});

// Generating Random Colors

colorArr = [];
for (let i = 0; i < 50; i++) {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  if (color.length < 7) {
    color = color + "F";
  } else if (color.length < 6) {
    color = color + "5";
  }
  colorArr.push(color);
}

// HamBurger Nav
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (toggle.innerHTML == `<i class="fas fa-bars"></i>`) {
    toggle.innerHTML = '<i class="fas fa-times"></i>';
  } 
});

// Adding colours on DOM
for (let i = 0; i < 50; i++) {
  const card = document.createElement("div")
  card.classList.add("card")

  const colorDiv = document.createElement("div")
  colorDiv.classList.add("color")
  colorDiv.style.backgroundColor = colorArr[i];
  colorDiv.setAttribute("data-color" , colorArr[i])

  const details = document.createElement("div");
  details.classList.add("details");

  const heading = document.createElement("h1");
  heading.innerText = colorArr[i];

  const copyMssg = document.createElement("p");
  copyMssg.innerText = "Click to copy"

  const mainDiv = document.querySelector(".hero");

  mainDiv.appendChild(card)
  card.appendChild(colorDiv)
  card.appendChild(details)
  details.appendChild(heading)
  details.appendChild(copyMssg)

  colorDiv.addEventListener("click", (e) => {
    const HexValue = e.target.attributes[1].value
    copied.style.backgroundColor = HexValue
    navigator.clipboard.writeText(HexValue)
    copiedh1.innerText = HexValue
    copied.classList.add("active")
    setTimeout(() => {
    copied.classList.remove("active")
    }, 2000)
  });
}
