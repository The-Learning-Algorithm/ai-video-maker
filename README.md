# AI Video Maker

An intelligent video generation application built with Next.js and Google's Gemini AI. Create stunning videos from text prompts with an intuitive web interface.

Article Link: [Step by Step Guide to Build AI Video Maker with Next.js and Google Gemini AI](https://thelearningalgorithm.ai/blogs/build-ai-social-media-video-maker-nextjs-google-veo-sneaker-ad)

## 🚀 Features

- **AI-Powered Video Generation**: Transform text descriptions into engaging videos using Google's Gemini AI
- **Modern Web Interface**: Clean, responsive UI built with Next.js, React, and Tailwind CSS
- **Video Management**: Browse, preview, and manage your generated videos
- **Publishing System**: Publish videos directly from the application
- **Real-time Feedback**: Toast notifications for seamless user experience

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, DaisyUI
- **AI Integration**: Google Gemini AI (@google/genai)
- **Notifications**: React Hot Toast
- **Development**: ESLint, Turbopack

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js 18+ installed
- A Google Gemini AI API key
- npm, yarn, pnpm, or bun package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone -b completed https://github.com/The-Learning-Algorithm/ai-video-maker
cd ai-video-maker
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory and add your Google Gemini API key:

```env
GOOGLE_GEMINI_API_KEY=your_api_key_here
```

To get a Google Gemini API key:
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key to your `.env.local` file

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📖 Usage

### Generating Videos

1. **Navigate to the Video Generator tab**
2. **Enter a detailed text prompt** describing the video you want to create
3. **Click "Generate"** and wait for the AI to process your request
4. **Review the generated video** in the Review and Publish tab

### Publishing Videos

1. **Switch to the Review and Publish tab**
2. **Preview your generated videos**
3. **Click "Publish Video"** to make your video available

## 🏗️ Project Structure

```
ai-video-maker/
├── app/
│   ├── api/                 # API routes
│   │   ├── publish-video/   # Video publishing endpoint
│   │   ├── video-maker/     # Video generation endpoint
│   │   └── videos/          # Video listing endpoint
│   ├── components/          # React components
│   │   └── Dashboard.tsx    # Main dashboard component
│   ├── utils/               # Utility functions
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── lib/
│   └── gemini.ts            # Gemini AI integration
├── public/
│   └── videos/              # Generated video storage
└── package.json
```

## 🔧 API Endpoints

- `POST /api/video-maker` - Generate a new video from text prompt
- `GET /api/videos` - Retrieve list of generated videos
- `POST /api/publish-video` - Publish a video

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy your AI Video Maker is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to GitHub
2. Import your project to Vercel
3. Add your `GOOGLE_GEMINI_API_KEY` environment variable
4. Deploy!

### Other Deployment Options

This Next.js application can be deployed on any platform that supports Node.js applications, including:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for providing the AI capabilities
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [DaisyUI](https://daisyui.com/) for the beautiful component library

## 📞 Support

If you encounter any issues or have questions, please:

1. Check the [Issues](https://github.com/your-username/ai-video-maker/issues) page
2. Create a new issue with detailed information about your problem
3. Include your Node.js version, package manager, and any error messages

---

Made with ❤️ using Next.js and Google Gemini AI
