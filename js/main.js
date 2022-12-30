inputs_field = document.querySelector('[data-inputs-field]')
done = document.querySelector('[data-done]')

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

error_cardholder = document.querySelector('[data-error-cardholder]')
error_card_number = document.querySelector('[data-error-card-number]')
error_date = document.querySelector('[data-error-date]')
error_CVC = document.querySelector('[data-error-CVC]')

btn_confirm = document.querySelector('[data-btn-confirm]')


can_confirm = false

MSG_ERROR_BLANK = 'Can\'t be blank'
MSG_ERROR_FORMAT = 'Wrong format, numbers only'

// useful functions ==============================
function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
}

// MAIN ==========================================
btn_confirm.addEventListener('click', function(e) {
    if(can_confirm) {    
        inputs_field.classList.add('hide')
        done.classList.remove('hide')
    }
})

inputs_field.addEventListener('input', function(e) {
    
    can_confirm = true

    error_cardholder.classList.add('inputs__error--display-none')
    error_card_number.classList.add('inputs__error--display-none')
    error_date.classList.add('inputs__error--display-none')
    error_CVC.classList.add('inputs__error--display-none')
    
    input_cardholder.classList.remove('inputs_in-txt--error')
    input_card_number.classList.remove('inputs_in-txt--error')
    input_MM.classList.remove('inputs_in-txt--error')
    input_YY.classList.remove('inputs_in-txt--error')
    input_CVC.classList.remove('inputs_in-txt--error')
    
   
    if(input_cardholder.value.replace(/\s/g, '') != "") {
        viewer_cardholder.innerHTML = input_cardholder.value
    }
    else {
        input_cardholder.classList.add('inputs_in-txt--error')
        error_cardholder.innerHTML = MSG_ERROR_BLANK
        error_cardholder.classList.remove('inputs__error--display-none')
        
        viewer_cardholder.innerHTML = "xxxxx xxxxxx"
        can_confirm = false
    }
    
    if(input_card_number.value != "") {
        var n = input_card_number.value.replace(/\s/g, '') // delete all the spaces

        if(!onlyNumbers(n)) { 
            
            input_card_number.classList.add('inputs_in-txt--error')
            error_card_number.innerHTML = MSG_ERROR_FORMAT
            error_card_number.classList.remove('inputs__error--display-none')
            can_confirm = false
        } // TODO: show error for letters not allowed
        
        if(n.length > 16) { 
            n = n.substring(0, 16) 
            can_confirm = false 
        } // too long

        if(n.length != 16) { can_confirm = false }

        n = n.replace(/\d{4}(?=.)/g, '$& ') // add a space inbetween every 4 number

        viewer_card_number.innerHTML = n
    }
    else {
        input_card_number.classList.add('inputs_in-txt--error')
        error_card_number.innerHTML = MSG_ERROR_BLANK
        error_card_number.classList.remove('inputs__error--display-none')

        viewer_card_number.innerHTML = "0000 0000 0000 0000"
        can_confirm = false
    }
    
    if(input_MM.value.replace(/\s/g, '') != "") {
        viewer_MM.innerHTML = input_MM.value;
    }
    else {
        input_MM.classList.add('inputs_in-txt--error')
        error_date.innerHTML = MSG_ERROR_BLANK
        error_date.classList.remove('inputs__error--display-none')
        viewer_MM.innerHTML = "00"
        can_confirm = false
    }
    
    if(input_YY.value.replace(/\s/g, '') != "") {
        viewer_YY.innerHTML = input_YY.value;
    }
    else {
        input_YY.classList.add('inputs_in-txt--error')
        error_date.innerHTML = MSG_ERROR_BLANK
        error_date.classList.remove('inputs__error--display-none')
        viewer_YY.innerHTML = "00"
        can_confirm = false
    }
    
    if(input_CVC.value.replace(/\s/g, '') != "") {
        viewer_CVC.innerHTML = input_CVC.value;
    }
    else {
        input_CVC.classList.add('inputs_in-txt--error')
        error_CVC.innerHTML = MSG_ERROR_BLANK
        error_CVC.classList.remove('inputs__error--display-none')
        viewer_CVC.innerHTML = "000"
        can_confirm = false
    }
    
})