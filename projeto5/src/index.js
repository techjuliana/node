const express = require("express");

const contents = [
  {
    id: 1,
    title: "1 postagem",
    description: "Assunto",
    author: "TechJuliana",
    about: "carreira",
  },
  {
    id: 2,
    title: "2 postagem",
    description: "Assunto",
    author: "TechJuliana",
    about: "tecnologia",
  },
  {
    id: 3,
    Title: "3 postagem",
    description: "Assunto",
    Author: "TechJuliana",
    about: "curiosidades",
  },
];

const app = express();

const router = express.Router();

router.get("/contents", (request, response) => {
  const { id } = request.query;

  if (!id) {
    return response.status(200).send(contents);
  }

  const contentsById = contents.filter((content) => content.id == id);
  if (contentsById.length > 0) {
    return response.status(200).send(contentsById);
  }
  return response.status(500).send({ error: "Postagem nao encontrada" });
});

app.use(router);

app.listen(3000, () => console.log("serve esta na porta 3000"));
