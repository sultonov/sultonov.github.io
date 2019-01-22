var awards = [
        {
            "title": "Blah blah blah blah blah blah blah blah blah blah blah blah blah",
            "by": "by Blah blah blah blah at blah blah",
            "url": ""
        }
    ]
;
$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>'+item.el.data('by')+'</small>';
            }
        }
    });
    var div = document.getElementsByClassName('popup-gallery')[0];
    var elem = "<div class='row'>";
    for (var i = 0; i < awards.length; i++) {
        if (i % 4 === 0 && i !== 0) {
            elem += "</div>";
            div.innerHTML += elem;
            elem = "<div class='row'>";
        }
        elem += "<div class=\"col-md-3 sertificate\">";
        elem += "<a href=\"http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg\" title=\"" + awards[i].title + "\"";
        elem += "data-by=\"" + awards[i].by + "\">";
        elem += "<img class=\"sertificate-item\" src=\"http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_s.jpg\">";
        elem += "<p class='certificate-text'>"+awards[i].title+"</p>";
        elem += "</a></div>";
        if (i === awards.length - 1)
            div.innerHTML += elem + "</div>";
    }
});