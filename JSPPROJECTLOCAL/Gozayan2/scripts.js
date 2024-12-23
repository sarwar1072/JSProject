$(document).ready(function () {
    // When the "Tour" button is clicked
    $("#btnTour").click(function () {
        // Hide other sections if they are visible
        $("#hotelSection, #flightSection, #visaSection").hide();

        // Show the tour section
        $("#tourSection").show();
        
        // Optionally, load additional data dynamically via AJAX if needed
        // Example: load popular tours
        loadPopularTours();
    });
});

// Example AJAX function to load popular tours
function loadPopularTours() {
    $.ajax({
        type: "GET",
        url: "/Tour/GetPopularTours",
        success: function (data) {
            // Populate the popular tours section with data
            let popularToursHtml = '';
            $.each(data, function (index, tour) {
                popularToursHtml += `<a href="#" class="list-group-item list-group-item-action">${tour.name}</a>`;
            });
            $("#popularTours .list-group").html(popularToursHtml);
        }
    });
}
