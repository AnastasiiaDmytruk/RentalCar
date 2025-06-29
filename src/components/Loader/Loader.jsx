import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
      <CircleLoader loading={true} color="#3470ff" size={90} />;
    </div>
  );
};

export default Loader;
