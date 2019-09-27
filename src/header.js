const restHeader = (title, description, logo) => {
  const headerContent = document.getElementById("header-content");
  let t = document.getElementById("header-temp");
  let clone = document.importNode(t.content, true);
  if (logo) {
    let logo = clone.getElementById("logo");
    let image = document.createElement("img");
    image.src = "../assets/logo.jpg";
    image.style.height = "100px";
    image.style.width = "220px";
    logo.appendChild(image);
  }
  let hone = clone.getElementById("rest-header");
  let htwo = clone.getElementById("rest-header-two");
  hone.innerHTML = title;
  htwo.innerHTML = description;
  headerContent.appendChild(clone);
};

export default restHeader;
