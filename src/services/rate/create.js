import prompt from "prompt";
import handle from "./handle.js";

import schemaTaxa from "../../prompts-schema/prompt-schema-rate.js";

async function createRate() {

  prompt.get(schemaTaxa, handle);
  prompt.start()
}

export default createRate;
