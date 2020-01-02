console.log('It works!')

if (document.querySelector('video')) {
    addVideoControls()
} else {
    console.log('No Video')
}

function addVideoControls() {
    const videoDiv = document.querySelector('.guide-video')
    document.addEventListener('keydown', (event) => {
        console.log(event.key);
        if (event.key === 'd') {
            console.log('Expand Left')
            videoDiv.style.marginLeft = '-100px'
        } else if (event.key === 's') {
            console.log('Expand Right')
            videoDiv.style.marginRight = '-100px'
        }
    })

    let navLinkLeft = document.querySelector('.guide-nav-left')
    navLinkLeft.style.top = '78px'
    navLinkLeft.style.left = '12px'


    let navLinkRight = document.querySelector('.guide-nav-right')
    navLinkRight.style.top = '78px'
    navLinkRight.style.right = '12px'

    let completed = document.querySelector('.mark-completed')
    completed.style.top = '78px'
    completed.style.right = '110px'
    

    createVideoControlButtons(videoDiv)
}

function createVideoControlButtons(videoDiv) {
    const videoContainer = document.querySelector('.video-container')
    
    let myExpandVideoControl = document.createElement('div')
    myExpandVideoControl.classList.add('expand-video-controls')
    
    let expandVideoButton = document.createElement('button')
    let expandVideoTextNode = document.createTextNode('Expand Video')
    expandVideoButton.appendChild(expandVideoTextNode)
    expandVideoButton.classList.add('my-expand-control')
    expandVideoButton.id = 'expand-video'
    myExpandVideoControl.appendChild(expandVideoButton)
    
    let shrinkVideoButton = document.createElement('button')
    let shrinkVideoTextNode = document.createTextNode('Shrink Video')
    shrinkVideoButton.appendChild(shrinkVideoTextNode)
    shrinkVideoButton.classList.add('my-expand-control')
    shrinkVideoButton.id = 'shrink-video'
    myExpandVideoControl.appendChild(shrinkVideoButton)
    
    videoContainer.appendChild(myExpandVideoControl)
    
    myExpandVideoControl.style.position = "fixed"
    myExpandVideoControl.style.top = "70px"
    myExpandVideoControl.style.left = "340px"
    
    let cssStyle = `
        padding: 10px;
        margin: 10px;
        color: white;
        background-color: #45B0E5;
        border-radius: 4px;
        font-weight: 900;
        cursor: pointer;
    `

    let buttons = document.querySelectorAll('.my-expand-control')
    buttons.forEach(button => {
        button.style = cssStyle
        button.addEventListener('click', (event) => {
            if (event.target.id == 'expand-video') {
            console.log('expand video')
            videoDiv.style.marginLeft = '-100px'
            videoDiv.style.marginRight = '-100px'
            } else if (event.target.id == 'shrink-video') {
            console.log('shrink video')
            videoDiv.style.marginLeft = '0'
            videoDiv.style.marginRight = '0'
            }
        } )
    })
}