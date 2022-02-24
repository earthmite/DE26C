const stringToEncode = document.getElementById("encode-field");
const encodeButton = document.getElementById("encode-button");
encodeButton.addEventListener("click", (e) => {
  e.preventDefault();
  encode(stringToEncode.value, 2).then((value) => {
    document.getElementById("encdStringPara").innerHTML = value;
  });
});
