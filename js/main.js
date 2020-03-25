var menuItem = Array.from(document.getElementsByClassName('menu__item'));

menuItem.forEach(function (item) {
    item.onclick = function () {
        menuItem.forEach(function (thiss) {
            thiss.classList.remove('active');
        });
        item.classList.add('active');
    };
});