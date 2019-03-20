$(document).ready(function() {
    var userFeed = new Instafeed({
        get: 'user',
        userId: '4939764251',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '4939764251.1677ed0.7926f84ef4474e77bd780ca52e778ea8',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});