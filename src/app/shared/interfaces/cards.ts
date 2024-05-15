export interface ICards {
  cards: ICard[];
}

export interface ICard {
  name: string;
  manaCost?: string;
  cmc: number;
  colors?: string[];
  colorIdentity: string[];
  type: string;
  types: string[];
  rarity: string;
  set: string;
  setName: string;
  text?: string;
  flavor?: string;
  artist: string;
  number: string;
  layout: string;
  multiverseid: string;
  imageUrl: string;
  watermark?: string;
  rulings?: IRuling[];
  foreignNames: IForeignName[];
  printings: string[];
  originalText?: string;
  originalType: string;
  legalities: ILegality[];
  id: string;
  subtypes?: string[];
  power?: string;
  toughness?: string;
  supertypes?: string[];
  variations?: string[];
}

export interface IRuling {
  date: string;
  text: string;
}

export interface IForeignName {
  name: string;
  text?: string;
  type: string;
  flavor?: string;
  imageUrl: string;
  language: string;
  multiverseid: number;
}

export interface ILegality {
  format: string;
  legality: string;
}
