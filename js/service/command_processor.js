define([
    'jquery',
    'command/command',
    'command/load_image',
    'command/clear',
    'command/resize_canvas',
    'command/black_white'
], function(
    $,
    Command,
    loadImageCmd,
    clearCmd,
    resizeCanvasCmd,
    blackWhiteCmd
) {

    var commandLine = $('#command-line');
    var commands = [
        loadImageCmd,
        clearCmd,
        resizeCanvasCmd,
        blackWhiteCmd
    ];
    var lastCommand = '';

    function listen() {
        commandLine.keypress(function(e) {
            if (e.keyCode === 13) processCommand();
            if (e.keyCode === 38) commandLine.val(lastCommand);
        });
    }

    function processCommand() {
        lastCommand = commandLine.val();
        clearCommandLine();
        var commandData = parseCommand(lastCommand);
        var command = findCommand(commandData);
        command.process(commandData.args);
    }

    function clearCommandLine() {
        commandLine.val('');
    }

    function parseCommand(input) {
        var args = [];
        var split1 = input.split('->');
        var cmdName = split1[0].trim();

        if (split1[1]) {
            var split2 = split1[1].split(',,');
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