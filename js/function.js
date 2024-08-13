const _0x35eb9a = _0x4470;
(function (_0x5d156c, _0x44ebac) {
  const _0x49d82c = _0x4470,
    _0x9ba74f = _0x5d156c();
  while (!![]) {
    try {
      const _0x1eec2d =
        parseInt(_0x49d82c(0x131)) / 0x1 +
        -parseInt(_0x49d82c(0x193)) / 0x2 +
        (-parseInt(_0x49d82c(0x1a6)) / 0x3) *
          (-parseInt(_0x49d82c(0x129)) / 0x4) +
        -parseInt(_0x49d82c(0x13b)) / 0x5 +
        (-parseInt(_0x49d82c(0x10c)) / 0x6) *
          (parseInt(_0x49d82c(0x128)) / 0x7) +
        parseInt(_0x49d82c(0x132)) / 0x8 +
        parseInt(_0x49d82c(0x16e)) / 0x9;
      if (_0x1eec2d === _0x44ebac) break;
      else _0x9ba74f["push"](_0x9ba74f["shift"]());
    } catch (_0x1aa8de) {
      _0x9ba74f["push"](_0x9ba74f["shift"]());
    }
  }
})(_0x1988, 0xd4dbe);
function formatZero(_0x2b8b57, _0x6faa07) {
  const _0x2bf8d4 = _0x4470;
  let _0x48baa7 = _0x2b8b57[_0x2bf8d4(0x151)](),
    _0x2e6ecf = [],
    _0x33f231 = [],
    _0x110ff1 = _0x6faa07;
  while (_0x48baa7["length"] % _0x110ff1 !== 0x0) {
    _0x48baa7 = "0" + _0x48baa7;
  }
  for (
    let _0x3ffa21 = 0x0;
    _0x3ffa21 < _0x48baa7[_0x2bf8d4(0xf3)];
    _0x3ffa21 += _0x110ff1
  ) {
    let _0x5d84ff = _0x48baa7[_0x2bf8d4(0xc8)](
      _0x3ffa21,
      _0x3ffa21 + _0x110ff1
    );
    _0x2e6ecf[_0x2bf8d4(0x15d)](..._0x5d84ff[_0x2bf8d4(0x164)]("")),
      _0x33f231[_0x2bf8d4(0x15d)](..._0x5d84ff[_0x2bf8d4(0x164)]("")),
      _0x3ffa21 + _0x110ff1 < _0x48baa7["length"] &&
        (_0x2e6ecf["push"](_0x2bf8d4(0x14c)), _0x33f231[_0x2bf8d4(0x15d)](""));
  }
  const _0x312fb2 = _0x2e6ecf[_0x2bf8d4(0x16a)]((_0x32de5e) =>
    _0x32de5e == "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      ? _0x32de5e
      : _0x2bf8d4(0xfc) + _0x32de5e + _0x2bf8d4(0x115)
  );
  return { newformattedHtml: _0x312fb2, formattedArray: _0x33f231 };
}
function formateNumsSpace(_0xbd1450) {
  const _0x38fd91 = _0x4470,
    _0x56e621 = _0x38fd91(0x137),
    _0x3ac319 = { A: 0xa, B: 0xb, C: 0xc, D: 0xd, E: 0xe, F: 0xf },
    _0x5c9ec7 = _0xbd1450[_0x38fd91(0x16a)](
      (_0x3d134f) => _0x38fd91(0x139) + _0x3d134f + "</span>" + _0x56e621
    )
      [_0x38fd91(0x144)]("")
      ["slice"](0x0, -_0x56e621["length"])
      [_0x38fd91(0x196)](),
    _0x527bfd = _0xbd1450[_0x38fd91(0x16a)]((_0x5ea566) => {
      const _0x241f12 = _0x38fd91,
        _0x59112f =
          _0x3ac319[_0x5ea566] !== undefined ? _0x3ac319[_0x5ea566] : _0x5ea566;
      return "<span>" + _0x59112f + _0x241f12(0x115) + _0x56e621;
    })
      ["join"]("")
      [_0x38fd91(0xc8)](0x0, -_0x56e621[_0x38fd91(0xf3)])
      ["trim"]();
  return { numsDecimalfill: _0x527bfd, numsDecimalfillSpace: _0x5c9ec7 };
}
const input1 = document[_0x35eb9a(0xf5)]("input"),
  result = document[_0x35eb9a(0xf5)]("result");
function extractBinary(_0x587c55) {
  const _0x47bb3b = _0x35eb9a,
    _0x2a5938 = [],
    _0x55bbc3 = [],
    _0x3722e7 = [],
    _0x43a81b = [],
    _0x35f27a = [],
    _0xf9f96d = [];
  if (_0x587c55 == 0x0)
    _0x2a5938[_0x47bb3b(0x15d)](0x0),
      _0x55bbc3[_0x47bb3b(0x15d)](0x0),
      _0x35f27a[_0x47bb3b(0x15d)](0x0),
      _0x3722e7[_0x47bb3b(0x15d)](0x0),
      _0x43a81b[_0x47bb3b(0x15d)](0x0);
  else
    while (_0x587c55 > 0x0) {
      let _0x19a7c6 = _0x587c55 % 0x2;
      _0x19a7c6 == 0x0
        ? _0x2a5938[_0x47bb3b(0x15d)](
            _0x47bb3b(0x1a7) + _0x19a7c6 + _0x47bb3b(0x115)
          )
        : _0x2a5938["push"](_0x47bb3b(0x11c) + _0x19a7c6 + _0x47bb3b(0x115)),
        _0x55bbc3["push"](_0x19a7c6),
        _0x3722e7[_0x47bb3b(0x15d)](_0x19a7c6),
        _0x43a81b["push"](_0x587c55),
        _0x35f27a[_0x47bb3b(0x15d)](0x2),
        (_0x587c55 = Math["floor"](_0x587c55 / 0x2));
    }
  const _0x5f374a = _0x55bbc3[_0x47bb3b(0x14b)]()["join"](""),
    _0x2a916a = _0x2a5938["reverse"]()["join"]("");
  return (
    _0x35f27a[_0x47bb3b(0x145)](),
    _0x3722e7[_0x47bb3b(0x145)](),
    _0x35f27a[_0x47bb3b(0x135)]((_0x48dbca, _0x4357a1) =>
      _0xf9f96d[_0x47bb3b(0x15d)](_0x4357a1 + 0x1 + ".")
    ),
    _0x35f27a[_0x47bb3b(0x15d)](""),
    _0x3722e7["push"](""),
    _0xf9f96d[_0x47bb3b(0x15d)](""),
    {
      binArrayReversed: _0x5f374a,
      binArrayColorReversed: _0x2a916a,
      divData: _0x35f27a,
      quoData: _0x43a81b,
      remData: _0x3722e7,
      dataCount: _0xf9f96d,
    }
  );
}
let decimalToBinaryContent = "";
function decimalToBinary() {
  const _0x45fa61 = _0x35eb9a,
    _0x21265e = input1[_0x45fa61(0xed)],
    _0x3bf6d7 = parseInt(Number(_0x21265e));
  input1[_0x45fa61(0xed)] = _0x21265e;
  if (_0x21265e[_0x45fa61(0xf3)] > 0x0) {
    const {
        binArrayReversed: _0x5b3ca9,
        binArrayColorReversed: _0x4b50b2,
        divData: _0x196920,
        quoData: _0x1192e1,
        remData: _0x18904a,
        dataCount: _0x12ec22,
      } = extractBinary(_0x3bf6d7),
      _0x3e2293 = [..._0x18904a]
        [_0x45fa61(0x16a)]((_0x589556) => _0x589556 + "\x20")
        ["reverse"]()
        [_0x45fa61(0x144)]("");
    _0x21265e[_0x45fa61(0xf3)] > 0x1 && (input1[_0x45fa61(0xed)] = _0x3bf6d7);
    let _0x3e0b42 = "",
      _0x4dd3a5 = _0x45fa61(0xf9);
    for (let _0x5ac4cd = 0x0; _0x5ac4cd < _0x18904a["length"]; _0x5ac4cd++) {
      _0x4dd3a5 +=
        "<tr><td>" +
        _0x12ec22[_0x5ac4cd] +
        _0x45fa61(0xcf) +
        _0x196920[_0x5ac4cd] +
        _0x45fa61(0xcf) +
        _0x1192e1[_0x5ac4cd] +
        "</td><td>" +
        _0x18904a[_0x5ac4cd] +
        _0x45fa61(0x13a);
    }
    (_0x4dd3a5 += "</table>"),
      _0x3bf6d7 >= 0x2
        ? (_0x3e0b42 =
            _0x45fa61(0xd1) +
            _0x4dd3a5 +
            _0x45fa61(0x195) +
            _0x3e2293 +
            _0x45fa61(0xe0) +
            _0x5b3ca9 +
            "</span></p>")
        : (_0x3e0b42 =
            "<p\x20class=\x22message\x22>No\x20Need\x20to\x20Conversion\x20Steps</p>"),
      (result[_0x45fa61(0xe1)] =
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22numbers\x22>" +
        _0x4b50b2 +
        _0x45fa61(0x123) +
        _0x3bf6d7 +
        _0x45fa61(0x110) +
        _0x5b3ca9 +
        _0x45fa61(0xdc) +
        _0x3bf6d7 +
        _0x45fa61(0x16f) +
        _0x5b3ca9 +
        _0x45fa61(0x10f) +
        _0x3e0b42 +
        _0x45fa61(0x171));
  } else result[_0x45fa61(0xe1)] = "";
}
input1[_0x35eb9a(0x105)](_0x35eb9a(0xea), decimalToBinary);
const input2 = document[_0x35eb9a(0xf5)](_0x35eb9a(0x15a)),
  result2 = document["getElementById"](_0x35eb9a(0x122));
