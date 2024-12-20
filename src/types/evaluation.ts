export interface EvaluationItem {
  id: string;
  title: string;
  performance?: 1 | 2 | 3 | 4 | 'C' | 'NC';
  comments?: string;
}

export interface NumericEvaluationItem {
  id: string;
  title: string;
  performance?: 1 | 2 | 3 | 4;
  comments?: string;
}