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
    openTooltip: () => void,
    isTooltipOpen: boolean;
}
const MobileTooltip: React.FC<MobileTooltipProps> = ({ message,
                                                       placement,
                                                       timelineEvent,
                                                       closeTooltip,
                                                       openTooltip,
                                                       isTooltipOpen}) => {
    return (
        <ClickAwayListener onClickAway={closeTooltip}>
            <Tooltip PopperProps={{disablePortal: true}}
                     onClose={closeTooltip}
                     open={isTooltipOpen}
                     disableFocusListener
                     disableHoverListener
                     disableTouchListener
                     title={message}
                     placement={placement}
                     arrow
                     className="sm:hidden">
                <div onClick={openTooltip}>{timelineEvent}</div>
            </Tooltip>
        </ClickAwayListener>
    );
}

export default MobileTooltip