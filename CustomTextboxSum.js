
/*
    Developed by
    Cole Escover

    Auto sums collection of textboxes into another textbox

    ---------------------
    Assigning classes & ID
    ---------------------
    Assign some class name to input elements. (e.g. Amount)

        @Html.TextBoxFor(model => model.amount1Prop, new { @class = "form-control Amount" })
        @Html.TextBoxFor(model => model.amount2Prop, new { @class = "form-control Amount" })

    Assign some ID to the textbox to be summed into
        @Html.TextBox("Total Amount", 0, new { @class = "form-control", @readonly = "readonly", @id = "TotalAmount" })


    ----------------------
        Initialization
    ----------------------
    On page load, call set up with class name/ID assigned to input fields

        $(document).ready(function () {
            SetUpSumValue("Amount", "TotalAmount");
        });

*/

function SetUpSumValue(textboxClass, totalId) {
    var textboxes = document.querySelectorAll('.' + textboxClass);
    textboxes.forEach(function (textbox) {
        textbox.addEventListener('input', function () {
            UpdateTotal(textboxClass, totalId);
        });
        UpdateTotal(textboxClass, totalId);
    });
}

function UpdateTotal(textboxClass, totalId) {
    var totalAmount = 0;
    $("." + textboxClass).each(function () {
        // Remove commas from the value before parsing
        var amount = parseFloat($(this).val().replace(/,/g, '')) || 0;
        totalAmount += amount;
    });
    // Format the total amount with commas
    $("#" + totalId).val(totalAmount.toLocaleString());
}

