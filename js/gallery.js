$(function () {
    var galleryImages = $('.gallery-image'),
        activeIndex = galleryImages.index('.active');

    //No active elements, activate first.
    if (activeIndex == -1) {
        galleryImages.first().addClass('active');
    }

    galleryImages.find('.carousel-control.left').on('click', prevSlide);
    galleryImages.find('.carousel-control.right').on('click', nextSlide);

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
    }

    function getSlideIndex(slide)
    {
        return galleryImages.index(slide);
    }

    function slide(thisSlide, nextSlide)
    {
        if (nextSlide) {
            nextSlide.addClass('active');
            activeIndex = getSlideIndex(nextSlide);

            if (thisSlide)
                thisSlide.removeClass('active');
        }
    }
});