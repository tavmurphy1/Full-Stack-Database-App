//Citation for the following file:
// Date: 5/22/2024
// Copied from react-starter-app provided in OSU CS340
// The original file was used as a template. No changes made.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx"
  },
  server: {
    // Use VITE_PORT from your .env, or default to a port if not specified
    port: parseInt(process.env.VITE_PORT, 10) || 5173
  }
})
