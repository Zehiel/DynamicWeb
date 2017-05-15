$(document).ready(function() {
    
    var navListItems = $('ul.setup-panel li a'),
        allWells = $('.setup-content');

    allWells.hide();

    navListItems.click(function(e)
    {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this).closest('li');
        
        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
        }
    });
    
    $('ul.setup-panel li.active a').trigger('click');
    
    // DEMO ONLY //
    $('#activate-step-2').on('click', function(e) {
        $('ul.setup-panel li:eq(1)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        $(this).remove();
    })
    
    $('#activate-step-3').on('click', function(e) {
        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        $(this).remove();
    })
    
    $('#activate-step-4').on('click', function(e) {
        $('ul.setup-panel li:eq(3)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-4"]').trigger('click');
        $(this).remove();
    })
    
    $('#activate-step-3').on('click', function(e) {
        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        $(this).remove();
    })
});


var counter = 0;

document.addEventListener("DOMContentLoaded", function (event) {
    var _selectorc = document.querySelector('input[name=ccheck]');
    _selectorc.addEventListener('change', function (event) {
        if (_selectorc.checked) {
            if (counter >= 3) {
                document.getElementById("c").style.background = "red";
                counter++;
            } else {
                document.getElementById("c").style.background = "green";
                counter++;
            }

        } else {
            document.getElementById("c").style.background = "white";
            counter--;
        }
        console.log(counter);
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selectorcpp = document.querySelector('input[name=cppcheck]');
    _selectorcpp.addEventListener('change', function (event) {
        if (_selectorcpp.checked) {
            if (counter >= 3) {
                document.getElementById("cpp").style.background = "red";
                counter++;
            } else {
                document.getElementById("cpp").style.background = "green";
                counter++;
            }

        } else {
            document.getElementById("cpp").style.background = "white";
            counter--;
        }
        console.log(counter);
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selectorjava = document.querySelector('input[name=javacheck]');
    _selectorjava.addEventListener('change', function (event) {
        if (_selectorjava.checked) {
            if (counter >= 3) {
                document.getElementById("java").style.background = "red";
                counter++;
            } else {
                document.getElementById("java").style.background = "green";
                counter++;
            }

        } else {
            document.getElementById("java").style.background = "white";
            counter--;
        }
        console.log(counter);
    });
});
document.addEventListener("DOMContentLoaded", function (event) {
    var _selectorpearl = document.querySelector('input[name=pearlcheck]');
    _selectorpearl.addEventListener('change', function (event) {
        if (_selectorpearl.checked) {
            if (counter >= 3) {
                document.getElementById("pearl").style.background = "red";
                counter++;
            } else {
                document.getElementById("pearl").style.background = "green";
                counter++;
            }

        } else {
            document.getElementById("pearl").style.background = "white";
            counter--;
        }
        console.log(counter);
    });
});
document.addEventListener("DOMContentLoaded", function (event) {
    var _selectordelphi = document.querySelector('input[name=delphicheck]');
    _selectordelphi.addEventListener('change', function (event) {
        if (_selectordelphi.checked) {
            if (counter >= 3) {
                document.getElementById("delphi").style.background = "red";
                counter++;
            } else {
                document.getElementById("delphi").style.background = "green";
                counter++;
            }

        } else {
            document.getElementById("delphi").style.background = "white";
            counter--;
        }
        console.log(counter);
    });
});



