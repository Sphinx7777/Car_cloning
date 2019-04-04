(function () {

    var garag = document.getElementById('garage');

    for (var i = 0; i < 7; i++) {
        var div = document.createElement('div');
        id = 'car' + i;
        div.id = id;
        garag.appendChild(div);
        createCar(id);
    }
})();






