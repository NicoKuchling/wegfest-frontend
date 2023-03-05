import { Question } from "./question";

export interface Scene {
  _id: string;
  name: string;
  description: string;
  difficulty: string;
  questions: Question[];
}
