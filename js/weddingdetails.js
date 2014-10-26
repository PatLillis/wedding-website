$(document).on('ready', function () {
    //Hook in "view map", "view details" buttons for small screens
    var viewMapButton = $('#view-map'),
        viewDetailsWrapper = $('.view-details-wrapper'),
        viewDetailsButton = $('#view-details'),
        mapCover = $('.google-map-cover'),
        contentCardRow = $('.content-card-row');

    viewMapButton.on('click', function () {
        mapCover.addClass('active');
        contentCardRow.addClass('active');

        setTimeout(function () {
            viewDetailsButton.addClass('btn-active');
        }, 300);
    });


    viewDetailsButton.on('click', function () {
        mapCover.removeClass('active');
        contentCardRow.removeClass('active');
        viewDetailsButton.removeClass('btn-active');
    });

    //Initialize map
    var barnLatLng = new google.maps.LatLng(39.779423, -86.391244);
    var churchLatLng = new google.maps.LatLng(39.847335, -86.408528);
    var hotelLatLng = new google.maps.LatLng(39.764989, -86.360064);
    var shownSpots = [barnLatLng];

    centerLatLng = new google.maps.LatLng(
        (Math.max(barnLatLng.lat(), churchLatLng.lat(), hotelLatLng.lat()) + Math.min(barnLatLng.lat(), churchLatLng.lat(), hotelLatLng.lat())) / 2,
        (Math.max(barnLatLng.lng(), churchLatLng.lng(), hotelLatLng.lng()) + Math.min(barnLatLng.lng(), churchLatLng.lng(), hotelLatLng.lng())) / 2);

    var mapOptions = {
        center: churchLatLng,
        zoom: 13,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map($('#map-canvas').get(0),
        mapOptions);

    function updateCenter(center) {
        map.panTo(center);
    }

    function bounce(marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }

    function stopBounce(marker) {
        marker.setAnimation(null);
    }

    $('a[href="#ceremony"]').on('shown.bs.tab', function (e) {
        bounce(churchMarker);
        stopBounce(barnMarker);
        stopBounce(hotelMarker);
    });

    $('a[href="#reception"]').on('shown.bs.tab', function (e) {
        bounce(barnMarker);
        stopBounce(churchMarker);
        stopBounce(hotelMarker);
    }).one('shown.bs.tab', function () {
        updateCenter(barnLatLng);
    });

    $('a[href="#hotels"]').on('shown.bs.tab', function (e) {
        bounce(hotelMarker);
        stopBounce(barnMarker);
        stopBounce(churchMarker);
    }).one('shown.bs.tab', function () {
        updateCenter(hotelLatLng);
    });

    var barnIcon = new google.maps.MarkerImage(
        'img/icons/barn-marker.png',
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(64, 92)
    );
    var churchIcon = new google.maps.MarkerImage(
        'img/icons/church-marker.png',
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(64, 92)
    );
    var hotelIcon = new google.maps.MarkerImage(
        'img/icons/hotel-marker.png',
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(64, 92)
    );

    // To add the marker to the map, use the 'map' property
    var barnMarker = new google.maps.Marker({
        position: barnLatLng,
        animation: null,
        map: map,
        title: "Avon Wedding Barn",
        icon: barnIcon
    });

    var churchMarker = new google.maps.Marker({
        position: churchLatLng,
        animation: google.maps.Animation.BOUNCE,
        map: map,
        title: "Journey Christian Church",
        icon: churchIcon
    });

    var hotelMarker = new google.maps.Marker({
        position: hotelLatLng,
        animation: null,
        map: map,
        title: "Fairfield Inn & Suites",
        icon: hotelIcon
    });

    var barnContentString = '<div class="info-window-content">' +
      '<h1 class="info-window-heading" class="firstHeading">Avon Wedding Barn</h1>' +
      '<div class="info-window-content-body">' +
      '<address>' +
        '7424 E. County Road 100 North<br>' +
        'Avon, IN 46123<br>' +
        '(317) 430-5391' +
      '</address>' +
      '<a href="http://www.avonweddingbarn.com" target="_blank">avonweddingbarn.com</a>' +
      '</div>';

    var churchContentString = '<div class="info-window-content">' +
      '<h1 class="info-window-heading" class="firstHeading">Journey Christian Church</h1>' +
      '<div class="info-window-content-body">' +
      '<address>' +
        '6690 E. U.S. Highway 136<br>' +
        'Brownsburg, IN 46112<br>' +
        '(317) 852-4630' +
      '</address>' +
      '<a href="http://www.4journey.com" target="_blank">4journey.com</a>' +
      '</div>';

    var hotelContentString = '<div class="info-window-content">' +
      '<h1 class="info-window-heading" class="firstHeading">Fairfield Inn & Suites</h1>' +
      '<div class="info-window-content-body">' +
      '<address>' +
        '119 Angelina Way<br>' +
        'Avon, IN 46123<br>' +
        '(317) 271-9200' +
      '</address>' +
      '<a href="http://www.marriott.com/hotels/travel/indav-fairfield-inn-and-suites-indianapolis-avon/" target="_blank">marriott.com</a>' +
      '</div>';

    var barnInfowindow = new google.maps.InfoWindow({
        content: barnContentString,
        //maxWidth: $('.container-fluid.main').innerWidth() - 50
    });
    var churchInfowindow = new google.maps.InfoWindow({
        content: churchContentString,
        //maxWidth: $('.container-fluid.main').innerWidth() - 50
    });
    var hotelInfowindow = new google.maps.InfoWindow({
        content: hotelContentString,
        //maxWidth: $('.container-fluid.main').innerWidth() - 50
    });

    google.maps.event.addListener(barnMarker, 'click', function () {
        churchInfowindow.close();
        hotelInfowindow.close();
        barnInfowindow.open(map, barnMarker);
    });
    google.maps.event.addListener(churchMarker, 'click', function () {
        barnInfowindow.close();
        hotelInfowindow.close();
        churchInfowindow.open(map, churchMarker);
    });
    google.maps.event.addListener(hotelMarker, 'click', function () {
        barnInfowindow.close();
        churchInfowindow.close();
        hotelInfowindow.open(map, hotelMarker);
    });
});