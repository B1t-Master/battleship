import styles from "./styles.css";
import { createGame } from "./app/playgame";
import { player, computer } from "./app/barrel";

createGame(player, computer);

/*todo
restart game
need a mechanism to prevent double hits for players
further along if its a successful hit place another ship
*/
