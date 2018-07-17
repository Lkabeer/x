var index = 0;
var bgImgX = document.querySelectorAll('.bgImg');
var sectionsX = [work, idea, yourself, aliens, entertain, future, typo, love];

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

function eventFire(el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}

for (var i = 0; i < bgImgX.length; i++) {
    bgImgX[i].addEventListener('click', function () {
        clearInterval(intervalX);
        console.log('clear');
    });
}

var intervalX = setInterval(
    function () {
        index++;
        if (index >= sectionsX.length) {
            index = 0;
            eventFire(document.getElementById(sectionsX[index].id), 'click');
            clearInterval(intervalX);
        }
        console.log(sectionsX[index].id);
        eventFire(document.getElementById(sectionsX[index].id), 'click');
    }, 5000
);
