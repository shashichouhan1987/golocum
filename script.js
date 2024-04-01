
const changeTime = 4000
const num_of_ele = 3
let active_ele = 1
function changeElement(index) {
    $(`.card-slider .care-corner-slider`).removeClass('active')
    $(`.card-slider .care-corner-slider:nth-child(${active_ele})`).addClass('active')
    active_ele++
    if (active_ele > num_of_ele) {
        active_ele = 1
    }
}

changeElement(active_ele)
setInterval(() => {
    changeElement(active_ele)
}, changeTime);