// Builds the drawings of the talk from one list of shapes each:
// an Excalidraw file (to edit by hand) and an SVG with the same sketched line.
// Usage: node make_drawings.js <output folder>
const rough = require("roughjs");
const fs = require("fs");
const path = require("path");

const out = process.argv[2];
const ink = "#1A1714", accent = "#901C6C", paper = "#F6F1E7", grey = "#B9B2A6";

const rect = (x, y, w, h, o = {}) => ({ t: "rect", x, y, w, h, ...o });
const ell = (cx, cy, w, h, o = {}) => ({ t: "ellipse", cx, cy, w, h, ...o });
const line = (points, o = {}) => ({ t: "line", points, ...o });
const text = (x, y, s, o = {}) => ({ t: "text", x, y, s, ...o });

// Drawing 1: the embedded desk -------------------------------------------
const embedded = [];
embedded.push(rect(30, 190, 470, 390, { sw: 3 }));
embedded.push(text(30, 150, "the group: 15 desks", { size: 30, bold: true }));
const cols = [60, 172, 284, 396], rows = [225, 312, 399, 486];
let k = 0;
for (const y of rows) for (const x of cols) {
  k += 1;
  if (k === 16) continue;
  if (k === 7) {
    embedded.push(rect(x, y, 76, 48, { fill: accent, fillStyle: "solid", stroke: accent }));
    embedded.push(text(x + 38, y + 10, "me", { size: 26, color: paper, anchor: "middle", bold: true }));
  } else {
    embedded.push(rect(x, y, 76, 48, { fill: grey, fillStyle: "hachure" }));
  }
}
// the central unit, far away
embedded.push(rect(610, 40, 160, 120, { sw: 3 }));
embedded.push(line([[595, 40], [690, 5], [785, 40]], { sw: 3 }));
for (const wx of [632, 676, 720]) embedded.push(rect(wx, 70, 26, 30));
embedded.push(text(690, 170, "central unit", { size: 30, bold: true, anchor: "middle" }));
embedded.push(line([[690, 215], [680, 300], [610, 360], [505, 385]], { curve: true, dash: true, sw: 3, stroke: grey }));
embedded.push(text(575, 405, "many groups,", { size: 32, bold: true }));
embedded.push(text(575, 443, "one long line", { size: 32, bold: true }));

// Drawing 2: the folder, its tasks and its history ------------------------
const folder = [];
folder.push(line([[60, 110], [60, 70], [220, 70], [250, 110]], { sw: 3 }));
folder.push(rect(60, 110, 470, 270, { sw: 3 }));
folder.push(text(85, 130, "manuscript/", { size: 36, bold: true }));
folder.push(text(85, 180, "one output, one folder", { size: 24, color: "#4A453E" }));
const cards = [[330, 215, -0.07], [500, 150, 0.06], [560, 285, -0.04]];
for (const [x, y, a] of cards) {
  folder.push(rect(x, y, 170, 100, { fill: paper, fillStyle: "solid", angle: a, sw: 2.5 }));
  folder.push(text(x + 85, y + 34, "issue", { size: 30, anchor: "middle", angle: a }));
  folder.push(ell(x + 85, y + 6, 20, 20, { fill: accent, fillStyle: "solid", stroke: accent }));
}
// the history below the folder
folder.push(text(60, 420, "its history", { size: 24, color: "#4A453E" }));
folder.push(line([[60, 520], [760, 520]], { sw: 3 }));
for (const cx of [120, 250, 380, 640]) folder.push(ell(cx, 520, 30, 30, { fill: paper, fillStyle: "solid", sw: 3 }));
folder.push(ell(510, 520, 40, 40, { fill: accent, fillStyle: "solid", stroke: accent, sw: 3 }));
folder.push(text(510, 550, "change", { size: 30, bold: true, color: accent, anchor: "middle" }));
// the prompt, kept with the change it led to
folder.push(rect(420, 410, 150, 62, { fill: paper, fillStyle: "solid", stroke: accent, angle: -0.05, sw: 2.5 }));
folder.push(text(495, 424, "prompt", { size: 30, color: accent, anchor: "middle", angle: -0.05 }));
folder.push(line([[500, 474], [508, 498]], { stroke: accent, sw: 2.5 }));

