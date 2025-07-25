// Scroll to top button
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Alert on "see more" links
document.querySelectorAll('.box-content p a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert("More content coming soon!");
  });
});

// Monitor search bar input
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', () => {
  console.log("User typing:", searchInput.value);
});

// Optional: Validate search input on Enter
searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (searchInput.value.trim() === "") {
      alert("Please enter a product name.");
    } else {
      alert("Searching for: " + searchInput.value);
    }
  }
});

// Animated cart icon counter (demo only)
const cartCount = document.querySelector(".cart-icon p");
let count = 0;
document.querySelectorAll('.box-content p a').forEach(link => {
  link.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
  });
});
