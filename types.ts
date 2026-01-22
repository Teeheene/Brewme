
export interface Bean {
  id: string;
  name: string;
  roaster: string;
  process: string;
  notes: string[];
  price: string;
  image: string;
  roastLevel: 'Light' | 'Medium' | 'Dark';
}

export interface BrewLog {
  id: string;
  coffeeName: string;
  rating: number;
  time: string;
  dose: string;
  yield: string;
  temp: string;
  method: string;
  notes: string;
}

export interface EventItem {
  id: string;
  title: string;
  location: string;
  time: string;
  price: string;
  image: string;
  status?: 'Fully Booked' | 'Available';
}
