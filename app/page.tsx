
"use client"

import { useState } from "react"
import TShirt from "./components/tshirt"
import TShirt2 from "./components/tshirt2"

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
  const [selectedColor1, setSelectedColor1] = useState(colors[0].value)
  const [selectedColor2, setSelectedColor2] = useState(colors[2].value)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 p-8">
      <h1 className="text-3xl font-bold">T-Shirt Color Changer</h1>

      {/* First T-Shirt */}
      <div className="flex flex-col items-center gap-8">
        <TShirt color={selectedColor1} width={300} height={300} />

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold">T-Shirt 1 - Choose a Color</h2>
          <div className="grid grid-cols-4 gap-4">
            {colors.map((color) => (
              <button
                key={`t1-${color.value}`}
                onClick={() => setSelectedColor1(color.value)}
                className={`w-16 h-16 rounded-lg border-2 transition-all hover:scale-110 ${
                  selectedColor1 === color.value
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

      {/* Horizontal Separator */}
      <div className="w-full max-w-2xl border-t border-gray-300 my-4" />

      {/* Second T-Shirt */}
      <div className="flex flex-col items-center gap-8">
        <TShirt2 color={selectedColor2} width={300} height={300} />

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold">T-Shirt 2 - Choose a Color</h2>
          <div className="grid grid-cols-4 gap-4">
            {colors.map((color) => (
              <button
                key={`t2-${color.value}`}
                onClick={() => setSelectedColor2(color.value)}
                className={`w-16 h-16 rounded-lg border-2 transition-all hover:scale-110 ${
                  selectedColor2 === color.value
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
    </div>
  )
}
