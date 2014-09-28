$(document).on('ready', function () {
    var patCoyle = {
        'image': 'img/bridal-party/groomsman-1.png',
        'name': 'Pat Coyle',
        'role': 'Best Man',
        'description': 'Pat Coyle blah blah blah Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };

    var popoverOptions = {
        'placement': "top",
        'toggle': "popover",
        'trigger': "click",
        'content': "And here's some amazing content. It's very engaging. Right?",
        'container': '.popover-container',
        'template': '<div class="popover TEST" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    };

    //$('.groomsmen .groomsman-1'));

    $(".bridesmaid, .groomsman").popover($.extend(popoverOptions, patCoyle)).on('show.bs.popover', function () {
        $('.popover-container').modal('show');
        $(this).blur();
    });

    $('body').on('click', '.modal-backdrop', function () {
        $('.popover-container').modal('hide');
        $('.bridesmaid, .groomsman').popover('hide');
    });
});