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

error_card_number = document.querySelector('[data-error-card-number]')
error_date = document.querySelector('[data-error-date]')
error_CVC = document.querySelector('[data-error-CVC]')

// useful functions ==============================
function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
}

// MAIN ==========================================
inputs_field.addEventListener('input', function(e) {
    error_card_number.classList.add('inputs__error--display-none')
    error_date.classList.add('inputs__error--display-none')
    error_CVC.classList.add('inputs__error--display-none')
    
   
    if(input_cardholder.value != "") {
        viewer_cardholder.innerHTML = input_cardholder.value;
    }
    else {
        viewer_cardholder.innerHTML = "xxxxx xxxxxx"
    }
    
    if(input_card_number.value != "") {
        var n = input_card_number.value.replace(/\s/g, '') // delete all the spaces

        if(!onlyNumbers(n)) { 
            //if(!input_card_number.classList.contains('inputs__error--display-none')) 
            error_card_number.classList.remove('inputs__error--display-none')
        } // TODO: show error for letters not allowed
        
        if(n.length > 16) {console.log('ERROR')} // too long

        n = n.replace(/\d{4}(?=.)/g, '$& ') // add a space inbetween every 4 number

        viewer_card_number.innerHTML = n
    }
    else {
        viewer_card_number.innerHTML = "0000 0000 0000 0000"
    }
    
    if(input_MM.value.replace(/\s/g, '') != "") {
        viewer_MM.innerHTML = input_MM.value;
    }
    else {
        error_date.classList.remove('inputs__error--display-none')
        viewer_MM.innerHTML = "00"
    }
    
    if(input_YY.value.replace(/\s/g, '') != "") {
        viewer_YY.innerHTML = input_YY.value;
    }
    else {
        error_date.classList.remove('inputs__error--display-none')
        viewer_YY.innerHTML = "00"
    }
    
    if(input_CVC.value.replace(/\s/g, '') != "") {
        viewer_CVC.innerHTML = input_CVC.value;
    }
    else {
        error_CVC.classList.remove('inputs__error--display-none')
        viewer_CVC.innerHTML = "000"
    }
    
})