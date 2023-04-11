const firebaseConfig = { 
   apiKey: "AIzaSyDUJ5mUqpnGu01BjWmaTfZTxC8_NXlWIqs",
  authDomain: "class-93-72af2.firebaseapp.com",
  databaseURL: "https://class-93-72af2-default-rtdb.firebaseio.com",
  projectId: "class-93-72af2",
  storageBucket: "class-93-72af2.appspot.com",
  messagingSenderId: "729482202889",
  appId: "1:729482202889:web:fdee7850ae9eba2c6ccdd8",
  measurementId: "G-JZ2FV2SN64"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
    document.getElementById("output").innerHTML+=row;
    // a=a+1
    // a+=1
    //End code
    });
});
}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
}
