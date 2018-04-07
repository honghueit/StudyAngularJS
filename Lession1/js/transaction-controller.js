angular
	.module( "myapp" )
	.controller( "TransactionController" , [
		"$scope",
		function controller( $scope ) {
			$scope.transactionList = [
				{
					"productMode" : false,
					"stamp" : "4354654yr6ytry6",
					"title" : "Reg",
					"description" : "Reg",
					"firstname" : "Reg",
					"lastname" : "Reg",
					"status" : "enable",
					"user_refernce" : "1321ewdsaxz",
					"email_address" : "reg@gmail.com",
					"mobile_number" : "132445543",
					"home_address" : "Philippin",
					"listProduct" : [
						{
							"discountMode": true,
							"priceMode": false,
							"reference" : "110000AD1",
							"stamp" : "110000AD1",
							"code" : "110000AD1",
							"title" : "ballpen1",
							"description" : "ballpen1",
							"listDiscount" : [
								{
									"title" : "regular1",
									"description" : "regular1",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								},

								{
									"title" : "regular2",
									"description" : "regular2",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "Javascript",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular3",
									"description" : "regular3",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								}
							],

							"listPrice" : [
								{
									"title" : "regular1",
									"description" : "regular1",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								},

								{
									"title" : "regular2",
									"description" : "regular2",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								}
							]
						},

						{
							"reference" : "110000AD2",
							"stamp" : "110000AD2",
							"code" : "110000AD2",
							"title" : "ballpen2",
							"description" : "ballpen2",
							"listDiscount" : [
								{
									"title" : "regular4",
									"description" : "regular4",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular5",
									"description" : "regular5",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular6",
									"description" : "regular6",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								}
							],

							"listPrice" : [
								{
									"title" : "regular3",
									"description" : "regular3",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								},

								{
									"title" : "regular4",
									"description" : "regular4",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								}
							]
						},

						{
							"reference" : "110000AD3",
							"stamp" : "110000AD3",
							"code" : "110000AD3",
							"title" : "ballpen3",
							"description" : "ballpen3",
							"listDiscount" : [
								{
									"title" : "regular7",
									"description" : "regular7",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular8",
									"description" : "regular8",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular9",
									"description" : "regular9",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								}
							],

							"listPrice" : [
								{
									"title" : "regular5",
									"description" : "regular5",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								},

								{
									"title" : "regular6",
									"description" : "regular6",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								}
							]
						}
					]
				},

				{
					"productMode" : false,
					"stamp" : "aaaayr6ytry6",
					"title" : "Doanh",
					"description" : "Doanh",
					"firstname" : "Doanh",
					"lastname" : "Doanh",
					"status" : "disenable",
					"user_refernce" : "1321ewdsaxz",
					"email_address" : "doanh@gmail.com",
					"mobile_number" : "132445543s",
					"home_address" : "vietnam",
					"listProduct" : [
						{
							"discountMode": true,
							"priceMode": false,
							"reference" : "110000AD4",
							"stamp" : "110000AD4",
							"code" : "110000AD4",
							"title" : "ballpen4",
							"description" : "ballpen4",
							"listDiscount" : [
								{
									"title" : "regular10",
									"description" : "regular10",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"base_curency" : "PHP",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular11",
									"description" : "regular11",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular12",
									"description" : "regular12",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								}
							],

							"listPrice" : [
								{
									"title" : "regular7",
									"description" : "regular7",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								},

								{
									"title" : "regular7",
									"description" : "regular7",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								}
							]
						},

						{
							"discountMode": true,
							"priceMode": false,
							"reference" : "110000AD5",
							"stamp" : "110000AD5",
							"code" : "110000AD5",
							"title" : "ballpen5",
							"description" : "ballpen5",
							"listDiscount" : [
								{
									"title" : "regular13",
									"description" : "regular13",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular14",
									"description" : "regular14",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular15",
									"description" : "regular15",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								}
							],

							"listPrice" : [
								{
									"title" : "regular8",
									"description" : "regular8",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								},

								{
									"title" : "regular9",
									"description" : "regular9",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								}
							]
						},

						{
							"discountMode": true,
							"priceMode": false,
							"reference" : "110000AD6",
							"stamp" : "110000AD6",
							"code" : "110000AD6",
							"title" : "ballpen6",
							"description" : "ballpen6",
							"listDiscount" : [
								{
									"title" : "regular16",
									"description" : "regular16",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular17",
									"description" : "regular17",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular18",
									"description" : "regular18",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								}
							],

							"listPrice" : [
								{
									"title" : "regular10",
									"description" : "regular10",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								},

								{
									"title" : "regular11",
									"description" : "regular11",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								}
							]
						}
					]
				},

				{
					"productMode" : false,
					"stamp" : "1aaaayr6ytry6",
					"title" : "Hue",
					"description" : "Hue",
					"firstname" : "Hue",
					"lastname" : "Hue",
					"status" : "enable",
					"user_refernce" : "1321ewdsaxz",
					"email_address" : "hue@gmail.com",
					"mobile_number" : "132445543",
					"home_address" : "VietNam",
					"listProduct" : [
						{
							"discountMode": true,
							"priceMode": false,
							"reference" : "110000AD7",
							"stamp" : "110000AD7",
							"code" : "110000AD7",
							"title" : "ballpen7",
							"description" : "ballpen7",
							"listDiscount" : [
								{
									"title" : "regular19",
									"description" : "regular19",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular20",
									"description" : "regular20",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular21",
									"description" : "regular21",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								}
							],

							"listPrice" : [
								{
									"title" : "regular12",
									"description" : "regular12",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								},

								{
									"title" : "regular13",
									"description" : "regular13",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								}
							]
						},

						{
							"discountMode": true,
							"priceMode": false,
							"reference" : "110000AD8",
							"stamp" : "110000AD8",
							"code" : "110000AD8",
							"title" : "ballpen8",
							"description" : "ballpen8",
							"listDiscount" : [
								{
									"title" : "regular22",
									"description" : "regular22",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular23",
									"description" : "regular23",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular24",
									"description" : "regular24",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								}
							],

							"listPrice" : [
								{
									"title" : "regular14",
									"description" : "regular14",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								},

								{
									"title" : "regular15",
									"description" : "regular15",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								}
							]
						},

						{
							"discountMode": true,
							"priceMode": false,
							"reference" : "110000AD9",
							"stamp" : "110000AD9",
							"code" : "110000AD9",
							"title" : "ballpen9",
							"description" : "ballpen9",
							"listDiscount" : [
								{
									"title" : "regular25",
									"description" : "regular25",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular26",
									"description" : "regular26",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								},

								{
									"title" : "regular27",
									"description" : "regular27",
									"reference" : "232532a",
									"type" : "Deduction",
									"base_currency" : "PHP",
									"amount" : "23",
									"target" : "item-price",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "infinite"
								}
							],

							"listPrice" : [
								{
									"title" : "regular16",
									"description" : "regular16",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								},

								{
									"title" : "regular17",
									"description" : "regular17",
									"reference" : "232532a",
									"base_currency" : "PHP",
									"amount" : "23",
									"effective_date" : "19-03-1995",
									"validity_type" : "infinite",
									"valid_unit" : "definite"
								}
							]
						}
					]
				}
			];

			$scope.hasTransaction = function hasTransaction( ) {
				if ( $scope.transactionList.length == 0 ) {
					return false;
				}

				return true;
			};

			$scope.displayTransaction = function displayTransaction( transaction ) {
				$scope.transactionList.forEach( function onEachItem( _transaction ) {
					if( _transaction.stamp != transaction.stamp ) {
						_transaction._viewMode = false;
					};
				} )

				transaction._viewMode =! transaction._viewMode;
			};

			$scope.displayProductTab = function displayProductTab( transaction ) {
				transaction.productMode =! transaction.productMode;
			};

			$scope.displayTabDiscount = function displayTabDiscount( product ) {
				product.discountMode = true;
				product.priceMode = false;
			};

			$scope.displayTabPrice = function displayTabPrice( product ) {
				product.priceMode = true;
				product.discountMode = false;
			};
		}
		] )
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
