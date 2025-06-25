import fs from 'fs';
import path from 'path';

export default async function findVideos() {
  try {
    const videosDir = path.join(process.cwd(), 'public', 'videos');
    
    // Check if directory exists
    if (!fs.existsSync(videosDir)) {
      return { videos: [] };
    }
    
    const files = fs.readdirSync(videosDir);
    const videoFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.mp4', '.webm', '.ogg', '.mov', '.avi'].includes(ext);
    });
    
    const videos = videoFiles.map(file => ({
      name: file,
      url: `/videos/${file}`,
      path: path.join(videosDir, file)
    }));
    
    return videos;
  } catch (error) {
    console.error('Error reading videos directory:', error);
    return { videos: [] };
  }
} 