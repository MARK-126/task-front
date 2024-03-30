import { useEffect, useState } from "react";
import axios from "axios";

const FetchBack = async () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000');
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    }; fetchData();
  }, []);

  

  return (
    <div>
      {error ? (
        <p>Error al traer datos: {error.message}</p>
      ) : (
        <div>
          {data && (
            <div>
              <h2>Datos obtenidos:</h2>
              <p>{data}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

 
  

export default FetchBack;