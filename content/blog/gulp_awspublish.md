---
author: Matthias Jordan
date: 2017-01-02T21:47:53-08:00
description: "I used to publish my site with a Netlify/Gihub combination. Now I'm using Gulp to pipe my production files to AWS S3."
slug: ""
tags: ["hugo", "gulp", "aws"]
title: "Setting up gulp awspublish"
type: article
---

### How am I going to deploy this?
Even after a lot of optimizing, my site still have a pretty heavy footprint. There's a lot of pictures. But I don't want to keep my pictures on a public Github repo, which is why I'm not using a build tool like Travic CI, Circle, CI, etc.

There are a lot of options for deploying to S3 using Gulp. There's [Gulp S3](https://github.com/nkostelnik/gulp-s3), [Gulp S3 Upload](https://github.com/nkostelnik/gulp-s3), & [Gulp AWSPublish](https://github.com/pgherveou/gulp-awspublish). I chose AWSPublish because it seemed like the best maintained option, and there are a lot of blog posts like this one that detail how people set it up for themselves.

#### The Gulp

```
var awspublish = require('gulp-awspublish');
// Publish to AWS S3
gulp.task('publish', function() {
  var publisher = awspublish.create({
    region: 'REGION',
    params: {
      Bucket: 'YOURDOMAINHERE.com'
    }
  });
  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };
  return gulp.src('./public/**')
    .pipe(awspublish.gzip())
    .pipe(parallelize(publisher.publish(headers), 250))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter({
      states: ['create', 'update', 'delete'] }));
});
```

Assuming you want to use AWSPublish, that you already have it installed, and that you configured your AWS Credentials, copy that chunk of code and add it to your Gulp file. Make sure you change out **REGION** and **YOURDOMAINHERE.com** with your AWS region and bucket name. Run whatever build tools you need to run for your static site, and point **./public/**** in **return gulp.src('./public/')** to where you output your built site. Then it's a simple **gulp publish** to send everything to your bucket.

My site is built using [Hugo](https://gohugo.io), so I need to run the **build** stage of my Gulp file and the **hugo** command in order to have an up-to-date **./public** folder to upload. I strung the commands together as an alias in my **.zshrc** file like so:
```
alias publish="gulp build && hugo && gulp publish && rm -rf public"
```
Now I can run **publish** to bulk, deploy, and clean up.
