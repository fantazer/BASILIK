$(document).ready(function(){$(".select-beauty").niceSelect();var s={isModalShow:!1,scrollPos:0},t=window.innerWidth-$(document).width(),i=function(){$(".modal-layer").hasClass("modal-layer-show")||($(".modal-layer").addClass("modal-layer-show"),s.scrollPos=$(window).scrollTop(),$("body").css({overflowY:"hidden",top:-s.scrollPos,width:"100%",paddingRight:t})),s.isModalShow=!0},a=function(){$(".modal-layer").removeClass("modal-layer-show"),$("body").css({overflow:"",position:"",top:s.scrollPos,paddingRight:0}),$(window).scrollTop(s.scrollPos),$(".modal").addClass("modal-hide-animation"),setTimeout(function(){$(".modal").removeClass("modal-hide-animation"),$(".modal").removeClass("modal__show")},600),s.isModalShow=!1},e=function(s){i(),$(".modal").each(function(){$(this).data("modal")===s?$(this).addClass("modal__show"):$(this).removeClass("modal__show")});var t=$(window).height();$(".modal-filter").height(t)};$(".modal-get").click(function(){var s=$(this).data("modal");e(s)}),$(".modal-close, .modal-hide").click(function(){a()});var o=250,l=$(".header-wrap"),c=l.height();$(window).scroll(function(){var s=$(this).scrollTop();s>=o?($("body").css("paddingTop",c),l.addClass("shrink")):($("body").css("paddingTop",0),l.removeClass("shrink"))}),$(".js-toggle").click(function(){$(this).toggleClass("active")}),$(".js-commutator-el").click(function(){var s,t=$(this).data("item"),i=$(this).data("group")||!1,a=$(this).data("each")||!1;$(this).toggleClass("active"),s=$(".js-commutator-cont").data("group")?$(".js-commutator-cont[data-group="+i):$(".js-commutator-cont"),s.each(function(){$(this).data("item")===t?$(this).toggleClass("active"):!!a&&$(this).removeClass("active")})}),$(".js-slide").click(function(){var s=$(this).data("item"),t=$(this).data("each")||!1,i=$(this).closest(".js-slide-parrent");$(this).toggleClass("active");var a;a=$(".js-slide[data-item="+s+"]"),t&&(a.not(this).removeClass("active"),a.not(this).closest(".js-slide-parrent").find(".js-slide-cont").removeClass("active")),i.find(".js-slide-cont[data-item="+s+"]").toggleClass("active")}),$(".js-switch").click(function(){var s=$(this).data("item"),t=$(this).data("group"),i=0;$(".js-switch").each(function(){return $(this).data("item")===s&&($(this).removeClass("active"),i=$(this).size()),i}),$(".js-switch-cont").each(function(){$(this).data("group")===t&&($(this).data("item")===s?1===i?$(this).toggleClass("hidden"):$(this).removeClass("hidden"):$(this).addClass("hidden"))}),$(this).addClass("active")});var n={};$(".incr__nav").click(function(){n.parent=$(this).closest(".incr"),n.value=parseInt($(this).closest(".incr").find(".incr__val span").html()),n.state=$(this).closest(".incr").find(".incr__val span")}),$(".incr__minus").click(function(){--n.value,n.parent.hasClass("incr--one")&&(n.value=n.value<1?1:n.value),n.value=n.value<1?0:n.value,n.state.html(n.value)}),$(".incr__plus").click(function(){++n.value,n.value=n.value>100?100:n.value,n.state.html(n.value)}),$(".incr-btn__el").click(function(){$(this).closest(".incr-btn").addClass("incr-btn--active")}),$(".incr-btn .incr__minus").click(function(){1===n.value?$(this).closest(".incr-btn").removeClass("incr-btn--active"):""}),$(".incr--single .incr__nav").click(function(){var s=$(this).closest(".incr--single");n.value?s.addClass("incr--single-active"):s.removeClass("incr--single-active")}),$(".dropdown").click(function(){$(this).attr("tabindex",1).focus(),$(this).toggleClass("active"),$(this).find(".dropdown-menu").slideToggle(300)}),$(".dropdown").focusout(function(){$(this).removeClass("active"),$(this).find(".dropdown-menu").slideUp(300)}),$(".dropdown .dropdown-menu__el").click(function(){var s=$(this).parents(".dropdown");s.find(".dropdown-current__val").html($(this).html()),s.find("input").attr("value",$(this).data("value"))}),$(".js-noty__close").click(function(){$(".noty-wrap").slideUp()});var d=function(s,t){$(s).click(function(){$(t).slideToggle()}),$(document).mouseup(function(i){$(s).is(i.target)||$(t).is(i.target)||0!==$(t).has(i.target).length||$(t).slideUp()})};d(".header-nav__more span",".header-nav-sub"),d(".search .icon",".search-wrap"),$(".main-slider").slick({slidesToShow:1,speed:500,dots:!0,arrows:!1,customPaging:function(s,t){return'<span class="dot"></span>'}}),$(".slider-control--right").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickNext")}),$(".slider-control--left").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickPrev")}),$(".js-slide-block-toggle").click(function(s){$(".js-slide-block-toggle").not(this).removeClass("slide-block-toggle--open");var t=$(this).data("menu");$(".slide-block").each(function(){$(this).data("menu")===t?$(this).toggleClass("slide-block--open"):$(this).removeClass("slide-block--open")}),$(this).toggleClass("slide-block-toggle--open"),s.stopPropagation()}),$(".slide-block").on("click",function(s){s.stopPropagation()}),$(document).on("click",function(){$(".slide-block").removeClass("slide-block--open"),$(".js-slide-block-toggle").removeClass("slide-block-toggle--open")}),$(".size__el").click(function(){$(this).closest(".size").find(".size__el").removeClass("size__el--active"),$(this).addClass("size__el--active")}),$(".sort-tag").click(function(){var s=$(this).closest(".sort-tag-wrap").find(".sort-tag--false").length;s?$(this).toggleClass("sort-tag--false"):$(".sort-tag").not(this).addClass("sort-tag--false")});var r=navigator.platform.toUpperCase().indexOf("MAC")>=0;!r&&$(document).width()>640&&$(".scroll").niceScroll({autohidemode:!1,cursorcolor:"#dcdcdc",scrollspeed:160,mousescrollstep:10}),$(".star--edit .star-el").hover(function(){$(this).parent().hasClass("star--fix")||($(".star .star-el").removeClass("star-el--active"),$(this).addClass("star-el--active"),$(this).prevAll(".star-el").addClass("star-el--active"))}),$(".star--edit .star-el").click(function(){$(this).parent().toggleClass("star--fix"),$(this).addClass("star-el--active"),$(this).prevAll(".star-el").addClass("star-el--active")}),$(".range").ionRangeSlider({}),$(".history-card__wrap").click(function(){var s=$(this).closest(".history-card");s.addClass("history-card--active"),s.find(".history-card__wrap").slideUp(600),s.find(".history-info").slideToggle(600)}),$(window).width()>1025&&$(".stick").stick_in_parent({offset_top:120})});