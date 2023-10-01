let url = "https://course-api.com/javascript-store-products";

let all = document.getElementById("all");
let ikea = document.getElementById("ikea");
let marcos = document.getElementById("marcos");
let caressa = document.getElementById("caressa");
let liddy = document.getElementById("liddy");
let main = document.getElementById("main");

let fetchApi = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("DATA => ", data);
      let allData = data
        .map((item) => {
          return `
            <div class="card" style="background-image: url(${item.fields.image[0].url}; background-size: cover;
              background-position: center;">
              <div class="card-body">
              <h1>${item.fields.price}</h1>
                <p class="card-text">${item.fields.name}</p>
              </div>
            </div>
        `;
        })
        .join("");
      main.innerHTML = allData;
    });
};

window.addEventListener("DOMContentLoaded", fetchApi());

ikea.addEventListener("click", () => {
  content.innerHTML = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let filtered = [];
      for (let i = 0; i < data.length; i++) {
        if (item.fields.company == ikea) {
          filtered.push(item);
          console.log(filtered);
        }
      }
    });
});
all.addEventListener("click", () => {});
marcos.addEventListener("click", () => {});
caressa.addEventListener("click", () => {});
liddy.addEventListener("click", () => {});
main.addEventListener("click", () => {});

// fetch(baseUrl)
//   .then((res) => res.json())
//   .then((result) => myFunc(result));

// function myFunc(api) {
//   let spliced = api.slice(0, 300);
//   let elHead = document.querySelector(".head");
//   spliced.map((item) => {
//     let newCard = document.createElement("div");
//     newCard.setAttribute("class", "card");
//     newCard.innerHTML = `
//     <div class="card" style="width: 18rem;">
//     <img src="${item.image}" class="${item.image}p" alt="${item.image}">
//     <div class="card-body">
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     </div>
//   </div>
//     `;
//     elHead.appendChild(newCard);
//   });
// }
