define(['command/command', 'filter/remove_blue'], function(Command, removeBlueFilter) {

    var removeBlueCmd = new Command('remove blue', 0);

    removeBlueCmd.process = function() {
        removeBlueFilter.run();
    };

    return removeBlueCmd;

});