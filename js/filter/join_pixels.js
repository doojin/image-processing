define(['service/image_storage', 'filter/filter', 'config'], function(storage, Filter, config) {

    var joinPixelsFilter = new Filter();

    joinPixelsFilter.apply = function(amt) {
        for (var x = 1; x < config.canvasWidth; x+=amt) {
            for (var y = 1; y < config.canvasHeight; y+=amt) {

                var totalRed = 0;
                var totalGreen = 0;
                var totalBlue = 0;
                var totalPixels = 0;

                for (var i = x; i < x + amt; i++) {
                    for (var j = y; j < y + amt; j++) {
                        if (i > config.canvasWidth || j > config.canvasHeight) continue;
                        var pixel = storage.getPixel(i, j);
                        totalRed += pixel.red;
                        totalGreen += pixel.green;
                        totalBlue += pixel.blue;
                        totalPixels++;
                    }
                }

                for (i = x; i < x + amt; i++) {
                    for (j = y; j < y + amt; j++) {
                        if (i > config.canvasWidth || j > config.canvasHeight) continue;
                        pixel = storage.getPixel(i, j);
                        pixel.red = totalRed / totalPixels;
                        pixel.green = totalGreen / totalPixels;
                        pixel.blue = totalBlue / totalPixels;
                        storage.setPixel(i, j, pixel);
                    }
                }
            }
        }
    };



    return joinPixelsFilter;

});