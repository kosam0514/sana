export interface AlbumImage {
  id: number;
  url: string;
  title: string;
  description: string;
  tags: string[];
}

export type Category = 'ALL' | 'SPRING' | 'SUMMER' | 'AUTUMN' | 'WINTER';