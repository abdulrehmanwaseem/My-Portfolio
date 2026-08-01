# scripts/extract-frames.sh — build-time only, run manually after producing clip.mp4
# Produces ~120 monochrome frames downscaled to 1280px wide.
set -euo pipefail
SRC="${1:-clip.mp4}"
OUT="public/graduation/frames"
mkdir -p "$OUT"
ffmpeg -i "$SRC" -vf "fps=24,scale=1280:-1:flags=lanczos,format=gray" "$OUT/frame-%03d.webp"
echo "frames written to $OUT"
