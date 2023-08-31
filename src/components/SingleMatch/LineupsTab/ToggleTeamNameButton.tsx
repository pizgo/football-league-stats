import React from "react";
interface ToggleTeamNameButton {
    onToggle: () => void,
    teamName: string
}
const ToggleTeamNameButton: React.FC<ToggleTeamNameButton> = ({onToggle, teamName}) => {

    return (
        <button role="button"
                className="py-3 px-4 font-bold text-center shadow-md hover:bg-neutral-200 active:bg-neutral-200 rounded border"
                onClick={onToggle}>
            {teamName}
        </button>
    )
}
export default ToggleTeamNameButton