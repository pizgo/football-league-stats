import React from "react";
import {mobileTableHeadersContent} from "../../utils/consts";
import {TableCell} from "@mui/material";

interface HeaderCellProps {
    style: string;
    headerCell: string [];
}

const HeaderCell: React.FC<HeaderCellProps> = ({style, headerCell}) => {

    const className = "font-bold text-white text-center " + style

    return (
        <>
            {headerCell.map((el, key) => (
                <TableCell className={className} key={el}>
                    {el}
                </TableCell>
            ))}
        </>
    )

};

export default HeaderCell;


