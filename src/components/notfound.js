import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found p-3">
      <h1 className="text-center text-danger"> 404 URL Not Found</h1>
      <div
        className="image-container"
        style={{ height: "300px", width: "400px", marginInline: "auto" }}
      >
        <img
          style={{ borderRadius: "20px", width: "100%" }}
          src="https://www.sunflowerhospital.in/assets/img/bg/404-error-dribbble-800x600.gif"
          alt="not-found"
        />
      </div>
      <button onClick={() => navigate(-1)}>back</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export { NotFound };