function extractDecimal(_0xeaddd2) {
  const _0x3a650c = _0x35eb9a;
  let _0x2383c7 = 0x0;
  const _0x57f3b5 = [];
  for (
    let _0x5067aa = _0xeaddd2[_0x3a650c(0xf3)] - 0x1;
    _0x5067aa >= 0x0;
    _0x5067aa--
  ) {
    _0x2383c7 +=
      parseInt(_0xeaddd2[_0xeaddd2[_0x3a650c(0xf3)] - 0x1 - _0x5067aa], 0x2) *
      Math[_0x3a650c(0x16c)](0x2, _0x5067aa);
    let _0x55edb1 =
      parseInt(_0xeaddd2[_0xeaddd2["length"] - 0x1 - _0x5067aa], 0x2) *
      Math["pow"](0x2, _0x5067aa);
    _0x57f3b5["push"](_0x55edb1);
  }
  const _0x104ba2 = [];
  return (
    [_0x2383c7]
      [_0x3a650c(0x144)]("")
      [_0x3a650c(0x164)]("")
      [_0x3a650c(0x11e)]((_0x207919) => {
        const _0x3d4cec = _0x3a650c;
        _0x207919 == 0x0
          ? _0x104ba2[_0x3d4cec(0x15d)](
              "<span\x20class=\x22zero-c\x22>" + _0x207919 + _0x3d4cec(0x115)
            )
          : _0x104ba2[_0x3d4cec(0x15d)](
              _0x3d4cec(0x11c) + _0x207919 + _0x3d4cec(0x115)
            );
      }),
    { deciNum: _0x2383c7, coloredDeciNum: _0x104ba2, calData: _0x57f3b5 }
  );
}
function binaryToDecimal() {
  const _0x4f3db4 = _0x35eb9a,
    _0x56c308 = input2[_0x4f3db4(0xed)]["trim"](),
    _0x2ac520 = _0x56c308["split"]("")["filter"](
      (_0x172f9f) => _0x172f9f == "0" || _0x172f9f == "1"
    );
  _0x2ac520["length"] >= 0x2 &&
    _0x2ac520[0x0] == 0x0 &&
    _0x2ac520[_0x4f3db4(0x157)]();
  input2[_0x4f3db4(0xed)] = _0x2ac520["join"]("");
  if (_0x56c308["length"] > 0x0) {
    _0x56c308 >= 0x2 && (result2[_0x4f3db4(0xe1)] = _0x4f3db4(0x10b));
    if (_0x2ac520[_0x4f3db4(0xf3)] !== 0x0) {
      const _0x3f6e4e = extractDecimal(_0x2ac520),
        _0x59965d = _0x3f6e4e[_0x4f3db4(0x17b)],
        _0x3f57ca = _0x3f6e4e[_0x4f3db4(0xe3)],
        _0x2ff9ee = _0x3f6e4e[_0x4f3db4(0xcb)],
        _0x48e889 = _0x2ac520[_0x4f3db4(0xc8)]()[_0x4f3db4(0x14b)]();
      let _0x83d5a8 = _0x4f3db4(0xff),
        _0x87da0a = _0x4f3db4(0x173) + _0x2ac520["join"]("") + _0x4f3db4(0x127);
      for (
        let _0xa24bfa = _0x48e889[_0x4f3db4(0xf3)] - 0x1;
        _0xa24bfa >= 0x0;
        _0xa24bfa--
      ) {
        (_0x83d5a8 +=
          _0x4f3db4(0xdf) +
          (_0x48e889[_0x4f3db4(0xf3)] - _0xa24bfa) +
          _0x4f3db4(0x181) +
          _0x48e889[_0xa24bfa] +
          _0x4f3db4(0x163) +
          _0xa24bfa +
          _0x4f3db4(0xd7) +
          _0xa24bfa +
          "</td></tr>"),
          (_0x87da0a +=
            _0x4f3db4(0xd3) +
            _0x48e889[_0xa24bfa] +
            _0x4f3db4(0x163) +
            _0xa24bfa +
            _0x4f3db4(0x169)),
          _0xa24bfa !== 0x0 && (_0x87da0a += _0x4f3db4(0x142)),
          _0xa24bfa == 0x0 && (_0x87da0a += _0x4f3db4(0x150));
      }
      for (
        let _0x594c4a = 0x0;
        _0x594c4a < _0x2ff9ee[_0x4f3db4(0xf3)];
        _0x594c4a++
      ) {
        (_0x87da0a +=
          _0x4f3db4(0x139) + _0x2ff9ee[_0x594c4a] + _0x4f3db4(0x115)),
          _0x594c4a !== _0x2ff9ee[_0x4f3db4(0xf3)] - 0x1 &&
            (_0x87da0a += _0x4f3db4(0x142));
      }
      (_0x83d5a8 += "</table>"),
        (_0x87da0a +=
          _0x4f3db4(0x1ad) +
          _0x3f57ca +
          _0x4f3db4(0x170) +
          _0x2ac520["join"]("") +
          ")<sub>2</sub>\x20=\x20(" +
          _0x3f57ca +
          _0x4f3db4(0x13d));
      let _0x4babd7 = "";
      _0x56c308[_0x4f3db4(0xf3)] > 0x1
        ? (_0x4babd7 =
            _0x4f3db4(0x197) + _0x83d5a8 + _0x4f3db4(0xd8) + _0x87da0a)
        : (_0x4babd7 =
            "<p\x20class=\x22message\x22>No\x20Need\x20To\x20Conversion\x20Steps</p>"),
        (result2["innerHTML"] =
          _0x4f3db4(0x185) +
          _0x59965d[_0x4f3db4(0x144)]("") +
          _0x4f3db4(0x186) +
          _0x2ac520[_0x4f3db4(0x144)]("") +
          "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x20pad\x22>In\x20Decimal\x20Conversion:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>" +
          _0x3f57ca +
          _0x4f3db4(0x12d) +
          _0x2ac520[_0x4f3db4(0x144)]("") +
          _0x4f3db4(0xe7) +
          _0x3f57ca +
          _0x4f3db4(0x103) +
          _0x4babd7 +
          "\x0a\x20\x20\x20\x20\x20\x20</div>");
    }
  } else result2["innerHTML"] = "";
}
input2[_0x35eb9a(0x105)]("input", binaryToDecimal);
const input3 = document["getElementById"](_0x35eb9a(0x121)),
  result3 = document["getElementById"](_0x35eb9a(0x130));
function extractOcta(_0x4c43f4) {
  const _0x35365c = _0x35eb9a,
    _0x2860e1 = [],
    _0x595365 = [],
    _0x12038f = [],
    _0x1338fa = [],
    _0x2c9fa5 = [],
    _0x3e6416 = [];
  if (_0x4c43f4 == 0x0)
    _0x2860e1[_0x35365c(0x15d)](0x0),
      _0x595365[_0x35365c(0x15d)](0x0),
      _0x2c9fa5[_0x35365c(0x15d)](0x0),
      _0x12038f[_0x35365c(0x15d)](0x0),
      _0x1338fa["push"](0x0);
  else
    while (_0x4c43f4 > 0x0) {
      let _0x252cdd = _0x4c43f4 % 0x8;
      _0x252cdd == 0x0
        ? _0x2860e1[_0x35365c(0x15d)](
            _0x35365c(0x1a7) + _0x252cdd + _0x35365c(0x115)
          )
        : _0x2860e1["push"](_0x35365c(0x11c) + _0x252cdd + _0x35365c(0x115)),
        _0x595365[_0x35365c(0x15d)](_0x252cdd),
        _0x12038f[_0x35365c(0x15d)](_0x252cdd),
        _0x1338fa[_0x35365c(0x15d)](_0x4c43f4),
        _0x2c9fa5[_0x35365c(0x15d)](0x8),
        (_0x4c43f4 = Math["floor"](_0x4c43f4 / 0x8));
    }
  const _0x32197e = _0x595365["reverse"]()[_0x35365c(0x144)](""),
    _0x3ddc1f = _0x2860e1["reverse"]()[_0x35365c(0x144)]("");
  return (
    _0x2c9fa5["pop"](),
    _0x12038f["pop"](),
    _0x2c9fa5[_0x35365c(0x135)]((_0x3bbb8e, _0x30afd5) =>
      _0x3e6416[_0x35365c(0x15d)](_0x30afd5 + 0x1 + ".")
    ),
    _0x2c9fa5[_0x35365c(0x15d)](""),
    _0x12038f["push"](""),
    _0x3e6416[_0x35365c(0x15d)](""),
    {
      octArrayReversed: _0x32197e,
      octArrayColorReversed: _0x3ddc1f,
      divData: _0x2c9fa5,
      quoData: _0x1338fa,
      remData: _0x12038f,
      dataCount: _0x3e6416,
    }
  );
}
function decimalToOcta() {
  const _0x4c37d8 = _0x35eb9a,
    _0x5cdf57 = input3[_0x4c37d8(0xed)],
    _0x50a1a8 = parseInt(Number(_0x5cdf57));
  input3[_0x4c37d8(0xed)] = _0x5cdf57;
  if (_0x5cdf57["length"] > 0x0) {
    const {
        octArrayReversed: _0x47dae6,
        octArrayColorReversed: _0x1d64de,
        divData: _0x4f7e81,
        quoData: _0x2e3a73,
        remData: _0x2b2250,
        dataCount: _0x325aef,
      } = extractOcta(_0x50a1a8),
      _0x193c8a = [..._0x2b2250]
        ["map"]((_0x45eab5) => _0x45eab5 + "\x20")
        [_0x4c37d8(0x14b)]()
        [_0x4c37d8(0x144)]("");
    let _0x2ca1cf = "",
      _0x19338c = _0x4c37d8(0xf9);
    for (
      let _0x3782dc = 0x0;
      _0x3782dc < _0x2b2250[_0x4c37d8(0xf3)];
      _0x3782dc++
    ) {
      _0x19338c +=
        _0x4c37d8(0xdf) +
        _0x325aef[_0x3782dc] +
        _0x4c37d8(0xcf) +
        _0x4f7e81[_0x3782dc] +
        _0x4c37d8(0xcf) +
        _0x2e3a73[_0x3782dc] +
        _0x4c37d8(0xcf) +
        _0x2b2250[_0x3782dc] +
        "</td></tr>";
    }
    (_0x19338c += _0x4c37d8(0xe6)),
      _0x50a1a8 > 0x7
        ? (_0x2ca1cf =
            _0x4c37d8(0x16d) +
            _0x19338c +
            _0x4c37d8(0x19b) +
            _0x193c8a +
            _0x4c37d8(0xe2) +
            _0x47dae6 +
            "</span>\x20</p>")
        : (_0x2ca1cf = _0x4c37d8(0xd4)),
      (result3[_0x4c37d8(0xe1)] =
        _0x4c37d8(0x17e) +
        _0x1d64de +
        _0x4c37d8(0x12f) +
        _0x50a1a8 +
        _0x4c37d8(0x19c) +
        _0x47dae6 +
        _0x4c37d8(0xdc) +
        _0x50a1a8 +
        _0x4c37d8(0x16f) +
        _0x47dae6 +
        _0x4c37d8(0x118) +
        _0x2ca1cf +
        _0x4c37d8(0x171));
  } else result3["innerHTML"] = "";
}
input3[_0x35eb9a(0x105)](_0x35eb9a(0xea), decimalToOcta);
const input5 = document["getElementById"]("input5"),
  result5 = document[_0x35eb9a(0xf5)](_0x35eb9a(0x172));
