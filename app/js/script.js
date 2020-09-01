$(document).ready(function () {

	// nice select
	$('.select-beauty').niceSelect();
	// nice select === end

	//modals
	var modalState = {
		"isModalShow": false, //state show modal
		"scrollPos": 0
	};
	var scrollWidth= window.innerWidth - $(document).width();
	var openModal = function () {
		if (!$('.modal-layer').hasClass('modal-layer-show')) {
			$('.modal-layer').addClass('modal-layer-show');
			modalState.scrollPos = $(window).scrollTop();
			$('body').css({
				overflowY: 'hidden',
				top: -modalState.scrollPos,
				width: '100%',
				paddingRight:scrollWidth
			});

		}
		modalState.isModalShow = true;
	};

	var closeModal = function () {
		$('.modal-layer').removeClass('modal-layer-show');
		$('body').css({
			overflow: '',
			position: '',
			top: modalState.scrollPos,
			paddingRight:0
		});
		$(window).scrollTop(modalState.scrollPos);
		$('.modal').addClass('modal-hide-animation');
		setTimeout(function(){
			$('.modal').removeClass('modal-hide-animation');
			$('.modal').removeClass('modal__show');
		},600);
		modalState.isModalShow = false;
	};

	var initModal = function (el) {
		openModal();

		$('.modal').each(function () {
			if ($(this).data('modal') === el) {
				$(this).addClass('modal__show')
			} else {
				$(this).removeClass('modal__show')
			}
		});
		var modalHeightCont = $(window).height();
		$('.modal-filter').height(modalHeightCont);

	};

	$('.modal-get').click(function () {
		var currentModal = $(this).data("modal");
		initModal(currentModal);
	});

	$('.modal-close, .modal-hide').click(function () {
		closeModal();
	});
	//modals===end

	// fix top-menu
	var shrinkHeader = 250;
	var head = $('.header-wrap');
	var heightHeader = head.height();
	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if ( scroll >= shrinkHeader ) {
				$('body').css('paddingTop',heightHeader);
				head.addClass('shrink');
			}
			else {
					$('body').css('paddingTop',0);
					head.removeClass('shrink');
			}
	});
	// fix top-menu === end


	// toggle single
	$('.js-toggle').click(function(){
		$(this).toggleClass("active")
	})
	// toggle single === end

	//toggle class + neighbor
	$('.js-commutator-el').click(function(){
		var thisItem = $(this).data("item");
		var thisGroup = $(this).data("group") || false;
		var isEach = $(this).data("each") || false;
		var selector;
		$(this).toggleClass("active")
		if($('.js-commutator-cont').data('group')) {
			selector = $(".js-commutator-cont[data-group=" + thisGroup + "");
		}else{
			selector = $(".js-commutator-cont");
		}
		selector.each(function(){
			if($(this).data("item")=== thisItem){
				$(this).toggleClass('active');
			}else{
				isEach ? $(this).removeClass("active") : false
			}
		})
	})
	//toggle class + neighbor === end

	//toggle class + parent
	$('.js-slide').click(function(){
		var thisItem = $(this).data("item");
		var isEach = $(this).data("each") || false;
		var parrent = $(this).closest(".js-slide-parrent");
		$(this).toggleClass("active")
		var selector;
		selector = $(".js-slide[data-item=" + thisItem + "]")
		if(isEach){
			selector.not(this).removeClass('active')
			selector.not(this).closest(".js-slide-parrent").find(".js-slide-cont").removeClass('active')
		}
		parrent.find(".js-slide-cont[data-item=" + thisItem + "]").toggleClass('active')
	})
	//toggle class + parent === end

	// switch
	$('.js-switch').click(function () {
		var typeItem = $(this).data("item");
		var groupItem = $(this).data("group");
		var size = 0;
		$('.js-switch').each(function () {
			if ($(this).data("item") === typeItem) {
				$(this).removeClass("active");
				 size = $(this).size();
			}
			return size;
		});
		$('.js-switch-cont').each(function () {
			if ($(this).data("group") === groupItem) {
				if ($(this).data("item") === typeItem) {
					if(size===1){
						$(this).toggleClass("hidden")
					}else{
						$(this).removeClass("hidden")
					}
				} else {
					$(this).addClass("hidden");
				}
			}
		});
		$(this).addClass("active");
	});
	// switch === end

	// incr
	var incrEl= {}
	$('.incr__nav').click(function(){
		incrEl.parent = $(this).closest(".incr");
		incrEl.value = parseInt($(this).closest(".incr").find('.incr__val span').html());
		incrEl.state = $(this).closest(".incr").find('.incr__val span')
	});

	$('.incr__minus').click(function () {
		--incrEl.value;
		if(incrEl.parent.hasClass("incr--one")){
				incrEl.value = incrEl.value < 1 ? 1 : incrEl.value
		}
		incrEl.value = incrEl.value < 1 ? 0 : incrEl.value
		incrEl.state.html(incrEl.value);
	});

	$('.incr__plus').click(function () {
		++incrEl.value;
		incrEl.value = incrEl.value > 100 ? 100 : incrEl.value;
		incrEl.state.html(incrEl.value);
	});

	// Переключение с кнопки на инкремент
	// increment btn
	$('.incr-btn__el').click(function(){
		$(this).closest(".incr-btn").addClass('incr-btn--active');
	});
	$('.incr-btn .incr__minus').click(function () {
		incrEl.value === 1 ? $(this).closest(".incr-btn").removeClass("incr-btn--active") : ''
	})
	// increment btn === end

	$('.incr--single .incr__nav').click(function(){
		var parrent = $(this).closest(".incr--single")
		if(incrEl.value){
			parrent.addClass('incr--single-active');
		}else{
			parrent.removeClass('incr--single-active');
		}
	});
	/*$('.incr-btn .incr__minus').click(function () {
		incrEl.value === 1 ? $(this).closest(".incr-btn").removeClass("incr-btn--active") : ''
	})*/
	// increment btn === end

	// incr === end

	// dropdown
	$('.dropdown').click(function () {
		$(this).attr('tabindex', 1).focus();
		$(this).toggleClass('active');
		$(this).find('.dropdown-menu').slideToggle(300);
	});
	$('.dropdown').focusout(function () {
		$(this).removeClass('active');
		$(this).find('.dropdown-menu').slideUp(300);
	});
	$('.dropdown .dropdown-menu__el').click(function () {
		var parent = $(this).parents('.dropdown')
		parent.find('.dropdown-current__val').html($(this).html());
		parent.find('input').attr('value', $(this).data('value'));
	});
	// dropdown === end

	// app noty
	$('.js-noty__close').click(function(){
		$('.noty-wrap').slideUp()
	});
	// app noty === end

	// more header menu

	var slideDown = function(target,container){
		$(target).click(function(){
			$(container).slideToggle()
		});
		$(document).mouseup(function (e) {
			if (!$(target).is(e.target) && !$(container).is(e.target) && $(container).has(e.target).length === 0) {
					 $(container).slideUp();
			 }
		});
	}
	slideDown('.header-nav__more span',".header-nav-sub")
	//slideDown('.search .icon',".search-wrap")
	// more header menu === end

	// slider
		$('.main-slider').slick({
			slidesToShow: 1,
			speed: 500,
			dots: true,
			arrows: false,
			customPaging : function(slider, i) {
				return '<span class="dot"></span>';
			},
		});

		$('.staff-slider').slick({
			slidesToShow: 4,
			speed: 500,
			dots: false,
			arrows: false,
		});
		$('.inst-slider').slick({
			slidesToShow: 3,
			speed: 500,
			dots: false,
			arrows: false,
		});

		// gallery
		$('.gallery-slider').slick({
				slidesToShow: 1,
				speed: 500,
				dots:false,
				arrows:false,
				asNavFor: '.gallery-slider-nav',

			});
		$('.gallery-slider-nav').slick({
			slidesToShow: 5,
			speed: 500,
			dots:false,
			arrows:false,
			asNavFor: '.gallery-slider',
			focusOnSelect: true,
			responsive: [

				{
					breakpoint: 480,
					settings: {
						slidesToShow: 4
					}
				}
			],
		});
		// gallery === end


		// === custom arrow el ===
		$('.slider-control--right').click(function () {
			$(this).closest(".slider-wrap").find(".slider-item").slick('slickNext');
		});

		$('.slider-control--left').click(function () {
			$(this).closest(".slider-wrap").find(".slider-item").slick('slickPrev');
		});
		// custom arrow el === end
	// slider === end

	// slide menu
	$('.js-slide-block-toggle').click(function (event) {
		$(".js-slide-block-toggle").not(this).removeClass('slide-block-toggle--open');
		var current = $(this).data("menu");
		$(".slide-block").each(function () {
			if ($(this).data("menu") === current) {
				$(this).toggleClass("slide-block--open")
			} else {
				$(this).removeClass("slide-block--open")
			}
		})
		$(this).toggleClass('slide-block-toggle--open');
		event.stopPropagation();
	});

	$('.slide-block').on("click", function (event) {
		event.stopPropagation();
	});

	$(document).on("click", function () {
		$('.slide-block').removeClass('slide-block--open');
		$(".js-slide-block-toggle").removeClass('slide-block-toggle--open');
	});
	// slide menu === end

	// toggle size items
	$('.size__el').click(function () {
		$(this).closest('.size').find('.size__el').removeClass('size__el--active');
		$(this).addClass('size__el--active');
	});
	// toggle size items === end

	// toggle sort tag
	$('.sort-tag').click(function(){
		var isTag = $(this).closest('.sort-tag-wrap').find('.sort-tag--false').length
		if(!isTag){
			$('.sort-tag').not(this).addClass('sort-tag--false')
		}else{
			$(this).toggleClass('sort-tag--false')
		}
	});
	// toggle sort tag === end

	// template scroll
	var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
	if(!isMac && $(document).width() > 640) {
		$(".scroll").niceScroll({
			autohidemode: false,
			cursorcolor: "#dcdcdc",
			scrollspeed: 160, // scrolling speed
			mousescrollstep: 10,
		});
	}
	// template scroll === end

	// rating
	$('.star--edit .star-el').hover(function () {
		if (!$(this).parent().hasClass('star--fix')) {
			$('.star .star-el').removeClass('star-el--active');
			$(this).addClass('star-el--active');
			$(this).prevAll('.star-el').addClass('star-el--active')
		}
	});
	$('.star--edit .star-el').click(function () {
		$(this).parent().toggleClass('star--fix');
		$(this).addClass('star-el--active');
		$(this).prevAll('.star-el').addClass('star-el--active')
	});
	// rating === end

	//range slider
  $(".range").ionRangeSlider({
 		//prefix: "Списать ",
 		//postfix: " баллов"
 	})
	//range slider === end

		//history accord
	$('.history-card__wrap').click(function () {
		var current = $(this).closest('.history-card');
		current.addClass("history-card--active");
		current.find('.history-card__wrap').slideUp(600);
		//current.find('.history-card__wrap').addClass('history-card__wrap--active');
		current.find('.history-info').slideToggle(600);
	});
	//history accord===end

	//stick scroll
	if($(window).width() > 1025 ){
		$(".stick").stick_in_parent({
			'offset_top':120
		});
	}
	//stick scroll

	//upload-btn
	$(".upload-btn").change(function () { //Если выбрал файл
		console.log('img');
		if (this.files && this.files[0]) {
			$('.upload-img').append('<div class="upload-img__el" onclick="this.parentNode.removeChild(this);"></div>');
			var currentUpload = $('.upload-img .upload-img__el:last'); //выбираем куда
			var reader = new FileReader();
			reader.onload = function(){
				currentUpload.attr('style', " background-image:url( "+reader.result+ ") ");
			}
			reader.readAsDataURL(this.files[0]);
		}
	});
	$('.upload-img__el').click(function(){
		console.log('remove');
		$(this).remove();
	});
	//upload-btn

	$(window).scroll(function() {
		 if($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
				 $('.noty-wrap').addClass("noty-wrap--hidden");
		 }else{
				 $('.noty-wrap').removeClass("noty-wrap--hidden");
		 }
	});


	//window.condition = {};
	//window.condition.info = info;
});
