export const farmers = [
  { id: 1, fullName: 'John Doe', farm: 'Oshana Farm', aggregationSystem: 'Yes', nabCertificate: 'Yes', gender: 'Male', age: 14, farmSize: 0.5, region: 'Ohangwena' },
  { id: 2, fullName: 'John Doe', farm: 'Oshana Farm', aggregationSystem: 'No', nabCertificate: 'No', gender: 'Female', age: 31, farmSize: 1.5, region: 'Ohangwena' },
  { id: 3, fullName: 'John Doe', farm: 'Oshana Farm', aggregationSystem: 'No', nabCertificate: 'No', gender: 'Female', age: 31, farmSize: 0.5, region: 'Ohangwena' },
  { id: 4, fullName: 'John Doe', farm: 'Oshana Farm', aggregationSystem: 'No', nabCertificate: 'Yes', gender: 'Female', age: 11, farmSize: 2.0, region: 'Ohangwena' },
  { id: 5, fullName: 'John Doe', farm: 'Oshana Farm', aggregationSystem: 'Yes', nabCertificate: 'No', gender: 'Male', age: 60, farmSize: 2.5, region: 'Ohangwena' },
  { id: 6, fullName: 'John Doe', farm: 'Oshana Farm', aggregationSystem: 'No', nabCertificate: 'Yes', gender: 'Male', age: 30, farmSize: 0.5, region: 'Ohangwena'},
  { id: 7, fullName: 'John Doe', farm: 'Oshana Farm', aggregationSystem: 'Yes', nabCertificate: 'No', gender: 'Female', age: 44, farmSize: 3.4, region: 'Ohangwena' },
  { id: 8, fullName: 'John Doe', farm: 'Oshana Farm', aggregationSystem: 'Yes', nabCertificate: 'No', gender: 'Male', age: 36, farmSize: 7.0, region: 'Ohangwena' },
  { id: 9, fullName: 'John Doe', farm: 'Oshana Farm', aggregationSystem: 'No', nabCertificate: 'Yes', gender: 'Female', age: 65, farmSize: 1.5, region: 'Ohangwena' },
];

// farmer name, farm name, aggregation system, age, gender, region, land size (ha), nab certificate, 
export const farmersByRegion = [
    {'Total Farmers': 40, 'Region': 'Ohangwena'},
    {'Total Farmers': 20, 'Region': 'Khomas'},
    {'Total Farmers': 15, 'Region': 'Erongo'},
    {'Total Farmers': 23, 'Region': 'Hardap'},
    {'Total Farmers': 26, 'Region': 'Oshana'},
    {'Total Farmers': 32, 'Region': 'Kunene'}
  ]

export const farmersByRegionMap = [
    // Ohangwena
    { numberOfFarmers: 80, coordinates: { lat: -17.5643, lng: 16.3402 } },
  
    // Erongo
    { numberOfFarmers: 70, coordinates: { lat: -22.5597, lng: 15.2677 } },
  
    // Hardap
    { numberOfFarmers: 50, coordinates: { lat: -24.5345, lng: 17.3002 } },
  
    // Kunene
    { numberOfFarmers: 40, coordinates: { lat: -19.6700, lng: 13.9973 } },
  
    // Khomas
    { numberOfFarmers: 60, coordinates: { lat: -22.5597, lng: 17.0832 } },
  
    // Oshana
    { numberOfFarmers: 90, coordinates: { lat: -17.7833, lng: 15.6833 } },
  ];

export const farmersAggregationData = [
    {id: 0, value: 30, label: 'Yes' },
    {id: 1, value: 70, label: 'No' }
  ];

export const farmersNABData = [
    {id: 0, value: 30, label: 'Yes' },
    {id: 1, value: 70, label: 'No' }
  ];

export const top5ChallengesByFarmers = [
    {'Total Farmers': 10, 'Challenge': 'Access to Markets'},
    {'Total Farmers': 48, 'Challenge': 'Water shortage'},
    {'Total Farmers': 20, 'Challenge': 'Pests and diseases'},
    {'Total Farmers': 32, 'Challenge': 'Inputs constraint'},
    {'Total Farmers': 26, 'Challenge': 'Financial limitation'}
  ]

  export const top5SalesByFarmers = [
    {'Total Sales': 200, 'Farmer': 'John Doe'},
    {'Total Sales': 180, 'Farmer': 'John Legend'},
    {'Total Sales': 160, 'Farmer': 'John Cena'},
    {'Total Sales': 140, 'Farmer': 'John Lennon'},
    {'Total Sales': 120, 'Farmer': 'John Deep'}
  ]

