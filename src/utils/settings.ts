import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config.ts";
const reader = createReader(process.cwd(), keystaticConfig);
const settings = await reader.singletons.settings.read();
export { settings };