# Cardinal direction rotation

Really strange. The bearing that I think of (same bearing as you traverse a latitude) is not the case with the code I've been using. Instead, Rhumb bearing (learned about for the first time) is what I imagined.

Yet, the code I was using before for rotating points doesn't work with the Rhumb bearing. A black box (for today) unfortunately.

Anyways, Rhumb bearing gives the correct values for calculating bearing between two points. I still don't understand how great circle bearing returns different bearing values as you traverse a latitude.

# TODO Chatgpt nonsense

104 rotation:
- yaw -80.99
- pitch -56
- roll 114.77

-104 rotation:
- yaw -80.99
- pitch 56
- roll -114.77
