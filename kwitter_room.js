const firebaseConfig = { 
    apiKey: "AIzaSyB_fX9RnqX-TajG7YcNbD-NZQ_iePMfn9M",
    authDomain: "kwitter-1d87a.firebaseapp.com",
    databaseURL: "https://kwitter-1d87a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-1d87a",
    storageBucket: "kwitter-1d87a.appspot.com",
    messagingSenderId: "945259888962",
    appId: "1:945259888962:web:d47bec47172de7d82f48db",
    measurementId: "G-X98JC9G5Y2"
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
