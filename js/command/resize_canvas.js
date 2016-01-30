define(['command/command', 'config', 'service/canvas'], function(Command, config, canvas) {

    var resizeCanvasCmd = new Command('resize canvas', 2);

    resizeCanvasCmd.process = function(args) {
        config.canvasWidth = parseInt(args[0]);
        config.canvasHeight = parseInt(args[1]);
        canvas.redraw();
    };

    return resizeCanvasCmd;

});