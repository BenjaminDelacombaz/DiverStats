import { Buddy } from "./buddy";
import { DiveSite } from "./dive-site";

export interface Dive {
  buddies: Array<Buddy>
  comments: string
  date: Date
  depth: number
  dive_site: DiveSite
  diver: string
  duration: number
  temperature: number
  visibility: number
}
