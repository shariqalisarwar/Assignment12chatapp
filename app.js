var myName = prompt("enter your name");
function sendMessage() {
    var message = document.getElementById("message").value;
  
   
    firebase.database().ref("message").push().set({
        "sender":  myName,
        "message": message
    });
    return false;
}


