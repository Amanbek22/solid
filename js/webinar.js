const sendMessage = document.getElementById('send-message');
const senderName = document.getElementById('sender-name');
const senderNumber = document.getElementById('sender-number');

sendMessage.addEventListener('click', async () => {
  console.log('works');

  const message = {
    name: senderName.value,
    number: senderNumber.value,
    from: 'webinar'
  }

  await fetch('http://35.223.222.188:3000/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(message)
  });
  
})