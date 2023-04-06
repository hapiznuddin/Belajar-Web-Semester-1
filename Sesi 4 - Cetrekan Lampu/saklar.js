function saklarLampu() {
  let toggleLampuTidur1 = document.getElementById("toggle-lampuTidur1");
  let toggleLampuTidur2 = document.getElementById("toggle-lampuTidur2");
  let toggleLampuKeluarga1 = document.getElementById("toggle-lampuKeluarga1");
  let toggleLampuKeluarga2 = document.getElementById("toggle-lampuKeluarga2");
  let toggleLampuKeluarga3 = document.getElementById("toggle-lampuKeluarga3");
  let toggleLampuTamu1 = document.getElementById("toggle-lampuTamu1");
  let toggleLampuTamu2 = document.getElementById("toggle-lampuTamu2");
  let toggleLampuTamu3 = document.getElementById("toggle-lampuTamu3");
  let toggleLampuTamu4 = document.getElementById("toggle-lampuTamu4");

  let lampuTidur1 = document.getElementById("lampuTidur1");
  let lampuTidur2 = document.getElementById("lampuTidur2");
  let lampuKeluarga1 = document.getElementById("lampuKeluarga1");
  let lampuKeluarga2 = document.getElementById("lampuKeluarga2");
  let lampuKeluarga3 = document.getElementById("lampuKeluarga3");
  let lampuTamu1 = document.getElementById("lampuTamu1");
  let lampuTamu2 = document.getElementById("lampuTamu2");
  let lampuTamu3 = document.getElementById("lampuTamu3");
  let lampuTamu4 = document.getElementById("lampuTamu4");

  if (toggleLampuTidur1.checked) {
    lampuTidur1.src = "assets/images/on.gif";
  } else {
    lampuTidur1.src = "assets/images/off.gif";
  }
  if (toggleLampuTidur2.checked) {
    lampuTidur2.src = "assets/images/on.gif";
  } else {
    lampuTidur2.src = "assets/images/off.gif";
  }

  if (toggleLampuKeluarga1.checked) {
    lampuKeluarga1.src = "assets/images/on.gif";
  } else {
    lampuKeluarga1.src = "assets/images/off.gif";
  }
  if (toggleLampuKeluarga2.checked) {
    lampuKeluarga2.src = "assets/images/on.gif";
  } else {
    lampuKeluarga2.src = "assets/images/off.gif";
  }
  if (toggleLampuKeluarga3.checked) {
    lampuKeluarga3.src = "assets/images/on.gif";
  } else {
    lampuKeluarga3.src = "assets/images/off.gif";
  }

  if (toggleLampuTamu1.checked) {
    lampuTamu1.src = "assets/images/on.gif";
  } else {
    lampuTamu1.src = "assets/images/off.gif";
  }
  if (toggleLampuTamu2.checked) {
    lampuTamu2.src = "assets/images/on.gif";
  } else {
    lampuTamu2.src = "assets/images/off.gif";
  }
  if (toggleLampuTamu3.checked) {
    lampuTamu3.src = "assets/images/on.gif";
  } else {
    lampuTamu3.src = "assets/images/off.gif";
  }
  if (toggleLampuTamu4.checked) {
    lampuTamu4.src = "assets/images/on.gif";
  } else {
    lampuTamu4.src = "assets/images/off.gif";
  }

}

