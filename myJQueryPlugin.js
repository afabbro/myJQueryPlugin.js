(function($) {

	var methods = {

		/* { picnicc: someFunction } */
		someFunction: function() {
			console.log("someFunction");
		},
		/* { / picnicc } */

		/* { picnicc: someOtherFunction } */
		someOtherFunction: function() {
			console.log("someOtherFunction");
		}
		/* { / picnicc } */
	};

	$.fn.myJqueryPlugin = function(method) {
		// Method calling logic
		if (method && methods[method]) {
			return methods[method].apply(this, [].slice.call(arguments, 1));
		} 
		$.error('Method ' + method + ' does not exist on jQuery.myJQueryPlugin');
		return this;
	};

})(jQuery);