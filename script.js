function div1() {
  var x = document.getElementById("div1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function zippy() {
  var input = document.getElementById('zipCode');
  zipString = input.value;
  var zip = parseInt(zipString)
  var reg2 = [77630, 75901, 75901, 77474, 77573, 77076, 77584, 77032, 77027, 77520, 77002, 77020, 77002, 77571, 77007, 77090, 77090, 77095, 77095, 77010, 77511, 77511, 78368, 77801, 77520, 77320, 77511, 75966, 75901, 77004, 77021, 77018, 77010, 77550, 77623, 77550, 77568, 77510, 75862, 75862, 75961, 77657];
  var reg3 = [78501, 78577, 78527, 78956, 78570, 78521, 78559, 78578, 78580, 78501, 78102, 78852, 78041, 78840, 78355];
  var reg4 = [76849, 79761, 79701, 79830, 79705, 76837, 76825, 76856, 76950, 76859, 79848, 79830, 79761, 79765, 79359, 76941, 76903, 79843, 79734];
  var reg5 = [76380	, 79357, 79504, 79022, 79065, 79081, 79041, 79336,  79336, 79358, 79336, 79313, 72265, 76230, 79070, 79325, 79101, 79101, 79101, 79084, 76424, 79602, 79201, 79245, 79088, 79057, 79057, 79057, 79027, 76301,76308, 76354, 79401, 79401, 79401, 79092, 76081, 79201, 79346, 76834, 79065, 79039, 79107, 79605, 79602, 79316, 79370, 79252, 76450];
  var reg6 = [76706, 78701, 76504, 76541, 78654, 77901, 77901, 78644, 78704, 76567, 76701, 78118, 78006, 78624, 78155, 76522, 76661, 76645, 76692, 76648, 76055, 77983, 78205, 76543, 76513, 76502, 76513, 76548, 76571, 76571, 76504, 76502, 76502, 76504, 76571, 78643, 78639, 76501, 76528, 78681, 78652, 78759, 78737, 78750, 78705, 78757, 78617, 78705, 78731, 78745, 76661, 78620, 78676, 78006, 78006, 78028, 78025, 78028, 78017, 76665];
  var y = document.getElementById('zipList');
  if (reg2.includes(zip)== true || zip == 2){
    y.innerHTML = "reg 2";
    var spot = 2;
  } else if (reg3.includes(zip)== true || zip == 3){
    y.innerHTML = "reg 3";
    var spot = 3;
  } else if (reg4.includes(zip)== true || zip == 4){
    y.innerHTML = "reg 4";
    var spot = 4;
  } else if (reg5.includes(zip)== true || zip == 5){
    y.innerHTML = "reg 5";
    var spot = 5;
  } else if (reg6.includes(zip)== true || zip == 6){
    y.innerHTML = "reg 6";
    var spot = 6;
  } else {
    if (71000 < zip && zip < 76000 || zip == 1){
      y.innerHTML = "reg 1a";
      var spot = 0;
    } else if (76000 < zip && zip < 77000){
      y.innerHTML = "reg 1b";
      var spot = 1;
    } else{
      y.innerHTML = "You either did not enter a valid zip code/ region, or your zip code/ region is not supported.";
    }
  }
  
  var a = document.getElementById("r1");
  if (spot == 0) {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
  }
  var b = document.getElementById("r2");
  if (spot == 1) {
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
  }
  var c = document.getElementById("r3");
  if (spot == 2) {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
  }
  var d = document.getElementById("r4");
  if (spot == 3) {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
  }
  var e = document.getElementById("r5");
  if (spot == 4) {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "block";
    f.style.display = "none";
    g.style.display = "none";
  }
  var f = document.getElementById("r6");
  if (spot == 5) {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "block";
    g.style.display = "none";
  }
  var g = document.getElementById("r7");
  if (spot == 6) {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "block";
  }
}


function div2() {
  var x = document.getElementById("div2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function div3() {
  var x = document.getElementById("div3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function div4() {
  var x = document.getElementById("div4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function div5() {
  var x = document.getElementById("div5");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function div6() {
  var x = document.getElementById("div6");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function div7() {
  var x = document.getElementById("div7");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function div8() {
  var x = document.getElementById("div8");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function div9() {
  var x = document.getElementById("div9");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function div10() {
  var x = document.getElementById("div10");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function div11() {
  var x = document.getElementById("div11");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}