import { defineConfig } from "vite"; // ✅ Import this
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // ✅ Ensure React Router works properly
  },
});
