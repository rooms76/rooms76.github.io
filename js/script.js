// Google maps
window.onload = function () {

    'use strict';

    var latlng = new google.maps.LatLng(57.632718, 39.887852);

    var styles = [

        {
            "stylers": [
                { "visibility": "simplified" },
                { "invert_lightness": false }
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
                { "color": "#c0c0c0" }
            ]
        },{
            "featureType": "landscape",
            "elementType": "geometry.stroke",
            "stylers": [
                { "color": "#505050" },
                { "visibility": "on" }
            ]
        },{
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                { "color": "#e8e8e8" }
            ]
        },{
            "featureType": "landscape.natural",
            "stylers": [
                { "color": "#fcfcfc" }
            ]
        },{
            "elementType": "labels.text.fill",
            "stylers": [
                { "color": "#505050" }
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
                { "color": "#202020" }
            ]
        },{
            "featureType": "administrative.land_parcel",
            "stylers": [
                { "color": "#303030" }
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
        '<span>RoomS<br>ул. Красный Съезд, 10в</span>'+

        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var map = new google.maps.Map(document.getElementById('map'), myOptions);

    var myLatlng = new google.maps.LatLng(57.632663, 39.888827);

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