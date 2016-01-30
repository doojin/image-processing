define(['service/image_storage', 'filter/filter', 'config'], function(storage, Filter, config) {

    var addColorsFilter = new Filter();

    addColorsFilter.apply = function(redCoeff, greenCoeff, blueCoeff) {
        for (var x = 0; x < config.canvasWidth; x++) {
            for (var y = 0; y < config.canvasHeight; y++) {
                var pixel = storage.getPixel(x, y);

                pixel.red = pixel.red + pixel.red * redCoeff;
                pixel.green = pixel.green + pixel.green * greenCoeff;
                pixel.blue = pixel.blue + pixel.blue * blueCoeff;

                if (pixel.red > 255) pixel.red = 255;
                if (pixel.green > 255) pixel.green = 255;
                if (pixel.blue > 255) pixel.blue = 255;

                storage.setPixel(x, y, pixel);
            }
        }
    };


    return addColorsFilter;

});



