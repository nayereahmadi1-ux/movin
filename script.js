function sendMessage() {
  const input = document.getElementById("messageInput");
  const messages = document.getElementById("messages");

  if (input.value.trim() === "") return;

  const div = document.createElement("div");
  div.className = "message";
  div.innerText = input.value;

  messages.appendChild(div);
  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}
