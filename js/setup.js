$(function () {
    var $window = $(window),
        $navbar = $('body > nav.navbar');

    $window.resize(onResize);
    onResize();

    function onResize() {
        if ($window.width() >= 768)
            $navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-bottom');
        else
            $navbar.removeClass('navbar-fixed-bottom').addClass('navbar-fixed-top');
    }
});