$(document).on('ready', function () {
    var weddingparty = {
        megan: {
            element: $('.bridesmaid-1'),
            title: 'Megan Leaman - Maid of Honor',
            content: 'Megan and Kiersten have been friends for 10 years, having met during their sophomore year at Center Grove High School in CGTV class. They spent many early (read: caffeinated) mornings together filming and editing projects and quickly bonded over their love of music, particularly Jack’s Mannequin/Andrew McMahon. Since, they’ve bonded over a mutual love of color-coordinated organizational supplies, photography adventures, vinyl records, and a general understanding that they’re both terrible at remembering to call the other back. Fun fact: Megan once slapped a guy at Kiersten’s birthday party because he was being offensive.',
            subtitle: 'Maid of Honor'
        },
        emily: {
            element: $('.bridesmaid-2'),
            title: 'Emily Kallenberg - Bridesmaid',
            content: 'Emily and Kiersten met their freshman year of college, but didn’t really get to know each other until the end of sophomore year, after they’d decided to be roommates for junior year. Their friendship has been built on an amazing string of life adventures, including theatre shows, singing Ke$ha while making dinosaur chicken nuggets, Law and Order SVU marathons, talking about life into the wee hours of the morning, summers in Dayton, surviving an apartment filled with ghosts and critters, and having board game double-dates. Kiersten was also a bridesmaid in Emily’s wedding in August 2013! Fun fact: Emily once saved Kiersten from being a floating head on-stage by pulling a dress for her that was a different color than the set, after her original costume had been stolen.'
        },
        lindsay: {
            element: $('.bridesmaid-3'),
            title: 'Lindsay Smith - Bridesmaid',
            content: 'Lindsay and Kiersten met during 8th grade gym class. Kiersten said that her hair was poufy and all “NER!” and Lindsay laughed. Instant friendship. They continued to bond over the teen drama One Tree Hill and the horror of wearing braces. In high school, they added secret crushes (who of course were talked about in code), their hatred of ice-breakers (Student Council will do that to you), and their mutual intolerance for real life teenage drama to the list of shared interests. Although apart for college, they did manage to visit each other a few times. Kiersten was also a bridesmaid in Lindsay’s wedding in August 2014! Fun fact: Lindsay was the first friend that Kiersten ever let drive her car in High School.'
        },
        renee: {
            element: $('.bridesmaid-4'),
            title: 'Renee Raber - Bridesmaid',
            content: 'Renee and Kiersten met in 7th grade. From middle school dances and braces to high school sports and CGTV editing stations, they conquered the awkward years together. They spent Spring Break ’08 in 60-degree South Carolina where, while Miley was still moonlighting as Hannah Montana, they were appalled to learn that the U-18 club scene was already twerking. You never know if Renee’s car stereo is going to be blaring Brad Paisley or the newest Lil Wayne beats, but either way, she knows all the words. She loves her husky Aleutia and her daughter Isabella more than anything in the world. Kiersten was also a bridesmaid in her wedding in July 2012! Fun fact: Kiersten and Renee nicknamed Renee’s old car the “SS Cavalier” because they drove through a huge puddle once and the water went over the roof!'
        },
        pat: {
            element: $('.groomsman-1'),
            title: 'Pat Coyle - Best Man',
            content: 'Pat and Pat met freshman year at UD, when they lived on the same floor of Founders Hall. When sophomore year rolled around, they decided to be roommates. After a year spent staying up too late playing video games, performing in theatre productions together, impersonating Rodgers & Hammerstein, they decided to be roommates again junior year. After another year spent staying up too late playing video games, finding creative uses for their many oddly-shaped closets, and devouring Chopped marathons, they figured hey, third times a charm, and decided to be roommates for yet another year (along with Steven Ahlrichs). Fun fact: Pat (Lillis) owes Pat (Coyle) a Wookie life debt. No joke.'
        },
        jojo: {
            element: $('.groomsman-2'),
            title: 'Steven Alrichs - Groomsman',
            content: 'Steven and Pat met freshman year at the annual University of Dayton Theater Meeting. At first Pat thought Steve was kind of goofy, but they became friends anyway. They spent many nights walking the streets of Dayton, stealing construction cones, and generally causing mischief. Their senior year at UD, they decided to be roommates (along with Pat Coyle). They bonded over early-morning coffees, late-night games of Halo, and their mutual love of Nerds Rope. Fun fact: Pat once saved Steven from being turned into a zombie. And by saved I mean shot with a Nerf gun. Repeatedly.'
        },
        sean: {
            element: $('.groomsman-3'),
            title: 'Sean Lillis - Groomsman',
            content: 'Sean and Pat have been brothers for as long as either of them can remember. Growing up in a family of 6 can be rough, and the only way to survive it is to band together. As any middle sibling can tell you, it’s always better to get grouped with the older crowd, but Pat soon learned that he and Sean had a lot in common, and that hanging out with the little bro was actually pretty cool. From waking up at 6am to be the first one at the computer (Chip’s Challenge can get pretty competitive) to taking turns staying up waiting for Mom and Dad to get home, Sean and Pat grew up pretty close. In high school, they ended up being in the same Marching Band trumpet squad, and both of their colleges have sports teams called the Flyers! Fun fact: Sean and Pat are EXACTLY THE SAME HEIGHT. EXACTLY.'
        },
        steve: {
            element: $('.groomsman-4'),
            title: 'Stephen Kallenberg - Groomsman',
            content: 'Stephen and Pat met during Pat’s freshman year when they were both in a theatre production called The Lark. It wasn’t until after they had both graduated, however, that they became really good friends. They shared an apartment (kind of) for a hectic month following Pat’s graduation, and spent a lot of time discussing life, playing board games, and going on crazy double-dates with their respective significant others. Pat was also a groomsman in Steve’s wedding in August 2013! Fun fact: Pat is secretly super jealous of Steve’s ability to grow facial hair.'
        }
    };

    var popoverOptions = {
        placement: "top",
        toggle: "popover",
        trigger: "click",
        //content: "And here's some amazing content. It's very engaging. Right?",
        container: '.popover-container'
    };

    for (var b in weddingparty) {
        setUpPopover(weddingparty[b]);
    }

    function setUpPopover(partyOption) {
        var template = {
            template: '<div class="popover party-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"><span>' + partyOption.subtitle + '</span></h3><div class="popover-content"></div></div>'
        };

        partyOption.element.popover($.extend(popoverOptions, partyOption, template)).on('show.bs.popover', function () {
            $('.popover-container').modal('show');
            $(this).addClass('in-front').blur();
        }).on('hide.bs.popover', function () { $('.modal-backdrop').click(); });
    }

    $('body').on('click', '.modal-backdrop', function () {
        $('.popover-container').modal('hide');
        $('.bridesmaid, .groomsman').removeClass('in-front').popover('hide');
    });
});