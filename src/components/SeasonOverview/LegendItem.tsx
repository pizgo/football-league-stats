import React from "react";

interface LegendStatusProps {
    status: string;
}

const LegendItem: React.FC<LegendStatusProps> = ({status}) => {

    let className = 'flex items-center text-sm mb-0 justify-center gap-2 before:h-3 before:w-3 before:rounded-full before:block px-3.5 h-10 rounded-md';

    if (status === 'winner team') {
        className += 'text-winner before:bg-winner';
    } else if (status === "lost team") {
        className += 'text-lost before:bg-lost';
    } else {
        className +=
            'text-tie before:bg-tie';
    }

    return (
            <p className={className}>{status}</p>
    )

};

export default LegendItem;


