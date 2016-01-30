define(['command/command', 'service/painter'], function(Command, painter) {

    var clearCmd = new Command('clear', 0);

    clearCmd.process = function() {
        painter.clear();
    };

    return clearCmd;

});