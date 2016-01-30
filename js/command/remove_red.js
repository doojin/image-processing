define(['command/command', 'filter/remove_red'], function(Command, removeRedFilter) {

    var removeRedCmd = new Command('remove red', 0);

    removeRedCmd.process = function() {
        removeRedFilter.run();
    };

    return removeRedCmd;

});