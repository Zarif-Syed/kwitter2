
var firebaseConfig = {
      apiKey: "AIzaSyDDzj5oIukymxoHwkTXFz95sW91-kj3DAI",
      authDomain: "kwitter-56707.firebaseapp.com",
      databaseURL: "https://kwitter-56707-default-rtdb.firebaseio.com",
      projectId: "kwitter-56707",
      storageBucket: "kwitter-56707.appspot.com",
      messagingSenderId: "471568861194",
      appId: "1:471568861194:web:1582e9d2bfc7dad7f9f7f3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome: "+user_name;


    function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console,log("Room Nmae - "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML+=row;

      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}