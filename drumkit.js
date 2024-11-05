const drumContainer = document.querySelector("#drum-container");

const drumSounds = {
  hihat: "q",
  clap: "w",
  snare: "e",
  tom: "r",
  ride: "t",
  openhat: "y",
  tink: "u",
  kick: "i",
};

for (let sound in drumSounds) {
  const item = document.createElement("div");
  const itemImage = document.createElement("img");
  itemImage.src = `./images/${sound}.png`;
  itemImage.alt = `Image of the drum part ${sound}`;
  const desc = document.createElement("p");
  desc.textContent = `${sound[0].toUpperCase() + sound.slice(1)}`;
  const shortcut = document.createElement("p");
  shortcut.classList.add("shortcut");
  shortcut.textContent = `Shortcut ${drumSounds[sound]}`;
  item.id = `${sound}`;
  item.classList.add("display");
  item.append(desc, shortcut, itemImage);
  drumContainer.append(item);
  itemImage.addEventListener("click", () => {
    new Audio(`./sounds/${sound}.wav`).play();
    item.classList.add("highlight-sound");
    setTimeout(function () {
      item.classList.remove("highlight-sound");
    }, 300);
  });
}
window.addEventListener("keydown", (e) => {
  for (let sound in drumSounds) {
    if (e.key === drumSounds[sound]) {
      new Audio(`./sounds/${sound}.wav`).play();
      const item = drumContainer.querySelector(`#${sound}`);
      console.log(item);
      item.classList.add("highlight-sound");
      setTimeout(function () {
        item.classList.remove("highlight-sound");
      }, 300);
    }
  }
});
