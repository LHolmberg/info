$(document).ready(function() {
    $('#nav li a').append('<div class="hover">');

    $('#nav li a').hover(function() {
        $('.hover').stop(true, true).slideDown('1000');

    },

    //Mouseout, fadeOut the hover class


    function() {

        $('.hover').stop(true, true).slideUp('1000');

    }).click(function() {

        //Add selected class if user clicked on it
        $(this).addClass('selected');


    });
});
