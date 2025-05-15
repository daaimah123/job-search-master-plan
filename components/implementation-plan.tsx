"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"

interface Task {
  name: string
  completed: boolean
}

interface Milestone {
  title: string
  description: string
  deadline: string
  tasks: Task[]
}

interface ImplementationPlanProps {
  title: string
  description: string
  startDate: string
  milestones: Milestone[]
}

export default function ImplementationPlan({ title, description, startDate, milestones }: ImplementationPlanProps) {
  
  const [tasks, setTasks] = useState<Record<string, Record<string, boolean>>>(
    milestones.reduce(
      (acc, milestone, mIndex) => {
        acc[mIndex] = milestone.tasks.reduce(
          (taskAcc, task, tIndex) => {
            taskAcc[tIndex] = task.completed
            return taskAcc
          },
          {} as Record<string, boolean>,
        )
        return acc
      },
      {} as Record<string, Record<string, boolean>>,
    ),
  )

  const toggleTask = (mIndex: number, tIndex: number) => {
    setTasks((prev) => {
      const newTasks = { ...prev }
      newTasks[mIndex] = { ...newTasks[mIndex] }
      newTasks[mIndex][tIndex] = !newTasks[mIndex][tIndex]
      return newTasks
    })
  }

  const calculateMilestoneProgress = (mIndex: number) => {
    const totalTasks = Object.keys(tasks[mIndex]).length
    const completedTasks = Object.values(tasks[mIndex]).filter(Boolean).length
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0
  }

  const calculateOverallProgress = () => {
    let totalTasks = 0
    let completedTasks = 0

    Object.values(tasks).forEach((milestone) => {
      totalTasks += Object.keys(milestone).length
      completedTasks += Object.values(milestone).filter(Boolean).length
    })

    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <div>{title} IMPLEMENTATION PLAN</div>
            <div className="text-sm font-normal text-gray-500 flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              Starting: {startDate}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-700">{description}</p>

          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Overall Progress</span>
              <span>{Math.round(calculateOverallProgress())}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${calculateOverallProgress()}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, mIndex) => (
              <div key={mIndex} className="border-t pt-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                  <div className="text-sm text-gray-500 whitespace-nowrap">Due: {milestone.deadline}</div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{Math.round(calculateMilestoneProgress(mIndex))}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${calculateMilestoneProgress(mIndex)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  {milestone.tasks.map((task, tIndex) => (
                    <div
                      key={tIndex}
                      className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer"
                      onClick={() => toggleTask(mIndex, tIndex)}
                    >
                      <input
                        type="checkbox"
                        checked={tasks[mIndex][tIndex] || false}
                        onChange={() => {}}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        aria-label={`Mark task "${task.name}" as ${tasks[mIndex][tIndex] ? "incomplete" : "complete"}`}
                      />
                      <span className={tasks[mIndex][tIndex] ? "line-through text-gray-500" : ""}>{task.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
