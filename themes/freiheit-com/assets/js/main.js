document.body.addEventListener("click", function (evt) {
    const checkbox = document.getElementById('open-menu-checkbox')
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
