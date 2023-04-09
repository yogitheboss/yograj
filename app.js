function toggleMenu(){

    var menu_icon_top= document.querySelector('.top');
    var menu_icon_middle= document.querySelector('.middle');
    var menu_icon_bottom= document.querySelector('.bottom');
    menu_icon_top.classList.toggle('top_active');
    menu_icon_middle.classList.toggle('middle_active');
    menu_icon_bottom.classList.toggle('bottom_active');

    var menu = document.getElementById('menu');
    if(menu.style.display == 'flex'){
        menu.style.display = 'none';
        
    }else{
        menu.style.display = 'flex';
        menu.classList.add('active');
    }

}