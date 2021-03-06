(function ($) {

    let $topTips = null;
    let timer = null;

    /**
     * show top tips
     * @param {String} content
     * @param {Object|Number} [options]
     */
    $.weui.topTips = function (content = 'topTips', options) {

        if ($topTips) {
            $topTips.remove();
            timer && clearTimeout(timer);
            $topTips = null;
        }

        if (typeof options === 'number') {
            options = {
                duration: options
            };
        }

        options = $.extend({
            duration: 3000
        }, options);
        const html = `<div class="weui_toptips weui_warn">${content}</div>`;
        $topTips = $(html);
        $topTips.appendTo($('body'));
        if (typeof $topTips.slideDown === 'function') {
            $topTips.slideDown(20);
        }

        timer = setTimeout(() => {
            if ($topTips) {
                if (typeof $topTips.slideUp === 'function') {
                    $topTips.slideUp(120, () => {
                        $topTips.remove();
                        $topTips = null;
                    });
                }
                else {
                    $topTips.remove();
                    $topTips = null;
                }
            }
        }, options.duration);
    };

})($);