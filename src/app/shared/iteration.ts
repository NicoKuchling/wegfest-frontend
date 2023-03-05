import { Person } from "./person";
import { SceneData } from "./scene-data";

export interface Iteration {
  _id: string;
  person: Person;
  completed: boolean;
  wasAborted: boolean;
  dateOfCompletion: Date;
  sceneData: SceneData[];
}
