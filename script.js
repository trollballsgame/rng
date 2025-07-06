function roll() {
  if (iscutscene) return;
  const resultEl = document.getElementById("result");
  resultEl.className = "";

  const totalChance = rarities.reduce((sum, r) => sum + r.chance, 0);
  let rand = Math.random() * totalChance;

  for (let r of rarities) {
    rand -= r.chance;
    const oneIn = Math.round(1 / r.chance).toLocaleString();

    if (rand <= 0) {
      let spanClass = "";
      if (r.name === "glow") spanClass = "glow";
      else if (r.name === "glow - extreme") spanClass = "glowX";

      if (r.name === "lucky") {
        startCutscene("you just got lucky...");
      } else if (spanClass && r.name !== "glow") {
        // Only trigger cutscene for glowX or other future variants, not regular "glow"
        resultEl.innerHTML = `You got a <span class="${spanClass}" style="font-weight:bold;">${r.name.toUpperCase()}</span> with a chance of 1 in ${oneIn}`;
        startCutscene("...");
      } else {
        resultEl.innerHTML = `You got a <span style="color:${r.color}; font-weight:bold;">${r.name.toUpperCase()}</span> with a chance of 1 in ${oneIn}`;
      }

      return;
    }
  }
}
