const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "4064c1318251caff22d4a2250d00f7f8";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;

  /* Your code: check list arrays */

  //ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather?.[0].icon}.svg`;

      console.log(data);
      /* Your code: process element */
      list.insertAdjacentHTML(
        "beforeend",
        `<li class="city">
          <h3 class="city-name">${name} <sup>${sys.country}</sup></h3>
          <div class="city-temp">${main.temp.toFixed(0)}<sup>&deg;C</sup></div>
          <img src="${icon}" alt="${name} Icon" class="city-icon" />
          <figcaption>${weather?.[0].description}</figcaption>
        </li>`,
      );
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});
