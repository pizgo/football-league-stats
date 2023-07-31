import React from "react";
import {
    Tooltip,
    TableCell, TableRow
} from "@mui/material";
import {BiFootball} from "react-icons/bi";
import {HiOutlineSwitchHorizontal} from "react-icons/hi";
interface TimelineEventProps {
    competitor: string,
    type: string,
    matchTime: number | undefined
    players: { name: string; type: string; }[] | undefined
}

const TimelineEvent: React.FC<TimelineEventProps> = ({competitor, type, matchTime, players}) => {

    const formattedEventType =  (type:string)  => {
        if (type === 'score_change') {
            return <BiFootball size={18}/>
        } else if (type === "substitution") {
            return <HiOutlineSwitchHorizontal size={18}/>
        } else if (type === "yellow_card") {
            return <div className="bg-yellow-500 w-4 h-5 rounded"/>
        } else if (type === "red_card") {
            return <div className="bg-red-700 w-4 h-5 rounded"/>
        }
    }

    return (
        <TableRow sx={{ "& td": { border: 0 } }}>
            {(competitor === "home") ?
                <TableCell className="text-end py-1 pr-2">
                    <div className="flex items-center justify-end">
                        <Tooltip title="title" placement="left" arrow>
                            <div>{formattedEventType(type)}</div>
                        </Tooltip>
                    </div>
                </TableCell>
                : <TableCell></TableCell>}
            <TableCell className="text-center py-1 px-2 bg-primary-200 w-3 text-white">{matchTime}'</TableCell>
            {(competitor === "away") ?
                <TableCell className="text-end py-1 pr-2">
                    <div className="flex items-center justify-start">
                        <Tooltip title="title" placement="right" arrow>
                            <div>{formattedEventType(type)}</div>
                        </Tooltip>
                    </div>
                </TableCell>
                : <TableCell></TableCell>}
        </TableRow>
    )
}

//
// const popover = (el: SingleMatchTimelineSchema) => {
//   return (
//     <Popover id="popover-basic">
//       <Popover.Body className="fw-bold">
//         <Col>{formattedEventType(el.type)}</Col>
//         {el.players ? el.players.map((el) => (
//               <Col>
//                 {el.name}, {formattedEventType(el.type)}
//               </Col>
//             )) : null}
//         <Col>'{el.matchTime}</Col>
//       </Popover.Body>
//     </Popover>
//   );
// };

export default TimelineEvent;