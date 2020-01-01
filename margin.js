console.log('It works!')

if (document.querySelector('video')) {
    addMarginControls()
} else {
    console.log('No Video')
}

function addMarginControls() {
    
    const expandDiv = document.querySelector('.content-container')
    document.addEventListener('keydown', (event) => {
        console.log(event.key);
        if (event.key === 'e') {
            console.log('Expand Left')
            expandDiv.style.marginLeft = '-34px'
        } else if (event.key === 'c') {
            console.log('Expand Right')
            expandDiv.style.marginRight = '-34px'
            
        }
    })

    createMarginControlButtons(expandDiv)
}

function createMarginControlButtons(expandDiv) {
    const videoContainer = document.querySelector('.video-container')
    
    let myExpandDivControl = document.createElement('div')
    myExpandDivControl.classList.add('expand-div-controls')
    
    let expandDivButton = document.createElement('button')
    let expandDivTextNode = document.createTextNode('Expand Div')
    expandDivButton.appendChild(expandDivTextNode)
    expandDivButton.classList.add('my-expand-div-control')
    expandDivButton.id = 'expand-div'
    myExpandDivControl.appendChild(expandDivButton)
    
    let shrinkDivButton = document.createElement('button')
    let shrinkDivTextNode = document.createTextNode('Shrink Div')
    shrinkDivButton.appendChild(shrinkDivTextNode)
    shrinkDivButton.classList.add('my-expand-div-control')
    shrinkDivButton.id = 'shrink-div'
    myExpandDivControl.appendChild(shrinkDivButton)
    
    videoContainer.appendChild(myExpandDivControl)
    
    myExpandDivControl.style.position = "fixed"
    myExpandDivControl.style.top = "70px"
    myExpandDivControl.style.left = "525px"
    
    let cssBtnStyle = `
        padding: 10px;
        margin: 10px;
        color: white;
        background-color: #45B0E5;
        border-radius: 4px;
        font-weight: 900;
        cursor: pointer;
    `

    let buttons = document.querySelectorAll('.my-expand-div-control')
    buttons.forEach(button => {
        button.style = cssBtnStyle
        button.addEventListener('click', (event) => {
            if (event.target.id == 'expand-div') {
            console.log('expand div')
            expandDiv.style.marginLeft = '-35px'
            expandDiv.style.marginRight = '-35px'
            } else if (event.target.id == 'shrink-div') {
            console.log('shrink div')
            expandDiv.style.marginLeft = null
            expandDiv.style.marginRight = null
            }
        } )
    })
}