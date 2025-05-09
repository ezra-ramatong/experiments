import "./style.css";

const img = document.querySelector(".cmp") as HTMLImageElement;

const edgeThreshold = 10;
let offsetX = 0;

function onPointerMove(e: PointerEvent) {
  const rect = img.getBoundingClientRect();
  offsetX = e.clientX - rect.left;

  if (offsetX >= 0 && offsetX <= edgeThreshold) {
    img.style.cursor = "ew-resize";
    return;
  }

  img.style.cursor = "default";
}

img.addEventListener("pointermove", onPointerMove);

const words = [
  "apple",
  "banana",
  "sky",
  "cloud",
  "water",
  "river",
  "mountain",
  "tree",
  "stone",
  "light",
  "dark",
  "day",
  "night",
  "glass",
  "house",
  "field",
  "road",
  "car",
  "train",
  "book",
  "page",
  "pen",
  "note",
  "salt",
  "sugar",
  "bread",
  "butter",
  "cheese",
  "milk",
  "coffee",
  "tea",
  "chair",
  "table",
  "floor",
  "wall",
  "door",
  "window",
  "key",
  "lock",
  "phone",
  "screen",
  "code",
  "mouse",
  "keyboard",
  "lamp",
  "bag",
  "box",
  "ring",
  "shoe",
  "sock",
  "shirt",
  "pants",
  "hat",
  "coat",
  "rain",
  "snow",
  "wind",
  "fire",
  "ice",
  "sand",
  "beach",
  "ocean",
  "fish",
  "bird",
  "dog",
  "cat",
  "lion",
  "tiger",
  "bear",
  "horse",
  "frog",
  "duck",
  "apple",
  "grape",
  "lemon",
  "lime",
  "peach",
  "plum",
  "pear",
  "melon",
  "chair",
  "sofa",
  "bed",
  "mirror",
  "clock",
  "watch",
  "time",
  "day",
  "month",
  "year",
  "sun",
  "moon",
  "star",
  "sky",
  "cloud",
  "rainbow",
  "storm",
  "fog",
  "hail",
  "breeze",
  "leaf",
  "branch",
  "trunk",
  "root",
  "grass",
  "bush",
  "flower",
  "rose",
  "lily",
  "tree",
  "carpet",
  "rug",
  "curtain",
  "shelf",
  "drawer",
  "cabinet",
  "mirror",
  "paint",
  "brush",
  "canvas",
  "art",
  "music",
  "note",
  "song",
  "beat",
  "drum",
  "guitar",
  "piano",
  "violin",
  "flute",
  "friend",
  "enemy",
  "stranger",
  "neighbor",
  "child",
  "adult",
  "man",
  "woman",
  "boy",
  "girl",
  "king",
  "queen",
  "prince",
  "princess",
  "knight",
  "sword",
  "shield",
  "castle",
  "tower",
  "bridge",
  "river",
  "lake",
  "pond",
  "stream",
  "valley",
  "hill",
  "cliff",
  "cave",
  "forest",
  "jungle",
  "desert",
  "plain",
  "island",
  "coast",
  "harbor",
  "port",
  "boat",
  "ship",
  "plane",
  "train",
  "station",
  "airport",
  "bus",
  "taxi",
  "road",
  "highway",
  "path",
  "trail",
  "map",
  "compass",
  "north",
  "south",
  "east",
  "west",
  "travel",
  "journey",
  "adventure",
  "explore",
  "discover",
  "learn",
];

function rand255() {
  return Math.floor(Math.random() * 256);
}

img.addEventListener("pointerdown", () => {
  const p = document.createElement("p");
  p.textContent = `${words[Math.floor(Math.random() * words.length)]}`;
  p.style.position = "absolute";
  p.style.display = "inline-block";
  p.style.fontSize = `${Math.max(90 - Math.random() * 45, Math.random() * 300)}px`;
  p.style.top = `${Math.trunc(Math.random() * document.body.scrollHeight)}px`;
  p.style.left = `${Math.trunc(Math.random() * img.getBoundingClientRect().width)}px`;
  p.style.color = `rgb(${rand255()}, ${rand255()}, ${rand255()})`;
  p.style.transform = `rotate(${Math.random() * 360}deg)`;

  document.body.append(p);

  p.style.transform = `scale(1) rotate(${Math.random() * 360}deg)`;
  p.style.transition = "transform 0.5s ease-in-out"; // Smooth transition for zoom

  setTimeout(() => {
    p.style.transform = `scale(2) rotate(${Math.random() * 360}deg)`;
    p.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 0);
});
