import { BoilVolume } from './boilVolume.interface';
import { Ingredients } from './ingredients.interface';
import { Method } from './method.interface';
import { Volume } from './volume.interface';

export interface RootObject {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url?: any;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: BoilVolume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}
