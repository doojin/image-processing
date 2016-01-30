define(['service/image_storage', 'filter/filter', 'config'], function(storage, Filter, config) {

    var joinPixelsFilter = new Filter();

    joinPixelsFilter.apply = function(amt) {
        var delta = Math.floor(amt / 2);
        for (var x = 0; x < config.canvasWidth; x+=amt) {
            for (var y = 0; y < config.canvasHeight; y+=amt) {

                var totalRed = 0;
                var totalGreen = 0;
                var totalBlue = 0;
                var totalPixels = 0;

                for (var i = x - delta; i < x + delta; i++) {
                    for (var j = y - delta; j < y + delta; j++) {
                        var pixel = storage.getPixel(i, j);
                        totalRed += pixel.red;
                        totalGreen += pixel.green;
                        totalBlue += pixel.blue;
                        totalPixels++;
                    }
                }

                for (i = x - delta; i < x + delta; i++) {
                    for (j = y - delta; j < y + delta; j++) {
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