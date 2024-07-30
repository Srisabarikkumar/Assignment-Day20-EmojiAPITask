const btn = document.getElementsByTagName("button");

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    const emojiContainer = document.getElementById("emoji-container");
    emojiContainer.innerHTML = "Loading...";

    setTimeout(() => {
      emojiContainer.innerHTML = "";
      fetch(`https://emojihub.yurace.pro/api/all/category/${this.innerHTML}`)
        .then((res) => res.json())
        .then((res) => {
          res.forEach((item) => {
            const emojiHolder = document.createElement("div");
            emojiHolder.classList.add(
              "d-flex",
              "justify-content-center",
              "align-items-center",
              "emojiItem",
              "m-3"
            );

            const emojiElem = document.createElement("span");
            emojiElem.innerHTML = item.htmlCode[0];

            emojiHolder.appendChild(emojiElem);

            emojiContainer.appendChild(emojiHolder);
          });
        })
        .catch((err) => {
          const errorElement = document.getElementById("errorHeading");
          errorElement.style.color = "red";
          errorElement.innerHTML = err;
        });
    }, 1000);
  };
}
