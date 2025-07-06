const rarities = [
    { name: "KHDGWBNVIK====",   chance: 1 / 1450000, color: "#ffffff" },
    { name: "transcendant", chance: 1 / 1000000, color: "#0ff0ff" },
    { name: "classical",    chance: 1 / 499999, color: "#ffffff" },
    { name: "error",        chance: 1 / 404201, color: "#ff0033" },
    { name: "glow - extreme",     chance: 1 / 99999,     color: "#ffd4f0" },
    { name: "mythic",       chance: 1 / 75000,  color: "#ff00cc" },
    { name: "Ethereal",     chance: 1 / 60300,  color: "#a100ff" },
    { name: "Legendary",    chance: 1 / 5000,   color: "#ff9900" },
    { name: "lucky",        chance: 1 / 777,    color: "#00ffff" },
    { name: "Rare",         chance: 1 / 100,    color: "#007bff" },
    { name: "fake",         chance: 1 / 50,     color: "#007n7cf" },
    { name: "glow",     chance: 1 / 15,     color: "#ffeeaa" },
    { name: "Uncommon",     chance: 1 / 10,     color: "#22aa22" },
    { name: "morning",      chance: 1 / 7,      color: "#ffd75e" },
    { name: "electric",     chance: 1 / 5,      color: "#ffff00" },
    { name: "Common",       chance: 1 / 2,      color: "#888888" }
]
  
function roll() {
    const resultEl = document.getElementById("result")
    const totalChance = rarities.reduce((sum, r) => sum + r.chance, 0)
    let rand = Math.random() * totalChance;
  
    for (let r of rarities) {
        rand -= r.chance;
        const oneIn = Math.round(1 / r.chance).toLocaleString();
        if (rand <= 0) {
            if (r.name === "classical") {
                startCutscene("ok now this is rare");
                return;
            }
            if (r.name === "glow") {
                resultEl.innerHTML = `You got a <span class="glow" style="font-weight:bold;">${r.name.toUpperCase()}</span> with a chance of 1 in ${oneIn}`
                startCutscene("...")
                return;
            }
            if (r.name === "glow - extreme") {
                resultEl.innerHTML = `You got a <span class="glowX" style="font-weight:bold;">${r.name.toUpperCase()}</span> with a chance of 1 in ${oneIn}`
                startCutscene("...")
                return;
            }
            const msg = `You got a <span style="color:${r.color}; font-weight:bold;">${r.name.toUpperCase()}</span> with a chance of 1 in ${oneIn}`;
            resultEl.innerHTML = msg;
            return;
            }
        }
    }
  
