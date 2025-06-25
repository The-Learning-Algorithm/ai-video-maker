"use client";

import React from "react";

function Dashboard() {
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
          <textarea className="textarea h-32 w-full"></textarea>
        </fieldset>
        <button className="btn btn-primary">Generate</button>
      </div>

      <input
        type="radio"
        name="ai_video_generator_tabs"
        className="tab"
        aria-label="Review and Publish"
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        Tab content 2
      </div>
    </div>
  );
}

export default Dashboard;
