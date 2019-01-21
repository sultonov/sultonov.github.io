$(function() {
    var worksgrid = $('#portfolio-grid');
    $('a', filters).on('click', function() {
        var selector = $(this).attr('data-filter');
        $('.current', filters).removeClass('current');
        $(this).addClass('current');
        worksgrid.isotope({
            filter: selector
        });
        return false;
    });
    $(window).on('resize', function() {
        var windowWidth = Math.max($(window).width(), window.innerWidth),
            itemWidht = $('.grid-sizer').width(),
            itemHeight = Math.floor(itemWidht * 0.95),
            itemTallHeight = itemHeight * 2;
        if (windowWidth > 500) {
            $('.portfolio-item', worksgrid).each(function() {
                if ($(this).hasClass('tall')) {
                    $(this).css({
                        height: itemTallHeight
                    });
                } else if ($(this).hasClass('wide')) {
                    $(this).css({
                        height: itemHeight
                    });
                } else if ($(this).hasClass('wide-tall')) {
                    $(this).css({
                        height: itemTallHeight
                    });
                } else {
                    $(this).css({
                        height: itemHeight
                    });
                }
            });
        } else {
            $('.portfolio-item', worksgrid).each(function() {
                if ($(this).hasClass('tall')) {
                    $(this).css({
                        height: itemTallHeight
                    });
                } else if ($(this).hasClass('wide')) {
                    $(this).css({
                        height: itemHeight / 2
                    });
                } else if ($(this).hasClass('wide-tall')) {
                    $(this).css({
                        height: itemHeight
                    });
                } else {
                    $(this).css({
                        height: itemHeight
                    });
                }
            });
        }
        worksgrid.isotope();
    }).resize();
    $('.popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Alex Smith</small>';
            }
        }
    });
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $("#cf-form").submit(function (e) {
        e.preventDefault();
        var isValid = true;
        var email = $("#email").val();
        $("#name").css("border-color", "#e8eaf6");
        $("#email").css("border-color", "#e8eaf6");

        if($("#name").val() === ""){
            $("#name").css("border-color", "red");
            $("#name").focus();
            isValid = false;
        }
        if($("#email").val() === ""){
            $("#email").css("border-color", "red");
            $("#email").focus();
            isValid = false;
        }
        if(!validateEmail(email)){
            $("#email").css("border-color", "red");
            $("#email").focus();
            isValid = false;
        }

        if(isValid){
            var form_data = $("#cf-form").serialize();
            $.ajax({
                type: "POST",
                url: "send-mail.php",
                dataType: "json",
                data: form_data
            }).done(function (data) {
                if(data["status"] === "success"){
                    $(".contact-message").html("<span class='sucess'>Thank you! Your message has been successfully sent. We will contact you very soon!</span>");
                }
                if(data["status"] === "error"){
                    $(".contact-message").html("<span class='error'>There was an error trying to send your message. Please try again later.</span>");
                }
            }).fail(function (data) {
                console.log(data);
            });
        }
    });
});