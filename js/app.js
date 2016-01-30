(function() {
    var URL_JQUERY = 'https://code.jquery.com/jquery-2.2.0.min';

    require.config({
        paths: {
            jquery: URL_JQUERY
        }
    });

    define(['jquery', 'service/painter', 'config'], function($, painter, config) {
        $('#canvas')
            .attr('width', config.canvasWidth)
            .attr('height', config.canvasHeight)
            .css('width', config.canvasWidth + 'px')
            .css('height', config.canvasHeight + 'px');

        painter.loadImage(config.imageFile);
    });

}());