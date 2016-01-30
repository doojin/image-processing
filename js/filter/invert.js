define(['service/image_storage', 'filter/filter'], function(storage, Filter) {

    var invertFilter = new Filter();

    invertFilter.apply = function() {
        storage.eachPixel(function (index, red, green, blue, opacity) {
            storage.setPixel(index, 255-red, 255-green, 255-blue, opacity);
        });
    };

    return invertFilter;

});



