define(['service/image_storage', 'filter/filter'], function(storage, Filter) {

    var blackWhiteFilter = new Filter();

    blackWhiteFilter.apply = function() {
        storage.eachPixel(function (index, red, green, blue, opacity) {
            var avg = (red + green + blue) / 3;
            storage.setPixel(index, avg, avg, avg, opacity)
        });
    };

    return blackWhiteFilter;

});



