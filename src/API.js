router.get("/", function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  // ---------------------
  res.json([
    {
      symbol: "CTR",
      companyName: "CHARLES TAYLOR",
      sector: "Support services",
      priceChange: "-19.00",
      priceChangePercent: "-6.79",
      price: 261.0,
      week52High: 273.58,
      volume: 4420
    },
    {
      symbol: "CPR",
      companyName: "CARPETRIGHT",
      sector: "Retailers",
      priceChange: "+4.00",
      priceChangePercent: "+10.26",
      price: 43.0,
      week52Average: 45.5,
      volume: 1133
    },
    {
      symbol: "RUS",
      companyName: "RAVEN RUSSIA",
      sector: "Investments",
      priceChange: "+1.90",
      priceChangePercent: "+4.41",
      price: 43.1,
      week52High: 43.5,
      volume: 18806
    },
    {
      symbol: "TET",
      companyName: "TREATT",
      sector: "Chemicals",
      priceChange: "+22.00",
      priceChangePercent: "+5.18",
      price: 447.0,
      week52High: 425.0,
      volume: 361521
    },
    {
      symbol: "CWD",
      companyName: "COUNTRYWIDE",
      sector: "Investments",
      priceChange: "+4.40",
      priceChangePercent: "+4.23",
      price: 108.4,
      week52High: 104.0,
      volume: 69224
    },
    {
      symbol: "IRV",
      companyName: "INTERSERVE",
      sector: "Support services",
      priceChange: "-3.70",
      priceChangePercent: "-3.32",
      price: 107.6,
      week52High: 111.3,
      volume: 533986
    },
    {
      symbol: "MGP",
      companyName: "MEDICA GROUP",
      sector: "Pharmaceuticals",
      priceChange: "-3.00",
      priceChangePercent: "-2.44",
      price: 120.0,
      week52High: 123.0,
      volume: 554136
    },
    {
      symbol: "MERL",
      companyName: "MERLIN",
      sector: "Travel & Leisure",
      priceChange: "+15.40",
      priceChangePercent: "+4.44",
      price: 362.1,
      week52High: 363.0,
      volume: 4836228
    },
    {
      symbol: "MRW",
      companyName: "MORRISON",
      sector: "Retailers",
      priceChange: "+5.00",
      priceChangePercent: "+2.13",
      price: 240.0,
      week52High: 234.5,
      volume: 15285097
    },
    {
      symbol: "HIK",
      companyName: "HIKMA",
      sector: "Pharmaceuticals",
      priceChange: "+63.50",
      priceChangePercent: "+5.04",
      price: 1324.5,
      week52High: 1252.0,
      volume: 1003303
    }
  ]);

  // ---------------------
});
