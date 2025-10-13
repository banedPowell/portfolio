---
seo:
  locale: fr-FR
  url: https://baned.me/projects/deezerstats
  image: /seo.png
  title: banedPowell ⋅ Deezerstats
  description: "Découvrez mon projet Deezerstats : une application d'analyse de
    votre compte Deezer pour en extraire des statistiques détaillées."
description: "Découvrez mon projet Deezerstats : une application d'analyse de
  votre compte Deezer pour en extraire des statistiques détaillées."
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

DeezerStats est une *application fullstack* dédiée à l’analyse de l’historique d’écoute Deezer pour en extraire des statistiques détaillées.

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
    ::::pill-item{tech icon="logos:nuxt-icon"}
    Nuxt
    ::::
  
    ::::pill-item{tech icon="unjs:nitro"}
    Nitro
    ::::
  
    ::::pill-item{tech icon="devicon:supabase"}
    Supabase
    ::::
  
    ::::pill-item{tech icon="devicon:sass"}
    Scss
    ::::
  
    ::::pill-item{tech icon="logos:tailwindcss-icon"}
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
## Me retrouver

  :::grid-list
    ::::pill-item
    ---
    icon: i-simple-icons-bento
    link: https://bento.me/banedpowell/
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
  
    ::::pill-item
    ---
    icon: ri:linkedin-fill
    link: https://www.linkedin.com/in/rub%C3%A9ndc/
    target: _blank
    ---
    Linkedin
    ::::
  :::
::
