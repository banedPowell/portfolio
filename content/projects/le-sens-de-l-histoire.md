---
position: 1
card:
  title: Le sens de l'Histoire
  description: Un site éditorial accueillant des articles variés mêlant histoire, culture, société, féminisme ou encore tourisme.
  projectIcon: /projects/lesensdelhistoire/logo.png
  iconAlt: Icone de lesensdelhistoire.org
seo:
  locale: fr-FR
  url: https://baned.me/projects/lesensdelhistoire
  image: /seo.png
  title: banedPowell ⋅ Le sens de l'Histoire
  description: Découvrez « Le sens de l’Histoire », un site éditorial dédié à
    l’analyse historique, socioculturelle et politique à travers des articles
    engagés et complets.
title: banedPowell ⋅ Le sens de l'Histoire
description: Découvrez « Le sens de l’Histoire », un site éditorial dédié à
  l’analyse historique, socioculturelle et politique à travers des articles
  engagés et complets.
---

::page-section
---
logo: /projects/LeSensDeLHistoire/logo.png
logo-alt: Logo de Deezerstats
---
# Le sens de l'Histoire

  :::flex-list
    ::::pill-item
    ---
    icon: i-lucide-globe
    link: https://lesensdelhistoire.org
    target: _blank
    ---
    Site
    ::::
  :::

J’ai réalisé le blog d’un historien, *Le sens de l’Histoire*, un site éditorial accueillant des articles variés mêlant histoire, culture, société, féminisme ou encore tourisme.

Après un premier échange pour définir les **besoins** et l’**esthétique souhaitée**, j’ai proposé une maquette que nous avons affinée ensemble, puis développé le site final. J’ai assuré une courte **période de maintenance** après la mise en ligne et **accompagné le client** dans l’utilisation des outils de publication et de **suivi des statistiques**.

Le site offre une **navigation claire** entre les **catégories** et les articles, un **moteur de recherche** interne et un espace de lecture sobre et accessible. Il intègre également **un système de statistiques permettant d’analyser l’audience** (consultations, provenance des visiteurs, etc.). L’objectif était de créer une expérience de lecture sobre, lisible et accessible.
::

::page-section
## Stack technique

  :::flex-list
    ::::pill-item{tech icon="logos:nuxt-icon"}
    Nuxt 4
    ::::
  
    ::::pill-item{tech icon="logos:nuxt-icon"}
    Nuxt UI
    ::::
  
    ::::pill-item{tech icon="logos:nuxt-icon"}
    Nuxt content
    ::::
  
    ::::pill-item{tech icon="logos:nuxt-icon"}
    Nuxt Content
    ::::
  
    ::::pill-item{tech icon="logos:tailwindcss-icon"}
    Tailwind
    ::::
  
    ::::pill-item{tech icon="simple-icons:posthog"}
    Posthog
    ::::
  :::

Le site est construit avec `Nuxt 4`, utilisant notamment les modules `Nuxt Content` et `Nuxt UI` pour gérer le contenu éditorial et l’interface.

Pour maximiser la visibilité naturelle, j’ai mis en place un balisage sémantique conforme à `Schema.org`, ce qui aide les moteurs de recherche à comprendre précisément la structure des articles. Ce type de données peut contribuer à l’affichage de « **rich snippets** » dans les résultats de recherche, **augmentant le taux de clic**.

Enfin, pour fournir au client une vision claire de l’audience et du comportement des visiteurs, j’ai intégré `PostHog`, afin de **suivre les pages vues**, les sessions, les chemins de navigation, le taux de rebond et d’autres données d’usage importantes, ce qui permet d’adapter le contenu et d’optimiser l’expérience utilisateur.
::