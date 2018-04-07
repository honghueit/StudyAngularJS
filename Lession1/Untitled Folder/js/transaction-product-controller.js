angular
	.module( "myapp" )
	.controller( "ProductController" , [
		"$scope",

		function controller( $scope ) {
			$scope.displayListProduct = function displayListProduct( product ) {
				$scope.transaction.listProduct.forEach( function onEachItemproduct( _product ) {
					if( _product.reference != product.reference ) {
						_product._viewMode = false;
					}
				} );

				product._viewMode =! product._viewMode;
			};
		}
	] )
