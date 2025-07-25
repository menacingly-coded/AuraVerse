import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import { ChakraVisualization } from "./chakra-visualization"

export function UserProfileCard() {
  const auraPoints = 10000
  const userName = "Spiritual Seeker"

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 animate-pulse"></div>
      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-400" />
          Your Spiritual Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-20 h-20 border-2 border-yellow-400">
              <AvatarImage src="/placeholder.svg?height=80&width=80" alt={userName} />
              <AvatarFallback className="bg-purple-600 text-white text-xl">SS</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-xl font-semibold">{userName}</h3>
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold">
                {auraPoints.toLocaleString()} Aura Points
              </Badge>
            </div>
          </div>

          <div className="flex-1">
            <ChakraVisualization auraPoints={auraPoints} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
