function toggleText() {
  let btnHidden = document.querySelector(".toggle-text-button");
  let textHidden = document.querySelector("#text");
  btnHidden.onclick = function () {
    textHidden.hidden = !textHidden.hidden;
  };
}
