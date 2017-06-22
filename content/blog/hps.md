---
author: Matthias Jordan
date: 2017-03-08T17:25:36-08:00
description: "Using HugoPhotoSwipe to build PhotoSwipe galleries in a painless way"
slug: ""
tags: ["hugo","photoswipe", "hps", "HugoPhotoSwipe", "photography", "image gallery", "gallery"]
title: "Hugo Photoswipe"
type: article
---

[PhotoSwipe](http://photoswipe.com) is one of the best JS image gallery libraries available at the moment. It's responsive, has full touch support, and is a joy to interact with as a user. The one downside is the need to define the size (w/h) for every image - a tedious task for a large gallery of images.

That's where [HugoPhotoSwipe](https://github.com/GjjvdBurg/HugoPhotoSwipe) comes into the picture. HugoPhotoSwipe, or HPS for short, is a Python command line tool for generating Photoswipe galleries that will play nicely with [Hugo](https://gohugo.io). I recomend checking out the [wiki in the repo](https://github.com/GjjvdBurg/HugoPhotoSwipe/wiki) for the full documentation - the author, [Gertjan van den Burg](https://gertjanvandenburg.com), created a very useful shortcode and documents the layout/content structure for HPS.

I tweaked my implementation a bit.

#### The Shortcode
```
<figure class="grid-item {{ .Page.Params.filter }}" itemprop="associatedMedia" itemscope
itemtype="https://schema.org/ImageObject">
  <a href="{{ .Get "href"}}" itemprop="contentUrl" data-size="{{ .Get "largeDim"}}" data-medium-url="{{ .Get "thumbUrl" }}.svg" data-medium-size="{{ .Get "thumbSize" }}">
    <img alt="{{ .Get "alt"}}" data-size="{{ .Get "thumbSize"}}" itemprop="thumbnail" src="{{ .Get "thumbUrl"}}.jpg" data-src="{{ .Get "thumbUrl"}}.svg">
  </a>
</figure>
```

I removed all references to the `small` image size, and replaced the small/thumbnail versions with the processed images from [Primitive](/blog/primitive/). I then use a gulp task to remove the old small/thumbnail folders before upload.

HugoPhotoSwipe is a great tool, with a great author. Gertjan was very quick to respond to [support requests](https://github.com/GjjvdBurg/HugoPhotoSwipe/issues/1), [bugs](https://github.com/GjjvdBurg/HugoPhotoSwipe/issues/2), and [feature requests](https://github.com/GjjvdBurg/HugoPhotoSwipe/issues/3).
