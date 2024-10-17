// Code your solutions in this file
// 1. writeCards function: 
function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

  // 2. countDown function:
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  countDown(5);