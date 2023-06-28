import React from "react";

interface LegendStatusProps {
    status: string;
}

const LegendItem: React.FC<LegendStatusProps> = ({status}) => {

    let className = 'flex items-center justify-center gap-2 text-md/1 before:h-2 before:w-2 before:rounded-full before:block px-3.5 h-10 rounded-md';

    if (status === 'winner') {
        className += 'text-green before:bg-green';
    } else if (status === 'looser') {
        className += 'text-warning before:bg-warning';
    } else {
        className +=
            ' text-dark-500 dark:text-neutral-200 before:bg-dark-500 bg-dark-550 dark:before:bg-neutral-200 dark:bg-neutral-250';
    }

    return (
        <div className='w-28 md:mr-6'>
            <p className={className}>{status}</p>
            <p className="">lalala</p>
        </div>
    )

};

export default LegendItem;


