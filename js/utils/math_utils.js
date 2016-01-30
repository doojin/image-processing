define(['config'], function(config) {

    return {
        calculateRatio: function(imageWidth, imageHeight) {
            var ratioWH = config.canvasWidth / config.canvasHeight;
            return imageWidth / imageHeight > ratioWH ?
                imageWidth / config.canvasWidth : imageHeight / config.canvasHeight;
        }
    };

});