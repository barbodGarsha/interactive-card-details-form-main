inputs_field = document.querySelector('[data-inputs-field]')

input_cardholder = document.querySelector('[data-input-cardholder]')
input_card_number = document.querySelector('[data-input-card-number]')
input_MM = document.querySelector('[data-input-MM]')
input_YY = document.querySelector('[data-input-YY]')
input_CVC = document.querySelector('[data-input-CVC]')



viewer_cardholder = document.querySelector('[data-viewer-cardholder]')
viewer_card_number = document.querySelector('[data-viewer-card-number]')
viewer_MM = document.querySelector('[data-viewer-MM]')
viewer_YY = document.querySelector('[data-viewer-YY]')
viewer_CVC = document.querySelector('[data-viewer-CVC]')

// useful functions ==============================
function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
}

// MAIN ==========================================
inputs_field.addEventListener('input', function(e) {
    if(input_cardholder.value != "") {
        viewer_cardholder.innerHTML = input_cardholder.value;
    }
    else {
        viewer_cardholder.innerHTML = "xxxxx xxxxxx"
    }
    
    if(input_card_number.value != "") {
        var n = input_card_number.value.replace(/\s/g, '') // delete all the spaces

        if(!onlyNumbers(n)) { console.log("ERROR") } // TODO: show error for letters not allowed
        if(n.length > 16) {console.log('ERROR')} // too long

        n = n.replace(/\d{4}(?=.)/g, '$& ') // add a space inbetween every 4 number

        viewer_card_number.innerHTML = n
    }
    else {
        viewer_card_number.innerHTML = "0000 0000 0000 0000"
    }
    
    if(input_MM.value != "") {
        viewer_MM.innerHTML = input_MM.value;
    }
    else {
        console.log("ERROR") // can't be black
        viewer_MM.innerHTML = "00"
    }
    
    if(input_YY.value != "") {
        viewer_YY.innerHTML = input_YY.value;
    }
    else {
        console.log("ERROR") // can't be black
        viewer_YY.innerHTML = "00"
    }
    
    if(input_CVC.value != "") {
        viewer_CVC.innerHTML = input_CVC.value;
    }
    else {
        console.log("ERROR") // can't be black
        viewer_CVC.innerHTML = "000"
    }
    
})