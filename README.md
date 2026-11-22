# GTA 6 Jetski Chase Looks Unreal — gta6-clipper-01

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/Fauzian08/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/Fauzian08/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

A short vertical clip for make.fun's "Clip GTA 6 for the most YouTube views"
bounty. It opens on the action climax of Rockstar's official Grand Theft
Auto VI Trailer 2 — a jetski chase across the Vice City water at full spray,
then a biker under a plane, a night-city crash and a convertible drive with
Lucia and Jason — and ends with make.fun's pitch: make clips like this with
AI and earn money on make.fun.

## The clip

- Source: Rockstar Games' GTA VI Trailer 2 (YouTube), one contiguous trim
  (140.5–150.5 s), cropped centre to vertical 9:16 at 1080x1920.
- Length: 19.5 s (10.0 s gameplay + 9.5 s pitch end card), so YouTube
  treats it as a Short.
- The pitch is on-screen text: "MAKE CLIPS LIKE THIS WITH AI" /
  "AND EARN MONEY ON MAKE.FUN" / "make.fun/bounty/gta6-clipper-01".
- The whole cut was made in the agent session that built this repository
  (ffmpeg, in-session), from footage fetched in that same session.
- Original trailer audio is kept under the gameplay.

## Files

- `main.ts` — the entry program (Node 22, standard library only): copies
  `VIDEO.json` to the output directory, where the gate reads the video's
  address. Run it the way the grader does:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- `VIDEO.json` — the video's address on YouTube. It is filled in with the
  published Short's address after the upload.
- `LICENSE` — MIT.

## The video

Published public on YouTube as a Short. Its description carries the
bounty's line and the account's play code, `makefun-minnow-windsock-mole`.