export const nodes = [
  {
    id: "1",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200,
    nodes: [
      {
        id: "1.1",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200
      },
      {
        id: "1.2",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200
      },
    ],
  },
  {
    id: "2",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200,
    nodes: [
      {
        id: "2.1",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200
      },
      {
        id: "2.2",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200
      },
    ],
  },
  {
    id: "3",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200,
    nodes: [
      {
        id: "3.1",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200
      },
      {
        id: "2.2",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200
      },
    ],
  },
  {
    id: "4",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200,
    nodes: [
      {
        id: "4.1",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200
      },
      {
        id: "4.2",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200
      },
    ],
  },
  {
    id: "5",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200,
    nodes: [
      {
        id: "5.1",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200
      },
      {
        id: "5.2",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200
      },
    ],
  },
  {
    id: "6",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200,
    nodes: [
      {
        id: "6.1",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200
      },
      {
        id: "6.2",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200
      },
      {
        id: "3.2",
    name: "John Doe",
    productionQty: 40,
    productionValue: 1000,
    distributedQty: 30,
    distributedValue: 700,
    salesQty: 20,
    salesValue: 500,
    lossesQty: 10,
    lossesValue: 200
      }
    ],
  }
  
];

export const monthlyCropProductionTrend= [
  { ['Total Crops']: 500, months: 'Jan' },
  { ['Total Crops']: 670, months: 'Feb' },
  { ['Total Crops']: 1000, months: 'Mar' },
  { ['Total Crops']: 900, months: 'Apr' },
  { ['Total Crops']: 850, months: 'May' },
  { ['Total Crops']: 300, months: 'Jun' },
  { ['Total Crops']: 230, months: 'Jul' },
  { ['Total Crops']: 400, months: 'Aug' },
  { ['Total Crops']: 320, months: 'Sept' },
  { ['Total Crops']: 200, months: 'Oct' },
  { ['Total Crops']: 450, months: 'Nov' },
  { ['Total Crops']: 370, months: 'Dec' },
];

export const yieldData = [
  { Year: 2019, Yield: 1200 },
  { Year: 2020, Yield: 1500 },
  { Year: 2021, Yield: 1800 },
  { Year: 2022, Yield: 2000 },
  { Year: 2023, Yield: 2300 },
];

export const aggregationSystemComparison = [
  { months: 'Jan', Yes: 500, No: 400 },
  { months: 'Feb', Yes: 670, No: 550 },
  { months: 'Mar', Yes: 1000,No: 800 },
  { months: 'Apr', Yes: 900, No: 700 },
  { months: 'May', Yes: 850, No: 680 },
  { months: 'Jun', Yes: 300, No: 250 },
  { months: 'Jul', Yes: 230, No: 200 },
  { months: 'Aug', Yes: 400, No: 350 },
  { months: 'Sept',Yes: 320, No: 270 },
  { months: 'Oct', Yes: 200, No: 180 },
  { months: 'Nov', Yes: 450, No: 400 },
  { months: 'Dec', Yes: 370, No: 320 },
];

export const topCropsByYield = [
  { Crops: 'Wheat', ['Total Yield']: 1200 },
  { Crops: 'Corn', ['Total Yield']: 1500 },
  { Crops: 'Rice', ['Total Yield']: 1800 },
  { Crops: 'Soybeans', ['Total Yield']: 1000 },
  { Crops: 'Barley', ['Total Yield']: 900 },
  { Crops: 'Potatoes', ['Total Yield']: 800 },
  { Crops: 'Tomatoes', ['Total Yield']: 700 },
  { Crops: 'Apples', ['Total Yield']: 600 },
  { Crops: 'Grapes', ['Total Yield']: 500 },
  { Crops: 'Carrots', ['Total Yield']: 400 },
];

export const cropsAndFarmersData = [
  { Crops: 'Wheat', ['Total Farmers']: 500000 },
  { Crops: 'Rice', ['Total Farmers']: 600000 },
  { Crops: 'Corn', ['Total Farmers']: 700000 },
  { Crops: 'Soybeans', ['Total Farmers']: 450000 },
  { Crops: 'Barley', ['Total Farmers']: 300000 },
  { Crops: 'Potatoes', ['Total Farmers']: 400000 },
  { Crops: 'Tomatoes', ['Total Farmers']: 350000 },
  { Crops: 'Apples', ['Total Farmers']: 200000 },
  { Crops: 'Grapes', ['Total Farmers']: 250000 },
  { Crops: 'Carrots', ['Total Farmers']: 180000 },
];

