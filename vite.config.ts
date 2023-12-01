import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  define: {
    VITE_LOGIN_URL: process.env.VITE_LOGIN_URL,
  },
});
