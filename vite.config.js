
import path, { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	test: {
		globals: true
	},
	// root: path.resolve(__dirname, 'src'),
	resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  build: {
    rollupOptions: {
      input: {
				main: resolve(__dirname, "index.html"),
				profile: resolve(__dirname, "profile/index.html"),
				profileEdit: resolve(__dirname, "profile/edit/index.html"),
				profileLogin: resolve(__dirname, "profile/login/index.html"),
				viewPost: resolve(__dirname, "profile/posts/index.html"),
				editPost: resolve(__dirname, "profile/posts/edit/index.html"),

				// images: resolve(__dirname, "images")
      },
    },
  },
  base: "./"
});