---
author: Matthias Jordan
date: 2017-03-04T22:07:18-08:00
description: "A photography portfolio, geometric primitives, and a bash script."
slug: ""
tags: ["Primitive", "golang", "go", "geometric primitives", "codepen"]
title: "Primitive"
type: article
---
[Primitive](https://github.com/fogleman/primitive) is pretty cool. It's popped up on Reddit a few times, and I like the painterly effect it can give images. Primitive is used for "reproducing images with geometric primitives". While rebuilding my site, I decided that the photography gallery needed something different. The thumbnails needed some character to them, and Primitive fit the bill.

This post, [Animating SVG polygons](https://codepen.io/nsayenko/post/animating-svg-polygons-tutorial), on Codepen is what got me started after kicking the idea around for a bit.

![Example: A portrait of a Buddhist student - Processed with Primitive](/assets/coverimage_people.jpg#floatright-md)

I started by running `primitive -i ./coverimage.jpg -o ./coverimage.jpg.jpg -n 1500 -m 1 -s 2048`. The `-n 1500` specifies 1500 polygons, `-m 1` is for the triangles, and `-s 2048` is the output image size.

This works, but it would take forever to run the `primitive` for each image. Much nicer to automate these things.

`cd` into the directory you want to process, and run this script:

```
#!/bin/bash

# use primitive on all images in a directory
arr=(*)
arraylength=${#arr[@]}
workend=$(($arraylength))
for ((i=0; i<$workend; i++)); do
    echo "saving ${arr[$i]}"
    primitive -i ./${arr[$i]} -o ./${arr[$i]}.jpg -n 1500 -m 1 -s 2048
done
```

And there you go. A folder of however many primitive images you want.
