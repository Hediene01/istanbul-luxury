# Deployment Guide — Bosphorus & Co.

Complete guide for deploying the luxury restaurant website to multiple platforms.

---

## 📋 Table of Contents

1. [Local Development](#local-development)
2. [Docker Deployment](#docker-deployment)
3. [Vercel Deployment](#vercel-deployment)
4. [Netlify Deployment](#netlify-deployment)
5. [Traditional Server Deployment](#traditional-server-deployment)
6. [Performance Optimization](#performance-optimization)

---

## 🏠 Local Development

### Prerequisites
- Node.js 18+
- pnpm 10+

### Setup

```bash
# Clone repository
git clone https://github.com/Hediene01/istanbul-luxury.git
cd istanbul-luxury

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

Access at `http://localhost:3000`

### Build for Production

```bash
pnpm run build
pnpm run preview
```

---

## 🐳 Docker Deployment

### Build Docker Image

```bash
# Build image
docker build -t bosphorus-co:latest .

# Run container
docker run -p 3000:3000 bosphorus-co:latest
```

Access at `http://localhost:3000`

### Using Docker Compose

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down
```

### Push to Docker Registry

```bash
# Tag image
docker tag bosphorus-co:latest your-registry/bosphorus-co:latest

# Push to registry (Docker Hub, ECR, GCR, etc.)
docker push your-registry/bosphorus-co:latest
```

### Deploy to Docker Hosting

**Docker Hub:**
```bash
docker login
docker push your-registry/bosphorus-co:latest
```

**AWS ECR:**
```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
docker tag bosphorus-co:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/bosphorus-co:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/bosphorus-co:latest
```

---

## ⚡ Vercel Deployment

### Prerequisites
- Vercel account (https://vercel.com)
- GitHub repository

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Using Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Select "Other" as framework
4. Build Command: `pnpm run build`
5. Output Directory: `dist`
6. Click Deploy

### Environment Variables

Add in Vercel Dashboard → Settings → Environment Variables:

```
NODE_ENV=production
```

### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records according to Vercel instructions

---

## 🚀 Netlify Deployment

### Prerequisites
- Netlify account (https://netlify.com)
- GitHub repository

### Option 1: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Option 2: Using Netlify Dashboard

1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Select your GitHub repository
4. Build Command: `pnpm run build`
5. Publish Directory: `dist`
6. Click Deploy Site

### Environment Variables

Add in Site Settings → Build & Deploy → Environment:

```
NODE_ENV=production
```

### Deploy Previews

Netlify automatically creates preview URLs for pull requests.

---

## 🖥️ Traditional Server Deployment

### Prerequisites
- Server with Node.js 18+
- SSH access
- pnpm or npm installed

### Deployment Steps

```bash
# 1. SSH into server
ssh user@your-server.com

# 2. Clone repository
git clone https://github.com/Hediene01/istanbul-luxury.git
cd istanbul-luxury

# 3. Install dependencies
pnpm install

# 4. Build application
pnpm run build

# 5. Start with PM2 (recommended)
npm install -g pm2
pm2 start "pnpm start" --name "bosphorus-co"
pm2 save
pm2 startup

# 6. Configure Nginx reverse proxy
```

### Nginx Configuration

Create `/etc/nginx/sites-available/bosphorus-co`:

```nginx
upstream app {
  server localhost:3000;
}

server {
  listen 80;
  server_name yourdomain.com www.yourdomain.com;

  # Redirect to HTTPS
  return 301 https://$server_name$request_uri;
}

server {
  listen 443 ssl http2;
  server_name yourdomain.com www.yourdomain.com;

  # SSL certificates (use Let's Encrypt)
  ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

  # Security headers
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header X-Frame-Options "SAMEORIGIN" always;

  # Gzip compression
  gzip on;
  gzip_types text/plain text/css text/javascript application/json;

  # Reverse proxy
  location / {
    proxy_pass http://app;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
  }

  # Cache static assets
  location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/bosphorus-co /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### SSL Certificate (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## 🚀 AWS Deployment

### Using AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

### Using AWS EC2 + ECS

1. Create EC2 instance
2. Push Docker image to ECR
3. Create ECS cluster
4. Create task definition
5. Create service
6. Configure load balancer

---

## 🌍 Cloudflare Pages

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login
wrangler login

# Deploy
wrangler pages deploy dist
```

---

## 📊 Performance Optimization

### Build Optimization

```bash
# Analyze bundle size
pnpm add -D vite-plugin-visualizer
```

### Caching Strategy

- **HTML:** No cache (must-revalidate)
- **CSS/JS:** 1 year (immutable)
- **Images:** 1 month
- **API:** No cache

### CDN Configuration

- Use Cloudflare, CloudFront, or Bunny CDN
- Enable compression (gzip, brotli)
- Set appropriate cache headers
- Enable HTTP/2 and HTTP/3

### Monitoring

- Set up error tracking (Sentry, Rollbar)
- Monitor performance (New Relic, DataDog)
- Track uptime (UptimeRobot, Pingdom)

---

## 🔒 Security Checklist

- [ ] Enable HTTPS/SSL
- [ ] Set security headers (CSP, X-Frame-Options, etc.)
- [ ] Enable CORS properly
- [ ] Use environment variables for secrets
- [ ] Regular dependency updates
- [ ] Monitor for vulnerabilities
- [ ] Enable rate limiting
- [ ] Backup database regularly

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules pnpm-lock.yaml dist
pnpm install
pnpm run build
```

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Memory Issues

```bash
# Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 pnpm run build
```

### SSL Certificate Issues

```bash
# Check certificate
openssl s_client -connect yourdomain.com:443

# Renew Let's Encrypt certificate
sudo certbot renew --force-renewal
```

---

## 📞 Support

For deployment issues, contact:
- Vercel Support: https://vercel.com/support
- Netlify Support: https://support.netlify.com
- AWS Support: https://aws.amazon.com/support

---

**Last Updated:** June 2024
**Version:** 1.0.0
