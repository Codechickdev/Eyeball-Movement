document.querySelector('body').addEventListener('mousemove',eyeball)
function eyeball() {
    const eye = document.querySelectorAll('.eye')
    eye.forEach(function(eyeball){
        let x = (eye.getBoudingClientRect().left + (eye.clientWidth / 2))
        let y = (eye.getBoudingClientRect().top+ (eye.clientHeight / 2))
        
        let radian = Math.atan2(event.pageX - x, event.pageY - y)
        let rotation = (radian*(180/Math.PI)* -1) + 270
        eye.style.transform = "rotate("+rotation+"deg)"
    })
}