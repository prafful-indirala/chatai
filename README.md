# AI Chat Application

A modern chat application built with Next.js that enables real-time conversations with AI using Ollama. The application features a clean, responsive interface and supports streaming responses for a smooth user experience.

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **AI Integration**: Vercel AI SDK, Ollama AI Provider
- **Styling**: TailwindCSS with custom animations
- **State Management**: React Hooks
- **Development Tools**: ESLint, TypeScript

## Features

- 🤖 Real-time AI chat interface
- 💨 Streaming responses with loading indicators
- 🎨 Modern, responsive UI with shadcn/ui components
- 🌓 Clean message bubbles design
- ⚡ Error handling and retry capabilities
- 📱 Mobile-friendly design
- 🔄 Auto-scroll to latest messages

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- Ollama AI running locally

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd chat-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Make sure Ollama is running locally on port 11434 (default port)

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Open the application in your web browser
2. Type your message in the input field at the bottom
3. Press "Send" or hit Enter to submit your message
4. Wait for the AI's response, which will stream in real-time
5. Continue the conversation as desired

## Project Structure

```
chat-app/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── chat/         # Chat API endpoint
│   ├── components/       # React components
│   └── page.tsx         # Main page
├── components/           # Shared UI components
│   └── ui/              # shadcn/ui components
├── public/              # Static files
└── styles/              # Global styles
```

## Development

To work on this project:

1. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit them:
```bash
git add .
git commit -m "Description of changes"
```

3. Push your changes and create a pull request:
```bash
git push origin feature/your-feature-name
```

## Environment Variables

No environment variables are required by default as the application uses a local Ollama instance. However, if you want to use a different Ollama endpoint, you can modify the baseURL in `app/api/chat/route.ts`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).