// Drawing 3: the learner who hears "just" (slide 5) -----------------------
const learner = [];
learner.push(rect(40, 40, 340, 90, { stroke: accent, sw: 3 }));
learner.push(text(210, 64, "just click here", { size: 36, bold: true, color: accent, anchor: "middle" }));
learner.push(line([[290, 130], [345, 185], [330, 130]], { stroke: accent, sw: 3 }));
learner.push(line([[230, 480], [770, 480]], { sw: 3 }));
learner.push(rect(325, 350, 160, 110, { sw: 3 }));
learner.push(rect(305, 460, 200, 18, { fill: grey, fillStyle: "hachure" }));
learner.push(text(405, 388, "error", { size: 26, color: accent, anchor: "middle" }));
learner.push(ell(610, 300, 86, 86, { sw: 3 }));
learner.push(ell(594, 292, 6, 6, { fill: ink, fillStyle: "solid" }));
learner.push(ell(622, 292, 6, 6, { fill: ink, fillStyle: "solid" }));
learner.push(line([[592, 322], [608, 312], [626, 322]], { curve: true, sw: 2.5 }));
learner.push(line([[612, 344], [622, 400], [640, 480]], { curve: true, sw: 3 }));
learner.push(line([[614, 372], [560, 430], [505, 452]], { curve: true, sw: 3 }));
learner.push(ell(655, 235, 14, 14));
learner.push(ell(672, 208, 22, 22));
learner.push(ell(690, 120, 200, 120, { sw: 3 }));
learner.push(text(690, 100, "it is me", { size: 34, bold: true, anchor: "middle" }));

// Drawing 4: one error message, two mental models (slide 6) ---------------
const blindspot = [];
blindspot.push(rect(290, 30, 220, 64, { stroke: accent, sw: 3 }));
blindspot.push(text(400, 46, "error message", { size: 28, color: accent, anchor: "middle", bold: true }));
blindspot.push(line([[330, 100], [250, 185]], { dash: true, sw: 3, stroke: grey }));
blindspot.push(line([[470, 100], [550, 185]], { dash: true, sw: 3, stroke: grey }));
blindspot.push(ell(200, 330, 280, 280, { sw: 3 }));
blindspot.push(ell(600, 330, 280, 280, { sw: 3 }));
const net = [[140, 280], [215, 250], [270, 310], [240, 390], [160, 380], [200, 320]];
for (const [a, b] of [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [5, 0], [5, 1], [5, 2], [5, 3], [5, 4]])
  blindspot.push(line([net[a], net[b]], { sw: 2 }));
for (const [x, y] of net) blindspot.push(ell(x, y, 22, 22, { fill: paper, fillStyle: "solid", sw: 2.5 }));
for (const [x, y] of [[545, 275], [640, 255], [600, 395]]) blindspot.push(ell(x, y, 22, 22, { fill: paper, fillStyle: "solid", sw: 2.5 }));
blindspot.push(text(600, 290, "?", { size: 64, bold: true, color: accent, anchor: "middle" }));
blindspot.push(text(200, 490, "expert", { size: 32, bold: true, anchor: "middle" }));
blindspot.push(text(200, 530, "a normal step", { size: 24, color: "#4A453E", anchor: "middle" }));
blindspot.push(text(600, 490, "novice", { size: 32, bold: true, anchor: "middle" }));
blindspot.push(text(600, 530, "I did something wrong", { size: 24, color: "#4A453E", anchor: "middle" }));

// Drawing 5: two groups expected, one found (slide 7). A sketch, no data --
const humps = [];
humps.push(text(205, 110, "believed", { size: 32, bold: true, anchor: "middle", color: "#4A453E" }));
humps.push(text(205, 150, "two groups", { size: 24, color: "#4A453E", anchor: "middle" }));
humps.push(line([[40, 440], [370, 440]], { sw: 3, stroke: grey }));
humps.push(line([[50, 436], [90, 415], [125, 300], [150, 250], [178, 300], [205, 385], [232, 300], [260, 250], [285, 300], [320, 415], [360, 436]], { curve: true, dash: true, sw: 3.5, stroke: "#4A453E" }));
humps.push(text(595, 110, "found", { size: 32, bold: true, anchor: "middle", color: accent }));
humps.push(text(595, 150, "one group, in 94 of 100 classes", { size: 24, color: accent, anchor: "middle" }));
humps.push(line([[430, 440], [760, 440]], { sw: 3 }));
humps.push(line([[440, 436], [495, 412], [545, 310], [595, 215], [645, 310], [695, 412], [750, 436]], { curve: true, sw: 4, stroke: accent }));
humps.push(text(40, 470, "low grades", { size: 22, color: "#4A453E" }));
humps.push(text(370, 470, "high", { size: 22, color: "#4A453E", anchor: "end" }));
humps.push(text(430, 470, "low grades", { size: 22, color: "#4A453E" }));
humps.push(text(760, 470, "high", { size: 22, color: "#4A453E", anchor: "end" }));

// Drawing 6: the feedback loop (slide 21) ---------------------------------
const loop = [];
const stations = [[290, 40, 220, 80, ["Teach"]], [540, 250, 230, 100, ["Collect", "on post-its"]],
  [290, 480, 220, 80, ["Turn into data"]], [30, 250, 230, 100, ["Change", "the material"]]];
