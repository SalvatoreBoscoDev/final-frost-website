#!/bin/bash
# Final Frost — server deploy script
# Lives at ~/deploy-finalfrost.sh on the r630
set -e

APP="$HOME/final-frost"
BACKEND="$APP/backend"
FRONTEND="$APP/frontend"

echo "==> Pulling latest..."
cd "$APP" && git pull

echo "==> Python deps..."
"$BACKEND/venv/bin/pip" install -r "$BACKEND/requirements.txt" -q

echo "==> Migrations..."
cd "$BACKEND" && "$BACKEND/venv/bin/python" manage.py migrate --noinput

echo "==> Static files..."
"$BACKEND/venv/bin/python" manage.py collectstatic --noinput -v 0

echo "==> Frontend build..."
cd "$FRONTEND" && npm install --silent && npm run build

echo "==> Restarting services..."
sudo systemctl restart gunicorn-finalfrost
sudo systemctl restart nginx

echo "✓ Live at https://finalfrostgame.com"
