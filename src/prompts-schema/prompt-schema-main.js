import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Escolha a ferramenta (1 - QRCODE  (2- PASSWORD (3 - RATE "
    ),
    pattern: /^[1-3]+$/,
    message: chalk.red.italic("Escolha entre 1 , 2, 3"),
    required: true,
  },
];

export default promptSchemaMain;