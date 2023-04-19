(function($) {
    'use strict';

    $(".dream_form_submit").click(function() {
        var $this = $(this);
        var obj = $(this).parents('.dream_form_render');
        var form_id = $(this).data('form_id');
        obj.find('.dream_req_field').each(function() {
            if ($(this).val().length == 0) {
                $(this).addClass('dream_empty_error');
            }
        });
        var messages = {};
        var m = 0;
        $('.dream_messages input').each(function() {
            messages[m] = $(this).val();
            m++;
        });

        if ($('.dream_empty_error').length == 0) {
            var fieldType;
            var attachments = new FormData();
            var fields = {};
            var label, attach_invalid;
            obj.find('.form-group').each(function() {
                fieldType = $(this).attr('data-fieldtype');

                if (fieldType != 'button' && fieldType != 'select') {
                    if ($(this).find('.dream_label').text() != '') {
                        label = ($(this).find('.dream_label').text()).replace(' ', '_');
                    } else if (($(this).find('.form-control').attr('placeholder')) != '') {
                        label = ($(this).find('.form-control').attr('placeholder')).replace(' ', '_');
                    }
                }

                switch (fieldType) {
                    case 'text':
                        fields[label] = $(this).find('input').val();
                        break;
                    case 'textarea':
                        fields[label] = $(this).find('textarea').val();
                        break;
                    case 'number':
                        fields[label] = $(this).find('input').val();
                        break;
                    case 'email':
                        if (($(this).find('input').val().length != 0) && dreamvalidateEmail($(this).find('input').val()) == true) {
                            fields[label] = $(this).find('input').val();
                            fields['user_email'] = $(this).find('input').val();
                        } else {
                            $(this).find('input').addClass('dream_empty_error invalid_email');
                            dream_form_alert(messages[4], "error");
                            setTimeout(function() {
                                obj.find('input').removeClass('dream_empty_error invalid_email');
                            }, 7000);
                        }
                        break;
                    case 'select':
                        fields['Options'] = $(this).find('select').val();
                        break;
                    case 'radiogroup':
                        fields[label] = $(this).find('input').val();
                        break;
                    case 'checkboxgroup':
                        var options = '';
                        var i = 0;
                        $(this).find('input:checked').each(function() {
                            options += $(this).val() + ',';
                            i++;
                        });
                        fields[label] = options.slice(0, -1);
                        break;
                    case 'date':
                        fields[label] = $(this).find('input').val();
                        break;
                    case 'fileupload':
                        var input_file = $(this).find('input[type=file]');
                        $.each(input_file[0].files, function(i, file) {
                            attachments.append('file-' + i, file);
                        });
                        break;
                }

            });
            attachments.append('action', 'dream_form_submit'); //Ajax Action
            attachments.append('form_id', form_id);
            for (var key in fields) {
                attachments.append(key, fields[key]);
            }


            if (attach_invalid == 'invalid') {
                dream_form_alert("The file you tried to attach is invalid.", "error");
                setTimeout(function() {
                    obj.find('.dream_req_field').removeClass('dream_empty_error');
                }, 7000);
                return;
            }

            if ($(".invalid_email").length != 0) {
                return false;
            }

            $('.dm-btn-loader').css('display', 'inline-block');
            jQuery.ajax({
                url: ajax_obj.ajax_url,
                data: attachments,
                cache: false,
                contentType: false,
                processData: false,
                method: 'POST',
                type: 'POST', // For jQuery < 1.9
                success: function(response) {
                    console.log(response);
                    var res = JSON.parse(response);
                    if (typeof(res.success) !== "undefined") {
                        $('.dm-btn-loader').hide(2000);
                        obj.find('.form-group').each(function() {
                            $(this).find('.form-control').val('');
                        });
                        dream_form_alert(messages[0], "success");
                    } else {
                        dream_form_alert(res.error, "error");
                    }
                    $('.dm-btn-loader').hide();
                },
                error: function(response) {
                    dream_form_alert(messages[1], "error");
                    console.log(response);
                    $('.dm-btn-loader').hide();
                }
            });

        } else {
            dream_form_alert(messages[2], "error");
            setTimeout(function() {
                obj.find('.dream_req_field').removeClass('dream_empty_error dream_form_error');
            }, 7000);
        }

    });

    $('.custom_date').datepicker({
        format: 'dd-mm-yyyy',
    });


    //Newsletter Submit
    $(".dream_newsletter_submit").click(function() {
        var $this = $(this);
        var name_field = $('.responder_data').data('name_field');
        var formid = $('.responder_data').data('formid');
        var email_field = $('.responder_data').data('email_field');
        var obj = $(this).parents('.dream_form_render');

        obj.find('.dream_req_field').each(function() {
            if ($(this).val().length == 0) {
                $(this).addClass('dream_empty_error');
            }
        });

        var messages = {};
        var m = 0;
        $('.dream_messages input').each(function() {
            messages[m] = $(this).val();
            m++;
        });

        if ($('.dream_empty_error').length == 0) {
            var fieldType;
            var fields = {};
            var label;
            //selected name field
            fields['name'] = $('input[name=' + name_field + ']').val();
            obj.find('.form-group').each(function() {
                fieldType = $(this).attr('data-fieldtype');

                if (fieldType != 'button') {
                    if ($(this).find('.dream_label').text() != '') {
                        label = ($(this).find('.dream_label').text()).replace(' ', '_');
                    } else if (($(this).find('.form-control').attr('placeholder')) != '') {
                        label = ($(this).find('.form-control').attr('placeholder')).replace(' ', '_');
                    }
                }

                switch (fieldType) {
                    case 'text':
                        fields[label] = $(this).find('input').val();
                        break;
                    case 'email':
                        if (dreamvalidateEmail($('input[name=' + email_field + ']').val()) == true) {
                            fields['email'] = $('input[name=' + email_field + ']').val();
                        } else {
                            $(this).find('input').addClass('dream_empty_error invalid_email');
                            dream_form_alert(messages[4], "error");
                            setTimeout(function() {
                                obj.find('input').removeClass('dream_empty_error invalid_email');
                            }, 5000);
                        }
                        break;
                    case 'number':
                        fields['number'] = $(this).find('input').val();
                        break;

                }

            });

            if ($(".invalid_email").length != 0) {
                return false;
            }
            $('.dm-btn-loader').css('display', 'inline-block');
            $.ajax({
                url: ajax_obj.ajax_url,
                data: {
                    action: 'dream_newsletter_submit',
                    formid: formid,
                    fields: fields
                },
                type: 'POST',
                success: function(response) {
                    console.log(response);
                    var res = JSON.parse(response);
                    if (res.msg == 'success') {
                        obj.find('.form-group').each(function() {
                            $(this).find('.form-control').val('');
                        });
                        dream_form_alert(messages[0], "success");
                    } else {
                        dream_form_alert(messages[1], "error");
                    }
                    $('.dm-btn-loader').hide();
                },
                error: function(response) {
                    dream_form_alert(messages[1], "error");
                    $('.dm-btn-loader').hide();
                }
            });
        } else {
            dream_form_alert('Please fill all the required fields.', "error");
            setTimeout(function() {
                obj.find('.dream_req_field').removeClass('dream_empty_error dream_form_error');
            }, 5000);
        }
    });

    //Submit on both Email and Newsletter
    $(".dream_form_submit_both").click(function() {
        var $this = $(this);
        var obj = $(this).parents('.dream_form_render');
        var form_id = $(this).data('form_id');
        obj.find('.dream_req_field').each(function() {
            if ($(this).val().length == 0) {
                $(this).addClass('dream_empty_error');
            }
        });
        var messages = {};
        var m = 0;
        $('.dream_messages input').each(function() {
            messages[m] = $(this).val();
            m++;
        });

        if ($('.dream_empty_error').length == 0) {
            var fieldType;
            var attachments = new FormData();
            var fields = {};
            var label, attach_invalid;
            obj.find('.form-group').each(function() {
                fieldType = $(this).attr('data-fieldtype');

                if (fieldType != 'button') {
                    if ($(this).find('.dream_label').text() != '') {
                        label = ($(this).find('.dream_label').text()).replace(' ', '_');
                    } else if (($(this).find('.form-control').attr('placeholder')) != '') {
                        label = ($(this).find('.form-control').attr('placeholder')).replace(' ', '_');
                    }
                }

                switch (fieldType) {
                    case 'text':
                        fields[label] = $(this).find('input').val();
                        break;
                    case 'textarea':
                        fields[label] = $(this).find('textarea').val();
                        break;
                    case 'number':
                        fields[label] = $(this).find('input').val();
                        break;
                    case 'email':
                        if (($(this).find('input').val().length != 0) && dreamvalidateEmail($(this).find('input').val()) == true) {
                            fields[label] = $(this).find('input').val();
                            fields['user_email'] = $(this).find('input').val();
                        } else {
                            $(this).find('input').addClass('dream_empty_error invalid_email');
                            dream_form_alert(messages[4], "error");
                            setTimeout(function() {
                                obj.find('input').removeClass('dream_empty_error invalid_email');
                            }, 7000);
                        }
                        break;
                    case 'select':
                        fields[label] = $(this).find('select').val();
                        break;
                    case 'radiogroup':
                        fields[label] = $(this).find('input').val();
                        break;
                    case 'checkboxgroup':
                        var options = '';
                        var i = 0;
                        $(this).find('input:checked').each(function() {
                            options += $(this).val() + ',';
                            i++;
                        });
                        fields[label] = options.slice(0, -1);
                        break;
                    case 'date':
                        fields[label] = $(this).find('input').val();
                        break;
                    case 'fileupload':
                        var input_file = $(this).find('input[type=file]');
                        $.each(input_file[0].files, function(i, file) {
                            attachments.append('file-' + i, file);
                        });
                        break;
                }

            });

            attachments.append('action', 'dream_form_submit'); //Ajax Action
            attachments.append('form_id', form_id);
            for (var key in fields) {
                attachments.append(key, fields[key]);
            }


            if (attach_invalid == 'invalid') {
                dream_form_alert("The file you tried to attach is invalid.", "error");
                setTimeout(function() {
                    obj.find('.dream_req_field').removeClass('dream_empty_error');
                }, 7000);
                return;
            }

            if ($(".invalid_email").length != 0) {
                return false;
            }

            $this.next('.dream_loader_img').css('display', 'inline-block');
            jQuery.ajax({
                url: ajax_obj.ajax_url,
                data: attachments,
                cache: false,
                contentType: false,
                processData: false,
                method: 'POST',
                type: 'POST', // For jQuery < 1.9
                success: function(response) {
                    var response = Object.keys(JSON.parse(response));
                    if (response == 'success') {
                        dream_form_alert(messages[0], "success");
                        var formid = $('.responder_data').data('responder_formid');
                        var name_field = $('.responder_data').data('name_field');
                        var email_field = $('.responder_data').data('email_field');
                        var obj = $this.parents('.dream_form_render');
                        if ($('.dream_empty_error').length == 0) {
                            var fieldType;
                            var fields = {};
                            var label;
                            //selected name field
                            fields['name'] = $('input[name=' + name_field + ']').val();
                            obj.find('.form-group').each(function() {
                                fieldType = $(this).attr('data-fieldtype');
                                if (fieldType != 'button') {
                                    if ($(this).find('.dream_label').text() != '') {
                                        label = ($(this).find('.dream_label').text()).replace(' ', '_');
                                    } else if (($(this).find('.form-control').attr('placeholder')) != '') {
                                        label = ($(this).find('.form-control').attr('placeholder')).replace(' ', '_');
                                    }
                                }
                                switch (fieldType) {
                                    case 'text':
                                        fields[label] = $(this).find('input').val();
                                        break;
                                    case 'email':
                                        if (dreamvalidateEmail($('input[name=' + email_field + ']').val()) == true) {
                                            fields['email'] = $('input[name=' + email_field + ']').val();
                                        } else {
                                            $(this).find('input').addClass('dream_empty_error invalid_email');
                                            dream_form_alert(messages[4], "error");
                                            setTimeout(function() {
                                                obj.find('input').removeClass('dream_empty_error invalid_email');
                                            }, 7000);
                                        }
                                        break;
                                }

                            });

                            $.ajax({
                                url: ajax_obj.ajax_url,
                                data: {
                                    action: 'dream_newsletter_submit',
                                    formid: formid,
                                    fields: fields
                                },
                                type: 'POST',
                                success: function(response) {
                                    console.log(response);
                                    obj.find('.form-group').each(function() {
                                        $(this).find('.form-control').val('');
                                    });
                                    dream_form_alert(messages[0], "success");
                                },
                                error: function(response) {
                                    dream_form_alert(messages[1], "error");
                                    console.log(response);
                                }
                            });
                        } else {
                            dream_form_alert(messages[2], "error");
                            setTimeout(function() {
                                obj.find('.dream_req_field').removeClass('dream_empty_error dream_form_error');
                            }, 7000);
                        }
                    }
                    $('.dm-btn-loader').hide();
                }
            });

        } else {
            dream_form_alert(messages[2], "error");
            setTimeout(function() {
                obj.find('.dream_req_field').removeClass('dream_empty_error dream_form_error');
            }, 7000);
        }
    });

})(jQuery);