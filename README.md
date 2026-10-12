# Roland Rudiyanto — Portfolio Web Application

Personal engineering portfolio website built with **Vue 3**, **Vite**, and **PrimeVue** with modern dark editorial aesthetics.

---

## 🚀 Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Run Vite development server
npm run dev

# Build production bundle
npm run build
```

---

## 🐳 Docker Deployment

### 1. Build and Run via Docker Compose (Recommended)

```bash
# Build & start container in background
docker compose up -d --build

# View running logs
docker compose logs -f

# Stop container
docker compose down
```
Access the application at: **`http://localhost:8080`**

### 2. Manual Docker CLI

```bash
# Build Docker image
docker build -t roland-portfolio .

# Run container on port 80
docker run -d -p 8080:80 --name roland-portfolio roland-portfolio
```

---

## ⚙️ CI/CD & GitHub Actions

Workflow file: [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml)

### What it does:
1. **Build & Validation Job**:
   - Runs on every `push` and `pull_request` to `main` / `master`.
   - Runs `npm ci` and `npm run build` on Node.js 20 to ensure zero compilation errors.
2. **Docker Publish Job**:
   - Automatically builds a multi-arch container image using Docker Buildx.
   - Pushes the image to **GitHub Container Registry (GHCR)**: `ghcr.io/<username>/portofolio-v2:latest`.
   - Uses built-in `${{ secrets.GITHUB_TOKEN }}` without requiring external Docker Hub credentials.

---

## 📁 Project Architecture

- `src/` — Vue 3 components, application views, design tokens, and profile data
- `public/` — Static assets, resume PDF, and minimal favicon
- `nginx.conf` — Production Nginx server config with SPA fallback, gzip, and security headers
- `Dockerfile` — Multi-stage build (Node 20 Alpine -> Nginx Alpine Slim)
- `docker-compose.yml` — Container orchestration configuration
- `.github/workflows/` — Automated CI/CD pipeline
