$(document).ready(function () {
    //Append the html
    $('<div id="header"> <input type="text" id="model" /> <a href="#" id="view"><span class="cross hide entypo-cancel"></span><span class="entypo-eye"></span></a> <!-- the image --> <div id="overlay"></diV> </div><script>').appendTo('body');


    //Create variables
    var mod = $('#model'),
        url = $('#model').val(),
        view = $('#view');
    //On Keyup = event
    mod.on('keyup', function (e) {
        var url = $('#model').val(),
            overlay = $('#overlay');

        e.preventDefault();
        overlay.css({
            background: 'url(' + url + ')',
            backgroundSize: 'cover'
        });



    });

    //Hide image
    view.on('click', function () {
        var overlay = $('#overlay');
        $(this).find('.cross').toggleClass('hide');
        overlay.toggleClass('hide');
    });


});