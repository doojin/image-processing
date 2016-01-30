define(['service/image_storage', 'filter/filter'], function(storage, Filter) {

    var removeGreenFilter = new Filter();

    removeGreenFilter.apply = function() {
        storage.eachPixel(function (index, red, green, blue, opacity) {
            storage.setPixel(index, red, 0, blue, opacity);
        });
    };

    return removeGreenFilter;

});



