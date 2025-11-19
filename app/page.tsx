
"use client"

import { useState } from "react"
import { HexColorPicker } from "react-colorful"
import TShirt from "./components/tshirt"
import TShirt2 from "./components/tshirt2"

export default function Home() {
  const [selectedColor1, setSelectedColor1] = useState("#b0b0b0")
  const [selectedColor2, setSelectedColor2] = useState("#ffffff")

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 p-8">
      <h1 className="text-3xl font-bold">T-Shirt Color Changer</h1>

      {/* First T-Shirt */}
      <div className="flex flex-col items-center gap-8">
        <TShirt color={selectedColor1} width={300} height={300} />

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold">T-Shirt 1 - Choose a Color</h2>
          <HexColorPicker color={selectedColor1} onChange={setSelectedColor1} />
          <div className="text-sm text-gray-600 font-mono">{selectedColor1}</div>
        </div>
      </div>

      {/* Horizontal Separator */}
      <div className="w-full max-w-2xl border-t border-gray-300 my-4" />

      {/* Second T-Shirt */}
      <div className="flex flex-col items-center gap-8">
        <TShirt2 color={selectedColor2} width={300} height={300} />

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold">T-Shirt 2 - Choose a Color</h2>
          <HexColorPicker color={selectedColor2} onChange={setSelectedColor2} />
          <div className="text-sm text-gray-600 font-mono">{selectedColor2}</div>
        </div>
      </div>
    </div>
  )
}
