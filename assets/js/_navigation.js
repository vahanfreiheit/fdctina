const checkbox = document.getElementById('open-menu-checkbox')

document.getElementById('navigation_close').addEventListener("click", function (e) {
    e.preventDefault()
    checkbox.checked = false;
}, {passive: true});

/* set header background on home page to make it visible after header video */
let isOnTop = false;
const onScroll = function () {
    const navigation = document.getElementsByTagName('nav')[0];
    const firstContentItemTop = document.querySelectorAll('main > .fdc-content-layout')[0].getBoundingClientRect().top;
    if (!isOnTop && (firstContentItemTop < 65)) {
        navigation.classList.add('bg-black-nav');
        navigation.classList.add('text-white-nav');
        navigation.classList.remove('md:pt-6');
        navigation.classList.remove('bg-transparent');
        isOnTop = true;
    } else if (firstContentItemTop > 65) {
        navigation.classList.remove('bg-black-nav');
        navigation.classList.remove('text-white-nav');
        navigation.classList.add('md:pt-6');
        navigation.classList.add('bg-transparent');
        isOnTop = false;
    }
}
onScroll();
window.addEventListener('scroll', onScroll, { passive: true })
