export type GeoResponse = GeoLocation[];

export interface GeoLocation {
  name: string;
  local_names: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export interface LocalNames {
  yi: string;
  pt: string;
  el: string;
  la: string;
  uk: string;
  oc: string;
  hy: string;
  os: string;
  lv: string;
  eo: string;
  mr: string;
  fa: string;
  mn: string;
  ko: string;
  th: string;
  ur: string;
  it: string;
  bg: string;
  ru: string;
  lt: string;
  ka: string;
  es: string;
  zh: string;
  sr: string;
  ja: string;
  be: string;
  ar: string;
  ce: string;
  he: string;
  en: string;
}
