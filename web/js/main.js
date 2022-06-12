const box = document.querySelector(".class-card")
const originalColor = box.style.backgroundColor
box.addEventListener("mouseover", () => {
   box.style.backgroundColor = "red"
})

box.addEventListener("mouseout", () => {
    box.style.backgroundColor = originalColor
 })