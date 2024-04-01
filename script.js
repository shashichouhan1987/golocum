






const num_of_ele = 3
let active_ele = 0
let progress_dict = {}
function activeProgressBar() {
    let intv = setInterval(function () {
        $(`.card-slider .care-corner-slider`).removeClass('active')
        $($(`.card-slider .care-corner-slider`)[active_ele]).addClass('active')
        if (progress_dict[active_ele]) {
            progress_dict[active_ele] += 2.4
        } else {
            progress_dict[active_ele] = 2.4
        }
        $($(`.card-slider .progress .progress-bar`)[active_ele]).css("width", `${progress_dict[active_ele]}%`)
        if (progress_dict[active_ele] >= 100) {
            // clearInterval(intv)
            progress_dict[active_ele] = 0
            $(`.card-slider .progress .progress-bar`).css("width", `${0}%`)
            active_ele++
            if (active_ele >= num_of_ele) {
                active_ele = 0
            }
        }
    }, 90);


}

activeProgressBar()

