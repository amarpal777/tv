(function($) {
    "use strict";
    var dream = {
        initialised: false,
        version: 1.0,
        Solar: false,
        init: function() {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            // Functions Calling

            this.login_tab();
            this.music_sidebar();
            this.login_menu();
            this.select();
            this.head_search();
            this.top_head_search();
            this.main_menu();
            this.sub_menu();
            this.go_top();
            this.blog_slider();
            this.course_slider();
            this.product_menu();
            this.live_search();
            this.gallery_slider();
            this.user_signup();
            this.grid_menu();
            this.testimonial_two();
            this.testimonial_thumb();
            this.listing_service();
            this.testimonial_lb();
            this.counter();
            this.image_slider();
            this.sidebar_tweets();
            this.general_scripts();
            this.team_slider();
            this.category_slider();
            this.service_slider();
            this.accordion();
            this.magnific();
            this.gallery();
            this.countdown();
            this.preloader();
        },
        // login tab start
        login_tab: function() {
            if ($(".dm-ac-login-wrap").length > 0) {
                $(".dm-ac-login-btn").on('click', function() {
                    $(".dm-ac-login-wrap").removeClass("dm-ac-register-active");
                    $(".dm-ac-login-wrap").addClass("dm-ac-login-active");
                });
                $(".dm-ac-register-btn").on('click', function() {
                    $(".dm-ac-login-wrap").removeClass("dm-ac-login-active");
                    $(".dm-ac-login-wrap").addClass("dm-ac-register-active");
                });
            };
        },
        // login tab end
        // music sidebar start
        music_sidebar: function() {
            if ($('.dm-main-wraper').length != 0) {
                if ($('body').length > 0) {
                    $('.dm-ms-toggle-shape').on('click', function(e) {
                        $('body').toggleClass('dm-music-sidebar-open');
                    });
                    $('.dm-ms-player-toggle').on('click', function(e) {
                        $('body').toggleClass('dm-ms-player-open');
                    });
                };
                if ($('body').length > 0) {
                    var w = window.innerWidth;
                    if (w <= 1199) {
                        $('body').removeClass('dm-music-sidebar-open');
                    }
                };

                var currentPage = window.location.href;
                $('.dm-music-sidebar ul li').each(function() {
                    var url = $(this).find('a').attr('href');
                    if (currentPage == url) {
                        $(this).addClass('current_page_item');
                    }
                });
            }
        },
        // music sidebar end
        login_menu: function() {
            if ($('.mt_header_wrap').length > 0) {
                var w = window.innerWidth;
                if (w <= 767) {
                    $(".logged-in .dm-more-menu-toggle").on('click', function(e) {
                        event.stopPropagation();
                        $("body").toggleClass("dm-more-menu-toggle-open");
                    });
                    $("body").on('click', function() {
                        $("body").removeClass("dm-more-menu-toggle-open");
                    });
                    $(".dm-more-submenu").on('click', function() {
                        event.stopPropagation();
                    });
                }
            }
        },
        //Custom Select
        select: function() {
            if ($('select').length != 0) {
                $('select').niceSelect();
            }
        },
        // search start
        head_search: function() {
            if ($('.mt_header_wrap').length > 0) {
                $(".dm-serach-icon").on('click', function(e) {
                    event.stopPropagation();
                    $(".mt_header_wrap").toggleClass("dm-open-search");
                })
                $("body").on('click', function() {
                    $(".mt_header_wrap").removeClass("dm-open-search");
                })
                $(".dm-search-form form").on('click', function() {
                    event.stopPropagation();
                })
            }
        },
        // search end
        // top search start
        top_head_search: function() {
            if ($('.dm-top-header').length > 0) {
                $(".dm-top-search").on('click', function(e) {
                    event.stopPropagation();
                    $(".dm-top-search").toggleClass("dm-top-head-search");
                })
                $("body").on('click', function() {
                    $(".dm-top-search").removeClass("dm-top-head-search");
                })
                $(".dm-top-search form input").on('click', function() {
                    event.stopPropagation();
                })
                $(".dm-top-search form .dm-btn").on('click', function() {
                    event.stopPropagation();
                })
            }
        },
        // top search end
        // main menu start
        main_menu: function() {
            if ($('.dm-main-wraper').length > 0) {
                var w = window.innerWidth;
                if (w <= 1199) {
                    $(".dm-menu-toggle").on('click', function(e) {
                        event.stopPropagation();
                        $("body").toggleClass("dm-open-menu");
                    });
                    $("body").on('click', function() {
                        $("body").removeClass("dm-open-menu");
                    });
                    $(".dm-navbar").on('click', function() {
                        event.stopPropagation();
                    });
                }
            }

            //Absolute Header(Event)
            if ($('.dm-em-header').length != 0 && $('.dm-top-header').length != 0) {
                $('.dm-em-header').addClass('mt_absolute_header');
            }

        },
        // main menu end
        // sub menu start
        sub_menu: function() {
            if ($('.mt_header_wrap').length > 0) {
                var w = window.innerWidth;
                if (w <= 1199) {
                    $(".dm-navbar>ul li.menu-item-has-children").on('click', function(e) {
                        $(this).children('.sub-menu').slideToggle();
                        $(this).siblings('li').find('.sub-menu').hide();
                        e.stopPropagation();
                    });
                    $(".has-mega-menu").on('click', function() {
                        $(this).children('.dream-mega-menu-ul').slideToggle();
                    });
                }
            }
        },
        // sub menu end		
        // go to start
        go_top: function() {
            //Window Scroll Event
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();
                if ($('.mt_header_fixed').length > 0) {
                    var header_height = $('.dm-header').innerHeight();
                    if (scroll >= header_height) {
                        $(".mt_header_fixed").addClass("yes");
                    } else {
                        $(".mt_header_fixed").removeClass("yes");
                    }
                }
                if ($('.dm-go-top').length > 0) {
                    if (scroll >= 300) {
                        $(".dm-go-top").addClass("dm-go-top-show");
                    } else {
                        $(".dm-go-top").removeClass("dm-go-top-show");
                    }
                }
            });
            if ($('.dm-go-top').length > 0) {
                $('.dm-go-top').on('click', function() {
                    $(window).scrollTop(0);
                });
            }
        },
        // go to end
        //Blog Slider start
        blog_slider: function() {
            if ($('.dm-blog .swiper-container').length > 0) {
                $('.dm-blog .swiper-container').each(function(index, element) {

                    var meta = $(this).attr('data-slidermeta');
                    var data = JSON.parse(meta);

                    var swiper = new Swiper($(this), {
                        slidesPerView: data.per_view,
                        spaceBetween: 30,
                        loop: data.loop == 'true' ? true : false,
                        autoplay: data.autoplay == 'true' ? {
                            delay: parseInt(data.delay)
                        } : false,
                        speed: 1000,
                        breakpoints: {
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 15
                            },
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            991: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            1199: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                            1399: {
                                slidesPerView: data.per_view,
                                spaceBetween: 30
                            }
                        },
                        pagination: {
                            el: $(this).find('.swiper-pagination'),
                            type: data.pagination,
                            clickable: true
                        },
                        navigation: {
                            nextEl: $(this).find('.swiper-button-next'),
                            prevEl: $(this).find('.swiper-button-prev')
                        },
                    });

                });

            }

            $(window).load(function() {
                if ($('.dm-news-blog .swiper-container').length > 0) {
                    $('.dm-news-blog .swiper-container').each(function(index, element) {

                        var meta = $(this).attr('data-slidermeta');
                        var data = JSON.parse(meta);

                        var swiper = new Swiper($(this), {
                            slidesPerView: 2,
                            centeredSlides: true,
                            spaceBetween: 30,
                            loop: data.loop == 'true' ? true : false,
                            autoplay: data.autoplay == 'true' ? {
                                delay: parseInt(data.delay)
                            } : false,
                            speed: 1000,
                            pagination: {
                                el: $(this).find('.swiper-pagination'),
                                type: data.pagination,
                                clickable: true
                            },
                            navigation: {
                                nextEl: $(this).find('.swiper-button-next'),
                                prevEl: $(this).find('.swiper-button-prev')
                            },
                            breakpoints: {
                                991: {
                                    centeredSlides: false,
                                    slidesPerView: 1
                                },
                                1199: {
                                    slidesPerView: 2
                                }
                            },
                        });

                        swiper.slideNext();

                    });

                }

                // Instagram Slider        
                if ($('.dm-news-instagram').length > 0) {
                    var meta = $('.dm-news-instagram .swiper-container').attr('data-slidermeta');
                    var data = meta != undefined ? JSON.parse(meta) : '';
                    var swiper = new Swiper('.dm-news-instagram .swiper-container', {
                        slidesPerView: data.per_view,
                        loop: data.loop == 'true' ? true : false,
                        autoplay: data.autoplay == 'true' ? {
                            delay: parseInt(data.delay)
                        } : false,
                        speed: 1000,
                        spaceBetween: parseInt(data.col_gap),
                        breakpoints: {
                            480: {
                                slidesPerView: 2
                            },
                            575: {
                                slidesPerView: 2
                            },
                            767: {
                                slidesPerView: 2
                            },
                            991: {
                                slidesPerView: 3
                            },
                            1199: {
                                slidesPerView: 4
                            }
                        },
                        pagination: {
                            el: $('.dm-news-instagram .swiper-pagination'),
                            type: data.pagination,
                            clickable: true
                        },
                        navigation: {
                            nextEl: $('.dm-news-instagram .swiper-button-next'),
                            prevEl: $('.dm-news-instagram .swiper-button-prev')
                        },
                    });
                }

            });

        },
        //Blog Slider end
        // product menu start
        product_menu: function() {
            if ($('.dm-our-product').length > 0) {
                $(".dm-our-product li.menu-item-has-children").on('click', function(e) {
                    $(this).children('.dm-our-product .sub-menu').slideToggle();
                    $(this).siblings('li').find('.dm-our-product .sub-menu').hide();
                    e.stopPropagation();
                });
                $(".dm-our-product .sub-menu").on('click', function() {
                    event.stopPropagation();
                });
                $(".dm-our-pro-head").on('click', function() {
                    $(".dm-dp-header").toggleClass("dm-open-product");
                })
            }
        },
        // product menu end
        //Live Search start
        live_search: function() {
            $('#dm-search-box input[name="s"]').keyup(function() {
                var input = this.value;
                var post_type = $('#dm-search-box input[name="post_type"]').val();
                if (input.length != 0) {
                    $.ajax({
                        'url': ajax_object.ajaxurl,
                        'data': {
                            action: 'dream_live_search',
                            posttype: post_type,
                            keyword: input,
                        },
                        'type': 'post',
                        'success': function(res) {
                            //console.log(res);
                            $('.dm-search-result').html(res);
                        }
                    });
                } else {
                    $('.dm-search-result').html('');
                }

            });

        },
        // Live search end
        //Client Logo Slider
        gallery_slider: function() {
            if ($('.dm-partner .swiper-container').length > 0) {
                $('.dm-partner .swiper-container').each(function(index, element) {

                    var meta = $(this).attr('data-slidermeta');
                    var data = JSON.parse(meta);

                    var swiper = new Swiper($(this), {
                        slidesPerView: data.per_view,
                        spaceBetween: 30,
                        loop: data.loop == 'true' ? true : false,
                        autoplay: data.autoplay == 'true' ? {
                            delay: parseInt(data.delay)
                        } : false,
                        speed: 1000,
                        breakpoints: {
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 15
                            },
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            991: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            1199: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            1399: {
                                slidesPerView: data.per_view,
                                spaceBetween: 30
                            }
                        },
                        pagination: {
                            el: $(this).find('.swiper-pagination'),
                            type: data.pagination,
                            clickable: true
                        },
                        navigation: {
                            nextEl: $(this).parent().find('.swiper-button-next'),
                            prevEl: $(this).parent().find('.swiper-button-prev')
                        },
                    });

                });
            }
        },
        //LMS Course Slider
        course_slider: function() {
            if ($('.dm-lms-courses .swiper-container').length > 0) {
                $('.dm-lms-courses .swiper-container').each(function(index, element) {

                    var meta = $(this).attr('data-slidermeta');
                    var data = JSON.parse(meta);

                    var swiper = new Swiper($(this), {
                        slidesPerView: data.per_view,
                        spaceBetween: 30,
                        loop: data.loop == 'true' ? true : false,
                        autoplay: data.autoplay == 'true' ? {
                            delay: parseInt(data.delay)
                        } : false,
                        speed: 1000,
                        breakpoints: {
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 15
                            },
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            991: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            1199: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            1399: {
                                slidesPerView: data.per_view,
                                spaceBetween: 30
                            }
                        },
                        pagination: {
                            el: $(this).find('.swiper-pagination'),
                            type: data.pagination,
                            clickable: true
                        },
                        navigation: {
                            nextEl: $(this).parent().find('.swiper-button-next'),
                            prevEl: $(this).parent().find('.swiper-button-prev')
                        },
                    });

                });
            }
        },
        //User Login/Signup
        user_signup: function() {
            //Login
            $('#dm-login-submit').click(function() {

                var email = $(this).parent().find('input[name="email"]').val();
                var user_pass = $(this).parent().find('input[name="password"]').val();

                if (email.length == 0) {
                    dream_form_alert('Please enter your email.', 'error');
                    return false;
                }

                if (!dreamvalidateEmail(email)) {
                    dream_form_alert('Your email is invalid.', 'error');
                    return false;
                }

                if (user_pass.length == 0) {
                    dream_form_alert('Please enter your password.', 'error');
                    return false;
                }

                var obj = $(this);
                obj.find('.dm-btn-loader').show();

                $.ajax({
                    'url': ajax_object.ajaxurl,
                    'data': {
                        action: 'dream_user_login',
                        email: email,
                        user_pass: user_pass,
                    },
                    'type': 'post',
                    'success': function(res) {
                        console.log(res);

                        if (res == 'success') {
                            dream_form_alert('Login successful, redirecting...', 'success');
                            window.location.href = "";
                        } else {
                            dream_form_alert(res, 'error');
                        }
                        //$('.dm-search-result').html(res);
                        obj.find('.dm-btn-loader').hide();
                    }
                });
            });

            //Signup
            $('#dm-signup-submit').click(function() {
                var username = $(this).parent().find('input[name="user_name"]').val();
                var email = $(this).parent().find('input[name="email"]').val();
                var user_pass = $(this).parent().find('input[name="password"]').val();

                if (username.length == 0) {
                    dream_form_alert('Please enter your name.', 'error');
                    return false;
                }

                if (email.length == 0) {
                    dream_form_alert('Please enter your email.', 'error');
                    return false;
                }

                if (!dreamvalidateEmail(email)) {
                    dream_form_alert('Your email is invalid.', 'error');
                    return false;
                }

                if (user_pass.length == 0) {
                    dream_form_alert('Please enter your password.', 'error');
                    return false;
                }

                var obj = $(this);
                obj.find('.dm-btn-loader').show();

                $.ajax({
                    'url': ajax_object.ajaxurl,
                    'data': {
                        action: 'dream_user_signup',
                        username: username,
                        email: email,
                        user_pass: user_pass,
                    },
                    'type': 'post',
                    'success': function(res) {
                        console.log(res);

                        if (res == 'success') {
                            window.location.href = "";
                        } else {
                            dream_form_alert(res, 'error');
                        }
                        //$('.dm-search-result').html(res);
                        obj.find('.dm-btn-loader').hide();
                    }
                });
            });
        },
        // grid menu start
        grid_menu: function() {
            if ($('.dm-toggle-menu').length > 0) {
                $(".dm-grid-icon").on('click', function(e) {
                    event.stopPropagation();
                    $(".dm-toggle-navbar").toggleClass("dm-toggle-nav-open");
                });
                $("body").on('click', function() {
                    $(".dm-toggle-navbar").removeClass("dm-toggle-nav-open");
                });
                $(".dm-toggle-navbar ul").on('click', function() {
                    event.stopPropagation();
                });
            }
        },
        // grid menu end
        // testimonial start
        testimonial_two: function() {
            if ($('.dm-testimonial-two').length > 0) {

                $('.dm-testimonial-two .swiper-container').each(function(index, element) {
                    var meta = $(this).attr('data-slidermeta');
                    var data = JSON.parse(meta);

                    var swiper = new Swiper($(this), {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        loop: data.loop == 'true' ? true : false,
                        autoplay: data.autoplay == 'true' ? {
                            delay: parseInt(data.delay)
                        } : false,
                        speed: 1000,
                        pagination: {
                            el: $(this).parent().parent().find('.swiper-pagination'),
                            type: data.pagination,
                            clickable: true
                        },
                        navigation: {
                            nextEl: $(this).parent().parent().find('.swiper-button-next'),
                            prevEl: $(this).parent().parent().find('.swiper-button-prev')
                        },
                    });
                });
            }
        },
        testimonial_thumb: function() {
            if ($('.dm-em-testi-slide').length > 0) {
                var meta = $('.dm-em-testi-box .gallery-thumbs').attr('data-slidermeta');
                var data = JSON.parse(meta);
                console.log(data);
                var galleryTop = new Swiper('.dm-em-testi-slide .gallery-top', {
                    spaceBetween: 10,
                    loop: data.loop == 'true' ? true : false,
                    speed: 1000,
                    autoplay: data.autoplay == 'true' ? {
                        delay: parseInt(data.delay)
                    } : false,
                    touchRatio: 0,
                    loopedSlides: 5, //looped slides should be the same
                    pagination: {
                        el: $('.dm-em-testi-box').next('.swiper-pagination'),
                        type: data.pagination,
                        clickable: true
                    },
                    navigation: {
                        nextEl: $('.dm-em-testi-thumb').find('.swiper-button-next'),
                        prevEl: $('.dm-em-testi-thumb').find('.swiper-button-prev'),
                    },
                    thumbs: {
                        swiper: galleryThumbs,
                    },
                });
            }
            if ($('.dm-em-testi-thumb').length > 0) {
                var meta = $('.dm-em-testi-box .gallery-thumbs').attr('data-slidermeta');
                var data = JSON.parse(meta);

                var galleryThumbs = new Swiper('.dm-em-testi-thumb .gallery-thumbs', {
                    spaceBetween: 10,
                    slidesPerView: 3,
                    loop: data.loop == 'true' ? true : false,
                    speed: 1000,
                    autoplay: data.autoplay == 'true' ? {
                        delay: parseInt(data.delay)
                    } : false,
                    freeMode: true,
                    centeredSlides: true,
                    touchRatio: 0,
                    loopedSlides: 5,
                    pagination: {
                        el: $('.dm-em-testi-box').find('.swiper-pagination'),
                        type: data.pagination,
                        clickable: true
                    },
                    navigation: {
                        nextEl: $('.dm-em-testi-thumb').find('.swiper-button-next'),
                        prevEl: $('.dm-em-testi-thumb').find('.swiper-button-prev'),
                    },
                    effect: 'coverflow',
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 420,
                        depth: 400,
                        modifier: 1,
                        slideShadows: true,
                    },
                    breakpoints: {
                        480: {
                            coverflowEffect: {
                                stretch: 500,
                            },
                        },
                        575: {
                            coverflowEffect: {
                                stretch: 500,
                            },
                        },
                        767: {
                            coverflowEffect: {
                                stretch: 260,
                            },
                        },
                        991: {
                            coverflowEffect: {
                                stretch: 330,
                            },
                        },
                    },
                });
            }
        },
        // testimonial end
        // listing service start
        listing_service: function() {
            if ($('.dm-lb-service').length > 0) {
                var swiper = new Swiper('.dm-lb-service .swiper-container', {
                    slidesPerView: 6,
                    spaceBetween: 30,
                    loop: true,
                    autoplay: true,
                    speed: 1500,
                    breakpoints: {
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                        575: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                        767: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        991: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1199: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            }
        },
        // listing service end
        // testimonial start
        testimonial_lb: function() {
            if ($('.dm-lb-testimonial,.dm-rs-testmonial,.dm-wh-testimonial').length > 0) {
                $('.dm-lb-testimonial .swiper-container,.dm-rs-testmonial .swiper-container,.dm-wh-testimonial .swiper-container').each(function(index, element) {
                    var meta = $(this).attr('data-slidermeta');
                    var data = JSON.parse(meta);

                    var swiper = new Swiper($(this), {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        loop: data.loop == 'true' ? true : false,
                        autoplay: data.autoplay == 'true' ? {
                            delay: parseInt(data.delay)
                        } : false,
                        speed: 1000,
                        pagination: {
                            el: $(this).parent().parent().find('.swiper-pagination'),
                            type: data.pagination,
                            clickable: true
                        },
                        navigation: {
                            nextEl: $(this).parent().parent().find('.swiper-button-next'),
                            prevEl: $(this).parent().parent().find('.swiper-button-prev')
                        },
                    });

                });
            }
        },
        // testimonial end
        // counter start
        counter: function() {
            if ($('.dm-counter-wrap').length > 0) {
                var a = 0;
                $(window).scroll(function() {

                    var oTop = $('#dream-counter').offset().top - window.innerHeight;
                    if (a == 0 && $(window).scrollTop() > oTop) {
                        $('.counter-value').each(function() {
                            var $this = $(this),
                                countTo = $this.attr('data-count');
                            $({
                                countNum: $this.text()
                            }).animate({
                                countNum: countTo
                            }, {
                                duration: 5000,
                                easing: 'swing',
                                step: function() {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function() {
                                    $this.text(this.countNum);
                                }
                            });
                        });
                        a = 1;
                    }
                });
            };
        },
        // counter end
        // image slider start
        image_slider: function() {
            if ($('.dm-image-slider').length > 0) {
                $('.dm-image-slider .swiper-container').each(function(index, element) {

                    var meta = $(this).attr('data-slidermeta');
                    var data = JSON.parse(meta);

                    var swiper = new Swiper($(this), {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        loop: data.loop == 'true' ? true : false,
                        autoplay: data.autoplay == 'true' ? {
                            delay: parseInt(data.delay)
                        } : false,
                        speed: 1500,
                        breakpoints: {
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 15
                            },
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            991: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        },
                        pagination: {
                            el: $(this).find('.swiper-pagination'),
                            type: data.pagination,
                            clickable: true
                        },
                        navigation: {
                            nextEl: $(this).parents('.dm-dw-coupons').find('.swiper-button-next'),
                            prevEl: $(this).parents('.dm-dw-coupons').find('.swiper-button-prev')
                        }
                    });

                });
            }
        },
        // twiter start
        sidebar_tweets: function() {
            if ($('.dm-sidebar-tweets').length > 0) {
                var swiper = new Swiper('.dm-sidebar-tweets .swiper-container', {
                    slidesPerView: 1,
                    loop: true,
                    autoplay: true,
                    speed: 1500,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                });
            }
        },
        //Team Slider
        team_slider: function() {
            if ($('.dm-team-slider').length > 0) {
                $('.dm-team-slider.swiper-container').each(function(index, element) {

                    var meta = $(this).attr('data-slidermeta');
                    var data = JSON.parse(meta);

                    var swiper = new Swiper($(this), {
                        slidesPerView: data.per_view,
                        spaceBetween: 30,
                        loop: data.loop == 'true' ? true : false,
                        autoplay: data.autoplay == 'true' ? {
                            delay: parseInt(data.delay)
                        } : false,
                        speed: 1000,
                        pagination: {
                            el: $(this).find('.swiper-pagination'),
                            type: data.pagination,
                            clickable: true
                        },
                        navigation: {
                            nextEl: $(this).find('.swiper-button-next'),
                            prevEl: $(this).find('.swiper-button-prev')
                        },
                        breakpoints: {
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 15
                            },
                            575: {
                                slidesPerView: 2,
                            },
                            991: {
                                slidesPerView: 2,
                            },
                            1199: {
                                slidesPerView: 3,
                            }
                        },
                    });

                });
            }
        },
        //Category Slider
        category_slider: function() {
            if ($('.dm-category-wrapper').length > 0) {
                $('.dm-category-wrapper .swiper-container').each(function(index, element) {

                    var meta = $(this).attr('data-slidermeta');
                    var data = JSON.parse(meta);

                    var swiper = new Swiper($(this), {
                        slidesPerView: data.per_view,
                        spaceBetween: 30,
                        loop: data.loop == 'true' ? true : false,
                        autoplay: data.autoplay == 'true' ? {
                            delay: parseInt(data.delay)
                        } : false,
                        speed: 1000,
                        pagination: {
                            el: $(this).parent().find('.swiper-pagination'),
                            type: data.pagination,
                            clickable: true
                        },
                        navigation: {
                            nextEl: $(this).parent().find('.swiper-button-next'),
                            prevEl: $(this).parent().find('.swiper-button-prev')
                        },
                        breakpoints: {
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 15
                            },
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            991: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            1299: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            }
                        },
                    });

                });
            }
        },
        // Category Slider End
        //Service Slider
        service_slider: function() {
            if ($('.dm-service-wrapper').length > 0) {
                $('.dm-service-wrapper .swiper-container').each(function(index, element) {

                    var meta = $(this).attr('data-slidermeta');
                    var data = JSON.parse(meta);

                    var swiper = new Swiper($(this), {
                        slidesPerView: data.per_view,
                        spaceBetween: 30,
                        loop: data.loop == 'true' ? true : false,
                        autoplay: data.autoplay == 'true' ? {
                            delay: parseInt(data.delay)
                        } : false,
                        speed: 1000,
                        breakpoints: {
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 15
                            },
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            991: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            1299: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            }
                        },
                        pagination: {
                            el: $(this).find('.swiper-pagination'),
                            type: data.pagination,
                            clickable: true
                        },
                        navigation: {
                            nextEl: $(this).find('.swiper-button-next'),
                            prevEl: $(this).find('.swiper-button-prev')
                        },
                    });

                });
            }
        },
        // Service Slider End
        // General Scripts
        general_scripts: function() {
            if ($('.dm-wh-domain-tab').length > 0) {
                $('.dm-wh-domain-tab .tab-content .tab-pane:first-child').addClass('show active');
            }
        },

        // accordian start
        accordion: function() {
            if ($('.dm-accordian').length > 0) {
                $(".dm-accordian-title").on("click", function() {

                    $(this).parents('.dm-accordian').find('.dm-accordian-show').removeClass('dm-accordian-show').attr('aria-expanded', false);
                    $(this).parents('.dm-accordian').find('.dm-accordian-show').addClass('collapsed');
                    $(this).parents('.dm-accordian').find('.show').removeClass('show');

                    $(this).addClass("dm-accordian-show");
                });
            };
        },
        // accordian end

        // magnific start
        magnific: function() {
            if ($('.dm-portfolio').length > 0) {
                $('.dm-magnific-image').magnificPopup({
                    type: 'image',
                    gallery: {
                        enabled: true
                    }
                });
            };

            if ($('.dm-popup-youtube').length > 0) {
                $('.dm-popup-youtube').magnificPopup({
                    type: 'iframe',
                    iframe: {
                        markup: '<div class="mfp-iframe-scaler">' +
                            '<div class="mfp-close"></div>' +
                            '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
                            '</div>',

                        patterns: {
                            youtube: {
                                index: 'youtube.com/',
                                id: 'v=',
                                src: '//www.youtube.com/embed/%id%?autoplay=1&mute=1'
                            },
                            vimeo: {
                                index: 'vimeo.com/',
                                id: '/',
                                src: '//player.vimeo.com/video/%id%?autoplay=1'
                            },
                            gmaps: {
                                index: '//maps.google.',
                                src: '%id%&output=embed'
                            }
                        }
                    }
                });
            };
        },
        // magnific end
        //Gallery
        gallery: function() {
            $(window).load(function() {
                if ($('.dm-portfolio').length > 0) {
                    // portfolio
                    $('.dm-prtfolio-filter > ul > li').on('click', 'a', function() {
                        var filterValue = $(this).attr('data-filter');
                        $('.dm-prtfolio-wrap').isotope({
                            filter: filterValue
                        });
                        $('a').removeClass('dm-prtfolio-active');
                        $(this).addClass('dm-prtfolio-active');
                    });
                }
            });
        },
        //Gallery
        countdown: function() {
            $('.ce-countdown').each(function() {
                var date = $(this).attr('data-date').split("-");
                var style = $(this).attr('data-style');

                switch (style) {

                    case 'style1':
                    case 'style3':
                    case 'style4':
                    case 'style5':
                    case 'style7':
                        {
                            $(this).countEverest({
                                day: date[0],
                                month: date[1],
                                year: date[2],
                                pluralLabels: true
                            });
                            break;
                        }

                    case 'style2':
                        var $example = $(this),
                            $ceDays = $example.find('.ce-days'),
                            $ceHours = $example.find('.ce-hours'),
                            $ceMinutes = $example.find('.ce-minutes'),
                            $ceSeconds = $example.find('.ce-seconds'),
                            $daysFill = $('.ce-bar-days').find('.ce-fill'),
                            $hoursFill = $('.ce-bar-hours').find('.ce-fill'),
                            $minutesFill = $('.ce-bar-minutes').find('.ce-fill'),
                            $secondsFill = $('.ce-bar-seconds').find('.ce-fill'),
                            now = new Date(),
                            then = new Date(now.getTime() + (14 * 24 * 60 * 60 * 1000));

                        $example.countEverest({
                            day: date[0],
                            month: date[1],
                            year: date[2],
                            onChange: function() {
                                setBar($daysFill, this.days, 365);
                                setBar($hoursFill, this.hours, 24);
                                setBar($minutesFill, this.minutes, 60);
                                setBar($secondsFill, this.seconds, 60);
                            }
                        });

                        function setBar($el, value, max) {
                            var barWidth = 100 - (100 / max * value);
                            $el.width(barWidth + '%');
                        }
                        break;

                    case 'style6':
                        $(this).countEverest({
                            // Set your target date here!
                            day: date[0],
                            month: date[1],
                            year: date[2],
                            onChange: function() {
                                countEverestAnimate($('.ce-digits span'));
                            }
                        });

                        function countEverestAnimate($el) {
                            $el.each(function() {
                                var $this = $(this),
                                    fieldText = $this.text(),
                                    fieldData = $this.attr('data-value'),
                                    fieldOld = $this.attr('data-old');

                                if (typeof fieldOld === 'undefined') {
                                    $this.attr('data-old', fieldText);
                                }

                                if (fieldText != fieldData) {
                                    $this
                                        .attr('data-value', fieldText)
                                        .attr('data-old', fieldData)
                                        .addClass('ce-animate');

                                    window.setTimeout(function() {
                                        $this
                                            .removeClass('ce-animate')
                                            .attr('data-old', fieldText);
                                    }, 300);
                                }
                            });
                        }
                        break;

                    case 'style8':
                        var pclr = $(this).attr('data-ringclr');
                        var sclr = $(this).attr('data-trackclr');
                        $(this).countEverest({
                            day: date[0],
                            month: date[1],
                            year: date[2],
                            leftHandZeros: false,
                            onChange: function() {
                                drawCircle($('#ce-days').get(0), this.days, 365, pclr, sclr);
                                drawCircle($('#ce-hours').get(0), this.hours, 24, pclr, sclr);
                                drawCircle($('#ce-minutes').get(0), this.minutes, 60, pclr, sclr);
                                drawCircle($('#ce-seconds').get(0), this.seconds, 60, pclr, sclr);
                            }
                        });

                        function deg(v) {
                            return (Math.PI / 180) * v - (Math.PI / 2);
                        }

                        function drawCircle(canvas, value, max, p, s) {
                            var primaryColor = p,
                                secondaryColor = s,
                                circle = canvas.getContext('2d');

                            circle.clearRect(0, 0, canvas.width, canvas.height);
                            circle.lineWidth = 4;

                            circle.beginPath();
                            circle.arc(
                                canvas.width / 2,
                                canvas.height / 2,
                                canvas.width / 2 - circle.lineWidth,
                                deg(0),
                                deg(360 / max * (max - value)),
                                false);
                            circle.strokeStyle = secondaryColor;
                            circle.stroke();

                            circle.beginPath();
                            circle.arc(
                                canvas.width / 2,
                                canvas.height / 2,
                                canvas.width / 2 - circle.lineWidth,
                                deg(0),
                                deg(360 / max * (max - value)),
                                true);
                            circle.strokeStyle = primaryColor;
                            circle.stroke();
                        }
                        break;

                    case 'style9':
                        $(this).countEverest({
                            // Set your target date here!
                            day: date[0],
                            month: date[1],
                            year: date[2],
                        });
                        //Fallback for Internet Explorer
                        if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
                            $('html').addClass('ce-ie');
                        }
                        break;

                }

            });

        },

        //Pre Loader
        preloader: function() {
            jQuery("#dm-preloader").delay(350).fadeOut("slow");
        }
    };
    dream.init();
})(jQuery);


//Form Alerts Function(Function with global scop)
function dream_form_alert(msg, msg_type) {
    if (msg_type == 'error') {
        jQuery(".dm-dream-alert").css('background', '#e9382b');
    } else {
        jQuery(".dm-dream-alert").css('background', '#056105');
    }
    jQuery(".dm-dream-alert").html(msg);
    jQuery(".dm-dream-alert").css('display', 'block');
    setTimeout(function() {
        jQuery(".dm-dream-alert").css('display', 'none');
    }, 5000);
}

/* jQuery Validate Emails with Regex (Function with global scop)*/
function dreamvalidateEmail(Email) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return jQuery.trim(Email).match(pattern) ? true : false;
}