//get all the element by their id

const parent__one = document.getElementById('parent__one')
const parent__one__child = document.getElementById('parent__one__child')
const parent__two = document.getElementById('parent__two')
const parent__two__child = document.getElementById('parent__two__child')
const section = document.getElementById('section')

//add event listener
//syntax (event, function, usecapture = boolean)

// parent__one.addEventListener('click',()=>{.............click
//           parent__two.style.backgroundColor = 'red'  
// })

// parent__one.addEventListener('mouseover',()=>{.............mouseover
//           parent__two.style.backgroundColor = 'orange'
//           parent__two__child.style.color = 'white'
// })

//  parent__one.addEventListener('mouseenter',()=>{............mouseenter
//            parent__two.style.backgroundColor = 'orange'
//            parent__two__child.style.color = 'white'
//  })

//  parent__one.addEventListener('mouseleave',()=>{............mouseleave
//            parent__two.style.backgroundColor = 'white'
//            parent__two__child.style.color = 'black'
//  })


//text content without boolean

// parent__one.addEventListener('mouseenter',()=>{
//           parent__two__child.textContent = 'mouse entered'
// })

// parent__one.addEventListener('mouseleave',()=>{
//           parent__two__child.textContent = 'mouse left'
// })

// section.addEventListener('mouseover',()=>{..............textcontent
//           parent__two__child.textContent = 'box two'
// })

//click event

// parent__one.addEventListener('click',()=>{
//           parent__two__child.textContent = parent__two__child.textContent += ' has a child'
// }, false)


// parent__one.addEventListener('click',()=>{.........use capture true - forward
//           parent__two__child.textContent = parent__two__child.textContent += ' has a child'
// }, true)

// parent__one__child.addEventListener('click',()=>{
//           parent__two__child.textContent = parent__two__child.textContent += ' name two'
// }, true)

// parent__one.addEventListener('click',()=>{...........use capture false - reverse
//           parent__two__child.textContent = parent__two__child.textContent += ' has a child'
// }, false)

// parent__one__child.addEventListener('click',()=>{
//           parent__two__child.textContent = parent__two__child.textContent += ' name two'
// }, false)

