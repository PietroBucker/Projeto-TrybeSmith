export type OrderWithId = {
  id: number;
  userId: number;
  productIds?: number[];
};

export type Order = {
  id: number;
  userId: number;
  productIds?: { id: number }[];
};

export type OrderOpt = Order | OrderWithId;