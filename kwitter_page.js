var firebaseConfig = {
      apiKey: "AIzaSyDDzj5oIukymxoHwkTXFz95sW91-kj3DAI",
      authDomain: "kwitter-56707.firebaseapp.com",
      databaseURL: "https://kwitter-56707-default-rtdb.firebaseio.com",
      projectId: "kwitter-56707",
      storageBucket: "kwitter-56707.appspot.com",
      messagingSenderId: "471568861194",
      appId: "1:471568861194:web:1582e9d2bfc7dad7f9f7f3"
    };
    

    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value=""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
