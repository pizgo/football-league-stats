import React from "react";
import {TableCell} from "@mui/material";

interface TeamCellProps {
    style: string,
    status: string,
    winnerId: string | undefined
    competitorId: string,
    content: string
}

const HeaderCell: React.FC<TeamCellProps> = ({style, status,winnerId, competitorId, content}) => {

    let className = style

    if (status !== "closed") {
        className += " text-black";
    } else if (!winnerId) {
        className += " text-tie";
    } else if (winnerId && winnerId === competitorId) {
        className += " text-winner";
    } else {
        className += " text-lost";
    }

    return <TableCell className={className}>{content}</TableCell>

};

export default HeaderCell;


