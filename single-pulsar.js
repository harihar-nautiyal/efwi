(function () {
  var _0x1a2b = 2000;
  var _0x3c4d = 500;
  var _0x5e6f = null;
  var _0x7g8h = null;
  var _0x9i0j = false;

  (function () {
    var _0x_k = atob("TWFkZSBieSBIYXJpaGFyIE5hdXRpeWFs");

    console.log(
      "%c" + _0x_k,
      "color: #ff6d01; font-weight: bold; font-size: 12px;",
    );
  })();

  function _0x_lmn() {
    var _0x_opq = [
      { m: "badgeModal", c: "closeBadgeModal" },

      { m: "showLevelModal", c: "closeshowLevelModal" },

      { m: "streakModal", c: "closestreakModal" },

      { m: "winModal", c: "closewinModal" },

      { m: "difficultyModal", c: "closeDifficultyModal" },
    ];

    _0x7g8h = setInterval(function () {
      for (var _0x_rst = 0; _0x_rst < _0x_opq.length; _0x_rst++) {
        var _0x_uvw = document.getElementById(_0x_opq[_0x_rst].m);

        if (_0x_uvw && _0x_uvw.offsetParent !== null) {
          var _0x_xyz = document.getElementById(_0x_opq[_0x_rst].c);

          if (_0x_xyz) {
            console.log("[Jan] Close: " + _0x_opq[_0x_rst].m);

            _0x_xyz.click();
          }
        }
      }
    }, _0x3c4d);
  }

  function _0x_abc() {
    if (_0x9i0j) {
      console.warn("Already running!");

      return;
    }

    if (typeof challenges === "undefined" || challenges.length === 0) {
      console.error("Game data missing. Reload page.");

      return;
    }

    _0x9i0j = true;

    console.log(
      "%c▶ Auto ON! Wait: " + _0x1a2b / 1000 + "s",
      "color: #ff6d01; font-weight: bold;",
    );

    console.log("Stop with: stopAutomation()");

    _0x_lmn();

    _0x5e6f = setInterval(function () {
      if (completedChallenges >= challenges.length) {
        console.log("%c✅ Done!", "color: #16A34A; font-weight: bold;");

        _0x_def();

        return;
      }

      var _0x_ghi = document.getElementById("submitCode");
      var _0x_jkl = document.getElementById("nextChallenge");
      var _0x_mno = document.getElementById("nextChallengeTwo");
      if (_0x_ghi && !_0x_ghi.classList.contains("hidden")) {
        console.log(
          "Solve #" +
            (currentChallengeIndex + 1) +
            ": " +
            challenges[currentChallengeIndex].topic,
        );

        codeMirrorEditor.setValue(challenges[currentChallengeIndex].solution);

        _0x_ghi.click();
      } else if (_0x_jkl && !_0x_jkl.classList.contains("hidden")) {
        console.log("Next...");

        _0x_jkl.click();
      } else if (_0x_mno && !_0x_mno.classList.contains("hidden")) {
        console.log("Next alt...");

        _0x_mno.click();
      } else {
        console.log("Wait UI...");
      }
    }, _0x1a2b);
  }

  function _0x_def() {
    if (_0x5e6f) clearInterval(_0x5e6f);

    if (_0x7g8h) clearInterval(_0x7g8h);

    _0x9i0j = false;

    console.log("%c■ Stopped.", "color: #fca5a5; font-weight: bold;");
  }

  window.startAutomation = _0x_abc;
  window.stopAutomation = _0x_def;
  console.log("✅ Ready. Call startAutomation()");
})();