function extractOctaDecimal(_0x1fad85) {
  const _0x10ad12 = _0x35eb9a;
  let _0x2f0d83 = 0x0,
    _0x11f9e1 = [];
  for (
    let _0x1a1dbd = _0x1fad85[_0x10ad12(0xf3)] - 0x1;
    _0x1a1dbd >= 0x0;
    _0x1a1dbd--
  ) {
    _0x2f0d83 +=
      parseInt(_0x1fad85[_0x1fad85["length"] - 0x1 - _0x1a1dbd], 0x8) *
      Math[_0x10ad12(0x16c)](0x8, _0x1a1dbd);
    let _0x27eced =
      parseInt(_0x1fad85[_0x1fad85[_0x10ad12(0xf3)] - 0x1 - _0x1a1dbd], 0x8) *
      Math[_0x10ad12(0x16c)](0x8, _0x1a1dbd);
    _0x11f9e1[_0x10ad12(0x15d)](_0x27eced);
  }
  const _0xfd2d95 = [];
  return (
    [_0x2f0d83]
      [_0x10ad12(0x144)]("")
      [_0x10ad12(0x164)]("")
      [_0x10ad12(0x11e)]((_0x437da1) => {
        const _0x9af7eb = _0x10ad12;
        _0x437da1 == 0x0
          ? _0xfd2d95[_0x9af7eb(0x15d)](
              _0x9af7eb(0x1a7) + _0x437da1 + _0x9af7eb(0x115)
            )
          : _0xfd2d95[_0x9af7eb(0x15d)](
              "<span\x20class=\x22one-c\x22>" + _0x437da1 + _0x9af7eb(0x115)
            );
      }),
    { deciNum: _0x2f0d83, coloredDeciNum: _0xfd2d95, calData: _0x11f9e1 }
  );
}
function octaToDecimal() {
  const _0x246099 = _0x35eb9a,
    _0x110db5 = input5["value"][_0x246099(0x196)](),
    _0x20233a = _0x110db5[_0x246099(0x164)]("")["filter"](
      (_0x4a8a27) => _0x4a8a27 >= "0" && _0x4a8a27 <= "7"
    );
  _0x20233a[_0x246099(0xf3)] >= 0x2 &&
    _0x20233a[0x0] == 0x0 &&
    _0x20233a[_0x246099(0x157)]();
  input5[_0x246099(0xed)] = _0x20233a[_0x246099(0x144)]("");
  if (_0x110db5[_0x246099(0xf3)] > 0x0) {
    _0x110db5 >= 0x8 && (result5[_0x246099(0xe1)] = _0x246099(0x141));
    if (_0x20233a[_0x246099(0xf3)] !== 0x0) {
      const _0x35144a = extractOctaDecimal(_0x20233a),
        _0x3b9e12 = _0x35144a[_0x246099(0x17b)],
        _0x5924fd = _0x35144a[_0x246099(0xe3)],
        _0x19f51a = _0x35144a[_0x246099(0xcb)],
        _0x2182f0 = _0x20233a[_0x246099(0xc8)]()["reverse"]();
      let _0x3dce43 = "",
        _0x23b214 = _0x246099(0xff),
        _0x4b5753 =
          "<div\x20class=\x22solve\x22><p\x20class=\x22num\x22>" +
          _0x20233a[_0x246099(0x144)]("") +
          _0x246099(0x127);
      for (
        let _0x242270 = _0x2182f0["length"] - 0x1;
        _0x242270 >= 0x0;
        _0x242270--
      ) {
        (_0x23b214 +=
          _0x246099(0xdf) +
          (_0x2182f0[_0x246099(0xf3)] - _0x242270) +
          _0x246099(0x181) +
          _0x2182f0[_0x242270] +
          _0x246099(0x19a) +
          _0x242270 +
          _0x246099(0xd7) +
          _0x242270 +
          _0x246099(0x13a)),
          (_0x4b5753 +=
            "<span\x20class=\x22n\x22>" +
            _0x2182f0[_0x242270] +
            _0x246099(0x19a) +
            _0x242270 +
            _0x246099(0x169)),
          _0x242270 !== 0x0 && (_0x4b5753 += _0x246099(0x142)),
          _0x242270 == 0x0 && (_0x4b5753 += "<p\x20class=\x22cal-2\x22>");
      }
      for (
        let _0xdfe646 = 0x0;
        _0xdfe646 < _0x19f51a[_0x246099(0xf3)];
        _0xdfe646++
      ) {
        (_0x4b5753 +=
          _0x246099(0x139) + _0x19f51a[_0xdfe646] + _0x246099(0x115)),
          _0xdfe646 !== _0x19f51a[_0x246099(0xf3)] - 0x1 &&
            (_0x4b5753 += _0x246099(0x142));
      }
      (_0x23b214 += "</table>"),
        (_0x4b5753 +=
          _0x246099(0x111) +
          _0x5924fd +
          "</span></p>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-3\x22>(" +
          _0x20233a["join"]("") +
          _0x246099(0x174) +
          _0x5924fd +
          _0x246099(0x13d)),
        _0x110db5[_0x246099(0xf3)] > 0x1
          ? (_0x3dce43 =
              _0x246099(0x125) + _0x23b214 + _0x246099(0x199) + _0x4b5753)
          : (_0x3dce43 =
              "<p\x20class=\x22message\x22>No\x20Need\x20To\x20Conversion\x20Steps</p>"),
        (result5[_0x246099(0xe1)] =
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22numbers\x22>" +
          _0x3b9e12[_0x246099(0x144)]("") +
          "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Octal\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>" +
          _0x20233a[_0x246099(0x144)]("") +
          _0x246099(0x11d) +
          _0x5924fd +
          _0x246099(0x180) +
          _0x20233a["join"]("") +
          _0x246099(0x174) +
          _0x5924fd +
          ")<sub>10</sub></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20Steps:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
          _0x3dce43 +
          "\x0a\x20\x20\x20\x20\x20\x20</div>");
    }
  } else result5["innerHTML"] = "";
}
input5[_0x35eb9a(0x105)](_0x35eb9a(0xea), octaToDecimal);
const input6 = document["getElementById"]("input6"),
  result6 = document[_0x35eb9a(0xf5)](_0x35eb9a(0x165));
function extractHexa(_0x4f1c69) {
  const _0xd1c987 = _0x35eb9a,
    _0x542b48 = [],
    _0x2e7892 = [],
    _0x222a33 = [],
    _0x50443f = [],
    _0x4af207 = [],
    _0x54b49e = [];
  if (_0x4f1c69 == 0x0)
    _0x542b48[_0xd1c987(0x15d)](0x0),
      _0x2e7892["push"](0x0),
      _0x4af207[_0xd1c987(0x15d)](0x0),
      _0x222a33[_0xd1c987(0x15d)](0x0),
      _0x50443f[_0xd1c987(0x15d)](0x0);
  else
    while (_0x4f1c69 > 0x0) {
      let _0x36b740 = _0x4f1c69 % 0x10;
      if (_0x36b740 < 0xa)
        _0x542b48[_0xd1c987(0x15d)](
          _0xd1c987(0x11c) + _0x36b740 + _0xd1c987(0x115)
        ),
          _0x2e7892[_0xd1c987(0x15d)](_0x36b740);
      else {
        let _0x56c986 = String[_0xd1c987(0xf8)](0x37 + _0x36b740);
        _0x542b48[_0xd1c987(0x15d)](
          _0xd1c987(0x1a7) + _0x56c986 + _0xd1c987(0x115)
        ),
          _0x2e7892[_0xd1c987(0x15d)](_0x56c986);
      }
      _0x222a33[_0xd1c987(0x15d)](_0x36b740),
        _0x50443f[_0xd1c987(0x15d)](_0x4f1c69),
        _0x4af207["push"](0x10),
        (_0x4f1c69 = Math["floor"](_0x4f1c69 / 0x10));
    }
  const _0x191ad6 = _0x2e7892[_0xd1c987(0x14b)]()[_0xd1c987(0x144)](""),
    _0x134f5f = _0x542b48[_0xd1c987(0x14b)]()["join"]("");
  return (
    _0x4af207[_0xd1c987(0x145)](),
    _0x222a33[_0xd1c987(0x145)](),
    _0x4af207[_0xd1c987(0x135)]((_0x52ca5c, _0x586828) =>
      _0x54b49e[_0xd1c987(0x15d)](_0x586828 + 0x1 + ".")
    ),
    _0x4af207[_0xd1c987(0x15d)](""),
    _0x222a33[_0xd1c987(0x15d)](""),
    _0x54b49e[_0xd1c987(0x15d)](""),
    {
      hexArrayReversed: _0x191ad6,
      hexArrayColorReversed: _0x134f5f,
      divData: _0x4af207,
      quoData: _0x50443f,
      remData: _0x222a33,
      dataCount: _0x54b49e,
    }
  );
}
function decimalToHexa() {
  const _0x18e535 = _0x35eb9a,
    _0x5b9135 = input6[_0x18e535(0xed)],
    _0x5460e1 = parseInt(Number(_0x5b9135));
  input6[_0x18e535(0xed)] = _0x5b9135;
  if (_0x5b9135[_0x18e535(0xf3)] > 0x0) {
    const {
        hexArrayReversed: _0x4deb0e,
        hexArrayColorReversed: _0x1b814d,
        divData: _0x1deca6,
        quoData: _0x5c878e,
        remData: _0x17108c,
        dataCount: _0x161ecf,
      } = extractHexa(_0x5460e1),
      _0x5b1a98 = _0x4deb0e["split"]("");
    _0x5b9135 == 0x0
      ? (input6["value"] = "0")
      : (input6[_0x18e535(0xed)] = _0x5460e1);
    let _0xc82cd6 = _0x18e535(0xf9);
    for (let _0x1b9fa2 = 0x0; _0x1b9fa2 < _0x17108c["length"]; _0x1b9fa2++) {
      _0xc82cd6 +=
        _0x18e535(0xdf) +
        _0x161ecf[_0x1b9fa2] +
        _0x18e535(0xcf) +
        _0x1deca6[_0x1b9fa2] +
        _0x18e535(0xcf) +
        _0x5c878e[_0x1b9fa2] +
        "</td>\x0a\x20\x20\x20\x20\x20\x20<td>" +
        _0x17108c[_0x1b9fa2] +
        _0x18e535(0x13a);
    }
    _0xc82cd6 += _0x18e535(0xe6);
    const _0x4cee1c = [];
    let _0x53fc04 = "",
      _0x30a99e = "",
      _0x4c6a4b = ![];
    _0x17108c[_0x18e535(0x14b)]()[_0x18e535(0x157)](),
      _0x17108c[_0x18e535(0x140)]((_0x255e9a, _0x30578) => {
        const _0x11a7da = _0x18e535;
        if ([0xa, 0xb, 0xc, 0xf, 0xe, 0xf][_0x11a7da(0x19d)](_0x255e9a)) {
          (_0x30a99e = _0x11a7da(0xe8)), (_0x4c6a4b = !![]);
          switch (_0x255e9a) {
            case 0xa:
              _0x4cee1c[_0x11a7da(0x15d)](
                _0x11a7da(0x1a0) + _0x255e9a + "=A</span>&nbsp;"
              );
              break;
            case 0xb:
              _0x4cee1c[_0x11a7da(0x15d)](
                "&nbsp;<span\x20class=\x22rem-no\x22>" +
                  _0x255e9a +
                  _0x11a7da(0x12b)
              );
              break;
            case 0xc:
              _0x4cee1c["push"](
                _0x11a7da(0x1a0) + _0x255e9a + _0x11a7da(0x120)
              );
              break;
            case 0xd:
              _0x4cee1c[_0x11a7da(0x15d)](
                "&nbsp;<span\x20class=\x22rem-no\x22>" +
                  _0x255e9a +
                  "=D</span>&nbsp;"
              );
              break;
            case 0xe:
              _0x4cee1c[_0x11a7da(0x15d)](
                _0x11a7da(0x1a0) + _0x255e9a + _0x11a7da(0x1a4)
              );
              break;
            case 0xf:
              _0x4cee1c[_0x11a7da(0x15d)](
                _0x11a7da(0x1a0) + _0x255e9a + _0x11a7da(0x13c)
              );
              break;
            default:
              _0x4cee1c[_0x11a7da(0x15d)]("\x20");
          }
        } else
          _0x4cee1c[_0x11a7da(0x15d)](
            _0x11a7da(0x168) + _0x255e9a + _0x11a7da(0xfd)
          );
        _0x30578 == _0x17108c[_0x11a7da(0xf3)] - 0x1 &&
          _0x4c6a4b &&
          _0x4cee1c[_0x11a7da(0x15d)](_0x11a7da(0x184));
      }),
      _0x5460e1 > 0xf
        ? (_0x53fc04 =
            _0x18e535(0x156) +
            _0xc82cd6 +
            _0x18e535(0x183) +
            _0x5c878e[_0x5c878e[_0x18e535(0xf3)] - 0x1] +
            "</b>\x20and\x20remainder\x20" +
            _0x4cee1c["join"]("") +
            _0x18e535(0x12e) +
            _0x4deb0e +
            _0x18e535(0x19f))
        : (_0x53fc04 = _0x18e535(0xd4)),
      (result6["innerHTML"] =
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22numbers\x22>" +
        _0x1b814d +
        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Decimal\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>" +
        _0x5460e1 +
        _0x18e535(0x158) +
        _0x4deb0e +
        _0x18e535(0x148) +
        _0x30a99e +
        _0x18e535(0x167) +
        _0x53fc04 +
        _0x18e535(0x171));
  } else result6[_0x18e535(0xe1)] = "";
}
input6["addEventListener"]("input", decimalToHexa);
const input7 = document[_0x35eb9a(0xf5)](_0x35eb9a(0xec)),
  result7 = document[_0x35eb9a(0xf5)]("result7");
