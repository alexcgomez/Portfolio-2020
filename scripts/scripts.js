let mainpage = document.querySelector("#div-content");
let navMenu = document.querySelectorAll("nav li");
console.log(navMenu);

navMenu[3].addEventListener("click", event => {
  event.preventDefault();
  mainpage.style.display = "none";
});

for (let index = 0; index <= 2; index++) {
  navMenu[index].addEventListener("click", event => {
    mainpage.style.display = "inherit";
  });
}
