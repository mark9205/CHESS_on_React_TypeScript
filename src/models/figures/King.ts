import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blacklogo from "../../assets/король_чер.png";
import whitelogo from "../../assets/король_бел.png";

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.KING;
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        if (this.cell.isEmptyVertical(target)
        && ((target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
        || (target.y === this.cell.y + 1 || target.y === this.cell.y - 1))) {
            return true
        }
        if (this.cell.isEmptyHorizontal(target)
        && ((target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
        || (target.y === this.cell.y + 1 || target.y === this.cell.y - 1))) {
            return true
        }
        if (this.cell.isEmptyDiagonal(target)
        && ((target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
        || (target.y === this.cell.y + 1 || target.y === this.cell.y - 1))) {
            return true
        }
        return false
    }
}
