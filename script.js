const countdownElement = document.getElementById('countdown');

const countdownDate = new Date('December 5, 2024 16:00:00').getTime();

const intervalId = setInterval(() => {
  const now = new Date().getTime();
  
  const distance = countdownDate - now;
  // alert(distance)
  
  if (distance < 0) {
    clearInterval(intervalId);
    countdownElement.innerHTML = 'The wedding is today!';
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000);

