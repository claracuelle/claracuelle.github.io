# AGENTS.md

## Objectif du projet

Portfolio statique de Clara Cuelle construit avec Astro. Le projet doit rester léger, accessible et fidèle au design system, qui évoluera progressivement.

## Stack de référence

- Bun `1.3.14` pour l'installation et les scripts.
- Astro `7.2.4` en génération statique.
- Tailwind CSS `4.3.3` via le plugin Vite officiel `@tailwindcss/vite`.
- TypeScript `6.0.3` avec la configuration stricte d'Astro. TypeScript 7 ne doit pas être adopté tant que `astro check` ne prend pas en charge sa nouvelle API.
- HTML, CSS et JavaScript natifs avant toute dépendance ou framework client.
- Node.js `>= 22.12.0` si une commande ne peut pas être exécutée avec Bun.

Les versions ci-dessus sont les versions stables validées pour le projet. Avant toute mise à jour, vérifier les versions et guides de migration officiels, tester les changements majeurs et mettre à jour `package.json` et `bun.lockb` ensemble.

## Architecture

- `src/pages/` contient uniquement les routes.
- `src/layouts/` contient les structures de page partagées.
- `src/components/` contient les composants Astro réutilisables.
- `src/styles/global.css` est la source de vérité des tokens et styles globaux.
- `public/` contient les polices, SVG, PDF et autres ressources statiques.

Inspecter et réutiliser l'existant avant de créer un composant, un style ou un script. Ne pas ajouter React, Vue, Svelte ou une bibliothèque d'interface sans besoin démontré et accord explicite.

## Contrat du design system

- Déclarer les tokens Tailwind dans `src/styles/global.css` avec `@theme`.
- Réutiliser les tokens existants avant d'introduire une valeur ponctuelle.
- Conserver Boldonse pour les titres de marque et Geist pour le texte courant.
- Utiliser la palette Figma avec les noms descriptifs suivants : `blue` (`#0000ff`), `white` (`#fdfdff`), `orange` (`#e37500`), `ink` (`#00011e`), `navy` (`#040449`), `beige` (`#fffcf8`), `lavender` (`#efefff`) et `powder-blue` (`#ccf0fb`).
- Réserver `lavender` au fond des badges et `powder-blue` à leur bordure tant que Figma ne les promeut pas en variables globales.
- Ne pas créer d'alias sémantique dupliquant une couleur existante ; utiliser directement le token descriptif dans les composants.
- Utiliser `oklch()` pour toute nouvelle couleur si aucune couleur de marque existante ne convient.
- Construire les composants avec des variantes explicites et un DOM léger ; éviter la duplication de longues listes de classes.
- Adopter une approche mobile-first. Une variante desktop doit compléter le composant mobile, pas créer une seconde implémentation.
- Le futur panneau « Mes liens » est un panneau plein écran, jamais un dropdown. Utiliser de préférence `<dialog>` et les comportements natifs du navigateur.
- Toute nouvelle décision visuelle durable doit être ajoutée aux tokens ou documentée ici afin que les pages suivantes restent cohérentes.

## Accessibilité

- Utiliser les éléments HTML natifs et sémantiques.
- Garantir navigation clavier, focus visible, labels accessibles, textes alternatifs et contrastes suffisants.
- Préserver la touche `Escape`, le retour du focus et le blocage du défilement pour les interfaces modales.
- Respecter `prefers-reduced-motion` et éviter les animations nécessaires à la compréhension.
- Utiliser ARIA uniquement lorsque le HTML natif ne suffit pas.

## CSS et performances

- Préférer Grid et Flexbox aux positionnements absolus structurels.
- Éviter `!important`, les sélecteurs complexes et les valeurs arbitraires répétées.
- Ne charger aucun JavaScript pour un comportement réalisable en HTML ou CSS.
- Ne pas ajouter de dépendance pour une interaction simple.
- Dimensionner explicitement les images et icônes afin de limiter les décalages de mise en page.
- Préserver les Core Web Vitals, le SEO et le rendu sans JavaScript.

## Contenu et ressources

- Ne pas modifier ni remplacer les PDF, polices, SVG ou données synchronisées sans demande explicite.
- Ne pas inventer de lien social, texte, métadonnée ou comportement absent du projet ou de la maquette.
- Préserver les URLs publiques à la racine : ce dépôt `username.github.io` n'utilise pas de sous-chemin Astro.

## Méthode de modification

- Avant une modification non triviale, présenter le plan, les fichiers concernés et les incertitudes, puis attendre l'accord.
- Faire le changement minimal et préserver les modifications locales sans rapport avec la demande.
- Ne pas modifier les dépendances, le lockfile, la CI/CD, les secrets ou l'architecture hors du périmètre approuvé.
- Ne pas créer de branche, commit ou pull request sans autorisation explicite.

## Validation

Après une modification de code ou de dépendances, exécuter au minimum :

```sh
bun run build
git diff --check
git status --short
```

Pour une modification visuelle, vérifier aussi la page dans un navigateur aux formats mobile et desktop, ainsi que les interactions au clavier. Distinguer les validations réussies, indisponibles et les erreurs préexistantes.
