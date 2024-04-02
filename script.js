






const num_of_ele = 3
let active_ele = 0
let progress_dict = {}
let intv = null
function activeProgressBar() {
    intv = setInterval(function () {
        $(`.card-slider .progress .progress-bar`).css("width", `${0}%`).css('background-color','#E5E5E5').attr('aria-valuenow', 0);  
        $('.home-side-img-sec .side-img').addClass('d-none')
        $(`.card-slider .care-corner-slider`).removeClass('active')
        $($(`.card-slider .care-corner-slider`)[active_ele]).addClass('active')
        $($('.home-side-img-sec .side-img')[active_ele]).removeClass('d-none')
        if (progress_dict[active_ele]) {
            progress_dict[active_ele] += 2.4
        } else {
            progress_dict[active_ele] = 2.4
        }
        $($(`.card-slider .progress .progress-bar`)[active_ele]).css("width", `${progress_dict[active_ele]}%`).css('background-color','#AC74FF')
        if (progress_dict[active_ele] >= 115) {
            // clearInterval(intv)
            progress_dict[active_ele] = 0
            // $($(`.card-slider .progress .progress-bar`)[active_ele]).css('background-color','#E5E5E5')
            $(`.card-slider .progress .progress-bar`).css("width", `${0}%`).attr('aria-valuenow', 0);  
            active_ele++
            if (active_ele >= num_of_ele) {
                active_ele = 0
            }
        }
    }, 90);

}

$(document).ready(function(){
    //Click event on slider
    $('.card-slider .care-corner-slider').click(function(){
        active_ele=Math.floor($(this).index()/2)
        if(intv){
            clearInterval(intv)
        }
        progress_dict={}
        activeProgressBar()
    })

    //Click event on dropdown
    $('.drpdwn-event li').click(function(){
        debugger
        $(this).parent().parent().find('.drpdwn-btn').text($(this).text())
    })
})

activeProgressBar()

