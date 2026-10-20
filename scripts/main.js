const ID = "chat-icones-visibles";

function applyClass() {
  let on = true;
  try { on = game.settings.get(ID, "wrap"); } catch (e) { /* réglage pas encore prêt */ }
  document.body.classList.toggle("civ-wrap", !!on);
}

Hooks.once("init", () => {
  game.settings.register(ID, "wrap", {
    name: "Icônes du chat à la ligne",
    hint: "Si la rangée d'icônes sous le chat est trop longue, les icônes passent à la ligne au lieu de sortir du cadre. Réglage propre à chaque joueur.",
    scope: "client",
    config: true,
    type: Boolean,
    default: true,
    onChange: applyClass
  });
});

Hooks.once("ready", applyClass);
