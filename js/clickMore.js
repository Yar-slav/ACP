var moreText = document.getElementById("read-more");
var additionalText = document.getElementById("additional");

moreText.addEventListener("click", function() {
  if (additionalText.style.opacity === "0") {
    additionalText.style.opacity = "1";
    additionalText.style.maxHeight = additionalText.scrollHeight + "px";
    additionalText.style.transform = "translateY(0)";
    moreText.innerHTML = "Приховати";
  } else {
    additionalText.style.opacity = "0";
    additionalText.style.maxHeight = "0";
    additionalText.style.transform = "translateY(20px)";
    moreText.innerHTML = "Читати більше";
  }
});
