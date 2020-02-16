(function ($) {

    var form = $("#signup-form");
    form.validate({
        errorPlacement: function errorPlacement(error, element) { element.before(error); },
        rules: {

        }
    });

    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous: 'Previous',
            next: 'Next ',
            finish: 'Finish',
            current: ''
        },
        titleTemplate: '<h3 class="title">#title#</h3>',
        onStepChanging: function (event, currentIndex, newIndex) {

            document.getElementById('mobile').value = localStorage.getItem("LoginUserMobile");
            document.getElementById('email').value = localStorage.getItem("LoginUserEmail");




            var checkedValue = (document.querySelector('.dosameasresident').checked)
            var dob = document.getElementById('datepicker').value;
           

            var from = $("#datepicker").val().split("/")
            var f = new Date(from[2], from[1] - 1, from[0])
           
            var dobs = new Date(f);
            var ageDifMs = Date.now() - dobs.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            var calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
           
            var name = document.getElementById('your_name').value;
            var fathername = document.getElementById('fathername').value;
            var dob = document.getElementById('datepicker').value;
            var gendertype = $("input:radio[name ='gender']:checked").val();
            var martialtype = $("input:radio[name ='martial']:checked").val();
            var nationalitytype = $("input:radio[name ='nationality']:checked").val();
            if (nationalitytype == "other") {

                var othernation = document.getElementById('othernation').value;
            }
            var statustype = $("input:radio[name ='status']:checked").val();

            var pan = document.getElementById('pan').value;
            var adhaar = document.getElementById('adhaar').value;
            var proof = $("input:radio[name ='proof']:checked").val();
            if (proof == "otherproof") {

                var otherproof = document.getElementById('otherproof').value;
            }

            var address1 = document.getElementById('address1').value;
            var address2 = document.getElementById('address2').value;
            var city = document.getElementById('city').value;
            var pincode = document.getElementById('pincode').value;
            var state = document.getElementById('state').value;
            var country = document.getElementById('country').value;


            var per_address1 = document.getElementById('per_address1').value;
            var per_address2 = document.getElementById('per_address2').value;
            var per_city = document.getElementById('per_city').value;
            var per_pincode = document.getElementById('per_pincode').value;
            var per_state = document.getElementById('per_state').value;
            var per_country = document.getElementById('per_country').value;

            if (currentIndex === 0) {



                if (!name) {
                    toastr.warning("Name field is required");
                    return false;
                }
                else if (!fathername) {
                    toastr.warning("Father/Spouse Name field is required");
                    return false;
                }
                else if (!dob) {
                    toastr.warning("Date of Birth field is required");
                    return false;
                }
                else if (calculatedAge.toString() < 18) {
                    toastr.warning("This site not suitable for persons under 18 years old   ");
                    return false;
                }
                else if (!gendertype) {
                    toastr.warning("Gender field is required");
                    return false;
                }
                else if (!martialtype) {
                    toastr.warning("Martial Status field is required");
                    return false;
                }
                else {
                    return true;
                }
            }
            else if (currentIndex === 1) {



                if (!nationalitytype) {

                    toastr.warning("Nationality field is required");
                    return false;


                }

                else if (nationalitytype == "other" && !othernation) {


                    // if (nationalitytype === "other") {

                    //     if(!othernation){
                    toastr.warning("Please Specify Other nationality");
                    return false;
                    //     }

                    // }
                    // else {
                    //     return true;
                    // }

                }
                else if (!statustype) {
                    toastr.warning("Status field is required");
                    return false;
                }
                else {
                    return true;
                }
            }

            else if (currentIndex === 2) {



                if (!pan) {

                    toastr.warning("PAN no field is required");
                    return false;
                }
                else if (pan.length > 10) {
                    toastr.warning("The PAN character exceeds the allowable limit");
                    return false;
                }
                else if (pan.length < 10) {
                    toastr.warning("The PAN character beat the allowable limit");
                    return false;
                }
                else if (!adhaar) {
                    toastr.warning("UID/Adhaar is required");
                    return false;
                }
                else if (adhaar.length > 12) {
                    toastr.warning("The UID/Adhaar no exceeds the allowable limit");
                    return false;
                }
                else if (adhaar.length < 12) {
                    toastr.warning("The UID/Adhaar no beat the allowable limit");
                    return false;
                }

                else if (!proof) {

                    toastr.warning("Proof field is required");
                    return false;


                }

                else if (proof) {

                    if (proof === "otherproof") {

                        if (!otherproof) {
                            toastr.warning("Please Specify Other Proof");
                            return false;
                        }

                    }
                    else {
                        return true;
                    }

                }
                else {
                    return true;
                }
            }
            if (currentIndex === 3) {






                if (checkedValue) {


                    document.getElementById('per_address1').value = address1;
                    document.getElementById('per_address2').value = address2;
                    document.getElementById('per_city').value = city;
                    document.getElementById('per_pincode').value = pincode;
                    document.getElementById('per_state').value = state;
                    document.getElementById('per_country').value = country;

                    // document.getElementById('per_address1').readOnly  = true;
                    // document.getElementById('per_address2').readOnly  = true;
                    // document.getElementById('per_city').readOnly  = true;
                    // document.getElementById('per_pincode').readOnly  = true;
                    // document.getElementById('per_state').readOnly  = true;
                    // document.getElementById('per_country').readOnly  = true;


                } else {

                    document.getElementById('per_address1').value = null;
                    document.getElementById('per_address2').value = null;
                    document.getElementById('per_city').value = null;
                    document.getElementById('per_pincode').value = null;
                    document.getElementById('per_state').value = null;
                    document.getElementById('per_country').value = null;

                    // document.getElementById('per_address1').readOnly  = false;
                    // document.getElementById('per_address2').readOnly  = false;
                    // document.getElementById('per_city').readOnly  = false;
                    // document.getElementById('per_pincode').readOnly  = false;
                    // document.getElementById('per_state').readOnly  = false;
                    // document.getElementById('per_country').readOnly  = false;
                }
                if (!address1) {

                    toastr.warning("Address field is required");
                    return false;
                }
                else if (!city) {
                    toastr.warning("City field is required");
                    return false;
                }
                else if (!pincode) {
                    toastr.warning("Pincode field is required");
                    return false;
                }
                else if (!state) {
                    toastr.warning("State field is required");
                    return false;
                }
                else if (!country) {
                    toastr.warning("Country field is required");
                    return false;
                }
                else {
                    return true;
                }

            }

            if (currentIndex === 4) {




                if (!checkedValue) {

                    if (!per_address1) {

                        toastr.warning("Address field is required");
                        return false;
                    }
                    else if (!per_city) {
                        toastr.warning("City field is required");
                        return false;
                    }
                    else if (!per_pincode) {
                        toastr.warning("Pincode field is required");
                        return false;
                    }
                    else if (!per_state) {
                        toastr.warning("State field is required");
                        return false;
                    }
                    else if (!per_country) {
                        toastr.warning("Country field is required");
                        return false;
                    }
                    else {
                        return true;
                    }
                } else return true;

            }


            // return true;

            // form.validate();
            // return form.valid();


        },

        onFinished: function (event, currentIndex) {




            var name = document.getElementById('your_name').value;
            var fathername = document.getElementById('fathername').value;
            var dob = document.getElementById('datepicker').value;
            var gendertype = $("input:radio[name ='gender']:checked").val();
            var martialtype = $("input:radio[name ='martial']:checked").val();
            var nationalitytype = $("input:radio[name ='nationality']:checked").val();
            if (nationalitytype == "other") {

                var othernation = document.getElementById('othernation').value;
            }
            var statustype = $("input:radio[name ='status']:checked").val();

            var pan = document.getElementById('pan').value;
            var adhaar = document.getElementById('adhaar').value;
            var proof = $("input:radio[name ='proof']:checked").val();
            if (proof == "otherproof") {

                var otherproof = document.getElementById('otherproof').value;
            }

            var address1 = document.getElementById('address1').value;
            var address2 = document.getElementById('address2').value;
            var city = document.getElementById('city').value;
            var pincode = document.getElementById('pincode').value;
            var state = document.getElementById('state').value;
            var country = document.getElementById('country').value;


            var per_address1 = document.getElementById('per_address1').value;
            var per_address2 = document.getElementById('per_address2').value;
            var per_city = document.getElementById('per_city').value;
            var per_pincode = document.getElementById('per_pincode').value;
            var per_state = document.getElementById('per_state').value;
            var per_country = document.getElementById('per_country').value;

            var teloffice = document.getElementById('teloffice').value;
            var telres = document.getElementById('telres').value;
            var mobile = document.getElementById('mobile').value;
            var fax = document.getElementById('fax').value;
            var email = document.getElementById('email').value;


            if (!mobile) {

                toastr.warning("Mobile field is required");
                return false;
            }
            else if (!email) {
                toastr.warning("Email field is required");
                return false;
            } else {

                var LoginId = localStorage.getItem("LoginId");

                var json = JSON.stringify({

                    name: name,
                    fathername: fathername,
                    dob: dob,
                    gender: gendertype,
                    martial: martialtype,
                    nationality: nationalitytype,
                    othernation: othernation,
                    status: statustype,
                    pan: pan,
                    adhaar: adhaar,
                    proof: proof,
                    otherproof: otherproof,
                    address1: address1,
                    address2: address2,
                    city: city,
                    pincode: pincode,
                    state: state,
                    country: country,
                    teloffice: teloffice,
                    telres: telres,
                    mobile: mobile,
                    fax: fax,
                    email: email,
                    per_address1: per_address1,
                    per_address2: per_address2,
                    per_city: per_city,
                    per_pincode: per_pincode,
                    per_state: per_state,
                    per_country: per_country,
                    LoginId: LoginId

                })



                $.ajax({
                    type: 'POST',
                    url: 'https://greatventures.herokuapp.com/user/create',
                    // url: 'http://localhost:1234/user/create',
                    // enctype: 'multipart/form-data',
                    // contentType: "text/html",
                    data: json,
                    // async: false,
                    // cache: false,
                    contentType: "application/json",
                    // enctype: 'multipart/form-data',
                    processData: false,
                    // contentType: 'multipart/mixed; boundary=gc0p4Jq0M2Yt08jU534c0p',
                    // contentType: false, 

                    // processData: false,

                    cache: false,
                    async: false,
                    // dataType: "json",
                    success: function (data) {
                        console.log(data);
                        var i = data;
                        console.log(data._id);


                        // alert(data);
                        // window.location = "http://demomano.s3-website-us-east-1.amazonaws.com";


                        var formData = new FormData();
                        formData.append('file', $('#imageUpload')[0].files[0]);
                        formData.append('KYCuserId', data._id);

                        $.ajax({
                            url: 'https://greatventures.herokuapp.com/user/upload',
                            type: 'POST',
                            data: formData,
                            cache: false,
                            dataType: 'json',
                            processData: false, // Don't process the files
                            contentType: false, // Set content type to false as jQuery will tell the server its a query string request
                            success: function (data, textStatus, jqXHR) {

                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                // Handle errors here
                                console.log('ERRORS: ' + textStatus);
                                // STOP LOADING SPINNER
                            }
                        });



                         window.location = "index.html";

                    },
                    error: function (data, textStatus, errorThrown) {
                        console.log('data', data);

                        alert('KYC failed to create');
                    }
                });

            }








        },
    });

    $(".toggle-password").on('click', function () {

        $(this).toggleClass("zmdi-eye zmdi-eye-off");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    $(document).ready(function () {

        var LoginId = localStorage.getItem("LoginId");
        if (LoginId == null) {

            alert("Please Login First");
            window.location = "index.html";

        } else {

            $.ajax({
                type: 'GET',
                url: `https://greatventures.herokuapp.com/user/get/${LoginId}`,
                processData: false,
                async: false,
                success: function (data) {


                    if (data.length == 0) {



                    }
                    else {

                        window.location = "index.html";
                    }
                },
                error: function (data) {
                }
            });
        }

    });


})(jQuery);