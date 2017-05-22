$(document).ready(function() {


    var strength = {
        0: "Worst",
        1: "Bad",
        2: "Weak",
        3: "Good",
        4: "Strong"
    }

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

    $('#nameinput').keyup(function (event) {

        var value = $(this).val();
        if (value.length > 0) {
            var patt =  new  RegExp(/^[A-Z].[a-zA-Z]{1,18}$/);
            if(patt.test(value)){
                document.getElementById("name").style.background = "green"
            }else {
                document.getElementById("name").style.background = "red"
            }

        }
    });

    $('#surnameinput').keyup(function (event) {

        var value = $(this).val();
        if (value.length > 0) {
            var patt =  new  RegExp(/^[A-Z].[a-zA-Z]{1,18}$/);
            if(patt.test(value)){
                document.getElementById("surname").style.background = "green"
            }else {
                document.getElementById("surname").style.background = "red"
            }

        }
    });

    $('#cityinput').keyup(function (event) {

        var value = $(this).val();
        if (value.length > 0) {
            var patt =  new  RegExp(/^[A-Z].[a-zA-Z]{1,18}$/);
            if(patt.test(value)){
                document.getElementById("city").style.background = "green"
            }else {
                document.getElementById("city").style.background = "red"
            }

        }
    });


    $('#regioninput').keyup(function (event) {

        var value = $(this).val();
        if (value.length > 0) {
            var patt =  new  RegExp(/^[A-Z].[a-zA-Z]{1,18}$/);
            if(patt.test(value)){
                document.getElementById("region").style.background = "green"
            }else {
                document.getElementById("region").style.background = "red"
            }

        }
    });

    $('#postalcodeinput').keyup(function () {
        var value = $(this).val().split("-").join(""); // remove hyphens
        if (value.length > 0) {
            value = value.match(new RegExp('[0-9]{1,3}', 'g')).join("-");
            if(value.length==6) {
                document.getElementById("postalcode").style.background = "green"
            }else {
                document.getElementById("postalcode").style.background = "red"
            }
        }
        $(this).val(value);
    });

    $('#emailinput').keyup(function (event) {

        var value = $(this).val();
        if (value.length > 0) {
            var patt =  new  RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if(patt.test(value)){
                document.getElementById("email").style.background = "green"
            }else {
                document.getElementById("email").style.background = "red"
            }

        }
    });

    $('#ipinput').keyup(function (event) {

        var value = $(this).val();
        if (value.length > 0) {
            var patt =  new  RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);
            if(patt.test(value)){
                document.getElementById("ip").style.background = "green"
            }else {
                document.getElementById("ip").style.background = "red"
            }

        }
    });

    $('#urlinput').keyup(function (event) {

        var value = $(this).val();
        if (value.length > 0) {
            var patt =  new  RegExp(/(http|ftp|https|file):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~‌​+#-]*[\w@?^=%&amp;\/‌​~+#-])?/);
            if(patt.test(value)){
                document.getElementById("url").style.background = "green"
            }else {
                document.getElementById("url").style.background = "red"
            }

        }
    });

    $('#passwordinput').keyup(function (event) {
        var value = $(this).val();
        var result = zxcvbn(value);
        console.log(result);
        // Update the password strength meter
        document.getElementById('password-strength-meter').value = result.score;

        // Update the text indicator
        if (value !== "") {
            document.getElementById("password-strength-text")
            document.getElementById("password").style.background = "green"
        } else {
            document.getElementById("password").style.background = "red"
        }
    });

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






