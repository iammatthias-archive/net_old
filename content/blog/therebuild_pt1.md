---
author: Matthias Jordan
date: 2016-12-11T21:47:53-08:00
description: "I rebuilt my site using Hugo, implemented Gulp as a build tool, and learned a lot in the process."
slug: ""
tags: ["hugo", "harp", "gulp", "aws"]
title: "The Rebuild, Part 1"
type: article
---

### I rebuilt my site. Again.

 Around this time last year I finished rebuilding it as well. HarpJS was the static site generator of choice for a long time, but I recently made the jump to Hugo. That meant relearning, and redesigning some aspects of my site. It also took a lot longer than I thought. But here are some of the cool things that developed along the way.

#### Hugo

Hugo is great. It's built in Go, and it's super fast. The folder hierarchy was a bit confusing a first, but I wrapped my head around the way content is divorced from the markdown. Hugo also packages in a "live reload" function, which was super helpful while building this site. I started with my own "theme" so that future updates will be plug+play with an updated theme. We'll see how that goes when the time comes.

#### Gulp

I always shied away from task runners like Grunt and Gulp. Part of it was that HarpJS handled the preprocessing for me, and part of it was that I didn't want to learn *yet another tool*. But it was a necessary evil if I wanted to use Hugo with preprocessors like Sass. Turns out, it's not such an evil. The way it pipes assets is intuitive, and it speeds up a lot of the build process.

#### AWS

My first website, a horrible Lightroom 2 generated Flash site, was hosted on a horrible shared hosting plan through GoDaddy. I stayed with them for longer than I should, then Digital Ocean caught my eye. They were great, I used them for my first hand-coded site, then a much nicer site built on Ghost. Then I had a brief affair with Github Pages, Surge.Sh, and Netlify. All good. But my site has a lot of images, and I did not feel right abusing those fantastic free platforms with all my stuff. So I decided to put on my big boy boots and dive into AWS. The end goal is a set up where I can push the [entire root directory to one bucket, build through Lambda, then output to a static site bucket](http://bezdelev.com/post/hugo-aws-lambda-static-website/). But I'm having issues with Lambda, so I settled for using Gulp to pipe the build directory to the static bucket. But that will be the first thing I tackle as an ~~update~~ upgrade for my site.
