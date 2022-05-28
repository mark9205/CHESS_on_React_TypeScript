import React, { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
    return (
        <div
            onClick={() => click(cell)}
            className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
            style={{background: cell.available && cell.figure? "rgb(234, 236, 77)": ""}}
        >
            {cell.available && !cell.figure && <div className="availableForMove"></div>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
        </div>
    );
};

export default CellComponent;
