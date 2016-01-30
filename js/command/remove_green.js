define(['command/command', 'filter/remove_green'], function(Command, removeGreenFilter) {

    var removeGreenCmd = new Command('remove green', 0);

    removeGreenCmd.process = function() {
        removeGreenFilter.run();
    };

    return removeGreenCmd;

});