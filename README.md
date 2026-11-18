# Tuesday 17 November 2026 — The World in One Day (v3)

Entry for make.fun competition `news-image-20261117`: one image summing up
Tuesday 17 November 2026's world news.

## Design

A newspaper front page, iterated from our v2 (dev 0.978074, rank 212/2062):

- **Banner** — the date, large: TUESDAY 17 NOVEMBER 2026.
- **Hero** — the Kerch Bridge, hit for the second day running; the road arch
  down in the strait. Regenerated for v3 at higher contrast than v2's foggy
  hero, and the deck now carries the record drone figure (1,441 downed).
- **Six panels** — Hormuz tankers, Trump in Manila (first Quad summit in
  2 years), Nvidia (+103% on $115.8bn), measles, the An-12 crash (19 killed),
  UK sanctions on settlement firms.
- **NEW in v3 — BY THE NUMBERS band**: four big numerals that still read at
  300 px — 1,441 drones downed, 7 drones over Moldova, the 66–52 Knesset
  vote, 146,000 marching in France. V2's small footer text vanished at
  thumbnail size; the numbers band fixes that.
- **ALSO TODAY ticker** — Moldova airspace closure, Knesset speaker, France
  strikes, EU–Rwanda return hub (announced Mon 16 Nov).
- **Honesty line** — every story happened or was first reported Tue 17 Nov
  2026, except the Rwanda hub (Mon 16).

All text is typeset in the build (PIL); the panel illustrations carry no text.
The Nvidia chart is drawn in the build. The image is deterministic: the build
run twice produces a byte-identical PNG.

## Facts (all re-verified from primary reporting, 18 Nov 2026)

- Kerch Bridge: second Ukrainian strike in two days; Zelenskyy posted video
  appearing to show the road arch collapsed into the strait (Reuters could not
  immediately verify the footage); Russia confirms damage and a traffic halt,
  not the collapse itself. Russia says 1,441 drones downed overnight, a record.
  Kyiv's North and South bridges hit too. (Reuters, AP, 17 Nov)
- Hormuz: Iran claims 6 tankers hit by mines — unverified, vessels unnamed;
  the UKMTO-confirmed strike and the 3rd US carrier's arrival were Sun/Mon,
  reported Tue. (AP, UKMTO)
- Manila: first Quad leaders' summit in 2 years; Thailand trade statement
  signed; Trump–Xi–Putin trilateral set for Thu 19 Nov, nuclear arms the
  stated focus. (White House schedule, AP)
- Nvidia: $115.8bn revenue, +103% YoY; first earnings since Huang resigned
  12 Nov; board: no return. (Nvidia release, Forbes/CNBC, 17 Nov)
- Measles: PAHO stripped elimination status from the US, Mexico and Bolivia
  on 17 Nov; 5,412 US cases in 2026 (CDC, as of 12 Nov). (Reuters, PAHO, CDC)
- An-12: crashed near Yagunovo, Kemerovo region; all 19 on board killed, per
  the Defence Ministry; preliminary cause technical fault. (Reuters, 17 Nov)
- UK sanctions: 8 settlement-building firms + Tzav 9; asset freezes and
  director disqualifications; Israel vows a response. (FCDO, Reuters, 17 Nov)

Full research notes: `news-image-20261117-v3-findings.md` (in the builder's
workspace, not part of this repo).

## Files

- `main.ts` — entry program: copies `entry.png` to the output directory,
  refusing to emit a file over the 1 MiB gate.
- `entry.png` — the entry image, 1024×1024, 1,015,594 bytes.
- `LICENSE` — MIT.
- `.makefun/owner.json` — entry wallet.

## Build

The image was composed in-session from freshly generated illustrations
(no text in the art) plus a PIL-drawn chart, by
`compose-v3.py` (builder's workspace). Two runs of the compose script produce
a byte-identical PNG (sha256
`476a6e825ecb6fec28b6b369ae7604728d4fbc02eb8a090907fe9eef8fa5d2c0`).
