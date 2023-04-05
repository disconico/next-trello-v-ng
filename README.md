# Next Trello

## Installation et lancement en local

1. Clonez le repo Git :

```bash
git clone https://github.com/disconico/next-trello-v-ng
```

2. Accédez au dossier du projet :

```bash
cd next-trello-v-ng
```

3. Installez les différents packages :

```bash
npm install
```

4. Lancez le serveur de développement :

```bash
npm run dev
```

5. Ouvrez votre navigateur et accédez à [http://localhost:3000](http://localhost:3000) pour voir l'application en action.

## Version en ligne

Vous pouvez également consulter la version déployée de l'application sur Firebase Hosting à l'adresse suivante : [https://next-trello-v-ng.web.app/](https://next-trello-v-ng.web.app/).

## Bilan de l'exercice

### Deux difficultés rencontrées

1. Assurer un rendu _pixel perfect_ en respectant scrupuleusement les dimensions et les couleurs de l'application originale.
2. Créer en un temps limité le pop-up/modal.

### Deux réussites

1. Réussite à reproduire l'application fournie de manière fidèle et en incorporant toutes les fonctionnalités.
2. Bonne organisation et structuration du code en suivant les bonnes pratiques de développement.

### Deux évolutions possibles

1. Améliorer l'UI pour rendre l'application mobile friendly (flex wrap sur les lists par exemple pour eviter le shrink).
2. Améliorer les alertes (window.confirm) pour supprimer une carte/liste en ajoutant un modal personnalisé.
3. Ajouter du drag and drop pour déplacer les listes, avec le package react-dnd par exemple. (Jamais utilisé mais à l'air d'être très sympa 😁 !)
