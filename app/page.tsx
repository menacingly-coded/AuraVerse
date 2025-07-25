import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Heart, Zap, Eye } from "lucide-react"
import Link from "next/link"
import { FloatingParticles } from "@/components/floating-particles"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FloatingParticles />
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 text-yellow-400 mr-3" />
            <h1 className="text-6xl font-bold text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] animate-pulse">
              AuraVerse
            </h1>
          </div>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Welcome to AuraVerse - Your spiritual journey to enlightenment through positive actions and energy alignment
          </p>

          <div className="flex gap-4 justify-center mb-16">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
              >
                Login
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-200 hover:bg-purple-800 px-8 py-3 text-lg bg-transparent"
              >
                Create Account
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 text-white">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-400">
                <Zap className="w-6 h-6 mr-2" />
                Aura Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-purple-200">
                Earn spiritual energy points by performing positive karma actions. Your aura points reflect your
                spiritual growth and positive impact on the world. The more good deeds you do, the stronger your aura
                becomes.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 text-white">
            <CardHeader>
              <CardTitle className="flex items-center text-pink-400">
                <Heart className="w-6 h-6 mr-2" />
                Chakra Alignment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-purple-200">
                Your chakra alignment is visualized through a beautiful color ring that changes based on your aura
                points. As you accumulate positive energy, your chakras become more balanced and vibrant, representing
                your spiritual harmony.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 text-white">
            <CardHeader>
              <CardTitle className="flex items-center text-green-400">
                <Eye className="w-6 h-6 mr-2" />
                Karma Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-purple-200">
                Submit proof of your positive actions - from donating clothes to environmental conservation. Each
                verified action increases your aura points and contributes to your spiritual journey.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 text-white">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-400">
                <Sparkles className="w-6 h-6 mr-2" />
                Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-purple-200">
                Use your aura points to boost your profile visibility and appear on community leaderboards. Connect with
                other spiritual seekers and inspire each other on your enlightenment journey.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
