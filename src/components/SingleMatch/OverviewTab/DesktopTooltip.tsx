import React from "react";
import { Tooltip } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";

export interface MobileTooltipProps {
    message: string | JSX.Element[] | null,
    placement?:
        | 'bottom-end'
        | 'bottom-start'
        | 'bottom'
        | 'left-end'
        | 'left-start'
        | 'left'
        | 'right-end'
        | 'right-start'
        | 'right'
        | 'top-end'
        | 'top-start'
        | 'top';
    timelineEvent: string | JSX.Element | undefined,
    closeTooltip: () => void,
    // isTooltipOpen: boolean;
}
const DesktopTooltip: React.FC<MobileTooltipProps> = ({ message,
                                                        placement,
                                                        timelineEvent,
                                                        closeTooltip,
                                                      }) => {
    return (
        <Tooltip title={message}
                 placement={placement}
                 arrow
                 className="hidden sm:block">
            <div onClick={closeTooltip}>{timelineEvent}</div>
        </Tooltip>
    );
}

export default DesktopTooltip