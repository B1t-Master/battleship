import styles from "./styles.css";
import { createGame } from "./app/playgame";
import { player, computer } from "./app/barrel";

console.log(player.gameboard);
createGame(player, computer);
// console.log(player.gameboard);

/*todo
place ships randomly for both computer and player
end game , restart game
need a mechanism to prevent double hits for players
further along if its a successful hit place another ship
*/
