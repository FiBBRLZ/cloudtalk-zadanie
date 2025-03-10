const functionHandler = {
    init: function() {
        this.styledDropdownToggle();
        this.numberOfUsersDropdwown();
        this.countryCodeDropdown();
        this.checkboxKeyboardToggle();
    },
    styledDropdownToggle: function() {
        $('.styled-dropdown').each(function () {
            $(this).on('click', function() {
                //toggle individual dropdowns visibility
                $(this).toggleClass('show');
            });
        });
    },
    numberOfUsersDropdwown: function() {
        let selectedValueEl = $("#num-users .selected-value");

        $('#num-users-list li').each(function () {
            $(this).on('click', function() {
                //get the value of the selected item
                let value = $(this).attr('value');
                //set the selected value as text so the user sees the change
                selectedValueEl.text(value);
                //set the value of the hidden input field so we can get the data
                $("#num-users-value").val(value);
    
                //toggle classes for styling, this toggles checkmark next to the item
                $('#num-users-list li').removeClass('selected');
                $(this).toggleClass('selected');
            });
        });
    },
    countryCodeDropdown: function() {
        let selectedValueEl = $("#country-code-el .selected-value");

        $('#country-code li').each(function () {
            $(this).on('click', function() {
                //get the calling code and country code values
                let value = $(this).attr('value');
                let countryCode = $(this).attr('data-countrycode');
                //set the country code as text value for user to see
                selectedValueEl.text(countryCode);
                //set the class of the element to country code, which is used to get the flag
                selectedValueEl.attr('class', 'selected-value ' + countryCode);
                //set the calling code as the value of the phone input field for the user
                $('#phone').attr('value', '+' + value + ' ').val('+' + value + ' ').change();
    
                //add checkmark to item
                $('#country-code li').removeClass('selected');
                $(this).toggleClass('selected');
    
            });
        });
    },
    checkboxKeyboardToggle: function() {
        //allow using checkbox with keyboard
        $(".checkbox-container .checkicon").on('keydown', function(e) {
            //check for key press of Enter o spacebar when checkbox is focused
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                //toggle checkbox checked attribute
                $("#terms").attr('checked', !$("#terms").attr('checked'));  
            }
        });
    }
}

functionHandler.init();