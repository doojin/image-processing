define(['service/image_storage', 'filter/filter'], function(storage, Filter) {

    var removeBlueFilter = new Filter();

    removeBlueFilter.apply = function() {
        storage.eachPixel(function (index, red, green, blue, opacity) {
            storage.setPixel(index, red, green, 0, opacity);
        });
    };

    return removeBlueFilter;

});



