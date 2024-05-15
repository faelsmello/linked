export interface ISets {
  sets: Array<ISet>;
}

export interface ISet {
  code: string;
  name: string;
  type: string;
  border: string;
  mkm_id: number;
  booster: Array<string | Array<string>>;
  mkm_name: string;
  releaseDate: Date;
  magicCardsInfoCode: string;
  block: string;
  onlineOnly: boolean;
}
