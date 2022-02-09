
export interface SeedItemInterface {
  seedName: string,
  price: number,
  weightGram: number,
  gramTsp: number,
  link: string,
  pricePerGram: number,
  shop: string
}


const seedCatalogue:SeedItemInterface[] = [
  {
    "seedName": "Broccoli Rabb",
    "price": 1.49,
    "weightGram": 40,
    "gramTsp": 3,
    "link": "https://www.amazon.co.uk/gp/product/B00AKH8VO0",
    "pricePerGram": 0.03725,
    "shop": "amazon"
  },
  {
    "seedName": "Radish China Rose",
    "price": 1.69,
    "weightGram": 40,
    "gramTsp": 3,
    "link": "https://www.amazon.co.uk/gp/product/B00NWGS85I/",
    "pricePerGram": 0.04225,
    "shop": "amazon"
  }
];

export default seedCatalogue;

