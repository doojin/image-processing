define(['command/command', 'filter/join_pixels'], function(Command, joinPixelsFilter) {

    var joinPixelsCmd = new Command('join pixels', 1);

    joinPixelsCmd.process = function(args) {
        joinPixelsFilter.run(parseInt(args[0]));
    };

    return joinPixelsCmd;

});