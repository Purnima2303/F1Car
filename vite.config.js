import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        cars: resolve(__dirname, "cars.html"),
        drivers: resolve(__dirname, "drivers.html"),
        schedule: resolve(__dirname, "schedule.html"),
        register: resolve(__dirname, "register.html"),
        contact: resolve(__dirname, "contact.html")
      }
    }
  }
});
