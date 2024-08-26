
function searchName(listaLength) {
  let searchInput = document.querySelector(".search").value;
  searchInput = searchInput.toLowerCase();
  console.log(searchInput);
  const innerContentSearch = document.querySelectorAll(".innerCont");
  // console.log(innerContentSearch[3]);
  for (let i = 0; i < listaLength; i++) {
    console.log(innerContentSearch[i].textContent);
    if (!innerContentSearch[i].innerHTML.toLowerCase().includes(searchInput)) {
      innerContentSearch[i].style.display = "none"
    }
  }
}

