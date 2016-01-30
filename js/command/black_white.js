define(['command/command', 'filter/black_white'], function(Command, blackWhiteFilter) {

    var blackWhiteFilterCmd = new Command('black white', 0);

    blackWhiteFilterCmd.process = function() {
        blackWhiteFilter.run();
    };

    return blackWhiteFilterCmd;

});