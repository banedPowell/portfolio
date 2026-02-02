---
title: banedPowell ⋅ Cinemotion
card:
  title: Cinemotion
  description: Un client TMDB développé avec Nuxt 3 et Scss.
  projectIcon: /projects/cinemotion/logo.png
  iconAlt: Icone de Cinemotion
description: "Découvrez mon projet Cinemotion : un client TMDB développé avec Nuxt 3."
position: 3
---

::page-section
---
logo: /projects/cinemotion/logo.png
logo-alt: Logo de Deezerstats
---
# Cinemotion

  :::flex-list
    ::::pill-item
    ---
    icon: i-simple-icons-github
    link: https://github.com/banedpowell/cinemotion
    target: _blank
    ---
    Repo Github
    ::::

    ::::pill-item
    ---
    icon: i-lucide-globe
    link: https://cinemotion.baned.me
    target: _blank
    ---
    Site
    ::::
  :::

Cinemotion est un client [`TMDB`](https://www.themoviedb.org/) développé avec `Nuxt 3`.

Cette interface permet de découvrir les films et séries les plus populaires et d'accéder à des informations détaillées.
::

::page-section
## Stack technique

  :::flex-list
    ::::pill-item{icon="logos:nuxt-icon" tech=""}
    Nuxt 3
    ::::

    ::::pill-item{icon="unjs:nitro" tech=""}
    Nitro
    ::::

    ::::pill-item{icon="devicon:sass" tech=""}
    Scss
    ::::

    ::::pill-item{icon="mdi:movie-open-outline" tech=""}
    API TMDB
    ::::
  :::

Ce projet m’a permis de découvrir le framework et d’explorer ses principales fonctionnalités, aussi bien côté frontend que backend.

J’y ai appris à utiliser `Nitro` pour mettre en place un backend et à tirer parti de la structure de fichiers propre à Nuxt pour la navigation et les routes. Cinemotion m’a également offert une première approche de `TypeScript` et de l’intégration d’une `API tierce`, tout en travaillant sur une interface fluide et agréable pour explorer l’univers du cinéma et des séries.
::

::page-section
## Illustrations

  :::project-illustrations-list
  ---
  firstIllustration: /projects/cinemotion/home.png
  firstIllustrationAlt: Page d'accueil de Cinemotion
  firstIllustrationTitle: Page d'accueil
  secondIllustration: /projects/cinemotion/movies.png
  secondIllustrationAlt: Page listant les films en salles et populaires
  secondIllustrationTitle: Films
  thirdIllustration: /projects/cinemotion/movie-details.png
  thirdIllustrationAlt: Page de détails des films
  thirdIllustrationTitle: Détails des films
  ---
  :::
::

::page-section
## Roadmap

  :::u-stepper
  ---
  default-value: 0
  disabled: true
  items:
    - title: Navigation
      description: Navigation pour afficher plus de résultats dans les listes de films
        et séries en salles et populaires etc.
      icon: lucide:navigation
    - title: Recherche
      description: Ajouter une fonction de recherche avec filtres et tri par types,
        dates, notes, etc.
      icon: lucide:search
    - title: SEO
      description: Travail sur le SEO les balises meta
      icon: lucide:scan-search
    - title: Authentification
      description: Création de comptes utilisateur et authentification
      icon: i-lucide-lock
    - title: Social
      description: Fonctionnalités sociales (poster des commentaires, faire des
        listes, noter des oeuvres)
      icon: lucide:user-cog
  orientation: vertical
  ---
  :::
::
