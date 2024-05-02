const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});


function addCountdownEventListener(button, url) {
  button.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default action of the button

      // Change the button text to indicate the countdown
      this.innerText = "Redirecting in 10...";
      this.disabled = true; // Disable the button during the countdown

      // Start a 10-second countdown
      var countdown = 10; // Adjusted to 10 seconds
      var interval = setInterval(function() {
          countdown--;
          if (countdown <= 0) {
              clearInterval(interval); // Stop the countdown
              window.open(url, '_blank'); // Open the specified URL in a new tab
          } else {
              // Update the button text with the remaining countdown
              this.innerText = "Redirecting in " + countdown + "...";
          }
      }.bind(this), 1000); // 1000 milliseconds = 1 second
  });
}

// Get all buttons with the class "movie-list-item-button" (for "Download")
var downloadButtons = document.querySelectorAll('button.movie-list-item-button');

// Add countdown event listener for each "Download" button
downloadButtons.forEach(function(button) {
  if (button.querySelector('a').innerText.trim() === "Download") {
      var url = button.querySelector('a').getAttribute('href');
      addCountdownEventListener(button, url);
  }
});

// Get all buttons with the class "featured-button" (for "Watch Trailer")
var watchTrailerButtons = document.querySelectorAll('a.featured-button');

// Add countdown event listener for each "Watch Trailer" button
watchTrailerButtons.forEach(function(button) {
  if (button.innerText.trim() === "Watch Trailer") {
      var url = button.getAttribute('href');
      addCountdownEventListener(button, url);
  }
});

function addCountdownEventListener(button, url) {
  button.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default action of the button

      // Change the button text to indicate the countdown
      this.innerText = "Redirecting in 10...";
      this.disabled = true; // Disable the button during the countdown

      // Start a 10-second countdown
      var countdown = 10; // Adjusted to 10 seconds
      var interval = setInterval(function() {
          countdown--;
          if (countdown <= 0) {
              clearInterval(interval); // Stop the countdown
              window.open(url, '_blank'); // Open the specified URL in a new tab
          } else {
              // Update the button text with the remaining countdown
              this.innerText = "Redirecting in " + countdown + "...";
          }
      }.bind(this), 1000); // 1000 milliseconds = 1 second
  });
}

// Get all buttons with the class "movie-list-item-button" (for "Download" buttons in <button> elements)
var downloadButtons1 = document.querySelectorAll('button.movie-list-item-button');

// Add countdown event listener for each "Download" button within <button> elements
downloadButtons1.forEach(function(button) {
  if (button.querySelector('a').innerText.trim() === "Download") {
      var url = button.querySelector('a').getAttribute('href');
      addCountdownEventListener(button, url);
  }
});

// Get all links with the class "featured-button" (for "Download" buttons in <a> elements)
var downloadButtons2 = document.querySelectorAll('a.featured-button');

// Add countdown event listener for each "Download" button within <a> elements
downloadButtons2.forEach(function(link) {
  if (link.innerText.trim() === "Download") {
      var url = link.getAttribute('href');
      addCountdownEventListener(link, url);
  }
});


