const submitData = async (dataToSend) => {
    try {
      const response = await fetch('http://localhost:3000/api/result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
  
      const result = await response.json();
      console.log("Respuesta del servidor:", result);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };
  


  export default submitData