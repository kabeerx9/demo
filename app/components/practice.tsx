"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const cards = [
    {
        id: 1,
        title: "Mountain Adventure",
        description: "Explore breathtaking peaks and pristine wilderness on an unforgettable journey through the mountains.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    },
    {
        id: 2,
        title: "Ocean Waves",
        description: "Experience the serene beauty of crystal-clear waters and gentle waves crashing on sandy shores.",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
    },
    {
        id: 3,
        title: "Forest Path",
        description: "Wander through ancient forests filled with towering trees and dappled sunlight filtering through.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    },
    {
        id: 4,
        title: "Desert Sunset",
        description: "Witness the stunning transformation of desert landscapes painted in hues of orange and red.",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
    },
    {
        id: 5,
        title: "City Lights",
        description: "Immerse yourself in the vibrant energy of urban landscapes illuminated by countless lights.",
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
    },
];

const Practice = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <div className="h-full w-full p-8 overflow-auto">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Layout Transitions</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card) => (
                        <motion.div
                            key={card.id}
                            layoutId={`card-${card.id}`}
                            onClick={() => setSelectedId(card.id)}
                            className="bg-card rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.div className="aspect-video relative overflow-hidden">
                                <motion.img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover"
                                    layoutId={`image-${card.id}`}
                                />
                            </motion.div>
                            <div className="p-4">
                                <motion.h3
                                    className="text-xl font-semibold mb-2"
                                    layoutId={`title-${card.id}`}
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    className="text-muted-foreground text-sm line-clamp-2"
                                    layoutId={`description-${card.id}`}
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
                        />
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-4 md:inset-16 z-50 flex items-center justify-center"
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                className="bg-card rounded-lg overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <motion.div className="aspect-video relative overflow-hidden">
                                    <motion.img
                                        src={cards.find((c) => c.id === selectedId)?.image}
                                        alt={cards.find((c) => c.id === selectedId)?.title}
                                        className="w-full h-full object-cover"
                                        layoutId={`image-${selectedId}`}
                                    />
                                </motion.div>
                                <div className="p-8 overflow-y-auto">
                                    <motion.h2
                                        className="text-4xl font-bold mb-4"
                                        layoutId={`title-${selectedId}`}
                                    >
                                        {cards.find((c) => c.id === selectedId)?.title}
                                    </motion.h2>
                                    <motion.p
                                        className="text-lg text-muted-foreground"
                                        layoutId={`description-${selectedId}`}
                                    >
                                        {cards.find((c) => c.id === selectedId)?.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Practice;
