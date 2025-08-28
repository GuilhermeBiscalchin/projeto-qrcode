const schemaTaxa = [
  {
    name: "valor",
    description:'Digite o valor do produto: R$ ',
    pattern: /^[0-9\./]+$/,
    message:"Digite apenas numeros ",
    required:true
  },
];

export default schemaTaxa