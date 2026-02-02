---
title: banedPowell ⋅ Deezerstats
card:
  title: banedStats
  description: Une application pour analyser les statistaiques d'écoutes deezer.
  projectIcon: /projects/banedstats/logo.png
  iconAlt: Icone de banedStats
description: "Découvrez mon projet Deezerstats : une application d'analyse de votre compte Deezer pour en extraire des statistiques détaillées."
position: 2
---

::page-section
---
logo: /projects/banedstats/logo.png
logo-alt: Logo de Deezerstats
---
# banedStats

  :::flex-list
    ::::pill-item
    ---
    icon: i-simple-icons-github
    link: https://github.com/banedpowell/banedStats
    target: _blank
    ---
    Repo Github
    ::::

    ::::pill-item
    ---
    icon: i-lucide-globe
    link: https://stats.baned.me
    target: _blank
    ---
    Site
    ::::
  :::

*banedStats* est une *application fullstack* dédiée à l’analyse de l’historique d’écoute Deezer pour en extraire des statistiques détaillées.

Ce projet m’a permis d’explorer le traitement de larges fichiers, l'extraction et l'exploitation de ses données, et enfin la restitution de données via une interface intuitive.

Ce projet m’a permis de consolider mes compétences en développement fullstack, en gestion des flux de données, et en conception d’interfaces avec Nuxt.

## Découvrir et tester l'application

Comme tout le monde ne possède pas de compte Deezer, j’ai mis à disposition un compte de démonstration permettant d’accéder à un aperçu de l’interface (encore en développement), après l’envoi et le traitement d’un fichier d’exemple.

```md [Adresse mail]
baned@example.com
```

```md [Mot de passe]
2e2#5W1eMJNik&Fr!3Lz2PPmO7y$K8*a
```
::

::page-section
## Stack technique

  :::flex-list
    ::::pill-item{icon="logos:nuxt-icon" tech=""}
    Nuxt
    ::::

    ::::pill-item{icon="unjs:nitro" tech=""}
    Nitro
    ::::

    ::::pill-item{icon="devicon:supabase" tech=""}
    Supabase
    ::::

    ::::pill-item{icon="devicon:sass" tech=""}
    Scss
    ::::

    ::::pill-item{icon="logos:tailwindcss-icon" tech=""}
    Tailwind
    ::::
  :::

J'ai pu créer l'interface front avec `Nuxt`. Le serveur intégré avec Nuxt : `Nitro` m'a permis de gérer la récupération du fichier d'historique et son traitement pour l'envoyer proprement à la base de données `Supabase`.

`Supabase`, en plus du *stockage et de la restitution des données*, m'a permis de gérer l'*authentification* ainsi que l'affichage en temps réel de l’état d’analyse du fichier d'historique grâce à sa fonctionnalité de `Realtime`.

Concernant le style, j'ai commencé par habitude avec `Scss`. En cours de route j'ai voulu essayer `Tailwindcss`. Je prévois désormais de migrer totalement dessus.
::

::page-section
## Illustrations

  :::project-illustrations-list
  ---
  firstIllustration: /projects/banedstats/home.png
  firstIllustrationAlt: Page d'accueil
  firstIllustrationTitle: Page d'accueil
  secondIllustration: /projects/banedstats/dashboard.png
  secondIllustrationAlt: "Dashboard de l'application avec : statistiques
    générales, stats par albums, artistes, morceaux"
  secondIllustrationTitle: Dashboard
  thirdIllustration: /projects/banedstats/login.png
  thirdIllustrationAlt: Page de connexion
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
