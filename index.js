

function updateColor(event) {
    colorPicker.value = event.target.value
    // console.log(colorPicker.value);
    let hexValue = colorPicker.value.replace("#", "")
    // console.log(hexValue)
    // fetch(baseURL +)
}


const baseURL = 'https://www.thecolorapi.com/scheme'
const defaultColor = "#e66465";
let endPoint = defaultColor.replace('#','')

const colorPicker = document.querySelector("#color-picker-input");
colorPicker.value = defaultColor;
colorPicker.addEventListener("change", updateColor);
colorPicker.select();

const schemeSelection = document.getElementById("color-scheme-options")
// console.log(schemeSelection.value)

const palette = document.getElementById('api-color-palette')
const paletteText = document.getElementById('api-colors-text')

const submitColor = document.getElementById("color-scheme-btn")
    submitColor.addEventListener("click", event =>{
        let schemeType = schemeSelection.value
        let hexColor = colorPicker.value.replace('#','')
    
        fetch(`${baseURL}?hex=${hexColor}&mode=${schemeType}&count=5`)
            .then(response => response.json())
            .then(data => {
                paletteText.innerHTML =''
                palette.innerHTML = ''
                const hexValues = data.colors.map(c => c.hex.value)
                hexValues.forEach((hexValue) => {
                    const divA = document.createElement("div")
                    divA.className= "box"
                    divA.style.backgroundColor = hexValue
                    palette.appendChild(divA)
                    
                    const divB = document.createElement("div")
                    divB.className = "footer-box"
                    divB.innerText = hexValue
                    paletteText.appendChild(divB)
                    });
            })   
})