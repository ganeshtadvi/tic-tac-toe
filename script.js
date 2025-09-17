let celsiusValue = document.getElementById('Celsius')
let fahValue = document.getElementById('Fahrenheit')
let kelvinValue = document.getElementById('Kelvin')

let allInput = document.querySelectorAll('input')

allInput.forEach((e => {
    e.addEventListener("keypress", function (key) {
        if (key.key == "Enter") {
            let getID = e.id

            submitData(getID, Number(e.value))
        }
    })
}))


function submitData(id, text) {
    if (id == "Celsius") {
        fahValue.value = parseFloat((text * 9 / 5) + 32)
        console.log(text)
        kelvinValue.value = parseFloat(text + 273.15)
    }
    else if (id == "Fahrenheit") {
        kelvinValue.value = ((text - 32) * 5 / 9 + 273.15).toFixed(2);
        celsiusValue.value = ((text - 32) * 5 / 9);
    }
    else {
        fahValue.value = parseFloat((text * 9 / 5) + 32)
        celsiusValue.value = ((text - 32) * 5 / 9);
    }
}
