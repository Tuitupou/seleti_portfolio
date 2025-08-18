import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
    }),
    tailwindcss()
  ],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Build optimizations
  build: {
    // Generate smaller chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for third-party libraries
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // UI components chunk
          ui: ['lucide-react', '@radix-ui/react-toast'],
          // Utils chunk
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority']
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Optimize bundle size
    minify: 'esbuild',
    target: 'esnext',
    // Source maps for debugging in production (optional)
    sourcemap: false,
    // Optimize CSS
    cssCodeSplit: true,
    // Reduce bundle size
    reportCompressedSize: false
  },

  // Development server optimizations
  server: {
    // Enable HMR
    hmr: true,
    // Faster startup
    warmup: {
      clientFiles: [
        './src/components/*.jsx',
        './src/pages/*.jsx'
      ]
    }
  },

  // Performance optimizations
  optimizeDeps: {
    // Pre-bundle dependencies
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      '@radix-ui/react-toast'
    ],
    // Exclude heavy dependencies that don't need bundling
    exclude: []
  },

  // CSS optimization
  css: {
    // Enable CSS modules if needed
    modules: false,
    // PostCSS config
    postcss: {
      plugins: []
    }
  },

  // Preview server config for production builds
  preview: {
    port: 4173,
    host: true
  }
});

