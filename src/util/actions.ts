"use server";

import { run } from "./langchain";

const submit = async (data: FormData) => {
  await run();
  console.log(data);
};

export { submit };
