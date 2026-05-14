#!/bin/bash
# Vercel Deployment Script for macOS/Linux
# Usage: ./deploy.sh or ./deploy.sh preview

PREVIEW_MODE=${1:-}

echo "🚀 Starting deployment to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

VERCEL_VERSION=$(vercel --version)
echo "✓ Vercel CLI version: $VERCEL_VERSION"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Build the project
echo ""
echo "🏗️  Building project..."
npm run build

# Deploy to Vercel
echo ""
echo "📤 Deploying to Vercel..."

if [ "$PREVIEW_MODE" == "preview" ]; then
    echo "Deploying to preview environment..."
    vercel deploy
else
    echo "Deploying to production environment..."
    vercel deploy --prod
fi

echo ""
echo "✅ Deployment complete!"