function extractHexaDecimal(_0x358637) {
  const _0x829a80 = _0x35eb9a;
  let _0x6074de = 0x0;
  const _0x516f52 = [];
  for (
    let _0x3896ff = _0x358637[_0x829a80(0xf3)] - 0x1;
    _0x3896ff >= 0x0;
    _0x3896ff--
  ) {
    const _0x1657ef = parseInt(
        _0x358637[_0x358637["length"] - 0x1 - _0x3896ff],
        0x10
      ),
      _0x4f95fe = _0x1657ef * Math[_0x829a80(0x16c)](0x10, _0x3896ff);
    (_0x6074de += _0x4f95fe), _0x516f52["push"](_0x4f95fe);
  }
  let _0x1461df = [];
  return (
    [_0x6074de]
      [_0x829a80(0x144)]("")
      [_0x829a80(0x164)]("")
      [_0x829a80(0x11e)]((_0x3bb6b5) => {
        const _0xae743e = _0x829a80;
        _0x3bb6b5 == 0x0
          ? _0x1461df[_0xae743e(0x15d)](
              _0xae743e(0x1a7) + _0x3bb6b5 + _0xae743e(0x115)
            )
          : _0x1461df[_0xae743e(0x15d)](
              _0xae743e(0x11c) + _0x3bb6b5 + _0xae743e(0x115)
            );
      }),
    { deciNum: _0x6074de, coloredDeciNum: _0x1461df, calData: _0x516f52 }
  );
}
function HexaToDecimal() {
  const _0x5c8e55 = _0x35eb9a,
    _0x9ada17 = input7[_0x5c8e55(0xed)][_0x5c8e55(0x196)](),
    _0x140aa5 = _0x9ada17[_0x5c8e55(0x18f)]()
      [_0x5c8e55(0x164)]("")
      [_0x5c8e55(0x135)]((_0x59cdce) =>
        /[0-9A-F]/[_0x5c8e55(0x18a)](_0x59cdce)
      );
  _0x140aa5[_0x5c8e55(0xf3)] >= 0x2 &&
    _0x140aa5[0x0] === "0" &&
    _0x140aa5[_0x5c8e55(0x157)]();
  input7[_0x5c8e55(0xed)] = _0x140aa5[_0x5c8e55(0x144)]("");
  if (_0x140aa5[_0x5c8e55(0xf3)] > 0x0) {
    const _0x19418f = extractHexaDecimal(_0x140aa5),
      _0x572dd6 = _0x19418f[_0x5c8e55(0x17b)],
      _0x1b2573 = _0x19418f[_0x5c8e55(0xe3)],
      _0x1cb2a7 = _0x19418f["calData"],
      _0x393741 = _0x140aa5[_0x5c8e55(0x16a)](
        (_0x4df26b) => extractHexaDecimal(_0x4df26b)[_0x5c8e55(0xe3)]
      )["reverse"]();
    let _0x742279 = "",
      _0x56352e = "";
    _0x393741["find"]((_0x93100) => {
      const _0x9a46c7 = _0x5c8e55;
      [0xa, 0xb, 0xc, 0xd, 0xe, 0xf][_0x9a46c7(0x19d)](_0x93100) &&
        (_0x742279 = _0x9a46c7(0x162));
    });
    let _0x4b602e =
        "<table><tr><th>Sno</th><th>Conversion</th><th>Power</th></tr>",
      _0x4fef25 = _0x5c8e55(0x173) + _0x140aa5["join"]("") + _0x5c8e55(0x127);
    for (
      let _0x1270a9 = _0x393741[_0x5c8e55(0xf3)] - 0x1;
      _0x1270a9 >= 0x0;
      _0x1270a9--
    ) {
      (_0x4b602e +=
        "<tr><td>" +
        (_0x393741[_0x5c8e55(0xf3)] - _0x1270a9) +
        ".</td><td><span>" +
        _0x393741[_0x1270a9] +
        "</span>\x20x\x20<span>16<sup>" +
        _0x1270a9 +
        _0x5c8e55(0xd7) +
        _0x1270a9 +
        "</td></tr>"),
        (_0x4fef25 +=
          _0x5c8e55(0xd3) +
          _0x393741[_0x1270a9] +
          "</span>\x20x\x20<span>16<sup>" +
          _0x1270a9 +
          _0x5c8e55(0x169)),
        _0x1270a9 !== 0x0 && (_0x4fef25 += "\x20+\x20"),
        _0x1270a9 === 0x0 && (_0x4fef25 += _0x5c8e55(0x150));
    }
    for (
      let _0x23f8f0 = 0x0;
      _0x23f8f0 < _0x1cb2a7[_0x5c8e55(0xf3)];
      _0x23f8f0++
    ) {
      (_0x4fef25 += _0x5c8e55(0x139) + _0x1cb2a7[_0x23f8f0] + _0x5c8e55(0x115)),
        _0x23f8f0 !== _0x1cb2a7[_0x5c8e55(0xf3)] - 0x1 &&
          (_0x4fef25 += "\x20+\x20");
    }
    (_0x4b602e += "</table>"),
      (_0x4fef25 +=
        "</p><p\x20class=\x22cal-2\x22><b>" +
        _0x1b2573 +
        "</b></p>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-3\x22>(" +
        _0x140aa5["join"]("") +
        _0x5c8e55(0x198) +
        _0x1b2573 +
        _0x5c8e55(0x13d)),
      _0x9ada17["length"] > 0x1
        ? (_0x56352e =
            _0x5c8e55(0xc7) + _0x4b602e + _0x5c8e55(0x154) + _0x4fef25)
        : (_0x56352e = _0x5c8e55(0x14a)),
      (result7["innerHTML"] =
        _0x5c8e55(0x185) +
        _0x572dd6[_0x5c8e55(0x144)]("") +
        _0x5c8e55(0x119) +
        _0x140aa5["join"]("") +
        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x20pad\x22>In\x20Decimal\x20Conversion:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>" +
        _0x1b2573 +
        "</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22base\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>(" +
        _0x140aa5[_0x5c8e55(0x144)]("") +
        ")<sub>16</sub>\x20=\x20(" +
        _0x1b2573 +
        _0x5c8e55(0xf0) +
        _0x742279 +
        _0x5c8e55(0x167) +
        _0x56352e +
        "\x0a\x20\x20\x20\x20\x20\x20</div>");
  } else result7[_0x5c8e55(0xe1)] = "";
}
input7[_0x35eb9a(0x105)](_0x35eb9a(0xea), HexaToDecimal);
const input8 = document["getElementById"](_0x35eb9a(0x18c)),
  result8 = document[_0x35eb9a(0xf5)](_0x35eb9a(0xca));
