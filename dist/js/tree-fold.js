(function ($) {

    $.fn.treeFold = function (options) {

        var settings = $.extend({
            baseClass: 'fa',
            openedClass: 'fa-minus',
            closedClass: 'fa-plus',
            onLastItem: function (e) {
            }
        }, options);

        var tf = $(this);
        tf.addClass("tf");


        tf.find('li').has("ul").each(function () {

            var row = $(this);

            row.prepend("<i class='bar " + settings.baseClass + " " + settings.closedClass + "'></i>");
            row.addClass('tRow');
            row.on('click', function (e) {

                if (this === e.target) {
                    var icon = $(this).children('i:first');
                    icon.toggleClass(settings.openedClass + " " + settings.closedClass);
                    $(this).children().children().toggle();
                }

            });

            row.children().children().toggle();
        });

        tf.find('li').not(":has(ul)").each(function () {

            var row = $(this);
            row.on('click', function (e) {
                if (this === e.target) {
                    settings.onLastItem(row);
                }
            });
        });


        tf.find('.tRow .indicator').each(function () {
            $(this).on('click', function () {
                $(this).closest('li').click();
            });
        });

    }


}(jQuery));
