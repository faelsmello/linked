import { ICard, ICards } from '../interfaces/cards';

export const BoosterTransform = ({ cards }: ICards): Array<ICard> => {
  return cards.filter((card) => {
    if (card.types.includes('Creature')) {
      return card;
    }

    return null;
  });
};
