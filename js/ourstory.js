$(document).on('ready', function () {
    $('a[href="#proposal"]').on('show.bs.tab', function (e) {
        $('.bg-img-switch').removeClass('in').filter('.proposal').addClass('in');
    })

    $('a[href="#dating"]').on('show.bs.tab', function (e) {
        $('.bg-img-switch').removeClass('in').filter('.dating').addClass('in');
    })

    $('a[href="#meeting"]').on('show.bs.tab', function (e) {
        $('.bg-img-switch').removeClass('in').filter('.meeting').addClass('in');
    })
});