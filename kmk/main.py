# main.py
from kmk.modules.holdtap import HoldTap
from kmk.modules.layers import Layers
from kmk.modules.split import Split, SplitType
from kmk.scanners import DiodeOrientation
from kmk.keys import KC
from kmk.kmk_keyboard import KMKKeyboard
from kmk.extensions.international import International
import board

keyboard = KMKKeyboard()
keyboard.extensions.append(International())

# Homerow mods
holdtap = HoldTap()
holdtap.tap_time = 100  # Tab timeout in ms
keyboard.modules.append(holdtap)
keyboard.modules.append(Layers())

split = Split(
    split_flip=True,  # If both halves are the same, but flipped, set this True
    split_type=SplitType.UART,
    split_target_left=True,  # Left is main
    data_pin=board.GP0,
    data_pin2=board.GP1,
    use_pio=True,
    uart_flip=True)  # Both boards have TX/RX on same pins (GP0/GP1)
keyboard.modules.append(split)

# Left to right (right split - flipped on left)
keyboard.col_pins = (board.GP12, board.GP11, board.GP10, board.GP9, board.GP8, board.GP7, board.GP6)
# Top to bot
keyboard.row_pins = (board.GP20,
                     board.GP19,
                     board.GP18,
                     board.GP17,
                     board.GP16)
keyboard.diode_orientation = DiodeOrientation.COL2ROW

# HoldTab mods
HT_1 = KC.HT(KC.ESCAPE, KC.CTRL)

# fmt:off
keyboard.coord_mapping = [
      1,  2,  3,  4,  5,  6,    41, 40, 39, 38, 37, 36, 35,
      8,  9, 10, 11, 12, 13,    48, 47, 46, 45, 44, 43, 42,
     15, 16, 17, 18, 19, 20,    55, 54, 53, 52, 51, 50, 49,
     22, 23, 24, 25, 26, 27,    62, 61, 60, 59, 58, 57, 56,
                 32, 33, 34,    69, 68, 67,
]
# fmt:on
keyboard.keymap = [
    # Base Layer
    #   GP11        GP10       GP9       GP8          GP7         GP6        GP6         GP7         GP8         GP9         GP10        GP11            GP12
    [
        KC.GRAVE,   KC.N1,     KC.N2,   KC.N3,       KC.N4,      KC.N5,     KC.N6,      KC.N7,      KC.N8,      KC.N9,      KC.N0,      KC.MINUS,       KC.EQUAL,
        KC.TAB,	    KC.Q,      KC.W,    KC.E,        KC.R,       KC.T,      KC.Y,       KC.U,       KC.I,       KC.O,       KC.P,       KC.LBRACKET,    KC.RBRACKET,
        HT_1,       KC.A,      KC.S,	KC.D,        KC.F,       KC.G,      KC.H,       KC.J,       KC.K,       KC.L,       KC.SCOLON,	KC.QUOTE,       KC.NUHS,
        KC.LSHIFT,  KC.NUBS,   KC.Z,	KC.X,	     KC.C,	     KC.V,	    KC.B,       KC.N,	    KC.M,	    KC.COMMA,   KC.DOT,	    KC.SLASH,	    KC.RGUI,
                                        KC.LALT,     KC.SPACE,   KC.MO(1),  KC.ENTER,	KC.BSPACE,  KC.RALT
    ],

    # M1 Layer
    #   GP11        GP10    GP9     GP8         GP7         GP6      |  GP6         GP7         GP8         GP9         GP10        GP11            GP12
    [
        KC.NO,      KC.F1,  KC.F2,  KC.F3,      KC.F4,      KC.F5,      KC.F6,      KC.F7,      KC.F8,	    KC.F9,	    KC.F10, 	KC.F11,		    KC.F12,
        KC.NO,	    KC.NO,  KC.NO,	KC.NO,	    KC.NO,	    KC.NO, 	    KC.NO,	    KC.NO,      KC.NO,      KC.NO,	    KC.NO,	    KC.NO,	        KC.NO,
        KC.NO,	    KC.NO,  KC.NO,	KC.NO,      KC.NO,  	KC.NO,      KC.LEFT,	KC.DOWN,    KC.UP,  	KC.RIGHT,   KC.NO,	    KC.NO,	        KC.NO,
        KC.NO,	    KC.NO,  KC.NO,	KC.NO,	    KC.NO,      KC.NO,      KC.NO,   	KC.NO,      KC.NO,	    KC.NO,      KC.NO,      KC.NO,	        KC.NO,
                                    KC.NO,      KC.NO,      KC.NO,      KC.NO,	    KC.DELETE,  KC.NO, 
    ]
]

if __name__ == '__main__':
    keyboard.go()
