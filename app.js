(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;

	this.selectTab = function(setTab){
	  this.tab = setTab;
	};

	this.isSelected = function(checkTab){
	  return this.tab === checkTab;
	};
  });

  var gems = [
    {
	  name: 'Ruby',
	  price: 50.25,
	  description: "Pink to blood-red colored gemstone, a variety of the mineral corundum (aluminium oxide)",
	  specification: "The red color is caused mainly by the presence of the element chromium. Its name comes from ruber, Latin for red.",
      review: "Phasellizzle fo shizzle my nizzle crunk. Curabitur non velizzle the bizzle pede cr",
	  canPurchase: true,
	  soldOut: false,
	  images: [
	    {
		  full: 'img/ruby.png',
		  thumb: 'img/ruby-thumb.png'
		}
	  ],
	  reviews: [
	    {
		  stars: 5,
		  body: "Best gem ever",
		  author: "foo@bar.com"
		},
		{
		  stars: 4,
		  body: "Very shiny",
		  author: "jane@doe.com"
		}
	  ]
	},
	{
	  name: 'Diamond',
	  price: 130.75,
	  description: "In mineralogy, a diamond is a metastable allotrope of carbon, where the carbon atoms are arranged in a variation of the face-centered cubic crystal structure called a diamond lattice.",
	  specification: "Diamonds are clear and very tough",
	  review: "Maecenas quis metus izzle fo shizzle my nizzle yo gangsta. Break yo neck, yall dope",
	  canPurchase: true,
	  soldOut: false,
	  images: [
	    {
		  full: 'img/diamond.png',
		  thumb: 'img/diamond-thumb.png'
		}
	  ],
	  reviews: [
	    {
	      stars: 2,
		  body: "Gem came discolored",
		  author: "john@doe.com"
		},
		{
		  stars: 4,
		  body: "Diamond has great quality",
		  author: "fred@var.com"
		}
	  ]
	},
  ];
})();