interface ChakraVisualizationProps {
  auraPoints: number
}

export function ChakraVisualization({ auraPoints }: ChakraVisualizationProps) {
  // Calculate chakra strength based on aura points
  const getChakraStrength = (points: number) => {
    if (points >= 10000) return 100
    if (points >= 7500) return 85
    if (points >= 5000) return 70
    if (points >= 2500) return 55
    if (points >= 1000) return 40
    return 25
  }

  const strength = getChakraStrength(auraPoints)

  const chakras = [
    { name: "Root", color: "#FF0000", angle: 0 },
    { name: "Sacral", color: "#FF8C00", angle: 51.4 },
    { name: "Solar Plexus", color: "#FFD700", angle: 102.8 },
    { name: "Heart", color: "#00FF00", angle: 154.2 },
    { name: "Throat", color: "#00BFFF", angle: 205.6 },
    { name: "Third Eye", color: "#4B0082", angle: 257 },
    { name: "Crown", color: "#9400D3", angle: 308.4 },
  ]

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-48 h-48">
        <svg width="192" height="192" className="transform -rotate-90">
          {/* Background circle */}
          <circle cx="96" cy="96" r="80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />

          {/* Chakra segments */}
          {chakras.map((chakra, index) => {
            const circumference = 2 * Math.PI * 80
            const segmentLength = circumference / 7
            const offset = (circumference - segmentLength * (strength / 100)) / 2 + index * segmentLength

            return (
              <circle
                key={chakra.name}
                cx="96"
                cy="96"
                r="80"
                fill="none"
                stroke={chakra.color}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${segmentLength * (strength / 100)} ${circumference}`}
                strokeDashoffset={-offset}
                opacity={strength / 100}
                className="transition-all duration-1000"
              />
            )
          })}
        </svg>

        {/* Center glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 opacity-60 animate-pulse"
            style={{ filter: "blur(12px)", animationDuration: "2s" }}
          />
          <div
            className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-40 animate-pulse"
            style={{ filter: "blur(8px)", animationDuration: "3s", animationDelay: "1s" }}
          />
          <div
            className="absolute w-8 h-8 rounded-full bg-white opacity-90 animate-pulse"
            style={{ animationDuration: "1.5s" }}
          />
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-purple-200">Chakra Alignment</p>
        <p className="text-lg font-semibold text-yellow-400">{strength}% Balanced</p>
      </div>
    </div>
  )
}
