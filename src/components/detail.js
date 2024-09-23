import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const { mascotaId } = useParams();
  const [mascota, setMascota] = useState(null);

  useEffect(() => {
    // URL con la lista de mascotas
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";

    // Fetch de mascotas y filtrado por id
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        const selectedMascota = data.find((m) => m.id === parseInt(mascotaId));
        setMascota(selectedMascota);
      });
  }, [mascotaId]);

  if (!mascota) {
    return <div>Cargando detalles...</div>;
  }

  return (
    <div>
      <h1>{mascota.nombre}</h1>
      <img src={mascota.foto} alt={mascota.nombre} style={{ width: "600px" }} />
      <h3>{mascota.raza}</h3>
    </div>
  );
}