export const cropsData = [
  { id: 1, crop: 'Wheat', farmers: 500000, participation: '15%', producedQty: 1200000, unit: 'tons' },
  { id: 2, crop: 'Rice', farmers: 600000, participation: '18%', producedQty: 1500000, unit: 'tons' },
  { id: 3, crop: 'Corn', farmers: 700000, participation: '20%', producedQty: 1800000, unit: 'tons' },
  { id: 4, crop: 'Soybeans', farmers: 450000, participation: '12%', producedQty: 1000000, unit: 'tons' },
  { id: 5, crop: 'Barley', farmers: 300000, participation: '10%', producedQty: 900000, unit: 'tons' },
  { id: 6, crop: 'Potatoes', farmers: 400000, participation: '8%', producedQty: 800000, unit: 'tons' },
  { id: 7, crop: 'Tomatoes', farmers: 350000, participation: '7%', producedQty: 700000, unit: 'tons' },
  { id: 8, crop: 'Apples', farmers: 200000, participation: '5%', producedQty: 600000, unit: 'tons' },
  { id: 9, crop: 'Grapes', farmers: 250000, participation: '4%', producedQty: 500000, unit: 'tons' },
  { id: 10, crop: 'Carrots', farmers: 180000, participation: '3%', producedQty: 400000, unit: 'tons' },
];

export const avgYield = [
  { Farm: 'Farm A', ['Average Yield']: 1100 },
  { Farm: 'Farm B', ['Average Yield']: 1000 },
  { Farm: 'Farm C', ['Average Yield']: 2000 },
  { Farm: 'Farm D', ['Average Yield']: 3000 },
  { Farm: 'Farm E', ['Average Yield']: 3400 },
  { Farm: 'Farm F', ['Average Yield']: 4000 },
  { Farm: 'Farm G', ['Average Yield']: 5300 }
]

export const salesAndDistribution = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  sales: [3000, 4050, 6820, 7949, 5868, 5938, 5928, 7037, 7572, 9572, 8736, 6736],
  distribution: [2000, 4000, 5003, 5739, 7684, 8476, 9576, 8758, 4724, 5825, 6837, 8372]
}

export const salesVsDist = [
  { year: 2020, ['Sales Qty']: 120000, ['Distribution Qty']: 80000 },
  { year: 2021, ['Sales Qty']: 150000, ['Distribution Qty']: 95000 },
  { year: 2022, ['Sales Qty']: 180000, ['Distribution Qty']: 120000 },
  { year: 2023, ['Sales Qty']: 180000, ['Distribution Qty']: 120000 },
  { year: 2024, ['Sales Qty']: 180000, ['Distribution Qty']: 120000 },
  // ... add more years as needed
];

export const scatterData = [
  {id: 1, salesValue: 10000, lossesQty: 500, crop: 'Wheat'},
  {id: 2, salesValue: 8000, lossesQty: 800, crop: 'Tomato'},
  {id: 3, salesValue: 15000, lossesQty: 300, crop: 'Cabbage'},
  {id: 4, salesValue: 12000, lossesQty: 450, crop: 'Onion'},
  {id: 5, salesValue: 5000, lossesQty: 1000, crop: 'Spinach'}
]

export const top10FarmersBySales = [
  { farmer: 'Farmer A', ['Sales Value']: 120000, },
  { farmer: 'Farmer B', ['Sales Value']: 150000, },
  { farmer: 'Farmer C', ['Sales Value']: 180000,  },
  { farmer: 'Farmer D', ['Sales Value']: 180000,  },
  { farmer: 'Farmer E', ['Sales Value']: 180000,  },
  { farmer: 'Farmer F', ['Sales Value']: 180000,  },
  { farmer: 'Farmer G', ['Sales Value']: 180000,  },
  { farmer: 'Farmer H', ['Sales Value']: 180000,  },
  { farmer: 'Farmer I', ['Sales Value']: 180000,  },
  { farmer: 'Farmer J', ['Sales Value']: 180000,  },
  // ... add more years as needed
];

