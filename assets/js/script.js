const iconLayerBox = document.querySelectorAll('.icon_layer-box>img');
// const wrapper = document.querySelector('.wrapper')
// wrapper.scrollTo({
//     top: 2150,
//     left: 2150,
// })
// const imgSet = iconLayerBox.querySelectorAll('img')
// console.log(iconLayerBox)
let DoesPopupSideExist;
let DoesPopupSideLeftExist;
let DoesPopupSideRightExist;
iconLayerBox.forEach((icon, i) => {
    icon.dataset.location = i + 1
    icon.addEventListener('click', function (event) {
        const specIcon = event.target.dataset.location
        // console.log(specIcon)
        const specIconCard = document.getElementById(`location-${specIcon}`)
        console.log(specIconCard)
        // console.log(specIconCard.scrollHeight)
        DoesPopupSideExist = specIconCard.classList.contains('popup_side')
        DoesPopupSideLeftExist = specIconCard.classList.contains('popup_side-left')
        DoesPopupSideRightExist = specIconCard.classList.contains('popup_side-right')
        if (specIconCard.classList.contains('popup_active')) {
            specIconCard.classList.remove('popup_active')
            if ((specIconCard.scrollHeight > 314) && (DoesPopupSideExist === true)) {
                specIconCard.setAttribute('style', `transform:translate(-200vw, -200vh)`)
            }
            if ((specIconCard.scrollHeight > 314) && (DoesPopupSideLeftExist === true)) {
                specIconCard.setAttribute('style', `transform:translate(-200vw, -200vh)`)
            }
            if ((specIconCard.scrollHeight > 314) && (DoesPopupSideRightExist === true)) {
                specIconCard.setAttribute('style', `transform:translate(-200vw, -200vh)`)
            }
        } else {
            specIconCard.classList.add('popup_active')
            const cross = specIconCard.querySelector('.cross')
            console.log(cross)
            cross.addEventListener('click', ()=>{
                specIconCard.classList.remove('popup_active')
            })
            // let cross = window.getComputedStyle(specIconCard,'::after')
            // let content = cross['content']
            // content.addEventListener('click',function(e){console.log(e)})
            // console.log(content)
            // console.log(DoesPopupSideExist)
            if ((specIconCard.scrollHeight > 314) && (DoesPopupSideExist === true)) {
                specIconCard.setAttribute('style', `transform:translate(-360px, -${330 + (specIconCard.scrollHeight - 314)}px)`)
            }
            if ((specIconCard.scrollHeight > 314) && (DoesPopupSideLeftExist === true)) {
                specIconCard.setAttribute('style', `transform:translate(-360px, -${(specIconCard.scrollHeight - 314)}px)`)
            }
            if ((specIconCard.scrollHeight > 314) && (DoesPopupSideRightExist === true)) {
                specIconCard.setAttribute('style', `transform:translate(${(specIconCard.scrollHeight - 314)}px, -${330 + (specIconCard.scrollHeight - 314)}px)`)
            }
        }
        
    })
})
// .popup.popup_side.popup_active
// console.log('needchange')
// console.log(specIconCard)
// console.log(specIconCard.scrollHeight)
