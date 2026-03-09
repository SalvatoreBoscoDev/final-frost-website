#!/bin/bash
# Final Frost — deploy script
# Run on the r630 from anywhere: bash /var/www/final-frost/deploy/deploy.sh

set -e

APP_DIR="/var/www/final-frost"
BACKEND="$APP_DIR/backend"
FRONTEND="$APP_DIR/frontend"
SERVICE="finalfrost"

echo "==> Pulling latest from GitHub..."
cd "$APP_DIR"
git pull origin main

echo "==> Installing/updating Python packages..."
"$BACKEND/venv/bin/pip" install -r "$BACKEND/requirements.txt" -q

echo "==> Running Django migrations..."
cd "$BACKEND"
"$BACKEND/venv/bin/python" manage.py migrate --noinput

echo "==> Collecting Django static files..."
"$BACKEND/venv/bin/python" manage.py collectstatic --noinput

echo "==> Building React frontend..."
cd "$FRONTEND"
npm install --silent
npm run build

echo "==> Restarting gunicorn..."
sudo systemctl restart "$SERVICE"

echo ""
echo "✓ Final Frost deployed. https://finalfrostgame.com"
