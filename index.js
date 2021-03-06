// Fix this function
function clickListener(event){
  let b = event.target.getBBox();
  let svg = document.getElementById('svg815')
  svg.setAttribute('viewbox', `${b.x} ${b.y} ${b.width} ${b.height}`)
}

document.addEventListener('DOMContentLoaded', () => {
  // Polygons
  // Select for just the polygons with ID beginning with 'p-'
  const polygons = document.getElementById('g1497').querySelectorAll("[id^='p-']")
  polygons.forEach(element => {
    element.addEventListener('mouseenter', event => {
      const {currentTarget} = event;
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
      // Get the description from the svg element
      alert(currentTarget.querySelector('desc').innerHTML)
    })
  })

  dots.forEach(el => {
    el.addEventListener('mouseenter', event => {
      const {currentTarget} = event;
      currentTarget.setAttribute('r', 2)
      currentTarget.classList.add('pointHover')
    })
  })

  dots.forEach(el => {
    el.addEventListener('mouseleave', event => {
      const {currentTarget} = event;
      currentTarget.setAttribute('r', 1.4173229)
      currentTarget.classList.remove('pointHover')
    })
  })

  // Legend buttons
  const legend = document.querySelector('.legend')
  const legendItems = legend.querySelectorAll('div')

  // opacity is ratio to the initial svg opacity
  const colours = [
    'fill:green;opacity:2;stroke:black;stroke-width:0.5;stroke-miterlimit:4;stroke-opacity:1;',
    'fill:salmon;opacity:2;stroke:black;stroke-width:0.5;stroke-miterlimit:4;stroke-opacity:1;',
    'fill:yellow;opacity:2;stroke:black;stroke-width:0.5;stroke-miterlimit:4;stroke-opacity:1;',
    'fill:blue;opacity:2;stroke:black;stroke-width:0.5;stroke-miterlimit:4;stroke-opacity:1;',
    'fill:white;opacity:0;stroke:blacks;stroke-width:0.5;stroke-miterlimit:4;stroke-opacity:1;'
  ]

  legendItems.forEach(el => {
    el.addEventListener('click', event => {
      // toggling not working?
      // let x = document.querySelector('#earth-kingdom');
      // x.style.cssText = x.style.cssText === greenYes ? leave : greenYes

      switch(event.currentTarget.innerHTML){
        case 'Earth Kingdom':
          document.querySelector('#earth-kingdom').style.cssText = colours[0];
          break;
        case 'Fire Nation':
          document.querySelector('#fire-nation').style.cssText = colours[1];
          break;
        case 'Northern Water Tribe':
          document.querySelector('#water-tribe-N').style.cssText = colours[3];
          break;
        case 'Southern Water Tribe':
          document.querySelector('#water-tribe-S').style.cssText = colours[3];
          break;
        case 'Southern Air Temple':
          document.querySelector('#air-temple-S').style.cssText = colours[2];
          break;
        case 'Western Air Temple':
          document.querySelector('#air-temple-W').style.cssText = colours[2];
          break;
        case 'Eastern Air Temple':
          document.querySelector('#air-temple-E').style.cssText = colours[2];
      }

    })

    el.addEventListener('dblclick', event => {
      // How can I refactor this??
      switch(event.currentTarget.innerHTML){
        case 'Earth Kingdom':
          document.querySelector('#earth-kingdom').style.cssText = colours[4];
          break;
        case 'Fire Nation':
          document.querySelector('#fire-nation').style.cssText = colours[4];
          break;
        case 'Northern Water Tribe':
          document.querySelector('#water-tribe-N').style.cssText = colours[4];
          break;
        case 'Southern Water Tribe':
          document.querySelector('#water-tribe-S').style.cssText = colours[4];
          break;
        case 'Southern Air Temple':
          document.querySelector('#air-temple-S').style.cssText = colours[4];
          break;
        case 'Western Air Temple':
          document.querySelector('#air-temple-W').style.cssText = colours[4];
          break;
        case 'Eastern Air Temple':
          document.querySelector('#air-temple-E').style.cssText = colours[4];
      }
    })

    el.addEventListener('mouseenter', event => {
      const {currentTarget} = event;
      currentTarget.classList.add('pointHover', 'highlight')
    })

    el.addEventListener('mouseleave', event => {
      const {currentTarget} = event;
      currentTarget.classList.remove('pointHover', 'highlight')
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