export const top10FarmersByDistribution = [
  { farmer: 'Farmer A', ['Distribution Value']: 80000 },
  { farmer: 'Farmer B', ['Distribution Value']: 95000 },
  { farmer: 'Farmer C', ['Distribution Value']: 120000 },
  { farmer: 'Farmer D', ['Distribution Value']: 120000 },
  { farmer: 'Farmer E', ['Distribution Value']: 120000 },
  { farmer: 'Farmer F', ['Distribution Value']: 120000 },
  { farmer: 'Farmer G', ['Distribution Value']: 120000 },
  { farmer: 'Farmer H', ['Distribution Value']: 120000 },
  { farmer: 'Farmer I', ['Distribution Value']: 120000 },
  { farmer: 'Farmer J', ['Distribution Value']: 120000 },
];


export const top10CropsBySalesAndDistribution = [
  { crop: 'Crop A', ['Sales Value']: 120000, ['Distribution Value']: 21750 },
  { crop: 'Crop B', ['Sales Value']: 150000, ['Distribution Value']: 57760 },
  { crop: 'Crop C', ['Sales Value']: 180000, ['Distribution Value']: 58270  },
  { crop: 'Crop D', ['Sales Value']: 180000, ['Distribution Value']: 58280  },
  { crop: 'Crop E', ['Sales Value']: 180000, ['Distribution Value']: 75620  },
  { crop: 'Crop F', ['Sales Value']: 180000, ['Distribution Value']: 97360  },
  { crop: 'Crop G', ['Sales Value']: 180000, ['Distribution Value']: 83620  },
  { crop: 'Crop H', ['Sales Value']: 180000, ['Distribution Value']: 93720  },
  { crop: 'Crop I', ['Sales Value']: 180000, ['Distribution Value']: 57490  },
  { crop: 'Crop J', ['Sales Value']: 180000, ['Distribution Value']: 67270  },
  // ... add more years as needed
];


