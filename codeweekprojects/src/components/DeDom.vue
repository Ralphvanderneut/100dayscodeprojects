<template>
  <canvas
    id="dom-utrecht"
    width="200"
    height="300"
    style="border: 1px solid #000000"
  >
  </canvas>
</template>

<script>
export default {
  mounted() {
    var canvas = document.getElementById("dom-utrecht");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.fillRect(60, 200, 80, 100);
    ctx.fillRect(70, 110, 60, 90);
    ctx.fillRect(80, 50, 40, 70);

    let top = new Path2D();
    top.moveTo(85, 50);
    top.lineTo(100, 35);
    top.lineTo(115, 50);
    top.closePath();

    let topleft = new Path2D();
    topleft.moveTo(80, 50);
    topleft.lineTo(80, 45);
    topleft.lineTo(85, 50);
    topleft.closePath();

    let topright = new Path2D();
    topleft.moveTo(120, 50);
    topleft.lineTo(120, 45);
    topleft.lineTo(115, 50);
    topleft.closePath();

    ctx.fill(topleft);
    ctx.fill(topright);
    ctx.fill(top);

    let middleleft = new Path2D();
    middleleft.moveTo(70, 110);
    middleleft.lineTo(70, 100);
    middleleft.lineTo(80, 110);
    middleleft.closePath();

    let middleright = new Path2D();
    middleright.moveTo(130, 110);
    middleright.lineTo(130, 105);
    middleright.lineTo(120, 110);
    middleright.closePath();

    ctx.fill(middleleft);
    ctx.fill(middleright);

    let bottomleft = new Path2D();
    bottomleft.moveTo(60, 200);
    bottomleft.lineTo(60, 190);
    bottomleft.lineTo(70, 200);
    bottomleft.closePath();

    let bottomright = new Path2D();
    bottomright.moveTo(140, 200);
    bottomright.lineTo(140, 190);
    bottomright.lineTo(130, 200);
    bottomright.closePath();

    ctx.fill(bottomleft);
    ctx.fill(bottomright);

    ctx.fillStyle = "#FFF";
    ctx.fillRect(86, 65, 12, 40);
    ctx.fillRect(103, 65, 12, 40);

    ctx.beginPath();
    ctx.arc(92, 65, 6, 0, 2 * Math.PI);
    ctx.arc(109, 65, 6, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillRect(76, 130, 12, 60);
    ctx.fillRect(94, 130, 12, 60);
    ctx.fillRect(112, 130, 12, 60);

    ctx.beginPath();
    ctx.arc(82, 130, 6, 0, 2 * Math.PI);
    ctx.arc(100, 130, 6, 0, 2 * Math.PI);
    ctx.arc(118, 130, 6, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillRect(70, 220, 15, 30);
    ctx.fillRect(92, 220, 15, 30);
    ctx.fillRect(115, 220, 15, 30);

    ctx.beginPath();
    ctx.arc(77.5, 220, 7.5, 0, Math.PI, 1);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(99.5, 220, 7.5, 0, Math.PI, 1);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(122.5, 220, 7.5, 0, Math.PI, 1);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(100, 320, 60, 20, Math.PI * 0.5, 0, Math.PI * 2);
    ctx.fill();
  },
};
</script>

<style lang="css" scoped>
</style>