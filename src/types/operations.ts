export interface NormalOperation {
  id: string;
  title: string;
  description: string;
  order: number;
}

export interface NonNormalOperation {
  id: string;
  category: string;
  title: string;
  description: string;
  baseCheckNumber: number;
}

export interface Operation {
  id: string;
  title: string;
  description: string;
}