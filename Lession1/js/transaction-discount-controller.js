.controller( "DiscountController" , [
	"$scope",

	function controller( $scope ) {
		$scope.displayItemDiscount = function displayItemDiscount( discount ) {
			$scope.product.listDiscount.forEach( function onEachItemDiscount( _discount ) {
				if( _discount.title != discount.title ) {
					_discount._viewMode = false;
				}
			} );

			discount._viewMode =! discount._viewMode;
		};
	}
] )
