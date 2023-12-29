import { atom } from "jotai";

export type Reminder = {
  id: string;
  name: string;
  notes: string;
  date: Date;
  time: Date;
};

//Jotai implementation
export const remindersAtom = atom<Reminder[]>([]);
