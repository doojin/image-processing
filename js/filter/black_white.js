define(['service/image_storage', 'filter/filter', 'config'], function(storage, Filter, config) {

    var blackWhiteFilter = new Filter();

    blackWhiteFilter.apply = function() {
        for (var x = 0; x < config.canvasWidth; x++) {
            for (var y = 0; y < config.canvasHeight; y++) {
                var pixel = storage.getPixel(x, y);
                var avg = (pixel.red + pixel.green + pixel.blue) / 3;
                pixel.red = avg;
                pixel.green = avg;
                pixel.blue = avg;
                storage.setPixel(x, y, pixel);
            }
        }
    };


    return blackWhiteFilter;

});



