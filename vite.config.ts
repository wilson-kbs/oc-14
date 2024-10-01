import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    base: process.env.VITE_PREFIX_PATH || "/",
    plugins: [tsconfigPaths(), react()],
  };
});
