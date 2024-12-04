const countdownElement = document.getElementById('countdown');

const countdownDate = new Date('December 5, 2024 11:00:00').getTime();

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


// ScrollReveal().reveal('.main_photo, .wedding-info, .date-venue, .rsvp, .gift-guide, .dress-code', { distance: '20px', origin: 'bottom', duration: 500 });



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal, {passive: true});