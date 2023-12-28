import { atom } from 'jotai';

export type Reminder = {
  id: string;
  name: string;
  notes: string;
  selectDate: string;
  selectTime: string;
};

//Jotai implementation
export const remindersAtom = atom<Reminder[]>([]);
