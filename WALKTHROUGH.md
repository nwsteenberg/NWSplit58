# Walkthrough

This was my process for creating the keyboard i call NWSplit58. It might not be the most efficient or smartest way of doing things, and a version 2 will definately be done at some point in the future.

I have previously used keyboards like Cherry KC 4500, Microsoft Ergonomic Sculpt, Perixx Periboard-335 and latest the Keychron V10 Alice, but all had something missing and i felt i wanted to improve on then by making my own. 

I have the following criteria:

 - [X] Ergonomic - Like all the keyboards listed above i want a split design. Maybe even fully seperated so i can move each side to whereever i want.
 - [ ] Orholinear and column-staggered - People praise this grid style quite a lot. It sounds pretty nice so i want to try that.
 - [X] Nordic ISO like layout - I dont want to try and push the extra ISO keys out to different layers.
 - [X] Mechanical and quiet - II want a mechanical keyboard, while not making enemies at the office.
 - [X] Simple look - No exposed MCU or visible PCB 

## KLE

The first step was to create something i felt was appropriate in keyboard-layout-editor. Try to grab your normal layout (i chose ISO Nordic) and move around keys, remove the parts you dont use, and see how your keyboard looks. 
Think about what pains you have with your existing keyboard. I didn't like that both my thumbs were competing to use one key - the spacebar. So created two thumb clusters and moved some keys over there. 
This was my left and right alt, since i already use my thumb for those. Enter was also moved to the thumbs as this is used so regularly that my pinky needs a break. Space and backspace (and delete on a layer) was also moved over there because i think it makes sense to have those somewhat close to each other.

This is what i was left with:

<img width="932" height="337" alt="Screenshot From 2025-08-31 16-02-38" src="https://github.com/user-attachments/assets/eb63dce4-5942-42bf-a4b0-56ee0cbd8b3b" />

I did the changes i could perform to my existing keyboard and i really like the layout. The combined ESC and CTRL on the old useless CAPSLOCK key is a gamechanger. I previously used my left palm to hit CTRL which was pretty awkward. 
Now i can tap it to do ESC (nice for vim usage), and hold for CTRL.

##  Ergogen

Next step, and probably the most complex and time consuming is Ergogen. This tool can do pretty much everything for you. From defining your layout, to creating PCB's to sketching out your case in 3d.

I started with one of the predefined layouts and added columns, rows and a thumb cluster. Also i tweaked the stagger of each column a bit.

The first layout and matrix ended up looking something like this:
```yaml
points:
  zones:
    matrix:
      columns:
        reachy.key.mirror.skip: false
        reachy.key.skip: true
        outer.key.stagger: 0.10U
        pinky.key.stagger: 0.20U
        ring.key.stagger: 0.5U
        middle.key.stagger: 0.25U
        index.key.stagger: -0.25U
        inner.key.stagger: -0.15U
      rows:
        bottom.padding: U
        home.padding: U
        top.padding: U
        num.padding: U
    thumb:
      anchor:
        ref: matrix_index_bottom
        shift: [-0.5U, -1.1U]
        rotate: -10
      columns:
        tuck:
          key.name: matrix_thumb_tuck
        center:
          key.spread: U
          key.splay: -5
          key.origin: [-0.5U, -1U]
          key.name: matrix_thumb_center
        reach:
          key.spread: U
          key.splay: -5
          key.origin: [-0.5U, -1U]
          key.name: matrix_thumb_reach
      rows:
        only:
  mirror:
    ref: matrix_pinky_home
    distance: 250
```

Th
