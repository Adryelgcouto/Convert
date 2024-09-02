const form = document.querySelector("form");
const footer = document.querySelector("footer")
const input = document.querySelector("input")
const h1 = document.querySelector("#result")
const span = document.querySelector("#description")
let valueCoinKeyPress;
const formatador = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
})
input.addEventListener("input", () => {
    
    const regex = /\d+/g
    let valueCoin = input.value
    console.log(valueCoin.match(regex))
    valueCoinKeyPress = valueCoin.match(regex)
})
form.onsubmit = (event) => {
    event.preventDefault();
    const valueCoin = currency.value
    console.log(valueCoin)
    if(valueCoin === "USD"){
        const dolar = valueCoinKeyPress * 5.61
        footer.style.display = "inherit";
        h1.textContent = formatador.format(dolar) ;

    }else if(valueCoin === "EUR"){
        const euro = valueCoinKeyPress * 6.24;
        footer.style.display = "inherit"
        span.textContent = " € 1 = R$ 6.24"
        h1.textContent = formatador.format(euro)
    }else if(valueCoin === "GBP"){
        const libraEstrelina = valueCoinKeyPress * 7.36;
        footer.style.display = "inherit";
        span.textContent = " £ 1 = R$ 7.36";
        h1.textContent = formatador.format(libraEstrelina)
    }
};