for (const [x, y, w, h, lines] of stations) {
  loop.push(rect(x, y, w, h, { sw: 3 }));
  lines.forEach((l, i) => loop.push(text(x + w / 2, y + h / 2 - lines.length * 17 + i * 36, l, { size: 28, bold: true, anchor: "middle" })));
}
loop.push(line([[520, 80], [615, 120], [655, 238]], { curve: true, sw: 3, stroke: accent }));
loop.push(line([[639, 220], [655, 240], [673, 222]], { sw: 3, stroke: accent }));
loop.push(line([[655, 360], [615, 465], [522, 520]], { curve: true, sw: 3, stroke: accent }));
loop.push(line([[542, 502], [520, 521], [545, 536]], { sw: 3, stroke: accent }));
loop.push(line([[280, 520], [185, 465], [145, 362]], { curve: true, sw: 3, stroke: accent }));
loop.push(line([[129, 380], [145, 360], [163, 378]], { sw: 3, stroke: accent }));
loop.push(line([[145, 240], [185, 120], [278, 80]], { curve: true, sw: 3, stroke: accent }));
loop.push(line([[258, 64], [280, 79], [257, 98]], { sw: 3, stroke: accent }));
loop.push(rect(350, 255, 100, 100, { fill: accent, fillStyle: "solid", stroke: accent, angle: -0.06 }));
loop.push(text(400, 288, "note", { size: 28, color: paper, anchor: "middle", angle: -0.06, bold: true }));

// Drawing 7: a short feedback form at the end of the workshop -------------
const form = [];
const soft = "#4A453E";
form.push(rect(40, 30, 430, 540, { sw: 3 }));
form.push(text(62, 46, "feedback form", { size: 30, bold: true }));
form.push(text(62, 92, "one scale: my expectations", { size: 21, color: soft }));
[90, 172, 255, 338, 420].forEach((x, i) => {
  const mid = i === 2;
  form.push(ell(x, 155, 46, 46, mid ? { fill: accent, fillStyle: "solid", stroke: accent, sw: 3 } : { sw: 2.5 }));
  form.push(text(x, 141, String(i + 1), { size: 26, bold: true, anchor: "middle", color: mid ? paper : ink }));
});
form.push(text(255, 186, "3 = fully met", { size: 22, bold: true, color: accent, anchor: "middle" }));
form.push(text(62, 228, "four areas, in words", { size: 21, color: soft }));
const areas = [["Preparation", 62, 262], ["Interaction", 262, 262], ["Presentation", 62, 412], ["Content", 262, 412]];
for (const [name, x, y] of areas) {
  form.push(rect(x, y, 186, 136, { sw: 2.5 }));
  form.push(text(x + 12, y + 8, name, { size: 23, bold: true }));
  form.push(text(x + 12, y + 44, "+", { size: 28, bold: true, color: accent }));
  form.push(line([[x + 40, y + 64], [x + 80, y + 58], [x + 120, y + 66], [x + 168, y + 60]], { curve: true, stroke: grey, sw: 2.5 }));
  form.push(text(x + 12, y + 84, "–", { size: 28, bold: true, color: accent }));
  form.push(line([[x + 40, y + 104], [x + 85, y + 110], [x + 125, y + 100], [x + 168, y + 106]], { curve: true, stroke: grey, sw: 2.5 }));
}
// think, pair, share
const head = (x, y) => {
  form.push(ell(x, y, 40, 40, { fill: paper, fillStyle: "solid", sw: 2.5 }));
  form.push(line([[x - 24, y + 52], [x - 16, y + 28], [x + 16, y + 28], [x + 24, y + 52]], { curve: true, sw: 2.5 }));
};
head(560, 80);
form.push(text(640, 62, "think", { size: 32, bold: true }));
head(540, 230); head(592, 230);
form.push(text(640, 212, "pair", { size: 32, bold: true }));
head(530, 380); head(578, 380); head(626, 380);
form.push(text(668, 362, "share", { size: 32, bold: true }));
for (const y of [150, 300]) {
  form.push(line([[566, y], [566, y + 36]], { stroke: accent, sw: 3 }));
  form.push(line([[554, y + 24], [566, y + 38], [578, y + 24]], { stroke: accent, sw: 3 }));
}
form.push(ell(548, 520, 64, 64, { sw: 3 }));
form.push(line([[548, 520], [548, 496]], { sw: 3 }));
form.push(line([[548, 520], [566, 530]], { sw: 3 }));
form.push(text(596, 492, "the last 15 minutes", { size: 22, bold: true, color: accent }));
form.push(text(596, 522, "of the workshop", { size: 21, color: soft }));

// Writers -----------------------------------------------------------------
const gen = rough.generator();
let seed = 100;

