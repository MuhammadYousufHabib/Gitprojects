let input = document.querySelector("#input");
let item = document.querySelector(".item");
let itemlist = document.querySelector(".itemlist");
let clearall = document.querySelector(".clearall");

input.addEventListener("keydown", (target) => {
  if (
    target.key === "Enter" &&
    /^[A-Za-z0-9\s]*[A-Za-z0-9][\s]*$/.test(input.value)
  ) {
    let i = item.cloneNode(true);
    i.childNodes[1].innerText = input.value;
    i.style.display = "flex";
    itemlist.append(i);
    let newdel = i.childNodes[3].childNodes[1].childNodes[1];
    newdel.classList.add("del");
    let newedit = i.childNodes[3].childNodes[3].childNodes[1];
    newedit.classList.add("edit");
    input.value = "";
  }
});
clearall.addEventListener("click", () => {
  let itemarray = [...itemlist.children];
  itemarray.forEach((target) => {
    target.remove();
  });
});

itemlist.addEventListener("click", (event) => {
  if (event.target.classList.contains("del")) {
    event.target.parentElement.parentElement.parentElement.remove();
  } else if (event.target.classList.contains("edit")) {
    let editedval = prompt("Enter New Item");
    if (
      editedval !== null &&
      /^[A-Za-z0-9\s]*[A-Za-z0-9][\s]*$/.test(editedval)
    ) {
      event.target.parentElement.parentElement.parentElement.childNodes[1].innerText =
        editedval;
    }
  }
});
// learnt : spread operator ,foreach loop ,event delegation,regex
