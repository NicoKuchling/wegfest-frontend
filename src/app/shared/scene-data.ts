import { Answer } from "./answer";
import { Scene } from "./scene";

export interface SceneData {
  _id: string;
  scene: Scene;
  unitySceneId: string;
  playerPosition: string;
  daytime: string;
  speedLimit: number;
  eMobilityFrequency: string;
  trafficVolume: string;
  cyclists: boolean;
  crossingDuration: number;
  timeForOrientation: number;
  numberOfDangerousSituations: number;
  numberOfAccidents: number;
  numberOfCrossingAttempts: number;
  answers: Answer[];
}
