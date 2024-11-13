
/*
    Developed by
    Cole Escover

    Adds char counter below TextArea based on data-val-length-max attribute

    ---------------------
      Assigning ID
    ---------------------
    Assign some ID name to input element. (e.g. CountedProperty)

         @Html.TextAreaFor(model => model.stringPropToBeCounted, new { @class = "form-control", @id = "CountedProperty" })

    ----------------------
        Initialization
    ----------------------
    On page load, call set up with ID assigned to input field

        $(document).ready(function () {
            SetUpCharCounter("CountedProperty");
        });

*/
function SetUpCharCounter(textareaId) {
    const textcountId = textareaId + 'Text';
    const wordcountId = textareaId + 'Words'
    const textarea = document.querySelector("#" + textareaId);

    const counterContainer = document.createElement('div');
    counterContainer.id = textarea.id + 'CounterContainer'; // Set dynamic ID
    counterContainer.className = 'd-flex justify-content-end'; // Add any necessary classes

    // Insert the counter container after the textarea
    textarea.parentNode.insertBefore(counterContainer, textarea.nextSibling);

    // Dynamically create counter elements
    const wordCount = document.createElement("span");
    wordCount.id = wordcountId;
    wordCount.className = "d-none";
    wordCount.innerHTML = `Characters Remaining - <span id="${textcountId}"></span>`;
    counterContainer.appendChild(wordCount);

    const textcount = document.querySelector("#" + textcountId);

    // Get max length from data attribute
    const maxLen = parseInt(textarea.getAttribute("data-val-length-max")) || 200;

    function updateCharCount() {
        const textareaValue = textarea.value.length;

        textcount.innerHTML = maxLen - textareaValue;

        if (textareaValue > maxLen) {
            textcount.classList.add("text-danger");
            textarea.classList.add("textarea_danger");
        } else {
            textcount.classList.remove("text-danger");
            textarea.classList.remove("textarea_danger");
        }

        if (textareaValue < 1) {
            wordCount.classList.add("d-none");
        } else {
            wordCount.classList.remove("d-none");
        }
    }

    // Call updateCharCount on input event
    textarea.addEventListener("input", updateCharCount);

    // Initial call to update char count
    updateCharCount();
}

