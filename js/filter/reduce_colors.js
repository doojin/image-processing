define(['service/image_storage', 'filter/filter', 'config'], function(storage, Filter, config) {

    var reduceColorsFilter = new Filter();

    reduceColorsFilter.apply = function(amt) {
        var coeff = amt / 256;
        for (var x = 0; x < config.canvasWidth; x++) {
            for (var y = 0; y < config.canvasHeight; y++) {
                var pixel = storage.getPixel(x, y);
                pixel.red = Math.floor(pixel.red * coeff) / coeff;
                pixel.green = Math.floor(pixel.green * coeff) / coeff;
                pixel.blue = Math.floor(pixel.blue * coeff) / coeff;
                storage.setPixel(x, y, pixel);
            }
        }
    };

    return reduceColorsFilter;

});



