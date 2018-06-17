// Fix this function for zooming
function clickListener(event){
  let b = event.target.getBBox();
  let svg = document.getElementById('svg815')
  svg.setAttribute("viewbox", `${b.x} ${b.y} ${b.width} ${b.height}`)
}

document.addEventListener('DOMContentLoaded', () => {
  const dots = document.querySelectorAll('circle')
  dots.forEach(element => {
    element.addEventListener("click", event => {
      const {currentTarget} = event;
      // This will give the description
      alert(currentTarget.querySelector('desc').innerHTML)
    })
  })

  dots.forEach(el => {
    el.addEventListener("mouseenter", event => {
      const {currentTarget} = event;
      currentTarget.classList.add('pointHover')
    })
  })

  dots.forEach(el => {
    el.addEventListener("mouseleave", event => {
      const {currentTarget} = event;
      currentTarget.classList.remove('pointHover')
    })
  })
})
