import { useNavigate } from "react-router-dom";

export const useNavigateSearch = () => {
  const navigate = useNavigate();
  return (matchID: string) => {
    navigate({
      pathname: "/singleMatch",
      search: `?id=${matchID}`,
    });
  };
};
