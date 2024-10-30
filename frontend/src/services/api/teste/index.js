const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

// Middleware para processar JSON
app.use(express.json());

// Rota de login sem validação
app.post("/src/components/admin/login/login.html", (req, res) => {
  // Lê o arquivo JSON e envia os dados como resposta
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo JSON:", err);
      res.status(500).json({ message: "Erro interno do servidor" });
    } else {
      res.json(JSON.parse(data)); // Envia o conteúdo do arquivo JSON como resposta
    }
  });
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`API de teste rodando em http://localhost:${PORT}`);
});
