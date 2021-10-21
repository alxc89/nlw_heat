import { serverHTTP } from "./app";

const PORT = process.env.PORT || 4000;

serverHTTP.listen(PORT, () =>
  console.log(`Servidor rodando em  http://localhost:${PORT}`)
);
