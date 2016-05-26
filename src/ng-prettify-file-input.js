(function () {
    'use strict';

    angular
        .module('ngPrettifyFileInputProjectApp', [])
        .directive('ngPrettifyFileInput', ngPrettifyFileInput);

    ngPrettifyFileInput.$inject = [];

    /* @ngInject */
    function ngPrettifyFileInput() {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var $label = element.find('label'),
                $input = element.find('input'),
                labelText = element.find('label').html(); // Store original label text

            element.addClass('ng-pfi'); // Add class for styling

            $input.on('change', function(e) {
                var fileName = '';

                if(this.files && this.files.length > 1) {
                    fileName = this.files.length + ' files selected';
                } else {
                    fileName = e.target.value.split( '\\' ).pop();
                }

                if( fileName ) {
                    $label.html(fileName);
                } else {
                    $label.html(labelText);
                }
            });

            $input.on('focus', function() { $input.addClass( 'has-focus' ); });
            $input.on('blur', function() { $input.removeClass( 'has-focus' ); });
        }
    }

})();

