---
seo:
  locale: fr-FR
  url: https://baned.me/projects/deezerstats
  image: /seo.png
  title: banedPowell ⋅ Deezerstats
  description: "Découvrez mon projet Deezerstats : une application d'analyse de
    l'historique d'écoutes Deezer pour en extraire des tatistiques détaillées."
description: "Découvrez mon projet Deezerstats : une application d'analyse de
  l'historique d'écoutes Deezer pour en extraire des tatistiques détaillées."
title: banedPowell ⋅ Deezerstats
---

::page-section
---
logo: /projects/deezerstats/deezerstats.png
logo-alt: Logo de Deezerstats
---
# Deezertstats

  :::flex-list
    ::::pill-item
    ---
    icon: i-simple-icons-github
    link: https://github.com/banedpowell/deezerstats
    target: _blank
    ---
    Repo Github
    ::::
  
    ::::pill-item
    ---
    icon: i-lucide-globe
    link: https://deezerstats.baned.me
    target: _blank
    ---
    Site
    ::::
  :::

DeezerStats est une application fullstack dédiée à l’analyse de l’historique d’écoute Deezer pour en extraire des statistiques détaillées.

Ce projet m’a permis d’explorer le traitement de larges fichiers, l'extraction et le traitement de ses données, et enfin la restitution de données via une interface intuitive.

J’y ai mis en œuvre une authentification sécurisée, le stockage et traitement des données via Supabase, ainsi que l'affichage en temps réel de l’état d’analyse grâce à Supabase Realtime.

Ce projet m’a permis de consolider mes compétences en développement fullstack, en gestion des flux de données, et en création d’interfaces avec Nuxt.
::

::page-section
## Stack technique

  :::flex-list
    ::::pill-item{tech icon="logos:nuxt-icon"}
    Nuxt
    ::::
  
    ::::pill-item{tech icon="unjs:nitro"}
    Nitro
    ::::
  
    ::::pill-item{tech icon="devicon:supabase"}
    Supabase
    ::::
  
    ::::pill-item{tech icon="logos:tailwindcss-icon"}
    Tailwind
    ::::
  :::
::

::page-section
## Illustrations

  :::project-illustrations-list
  ---
  firstIllustration: /projects/deezerstats/home.png
  firstIllustrationAlt: Screenshot de la page d'accueil
  firstIllustrationTitle: Page d'accueil
  secondIllustration: /projects/deezerstats/dashboard.png
  secondIllustrationAlt: Screenshot du dashboard
  secondIllustrationTitle: Dashboard
  thirdIllustration: /projects/deezerstats/login.png
  thirdIllustrationAlt: Screenshot de la page de connexion
  thirdIllustrationTitle: Connexion
  ---
  :::
::

::page-section
## Roadmap

  :::u-stepper
  ---
  default-value: 1
  disabled: true
  items:
    - title: Authentification
      description: Interface utilisateur et implémentation de l'authentification avec
        Supabase pour se connecter à l'application
      icon: i-lucide-lock
    - title: Dashboard
      description: Dashboard principal avec les statistiques d'écoute les plus
        importantes. Connexion à l'api deezer pour récupérer les affiches et dates
        de sortie.
      icon: i-lucide-music
    - title: Pages détails
      description: Pages dédiées avec informations plus détaillées et statistiques
        spécifiques pour chaque album, morceau et artiste
      icon: i-lucide-info
    - title: Page profil
      description: Page de profil pour gérer les données personnelles et paramètres
      icon: i-lucide-user
    - title: Social
      description: Fonctionnalités sociales pour partager et découvrir les goûts
        musicaux entre utilisateurs
      icon: i-lucide-users
    - title: API Deezer
      description: Intégration temps réel avec l'API officielle Deezer pour des
        statistiques mises à jour
      icon: i-lucide-refresh-cw
  orientation: vertical
  ---
  :::
::

::page-section
## Me contacter

  :::grid-list
    ::::pill-item
    ---
    icon: i-simple-icons-bento
    link: https://bento.me/banedPowell/
    target: _blank
    ---
    Mon profil bento.me
    ::::
  
    ::::pill-item
    ---
    icon: ion:logo-github
    link: https://github.com/banedPowell/
    target: _blank
    ---
    Mon github
    ::::
  
    ::::pill-item{icon="i-lucide-mail" link="mailto:contact@baned.me"}
    <contact@baned.me>
    ::::
  :::
::
