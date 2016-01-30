define(['service/painter'], function(painter) {

    function Filter() {}

    Filter.prototype.run = function (...args) {
        if (this.apply) {
            this.apply(...args);
            painter.drawFromImageStorage();
        }
    };

    return Filter;

});