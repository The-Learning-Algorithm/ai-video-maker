"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

interface Video {
  name: string;
  url: string;
  path: string;
}

function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('/api/videos');
      const data = await response.json();
      setVideos(data.videos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePromptChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleGenerate = async () => {
    if (!prompt) {
      toast.error("Please enter a prompt");
      return;
    }
    const promise = toast.promise(fetch("/api/video-maker", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    }).then(res => res.json()), {
      loading: "Generating video...",
      success: (data: { message: string, videoUrl: string }) => {
        // Refresh videos list after generation
        fetchVideos();
        return data.message;
      },
      error: (error) => {
        return `Error generating video: ${error.message}`;
      },
    });
  };

  const handlePublish = async (video: Video) => {
    toast.promise(
      fetch('/api/publish-video', {
        method: 'POST',
        body: JSON.stringify({ videoPath: video.path, videoName: video.name }),
      }).then(res => res.json()),
      {
        loading: 'Publishing video...',
        success: 'Video published successfully!',
        error: 'Failed to publish video',
      }
    );
  };

  return (
    <div className="tabs tabs-lift">
      <input
        type="radio"
        name="ai_video_generator_tabs"
        className="tab"
        aria-label="Video Generator"
        defaultChecked
      />
      <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
        <fieldset className="fieldset w-full">
          <legend className="fieldset-legend">Text to Video Prompt</legend>
          <textarea
            className="textarea h-32 w-full"
            value={prompt}
            onChange={handlePromptChange}
          ></textarea>
        </fieldset>
        <button className="btn btn-primary" onClick={handleGenerate}>
          Generate
        </button>
      </div>

      <input
        type="radio"
        name="ai_video_generator_tabs"
        className="tab"
        aria-label="Review and Publish"
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        {loading ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : videos.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>No videos found. Generate a video first!</p>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Generated Videos</h3>
            {videos.map((video, index) => (
              <div key={index} className="card bg-base-200 p-4">
                <div className="card-body">
                  <h4 className="card-title">{video.name}</h4>
                  <video 
                    controls 
                    className="w-full max-w-md mx-auto rounded-lg"
                    preload="metadata"
                  >
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="card-actions justify-end mt-4">
                    <button 
                      className="btn btn-primary"
                      onClick={() => handlePublish(video)}
                    >
                      Publish Video
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
