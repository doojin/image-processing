define(['service/image_storage', 'service/painter'], function(storage, painter) {

    return {
        apply: function() {
            storage.eachPixel(function(i, red, green, blue, opacity) {
                var avg = (red + green + blue)/3;
                storage.setPixel(i, avg, avg, avg, opacity);
            });
        }
    };

});