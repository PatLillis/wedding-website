$(document).on('ready', function () {

    $('a[href="#proposal"]').on('shown.bs.tab', function (e) {
        $('.bg-img-wrapper img').removeClass('in').filter('.proposal').addClass('in');
    })

    $('a[href="#dating"]').on('shown.bs.tab', function (e) {
        $('.bg-img-wrapper img').removeClass('in').filter('.dating').addClass('in');
    })

    $('a[href="#meeting"]').on('shown.bs.tab', function (e) {
        $('.bg-img-wrapper img').removeClass('in').filter('.meeting').addClass('in');

    })
});