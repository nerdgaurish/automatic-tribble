 const navMenu = document.querySelector('.content-header')  ;
 const sections = document.querySelectorAll('.addActive')  ;
 const navMenuLi = document.querySelectorAll('nav #menu-center ul li')  ;

 window.addEventListener('scroll' ,() =>{
    let current = 'home';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id')
        }
    })
  
    navMenuLi.forEach(li =>{
        li.classList.remove('active');

        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
 }); 