export interface IItem {
  id: number;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  }
  title: string;
}
