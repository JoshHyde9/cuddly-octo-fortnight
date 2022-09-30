const toolTipText = document.getElementById("tooltip-text");

const copyToClipboard = () => {
  navigator.clipboard.writeText("joshhyde546@gmail.com");

  toolTipText.innerText = "Copied!";

  setTimeout(() => {
    toolTipText.innerText = "Click to copy email address to clipboard.";
  }, 3000);
};

let lastScrollTop;
const navbar = document.getElementById("nav");
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
    navbar.classList.add("transition");
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
