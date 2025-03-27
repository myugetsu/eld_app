export type User = {
  id: number;
  username: string;
  email: string;
};

export type Trip = {
  id: number;
  start_location: string;
  pickup_location: string;
  dropoff_location: string;
  created_at: string;
};

export type Log = {
  id: number;
  trip_id: number;
  timestamp: string;
  status: string;
  notes: string;
};
