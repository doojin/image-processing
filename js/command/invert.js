define(['command/command', 'filter/invert'], function(Command, invertFilter) {

    var invertCmd = new Command('invert', 0);

    invertCmd.process = function() {
        invertFilter.run();
    };

    return invertCmd;

});