# Vercel Deployment Script for Windows PowerShell
# Usage: .\deploy.ps1 or .\deploy.ps1 -preview

param(
    [switch]$preview
)

Write-Host "--- Starting deployment to Vercel ---" -ForegroundColor Cyan

# Check if Vercel CLI is installed
try {
    $vercelVersion = vercel --version 2>$null
    Write-Host "[OK] Vercel CLI version: $vercelVersion" -ForegroundColor Green
}
catch {
    Write-Host "[!] Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
}

# Install dependencies
Write-Host "`n[1/3] Installing dependencies..." -ForegroundColor Cyan
npm install

# Build the project
Write-Host "`n[2/3] Building project..." -ForegroundColor Cyan
npm run build

# Deploy to Vercel
Write-Host "`n[3/3] Deploying to Vercel..." -ForegroundColor Cyan
if ($preview) {
    Write-Host "Deploying to preview environment..." -ForegroundColor Yellow
    vercel deploy
}
else {
    Write-Host "Deploying to production environment..." -ForegroundColor Yellow
    vercel deploy --prod
}

Write-Host "`nDone! Deployment complete." -ForegroundColor Green
