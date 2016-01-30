define(['service/painter'], function(painter) {

    function Filter() {}

    Filter.prototype.run = function() {
        if (this.apply) {
            this.apply();
            painter.drawFromImageStorage();
        }
    };

    return Filter;

});