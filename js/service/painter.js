define(['config', 'utils/math_utils', 'service/image_storage'], function(config, mathUtils, storage) {

    var canvas = document.getElementById('canvas');

    function clear() {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, config.canvasWidth, config.canvasHeight);
    }

    function loadImage(imageFile) {
        var ctx = canvas.getContext('2d');
        clear();
        var image = new Image();
        image.src = imageFile;
        image.onload = function() {
            var ratio = mathUtils.calculateRatio(image.width, image.height);
            var w = image.width / ratio;
            var h = image.height / ratio;
            var pos = {
                x: (config.canvasWidth - w) / 2,
                y: (config.canvasHeight - h) / 2
            };
            ctx.drawImage(image, 0, 0, image.width, image.height, pos.x, pos.y, w, h);
            storage.setData();
        }
    }

    function drawFromImageStorage() {
        var ctx = canvas.getContext('2d');
        var data = storage.getData();
        ctx.putImageData(data, 0, 0);
    }

    return {
        loadImage: loadImage,
        clear: clear,
        drawFromImageStorage: drawFromImageStorage
    };
});