$(function () {
    var tabSections = $('ul.nav.nav-tabs'),
        pageAnchors = tabSections.find('> li.page > a[role="tab"][data-toggle="tab"]'),
        prevPageAnchors = tabSections.find('> li.page-prev > span[role="tab"]'),
        nextPageAnchors = tabSections.find('> li.page-next > span[role="tab"]');

    //Handle page tabbing
    pageAnchors.on('click', function () {
        var $this = $(this),
            tabSection = $this.closest('ul.nav.nav-tabs'),
            activeListItem = tabSection.find('> .active'),
            activeTitle = tabSection.find('> .tab-titles > .active'),
            nextTitle = $this.attr('href').replace('#', ''),
            nextTitleEl = tabSection.find('> .tab-titles > .' + nextTitle.toLowerCase()),
            pagePrev = tabSection.find('li.page-prev'),
            pageNext = tabSection.find('li.page-next');

        if ($this.parent('li').hasClass('active')) return

        var transition = $.support.transition
          && activeTitle.hasClass('fade');

        function next() {
            activeTitle.removeClass('active');
            nextTitleEl.addClass('active');

            if (transition) {
                nextTitleEl[0].offsetWidth; // reflow for transition
                nextTitleEl.addClass('in');

                if (!$this.parent('li').hasClass('page-first')) {
                    pagePrev[0].offsetWidth;
                    pagePrev.addClass('in');
                    pagePrev.find('> span[role="tab"]').removeClass('disabled');
                }
                if (!$this.parent('li').hasClass('page-last')) {
                    pageNext[0].offsetWidth;
                    pageNext.addClass('in');
                    pageNext.find('> span[role="tab"]').removeClass('disabled');
                }
            } else {
                nextTitleEl.removeClass('fade');

                if (!$this.parent('li').hasClass('page-first')) {
                    pagePrev.removeClass('fade');
                    pagePrev.find('> span[role="tab"]').removeClass('disabled');
                }
                if (!$this.parent('li').hasClass('page-last')) {
                    pageNext.removeClass('fade');
                    pageNext.find('> span[role="tab"]').removeClass('disabled');
                }
            }
        }

        transition ?
          activeListItem
            .one('bsTransitionEnd', next)
            .emulateTransitionEnd(150) :
        next();

        activeTitle.removeClass('in');

        if ($this.parent('li').hasClass('page-first')) {
            tabSection.find('li.page-prev').removeClass('in').find('> span[role="tab"]').addClass('disabled');
        }
        if ($this.parent('li').hasClass('page-last')) {
            tabSection.find('li.page-next').removeClass('in').find('> span[role="tab"]').addClass('disabled');
        }
    });

    //Handle "next tab" button
    nextPageAnchors.on('click', function (e) {
        if ($(this).hasClass('disabled')) {
            e.preventDefault();
            return false;
        }
        
        var $this = $(this),
            tabSection = $this.closest('ul.nav.nav-tabs'),
            activeListItem = tabSection.find('> .active'),
            nextListItem = activeListItem.prev('.page');
        
        nextListItem.find('a[role="tab"]').click();
    });

    //Handle "previous tab" button
    prevPageAnchors.on('click', function (e) {
        if ($(this).hasClass('disabled')) {
            e.preventDefault();
            return false;
        }

        var $this = $(this),
            tabSection = $this.closest('ul.nav.nav-tabs'),
            activeListItem = tabSection.find('> .active'),
            prevListItem = activeListItem.next('.page');

        prevListItem.find('a[role="tab"]').click();
    });
});