const checkbox = document.getElementById('open-menu-checkbox')

document.body.addEventListener("click", function (evt) {
    let clickedInNavigation = false;
    evt.path.forEach(item => {
        if (item.id) {
            if (item.id.indexOf('navigation') !== -1) {
                clickedInNavigation = true;
            }
        }
    });
    if (!clickedInNavigation) {
        checkbox.checked = false;
    }
});

document.getElementById('navigation_close').addEventListener("click", function (e) {
    e.preventDefault()
    checkbox.checked = false;
});
