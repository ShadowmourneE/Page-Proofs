
$(document).ready(function()

{


// my method for validate username

    $.validator.addMethod("username_regex", function(value, element) {

        return this.optional(element) || /^[a-z0-9\.\-_]{3,30}$/i.test(value);

    }, "Please choise a username with only a-z 0-9.");


    $( "#reg_date" ).datepicker({

        changeMonth: true,

        changeYear: true

    });

    $("#form_register").validate(

        {

            rules:{

                'name':{

                    required: true,

                    minlength: 1

                },

                'username':{

                    required: true,

                    minlength: 3,

                    username_regex: true,

                    remote:{

                        url: "validatorAJAX.php",

                        type: "post"

                    }

                },

                'recaptcha_response_field':{

                    required: true,

                    captchaCheck: true,

                },

                'email':{

                    required: true,

                    email: true,

                    remote:{

                        url: "validatorAJAX.php",

                        type: "post"

                    }

                },

                'web':{

                    required: true,

                    url: true

                },

                'date':{

                    required: true,

                    date: true

                },

                'pass1':{

                    required: true,

                    minlength: 8

                },

                'pass2':{

                    equalTo: '#reg_pass1'

                }

            },

            messages:{

                'name':{

                    required: "The name field is mandatory!",

                    minlength: "Choose a username of at least 1 letters!",

                },

                'username':{

                    required: "The username field is mandatory!",

                    minlength: "Choose a username of at least 4 letters!",

                    username_regex: "You have used invalid characters. Are permitted only letters numbers!",

                    remote: "The username is already in use by another user!"

                },

                'email':{

                    required: "The Email is required!",

                    email: "Please enter a valid email address!",

                    remote: "The email is already in use by another user!"

                },

                'web':{

                    required: "The Web Address is required!"

                },

                'pass1':{

                    required: "The password field is mandatory!",

                    minlength: "Please enter a password at least 8 characters!"

                },

                'pass2':{

                    equalTo: "The two passwords do not match!"

                }

            }

        });

});
