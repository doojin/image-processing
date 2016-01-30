define(['command/command', 'service/painter'], function(Command, painter) {

    var loadImageCmd = new Command('load image', 1);

    loadImageCmd.process = function(args) {
        painter.loadImage(args[0]);
    };

    return loadImageCmd;

});