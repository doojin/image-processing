define(['config'], function(config) {

    var canvas = document.getElementById('canvas');

    var imageData;
    setData();

    function setData() {
        var ctx = canvas.getContext('2d');
        imageData = ctx.getImageData(1, 1, config.canvasWidth, config.canvasHeight);
    }

    function getData() {
        return imageData;
    }

    function eachPixel(callback) {
        var data = imageData.data;
        for (var i = 0; i < data.length; i+= 4) {
            var red = data[i];
            var green = data[i+1];
            var blue = data[i+2];
            var opacity = data[i+3];
            callback(i, red, green, blue, opacity);
        }
    }

    function setPixel(index, red, green, blue, opacity) {
        var data = imageData.data;
        data[index] = red;
        data[index+1] = green;
        data[index+2] = blue;
        data[index+3] = opacity;
    }

    return {
        setData: setData,
        getData: getData,
        eachPixel: eachPixel,
        setPixel: setPixel
    };

});