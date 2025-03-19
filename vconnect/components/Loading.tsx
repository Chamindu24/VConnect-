import { Mosaic } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen animate-fade-in">
      <Mosaic color={["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]} />
    </div>
  );
};

export default Loading;
