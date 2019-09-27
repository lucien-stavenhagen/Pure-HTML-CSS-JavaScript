import showPage from "./pages";

const menuBarFactory = () => {
  const mitems = [
    {
      name: "Acme Omelette House Home",
      listener: event => {
        showPage("home-text");
      }
    },
    {
      name: "About Acme Omelette House",
      listener: event => {
        showPage("about-text");
      }
    },
    {
      name: "Main Menu",
      listener: event => {
        showPage("menu-text");
      }
    }
  ];
  const restMenuBar = () => {
    const menubarContent = document.getElementById("menubar-content");
    const t = document.getElementById("menubar-temp");
    const menuclone = document.importNode(t.content, true);
    let ul = menuclone.getElementById("menubar-list");
    for (let i = 0; i < mitems.length; i++) {
      //
      // now clone li's and add them
      // to the ul
      //
      let newmenuItem = document.createElement("li");
      newmenuItem.classList.add("menu-item");
      newmenuItem.innerHTML = mitems[i].name;
      newmenuItem.addEventListener("click", mitems[i].listener);
      ul.appendChild(newmenuItem);
    }
    menubarContent.appendChild(menuclone);
  };
  return { restMenuBar };
};

const { restMenuBar } = menuBarFactory();
export default restMenuBar;
