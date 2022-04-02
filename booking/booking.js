function profile() {
  window.location.href = "../booking/profile.html";
}
function submit() {
  window.location.href = "../authentication/login.html";
}
function ProperyListRedirect() {
  window.location.href = "./upload.html";
}
document.getElementById("UserName").innerHTML = localStorage.getItem(
  "UserName",
  UserName
);
document.getElementById("UserGmail").innerHTML = localStorage.getItem(
  "UserGmail",
  UserGmail
);
document.getElementById("h1").innerHTML = localStorage.getItem(
  "UserGmail",
  UserGmail
);
//////////////////////////////////////////////////////////////////////////////////////

const name = document.querySelector("#name");
const description = document.querySelector("#description");
const location = document.querySelector("#location");
const number = document.querySelector("#number");
const imageUploadInput = document.querySelector("#imageUpload");
const addBtn = document.querySelector("#addBtn");
let imageSrc = "";

// imageUploadInput.addEventListener("click", () => {
//   logic = true;
// });
// function display(title, text, id, imageInput) {
//   if (isValidInput(title, text)) {
//     displayArea.innerHTML += `
//     <tr id="${id}">
//         <td>${title}</td>
//         <td>${text}</td>
//         <td><img class="listImage" src="" id="img${id}"></td>
//         <td><button onclick="remove('${id}')" class="btn btn-danger">Remove</button></td>
//     </tr>
//   `;
//     imageToString(imageInput, id);
//     clear();
//   }
// }
// function isValidInput(title, text) {
//   if ((title = "" || text == "")) return false;
//   else return true;
// }
// function imageToString(imageInput, id) {
//   const image = document.querySelector(`#img${id}`);
//   if (logic) {
//     let reader = new FileReader();
//     reader.readAsDataURL(imageInput.files[0]);
//     reader.onload = function () {
//       let link = reader.result;
//       image.src = link;
//     };
//   } else {
//     image.src = "https://bitsofco.de/content/images/2018/12/broken-1.png";
//   }
// }
// function clear() {
//   title.value = "";
//   text.value = "";
//   logic = false;
// }
