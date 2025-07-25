"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Coins, TrendingUp, Users, Star } from "lucide-react"

const spendingOptions = [
  {
    id: "boost-profile",
    title: "Boost Profile Visibility",
    description: "Make your profile more visible to other users for 7 days",
    cost: 1000,
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "leaderboard",
    title: "Appear in Community Leaderboard",
    description: "Feature on the community leaderboard for 30 days",
    cost: 2500,
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "premium-badge",
    title: "Premium Spiritual Badge",
    description: "Get a special badge showing your spiritual dedication",
    cost: 5000,
    icon: Star,
    color: "from-yellow-500 to-orange-500",
  },
]

export function SpendPointsSection() {
  const userPoints = 10000

  const handlePurchase = (optionId: string, cost: number) => {
    if (userPoints >= cost) {
      console.log(`Purchasing ${optionId} for ${cost} points`)
      // Handle purchase logic
    }
  }

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 animate-pulse"
        style={{ animationDuration: "5s" }}
      ></div>
      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center gap-2">
          <Coins className="w-5 h-5 text-yellow-400" />
          Spend Aura Points
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 relative z-10">
        {spendingOptions.map((option) => {
          const canAfford = userPoints >= option.cost
          const IconComponent = option.icon

          return (
            <div key={option.id} className="p-4 rounded-lg bg-white/5 border border-purple-400/20">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${option.color}`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{option.title}</h3>
                    <p className="text-sm text-purple-200">{option.description}</p>
                  </div>
                </div>
                <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                  {option.cost.toLocaleString()} AP
                </Badge>
              </div>

              <Button
                onClick={() => handlePurchase(option.id, option.cost)}
                disabled={!canAfford}
                className={`w-full ${
                  canAfford ? `bg-gradient-to-r ${option.color} hover:opacity-90` : "bg-gray-600 cursor-not-allowed"
                }`}
              >
                {canAfford ? "Purchase" : "Insufficient Points"}
              </Button>
            </div>
          )
        })}

        <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30">
          <div className="flex items-center justify-between">
            <span className="text-purple-200">Your Current Balance:</span>
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold text-lg px-3 py-1">
              {userPoints.toLocaleString()} AP
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
