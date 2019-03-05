import { Fighter } from "./fighter";
import { ImprovedFighter } from "./improvedFighter";
import { fight } from "./fight";

// МС слева
let leftFigter = new Fighter('Yarko9', 1, 10);

// МС справа
let rigthFighter = new ImprovedFighter('FjOrt', 10, 10000);

// Пошумим бл*ть!!!

fight(leftFigter, rigthFighter, 25, 13, 45);