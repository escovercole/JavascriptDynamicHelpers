
/*
    Developed by
    Cole Escover

    Conditionally displays some div depending on checkbox/radio button input

    ---------------------
        Assigning IDs
    ---------------------

        Assign some ID to the div to be displayed/hidden
            <div id="ConditionalDiv">
                ...
            </div>

        --------------------
              Checkbox
        --------------------
        Assign some ID to the checkbox that conditionally displays div

                <label class="form-check">
                    @Html.CheckBoxFor(model => model.boolProp, new { @class = "form-check-input", @id = "CheckBoxID" })
                    @Html.LabelFor(model => model.boolProp)
                </label>

        --------------------
                Radio
        --------------------
            Assign some IDs name to input elements. (e.g. YesRadio, NoRadio)

                <label>Yes</label>
                @Html.RadioButtonFor(model => Model.boolProp, true, new { @id = "YesRadio" })
                <label>No</label>
                @Html.RadioButtonFor(model => Model.boolProp, false, new { @id = "NoRadio" })
            

    ----------------------
        Initialization
    ----------------------
    On page load, call set up with ID assigned to input fields/div

        $(document).ready(function () {
            SetUpCheckboxConditional('CheckBoxID', 'ConditionalDiv');
            SetUpRadioConditional('YesRadio', 'NoRadio', 'ConditionalDiv');
        });

*/


//Conditionally display div of divID if yes radio button is checked
function SetUpRadioConditional(yesRadioID, noRadioID, divID) {
    var yesRadioBtn = document.getElementById(yesRadioID);
    var noRadioBtn = document.getElementById(noRadioID);
    var divToShowHide = document.getElementById(divID);

    // Function to toggle the visibility of the div based on the radio button's checked status
    function toggleDiv() {
        if (yesRadioBtn.checked) {
            divToShowHide.style.display = "block";
        } else {
            divToShowHide.style.display = "none";
        }
    }

    // Call the toggleDiv function to set the initial state
    toggleDiv();

    // Add event listener to the yes radio button to trigger the toggleDiv function
    yesRadioBtn.addEventListener("change", toggleDiv);

    // Add event listener to the no radio button to trigger the toggleDiv function
    noRadioBtn.addEventListener("change", toggleDiv);
}



//Conditionally display div of divID if the checkbox is checked
function SetUpCheckboxConditional(checkID, divID) {
    var checkBox = document.getElementById(checkID);
    var divToShowHide = document.getElementById(divID);

    // Function to toggle the visibility of the div based on the radio button's checked status
    function toggleDiv() {
        if (checkBox.checked) {
            divToShowHide.style.display = "block";
        } else {
            divToShowHide.style.display = "none";
        }
    }

    // Call the toggleDiv function to set the initial state
    toggleDiv();

    // Add event listener to the yes radio button to trigger the toggleDiv function
    checkBox.addEventListener("change", toggleDiv);
}


