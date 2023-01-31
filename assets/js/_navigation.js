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
}, {passive: true});

document.getElementById('navigation_close').addEventListener("click", function (e) {
    e.preventDefault()
    checkbox.checked = false;
}, {passive: true});

/* set header background on home page to make it visible after header video */
let isOnTop = false;
const onScroll = function () {
    const navigation = document.getElementsByTagName('nav')[0];
    const firstContentItemTop = document.getElementsByClassName('fdc-content-layout')[0].getBoundingClientRect().top;
    const scrollPosition = window.scrollY;
    if (!isOnTop && (scrollPosition > firstContentItemTop)) {
        navigation.classList.add( 'bg-black');
        isOnTop = true;
    } else if (scrollPosition <= firstContentItemTop) {
        navigation.classList.remove( 'bg-black');
        isOnTop = false;
    }
}
onScroll();
if (document.getElementsByClassName('homepage-video').length > 0) {
    window.addEventListener('scroll', onScroll, { passive: true })
}