export const summaryReport = [
  {
    id: 1,
    farmerName: 'John Doe',
    gender: 'Male',
    age: 35,
    typeOfFarming: 'Crop Farming',
    region: 'Ohangwena',
    challenges: 'Pest infestation, Water scarcity',
    aggregatedSystem: 'Yes',
    phoneNumber: '081357759',
    sizeOfFarm: 50,
    cropName: 'Wheat',
    unit: 'kgs',
    schoolsSuppliedTo: 'ABC School',
    typeOfBuyer: 'Wholesaler',
    peopleEmployed: 10,
    quantityProduced: 1200,
    productionValue: 150000,
    quantitySold: 1000,
    salesValue: 120000,
    quantityDistributed: 150,
    distributionValue: 18000,
    lossesQuantity: 50,
    lossesValue: 5000,
    totalValue: 141500,
  },
  {
    id: 2,
    farmerName: 'John Doe',
    gender: 'Male',
    age: 35,
    typeOfFarming: 'Crop Farming',
    region: 'North Region',
    challenges: 'Pest infestation, Water scarcity',
    aggregatedSystem: 'Yes',
    phoneNumber: '081357759',
    sizeOfFarm: 50,
    cropName: 'Corn',
    unit: 'kgs',
    schoolsSuppliedTo: 'XYZ School',
    typeOfBuyer: 'Retailer',
    peopleEmployed: 8,
    quantityProduced: 800,
    productionValue: 100000,
    quantitySold: 700,
    salesValue: 80000,
    quantityDistributed: 50,
    distributionValue: 6000,
    lossesQuantity: 20,
    lossesValue: 2000,
    totalValue: 88000,
  },
  {
    id: 3,
    farmerName: 'Jane Smith',
    gender: 'Female',
    age: 28,
    typeOfFarming: 'Livestock Farming',
    region: 'South Region',
    challenges: 'Disease outbreak, Market fluctuations',
    aggregatedSystem: 'No',
    phoneNumber: '081357759',
    sizeOfFarm: 30,
    cropName: 'Tomatoes',
    unit: 'kgs',
    schoolsSuppliedTo: 'DEF School',
    typeOfBuyer: 'Local Market',
    peopleEmployed: 5,
    quantityProduced: 500,
    productionValue: 60000,
    quantitySold: 400,
    salesValue: 40000,
    quantityDistributed: 50,
    distributionValue: 5000,
    lossesQuantity: 10,
    lossesValue: 1000,
    totalValue: 45000,
  },
  {
    id: 4,
    farmerName: 'Jane Smith',
    gender: 'Female',
    age: 28,
    typeOfFarming: 'Livestock Farming',
    region: 'South Region',
    challenges: 'Disease outbreak, Market fluctuations',
    aggregatedSystem: 'No',
    phoneNumber: '081357759',
    sizeOfFarm: 30,
    cropName: 'Tomatoes',
    unit: 'kgs',
    schoolsSuppliedTo: 'DEF School',
    typeOfBuyer: 'Local Market',
    peopleEmployed: 5,
    quantityProduced: 500,
    productionValue: 60000,
    quantitySold: 400,
    salesValue: 40000,
    quantityDistributed: 50,
    distributionValue: 5000,
    lossesQuantity: 10,
    lossesValue: 1000,
    totalValue: 45000,
  },
  {
    id: 5,
    farmerName: 'Jane Smith',
    gender: 'Female',
    age: 28,
    typeOfFarming: 'Livestock Farming',
    region: 'South Region',
    challenges: 'Disease outbreak, Market fluctuations',
    aggregatedSystem: 'No',
    phoneNumber: '081357759',
    sizeOfFarm: 30,
    cropName: 'Tomatoes',
    unit: 'kgs',
    schoolsSuppliedTo: 'DEF School',
    typeOfBuyer: 'Local Market',
    peopleEmployed: 5,
    quantityProduced: 500,
    productionValue: 60000,
    quantitySold: 400,
    salesValue: 40000,
    quantityDistributed: 50,
    distributionValue: 5000,
    lossesQuantity: 10,
    lossesValue: 1000,
    totalValue: 45000,
  },
  {
    id: 6,
    farmerName: 'Jane Smith',
    gender: 'Female',
    age: 28,
    typeOfFarming: 'Livestock Farming',
    region: 'South Region',
    challenges: 'Disease outbreak, Market fluctuations',
    aggregatedSystem: 'No',
    phoneNumber: '081357759',
    sizeOfFarm: 30,
    cropName: 'Tomatoes',
    unit: 'kgs',
    schoolsSuppliedTo: 'DEF School',
    typeOfBuyer: 'Local Market',
    peopleEmployed: 5,
    quantityProduced: 500,
    productionValue: 60000,
    quantitySold: 400,
    salesValue: 40000,
    quantityDistributed: 50,
    distributionValue: 5000,
    lossesQuantity: 10,
    lossesValue: 1000,
    totalValue: 45000,
  },
  {
    id: 7,
    farmerName: 'Jane Smith',
    gender: 'Female',
    age: 28,
    typeOfFarming: 'Livestock Farming',
    region: 'South Region',
    challenges: 'Disease outbreak, Market fluctuations',
    aggregatedSystem: 'No',
    phoneNumber: '081357759',
    sizeOfFarm: 30,
    cropName: 'Tomatoes',
    unit: 'kgs',
    schoolsSuppliedTo: 'DEF School',
    typeOfBuyer: 'Local Market',
    peopleEmployed: 5,
    quantityProduced: 500,
    productionValue: 60000,
    quantitySold: 400,
    salesValue: 40000,
    quantityDistributed: 50,
    distributionValue: 5000,
    lossesQuantity: 10,
    lossesValue: 1000,
    totalValue: 45000,
  },
];

export const cropSalesAndDistData = [
        {id: 1, crop: 'Wheat', salesValue: 2000, salesQty: 500, distValue: 1840, distQty: 472, month: 'Jan', lossesQty: 348, lossesValue: 5724, totalValue: 10000, totalQty: 6748},
        {id: 2, crop: 'Wheat', salesValue: 1020, salesQty: 352, distValue: 570, distQty: 448, month: 'Feb', lossesQty: 562, lossesValue: 3727, totalValue: 12900, totalQty: 6762},
        {id: 3, crop: 'Tomato', salesValue: 3000, salesQty: 846, distValue: 1283, distQty: 598, month: 'Jan', lossesQty: 624, lossesValue: 4626, totalValue: 18000, totalQty: 7917},
        {id: 4, crop: 'Tomato', salesValue: 1590, salesQty: 371, distValue: 194, distQty: 130, month: 'Feb', lossesQty: 351, lossesValue: 2352, totalValue: 20000, totalQty: 9800},
        {id: 5, crop: 'Cabbage', salesValue: 5982, salesQty: 382, distValue: 3714, distQty: 792, month: 'Jan', lossesQty: 253, lossesValue: 1363, totalValue: 30000, totalQty: 15000},
        {id: 6, crop: 'Cabbage', salesValue: 5827, salesQty: 582, distValue: 2647, distQty: 980, month: 'Feb', lossesQty: 13, lossesValue: 588, totalValue: 25000, totalQty: 12000}
    ]






