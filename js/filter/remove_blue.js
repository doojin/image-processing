define(['service/image_storage', 'filter/filter', 'config'], function(storage, Filter, config) {

    var removeBlueFilter = new Filter();

    removeBlueFilter.apply = function() {
        for (var x = 0; x < config.canvasWidth; x++) {
            for (var y = 0; y < config.canvasHeight; y++) {
                var pixel = storage.getPixel(x, y);
                pixel.blue = 0;
                storage.setPixel(x, y, pixel);
            }
        }
    };

    return removeBlueFilter;

});



