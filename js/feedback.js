const sendMessage = document.getElementById('send-message');
const senderName = document.getElementById('sender-name');
const senderNumber = document.getElementById('sender-number');

sendMessage.addEventListener('click', async () => {
  console.log('works');

  const message = {
    chat_id: '589977540',
    text: `name: ${senderName.value}\nnumber: ${senderNumber.value}`
  }

  let response = await fetch('https://api.telegram.org/bot1844140635:AAH9AHryAhskskPJAzuPG3z21y4WsYVNr14/sendMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(message)
  });
  document.getElementById("modalWrapper").style = "left: -120%;"
  console.log(response);
})