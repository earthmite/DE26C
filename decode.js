const stringToDcode = document.getElementById("dcode-field");
const decodeButton = document.getElementById("dcode-button");
decodeButton.addEventListener("click", (e) => {
  e.preventDefault();
  decode(stringToDcode.value, 2).then((value) => {
    document.getElementById("dcodeStringPara").innerHTML = value;
  });
});
