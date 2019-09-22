import restHeader from "./header";
import restMenuBar from "./menubar";
import showPage from "./pages";
import buildMenuListing from "./menu/menu";

restHeader("Acme Omelette House", "Best omelettes in the brazos valley", true);
restMenuBar();
showPage("home-text");

let dishes = [
  {
    title: "Acme Omelette Specials",
    items: [
      {
        imgpath: "../assets/img/om1.jpg",
        name: "Acme House Exotic Delight",
        price: "$120.99"
      },
      {
        imgpath: "../assets/img/om2.jpg",
        name: "Acme Deep Pan",
        price: "$150.99"
      },
      {
        imgpath: "../assets/img/om3.jpg",
        name: "Acme Matinee Special",
        price: "$10.99"
      }
    ]
  },
  {
    title: "Acme omelette house Side Orders",
    items: [
      {
        imgpath: "../assets/img/frenchfries.jpg",
        name: "Acme greasy fries",
        price: "$5.99"
      },
      {
        imgpath: "../assets/img/coleslaw.jpg",
        name: "Acme coleslaw",
        price: "$3.99"
      }
    ]
  }
];
buildMenuListing(dishes);
