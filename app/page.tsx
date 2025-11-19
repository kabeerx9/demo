
"use client"

import { useState } from "react"
import TShirt from "./components/tshirt"

const colors = [
  { name: "Gray", value: "#b0b0b0" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Red", value: "#ef4444" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Green", value: "#22c55e" },
  { name: "Navy", value: "#1e3a8a" },
  { name: "Maroon", value: "#991b1b" },
]

export default function Home() {
  const [selectedColor, setSelectedColor] = useState(colors[0].value)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-3xl font-bold">T-Shirt Color Changer</h1>

      <TShirt color={selectedColor} width={300} height={300} />

      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold">Choose a Color</h2>
        <div className="grid grid-cols-4 gap-4">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => setSelectedColor(color.value)}
              className={`w-16 h-16 rounded-lg border-2 transition-all hover:scale-110 ${
                selectedColor === color.value
                  ? "border-black ring-2 ring-offset-2 ring-black"
                  : "border-gray-300 hover:border-gray-500"
              }`}
              style={{ backgroundColor: color.value }}
              aria-label={`Select ${color.name} color`}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
