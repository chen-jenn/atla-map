// Fix this function
function clickListener(event){
  let b = event.target.getBBox();
  let svg = document.getElementById('svg815')
  svg.setAttribute("viewbox", `${b.x} ${b.y} ${b.width} ${b.height}`)
}

document.addEventListener('DOMContentLoaded', () => {
  // Polygon chunks
  const polygons = document.getElementById('g1497').querySelectorAll('path')
  polygons.forEach(element => {
    element.addEventListener('mouseenter', event => {
      const {currentTarget} = event;
      //won't work for now because of inline styling
      currentTarget.classList.add('highlight')
    })

    element.addEventListener('mouseleave', event => {
      const {currentTarget} = event;
      currentTarget.classList.remove('highlight')
    })
  })


  // Dot locations
  const dots = document.querySelectorAll('circle')
  dots.forEach(element => {
    element.addEventListener('click', event => {
      const {currentTarget} = event;
      // This will give the description from the svg element 
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

  svgPanZoom("#svg815")
})

// For the image, just link it at not deal with all that nonsense. Insert this in the <g></g> div right before polygon-groups. Don't need inkscape info
{/* <g
   inkscape:groupmode="layer"
   id="layer1"
   inkscape:label="wat"
   style="display:inline">
  <image
     y="0.27211565"
     x="-0.38477668"
     id="image1202"
     xlink:href="./atla-raster.png"
     preserveAspectRatio="none"
     height="821.18921"
     width="972.97296" />
</g> */}
