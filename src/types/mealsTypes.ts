interface IMeal {
  'id': string,
  'name': string,
  'description': string,
  'price': number
}

type TMeals = Array<IMeal>;

export type {
  IMeal,
  TMeals
};
