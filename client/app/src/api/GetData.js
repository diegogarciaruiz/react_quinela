 const fetchData = async (jornadaId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/result/${jornadaId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener los datos del servidor');
      }
  
      const result = await response.json();
      console.log("Datos recibidos del servidor:", result);
      return result;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
  
  export default fetchData