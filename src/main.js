// import _ from "lodash";
// import cube from "./modules.js";
// import { arrs, getName } from "./modules.js";
// import * as R from "./modules.js";
// import myData from "./myData.json";
import axios from "axios";

// // 얕은 복사
// const user = {
//   name: "sub",
//   age: 20,
//   email: ["bstnqls96@gmail.com"],
// };

// const copyUser = user;
// console.log(copyUser === user); // true

// user.age = 22;
// console.log(user);
// console.log(copyUser);

// // Object.assign() 복사
// const copyUser = Object.assign({}, user);
// console.log(copyUser === user); // false

// user.age = 22;
// console.log(user);
// console.log(copyUser);

// // 깊은 복사
// const copyUser = { ...user }; // 스프레드 오퍼레이터(확산 연산자) 복사
// console.log(copyUser === user); // false

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// user.email.push("bstnqls@naver.com");

// console.log(user.email === copyUser.email);
// console.log(user);
// console.log(copyUser);

// const copyUser = _.cloneDeep(user);
// console.log(copyUser);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// user.email.push("bstnqls@naver.com");
// console.log(user.email === copyUser.email);

// const userA = [
//   { userId: "1", name: "sub" },
//   { userId: "2", name: "jung" },
// ];
// const userB = [
//   { userId: "3", name: "eun" },
//   { userId: "4", name: "yu" },
// ];

// const userC = userA.concat(userB);
// console.log(userC);
// console.log(_.uniqBy(userC, "userId"));

// const userD = _.unionBy(userA, userB, "userId");
// console.log(userD);

// const users = [
//   { userId: "1", name: "sub" },
//   { userId: "2", name: "jung" },
//   { userId: "3", name: "eun" },
//   { userId: "4", name: "yu" },
// ];

// const foundUser = _.find(users, { name: "sub" });
// console.log(foundUser);
// const foundUserIdx = _.findIndex(users, { name: "sub" });
// console.log(foundUserIdx);

// _.remove(users, { name: "sub" });
// console.log(users);

// let array = [1, 2, 3, 4];
// let evens = _.remove(array, function (n) {
//   return n % 2 === 0;
// });
// console.log(array);
// console.log(evens);

// let myfriend = [
//   {
//     name: "kim",
//     active: true,
//   },
//   {
//     name: "lee",
//     active: true,
//   },
// ];
// console.log(_.every(myfriend, { name: "kim", active: false }));
// console.log(_.every(myfriend, ["active", false]));
// console.log(_.every(myfriend, "active"));

// let mySister = [
//   {
//     name: "kim",
//     age: 22,
//     city: "Daegu",
//   },
//   {
//     name: "jung",
//     age: 22,
//     city: "Busan",
//   },
//   {
//     name: "lee",
//     age: 23,
//     city: "Seoul",
//   },
//   {
//     name: "park",
//     age: 24,
//     city: "Gwang",
//   },
// ];

// console.log(_.filter(mySister, { age: 22, name: "kim" }));
// console.log(_.filter(mySister, (sister) => sister.age === "22"));

// // JSON data 불러오기
// console.log(cube(2, 4));
// console.log(arrs);
// console.log(getName());
// console.log(R.arrs);
// console.log(R.getName());

// console.log(myData);
// const user = {
//   name: "subin",
//   age: 20,
//   email: "bstnqls96@gamil.com",
// };
// const str = JSON.stringify(user);
// console.log(str);
// const obj = JSON.parse(str);
// console.log(obj);

// // 로컬스토리지에 data 저장
// localStorage.setItem("user", JSON.stringify(user));
// console.log(localStorage.getItem("user"));
// console.log(JSON.parse(localStorage.getItem("user")));

// const str = localStorage.getItem("user");
// const obj = JSON.parse(str);
// obj.age = 22;
// console.log(obj);

// localStorage.setItem("user", JSON.stringify(obj));

// 영화 data 가져오기
const OMDb_API_KEY = "f80dac9e";
function getMovies(TITLE = "Charlie and the Chocolate Factory") {
  axios
    .get(`http://www.omdbapi.com/?apikey=${OMDb_API_KEY}&s=${TITLE}`)
    .then((response) => {
      console.log(response);
      const results = document.getElementById("results");
      results.innerHTML = ""; // 초기화

      if (response.data.Search && response.data.Search.length > 0) {
        const movies = response.data.Search.slice(0, 10);
        movies.forEach((movie) => {
          const movieEl = document.createElement("div");
          const h1El = document.createElement("h1");
          const imgEl = document.createElement("img");
          const yearEl = document.createElement("p");
          const typeEl = document.createElement("p");

          movieEl.classList.add("movie");
          h1El.textContent = movie.Title;
          imgEl.src = movie.Poster;
          yearEl.textContent = movie.Year;
          typeEl.textContent = movie.Type;

          movieEl.appendChild(h1El);
          movieEl.appendChild(imgEl);
          movieEl.appendChild(yearEl);
          movieEl.appendChild(typeEl);
          results.appendChild(movieEl);
        });
      } else {
        alert("검색한 영화가 없습니다.");
      }
    });
}
getMovies();

const inputEl = document.getElementById("searchInput");
const schBtn = document.getElementById("schBtn");
let schVal = document.getElementById("searchInput");

inputEl.addEventListener("change", (e) => {
  schVal = e.target.value;
});

schBtn.addEventListener("click", () => {
  let schVal = inputEl.value.trim();

  if (schVal !== "") {
    getMovies(schVal);
  } else {
    alert("영화 제목을 입력해주세요");
  }
});

// google map 연동
const GOOGLE_MAPS_API_KEY = "7554454e4c6273743332415a6f6f7a";
async function getData() {
  const url = `http://openapi.seoul.go.kr:8088/${GOOGLE_MAPS_API_KEY}/json/bikeList/1/5/`;
  const response = await fetch(url);
  const data = await response.json();
  const locations = data.rentBikeStatus.row.map((spot) => [
    spot.stationName,
    spot.stationLatitude,
    spot.stationLongitude,
    spot.parkingBikeTotCnt,
  ]);
  console.log(data);
  console.log("locations: ", locations);
  drawMap(locations);
}
getData();

function drawMap(locations) {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: new google.maps.LatLng(locations[0][1], locations[0][2]),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  const infowindow = new google.maps.InfoWindow();
  locations.forEach((location) => {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(location[1], location[2]),
      map: map,
      title: location[0],
    });

    marker.addListener("click", () => {
      infowindow.setContent(location[3]);
      infowindow.open(map, marker);
    });
  });
}
