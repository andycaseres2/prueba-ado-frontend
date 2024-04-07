export interface Country {
  id: number;
  name: string;
  description: string;
  stateCapital: string;
  surface: number;
  population: number;
  languages: string[];
  timeZone: string;
  currency: string;
  currencyCode: string;
  currencySymbol: string;
  isoCode: string;
  internetDomain: string;
  phonePrefix: string;
  radioPrefix: string;
  aircraftPrefix: string;
  subRegion: string;
  region: string;
  borders: string[];
  flags: string[];
  postalCode?: string;
  departmentId?: number;
}
