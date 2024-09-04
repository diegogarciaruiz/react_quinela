const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./router/userRouter");
const quinielaRoutes = require("./router/quinielaRouter");
const resultadosRoutes = require("./router/resultadosRouter");

const app = express();
app.use(bodyParser.json());

app.use("/api", userRoutes);
app.use("/api", quinielaRoutes);
app.use("/api", resultadosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
