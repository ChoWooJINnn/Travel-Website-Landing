document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#calendar", {
        mode: "range",
        dateFormat: "Y-m-d",
        minDate: "today",
    });
});
