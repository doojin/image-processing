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

    function pixelIndex(x, y) {
        var rowStart = (y - 1) * config.canvasWidth * 4;
        var rowElement = (x - 1) * 4;
        return rowStart + rowElement;
    }

    function getPixel(x, y) {
        var index = pixelIndex(x, y);
        var data = imageData.data;
        return {
            red: data[index],
            green: data[index+1],
            blue: data[index+2],
            opacity: data[index+3]
        };
    }

    function setPixel(x, y, pixel) {
        var index = pixelIndex(x, y);
        var data = imageData.data;
        data[index] = pixel.red;
        data[index+1] = pixel.green;
        data[index+2] = pixel.blue;
        data[index+3] = pixel.opacity;
    }

    return {
        setData: setData,
        getData: getData,
        getPixel: getPixel,
        setPixel: setPixel
    };

});