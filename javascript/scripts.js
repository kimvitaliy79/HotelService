$(function () {
    $(".select-controller").coreUISelect();

    $('.popup-controller').fancybox({
        padding: 0,
        scrolling: 'visible',
        fitToView: false,
        beforeShow: loadScripts,
        afterShow: loadLimitScript,
        type: 'ajax',
        //modal: true,
        helpers: {
            overlay: {
                locked: false
            }
        }

    });

    $('.service-popup-controller').fancybox({
        padding: 0,
        scrolling: 'visible',
        fitToView: false,
        beforeShow: loadScripts,
        afterShow: loadLimitScript,
        wrapCSS: 'service-popup',
        closeBtn: false,
        type: 'ajax',
        //modal: true,
        helpers: {
            overlay: {
                locked: false
            }
        }

    });

    (function ($) {
        $.fn.extend({
            limiter: function (limit, elem) {
                $(this).on("keyup focus", function () {
                    setCount(this, elem);
                });
                function setCount(src, elem) {
                    if (src) {
                        var chars = src.value.length;
                        if (chars > limit) {
                            src.value = src.value.substr(0, limit);
                            chars = limit;
                        }
                        elem.html(limit - chars);
                    }
                }
                setCount($(this)[0], elem);
            }
        });
    })(jQuery);

    var elem = $(".symbols-limit");
    $(".__limit").limiter(180, elem);

    function loadScripts() {
        $(".select-controller").coreUISelect();

        $('.button-inline.__cost-class').find('.button').on('click', function () {
            $this = $(this);
            $this.siblings().removeClass('__selected').end().andSelf().toggleClass('__selected');
        });

        $('.time-picker').timepicker({
            'step': 15,
            'timeFormat': 'g:i a'
        });

        $('.date-picker').datepicker({
            'format': 'D M d',
            'autoclose': true
        });

    }

    function loadLimitScript() {
        (function ($) {
            $.fn.extend({
                limiter: function (limit, elem) {
                    $(this).on("keyup focus", function () {
                        setCount(this, elem);
                    });
                    function setCount(src, elem) {
                        if (src) {
                            var chars = src.value.length;
                            if (chars > limit) {
                                src.value = src.value.substr(0, limit);
                                chars = limit;
                            }
                            elem.html(limit - chars);
                        }
                    }
                    setCount($(this)[0], elem);
                }
            });
        })(jQuery);

        var elem = $(".symbols-limit");
        $(".__limit").limiter(180, elem);

    }

});




//var welcomeApp = angular.module('welcomeApp');
//welcomeApp.value('loc','$location');
//welcomeApp.controller('RedirectCtrl', function ($scope, $location)
//{
//     $scope.InsideAYS = function () {           
//            var lang = $scope.selectLang;
//            $location.path("/InsideAYS/main.html");            
//        }
//})


//welcomeApp.controller('RedirectCtrl', ['$scope', '$location',
//    function ($scope, $location) {

//        $scope.InsideAYS = function () {           
//            var lang = $scope.selectLang;
//            $location.path("/InsideAYS/main.html");            
//        }

//    }
//]);
//    .config(function ($routeProvider)
//{
//        $routeProvider.when('/inside',{controller:RedirectCtrl, templateUrl:'/InsideAYS/main.html'} )
//})


//angular.module('welcomeApp', [])
//.directive('langWelcome',  function()
//{
//    var directiveObject = {
//       // replace :true,
//       // template:'<ul>'+
//       //'<li ng-repeat="language in languages">' +
//       //+ '<div> test<div>' +
//       // '</li>'+     
//       //'</ul>'
//    //   , compile: function compile(tElement, tAttrs)
//    //    {
//    //        return null;
//        //}
//        link: function postLink(scope, iElement, iAttrs) {

//            var selectBtn= angular.element(iElement).children().getElementsByClassName('b-core-ui-select');
//           // var selectBtn = iElement.childNodes.getElementsByClassName('b-core-ui-select').childNodes.getElementsByClassName('b-core-ui-select__button');
//            selectBtn.bind('click', showList);
//            function showList()
//            {
//                selectBtn.setAttribute('class', 'b - core - ui - select__dropdown.show');
//            }
//        }
//    };
//    return directiveObject;
//})