function extractOctaToHexa(_0xd6ecce) {
  const _0x1b09e4 = _0x35eb9a,
    _0x148dc9 = extractOctaDecimal(_0xd6ecce)[_0x1b09e4(0xe3)],
    _0x4fd54d = extractHexa(_0x148dc9)[_0x1b09e4(0x17c)],
    _0x239c0e = extractHexa(_0x148dc9)[_0x1b09e4(0xc9)];
  return { coloredHexValue: _0x4fd54d, hexValue: _0x239c0e };
}
function octaToHexa() {
  const _0x34f454 = _0x35eb9a,
    _0x1e0082 = input8[_0x34f454(0xed)],
    _0x5cf7b4 = _0x1e0082[_0x34f454(0x164)]("")[_0x34f454(0x135)](
      (_0x57fbbf) => _0x57fbbf >= "0" && _0x57fbbf <= "7"
    );
  _0x5cf7b4[_0x34f454(0xf3)] >= 0x2 &&
    _0x5cf7b4[0x0] == 0x0 &&
    _0x5cf7b4[_0x34f454(0x157)]();
  input8["value"] = _0x5cf7b4[_0x34f454(0x144)]("");
  const { coloredHexValue: _0x5b265d, hexValue: _0x54aa5f } =
      extractOctaToHexa(_0x5cf7b4),
    _0x1b015b = [_0x54aa5f][_0x34f454(0x144)]("")[_0x34f454(0x164)](""),
    _0x3d9dbc = formateNumsSpace(_0x5cf7b4)[_0x34f454(0x153)],
    _0x236146 = _0x5cf7b4[_0x34f454(0x16a)](
      (_0x40e01d) => extractBinary(_0x40e01d)[_0x34f454(0x178)]
    ),
    _0x11e2bc = _0x236146[_0x34f454(0x16a)]((_0x545093) =>
      formatZero(_0x545093, 0x3)[_0x34f454(0x147)][_0x34f454(0x144)]("")
    ),
    _0x9dda7f = _0x236146["map"]((_0x568978) =>
      formatZero(_0x568978, 0x3)[_0x34f454(0x1a1)][_0x34f454(0x144)]("")
    ),
    _0x23133f = formateNumsSpace(_0x11e2bc)[_0x34f454(0x153)],
    _0x177666 = formatZero(_0x9dda7f[_0x34f454(0x144)](""), 0x4),
    { numsDecimalfill: _0x4bd8ab, numsDecimalfillSpace: _0x13e29c } =
      formateNumsSpace(_0x1b015b);
  let _0xe5d624 = "",
    _0x2b9146 = "";
  _0x1b015b[_0x34f454(0x140)]((_0x5b8a0b) => {
    const _0x10c7e1 = _0x34f454;
    ["A", "B", "C", "D", "E", "F"][_0x10c7e1(0x19d)](_0x5b8a0b)
      ? ((_0xe5d624 = _0x10c7e1(0xf1)),
        _0x1e0082[_0x10c7e1(0xf3)] > 0x2
          ? (_0x2b9146 =
              _0x10c7e1(0x1aa) +
              _0x5cf7b4[_0x10c7e1(0x144)]("") +
              "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-con\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>2.\x20Split\x20Octal\x20Digits:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal\x22>" +
              _0x3d9dbc +
              _0x10c7e1(0xde) +
              _0x23133f +
              _0x10c7e1(0x136) +
              _0x9dda7f["join"]("") +
              _0x10c7e1(0x18e) +
              _0x177666[_0x10c7e1(0x147)]["join"]("") +
              _0x10c7e1(0x188) +
              _0x4bd8ab +
              _0x10c7e1(0x14d) +
              _0x13e29c +
              _0x10c7e1(0x189) +
              _0x54aa5f +
              "</b></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>9.\x20Conversion\x20in\x20base:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-3\x22>(" +
              _0x5cf7b4["join"]("") +
              _0x10c7e1(0x174) +
              _0x54aa5f +
              _0x10c7e1(0x11b))
          : (_0x2b9146 =
              _0x10c7e1(0x1a2) +
              _0x5cf7b4[_0x10c7e1(0x144)]("") +
              _0x10c7e1(0x182) +
              _0x3d9dbc +
              "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>3.\x20Convert\x20Each\x20into\x20Binary\x20Digits\x20Sets\x20of\x20Three,\x20Add\x20Zero\x20if\x20Not\x20in\x20Sets\x20of\x20Three:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal\x22>" +
              _0x23133f +
              _0x10c7e1(0x136) +
              _0x9dda7f["join"]("") +
              _0x10c7e1(0x18e) +
              _0x177666[_0x10c7e1(0x147)][_0x10c7e1(0x144)]("") +
              _0x10c7e1(0x188) +
              _0x4bd8ab +
              _0x10c7e1(0x14d) +
              _0x13e29c +
              _0x10c7e1(0xfb) +
              _0x5cf7b4[_0x10c7e1(0x144)]("") +
              ")<sub>8</sub>\x20=\x20(" +
              _0x54aa5f +
              _0x10c7e1(0x11b)))
      : _0x1e0082[_0x10c7e1(0xf3)] > 0x1
      ? _0x1e0082 > 0xb
        ? (_0x2b9146 =
            _0x10c7e1(0x17a) +
            _0x5cf7b4["join"]("") +
            _0x10c7e1(0xd2) +
            _0x3d9dbc +
            _0x10c7e1(0x149) +
            _0x23133f +
            _0x10c7e1(0x138) +
            _0x9dda7f[_0x10c7e1(0x144)]("") +
            _0x10c7e1(0x1a3) +
            _0x177666["newformattedHtml"][_0x10c7e1(0x144)]("") +
            "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>6.\x20Convert\x20Each\x20Group\x20to\x20Decimal:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-2\x22>" +
            _0x4bd8ab +
            _0x10c7e1(0xda) +
            _0x54aa5f +
            _0x10c7e1(0x113) +
            _0x5cf7b4[_0x10c7e1(0x144)]("") +
            _0x10c7e1(0x174) +
            _0x54aa5f +
            ")<sub>16</sub></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20")
        : (_0x2b9146 =
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22solve\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num-head\x22>1.\x20Octal\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num\x22>" +
            _0x5cf7b4["join"]("") +
            _0x10c7e1(0xd2) +
            _0x3d9dbc +
            _0x10c7e1(0x149) +
            _0x23133f +
            _0x10c7e1(0x138) +
            _0x9dda7f["join"]("") +
            _0x10c7e1(0x1a3) +
            _0x177666[_0x10c7e1(0x147)][_0x10c7e1(0x144)]("") +
            _0x10c7e1(0x1ab) +
            _0x4bd8ab +
            _0x10c7e1(0xd0) +
            _0x5cf7b4[_0x10c7e1(0x144)]("") +
            _0x10c7e1(0x174) +
            _0x54aa5f +
            _0x10c7e1(0xe5))
      : (_0x2b9146 = _0x10c7e1(0x143));
  }),
    _0x1e0082[_0x34f454(0xf3)] > 0x0
      ? (_0x1e0082 >= 0x8 && (result8[_0x34f454(0xe1)] = _0x34f454(0x101)),
        _0x5cf7b4[_0x34f454(0xf3)] !== 0x0 &&
          (result8[_0x34f454(0xe1)] =
            "\x0a\x20\x20\x20\x20<div\x20class=\x22numbers\x22>" +
            _0x5b265d +
            _0x34f454(0x104) +
            _0x5cf7b4["join"]("") +
            _0x34f454(0xce) +
            _0x54aa5f +
            _0x34f454(0x117) +
            _0x5cf7b4[_0x34f454(0x144)]("") +
            ")<sub>8</sub>\x20=\x20(" +
            _0x54aa5f +
            _0x34f454(0x100) +
            _0xe5d624 +
            "\x0a\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20Steps:</p>\x0a\x20\x20\x20\x20\x20\x20" +
            _0x2b9146 +
            _0x34f454(0x13f)))
      : (result8[_0x34f454(0xe1)] = "");
}
input8["addEventListener"](_0x35eb9a(0xea), octaToHexa);
const input9 = document[_0x35eb9a(0xf5)](_0x35eb9a(0x11a)),
  result9 = document[_0x35eb9a(0xf5)](_0x35eb9a(0x190));
