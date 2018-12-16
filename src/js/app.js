import { button } from "./globals";
import fetchAsyncAwait from "./helpers";

button.addEventListener("click", fetchAsyncAwait);
window.addEventListener("load", fetchAsyncAwait);
