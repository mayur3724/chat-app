let username = "";
const joinChatButton = document.getElementById("join-chat");
const form = document.getElementById("form");
const userNameInput = document.getElementById("username-input");
const chatRoomContainer = document.querySelector(".chat-room-container");

joinChatButton.addEventListener("click",(event)=>{
    event.preventDefault();
    event.stopPropagation();
    username = userNameInput.value;
    console.log(username);
    if(username){
        form.style.display = "none";
        chatRoomContainer.style.display = "block";
    }
});
