/*
*
АДРЕС КОНТРАКТА ПЕРВОГО ТОКЕНА
0xA4968C08F492379DB38758d4B4b577edE4b71160

АДРЕС КОНТРАКТА ВТОРОГО ТОКЕНА
0xbAC3e98EA6166eF6699Ad375B15e9599Cbf7f5CA

АДРЕС КОНТРАКТА SWAP
0x37Bc5A3d3C5d52B8894CACa9C00F533Ea1bf5fe1

* * */


function updateParagraph() {
    let input = document.getElementById("swap-value-start").value;
    document.getElementById("swap-value-result").textContent = input / 2;
}

function updateSecondSelect() {
    let firstSelect = document.getElementById("firstSelect");
    let secondSelect = document.getElementById("secondSelect");
    if (firstSelect.value === "INT") {
        secondSelect.value = "SIT";
    } else if (firstSelect.value === "SIT") {
        secondSelect.value = "INT";
    }
}
