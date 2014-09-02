$(function () {
    var galleryImages = $('.gallery-image'),
        activeIndex = getIndex(galleryImages.find('.active')),
        indicators = $('.carousel-indicators > .indicator[data-slide-to]');

    //No active elements, activate first.
    if (activeIndex == -1) {
        galleryImages.first().addClass('active');
        activeIndex = 0;
    }
    else if (getIndex(indicators.find('.active')) != activeIndex) {
        indicators.removeClass('active').eq(activeIndex).addClass('active');
    }

    galleryImages.find('.carousel-control.left').on('click', prevSlide);
    galleryImages.find('.carousel-control.right').on('click', nextSlide);
    indicators.on('click', function () {
        if (!$(this).hasClass('active'))
            toSlide($(this).data('slide-to'));
    });

    function getIndex($obj) {
        return $obj.prevAll().length;
    }

    function prevSlide()
    {
        var thisSlide, nextSlide;

        if (activeIndex != -1 && activeIndex < galleryImages.length) {
            thisSlide = galleryImages.eq(activeIndex);
            nextSlide = galleryImages.eq((activeIndex - 1) % galleryImages.length);
        }
        else {
            thisSlide = null;
            nextSlide = galleryImages.first();
        }

        slide(thisSlide, nextSlide);
    }

    function nextSlide() {
        var thisSlide, nextSlide;

        if (activeIndex != -1) {
            thisSlide = galleryImages.eq(activeIndex);
            nextSlide = galleryImages.eq((activeIndex + 1) % galleryImages.length);
        }
        else {
            thisSlide = null;
            nextSlide = galleryImages.first();
        }

        slide(thisSlide, nextSlide);
    }

    function toSlide(targetIndex)
    {
        var thisSlide, nextSlide;

        if (activeIndex != -1 && activeIndex < galleryImages.length &&
            targetIndex != -1 && targetIndex < galleryImages.length) {
            thisSlide = galleryImages.eq(activeIndex);
            nextSlide = galleryImages.eq(targetIndex);
        }
        else {
            thisSlide = null;
            nextSlide = galleryImages.first();
        }

        slide(thisSlide, nextSlide);
    }

    function getSlideIndex(slide)
    {
        return getIndex(slide);
    }

    function slide(thisSlide, nextSlide)
    {
        if (nextSlide) {
            if (thisSlide) {
                thisSlide.removeClass('active');
                indicators.eq(getIndex(thisSlide)).removeClass('active');
            }

            nextSlide.addClass('active');
            indicators.eq(getIndex(nextSlide)).addClass('active');
            activeIndex = getSlideIndex(nextSlide);
        }
    }
});