function svgOf(shapes, w, h) {
  const parts = [];
  for (const s of shapes) {
    seed += 7;
    const o = {
      seed, roughness: s.t === "text" ? 0 : 1.3, bowing: 1.2,
      stroke: s.stroke || ink, strokeWidth: s.sw || 2,
      fill: s.fill, fillStyle: s.fillStyle || "hachure", hachureGap: 7, fillWeight: 1.5,
    };
    let body = "";
    if (s.t === "text") {
      const anchor = s.anchor || "start";
      body = `<text x="${s.x}" y="${s.y + s.size * 0.85}" font-size="${s.size}" font-weight="${s.bold ? 800 : 400}" fill="${s.color || ink}" text-anchor="${anchor}">${s.s}</text>`;
    } else {
      let d;
      if (s.t === "rect") d = gen.rectangle(s.x, s.y, s.w, s.h, o);
      if (s.t === "ellipse") d = gen.ellipse(s.cx, s.cy, s.w, s.h, o);
      if (s.t === "line") d = s.curve ? gen.curve(s.points, o) : gen.linearPath(s.points, o);
      for (const p of gen.toPaths(d)) {
        const dash = s.dash ? ' stroke-dasharray="4 12"' : "";
        body += `<path d="${p.d}" stroke="${p.stroke}" stroke-width="${p.strokeWidth}" fill="${p.fill || "none"}" stroke-linecap="round" stroke-linejoin="round"${dash}/>`;
      }
    }
    if (s.angle) {
      const cx = s.t === "text" ? s.x : s.x + s.w / 2;
      const cy = s.t === "text" ? s.y + s.size / 2 : s.y + s.h / 2;
      body = `<g transform="rotate(${(s.angle * 180 / Math.PI).toFixed(2)} ${cx} ${cy})">${body}</g>`;
    }
    parts.push(body);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img">\n${parts.join("\n")}\n</svg>\n`;
}

function excalidrawOf(shapes) {
  let n = 0;
  const els = shapes.map((s) => {
    n += 1;
    const base = {
      id: `el${n}`, angle: s.angle || 0, strokeColor: s.stroke || s.color || ink,
      backgroundColor: s.fill || "transparent", fillStyle: s.fillStyle || "hachure",
      strokeWidth: s.sw && s.sw > 2.4 ? 2 : 1, strokeStyle: s.dash ? "dotted" : "solid",
      roughness: 1, opacity: 100, groupIds: [], frameId: null, roundness: null,
      seed: 1000 + n, version: 1, versionNonce: 5000 + n, isDeleted: false,
      boundElements: null, updated: 1, link: null, locked: false,
    };
    if (s.t === "rect") return { ...base, type: "rectangle", x: s.x, y: s.y, width: s.w, height: s.h };
    if (s.t === "ellipse") return { ...base, type: "ellipse", x: s.cx - s.w / 2, y: s.cy - s.h / 2, width: s.w, height: s.h };
    if (s.t === "line") {
      const [x0, y0] = s.points[0];
      const pts = s.points.map(([x, y]) => [x - x0, y - y0]);
      const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
      return {
        ...base, type: "line", x: x0, y: y0,
        width: Math.max(...xs) - Math.min(...xs), height: Math.max(...ys) - Math.min(...ys),
        points: pts, lastCommittedPoint: null, startBinding: null, endBinding: null,
        startArrowhead: null, endArrowhead: null, roundness: s.curve ? { type: 2 } : null,
      };
    }
    const width = s.s.length * s.size * 0.55, height = s.size * 1.25;
    const x = s.anchor === "middle" ? s.x - width / 2 : s.x;
    return {
      ...base, type: "text", x, y: s.y, width, height, text: s.s, originalText: s.s,
      fontSize: s.size, fontFamily: 1, textAlign: s.anchor === "middle" ? "center" : "left",
      verticalAlign: "top", containerId: null, lineHeight: 1.25, backgroundColor: "transparent",
    };
  });
  return JSON.stringify({
    type: "excalidraw", version: 2, source: "talk-enhancer",
    elements: els, appState: { viewBackgroundColor: paper, gridSize: null }, files: {},
  }, null, 2);
}

for (const [name, shapes] of [["embedded", embedded], ["folder", folder], ["learner", learner],
  ["blindspot", blindspot], ["humps", humps], ["loop", loop], ["form", form]]) {
  // A tighter view box for drawings that leave the edges of the canvas empty.
  const boxes = { embedded: "15 0 790 595", humps: "20 95 765 410", loop: "15 25 770 545", blindspot: "40 15 720 550", form: "25 15 770 570" };
  const svg = svgOf(shapes, 800, 600).replace('viewBox="0 0 800 600"', `viewBox="${boxes[name] || "0 0 800 600"}"`);
  fs.writeFileSync(path.join(out, `drawing-${name}.svg`), svg);
  fs.writeFileSync(path.join(out, `drawing-${name}.excalidraw`), excalidrawOf(shapes));
}
console.log("written");
