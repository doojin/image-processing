define(['command/command', 'filter/change_colors'], function(Command, changeColorsFilter) {

    var changeColorsCmd = new Command('change colors', 3);

    changeColorsCmd.process = function(args) {
        changeColorsFilter.run(
            parseFloat(args[0]),
            parseFloat(args[1]),
            parseFloat(args[2]));
    };

    return changeColorsCmd;

});