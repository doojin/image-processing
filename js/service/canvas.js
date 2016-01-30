define(['jquery', 'config'], function($, config) {

    return {
        redraw: function() {
            $('#canvas')
                .attr('width', config.canvasWidth)
                .attr('height', config.canvasHeight)
                .css('width', config.canvasWidth + 'px')
                .css('height', config.canvasHeight + 'px');
        }
    };

});