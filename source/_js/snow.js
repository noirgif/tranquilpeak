// snow magic, from some plus
(function (b) {
  b.snowfall = function (c, d) {
    function u(a, f, g, h, j) {
      this.id = j; this.x = a; this.y = f; this.size = g; this.speed = h; this.step = 0; this.stepSize = e(1, 10) / 100; d.collection && (this.target = m[e(0, m.length - 1)]); a = b(document.createElement("div")).attr({ "class": "snowfall-flakes", id: "flake-" + this.id }).css({ width: this.size, height: this.size, background: d.flakeColor, position: "fixed", top: this.y, left: this.x, fontSize: 0, zIndex: d.flakeIndex }); b(c).get(0).tagName === b(document).get(0).tagName ? (b("body").append(a), c = b("body")) :
        b(c).append(a); this.element = document.getElementById("flake-" + this.id); this.update = function () {
          this.y += this.speed; this.y > $(window).height() - (this.size + 6) && this.reset(); this.element.style.top = this.y + "px"; this.element.style.left = this.x + "px"; this.step += this.stepSize; this.x = !1 === p ? this.x + Math.cos(this.step) : this.x + (p + Math.cos(this.step)); if (d.collection && this.x > this.target.x && this.x < this.target.width + this.target.x && this.y > this.target.y && this.y < this.target.height + this.target.y) {
            var b = this.target.element.getContext("2d"),
              a = this.x - this.target.x, c = this.y - this.target.y, e = this.target.colData; if (void 0 !== e[parseInt(a)][parseInt(c + this.speed + this.size)] || c + this.speed + this.size > this.target.height) if (c + this.speed + this.size > this.target.height) {
                for (; c + this.speed + this.size > this.target.height && 0 < this.speed;)this.speed *= 0.5; b.fillStyle = "#fff"; void 0 == e[parseInt(a)][parseInt(c + this.speed + this.size)] ? (e[parseInt(a)][parseInt(c + this.speed + this.size)] = 1, b.fillRect(a, c + this.speed + this.size, this.size, this.size)) : (e[parseInt(a)][parseInt(c +
                  this.speed)] = 1, b.fillRect(a, c + this.speed, this.size, this.size)); this.reset()
              } else this.speed = 1, this.stepSize = 0, parseInt(a) + 1 < this.target.width && void 0 == e[parseInt(a) + 1][parseInt(c) + 1] ? this.x++ : 0 < parseInt(a) - 1 && void 0 == e[parseInt(a) - 1][parseInt(c) + 1] ? this.x-- : (b.fillStyle = "#fff", b.fillRect(a, c, this.size, this.size), e[parseInt(a)][parseInt(c)] = 1, this.reset())
          } (this.x > l - i || this.x < i) && this.reset()
        }; this.reset = function () {
          this.y = 0; this.x = e(i, l - i); this.stepSize = e(1, 10) / 100; this.size = e(100 * d.minSize, 100 * d.maxSize) /
            100; this.speed = e(d.minSpeed, d.maxSpeed)
        }
    } function r() { for (a = 0; a < j.length; a += 1)j[a].update(); s = setTimeout(function () { r() }, 30) } var d = b.extend({ flakeCount: 35, flakeColor: "#ff" + (parseInt("ffff", 16) - 0x1010 * d.snowClickCount).toString(16), flakeIndex: 999999, minSize: 1, maxSize: 2, minSpeed: 1, maxSpeed: 5, round: 1, shadow: !1, collection: !1, collectionHeight: 40, deviceorientation: !1 }, d), e = function (a, b) { return Math.round(a + Math.random() * (b - a)) }; b(c).data("snowfall", this); var j = [], f = 0, a = 0, n = b(c).height(), l = b(c).width(), i = 0, s = 0; if (!1 !== d.collection) if (f = document.createElement("canvas"),
      f.getContext && f.getContext("2d")) for (var m = [], f = b(d.collection), k = d.collectionHeight, a = 0; a < f.length; a++) { var g = f[a].getBoundingClientRect(), h = document.createElement("canvas"), t = []; if (0 < g.top - k) { document.body.appendChild(h); h.style.position = "absolute"; h.height = k; h.width = g.width; h.style.left = g.left + "px"; h.style.top = g.top - k + "px"; for (var q = 0; q < g.width; q++)t[q] = []; m.push({ element: h, x: g.left, y: g.top - k, width: g.width, height: k, colData: t }) } } else d.collection = !1; b(c).get(0).tagName === b(document).get(0).tagName &&
        (i = 25); b(window).on("resize", function () { n = b(c).height(); l = b(c).width() }); for (a = 0; a < d.flakeCount; a += 1)f = j.length, j.push(new u(e(i, l - i), e(0, n), e(100 * d.minSize, 100 * d.maxSize) / 100, e(d.minSpeed, d.maxSpeed), f)); d.round && b(".snowfall-flakes").css({ "-moz-border-radius": "50%", "-webkit-border-radius": "50%", "border-radius": "50%" }); d.shadow && b(".snowfall-flakes").css({ "-moz-box-shadow": "1px 1px 1px #555", "-webkit-box-shadow": "1px 1px 1px #555", "box-shadow": "1px 1px 1px #555" }); var p = !1; d.deviceorientation &&
          b(window).on("deviceorientation", function (a) { p = 0.1 * a.originalEvent.gamma }); r(); this.clear = function () { b(c).children(".snowfall-flakes").remove(); j = []; clearTimeout(s) }
  }; b.fn.snowfall = function (c) { if ("object" == typeof c || void 0 == c) return this.each(function () { new b.snowfall(this, c) }); if ("string" == typeof c) return this.each(function () { var c = b(this).data("snowfall"); c && c.clear() }) }


  var snowClickCount = 0;
  function snow() {
    $('.snowfall-flakes').remove();
    $(window).snowfall({ round: true, minSize: 5, maxSize: 8, snowClickCount: snowClickCount });
    snowClickCount += 1;
    if (snowClickCount === 16) {
      $("*").css("background-color", "red");
      var glwww = document.createElement('audio');
      src = document.createElement('source');
      $(src).attr('src', 'https://res.cloudinary.com/noirgif/video/upload/v1545761612/nir.moe/SFX/Grievous_Ladywww_-_Laur_vs_Team_Grimoire.mp3');
      $(glwww).attr({ autoplay: true });
      $(glwww).append(src);
      $(glwww).on('ended', function () { $('*').remove(); });
      $('body').append(glwww);
    }
  }
  // mobile webkit compatibility
  jQuery(function () {
    $("#snow-bringer").on('click', snow);
  });
})(jQuery);