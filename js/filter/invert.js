define(['service/image_storage', 'filter/filter', 'config'], function(storage, Filter, config) {

    var invertFilter = new Filter();

    invertFilter.apply = function() {
        for (var x = 0; x < config.canvasWidth; x++) {
            for (var y = 0; y < config.canvasHeight; y++) {
                var pixel = storage.getPixel(x, y);
                pixel.red = 255 - pixel.red;
                pixel.green = 255 - pixel.green;
                pixel.blue = 255 - pixel.blue;
                storage.setPixel(x, y, pixel);
            }
        }
    };

    return invertFilter;

});



