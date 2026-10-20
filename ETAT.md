# État — chat-icones-visible

## Fait (v1.0.0)
- CSS : `flex-wrap` sur `#chat-controls`, `#message-modes` et `.control-buttons` (barre latérale et fenêtre détachée), activé par la classe `civ-wrap` sur `<body>`.
- Réglage client « wrap » (défaut : activé).
- Sélecteurs relevés dans Foundry 14.368 (`templates/sidebar/tabs/chat/notifications.hbs` et `foundry2.css`).
- Test Chromium avec le vrai CSS de Foundry : 2 icônes hors cadre sans le module, 0 avec.

## À tester par Stéphane
- Dans le monde D&D (86 modules) : toutes les icônes visibles, y compris « vider le chat ».
- Fenêtre de chat détachée.
- Ajouter la compatibilité d'un module qui injecterait ses icônes ailleurs que dans `#chat-controls` (à voir sur capture).

## À faire
- Créer le dépôt GitHub vide, pousser, release v1.0.0.
