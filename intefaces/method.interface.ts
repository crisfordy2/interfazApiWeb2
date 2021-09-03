import { Fermentation } from './fermetation.interface';
import { MashTemp } from './mashTemp.interface';

export interface Method {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist?: any;
}
