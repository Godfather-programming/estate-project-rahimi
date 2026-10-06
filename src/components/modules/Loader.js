import { ColorRing } from "react-loader-spinner";

function Loader({ type }) {
  return (
    <>
      {type !== "ادمین" ? (
        <ColorRing
          visible={true}
          height={60}
          ariaLabel="color-ring-loading"
          wrapperStyle={{ width: "100%" }}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      ) : (
        <ColorRing
          visible={true}
          height={45}
          ariaLabel="color-ring-loading"
          wrapperStyle={{ width: "120px", marginTop: "15px" }}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
    </>
  );
}

export default Loader;
