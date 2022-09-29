const toolTipText = document.getElementById("tooltip-text");

const copyToClipboard = () => {
  navigator.clipboard.writeText("joshhyde546@gmail.com");

  toolTipText.innerText = "Copied!";

  setTimeout(() => {
    toolTipText.innerText = "Click to copy email address to clipboard.";
  }, 3000);
};
