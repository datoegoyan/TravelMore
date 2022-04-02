function logout() {
  localStorage.removeItem("current");
  localStorage.removeItem("UserName");
  localStorage.removeItem("UserGmail");
  window.location.href = "../index.html";
}
function displayAlert(icon, title) {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
}
const displayAreaAuth = document.getElementById("displayArea");
const login = document.getElementById("login");
const register = document.getElementById("register");

/**
 * It registers a user in the database.
 */
function addpost() {
  const hotels = getArrayFromFirebase("Hotels");
  const name = document.querySelector("#name").value;
  const description = document.querySelector("#description").value;
  const location = document.querySelector("#location").value;
  const number = document.querySelector("#number").value;
  if (name == "" || description == "" || location == "" || number == "") {
    displayAlert("error", "Fill all the inputs!");
  } else {
    addElementInFirebase("Hotels", {
      name: name,
      description: description,
      location: location,
      number: number,
    });
    displayAlert("success", "Successfully");
    // setTimeout(() => {
    //   window.location.href = "../booking/booking.html";
    //   return;
    // }, 2000);

    //let logic = true;
    // const image = document.querySelector(`#img${id}`);
    // if (logic) {
    //   let reader = new FileReader();
    //   reader.readAsDataURL(imageInput.files[0]);
    //   reader.onload = function () {
    //     let link = reader.result;
    //     image.src = link;
    //   };
    // } else {
    //   image.src = "https://bitsofco.de/content/images/2018/12/broken-1.png";
    // }
  }
}
function registerUser() {
  const users = getArrayFromFirebase("Users");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let alreadyRegisteredEmail = false;
  users.forEach((element) => {
    setTimeout(() => {
      if (element.data.email === email) {
        alreadyRegisteredEmail = true;
        return;
      }
    }, 2000);
  });
  if (alreadyRegisteredEmail) {
    displayAlert("error", "register failed!");
  } else {
    addElementInFirebase("Users", {
      name: name,
      email: email,
      password: password,
    });
    displayAlert("success", "Successfully");
    setTimeout(() => {
      window.location.href = "../authentication/login.html";
      return;
    }, 2000);
  }
}
/**
 * It checks if the user is authorized or not.
 */
function auth() {
  const users = getArrayFromFirebase("Users");
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let isCorrectUser = false;
  users.forEach((element) => {
    if (element.data.email === email && element.data.password === password) {
      isCorrectUser = true;
      localStorage.setItem("id", element.userid);
      let UserName = element.data.name;
      let UserGmail = element.data.email;
      localStorage.setItem("UserName", UserName);
      localStorage.setItem("UserGmail", UserGmail);
      // document.getElementById("UserName"), document.getElementById("UserGmail")
      console.log(UserName);
      console.log(UserGmail);
      return;
    }
  });
  if (!isCorrectUser) {
    displayAlert("error", "Login failed!");
  } else {
    displayAlert("success", "Successfully");
    setTimeout(() => {
      window.location.href = "../booking/booking.html";
      return;
    }, 2000);
  }
}
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
