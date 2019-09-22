const showPage = () => {
  const ifId = (attributeList, pageid) => {
    for (let j = 0; j < attributeList.length; j++) {
      if (attributeList[j].name === "id" && attributeList[j].value === pageid) {
        return true;
      }
    }
    return false;
  };
  const pages = document.getElementById("text-content").children;

  return pageid => {
    for (let i = 0; i < pages.length; i++) {
      let a = pages[i].attributes;
      if (ifId(a, pageid)) {
        pages[i].style.opacity = "1";
      } else {
        pages[i].style.opacity = "0";
      }
    }
  };
};

export default showPage();
