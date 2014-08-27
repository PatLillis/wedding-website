$(function () {
    var images = $('.images img'),
        buttons = $('.buttons .button');

    buttons.on('click', function (e) {
        var index = $(this).index();

        images.removeClass('active');
        buttons.removeClass('active');

        images.eq(index).addClass('active');
        $(this).addClass('active');
    });
});