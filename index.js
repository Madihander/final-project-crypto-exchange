/*=== SHOW MENU ===*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// MENU SHOW
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}



// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction))


// CHANGED BACKGROUND HEADER

const scrollHeader = () => {
    const header = document.getElementById('header')
    alert(header);
    this.scrollY >= 50 ? header.classList.add('header-bg')
                       : header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader)



// Для работы с ethereum
let account;

// Подключаем metamask кошелек
async function requestAccount() {
    console.log('Requesting Account...')
    // Проверяем есть ли ethereum клиент
    if(window.ethereum) {
        console.log('detected')

        try{
            // получаем адрес кошелька
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            account = accounts;
            // меняем название кнопки на адрес кошелька
            let shortAcc = accounts[0].slice(0,9);
            shortAcc = shortAcc +'...';
            let conWalBtn = document.getElementById('conWal');
            conWalBtn.innerText = `Wallet: ${shortAcc}`
        } catch (error){
            console.log(error)
        }
    } else{
        console.log('MetaMask not detected');
    }
}













