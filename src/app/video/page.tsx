import { Button } from "@/components/ui/button"
import { MessageCircle, Settings, Video, VideoOff, SkipForward, Square } from "lucide-react"

export default function VideoChat() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Video className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-white">Uhmegle</h1>
        </div>
        <div className="text-sm text-gray-400">
          Video Chat
        </div>
      </header>

      {/* Main Video Area */}
      <div className="flex-1 relative p-4">
        {/* Stranger Video (Main) */}
        <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center relative min-h-[400px] md:min-h-[500px]">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Video className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-400 text-lg mb-2">Connecting to stranger...</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:0.4s]"></div>
            </div>
          </div>

          {/* User Video (Picture-in-Picture) */}
          <div className="absolute bottom-4 right-4 w-32 h-24 md:w-48 md:h-36 bg-gray-700 rounded-lg flex items-center justify-center border-2 border-gray-600">
            <div className="text-center">
              <VideoOff className="w-6 h-6 text-gray-400 mx-auto mb-1" />
              <p className="text-xs text-gray-400">You</p>
            </div>
          </div>

          {/* Connection Status */}
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Connecting...</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <div className="flex items-center justify-center space-x-4 flex-wrap gap-2 md:gap-4">
          {/* Skip/Next Button */}
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-full transition-all hover:scale-105"
          >
            <SkipForward className="w-5 h-5 mr-2" />
            Next
          </Button>

          {/* Stop Button */}
          <Button 
            size="lg" 
            variant="destructive" 
            className="px-6 py-3 rounded-full transition-all hover:scale-105"
          >
            <Square className="w-5 h-5 mr-2" />
            Stop
          </Button>

          {/* Text Chat Toggle */}
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-700 px-6 py-3 rounded-full transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat
          </Button>

          {/* Settings */}
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-700 px-4 py-3 rounded-full transition-all hover:scale-105"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            Click "Next" to connect with a random stranger
          </p>
        </div>
      </div>
    </div>
  )
}