const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');


navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;

    const linksHeight = links.getBoundingClientRect().height;

    // to add height dynamically
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }else{
        linksContainer.style.height = 0; 
    }
})