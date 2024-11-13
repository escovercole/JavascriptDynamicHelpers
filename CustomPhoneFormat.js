﻿
/*
    Developed by
    Cole Escover

    Auto formats input elements as phone numbers in format: (555) 555-5555

    ---------------------
      Assigning classes
    ---------------------
    Assign some class name to input elements. (e.g. PhoneNumber)

        @Html.TextBoxFor(model => model.phoneNumProp, new { @class = "form-control PhoneNumber" })


    ----------------------
        Initialization
    ----------------------
    On page load, call set up with class names assigned to input fields

        $(document).ready(function () {
            SetUpPhoneFormatting('PhoneNumber');
        });

*/

//Format phone number
function FormatPhone(textBox) {
    var input = textBox.value;
    input = input.replace(/\D/g, '');
    var size = input.length;
    if (size > 0) { input = "(" + input }
    if (size > 3) { input = input.slice(0, 4) + ") " + input.slice(4, 11) }
    if (size > 6) { input = input.slice(0, 9) + "-" + input.slice(9) }
    textBox.value = input;
}

// Attach event listener to input fields with a specific class
function SetUpPhoneFormatting(className) {
    $('.' + className).each(function () {
        // Attach input event listener
        $(this).on('input', function () {
            FormatPhone(this);
        });
        // Format to initial state
        FormatPhone(this);
    });
}