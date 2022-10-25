const srch = document.getElementById("srch");
const srchBtn = document.getElementById("srch-btn");
const cityName = document.getElementById("city-name");
const temp = document.getElementById("real-val");
const tempStatus = document.getElementById("temp-status");
const dataHide = document.querySelector(".middle");
let today = document.getElementById("today");
let date_today = document.getElementById("todate");


const getInfo = async (event) => {
  event.preventDefault();
  let srchVal = srch.value;
  if (srchVal === "") {
    cityName.innerText = "Please Enter City Name";
    dataHide.classList.add("hidden-data");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${srchVal}&units=metric&appid=5def153ef4bce6b9592146ce7ac68baf`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      temp.innerText = arrData[0].main.temp;
      // tempStatus.innerText = arrData[0].weather[0].main;
      cityName.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${arrData[0].name}, ${arrData[0].sys.country}`;

      //temp status
      let tempMod = arrData[0].weather[0].main;
      if (tempMod == "Clear") {
        tempStatus.innerHTML =
          "<i class='fa-solid fa-sun' style='color: yellow;'></i>";
      } else if (tempMod == "Haze") {
        tempStatus.innerHTML =
          "<i class='fa-solid fa-cloud-sun' style='color: blue;'></i>";
      } else if (tempMod == "Smoke") {
        tempStatus.innerHTML =
          "<i class='fa-solid fa-cloud-sun' style='color: blue;'></i>";
      } else if (tempMod == "Rain") {
        tempStatus.innerHTML =
          "<i class='fa-solid fa-cloud-showers-heavy' style='color: blue;'></i>";
      } else if (tempMod == "Cloud") {
        tempStatus.innerHTML =
          "<i class='fa-solid fa-cloud' style='color: blue;'></i>";
      } else {
        tempStatus.innerHTML =
          "<i class='fa-solid fa-temperature-half' style='color: blue;'></i>";
      }

      dataHide.classList.remove("hidden-data");
    } catch {
      cityName.innerText = "Please Enter City Name Properly";
      dataHide.classList.add("hidden-data");
    }
  }
};

//Date and day
let nowDate = new Date();
const getCurrentDay = () => {
  const days = new Array(7);
  days[0] = "Sunday";
  days[1] = "Monday";
  days[2] = "Tuesday";
  days[3] = "Wednesday";
  days[4] = "Thursday";
  days[5] = "Friday";
  days[6] = "Saturday";

  return days[nowDate.getDay()];
};

const getFullDate = () => {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let currMonth = nowDate.getMonth();
  let currDate = nowDate.getDate();
  //   let year = nowDate.getFullYear();
  let fullDate = `${currDate} ${months[currMonth]}`;
  return fullDate;
};

today.innerText = getCurrentDay();
date_today.innerText = getFullDate();
srchBtn.addEventListener("click", getInfo);