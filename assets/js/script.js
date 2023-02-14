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
        if(specIconCard.classList.contains('popup_active')){
            specIconCard.classList.remove('popup_active')
        } else {
            specIconCard.classList.add('popup_active')
        }
    })
})