function extractHexaToOcta(_0x4a7797) {
  const _0x2b7845 = _0x35eb9a,
    _0x581d01 = extractHexaDecimal(_0x4a7797)[_0x2b7845(0xe3)],
    _0x32544b = extractOcta(_0x581d01)[_0x2b7845(0x109)],
    _0x589313 = extractOcta(_0x581d01)[_0x2b7845(0x17f)];
  return { octReversed: _0x32544b, octReversedColor: _0x589313 };
}
function HexaToOcta() {
  const _0x581217 = _0x35eb9a,
    _0x122290 = input9[_0x581217(0xed)],
    _0x213827 = _0x122290[_0x581217(0x151)]()
      ["toUpperCase"]()
      [_0x581217(0x164)]("")
      ["filter"]((_0x4c4a1e) => /[0-9A-Fa-f]/[_0x581217(0x18a)](_0x4c4a1e));
  _0x213827[_0x581217(0xf3)] >= 0x2 &&
    _0x213827[0x0] == 0x0 &&
    _0x213827[_0x581217(0x157)]();
  input9["value"] = _0x213827[_0x581217(0x144)]("");
  const { octReversed: _0x57b51b, octReversedColor: _0x4e1e02 } =
      extractHexaToOcta(_0x213827),
    _0x184176 = [_0x57b51b][_0x581217(0x144)]("")[_0x581217(0x164)](""),
    _0x1eb3c1 = formateNumsSpace(_0x213827)[_0x581217(0x153)],
    _0x182a83 = [
      extractHexaDecimal(_0x213827[_0x581217(0x144)](""))[_0x581217(0xe3)],
    ][_0x581217(0xc8)](""),
    _0x403ef8 = _0x182a83["map"](
      (_0x422fa8) => extractBinary(_0x422fa8)[_0x581217(0x178)]
    ),
    _0x11b04e = _0x403ef8[_0x581217(0x16a)]((_0x285653) =>
      formatZero(_0x285653, 0x4)["newformattedHtml"][_0x581217(0x144)]("")
    ),
    _0x1d1696 = _0x403ef8[_0x581217(0x16a)]((_0x48a48e) =>
      formatZero(_0x48a48e, 0x4)[_0x581217(0x1a1)][_0x581217(0x144)]("")
    ),
    _0x32f97a = formateNumsSpace(_0x11b04e)[_0x581217(0x153)],
    _0x390ea7 = formatZero(_0x1d1696["join"](""), 0x3),
    { numsDecimalfillSpace: _0x3d4dbe } = formateNumsSpace(_0x184176);
  let _0x577d7a = "",
    _0x219348 = "";
  _0x213827[_0x581217(0x140)]((_0x4e78cc) => {
    const _0x10c960 = _0x581217;
    ["A", "B", "C", "D", "E", "F"][_0x10c960(0x19d)](_0x4e78cc) &&
      (_0x577d7a =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Chart:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><th>Hexadecimal</th><th>In\x20Binary</th><th>In\x20Decimal</th><th>In\x20Octal</th></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>A</td><td>1010</td><td>10</td><td>12</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>B</td><td>1011</td><td>11</td><td>13</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>C</td><td>1100</td><td>12</td><td>14</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>D</td><td>1101</td><td>13</td><td>15</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>E</td><td>1110</td><td>14</td><td>16</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>F</td><td>1111</td><td>15</td><td>17</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>");
  });
  if (_0x182a83[_0x581217(0x144)]("") > 0xf)
    _0x219348 =
      _0x581217(0x161) +
      _0x213827["join"]("") +
      _0x581217(0x102) +
      _0x1eb3c1 +
      _0x581217(0xee) +
      _0x32f97a +
      _0x581217(0x192) +
      _0x1d1696[_0x581217(0x144)]("") +
      _0x581217(0xef) +
      _0x390ea7[_0x581217(0x147)][_0x581217(0x144)]("") +
      _0x581217(0x112) +
      _0x3d4dbe +
      _0x581217(0x146) +
      _0x57b51b +
      "</b></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>8.\x20Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-3\x22>(" +
      _0x213827[_0x581217(0x144)]("") +
      _0x581217(0x198) +
      _0x57b51b +
      _0x581217(0x194);
  else
    _0x182a83[_0x581217(0x144)]() > 0x7
      ? (_0x219348 =
          "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22solve\x22>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num-head\x22>1.\x20Hexadecimal\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num\x22>" +
          _0x213827[_0x581217(0x144)]("") +
          _0x581217(0xdb) +
          _0x32f97a +
          _0x581217(0x179) +
          _0x390ea7[_0x581217(0x147)][_0x581217(0x144)]("") +
          _0x581217(0x166) +
          _0x3d4dbe +
          _0x581217(0xdd) +
          _0x57b51b +
          "</b></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>6.\x20Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-3\x22>(" +
          _0x213827[_0x581217(0x144)]("") +
          _0x581217(0x198) +
          _0x57b51b +
          _0x581217(0x194))
      : (_0x219348 = _0x581217(0x152));
  _0x122290["length"] > 0x0
    ? (_0x122290 >= 0x10 &&
        (result8[_0x581217(0xe1)] =
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22message\x22>Enter\x20number\x20combination\x20less\x20than\x2016:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20"),
      _0x213827[_0x581217(0xf3)] !== 0x0 &&
        (result9["innerHTML"] =
          _0x581217(0x106) +
          _0x4e1e02 +
          _0x581217(0xfa) +
          _0x213827["join"]("") +
          _0x581217(0xe4) +
          _0x57b51b +
          "</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20<div\x20class=\x22base\x22>\x0a\x20\x20\x20\x20<p>(" +
          _0x213827[_0x581217(0x144)]("") +
          _0x581217(0x198) +
          _0x57b51b +
          _0x581217(0x134) +
          _0x577d7a +
          _0x581217(0x10e) +
          _0x219348 +
          _0x581217(0xd6)))
    : (result9[_0x581217(0xe1)] = "");
}
function _0x4470(_0x3864b0, _0x58a901) {
  const _0x1988d0 = _0x1988();
  return (
    (_0x4470 = function (_0x4470bf, _0x1d5d21) {
      _0x4470bf = _0x4470bf - 0xc7;
      let _0x2b14bf = _0x1988d0[_0x4470bf];
      return _0x2b14bf;
    }),
    _0x4470(_0x3864b0, _0x58a901)
  );
}
input9[_0x35eb9a(0x105)](_0x35eb9a(0xea), HexaToOcta);
const input10 = document[_0x35eb9a(0xf5)](_0x35eb9a(0x107)),
  result10 = document[_0x35eb9a(0xf5)](_0x35eb9a(0x1a8));
function binaryToOcta() {
  const _0x7c8064 = _0x35eb9a,
    _0xc9f790 = input10["value"];
  let _0x3bec6b = _0xc9f790["split"]("")[_0x7c8064(0x135)](
    (_0xf2d0a3) => _0xf2d0a3 == "0" || _0xf2d0a3 == "1"
  );
  _0x3bec6b[_0x7c8064(0xf3)] >= 0x2 &&
    _0x3bec6b[0x0] == 0x0 &&
    _0x3bec6b[_0x7c8064(0x157)]();
  input10[_0x7c8064(0xed)] = _0x3bec6b[_0x7c8064(0x144)]("");
  if (_0xc9f790[_0x7c8064(0xf3)] > 0x0) {
    _0xc9f790 >= 0x2 && (result10[_0x7c8064(0xe1)] = _0x7c8064(0xe9));
    if (_0x3bec6b[_0x7c8064(0xf3)] !== 0x0) {
      const _0x4d7856 = extractDecimal(_0x3bec6b)[_0x7c8064(0xe3)],
        { octArrayColorReversed: _0x40d15d, octArrayReversed: _0x16b773 } =
          extractOcta(_0x4d7856),
        _0x2e5aeb = [_0x16b773][_0x7c8064(0x144)]("")[_0x7c8064(0x164)](""),
        _0x5a6f55 = _0x3bec6b[_0x7c8064(0x144)](""),
        _0x27bda4 = formatZero(_0x5a6f55, 0x3)["newformattedHtml"],
        { numsDecimalfillSpace: _0x1e6048 } = formateNumsSpace(_0x2e5aeb);
      let _0x27b2fd = "";
      _0xc9f790[_0x7c8064(0xf3)] > 0x3
        ? (_0x27b2fd =
            _0x7c8064(0x159) +
            _0x3bec6b[_0x7c8064(0x144)]("") +
            _0x7c8064(0x18d) +
            _0x27bda4[_0x7c8064(0x144)]("") +
            _0x7c8064(0x15f) +
            _0x1e6048 +
            "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>4.\x20Now\x20Combine\x20the\x20Decimal\x20Digits\x20to\x20Get\x20Octal\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-2\x22><b>" +
            _0x2e5aeb[_0x7c8064(0x144)]("") +
            _0x7c8064(0x133) +
            _0x3bec6b[_0x7c8064(0x144)]("") +
            ")<sub>2</sub>\x20=\x20(" +
            _0x16b773 +
            _0x7c8064(0x176))
        : (_0x27b2fd = _0x7c8064(0x14a)),
        (result10[_0x7c8064(0xe1)] =
          _0x7c8064(0x10d) +
          _0x40d15d +
          _0x7c8064(0x124) +
          _0x3bec6b[_0x7c8064(0x144)]("") +
          _0x7c8064(0x13e) +
          _0x16b773 +
          _0x7c8064(0x1a9) +
          _0x3bec6b["join"]("") +
          ")<sub>2</sub>\x20=\x20(" +
          _0x16b773 +
          ")<sub>8</sub></p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20Steps:</p>\x0a\x20\x20\x20\x20\x20\x20" +
          _0x27b2fd +
          "\x0a\x20\x20\x20\x20</div>");
    }
  } else result10[_0x7c8064(0xe1)] = "";
}
input10[_0x35eb9a(0x105)](_0x35eb9a(0xea), binaryToOcta);
const input11 = document["getElementById"](_0x35eb9a(0x19e)),
  result11 = document[_0x35eb9a(0xf5)]("result11");
function octaToBinary() {
  const _0x4b6657 = _0x35eb9a,
    _0x4ad26b = input11[_0x4b6657(0xed)],
    _0x201990 = _0x4ad26b[_0x4b6657(0x164)]("")[_0x4b6657(0x135)](
      (_0x4cbf94) => _0x4cbf94 >= "0" && _0x4cbf94 <= "7"
    );
  _0x201990[_0x4b6657(0xf3)] >= 0x2 &&
    _0x201990[0x0] == 0x0 &&
    _0x201990["shift"]();
  input11[_0x4b6657(0xed)] = _0x201990[_0x4b6657(0x144)]("");
  if (_0x4ad26b[_0x4b6657(0xf3)] > 0x0) {
    _0x4ad26b >= 0x8 && (result11[_0x4b6657(0xe1)] = _0x4b6657(0x141));
    if (_0x201990["length"] !== 0x0) {
      const _0x1a760f = extractOctaDecimal(_0x201990)["deciNum"],
        { binArrayReversed: _0x2de2cb, binArrayColorReversed: _0x23ff64 } =
          extractBinary(_0x1a760f),
        _0x29cba6 = formateNumsSpace(_0x201990)[_0x4b6657(0x153)],
        _0xa2e769 = _0x201990[_0x4b6657(0x16a)](
          (_0xe3d8ab) => extractBinary(_0xe3d8ab)[_0x4b6657(0x178)]
        )[_0x4b6657(0x16a)]((_0x398ca7) =>
          formatZero(_0x398ca7, 0x3)["newformattedHtml"][_0x4b6657(0x144)]("")
        ),
        _0x403725 = formateNumsSpace(_0xa2e769)[_0x4b6657(0x153)];
      let _0x5c1557 = "";
      _0x4ad26b[_0x4b6657(0xf3)] > 0x1
        ? (_0x5c1557 =
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22solve\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num-head\x22>1.\x20Octal\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num\x22>" +
            _0x201990[_0x4b6657(0x144)]("") +
            _0x4b6657(0x18b) +
            _0x29cba6 +
            _0x4b6657(0xd9) +
            _0x403725 +
            _0x4b6657(0x15c) +
            _0x2de2cb +
            "</b></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>5.\x20Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-3\x22>(" +
            _0x201990["join"]("") +
            _0x4b6657(0x174) +
            _0x2de2cb +
            _0x4b6657(0x175))
        : (_0x5c1557 = _0x4b6657(0xfe)),
        (result11[_0x4b6657(0xe1)] =
          _0x4b6657(0x187) +
          _0x23ff64 +
          "</p>\x0a\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Hexa\x20decimal:</p>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>" +
          _0x201990[_0x4b6657(0x144)]("") +
          _0x4b6657(0x160) +
          _0x2de2cb +
          _0x4b6657(0x1ac) +
          _0x201990[_0x4b6657(0x144)]("") +
          ")<sub>8</sub>\x20=\x20(" +
          _0x2de2cb +
          ")<sub>2</sub></p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20Steps:</p>\x0a\x20\x20\x20\x20\x20\x20" +
          _0x5c1557 +
          "\x0a\x20\x20\x20\x20</div>");
    }
  } else result11[_0x4b6657(0xe1)] = "";
}
input11[_0x35eb9a(0x105)]("input", octaToBinary);
const input12 = document[_0x35eb9a(0xf5)](_0x35eb9a(0xcc)),
  result12 = document[_0x35eb9a(0xf5)](_0x35eb9a(0x191));
function binaryToHexa() {
  const _0x3df21c = _0x35eb9a,
    _0xb35c69 = input12[_0x3df21c(0xed)];
  let _0x2dde2a = _0xb35c69["split"]("")[_0x3df21c(0x135)](
    (_0x2cc08f) => _0x2cc08f == "0" || _0x2cc08f == "1"
  );
  _0x2dde2a[_0x3df21c(0xf3)] >= 0x2 &&
    _0x2dde2a[0x0] == 0x0 &&
    _0x2dde2a["shift"]();
  input12[_0x3df21c(0xed)] = _0x2dde2a[_0x3df21c(0x144)]("");
  if (_0xb35c69[_0x3df21c(0xf3)] > 0x0) {
    _0xb35c69 >= 0x2 && (result12[_0x3df21c(0xe1)] = _0x3df21c(0xe9));
    if (_0x2dde2a[_0x3df21c(0xf3)] !== 0x0) {
      const _0x528994 = extractDecimal(_0x2dde2a)["deciNum"],
        { hexArrayColorReversed: _0x31066d, hexArrayReversed: _0x595a62 } =
          extractHexa(_0x528994),
        _0x1743d9 = [_0x595a62]["join"]("")[_0x3df21c(0x164)](""),
        _0x45be9e = _0x2dde2a["join"](""),
        _0x58cc85 = formatZero(_0x45be9e, 0x4)[_0x3df21c(0x147)],
        { numsDecimalfill: _0x345daf, numsDecimalfillSpace: _0x5be6e3 } =
          formateNumsSpace(_0x1743d9);
      let _0x4191c0 = "",
        _0x29813a = "";
      _0x1743d9["find"]((_0x4e4d37) => {
        const _0x18f70f = _0x3df21c;
        ["A", "B", "C", "D", "E", "F"][_0x18f70f(0x19d)](_0x4e4d37)
          ? ((_0x4191c0 = _0x18f70f(0x17d)),
            _0xb35c69[_0x18f70f(0xf3)] > 0x4
              ? (_0x29813a =
                  "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22solve\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num-head\x22>1.\x20Binary\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num\x22>" +
                  _0x2dde2a[_0x18f70f(0x144)]("") +
                  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-con\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>2.\x20Group\x20Binary\x20Digits\x20into\x20Sets\x20of\x20Four:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal\x22>" +
                  _0x58cc85[_0x18f70f(0x144)]("") +
                  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>3.\x20Convert\x20Each\x20Binary\x20Group\x20to\x20Decimal:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-2\x22>" +
                  _0x345daf +
                  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>4.\x20Replace\x20Decimal\x20Digits,\x20if\x20Greater\x20Than\x2010\x20to\x20its\x20Hexadecimal\x20Character\x20Follow\x20Chart\x20Above:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-2\x22>" +
                  _0x5be6e3 +
                  _0x18f70f(0x1a5) +
                  _0x1743d9[_0x18f70f(0x144)]("") +
                  _0x18f70f(0x15e) +
                  _0x2dde2a[_0x18f70f(0x144)]("") +
                  ")<sub>2</sub>\x20=\x20(" +
                  _0x595a62 +
                  _0x18f70f(0x116))
              : (_0x29813a = _0x18f70f(0xd4)))
          : _0xb35c69[_0x18f70f(0xf3)] > 0x4
          ? (_0x29813a =
              "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22solve\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num-head\x22>1.\x20Binary\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num\x22>" +
              _0x2dde2a["join"]("") +
              _0x18f70f(0x12c) +
              _0x58cc85["join"]("") +
              _0x18f70f(0xf4) +
              _0x5be6e3 +
              _0x18f70f(0x155) +
              _0x1743d9[_0x18f70f(0x144)]("") +
              "</b></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>6.\x20Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-3\x22>(" +
              _0x2dde2a[_0x18f70f(0x144)]("") +
              _0x18f70f(0xe7) +
              _0x595a62 +
              ")<sub>16</sub></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>")
          : (_0x29813a = _0x18f70f(0xd4));
      }),
        (result12[_0x3df21c(0xe1)] =
          _0x3df21c(0x10d) +
          _0x31066d +
          _0x3df21c(0x126) +
          _0x2dde2a[_0x3df21c(0x144)]("") +
          "</div>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x20pad\x22>In\x20hex\x20Conversion:</p>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>\x20" +
          _0x595a62 +
          _0x3df21c(0x1a9) +
          _0x2dde2a[_0x3df21c(0x144)]("") +
          _0x3df21c(0xe7) +
          _0x595a62 +
          _0x3df21c(0x177) +
          _0x4191c0 +
          _0x3df21c(0xf6) +
          _0x29813a +
          _0x3df21c(0xd6));
    }
  } else result12["innerHTML"] = "";
}
input12["addEventListener"](_0x35eb9a(0xea), binaryToHexa);
const input15 = document[_0x35eb9a(0xf5)](_0x35eb9a(0x15b)),
  result15 = document[_0x35eb9a(0xf5)]("result15");
function _0x1988() {
  const _0x4dac7e = [
    "value",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>3.\x20Convert\x20Each\x20into\x20Binary\x20Digits\x20Sets\x20of\x20Four,\x20Add\x20Zero\x20if\x20Not\x20in\x20Sets\x20of\x20Four:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal\x22>",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>5.\x20Group\x20Binary\x20into\x20Sets\x20of\x20Three:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal\x22>",
    ")<sub>10</sub></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Chart:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><th>Decimal</th><th>In\x20Hexadecimal</th><th>Octal</th><th>In\x20Hexdecimal</th></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>10</td><td>A</td><td>12</td><td>A</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>11</td><td>B</td><td>13</td><td>B</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>12</td><td>C</td><td>14</td><td>C</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>13</td><td>D</td><td>15</td><td>D</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>14</td><td>E</td><td>16</td><td>E</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>15</td><td>F</td><td>17</td><td>F</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>3.\x20Write\x20Down\x20Decimal\x20Digit\x20Same\x20as\x20Above,\x20Replace\x20Only\x20Hexadecimal\x20Charater\x20to\x20its\x20Decimal\x20Digits\x20Follow\x20Chart\x20Above:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal\x22>",
    "length",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>4.\x20Convert\x20Each\x20Binary\x20Group\x20to\x20Decimal:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-2\x22>",
    "getElementById",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20Steps:</p>\x0a\x20\x20\x20\x20\x20\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>5.\x20Now\x20Combine\x20the\x20Binary\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-2\x22><b>",
    "fromCharCode",
    "<table><tr><th>Step</th><th>Divisor</th><th>Quotient</th><th>Remainder</th></tr>",
    "</div>\x0a\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Hexadecimal\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>8.\x20Conversion\x20in\x20base:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-3\x22>(",
    "<span\x20class=\x22g-s\x22>",
    "</span>&nbsp;",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22message\x22>No\x20Need\x20To\x20Conversion\x20Steps</p>",
    "<table><tr><th>Step</th><th>Conversion</th><th>Power</th></tr>",
    ")<sub>16</sub></p>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22message\x22>Enter\x20number\x20combination\x20less\x20than\x208:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-con\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>2.\x20Split\x20Hexadecimal\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal\x22>",
    ")<sub>10</sub></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20Steps:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "</div>\x0a\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Octal\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    "addEventListener",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22numbers\x22>",
    "input10",
    ")<sub>2</sub></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "octArrayReversed",
    ")<sub>2</sub></p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22message\x22>Enter\x20number\x20combination\x20of\x200\x20and\x201:</p>\x0a\x20\x20\x20\x20\x20\x20</div>",
    "426030SZIbWW",
    "\x0a\x20\x20\x20\x20<p\x20class=\x22numbers\x22>",
    "\x0a\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20Steps:</p>\x0a\x20\x20\x20\x20\x20\x20",
    ")<sub>2</sub></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20Steps:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x20pad\x22>In\x20Binary\x20Conversion:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    "\x20=\x20&nbsp;<span>",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>6.\x20Convert\x20Each\x20Binary\x20Group\x20to\x20Decimal:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-2\x22>",
    "</b></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>9.\x20Conversion\x20in\x20base:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-3\x22>(",
    "</p>\x0a\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Hexa\x20decimal:</p>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    "</span>",
    ")<sub>16</sub></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20<div\x20class=\x22base\x22>\x0a\x20\x20\x20\x20<p>(",
    ")<sub>8</sub></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20Steps:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</p>\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Hexadecimal:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    "input9",
    ")<sub>16</sub></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20",
    "<span\x20class=\x22one-c\x22>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x20pad\x22>In\x20Decimal\x20Conversion:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    "forEach",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22solve\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num-head\x22>1.\x20Hexadecimal\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num\x22>",
    "=C</span>&nbsp;",
    "input3",
    "result2",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Decimal\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    "</p>\x0a\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Binary\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    "\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</p>\x0a\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Binary\x20Number:</p>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    "</p><div\x20class=\x22cal-con\x22><p\x20class=\x22cal\x22>",
    "154jwabek",
    "102920hdtRlE",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Chart:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><th>Hex\x20Value</th><th>In\x20Binary</th><th>In\x20Decimal</th></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>A</td><td>1010</td><td>10</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>B</td><td>1011</td><td>11</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>C</td><td>1100</td><td>12</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>D</td><td>1101</td><td>13</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>E</td><td>1110</td><td>14</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>F</td><td>1111</td><td>15</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "=B</span>&nbsp;",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-con\x22>\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>2.\x20Group\x20Binary\x20Digits\x20into\x20Sets\x20of\x20Four:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal\x22>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22base\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>(",
    "\x20like\x20this\x20:\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22s-n\x22>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Decimal\x20Number:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    "result3",
    "399915SOePKH",
    "59056SQVNVf",
    "</b></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>5.\x20Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-3\x22>(",
    ")<sub>8</sub></p>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20",
    "filter",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>4.\x20Combine\x20Binary\x20Digits:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal\x22>",
    "<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>4.\x20Combine\x20Binary\x20Digits:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal\x22>",
    "<span>",
    "</td></tr>",
    "4545805ymcoSx",
    "=F</span>&nbsp;",
    ")<sub>10</sub></p></div></div>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x20pad\x22>In\x20Octal\x20Conversion:</p>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>\x20",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>",
    "find",
    "<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22message\x22>Enter\x20number\x20combination\x20less\x20than\x208:</p>\x0a\x20\x20\x20\x20\x20\x20</div>",
    "\x20+\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22message\x22>No\x20Need\x20To\x20Conversion\x20Steps</p>",
    "join",
    "pop",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>7.\x20Now\x20Combine\x20the\x20Octal\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-2\x22><b>",
    "newformattedHtml",
    "</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>3.\x20Convert\x20Each\x20into\x20Binary\x20Digits\x20Sets\x20of\x20Three,\x20Add\x20Zero\x20if\x20Not\x20in\x20Sets\x20of\x20Three:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal\x22>",
    "<p\x20class=\x22message\x22>No\x20Need\x20To\x20Conversion\x20Steps</p>",
    "reverse",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>7.\x20Replace\x20Decimal\x20Digits,\x20if\x20Greater\x20Than\x209\x20to\x20its\x20Hexadecimal\x20Character\x20Follow\x20Chart\x20Above:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-2\x22>",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-con\x22>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>2.\x20Split\x20Hexadecimal\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal\x22>",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>4.\x20Convert\x20Decimal\x20Digits\x20to\x20Binary\x20in\x20Sets\x20of\x20Four,\x20if\x20Not\x20in\x20Sets\x20of\x20Four,\x20Add\x20Extra\x20Zero\x20to\x20Make\x20Sets\x20of\x20Four:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal\x22>",
    "<p\x20class=\x22cal-2\x22>",
    "toString",
    "\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22message\x22>No\x20Need\x20To\x20Conversion\x20Steps</p>",
    "numsDecimalfillSpace",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x20pad\x22>Solution:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>5.\x20Now\x20Combine\x20the\x20Decimal\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-2\x22><b>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "shift",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x20pad\x22>In\x20hex\x20Conversion:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22solve\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num-head\x22>1.\x20Binary\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num\x22>",
    "input2",
    "input15",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>4.\x20Now\x20Combine\x20the\x20Binary\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-2\x22><b>",
    "push",
    "</b></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>6.\x20Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-3\x22>(",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>3.\x20Write\x20Each\x20Group\x20to\x20Decimal:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-2\x22>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x20pad\x22>In\x20Binary\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22solve\x22>\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num-head\x22>1.\x20Hexadecimal\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Chart:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><th>Hexadecimal</th><th>In\x20Decimal</th></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>A</td><td>10</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>B</td><td>11</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>C</td><td>12</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>D</td><td>13</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>E</td><td>14</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>F</td><td>15</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "</span>\x20x\x20<span>2<sup>",
    "split",
    "result6",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>4.\x20Convert\x20Each\x20Binary\x20Group\x20to\x20Decimal:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-2\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20Steps:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "&nbsp;<span\x20class=\x22rem-no-1\x22>",
    "</sup></span>",
    "map",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>3.\x20Convert\x20Decimal\x20Digits\x20to\x20Binary\x20in\x20Sets\x20of\x20Four,\x20if\x20Not,\x20Add\x20Extra\x20Zero\x20to\x20Make\x20Sets\x20of\x20Four:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal\x22>",
    "pow",
    "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "25062345vIctCS",
    ")<sub>10</sub>\x20=\x20(",
    "</p>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-3\x22>(",
    "\x0a\x20\x20\x20\x20\x20\x20</div>",
    "result5",
    "<div\x20class=\x22solve\x22><p\x20class=\x22num\x22>",
    ")<sub>8</sub>\x20=\x20(",
    ")<sub>2</sub></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    ")<sub>8</sub></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    ")<sub>16</sub></p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "binArrayReversed",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>3.\x20Group\x20Binary\x20into\x20Sets\x20of\x20Three:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22solve\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num-head\x22>1.\x20Octal\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num\x22>",
    "coloredDeciNum",
    "hexArrayColorReversed",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Chart:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><th>Hexadecimal</th><th>In\x20Binary</th><th>In\x20Decimal</th></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>A</td><td>1010</td><td>10</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>B</td><td>1011</td><td>11</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>C</td><td>1100</td><td>12</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>D</td><td>1101</td><td>13</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>E</td><td>1110</td><td>14</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>F</td><td>1111</td><td>15</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22numbers\x22>",
    "octArrayColorReversed",
    "</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22base\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>(",
    ".</td><td><span>",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-con\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>2.\x20Split\x20Octal\x20Digits:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22show-num\x22>\x20Represent\x20as\x20last\x20quotient\x20<b>",
    "\x20follow\x20chart\x20value\x20mentioned\x20above",
    "\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22numbers\x22>",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Binary\x20Number:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    "\x0a\x20\x20\x20\x20\x20<p\x20class=\x22numbers\x22>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>6.\x20Convert\x20Each\x20Group\x20to\x20Decimal:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-2\x22>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>8.\x20Now\x20Combine\x20the\x20Hexadecimal\x20Digits:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-2\x22><b>",
    "test",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-con\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>2.\x20Split\x20Octal\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal\x22>",
    "input8",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-con\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>2.\x20Group\x20Binary\x20Digits\x20into\x20Sets\x20of\x20Three:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal\x22>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>5.\x20Group\x20Binary\x20into\x20Sets\x20of\x20Four:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal\x22>",
    "toUpperCase",
    "result9",
    "result12",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>4.\x20Combine\x20Binary\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal\x22>",
    "3145542hHQbKc",
    ")<sub>8</sub></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22show-num\x22>\x20Represent\x20it\x20as\x20the\x20last\x20quotient\x20<b>1</b>\x20followed\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20by\x20the\x20remainders\x20from\x20bottom\x20to\x20top\x20<b>",
    "trim",
    "\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    ")<sub>16</sub>\x20=\x20(",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x20pad\x22>Solution:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</span>\x20x\x20<span>8<sup>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22show-num\x22>\x20Represent\x20as\x20last\x20quotient\x20<b>1</b>\x20and\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20remainder\x20<b>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x20pad\x22>In\x20Octal\x20Conversion:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    "includes",
    "input11",
    "</span></p>",
    "&nbsp;<span\x20class=\x22rem-no\x22>",
    "formattedArray",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22solve\x22>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num-head\x22>1.\x20Octal\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num\x22>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>5.\x20Group\x20Binary\x20into\x20Sets\x20of\x20Four:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal\x22>",
    "=E</span>&nbsp;",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>5.\x20Now\x20Combine\x20the\x20Hexadecimal\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-2\x22><b>",
    "201ouwpKv",
    "<span\x20class=\x22zero-c\x22>",
    "result10",
    "</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22base\x22>\x0a\x20\x20\x20\x20\x20\x20<p>(",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22solve\x22>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num-head\x22>1.\x20Octal\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num\x22>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>6.\x20Convert\x20Each\x20Group\x20to\x20Hexadecimal\x20Digits:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-2\x22>",
    "</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22base\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>(",
    "</p><p\x20class=\x22cal-2\x22>",
    "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "slice",
    "hexArrayReversed",
    "result8",
    "calData",
    "input12",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20Steps:</p>\x0a\x20\x20\x20\x20\x20\x20",
    "</div>\x0a\x20\x20\x20\x20\x20<p\x20class=\x22head\x20pad\x22>In\x20Hexa\x20decimal\x20Conversion:\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    "</td><td>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>9.\x20Conversion\x20in\x20base:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-3\x22>(",
    "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-con\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>2.\x20Split\x20Octal\x20Digits:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal\x22>",
    "<span\x20class=\x22n\x22>",
    "<p\x20class=\x22message\x22>No\x20Need\x20to\x20Conversion\x20Steps</p>",
    "</b></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>5.\x20Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-3\x22>(",
    "\x0a\x20\x20\x20\x20</div>",
    "</sup></span></td><td>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x20pad\x22>Solution:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>3.\x20Convert\x20Decimal\x20Digits\x20to\x20Binary\x20in\x20Sets\x20of\x20Three,\x20if\x20Not\x20in\x20Sets\x20of\x20Three,\x20Add\x20Extra\x20Zero\x20to\x20Make\x20Sets\x20of\x20Three:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal\x22>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>8.\x20Now\x20Combine\x20the\x20Hexadecimal\x20Digits:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-2\x22><b>",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-con\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>2.\x20Convert\x20Each\x20into\x20Binary\x20Digits\x20Sets\x20of\x20Four,\x20Add\x20Zero\x20if\x20Not\x20in\x20Sets\x20of\x20Four:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal\x22>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22base\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>(",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>5.\x20Now\x20Combine\x20the\x20Octal\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-2\x22><b>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal-head\x22>3.\x20Convert\x20Each\x20into\x20Binary\x20Digits\x20Sets\x20of\x20Three,\x20Add\x20Zero\x20if\x20Not\x20in\x20Sets\x20of\x20Three:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cal\x22>",
    "<tr><td>",
    "</b>,\x20like\x20this\x20:\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22s-n\x22>",
    "innerHTML",
    "</b>\x20like\x20this\x20:\x20<span\x20class=\x22s-n\x22>",
    "deciNum",
    "</div>\x0a\x20\x20\x20\x20\x20<p\x20class=\x22head\x20pad\x22>In\x20octal\x20Conversion:\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>",
    ")<sub>16</sub></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20",
    "</table>",
    ")<sub>2</sub>\x20=\x20(",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Chart:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><th>Decimal</th><th>In\x20Hexadecimal</th></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>10</td><td>A</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>11</td><td>B</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>12</td><td>C</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>13</td><td>D</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>14</td><td>E</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td>15</td><td>F</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22message\x22>Enter\x20number\x20combination\x20of\x200\x20and\x201:</p>\x0a\x20\x20\x20\x20\x20\x20</div>",
    "input",
    ")<sub>2</sub></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "input7",
  ];
  _0x1988 = function () {
    return _0x4dac7e;
  };
  return _0x1988();
}
function HexaToBinary() {
  const _0x1ef61b = _0x35eb9a,
    _0x4d13ec = input15[_0x1ef61b(0xed)];
  let _0x2acc2a = _0x4d13ec["toString"]()
    ["toUpperCase"]()
    [_0x1ef61b(0x164)]("")
    [_0x1ef61b(0x135)]((_0x6088bb) =>
      /[0-9A-Fa-f]/[_0x1ef61b(0x18a)](_0x6088bb)
    );
  _0x2acc2a[_0x1ef61b(0xf3)] >= 0x2 &&
    _0x2acc2a[0x0] == 0x0 &&
    _0x2acc2a["shift"]();
  input15["value"] = _0x2acc2a["join"]("");
  if (_0x4d13ec[_0x1ef61b(0xf3)] > 0x0) {
    if (_0x2acc2a[_0x1ef61b(0xf3)] !== 0x0) {
      const _0x41c239 = extractHexaDecimal(_0x2acc2a)[_0x1ef61b(0xe3)],
        { binArrayReversed: _0x5dbb47, binArrayColorReversed: _0x2c52bc } =
          extractBinary(_0x41c239),
        _0x1d25c1 = formateNumsSpace(_0x2acc2a)[_0x1ef61b(0x153)],
        _0x4fe761 = [];
      _0x2acc2a[_0x1ef61b(0x11e)]((_0x597673) => {
        const _0x33b17b = _0x1ef61b;
        switch (_0x597673) {
          case "A":
            _0x4fe761[_0x33b17b(0x15d)]("10");
            break;
          case "B":
            _0x4fe761[_0x33b17b(0x15d)]("11");
            break;
          case "C":
            _0x4fe761[_0x33b17b(0x15d)]("12");
            break;
          case "D":
            _0x4fe761["push"]("13");
            break;
          case "E":
            _0x4fe761[_0x33b17b(0x15d)]("14");
            break;
          case "F":
            _0x4fe761["push"]("15");
            break;
          default:
            _0x4fe761[_0x33b17b(0x15d)](_0x597673);
        }
      });
      const _0x3c3394 = _0x4fe761[_0x1ef61b(0x16a)](
          (_0x18feb8) => extractBinary(_0x18feb8)[_0x1ef61b(0x178)]
        )[_0x1ef61b(0x16a)]((_0x3ee9a7) =>
          formatZero(_0x3ee9a7, 0x4)["newformattedHtml"][_0x1ef61b(0x144)]("")
        ),
        _0x301d62 = formateNumsSpace(_0x3c3394)["numsDecimalfillSpace"],
        _0x25cdf6 = formateNumsSpace(_0x4fe761)[_0x1ef61b(0x153)];
      let _0x372895 = "",
        _0x1df63f = "";
      _0x2acc2a[_0x1ef61b(0x140)]((_0x273572) => {
        const _0x40e9a7 = _0x1ef61b;
        ["A", "B", "C", "D", "E", "F"][_0x40e9a7(0x19d)](_0x273572)
          ? ((_0x372895 = _0x40e9a7(0x12a)),
            _0x4d13ec[_0x40e9a7(0xf3)] > 0x1
              ? (_0x1df63f =
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22solve\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num-head\x22>1.\x20Hexadecimal\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22num\x22>" +
                  _0x2acc2a[_0x40e9a7(0x144)]("") +
                  _0x40e9a7(0x14e) +
                  _0x1d25c1 +
                  _0x40e9a7(0xf2) +
                  _0x25cdf6 +
                  _0x40e9a7(0x14f) +
                  _0x301d62 +
                  _0x40e9a7(0xf7) +
                  _0x5dbb47 +
                  _0x40e9a7(0x15e) +
                  _0x2acc2a["join"]("") +
                  ")<sub>16</sub>\x20=\x20(" +
                  _0x5dbb47 +
                  _0x40e9a7(0x108))
              : (_0x1df63f = _0x40e9a7(0xd4)))
          : _0x4d13ec[_0x40e9a7(0xf3)] > 0x1
          ? (_0x1df63f =
              _0x40e9a7(0x11f) +
              _0x2acc2a[_0x40e9a7(0x144)]("") +
              _0x40e9a7(0x14e) +
              _0x1d25c1 +
              _0x40e9a7(0x16b) +
              _0x301d62 +
              "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-head\x22>4.\x20Now\x20Combine\x20the\x20Binary\x20Digits:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22cal-2\x22><b>" +
              _0x5dbb47 +
              _0x40e9a7(0xd5) +
              _0x2acc2a[_0x40e9a7(0x144)]("") +
              ")<sub>16</sub>\x20=\x20(" +
              _0x5dbb47 +
              _0x40e9a7(0xeb))
          : (_0x1df63f = _0x40e9a7(0xd4));
      }),
        (result15[_0x1ef61b(0xe1)] =
          _0x1ef61b(0x10d) +
          _0x2c52bc +
          _0x1ef61b(0x114) +
          _0x2acc2a[_0x1ef61b(0x144)]("") +
          "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x20pad\x22>In\x20Binary\x20Digit:</p>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22number\x22>" +
          _0x5dbb47 +
          "</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22head\x22>Conversion\x20in\x20base:</p>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22base\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>(" +
          _0x2acc2a[_0x1ef61b(0x144)]("") +
          _0x1ef61b(0x198) +
          _0x5dbb47 +
          _0x1ef61b(0x10a) +
          _0x372895 +
          _0x1ef61b(0xcd) +
          _0x1df63f +
          "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>");
    }
  } else result15[_0x1ef61b(0xe1)] = "";
}
input15[_0x35eb9a(0x105)]("input", HexaToBinary);
