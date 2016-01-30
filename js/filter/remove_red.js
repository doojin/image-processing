define(['service/image_storage', 'filter/filter'], function(storage, Filter) {

    var removeRedFilter = new Filter();

    removeRedFilter.apply = function() {
        storage.eachPixel(function (index, red, green, blue, opacity) {
            storage.setPixel(index, 0, green, blue, opacity);
        });
    };

    return removeRedFilter;

});



