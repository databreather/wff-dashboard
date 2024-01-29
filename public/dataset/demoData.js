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
    {'farmers': 40, 'region': 'Ohangwena'},
    {'farmers': 20, 'region': 'Khomas'},
    {'farmers': 15, 'region': 'Erongo'},
    {'farmers': 23, 'region': 'Hardap'},
    {'farmers': 26, 'region': 'Oshana'},
    {'farmers': 32, 'region': 'Kunene'}
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
    {'farmers': 10, 'challenge': 'Access to Markets'},
    {'farmers': 48, 'challenge': 'Water shortage'},
    {'farmers': 20, 'challenge': 'Pests and diseases'},
    {'farmers': 32, 'challenge': 'Inputs constraint'},
    {'farmers': 26, 'challenge': 'Financial limitation'}
  ]

  export const top5SalesByFarmers = [
    {'sales': 200, 'farmer': 'John Doe'},
    {'sales': 180, 'farmer': 'John Legend'},
    {'sales': 160, 'farmer': 'John Cena'},
    {'sales': 140, 'farmer': 'John Lennon'},
    {'sales': 120, 'farmer': 'John Deep'}
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

