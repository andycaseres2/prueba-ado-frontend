export interface Attraction {
  id: number;
  name: string;
  description: string;
  images: string[];
  latitude: string;
  longitude: string;
  cityId: number;
  city: City;
}
interface City {
  id: number;
  name: string;
  description: string;
  surface: number;
  population: number;
  postalCode: string;
  departmentId: number;
  department?: string | null;
  touristAttractions: null[];
  presidents?: any;
  indigenousReservations?: any;
  airports?: any;
  radios?: any;
}
