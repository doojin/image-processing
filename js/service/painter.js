define(['config', 'utils/math_utils'], function(config, mathUtils) {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    function clear() {
        ctx.clearRect(0, 0, config.canvasWidth, config.canvasHeight);
    }

    function loadImage(imageFile) {
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
        }
    }

    return {
        loadImage: loadImage,
        clear: clear
    };
});