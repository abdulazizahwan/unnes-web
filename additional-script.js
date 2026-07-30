jQuery(document).ready(function ($) {        // Initialize Select2 on `.unnes-select2` elements; use `data-placeholder` and allow clearing
    $('.unnes-select2').select2({
        allowClear: true,
        width: '100%',
        placeholder: $(this).data('placeholder'),
    });

    // Navigate to the selected option's URL when selection changes
    $('.unnes-select2').on('change', function () {
        var selectedValue = $(this).val();
        if (selectedValue) {
            window.location.href = selectedValue;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var prompt = document.getElementById("unnes-helpdesk-prompt");
    var closeButton = document.getElementById(
        "unnes-helpdesk-prompt-close"
    );

    // Exit early if required elements are not present in the DOM
    if (!prompt || !closeButton) {
        return;
    }

    // Show the helpdesk prompt 1.2 seconds after the page has loaded
    window.setTimeout(function () {
        prompt.classList.add("is-visible");
    }, 1200);

    // Close the helpdesk prompt when the close button is clicked
    closeButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        prompt.classList.remove("is-visible");
    });
});