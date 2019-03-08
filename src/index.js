import { Fighter } from "./fighter";
import { ImprovedFighter } from "./improvedFighter";
import { fight } from "./fight";

let leftFigter = new Fighter('noob', 10, 50);
let rigthFighter = new ImprovedFighter('pro', 20, 75);

fight(leftFigter, rigthFighter, 25, 13, 45);