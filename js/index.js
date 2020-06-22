$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $("#navFirst").addClass("scrolling");
        } else {
            $("#navFirst").removeClass("scrolling");
        }

    })
    $('.menupro').click(function(){
        $(".nav-menu").toggleClass("active-menu");
    })


    $.support.placeholder = (function () {
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();


    // Hide labels by default if placeholders are supported
    if ($.support.placeholder) {
        $('.form-label').each(function () {
            $(this).addClass('js-hide-label');
        });

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function (e) {

            // Cache our selectors
            var $this = $(this),
                $label = $this.parent().find("label");

            switch (e.type) {
                case 'keyup': {
                    $label.toggleClass('js-hide-label', $this.val() == '');
                } break;
                case 'blur': {
                    if ($this.val() == '') {
                        $label.addClass('js-hide-label');
                    } else {
                        $label.removeClass('js-hide-label').addClass('js-unhighlight-label');
                    }
                } break;
                case 'focus': {
                    if ($this.val() !== '') {
                        $label.removeClass('js-unhighlight-label');
                    }
                } break;
                default: break;
            }
          
        });
    }
})