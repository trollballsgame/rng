let iscutscene = false

const rarities = [
  { name: "[redacted]",      chance: 1 / 1500000, color: "#00ff00" },  
  { name: "KHDGWBNVIK====",  chance: 1 / 1450000, color: "#ffffff" },
  { name: "transcendant",    chance: 1 / 1000000, color: "#0ff0ff" },
  { name: "classical",       chance: 1 / 499999,  color: "#ffffff" },
  { name: "error",           chance: 1 / 404201,  color: "#ff0033" },
  { name: "glow - extreme",  chance: 1 / 99999,   color: "#ffd4f0" },
  { name: "mythic",          chance: 1 / 75000,   color: "#ff00cc" },
  { name: "Ethereal",        chance: 1 / 60300,   color: "#a100ff" },
  { name: "Legendary",       chance: 1 / 5000,    color: "#ff9900" },
  { name: "lucky",           chance: 1 / 777,     color: "#00ffff" },
  { name: "Rare",            chance: 1 / 100,     color: "#007bff" },
  { name: "fake",            chance: 1 / 50,      color: "#0077cf" },
  { name: "glow",            chance: 1 / 15,      color: "#ffeeaa" },
  { name: "Uncommon",        chance: 1 / 10,      color: "#22aa22" },
  { name: "morning",         chance: 1 / 7,       color: "#ffd75e" },
  { name: "electric",        chance: 1 / 5,       color: "#ffff00" },
  { name: "usual",           chance: 1 / 4,       color: "#96eb7a" },
  { name: "Common",          chance: 1 / 2,       color: "#888888" }
];

function roll() {
    if (iscutscene) return;
  
    const resultEl = document.getElementById("result");
    const tghd = document.getElementById("tghd");
    resultEl.className = "";
  
    for (let r of rarities) {
      if (Math.random() < r.chance) {
        const oneIn = Math.round(1 / r.chance).toLocaleString()
        if (r.name === "glow") {
          tghd.classList.add("glow-effect");
          tghd.classList.remove("glowX-effect");
        } else if (r.name === "glow - extreme") {
          tghd.classList.add("glowX-effect");
          tghd.classList.remove("glow-effect");
        } else {
          tghd.classList.remove("glow-effect", "glowX-effect");
        }
  
        let spanClass = "";
        if (r.name === "glow") spanClass = "glow";
        else if (r.name === "glow - extreme") spanClass = "glowX";
        else if (r.name === "electric") spanClass = "electric";
        if (r.name === "lucky") {
          startCutscene("You just got lucky...");
        } else if (r.name === "glow - extreme") {
          startCutscene("...");
        }
        if (spanClass) {
          resultEl.innerHTML = `You got a <span class="${spanClass}" style="font-weight:bold;">${r.name.toUpperCase()}</span> with a chance of 1 in ${oneIn}`;
        } else {
          resultEl.innerHTML = `You got a <span style="color:${r.color}; font-weight:bold;">${r.name.toUpperCase()}</span> with a chance of 1 in ${oneIn}`;
        }
  
        return;
      }
    }
    tghd.classList.remove("glow-effect", "glowX-effect");
    resultEl.innerHTML = `You got a <span style="color:#888888; font-weight:bold;">COMMON</span> with a chance of 1 in 2`;
  }
  
  
