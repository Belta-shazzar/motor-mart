import {
  AvailabilityStatus,
  Car,
  FuelType,
  Transmission,
} from "@prisma/client";

export const sampleCars = [
  {
    make: "Toyota",
    carModel: "Camry",
    year: 2020,
    color: "Silver",
    mileage: 45000,
    price: 250000,
    vin: "1HGCM82633A123456",
    fuelType: FuelType.Gasoline,
    transmission: Transmission.AUTOMATIC,
    availabilityStatus: AvailabilityStatus.AVAILABLE,
    description: "Newly imported Toyota Camry from California",
  },
  {
    make: "Honda",
    carModel: "Accord",
    year: 2018,
    color: "Black",
    mileage: 60000,
    price: 220000,
    vin: "2HGCM82633A654321",
    fuelType: FuelType.Gasoline,
    transmission: Transmission.AUTOMATIC,
    availabilityStatus: AvailabilityStatus.SOLD,
    description: "Well-maintained Honda Accord with clean interior",
  },
  {
    make: "Ford",
    carModel: "Fusion",
    year: 2019,
    color: "Blue",
    mileage: 30000,
    price: 240000,
    vin: "3HGCM82633A789012",
    fuelType: FuelType.Hybrid,
    transmission: Transmission.AUTOMATIC,
    availabilityStatus: AvailabilityStatus.AVAILABLE,
    description: "Eco-friendly Ford Fusion hybrid with great fuel economy",
  },
  {
    make: "Chevrolet",
    carModel: "Malibu",
    year: 2021,
    color: "White",
    mileage: 15000,
    price: 270000,
    vin: "4HGCM82633A345678",
    fuelType: FuelType.Gasoline,
    transmission: Transmission.AUTOMATIC,
    availabilityStatus: AvailabilityStatus.AVAILABLE,
    description: "Chevrolet Malibu in excellent condition, ready to drive",
  },
  {
    make: "Nissan",
    carModel: "Altima",
    year: 2017,
    color: "Red",
    mileage: 70000,
    price: 200000,
    vin: "5HGCM82633A876543",
    fuelType: FuelType.Gasoline,
    transmission: Transmission.MANUAL,
    availabilityStatus: AvailabilityStatus.AVAILABLE,
    description: "Reliable Nissan Altima with a powerful engine",
  },
  {
    make: "Hyundai",
    carModel: "Sonata",
    year: 2019,
    color: "Gray",
    mileage: 35000,
    price: 230000,
    vin: "6HGCM82633A234567",
    fuelType: FuelType.Gasoline,
    transmission: Transmission.AUTOMATIC,
    availabilityStatus: AvailabilityStatus.SOLD,
    description: "Stylish Hyundai Sonata, perfect for city driving",
  },
  {
    make: "Kia",
    carModel: "Optima",
    year: 2020,
    color: "Blue",
    mileage: 25000,
    price: 245000,
    vin: "7HGCM82633A098765",
    fuelType: FuelType.Gasoline,
    transmission: Transmission.MANUAL,
    availabilityStatus: AvailabilityStatus.AVAILABLE,
    description: "Smooth handling Kia Optima with a modern interior",
  },
  {
    make: "Mazda",
    carModel: "Mazda6",
    year: 2018,
    color: "Silver",
    mileage: 48000,
    price: 235000,
    vin: "8HGCM82633A567890",
    fuelType: FuelType.Gasoline,
    transmission: Transmission.AUTOMATIC,
    availabilityStatus: AvailabilityStatus.SOLD,
    description: "Mazda6 in great shape with sporty performance",
  },
  {
    make: "Volkswagen",
    carModel: "Passat",
    year: 2019,
    color: "White",
    mileage: 29000,
    price: 255000,
    vin: "9HGCM82633A112233",
    fuelType: FuelType.Diesel,
    transmission: Transmission.AUTOMATIC,
    availabilityStatus: AvailabilityStatus.AVAILABLE,
    description: "Fuel-efficient Volkswagen Passat with a spacious cabin",
  },
  {
    make: "Subaru",
    carModel: "Legacy",
    year: 2021,
    color: "Green",
    mileage: 12000,
    price: 280000,
    vin: "0HGCM82633A334455",
    fuelType: FuelType.Gasoline,
    transmission: Transmission.MANUAL,
    availabilityStatus: AvailabilityStatus.AVAILABLE,
    description: "Subaru Legacy with all-wheel drive, ready for adventure",
  },
];
