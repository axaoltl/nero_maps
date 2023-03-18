const iconLayerBox = document.querySelectorAll('.icon_layer-box>img');
// const imgSet = iconLayerBox.querySelectorAll('img')
console.log(iconLayerBox)
iconLayerBox.forEach((icon, i) => {
    icon.dataset.location = i+1
    icon.addEventListener('click', function(event){
        const specIcon = event.target.dataset.location
        console.log(specIcon)
        const specIconCard = document.getElementById(`location-${specIcon}`)
        console.log(specIconCard)
        console.log(specIconCard.scrollHeight)
        if(specIconCard.classList.contains('popup_active')){
            specIconCard.classList.remove('popup_active')
            // specIconCard.setAttribute('style', `transform:translate(-200vw, -200vh)`)
        } else {
            specIconCard.classList.add('popup_active')
            const cross = specIconCard.querySelector('::after')
            console.log(cross)
            // if (specIconCard.scrollHeight > 314){
            //     // .popup.popup_side.popup_active
            //     // console.log('needchange')
            //     // console.log(specIconCard)
            //     // console.log(specIconCard.scrollHeight)
            //     specIconCard.setAttribute('style', `transform:translate(-360px, -${330+(specIconCard.scrollHeight-314)}px)`)
            // }
        }
    })
})
