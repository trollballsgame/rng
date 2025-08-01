let iscutscene = false
const rarities = [
  { name: "undefined",       chance: 1 / 2147483647, color: "#ff0080" },
  { name: "null",            chance: 1 / 1000000000, color: "#808080" },
  { name: "developer",       chance: 1 / 999999999,  color: "#00ff00" },
  { name: "absolute",        chance: 1 / 500000000,  color: "#ff6600" },
  { name: "transcendent",    chance: 1 / 250000000,  color: "#ffccff" },
  { name: "ethereal",        chance: 1 / 150000000,  color: "#ccffff" },
  { name: "omega",           chance: 1 / 100000000,  color: "#cc0000" },
  { name: "genesis",         chance: 1 / 99999999,   color: "#ff9900" },
  { name: "singularity",     chance: 1 / 45000000,   color: "#000000" },
  { name: "eclipse",         chance: 1 / 33333333,   color: "#330066" },
  { name: "infinity",        chance: 1 / 25000000,   color: "#ffffff" },
  { name: "cosmic",          chance: 1 / 18500000,   color: "#6600cc" },
  { name: "divine",          chance: 1 / 12000000,   color: "#ffdd00" },
  { name: "quantum",         chance: 1 / 7500000,    color: "#00ccff" },
  { name: "nebula",          chance: 1 / 5800000,    color: "#9933ff" },
  { name: "plasma",          chance: 1 / 4200000,    color: "#66ffcc" },
  { name: "void",            chance: 1 / 3750000,    color: "#1a0033" },
  { name: "glitch",          chance: 1 / 2500000,    color: "#ff00ff" },
  { name: "Code: broken",    chance: 1 / 2000000,    color: "#00ff04" },
  { name: "[redacted]",      chance: 1 / 1500000,    color: "#00ff00" },  
  { name: "KHDGWBNVIK====",  chance: 1 / 1450000,    color: "#ffffff" },
  { name: "transcendant",    chance: 1 / 1000000,    color: "#0ff0ff" },
  { name: "classical",       chance: 1 / 499999,     color: "#ffffff" },
  { name: "error",           chance: 1 / 404201,     color: "#ff0033" },
  { name: "glow - extreme",  chance: 1 / 99999,      color: "#ffd4f0" },
  { name: "mythic",          chance: 1 / 75000,      color: "#ff00cc" },
  { name: "Ethereal",        chance: 1 / 60300,      color: "#a100ff" },
  { name: "Legendary",       chance: 1 / 5000,       color: "#ff9900" },
  { name: "code",            chance: 1 / 1024,       color: "#ffffff" },
  { name: "lucky",           chance: 1 / 777,        color: "#00ffff" },
  { name: "Rare",            chance: 1 / 100,        color: "#007bff" },
  { name: "fake",            chance: 1 / 50,         color: "#0077cf" },
  { name: "glow",            chance: 1 / 15,         color: "#ffeeaa" },
  { name: "Uncommon",        chance: 1 / 10,         color: "#22aa22" },
  { name: "morning",         chance: 1 / 7,          color: "#ffd75e" },
  { name: "electric",        chance: 1 / 5,          color: "#ffff00" },
  { name: "usual",           chance: 1 / 4,          color: "#96eb7a" },
  { name: "Common",          chance: 1 / 2,          color: "#888888" }
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
