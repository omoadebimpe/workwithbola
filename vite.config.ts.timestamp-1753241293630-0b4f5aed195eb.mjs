// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.js";
import { glob } from "file:///home/project/node_modules/glob/dist/esm/index.js";
import matter from "file:///home/project/node_modules/gray-matter/index.js";
import fs from "fs";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  define: {
    __BLOG_POSTS__: JSON.stringify(getBlogPosts())
  }
});
function getBlogPosts() {
  try {
    const files = glob.sync("content/blog/*.md");
    return files.map((file) => {
      const content = fs.readFileSync(file, "utf-8");
      const { data } = matter(content);
      return {
        ...data,
        slug: path.basename(file, ".md")
      };
    });
  } catch (error) {
    console.warn("Could not load blog posts:", error);
    return [];
  }
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBnbG9iIH0gZnJvbSAnZ2xvYic7XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXhjbHVkZTogWydsdWNpZGUtcmVhY3QnXSxcbiAgfSxcbiAgZGVmaW5lOiB7XG4gICAgX19CTE9HX1BPU1RTX186IEpTT04uc3RyaW5naWZ5KGdldEJsb2dQb3N0cygpKSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBnZXRCbG9nUG9zdHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZmlsZXMgPSBnbG9iLnN5bmMoJ2NvbnRlbnQvYmxvZy8qLm1kJyk7XG4gICAgcmV0dXJuIGZpbGVzLm1hcChmaWxlID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZSwgJ3V0Zi04Jyk7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IG1hdHRlcihjb250ZW50KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIHNsdWc6IHBhdGguYmFzZW5hbWUoZmlsZSwgJy5tZCcpXG4gICAgICB9O1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IGxvYWQgYmxvZyBwb3N0czonLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixTQUFTLFlBQVk7QUFDckIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sUUFBUTtBQUNmLE9BQU8sVUFBVTtBQUdqQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sZ0JBQWdCLEtBQUssVUFBVSxhQUFhLENBQUM7QUFBQSxFQUMvQztBQUNGLENBQUM7QUFFRCxTQUFTLGVBQWU7QUFDdEIsTUFBSTtBQUNGLFVBQU0sUUFBUSxLQUFLLEtBQUssbUJBQW1CO0FBQzNDLFdBQU8sTUFBTSxJQUFJLFVBQVE7QUFDdkIsWUFBTSxVQUFVLEdBQUcsYUFBYSxNQUFNLE9BQU87QUFDN0MsWUFBTSxFQUFFLEtBQUssSUFBSSxPQUFPLE9BQU87QUFDL0IsYUFBTztBQUFBLFFBQ0wsR0FBRztBQUFBLFFBQ0gsTUFBTSxLQUFLLFNBQVMsTUFBTSxLQUFLO0FBQUEsTUFDakM7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNILFNBQVMsT0FBTztBQUNkLFlBQVEsS0FBSyw4QkFBOEIsS0FBSztBQUNoRCxXQUFPLENBQUM7QUFBQSxFQUNWO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
