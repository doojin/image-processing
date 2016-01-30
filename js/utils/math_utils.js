define(['config'], function(config) {

    var RATIO_WH = config.canvasWidth / config.canvasHeight;

    return {
        calculateRatio: function(imageWidth, imageHeight) {
            return imageWidth / imageHeight > RATIO_WH ?
                imageWidth / config.canvasWidth : imageHeight / config.canvasHeight;
        }
    };

});