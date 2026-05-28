//Testimonials Section

const reviews = document.querySelectorAll('.review');
const prevBtn = document.querySelector('.arrow-btn-back');
const nextBtn = document.querySelector('.arrow-btn-forward');

let currentIndex = 0;

function showReview(index) {
    reviews.forEach(review => review.classList.remove("active"));
  reviews[index].classList.add("active");
}
nextBtn.addEventListener('click', ()=> {
     currentIndex++;
  if (currentIndex >= reviews.length) currentIndex = 0;
  showReview(currentIndex);
});
prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = reviews.length - 1;
  showReview(currentIndex);
});

//FAQs Section

const questions = document.querySelectorAll('.accordion-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    
    const parent = question.parentElement;

    // Close all others (optional - remove this block if you want multiple open)
    document.querySelectorAll('.accordion-content').forEach(item => {
      if (item !== parent) {
        item.classList.remove('active');
      }
    });

    // Toggle current one
    parent.classList.toggle('active');
  });
});

//hambuger menu
const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");

  // toggle icon state
  if (navBar.classList.contains("active")) {
    hamburger.textContent = "✖";
  } else {
    hamburger.textContent = "☰";
  }
});

