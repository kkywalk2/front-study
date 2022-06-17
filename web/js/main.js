const upButton = document.getElementById('up-button')

const checkScroll = () => {
   if( scrollY == 0 ) {
      upButton.style.visibility = 'hidden'
   } else {
      upButton.style.visibility = 'visible'
   }
}

const moveToTop = () => {
   scrollTo({
      top: 0,
      behavior: 'smooth'
   })
}

window.addEventListener('scroll', checkScroll)
upButton.addEventListener('click', moveToTop)

