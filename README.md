# Scroll Stuff

## Scroll indicator

`/src/progress.ts`

Tracks the reading progress of an article, blogpost, or whatever else — 
any HTML element really — by displaying a progress bar at the top of
the screen.

Also, calls a function when the start, and the end have been reached, 
so that can be used for whatever purpose.

## Nav shrinker

`/src/nav-shrinker.ts`

Tracks the scrolling direction. Makes the navbar small and translucent when
user is scrolling down, to get out of the way, and makes it big and
opaque when the user is scrolling up, so that they don't have to scroll
all the way.
