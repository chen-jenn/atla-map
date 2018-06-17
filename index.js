// Fix this function for zooming
function clickListener(event){
  let b = event.target.getBBox();
  let svg = document.getElementById('svg815')
  svg.setAttribute("viewbox", `${b.x} ${b.y} ${b.width} ${b.height}`)
}

// width="1500"
// height="1266.066"
// viewBox="0 0 1500 1266.066"
// viewBox="0 0 971.84008 820.27557"

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
      currentTarget.setAttribute("r", 4)
      currentTarget.classList.add('pointHover')
    })
  })

  dots.forEach(el => {
    el.addEventListener("mouseleave", event => {
      const {currentTarget} = event;
      currentTarget.setAttribute("r", 1.4173229)
      currentTarget.classList.remove('pointHover')
    })
  })
})
