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
Access the application at: **`http://localhost:2000`**

### 2. Manual Docker CLI

```bash
# Build Docker image
docker build -t roland-portfolio .

# Run container on port 2000
docker run -d -p 2000:2000 --name roland-portfolio roland-portfolio
```

---

## ⚙️ CI/CD & Automated Server Deployment

Workflow file: [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml)

### Workflow Pipeline:
1. **Job 1 (Build & Validate)**:
   - Runs on every `push` & `pull_request` to `main` / `master`.
   - Runs `npm ci` and `npm run build` on Node.js 20 to verify there are zero build errors.
2. **Job 2 (Docker Build & Publish)**:
   - Runs on push to `main` or manual trigger.
   - Builds production multi-arch Docker image via Docker Buildx.
   - Pushes image to **GitHub Container Registry (GHCR)**: `ghcr.io/<username>/<repo>:latest`.
3. **Job 3 (Deploy to Server via SSH)**:
   - Connects to your remote server/VPS via SSH (`appleboy/ssh-action`).
   - Logs into GHCR on the server using `${{ secrets.GITHUB_TOKEN }}`.
   - Pulls the newly built image and restarts the container smoothly.
   - Automatically cleans up old dangling images (`docker image prune -f`).

---

## 🔐 Required GitHub Secrets Setup

To enable automated deployment to your server, add these secrets in your GitHub repository:  
👉 **Repository Settings** > **Secrets and variables** > **Actions** > **New repository secret**

| Secret Name | Deskripsi | Contoh Nilai |
| :--- | :--- | :--- |
| `TWINGATE_SERVICE_KEY` *(Khusus Twingate)* | Service Account Key dari Twingate Admin Console | `{"version":"1","network":"...","token":"..."}` |
| `SERVER_HOST` *(Wajib)* | IP Private server di Twingate atau IP Public VPS | `192.168.1.50` atau `myserver.internal` |
| `SERVER_USER` *(Wajib)* | Username SSH di server | `ubuntu`, `root`, `opc`, atau `debian` |
| `SERVER_SSH_KEY` *(Wajib salah satu)* | Private SSH Key server (`id_rsa` / `id_ed25519`) | `-----BEGIN OPENSSH PRIVATE KEY----- ...` |
| `SERVER_SSH_PASSWORD` *(Alternatif)* | Password SSH jika tidak memakai SSH Key | `PasswordServerAnda123!` |
| `SERVER_PORT` *(Opsional)* | Port SSH server (default: 22) | `22` |
| `SERVER_APP_DIR` *(Opsional)* | Direktori project di server (default: `~/portfolio`) | `/home/ubuntu/portfolio` |
| `SERVER_PORT_MAPPING` *(Opsional)* | Port mapping Docker di server (default: `2000:2000`) | `2000:2000` |

---

## 📁 Project Architecture

- `src/` — Vue 3 components, views, design tokens, and profile data
- `public/` — Static assets, resume PDF, and minimal favicon
- `nginx.conf` — Production Nginx server config with SPA fallback, gzip, and security headers
- `Dockerfile` — Multi-stage build (Node 20 Alpine -> Nginx Alpine Slim)
- `docker-compose.yml` — Container orchestration configuration
- `.github/workflows/ci-cd.yml` — Automated CI/CD pipeline & SSH deployment
