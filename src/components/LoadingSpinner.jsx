import "bootstrap/dist/css/bootstrap.min.css";
const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "5rem", height: " 5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default LoadingSpinner;
