/* Script: Tabs and Tab-Contents */

const tabs = document.querySelectorAll('[data-target]')
const tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{

    tab.addEventListener("click", () => {

        const target = document.querySelector(tab.dataset.target)
        
        tabContent.forEach(tabContents => {
            
            tabContents.classList.remove('skills__active')

        })
        target.classList.add('skills__active')

        tabs.forEach(tab => {
            
            tab.classList.remove('skills__active')

        })
        tab.classList.add('skills__active')

    })

})

/* Script: Side-Menu */

const navmenu = document.getElementById('nav-menu');
const navtoggle = document.getElementById('nav-toggle');
const navclose = document.getElementById('nav-close');

if(navtoggle){

    navtoggle.addEventListener('click', ()=>{

        navmenu.classList.add('show-menu');

    })

}

if(navclose){

    navclose.addEventListener('click', ()=>{

        navmenu.classList.remove('show-menu');

    })

}


/* Script: Filter */

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {

   linkWork.forEach(l=> l.classList.remove('active-work'))
   this.classList.add('active-work')

}

linkWork.forEach(l=> l.addEventListener("click", activeWork))





