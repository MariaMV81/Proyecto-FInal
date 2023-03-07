import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section>
      <h1>Unauthorized</h1>
      <br />
      <p>NO TIENES ACCESO A ESTA PÁGINA.</p>
      <div className="flexGrow">
        <button onClick={goBack}>Regresar</button>
      </div>
    </section>
  );
}