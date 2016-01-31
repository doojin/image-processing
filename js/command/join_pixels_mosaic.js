define(['command/command', 'filter/join_pixels_mosaic'], function(Command, joinPixelsMosaicFilter) {

    var joinPixelsMosaicCmd = new Command('join pixels mosaic', 2);

    joinPixelsMosaicCmd.process = function(args) {
        joinPixelsMosaicFilter.run(parseInt(args[0]), parseInt(args[1]));
    };

    return joinPixelsMosaicCmd;

});