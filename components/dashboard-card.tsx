"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface DashboardCardProps {
  title: string
  description: string
  icon: ReactNode
  progress: number
  link: string
}

export default function DashboardCard({ title, description, icon, progress, link }: DashboardCardProps) {
  return (
    <Link href={link} className="block h-full">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="cursor-pointer h-full"
      >
        <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-2 rounded-full bg-gray-100">{icon}</div>
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
          <p className="text-gray-600 mb-4 text-sm">{description}</p>
          <div className="mt-auto">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Completion</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </Card>
      </motion.div>
    </Link>
  )
}
