// 确认jquery 已经加载完成
if (typeof jQuery === "undefined") {
    throw new Error("BootCSS requires jQuery");
}

// 全局app对象
$.BootCSS = {}

// 全局属性配置
$.BootCSS.options = {
    // 动画执行时间
    animationSpeed: 500,
    // 左边栏切换选择器
    sidebarToggleSelector: "[data-toggle='offcanvas']",
    //菜单选择器
    treeSelector: ".sidebar",
    // 屏幕尺寸
    screenSize: {
        xs: 480,
        sm: 768,
        md: 992,
        lg: 1200
    }
}

$(function() {
    "use strict";

    var o = $.BootCSS.options;

    // 初始化方法
    _init();
    $.BootCSS.layout.activate();
    //调用左边栏切换
    $.BootCSS.pushMenu.activate(o.sidebarToggleSelector);
    //调用树形菜单
    $.BootCSS.tree(o.treeSelector);
})

// 初始化
function _init() {
    "use strict";

    // 布局方法
    $.BootCSS.layout = {
        activate: function() {
            var _this = this;
            _this.fix();

            $(window, ".wrapper").resize(function() {
                _this.fix();
            })
        },
        fix: function() {
            // 获取 window 和 .wrapper 的高度
            var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
            var window_height = $(window).height();
            var sidebar_height = $('.sidebar').height();

            if (window_height >= sidebar_height) {
                $('.content-wrapper').css('min-height', window_height - neg);
            } else {
                $('.content-wrapper').css('min-height', sidebar_height);
            }
        }
    };

    //左边栏切换
    $.BootCSS.pushMenu = {
        activate: function(toggleBtn) {
            var screenSizes = $.BootCSS.options.screenSize;

            $(document).on('click', toggleBtn, function(e) {
                e.preventDefault();

                if ($(window).width() > (screenSizes.sm)) {
                    if ($('body').hasClass("sidebar-collapse")) {
                        $('body').removeClass('sidebar-collapse');
                    } else {
                        $('body').addClass('sidebar-collapse');
                    }
                } else {
                    if ($('body').hasClass('sidebar-open')) {
                        $('body').removeClass('sidebar-open');
                    } else {
                        $('body').addClass('sidebar-open');
                    }
                }
            });

            $('.content-wrapper').click(function() {
                if ($(window).width() <= (screenSizes.sm - 1) && $('body').hasClass('sidebar-open')) {
                    $('body').removeClass('sidebar-open');
                }
            })
        }
    }

    //菜单
    $.BootCSS.tree = function(menu) {
        var animationSpeed = $.BootCSS.options.animationSpeed;
        var _this = this;
        $(document).off('click', menu + ' li a')
            .on('click', menu + ' li a', function(e) {
                var $this = $(this);
                var checkElement = $this.next();

                if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible')) && (!$('body').hasClass('sidebar-collapse'))) {
                    checkElement.slideUp(animationSpeed, function() {
                        checkElement.removeClass('.menu-open');
                    });
                    checkElement.parent('li').removeClass('active');
                } else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {

                    var parent = $this.parents('ul').first();

                    var ul = parent.find('ul:visible').slideUp(animationSpeed);

                    ul.removeClass('menu-open');

                    var parent_li = $this.parent('li');

                    checkElement.slideDown(animationSpeed, function() {
                        checkElement.addClass('menu-open');
                        parent.find('li.active').removeClass('.active');
                        parent_li.addClass('active');

                        _this.layout.fix();
                    })
                }
            })
    }
}
