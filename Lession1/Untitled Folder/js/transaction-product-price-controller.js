angular
	.module( "myapp" )
	.controller( "PriceController" , [
		"$scope",

		function controller( $scope ) {
			$scope.displayItemPrice = function displayItemPrice( price ) {
				$scope.product.listPrice.forEach( function onEachItemproduct( _price ) {
					if( _price.title != price.title ) {
						_price._viewMode = false;
					}
				} );

				price._viewMode =! price._viewMode;
			};
		}
	] );
