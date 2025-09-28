export type Category = 'All' | 'Men' | 'Women' | 'Boys' | 'Girls' ;

export interface Item {
  id: number;
  name: string;
  category: Exclude<Category, 'All'>;
  tags: string[];
  color: string;
  image: string;
}
