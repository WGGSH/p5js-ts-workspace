/// <reference types="p5/global" />
let points = [];
let numPoints = 100;

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < numPoints; i++) {
    points.push({
      x: random(width),
      y: random(height),
      vx: random(-2, 2),
      vy: random(-2, 2),
    });
  }
  noFill(); // 面は透明の準備
  blendMode(ADD); // 加算合成モード
}

function draw() {
  blendMode(BLEND); // 通常合成モード
  background(0, 10); // 黒背景、徐々にフェード効果
  blendMode(ADD); // 加算合成モード

  // 点の位置を更新
  for (let p of points) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) p.x += width;
    if (p.x > width) p.x -= width;
    if (p.y < 0) p.y += height;
    if (p.y > height) p.y -= height;
  }

  // 各点に対して最も近い2点を探す
  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    // 距離とインデックスを格納
    let distances = points.map((q, idx) => ({
      distance: dist(p.x, p.y, q.x, q.y),
      index: idx,
    }));

    // 自身を除いて距離順にソート
    distances = distances.filter(d => d.index !== i).sort((a, b) => a.distance - b.distance);

    // 最も近い2点を取得
    let closest1 = points[distances[0].index];
    let closest2 = points[distances[1].index];
    let closest3 = points[distances[2].index];
    let closest4 = points[distances[3].index];

    // 三角形を描画
    // noFill();
    colorMode(HSB, 360, 100, 100, 100); // HSBモードに変更
    stroke(145, 50, 10, 90); // 白色の線
    // stroke(10, 100, 255, 10); // 青色の発光風の色
    strokeWeight(5.5); // エッジを少し細めに設定
    // triangle(p.x, p.y, closest1.x, closest1.y, closest2.x, closest2.y);
    beginShape();
    vertex(p.x, p.y);
    vertex(closest1.x, closest1.y);
    vertex(closest2.x, closest2.y);
    // vertex(closest3.x, closest3.y);
    // vertex(closest4.x, closest4.y);
    endShape(CLOSE);
    circle(p.x, p.y, 5); // 点の描画

    // 三角形の辺の発光効果
    // stroke(0, 100, 255, 120); // 辺の発光用の色
    // stroke(120, 90, 10, 100); // 白色の線
    // line(p.x, p.y, closest1.x, closest1.y);
    // line(p.x, p.y, closest2.x, closest2.y);
    // line(closest1.x, closest1.y, closest2.x, closest2.y);
  }
}
