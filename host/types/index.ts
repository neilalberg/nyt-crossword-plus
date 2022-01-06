
export type TimeEntry = {
  username: string;
  date: string;
  time: number;
};

export type DateEntries = {
  [key: string]: TimeEntry[],
}

export type PlacedEntry = TimeEntry & {
  place: number;
}

export type UserStat = {
  username: string;
  bestTime: number;
  averageTime: number;
  firstPlaceFinishes: number;
  averagePlace: number;
  gamesPlayed: number;
  power: {
    rating: number;
    index: number;
  };
}

export type TimeByDateIndexDataEntry = [number, string];
export type TimeByDateIndex = {
  data: TimeByDateIndexDataEntry[];
};