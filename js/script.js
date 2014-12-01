// Google maps
window.onload = function () {

    'use strict';

    var latlng = new google.maps.LatLng(57.632631, 39.886204);

    var styles = [

        {
            "stylers": [
                { "visibility": "simplified" },
                { "invert_lightness": true }
            ]
        },{
            "featureType": "transit.station",
            "stylers": [
                { "visibility": "simplified" },
                { "saturation": -99 }
            ]
        },{
            "featureType": "road",
            "stylers": [
                { "color": "#000000" }
            ]
        },{
            "featureType": "landscape",
            "stylers": [
                { "color": "#141414" }
            ]
        },{
            "elementType": "labels.text.fill",
            "stylers": [
                { "color": "#808080" }
            ]
        },{
            "featureType": "poi",
            "stylers": [
                { "color": "#555" }
            ]
        },{
            "elementType": "labels.text",
            "stylers": [
                { "saturation": 1 },
                { "weight": 0.1 },
                { "color": "#7f8080" }
            ]
        },{
        }

    ];


    var myOptions = {
        zoom: 17,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false,
        styles: styles
    };

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<span class="cp">RoomS</span>'+

        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var map = new google.maps.Map(document.getElementById('map'), myOptions);

    var myLatlng = new google.maps.LatLng(57.632726, 39.888447);

    var image = 'images/poi.png';
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'RoomS',
        icon: image
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

}