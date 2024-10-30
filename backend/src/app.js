const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const admin = require("firebase-admin");

const moradorRoutes = require("./routes/moradorRoutes");
app.use("/api", moradorRoutes);

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Conexão com o MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log(err));

// Inicialização do Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(
    require("../path/to/your/serviceAccountKey.json")
  ),
});

// Rotas
app.get("/", (req, res) => {
  res.send("Bem-vindo ao sistema de gerenciamento de condomínio!");
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});



