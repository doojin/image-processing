define(function() {

    function Command(name, argCount) {
        this.name = name;
        this.argCount = argCount;
    }

    Command.prototype.matches = function(name, argCount) {
        return this.name === name && this.argCount === argCount;
    };

    Command.prototype.process = function() {};

    return Command;

});