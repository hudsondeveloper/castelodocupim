import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },
  server: {
    //allowedHosts: ['https://geral-castelo-do-cupim.akql5f.easypanel.host/','castelodocupim.com.br'],
    // this ensures that the browser opens upon server start
    open: false,
    // this sets a default port to 3000
    port: 3001
  },
  preview: {
    // this ensures that the browser opens upon preview start
    open: false,
    // this sets a default port to 3000
    port: 3001
  }
});
