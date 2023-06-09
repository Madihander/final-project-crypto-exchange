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

function requestAccount() {
    console.log('Requesting Account...')
    // Проверяем есть ли ethereum клиент
    if (window.ethereum) {
        console.log('detected')
        ethereum.request({method: 'eth_requestAccounts'})
            .then(function (accounts) {
                if (accounts.length > 0) {
                    console.log("Выбран аккаунт: ", accounts[0]);
                    account = accounts[0];
                    document.getElementById('addressWallet').textContent = account;
                } else {
                    console.log("Аккаунт не выбран");
                }
            })
            .catch(function (error) {
                // Обработка ошибки при запросе аккаунтов
                console.error(error);
            });
    }
}

$(document).ready(function() {
    $('#swapButton').click(function() {
        $('#swapButton').text('Swapping!');
    });

    $('#swapButton').mouseover(function() {
        console.log('Swap your Tokens')
    });

    $('#swap-value-start').keypress(function (){
        $('#aggetation').text("!!! Swap more Tokens !!!")
    })

    $('#swapForm').submit(function(event) {
        event.preventDefault(); // Отменяет перезагрузку страницы
        // Ваш код обработки формы здесь
    });

});


