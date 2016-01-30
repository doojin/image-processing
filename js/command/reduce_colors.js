define(['command/command', 'filter/reduce_colors'], function(Command, reduceColorsFilter) {

    var reduceColorsCmd = new Command('reduce colors', 1);

    reduceColorsCmd.process = function(args) {
        reduceColorsFilter.run(parseFloat(args[0]));
    };

    return reduceColorsCmd;

});