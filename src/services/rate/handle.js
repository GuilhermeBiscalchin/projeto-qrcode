const rate = 0.25;

async function handle(err, result) {
  if (err) {
    console.log("error on application");
    return;
  }
  console.log(
    "Valor com a taxa \n",
    (
      parseFloat(result.valor) * parseFloat(rate) +
      parseFloat(result.valor)
    ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  );
}

export default handle;
