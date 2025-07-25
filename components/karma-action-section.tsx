"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Upload } from "lucide-react"
import { useState } from "react"

const karmaRules = [
  { value: "donated-clothes", label: "Donated clothes to charity", points: 500 },
  { value: "used-plastic", label: "Used plastic bottles (negative karma)", points: -100 },
  { value: "helped-elderly", label: "Helped elderly person", points: 300 },
  { value: "planted-tree", label: "Planted a tree", points: 800 },
  { value: "volunteered", label: "Volunteered at local organization", points: 600 },
  { value: "recycled", label: "Recycled waste properly", points: 200 },
  { value: "meditation", label: "Completed 30-min meditation", points: 150 },
  { value: "donated-food", label: "Donated food to food bank", points: 400 },
]

export function KarmaActionSection() {
  const [selectedRule, setSelectedRule] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Submitting karma action:", { selectedRule, description, image })
  }

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5 animate-pulse"
        style={{ animationDuration: "4s" }}
      ></div>
      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-pink-400" />
          Perform a Karma Action
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="karma-rule" className="text-purple-200">
              Select Action
            </Label>
            <Select value={selectedRule} onValueChange={setSelectedRule}>
              <SelectTrigger className="bg-white/10 border-purple-400/30 text-white">
                <SelectValue placeholder="Choose a karma action..." />
              </SelectTrigger>
              <SelectContent className="bg-purple-900 border-purple-400/30">
                {karmaRules.map((rule) => (
                  <SelectItem key={rule.value} value={rule.value} className="text-white hover:bg-purple-800">
                    <div className="flex justify-between items-center w-full">
                      <span>{rule.label}</span>
                      <span className={`ml-2 font-semibold ${rule.points > 0 ? "text-green-400" : "text-red-400"}`}>
                        {rule.points > 0 ? "+" : ""}
                        {rule.points}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="description" className="text-purple-200">
              Description (Optional)
            </Label>
            <Textarea
              id="description"
              placeholder="Tell us more about your action..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-white/10 border-purple-400/30 text-white placeholder:text-purple-300"
            />
          </div>

          <div>
            <Label htmlFor="proof-image" className="text-purple-200">
              Upload Proof Image
            </Label>
            <div className="mt-2">
              <Input
                id="proof-image"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="bg-white/10 border-purple-400/30 text-white file:bg-purple-600 file:text-white file:border-0 file:rounded-md file:px-3 file:py-1"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
            disabled={!selectedRule}
          >
            <Upload className="w-4 h-4 mr-2" />
            Submit for Review
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
