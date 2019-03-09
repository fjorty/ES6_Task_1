// create async function "Fight"
export async function fight(fighter, improvedFighter, ...point) {
    for(let i = 0; i < point.length; i++) {
        if(fighter.health > 0){
          fighter.hit(improvedFighter, point[i]);
        }
        else{
          break;
        }
        if(improvedFighter.health > 0){
          improvedFighter.doubleHit(fighter, point[i]);
        }
         else{
          break;
        }
        i == point.length-1 ? i = 0 : i;
      }
  
    try {
      let loser = fighter.health < improvedFighter.health ? fighter : improvedFighter;
      let result = await loser.knockout();
      
      console.log(result);
    } catch(error) {
      console.log(error);
    }
}