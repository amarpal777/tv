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

            this.select();
            this.product();
            this.wishlist_count_update();
            this.product_filter();
            this.ajax_search();
            this.ajax_pagination();
            this.quantity_update();
        },
        // select start
        select: function() {
            $('select').niceSelect();
        },
        // select end
        // product start
        product: function() {
            $(window).load(function() {
                if ($('.mt_products_slider').length > 0 || $('.dm-dp-product').length > 0) {
                    $('.dm-dp-product .swiper-container, .mt_products_slider .swiper-container').each(function(index, element) {
                        var meta = $(this).attr('data-slidermeta');
                        var data = JSON.parse(meta);

                        var swiper = new Swiper($(this), {
                            slidesPerView: data.per_view,
                            spaceBetween: 30,
                            loop: data.loop == 'true' ? true : false,
                            autoplay: data.autoplay == 'true' ? true : false,
                            speed: parseInt(data.speed),
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
                                },
                                1199: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                                1299: {
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
            });
        },
        // product end
        wishlist_count_update: function() {
            $(document).on('added_to_wishlist removed_from_wishlist', function() {
                var counter = $('.dm-eco-wishlist');

                $.ajax({
                    url: yith_wcwl_l10n.ajax_url,
                    data: {
                        action: 'yith_wcwl_update_wishlist_count'
                    },
                    dataType: 'json',
                    success: function(data) {
                        counter.html(data.count);
                    },
                    beforeSend: function() {
                        counter.block();
                    },
                    complete: function() {
                        counter.unblock();
                    }
                })
            })
        },

        //Proudct Filter
        product_filter: function() {
            $('.dm-pro-filter').click(function() {
                $('.dm-food-pro-filter li.dm-filter-active').removeClass('dm-filter-active');
                $(this).addClass('dm-filter-active');
                var s = $('.dm-food-pro-filter form input').val();
                $('.dm-products-filter-wrapper ul').html('');
                $('.dm-products-filter-wrapper .dm-search-loader').show();
                $.ajax({
                    'url': ajax_object.ajaxurl,
                    'data': {
                        action: 'dream_filter_products',
                        filter_by: $(this).attr('data-slug'),
                        keyword: s,
                        cats: $(this).parent().attr('data-cat'),
                        per_page: $(this).parent().attr('data-perpage'),
                        order: $(this).parent().attr('data-order'),
                        order_by: $(this).parent().attr('data-orderby')
                    },
                    'type': 'post',
                    'success': function(res) {
                        var data = jQuery.parseJSON(res);
                        $('.dm-products-filter-wrapper ul').html(data.lis);
                        $('.dm-pro-filter-pagination').html(data.pagination);
                        $('.dm-products-filter-wrapper .dm-search-loader').hide();
                    }
                });
            });

            //Proudct Category Filter
            $('.dm-pro-li-filter').click(function() {
                //$('.dm-food-pro-filter li.dm-filter-active').removeClass('dm-filter-active');
                //$(this).addClass('dm-filter-active');
                var targ = $(this);
                targ.parent().next().html('');

                $('.dm-pro-filter-tab li a').removeClass('dm-pro-active');
                $(this).find('a').addClass('dm-pro-active');

                $('.dm-pro-cat-filter .dm-search-loader').show();
                $.ajax({
                    'url': ajax_object.ajaxurl,
                    'data': {
                        action: 'dream_cat_filter_products',
                        cat: $(this).attr('data-slug'),
                        per_page: $(this).parent().attr('data-perpage'),
                        order: $(this).parent().attr('data-order'),
                        order_by: $(this).parent().attr('data-orderby')
                    },
                    'type': 'post',
                    'success': function(res) {
                        var data = jQuery.parseJSON(res);
                        if (data.length != 0) {
                            targ.parent().next().html(data.lis);
                        } else {
                            $('.dm-products-filter-wrapper ul').html('<li>No data available.</li>');
                        }
                        $('.dm-pro-cat-filter .dm-search-loader').hide();
                    }
                });
            });

            // portfolio
            $('.dm-product-filter > ul > li').on('click', 'a', function() {
                var filterValue = $(this).attr('data-filter');
                $('.dm-products-filter-wrapper').isotope({
                    filter: filterValue
                });
                $('a').removeClass('dm-product-active');
                $(this).addClass('dm-product-active');
            });
        },

        //Ajax Search For Products
        ajax_search: function() {
            $('.dm-food-pro-filter form input').keyup(function() {
                var input = this.value;
                var filter_active = $('.dm-filter-active').length != 0 ? $('.dm-filter-active').attr('data-slug') : '';
                $('.dm-search-form .dm-search-loader').show();
                $.ajax({
                    'url': ajax_object.ajaxurl,
                    'data': {
                        action: 'dream_products_ajax_search',
                        keyword: input,
                        filter_active: filter_active,
                        cats: $(this).parents('ul').attr('data-cat'),
                        per_page: $(this).parents('ul').attr('data-perpage'),
                        order: $(this).parents('ul').attr('data-order'),
                        order_by: $(this).parents('ul').attr('data-orderby')
                    },
                    'type': 'post',
                    'success': function(res) {
                        //console.log(res);						
                        var data = jQuery.parseJSON(res);
                        $('.dm-products-filter-wrapper ul').html(data.lis);
                        $('.dm-pro-filter-pagination').html(data.pagination);
                        $('.dm-search-form .dm-search-loader').hide();
                    }
                });

            });
        },

        //Ajax Pagination For Products Filter Shortcode
        ajax_pagination: function() {
            $(document).on('click', '.dm-pro-filter-pagination .page-numbers', function(e) {
                e.preventDefault();

                var filter_active = $('.dm-filter-active').length != 0 ? $('.dm-filter-active').attr('data-slug') : '';

                var obj = $('.dm-food-pro-filter ul');

                $('.page-numbers.current').removeClass('current');
                $(this).addClass('current');

                $('.dm-products-filter-wrapper ul').html('');
                $('.dm-products-filter-wrapper .dm-search-loader').show();
                $.ajax({
                    'url': ajax_object.ajaxurl,
                    'data': {
                        action: 'dream_products_ajax_pagination',
                        filter_active: filter_active,
                        keyword: obj.find('form input').val(),
                        page: $(this).text(),
                        cats: obj.attr('data-cat'),
                        per_page: obj.attr('data-perpage'),
                        order: obj.attr('data-order'),
                        order_by: obj.attr('data-orderby')
                    },
                    'type': 'post',
                    'success': function(res) {
                        //console.log(res);
                        $('.dm-products-filter-wrapper ul').html(res);
                        $('.dm-products-filter-wrapper .dm-search-loader').hide();
                    }
                });

            });
        },

        //Add to cart quantity update.
        quantity_update: function() {
            $(document).on('click', '.dm-qnt-add', function() {
                var max = $(this).prev().attr('max');

                var val = $(this).prev().val();

                if (max.length == 0 || val <= max) {
                    $(this).prev().val(parseInt(val) + 1);
                }

            });
            $(document).on('click', '.dm-qnt-sub', function() {
                var min = $(this).next().attr('min');
                var val = $(this).next().val();

                if (val > min) {
                    $(this).next().val(parseInt(val) - 1);
                }
            });

            $(document).on('click', '.dm-quantity button', function() {
                $('button[name=update_cart]').removeAttr('disabled');
            });
        },

    };
    dream.init();
})(jQuery);