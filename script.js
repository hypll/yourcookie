const show = document.getElementById("show");
const copy = document.getElementById("copy");
const music = new Audio("assets/music.mp3");

// then the show button is clicked then show a embed youtube video
show.addEventListener("click", () => {
  // show the video
  const video = document.getElementById("video");
  // play the music
  music.play();
  music.loop = true;
  music.volume = 0.3;

  // add styles to the video
  video.classList.add("display-block");

  // add the button to a not allowed button
  show.classList.add("c-not-allowed");
  show.innerText = "Stop";

  // change the "Want a cookie?" text to "No cookie to you!"
  document.getElementById("cookieText").innerText = "No cookie to you!";

  // set the local storage to true (just for fun 🥴)
  localStorage.setItem("cookie", "no");
  localStorage.setItem("rickrolled", "yes");
});

// the button to copy the website url
copy.addEventListener("click", () => {
  let url = "https://www.yourcookie.ml";

  // the function to copy the url
  navigator.clipboard.writeText(url).then(function () {
    console.log("Copied to clipboard");
  });

  // show the notification
  const notification = document.getElementById("notification");
  notification.classList.add("display-block");
  setTimeout(() => {
    notification.classList.remove("display-block");
  }, 2000);
});
