const firebaseConfig = {
  apiKey: "AIzaSyCyQPtJrYB6iJhSqDQqEH7ToE1fDWCWjJ8",
  authDomain: "travelmore-88.firebaseapp.com",
  databaseURL: "https://travelmore-88-default-rtdb.firebaseio.com",
  projectId: "travelmore-88",
  storageBucket: "travelmore-88.appspot.com",
  messagingSenderId: "464453899361",
  appId: "1:464453899361:web:7848635fa3281b8ac0c620",
  measurementId: "G-RVB6PCYPWY",
};
firebase.initializeApp(firebaseConfig);

function randomID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0;
    let v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function generateFirebaseItem(ID, value) {
  return {
    userid: ID,
    data: value,
  };
}

/**
 * Add a new element to the Firebase database
 * @param REF - The Firebase reference to the data you want to add.
 * @param data - The data you want to add to the database.
 */
function addElementInFirebase(REF, data) {
  firebase
    .database()
    .ref(REF + "/" + randomID())
    .set(data);
}

function getArrayFromFirebase(REF) {
  let tempArray = [];
  firebase
    .database()
    .ref(REF)
    .on("value", (response) => {
      response.forEach((element) => {
        tempArray.push(generateFirebaseItem(element.key, element.val()));
      });
    });
  return tempArray;
}

function removeElementFromFirebase(REF, id = "", option = false) {
  if (option) {
    firebase.database().ref(`${REF}/${id}`).remove();
  } else {
    firebase.database().ref(`${REF}/`).remove();
  }
}

function changeOnDateOnFirebaseByID(REF, ID, data) {
  firebase
    .database()
    .ref(REF + "/" + ID)
    .set(data);
}
