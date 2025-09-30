::page-section
---
logo: /projects/deezerstats/deezerstats.png
logo-alt: Logo de Deezerstats
---
# Deezertstats

:::flex-list
::::pill-item{icon="i-simple-icons-github" link="https://github.com/banedpowell/deezerstats" target="_blank"}
Repo Github
::::

::::pill-item{icon="i-lucide-globe" link="https://deezerstats.baned.me" target="_blank"}
Site  
::::
:::

DeezerStats est une application fullstack dédiée à l’analyse de l’historique d’écoute Deezer pour en extraire des statistiques personnalisées.

Ce projet m’a permis d’explorer le traitement de larges fichiers, l'extraction et le traitement de ses données, et la restitution de données via une interface claire et dynamique.

J’y ai mis en œuvre une architecture robuste, avec authentification sécurisée, stockage et traitement des données via Supabase, et affichage temps réel de l’état d’analyse grâce à Supabase Realtime.

Ce projet m’a permis de consolider mes compétences en développement fullstack, en gestion des flux de données, et en création d’interfaces réactives avec Nuxt.
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
  :::
::

::page-section
## Illustrations

  :::project-illustrations-list
  ---
  firstIllustration: /projects/deezerstats/connexion.png
  firstIllustrationAlt: Screenshot de lécran de connexion
  firstIllustrationTitle: Connexion
  secondIllustration: /projects/deezerstats/dashboard.png
  secondIllustrationAlt: Screenshot du dashboard
  secondIllustrationTitle: Dashboard
  thirdIllustration: /projects/deezerstats/supabase.png
  thirdIllustrationAlt: Screenshot de la db supabase
  thirdIllustrationTitle: Supabase
  ---
  :::
::

::page-section
## Roadmap

  :::u-stepper
  ---
  default-value: 1
  disabled: true
  orientation: vertical
  items:
    - title: Authentification
      description: Interface utilisateur et implémentation de l'authentification avec
        Supabase pour se connecter à l'application
      icon: i-lucide-lock
    - title: Dashboard
      description: Dashboard principal avec les statistiques d'écoute les plus importantes
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
