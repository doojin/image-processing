(function() {
    var URL_JQUERY = 'https://code.jquery.com/jquery-2.2.0.min';

    require.config({
        paths: {
            jquery: URL_JQUERY
        }
    });

    define([
        'service/canvas',
        'service/painter',
        'service/command_processor'
    ], function(canvas, painter, cmdProcessor) {
        canvas.redraw();
        cmdProcessor.listen();
    });

}());