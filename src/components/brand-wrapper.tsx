import { connection } from "next/server";
import { WORDS } from "~/lib/constants";
import { getRandomInt } from "~/lib/utils";
import { Brand } from "./brand";

export async function BrandWrapper() {
  await connection();

  const initialIndex = getRandomInt(WORDS.length);

  return <Brand initialIndex={initialIndex} />;
}
