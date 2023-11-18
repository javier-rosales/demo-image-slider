const sliderImages = document.querySelectorAll(".slider-image")
const sliderItems = document.querySelectorAll(".slider-nav-item")

const sliderButtonPrevious = document.querySelector(".slider-button.previous")
const sliderButtonForward = document.querySelector(".slider-button.forward")

const ACTIVE_ITEM_INDEX = 1

function getActiveItem() {
    return document.querySelector(".slider-nav-item.active")
}

function getItem(itemIndex) {
    return document.querySelector(`.slider-nav-item[data-item-index="${itemIndex}"]`)
}

function getItemIndex(item) {
    return +item.dataset.itemIndex
}

function setItem(itemIndex) {
    sliderImages.forEach(sliderImage => sliderImage.style.left = `-${(itemIndex - 1) * 100}%`)
    
    const activeItem = getActiveItem()

    activeItem.classList.remove("active")

    getItem(itemIndex).classList.add("active")
}

sliderButtonPrevious.addEventListener("click", () => {
    const activeItemIndex = getItemIndex(getActiveItem())

    if (activeItemIndex === 1) {
        setItem(sliderItems.length)
    } else {
        setItem(activeItemIndex - 1)
    }
})

sliderButtonForward.addEventListener("click", () => {
    const activeItemIndex = getItemIndex(getActiveItem())

    if (activeItemIndex === sliderItems.length) {
        setItem(1)
    } else {
        setItem(activeItemIndex + 1)
    }
})

setItem(ACTIVE_ITEM_INDEX)