export interface Department {
  id: number;
  name: string;
  description: string;
  cityCapitalId: number;
  municipalities: number;
  surface: number;
  population: number;
  phonePrefix: string;
  countryId: number;
  cityCapital: CityCapital;
  country?: any;
  cities?: any;
  regionId: number;
  region?: any;
  naturalAreas?: any;
  maps?: any;
  indigenousReservations?: any;
  airports?: any;
}
interface CityCapital {
  id: number;
  name: string;
  description: string;
  surface: number;
  population: number;
  postalCode: string;
  departmentId: number;
  department?: any;
  touristAttractions?: any;
  presidents?: any;
  indigenousReservations?: any;
  airports?: any;
  radios?: any;
}
