# ShopFlow Assets

## Required Assets

### Video

- **Path**: `public/video/shopflow-video.mp4`
- **Purpose**: Main demo video for the landing page
- **Format**: MP4 (recommended for best compatibility)
- **Recommended specs**:
  - Resolution: 1920x1080 (Full HD) or 1280x720 (HD)
  - Duration: 30-120 seconds (short and engaging)
  - Bitrate: 2-5 Mbps
  - Codec: H.264

### Video Poster (Optional)

- **Path**: `public/images/products/shopflow-poster.jpg`
- **Purpose**: Shows before video loads
- **Format**: JPG or PNG
- **Recommended specs**:
  - Resolution: 1920x1080 (16:9 aspect ratio)
  - File size: < 200KB (optimized)

### Product Banner (Optional)

- **Path**: `public/images/products/shopflow-banner.jpg`
- **Purpose**: Used in products listing page
- **Format**: JPG or PNG
- **Recommended specs**:
  - Resolution: 1200x630 (OG image size)
  - File size: < 300KB

## Directory Structure

Create these directories if they don't exist:

```
public/
├── video/
│   └── shopflow-video.mp4       ← Add your demo video here
└── images/
    └── products/
        ├── shopflow-poster.jpg   ← (Optional) Video poster
        └── shopflow-banner.jpg   ← (Optional) Product listing image
```

## Notes

- Video will load from `/video/shopflow-video.mp4` automatically
- Without a poster image, the first frame of the video will be shown
- The landing page works without images, but video is required for the demo section
- You can add more assets (screenshots, icons) later as needed
