define([
    'jquery',
    'command/command',
    'command/load_image',
    'command/clear',
    'command/resize_canvas',
    'command/black_white',
    'command/remove_red',
    'command/remove_green',
    'command/remove_blue',
    'command/invert',
    'command/change_colors',
    'command/reduce_colors'
], function(
    $,
    Command,
    loadImageCmd,
    clearCmd,
    resizeCanvasCmd,
    blackWhiteCmd,
    removeRedCmd,
    removeGreenCmd,
    removeBlueCmd,
    invertCmd,
    changeColorsCmd,
    reduceColorsCmd
) {

    var commandLine = $('#command-line');
    var commands = [
        loadImageCmd,
        clearCmd,
        resizeCanvasCmd,
        blackWhiteCmd,
        removeRedCmd,
        removeGreenCmd,
        removeBlueCmd,
        invertCmd,
        changeColorsCmd,
        reduceColorsCmd
    ];

    var history = [];
    var current = 0;

    function listen() {
        commandLine.keypress(function(e) {
            if (e.keyCode === 13) processCommand();
            if (e.keyCode === 38) incrementHistory();
            if (e.keyCode === 40) decrimentHistory();
        });
    }

    function decrimentHistory() {
        if (current > 0) current--;
        commandLine.val(history[current]);
    }

    function incrementHistory() {
        if (current < history.length-1) current++;
        commandLine.val(history[current]);
    }

    function processCommand() {
        updateHistory();
        clearCommandLine();
        var commandData = parseCommand(history[1]);
        var command = findCommand(commandData);
        command.process(commandData.args);
    }

    function updateHistory() {
        current = 0;
        history[0] = commandLine.val();
        history.unshift('');
    }

    function clearCommandLine() {
        commandLine.val('');
    }

    function parseCommand(input) {
        var args = [];
        var split1 = input.split('>');
        var cmdName = split1[0].trim();

        if (split1[1]) {
            var split2 = split1[1].split(',');
            split2.forEach(function(arg) {
                args.push(arg.trim());
            });
        }

        return {
            name: cmdName,
            args: args,
            argCount: args.length
        };
    }

    function findCommand(commandData) {
        for (var i = 0; i < commands.length; i++) {
            if (commands[i].matches(commandData.name, commandData.argCount)) {
                return commands[i];
            }
        }
        return new Command();
    }

    return {
        listen: listen
    }

});