---
author: Matthias Jordan
date: 2017-02-28T21:47:53-08:00
description: "I did something dumb with Git and had to start over. But it's okay, things worked out better in the end."
slug: ""
tags: ["aws", "firebase", "gcs", "google cloud services", "hugo"]
title: "The Rebuild, Part 2:  The Gittining"
type: article
---

Last time I posted I was pretty excited. I had configured a pretty sweet AWS setup that I was pushing to with Gulp, and my site was starting to look pretty cool. And then I did... something? I'm not sure what. But I lost some data on git due to a series of bad merges, and lost the local files when the external drive they were on decided to die.

So I started over.

Again.

But it worked out for the best - during the first part of my site rebuild I learned a lot about Hugo - but I also did a lot of things inefficiently. None of it was a deal breaker, but it could be improved. My new folder hierarchy is a lot more organized, and I simplified the number of partials.

This is what is recommended on the Hugo docs, and what formed the basis of the first round of the rebuild:
```
.
├── config.toml
├── archetypes
|   └── default.md
├── content
|   ├── post
|   |   ├── firstpost.md
|   |   └── secondpost.md
|   └── quote
|   |   ├── first.md
|   |   └── second.md
├── data
├── i18n
├── layouts
|   ├── _default
|   |   ├── single.html
|   |   └── list.html
|   ├── partials
|   |   ├── header.html
|   |   └── footer.html
|   ├── taxonomies
|   |   ├── category.html
|   |   ├── post.html
|   |   ├── quote.html
|   |   └── tag.html
|   ├── post
|   |   ├── li.html
|   |   ├── single.html
|   |   └── summary.html
|   ├── quote
|   |   ├── li.html
|   |   ├── single.html
|   |   └── summary.html
|   ├── shortcodes
|   |   ├── img.html
|   |   ├── vimeo.html
|   |   └── youtube.html
|   ├── index.html
|   └── sitemap.xml
├── themes
|   ├── hyde
|   └── doc
└── static
    ├── css
    └── js
```
And here is what I have now:
```
.
├── content
│   ├── blog
│   └── gal
│   └── tags
└── themes
    └── iammatthias_v2
        ├── archetypes
        ├── data
        │   ├── assets
        │   ├── css
        │   └── js
        ├── layouts
        │   ├── \_default
        │   ├── about
        │   ├── blog
        │   ├── gal
        │   ├── partials
        │   └── shortcodes
        ├── src
        │   ├── assets
        │   │   └── photos
        │   ├── css
        │   └── js
        └── static
            ├── assets
            │   └── photos
            ├── css
            └── js
```
A lot of the folders, like `Archetype`, `data`, `layouts`, and `static` seemed a bit redundant to me - I don't really need defaults, it's all defined in my theme. So I removed them, and pointed to the folders in my theme in my `config.yaml`.

```
archetypeDir:               "themes/iammatthias_v2/archetypes"
dataDir:                    "themes/iammatthias_v2/data"
layoutDir:                  "themes/iammatthias_v2/layouts"
staticDir:                  "themes/iammatthias_v2/static"
```
Nice.

Now what about deployment? I was pretty excited about getting everything set up on AWS. It's a fantastic service. But this is a simple, static site. Did I need the complexity that is AWS for something so simple? Nope. The deployment/hosting option I settled on is still a bit overkill. I moved to [Firebase](https://firebase.google.com). I received an email offering me $300 towards [Google Cloud Platform](https://cloud.google.com/storage/docs/cloud-console), which piqued my interest enough to get me to look into the services they offer. It's pretty great, the CLI is straightforward, and the documentation does a decent job of approaching plain english - which makes it easy to pick up the process.

After playing with GCP for a bit, I ended up on the [Firebase](https://firebase.google.com) page, and was pretty intrigued. Super simple hosting with free SSL for custom domains? Sign me up.

Now I run `publish` which is set in my .zshrc as an alias for `gulp build && hugo && firebase deploy && rm -rf public`. The deploy itself is pretty slow - longest I've seen so far is 18 minutes. But that improves over time - there's been an [open ticket on Github](https://github.com/firebase/firebase-tools/issues/133) that's received a few updates over the last year.

So that's where I am. A design I'm happy with, an organized code base, and an easy-to-configure deployment setup.
