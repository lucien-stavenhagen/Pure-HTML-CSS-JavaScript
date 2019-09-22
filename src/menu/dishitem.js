const getDishItem = (imgpath, description, price) => {
  const t = document.getElementById("dish-item");
  const dishClone = document.importNode(t.content, true);
  const dishImg = dishClone.getElementById("dish-image");
  dishImg.src = imgpath;
  const dishDescription = dishClone.getElementById("dish-description");
  dishDescription.innerHTML = description;
  const dishPrice = dishClone.getElementById("dish-price");
  dishPrice.innerHTML = price;
  return dishClone;
};

export default getDishItem;