function saklarRuangan() {
  let toggleRuanganMakan = document.getElementById("toggle-ruanganMakan");
  let toggleRuanganTidur = document.getElementById("toggle-ruanganTidur");
  let toggleRuanganKeluarga = document.getElementById("toggle-ruanganKeluarga");
  let toggleRuanganTamu = document.getElementById("toggle-ruanganTamu");

  let toggleLampuTidur1 = document.getElementById("toggle-lampuTidur1");
  let toggleLampuTidur2 = document.getElementById("toggle-lampuTidur2");
  let toggleLampuKeluarga1 = document.getElementById("toggle-lampuKeluarga1");
  let toggleLampuKeluarga2 = document.getElementById("toggle-lampuKeluarga2");
  let toggleLampuKeluarga3 = document.getElementById("toggle-lampuKeluarga3");
  let toggleLampuTamu1 = document.getElementById("toggle-lampuTamu1");
  let toggleLampuTamu2 = document.getElementById("toggle-lampuTamu2");
  let toggleLampuTamu3 = document.getElementById("toggle-lampuTamu3");
  let toggleLampuTamu4 = document.getElementById("toggle-lampuTamu4");

  let lampuTidur1 = document.getElementById("lampuTidur1");
  let lampuTidur2 = document.getElementById("lampuTidur2");
  let lampuKeluarga1 = document.getElementById("lampuKeluarga1");
  let lampuKeluarga2 = document.getElementById("lampuKeluarga2");
  let lampuKeluarga3 = document.getElementById("lampuKeluarga3");
  let lampuTamu1 = document.getElementById("lampuTamu1");
  let lampuTamu2 = document.getElementById("lampuTamu2");
  let lampuTamu3 = document.getElementById("lampuTamu3");
  let lampuTamu4 = document.getElementById("lampuTamu4");

  if (toggleRuanganMakan.checked) {
    lampuMakan.src = "assets/images/on.gif";
  } else {
    lampuMakan.src = "assets/images/off.gif";
  }

  if (toggleRuanganTidur.checked) {
    lampuTidur1.src = "assets/images/on.gif";
    lampuTidur2.src = "assets/images/on.gif";
    toggleLampuTidur1.checked = true
    toggleLampuTidur2.checked = true
  } else {
    lampuTidur1.src = "assets/images/off.gif";
    lampuTidur2.src = "assets/images/off.gif";
    toggleLampuTidur1.checked = false
    toggleLampuTidur2.checked = false
  }

  if (toggleRuanganKeluarga.checked) {
    lampuKeluarga1.src = 'assets/images/on.gif'
    lampuKeluarga2.src = 'assets/images/on.gif'
    lampuKeluarga3.src = 'assets/images/on.gif'
    toggleLampuKeluarga1.checked = true
    toggleLampuKeluarga2.checked = true
    toggleLampuKeluarga3.checked = true
  } else {
    lampuKeluarga1.src = 'assets/images/off.gif'
    lampuKeluarga2.src = 'assets/images/off.gif'
    lampuKeluarga3.src = 'assets/images/off.gif'
    toggleLampuKeluarga1.checked = false
    toggleLampuKeluarga2.checked = false
    toggleLampuKeluarga3.checked = false
  }

  if (toggleRuanganTamu.checked) {
    lampuTamu1.src = 'assets/images/on.gif'
    lampuTamu2.src = 'assets/images/on.gif'
    lampuTamu3.src = 'assets/images/on.gif'
    lampuTamu4.src = 'assets/images/on.gif'
    toggleLampuTamu1.checked = true
    toggleLampuTamu2.checked = true
    toggleLampuTamu3.checked = true
    toggleLampuTamu4.checked = true
  } else {
    lampuTamu1.src = 'assets/images/off.gif'
    lampuTamu2.src = 'assets/images/off.gif'
    lampuTamu3.src = 'assets/images/off.gif'
    lampuTamu4.src = 'assets/images/off.gif'
    toggleLampuTamu1.checked = false
    toggleLampuTamu2.checked = false
    toggleLampuTamu3.checked = false
    toggleLampuTamu4.checked = false
  }

}

// if (toggle2.checked) {
//   lampu2.src = "assets/images/on.gif";
// } else {
//   lampu2.src = "assets/images/off.gif";
// }

// if (toggle3.checked) {
//   lampu3.src = "assets/images/on.gif";
// } else {
//   lampu3.src = "assets/images/off.gif";
// }