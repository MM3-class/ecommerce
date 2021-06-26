const navSide = () => {
    const btn = document.querySelector('#icon-bar');
    const menuList = document.querySelector('#menuList');
    const explore = document.querySelector('.explore')

    btn.addEventListener('click', () => {
        
        menuList.classList.toggle('nav-active');
        explore.classList.toggle('explore-hide');
    })
}
navSide();