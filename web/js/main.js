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

const slidePrevButton = document.getElementsByClassName('slide-prev')

const transformNext = (event) => {
   const slideNext = event.target
   const slidePrev = slideNext.previousElementSibling

   let mangaContainer = slideNext.parentElement.parentElement.parentElement
   let activeLi = mangaContainer.getAttribute('data-position')
   const liList = mangaContainer.getElementsByTagName('li')
   let classList = mangaContainer.getElementsByTagName('ul')[0]

   if(Number(activeLi) < 0) {
      activeLi = Number(activeLi) + 290

      slidePrev.style.color = '#2f3059'
      slidePrev.classList.add('slide-prev-hover')
      slidePrev.addEventListener('click', transformPrev)

      if(Number(activeLi) === 0) {
         slideNext.style.color = '#cfd8dc'
         slideNext.classList.remove('slide-prev-hover')
         slideNext.removeEventListener('click', transformPrev)
      }
   }

   classList.style.transition = 'transform 1s'
   classList.style.transform = 'translateX(' + String(activeLi) + 'px)'
   mangaContainer.setAttribute('data-position', activeLi)
}

const transformPrev = (event) => {
   const slidePrev = event.target
   const slideNext = slidePrev.nextElementSibling

   let mangaContainer = slidePrev.parentElement.parentElement.parentElement
   let activeLi = mangaContainer.getAttribute('data-position')
   const liList = mangaContainer.getElementsByTagName('li')
   let classList = mangaContainer.getElementsByTagName('ul')[0]

   if(classList.clientWidth < (liList.length * 290 + Number(activeLi))) {
      activeLi = Number(activeLi) - 290

      slideNext.style.color = '#2f3059'
      slideNext.classList.add('slide-next-hover')
      slideNext.addEventListener('click', transformNext)

      if(classList.clientWidth > (liList.length * 290 + Number(activeLi))) {
         slidePrev.style.color = '#cfd8dc'
         slidePrev.classList.remove('slide-prev-hover')
         slidePrev.removeEventListener('click', transformPrev)
      }
   }

   classList.style.transition = 'transform 1s'
   classList.style.transform = 'translateX(' + String(activeLi) + 'px)'
   mangaContainer.setAttribute('data-position', activeLi)
}

for(let i = 0; i < slidePrevButton.length; i++) {
   let classList = slidePrevButton[i].parentElement.parentElement.parentElement
   let liList = classList.getElementsByTagName('li')

   if(classList.clientWidth < (liList.length * 290)) {
      slidePrevButton[i].classList.add('slide-prev-button')
      slidePrevButton[i].addEventListener('click', transformPrev)
   } else {
      const arrowContainer = slidePrevButton[i].parentElement
      arrowContainer.removeChild(slidePrevButton[i].nextElementSibling)
      arrowContainer.removeChild(slidePrevButton[i])
   }
}

let mouseStart = false
let touchStartX = 0
let currentImg = null
let currentClassList
let currentActiveLi
let nowActiveLi

function processTouchEnd(event) {
   event.preventDefault()

   if(mouseStart === true) {
      currentImg.removeEventListener('mousemove', processTouchMove)
      currentImg.removeEventListener('mousemove', processTouchEnd)

      currentClassList.style.transition = 'transform 1s ease'
      currentClassList.style.transform = 'translateX(0px)'
      currentClassList.setAttribute('data-position', 0)

      let arrowContainer = currentClassList.parentElement.getElementsByClassName('arrow-container')[0]
      let slidePrev = arrowContainer.children[0]
      let slideNext = arrowContainer.children[1]
      let eachLiList = currentClassList.getElementsByTagName('li')

      if(currentClassList.clientWidth < (eachLiList.length * 290)) {
         slidePrev.style.color = '#2f3059'
         slidePrev.classList.add('slide-prev-hover')
         slidePrev.addEventListener('click', transformPrev)

         slideNext.style.color = '#cfd8dc'
         slideNext.classList.remove('slide-prev-hover')
         slideNext.removeEventListener('click', transformPrev)
      }

      mouseStart = false
   }
}

function processTouchMove(event) {
   event.preventDefault()

   let currentX = event.clientX || event.touches[0].screenX // 이렇게 하는건 터치스크린에서도 동작하게 하기 위함
   nowActiveLi = Number(currentActiveLi) + (Number(currentX) - Number(touchStartX))

   currentClassList.style.transition = 'transform 0s linear'
   currentClassList.style.transform = 'translateX(' + String(nowActiveLi) + 'px)'
}

function processTouchStart(event) {
   mouseStart = true
   
   event.preventDefault()
   touchStartX = event.clientX
   currentImg = event.target

   currentImg.addEventListener('mousemove', processTouchMove)
   currentImg.addEventListener('mouseup', processTouchEnd)

   currentClassList = currentImg.parentElement.parentElement
   currentActiveLi = currentClassList.getAttribute('data-position')
}

const classImgList = document.querySelectorAll('ul li img')

window.addEventListener('dragend', processTouchEnd)
window.addEventListener('mouseup', processTouchEnd)

for(let i = 0; i < classImgList.length; i++) {
   classImgList[i].addEventListener('mousedown', processTouchStart)
}



