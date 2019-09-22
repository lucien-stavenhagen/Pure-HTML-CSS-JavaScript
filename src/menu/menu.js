import dishItem from "./dishitem";

const buildMenuListing = menuList => {
  const display = document.getElementById("menu-text");
  const shadow = display.attachShadow({ mode: "open" });
  for (let i = 0; i < menuList.length; i++) {
    let m = createMenu(menuList[i].title, menuList[i].items);
    shadow.appendChild(m);
  }
};
const createMenu = (mainTitle, dishesList) => {
  const t = document.getElementById("menu-temp");
  const menuClone = document.importNode(t.content, true);
  const dishTitle = menuClone.getElementById("dish-title");
  dishTitle.innerHTML = mainTitle;
  //
  // insert dish items here
  //
  const dishList = menuClone.getElementById("dish-item-list");
  for (let i = 0; i < dishesList.length; i++) {
    dishList.appendChild(
      dishItem(dishesList[i].imgpath, dishesList[i].name, dishesList[i].price)
    );
  }
  return menuClone;
};

export default buildMenuListing;
