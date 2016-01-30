define(['command/command', 'filter/black_white', 'service/painter'], function(Command, blackWhiteFilter, painter) {

    var blackWhiteFilterCmd = new Command('black white', 0);

    blackWhiteFilterCmd.process = function() {
        blackWhiteFilter.apply();
        painter.drawFromImageStorage();
    };

    return blackWhiteFilterCmd;

});