$(document).ready(function () {
    //append the css
    $('<style>@import url(http://weloveiconfonts.com/api/?family=entypo);[class*=entypo-]:before{font-family:entypo,sans-serif}*{-webkit-font-smoothing:antialiased;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none}body,html{width:100%;height:100%;margin:0;padding:0}#header{height:50px;width:100%;background:#333}#header #model{width:79%;border:0;padding:1em;background:0 0;outline:0;color:#eff0f2}#header a#view{width:20%;text-align:center;display:block;height:100%;text-decoration:none;float:right;line-height:3;background:#eff0f2;color:#333}#header #overlay{position:absolute;width:100%;height:100%;background:url();background-size:cover}[class*="-cancel"]{color:#FF4351;position:absolute;font-size:1.4em;margin:-.4em .15em}.hide{opacity:0}</style>');
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