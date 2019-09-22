const restFooter = () => {
  const display = document.getElementById("footer-content");
  const t = document.getElementById("footer-temp");
  const footerClone = document.importNode(t.content, true);
  const logo = footerClone.getElementById("footer-logo");
  const footerImage = document.createElement("img");
  footerImage.src = "../assets/logo.jpg";
  footerImage.style.height = "50px";
  footerImage.style.width = "80px";
  logo.appendChild(footerImage);
  const footerText = footerClone.getElementById("rest-footer");
  footerText.innerHTML = "&copy; 2019, DogBite Web Design";
  display.appendChild(footerClone);
};

export default restFooter;
