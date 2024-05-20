function hideSelf() {
  let btnHidden = document.querySelector(".hide-self-button");
  btnHidden.onclick = hidden;
  function hidden() {
    btnHidden.hidden = true;
  }
}
