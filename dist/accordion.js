/*
* @Author: 卓文理
* @Email : 531840344@qq.com
* @Desc  : 折叠菜单
*/

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        factory(jQuery);
    }
}(function ($) {
    var ua = navigator.userAgent;
    var isMobile = /(iPhone|Android|Mobile)/.test(ua);
    var EVENT_TAP = isMobile && !jQuery ? 'tap' : 'click';

    var accordion = function(e, options) {
        var $accordion = this.$accordion = $(e);

        this.options = $.extend({
            animate: true,
            duration: 500
        }, options);

        this.init();
    }

    accordion.prototype = {
        constructor: accordion,
        init: function() {
            var $accordion = this.$accordion;
            var that = this;

            // $accordion.find('.weui_accordion_content').slideUp()

            $accordion.delegate('.weui_accordion_title', EVENT_TAP, function() {
                var $title = $(this);
                var $content = $title.parent().find('.weui_accordion_content');

                if ($title.hasClass('active')) {
                    $title.removeClass('active');
                    that.down($content);
                } else {
                    $title.addClass('active');
                    that.up($content);
                }
            });
        },
        up: function($content) {
            var options = this.options;

            if (options.animate) {
                $content.slideDown(options.duration);

                setTimeout(function() {
                    $content.addClass('active');
                }, options.duration);
            } else {
                $content.show();
                $content.addClass('active');
            }
        },
        down: function($content) {
            var options = this.options;

            if (options.animate) {
                $content.slideUp(options.duration);

                setTimeout(function() {
                    $content.removeClass('active');
                }, options.duration);
            } else {
                $content.hide();
                $content.removeClass('active');
            }
        },
    }

    $.fn.extend({
        accordion: function(options) {
            new accordion(this, options);
        },
    });
}));