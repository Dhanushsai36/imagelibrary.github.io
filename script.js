$(document).ready(function() {
    // Array to hold image file names
    var imageFiles = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg'];

    // Function to dynamically generate options for the dropdown menu
    function generateOptions() {
        var dropdown = $('#optionsDropdown');
        dropdown.empty(); // Clear existing options

        // Loop through imageFiles array and create options
        imageFiles.forEach(function(filename, index) {
            var option = $('<a class="dropdown-item" href="#">Image ' + (index + 1) + '</a>');
            option.data('filename', filename); // Store filename data in option
            dropdown.append(option);
        });
    }

    // Toggle button click event
    $('#toggleBtn').on('click', function() {
        $('#optionsDropdown').toggleClass('show');
    });

    // Dropdown item click event
    $(document).on('click', '#optionsDropdown .dropdown-item', function() {
        var filename = $(this).data('filename');
        // Load the selected image
        loadImage(filename);
    });

    // Function to load the selected image
    function loadImage(filename) {
        // Open the selected image in a new window or tab
        window.open('images/' + filename);
    }

    // Generate options when the page loads
    generateOptions();

    
});
