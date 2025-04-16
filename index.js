function applyModeParams() {
    const mode = document.getElementById("mode").value;
    const U = document.getElementById("U");
    const Z = document.getElementById("Z");

    if (mode === "normal") {
        U.value = 10;
        Z.value = 0.55;
    } else if (mode === "minimal") {
        U.value = 9.8;
        Z.value = 0.7;
    } else if (mode === "emergency") {
        U.value = 10.2;
        Z.value = 0.9;
    }
}

function calculateAll() {
    const U_kV = parseFloat(document.getElementById("U").value);
    const U = U_kV * 1000 / Math.sqrt(3); // фазна
    const Z = parseFloat(document.getElementById("Z").value);
    const S = parseFloat(document.getElementById("S").value);
    const t = parseFloat(document.getElementById("t").value);
    const k = parseFloat(document.getElementById("k").value);

    const I3 = U / Z;// Трифазне КЗ
    const I1 = I3 * 1.1;// Однофазне КЗ (приблизно)
    const Ith = k * S / Math.sqrt(t);// Термічна стійкість
    const Idyn = 2.5 * I3;// Динамічна стійкість

    document.getElementById("result").innerHTML = `
    <h4>Результати:</h4>
    <ul class="list-group">
      <li class="list-group-item">Струм трифазного КЗ: <strong>${I3.toFixed(2)} А</strong></li>
      <li class="list-group-item">Струм однофазного КЗ: <strong>${I1.toFixed(2)} А</strong></li>
      <li class="list-group-item">Термічна стійкість (допустимий струм): <strong>${Ith.toFixed(2)} А</strong></li>
      <li class="list-group-item">Динамічна стійкість (допустимий струм): <strong>${Idyn.toFixed(2)} А</strong></li>
    </ul>
  `;
}
