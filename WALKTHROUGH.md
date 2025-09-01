# Walkthrough

This was my process for creating the keyboard i call NWSplit58. It might not be the most efficient or smartest way of doing things, and a version 2 will definately be done at some point in the future.

I have previously used keyboards like Cherry KC 4500, Microsoft Ergonomic Sculpt, Perixx Periboard-335 and latest the Keychron V10 Alice, but all had something missing and i felt i wanted to improve on then by making my own. 

I have the following criteria:

 - [X] Ergonomic - Like all the keyboards listed above i want a split design. Maybe even fully seperated so i can move each side to whereever i want.
 - [X] Orholinear and column-staggered - People praise this grid style quite a lot. It sounds pretty nice so i want to try that.
 - [X] Nordic ISO like layout - I dont want to try and push the extra ISO keys out to different layers.
 - [X] Mechanical and quiet - II want a mechanical keyboard, while not making enemies at the office.
 - [X] Simple look - No exposed MCU or visible PCB

# Shopping List
This is a list of the components i have used with their respective pricing (excluding stuff like solvering irons, mounting screws etc. that you might already have lying around.
| Component    | Price | Link |
| -------- | ------- |
| RP2040 USB-C x2 | $6.8    | https://www.aliexpress.com/item/1005003753933847.html |
| Diodes  1206 1N4148W T4 | $4   | https://www.aliexpress.com/item/4000685043735.html |
| MX Hotswap Sockets    | $11    | https://www.aliexpress.com/item/1005007232040760.html |
| TRRS Connectors    | $5    | https://www.aliexpress.com/item/1005001928651798.html | 
| MCU Sockets Hotswap    | $2.54    | https://www.aliexpress.com/item/1005006673257121.html | 
| TRRS Cable    | $3.45    | https://www.aliexpress.com/item/1005006177816125.html | 
| XDA2 Keys    | $17.25    | https://www.aliexpress.com/item/1005006910173774.html | 
| PCB    | $23.50    | N/A | 
| Plate    | $20.7    | N/A | 
| 3d print    | $10.88    | N/A | 
| Shipping & Tax   | $22.38    | N/A | 
| **Total**   | $149.88    |  | 

**Note:** Keep in mind that most of the materials cover more than 1 keyboard. PCB, and plate are 5 pieces minimum, so enough for 5 keyboards. The 3D print is for two boards, and the differnet small components come in way bigger quantities so the price of two complete keyboards would probably be around $200.


## KLE

The first step was to create something i felt was appropriate in keyboard-layout-editor. Try to grab your normal layout (i chose ISO Nordic) and move around keys, remove the parts you dont use, and see how your keyboard looks. 
Think about what pains you have with your existing keyboard. I didn't like that both my thumbs were competing to use one key - the spacebar. So created two thumb clusters and moved some keys over there. 
This was my left and right alt, since i already use my thumb for those. Enter was also moved to the thumbs as this is used so regularly that my pinky needs a break. Space and backspace (and delete on a layer) was also moved over there because i think it makes sense to have those somewhat close to each other.

This is what i was left with:

<img width="932" height="337" alt="Screenshot From 2025-08-31 16-02-38" src="https://github.com/user-attachments/assets/eb63dce4-5942-42bf-a4b0-56ee0cbd8b3b" />

I did the changes i could perform to my existing keyboard and i really like the layout. The combined ESC and CTRL on the old useless CAPSLOCK key is a gamechanger. I previously used my left palm to hit CTRL which was pretty awkward. 
Now i can tap it to do ESC (nice for vim usage), and hold for CTRL.

## Ergogen

Next step, and probably the most complex and time consuming is Ergogen. This tool can do pretty much everything for you. From defining your layout, to creating PCB's to sketching out your case in 3d.

### Points / Layout

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

**Tip:** Name your thumb cluster `matrix_*` so you can refer to one side as matrix* and the other as mirror*

Which looks like this in ergogen:

<img width="901" height="345" alt="Screenshot From 2025-08-31 19-42-06" src="https://github.com/user-attachments/assets/31e8d43a-07ec-4147-aa04-aac7a2c484a2" />

I am using the `U` measurement as that is the proper MX spacing. 

### Outline 

Then create an outline that will become both your PCB and the starting point of the case:

```yaml
outlines:
  _outline:
    - what: rectangle
      where: true
      size: U+3
    - what: rectangle
      where: /._inner_bottom/
      bound: true
      size: U+3
    - what: rectangle
      where: /._index_bottom/
      bound: true
      size: U
  _janky_piece:
    - what: outline
      name: _outline
    - what: rectangle
      where: /.atrix_thumb_tuck/
      size: [5U, 3U]
      adjust:
        shift: [-30, -10]
    - what: circle
      radius: 350
      where:
        ref: mirror_matrix_thumb_tuck
        shift: [-3.7, -361.2]
      operation: subtract
    - what: circle
      radius: 350
      where:
        ref: matrix_thumb_tuck
        shift: [-3.7, -361.2]
      operation: subtract
    - what: rectangle
      size: [1U, 10U]
      where:
        ref: matrix_outer_bottom
        shift: [-1U-1.6, 0]
      operation: subtract
```

I have created a padding of 3mm to each key and then created a janky piece that fills out the bottom with a nice curve. The resulting outline:

<img width="901" height="345" alt="image" src="https://github.com/user-attachments/assets/bbdfe7d4-e1eb-4a64-bb1c-0bbb8b0a0f5b" />

#### Plate

We need a plate to slot our keys into. This is quite a rabbithole in itself. There are tons of different cuts that people suggest but here we do the most simple. A 14\*14 cutout. 
The way this is done in ergogen is that i ahve created an outline with a 14*14 rectangle, a 0.5 fillet (corners will be rounded with a 0.5mm radius). The fillet is due to the PCB manufacturer that i use cannot create right angle cuts inside the PCB outline. The thickness of a PCB is normally 1.6 which is perfect for a MX plate which should be around 1.5mm. 

```yaml
outlines:
  mx_plate_cutout:
    - what: rectangle
      size: 14
      fillet: 0.5
  plate:
    - what: outline
      name: outline
    - what: outline
      name: mx_plate_cutout
      where: true
      operation: subtract
```
If you have some weird cutout for the MX key you have to make sure that you rotate the cutouts as well if you have rotated your keys.

Then just create a PCB with that outline:
```yaml
  left:
    outlines:
      main:
        outline: outline
```

### PCB

This is probably where you will use most of your time. You will have to move stuff around and spend a bit of time to do adult connect the dots.
#### MCU
I have chosen to use a USB-C version of the Pi Pico RP2040. It was cheap, had USB-C and firmware wise the RP2040 is used quite a lot. One thing that is a bit of a pain is its size. Compared to the Pro Micro this MCU is HUGE! 

This is normally not really a problem since you normally place the MCU off to the side of the keys. But nono, i want a simple look without exposed MCU (or a plate convering it up). So i am mounting it directly behind the keyboard matrix. 
More specifically right behind the middle num, top and home keys. Due to this placement, i have to rotate some keys so that the MX sockets would fit (yep its that tight).

The MCU is mounted right side up, but behind the PCB. This will save a bit of space to not make the keyboard a tall slab.

```yaml
mcu:
 what: pipico
 params:
   mounted: "front" # Mounted front, but on the back to save space
   mountingType: "throughole"
   pinSilkscreen: false
 where:
   ref: mirror_matrix_middle_num
   shift: [0,-15]
```

#### TRRS
I knew nothing about how you would make two keyboards talk to each other. With some research i found that people used either TRRS connectors or USB-C. I went for TRRS as it seemed more simple.

A TRRS connector is basically just 4 points of contacts T(Tip) R(Ring1) R(Ring2) S(Sleeve). 
The way the RP2040 sends information is through the UART TX and RX pins. Connect these two pins to the Ring1 and Ring2 of the TRRS, VCC to the Tip and GND to the Sleeve. 

I have mounted the TRRS connector to the back since we already have to include space for the MCU.

```yaml
trrs:
 what: trrs_pj320a
 params:
   SL: GND #GND Recommended
   R1: GP0 #UART0 TX
   R2: GP1 #UART0 RX 
   TP: 3V3 #3v3 (OUT) Recommended
   side: "B" # Back of PCB
 where:
   ref: mirror_matrix_inner_bottom
   shift: [10, -13]
   rotate: 270
```

#### Finishing the PCB

Last parts of the config are stuff like mounting holes to mount the PCB to a case. Pick some suitable points around the PCB and find a footprint that fits your preference. 

When you have a PCB that is ready you can run the DRC in KiCad. It will tell you that a lot of traces needs to be routed, and hopefully not that many other errors. 
Make sure that your pads and holes are seperated enough. The DRC will tell you if you really messed up. 

Then you just have to run all the traces (this is where the adult connect the dots come in). It will take quite a long time if this is your first time, and you will redo your design a couple of times.
When your rats nets is done you should have a PCB that looks something like this:

<img width="1040" height="695" alt="image" src="https://github.com/user-attachments/assets/cedd928f-06d5-4bd7-b192-718fd3fbe1d8" />

0 unrouted traces and a PCB that is ready for manifacturing. Find your preffered seller (or whoever is cheap with decent reviews), and order a set. 

**Tip:** Order PCBs, plates and 3d print from the same seller like pcbway or jlcpcb. The main cost is in shipping so you can save a few bucks if you order it all together.
