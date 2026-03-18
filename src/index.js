import styles from "./styles.css";
import loadBoards from "./app/UI/layout";
import { Player } from "./app/player";

loadBoards();
let computer = new Player("computer");
let player = new Player("player");
