"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FuturePathCard from "@/components/future-path-card"
import ImplementationPlan from "@/components/implementation-plan"

export default function DatadogFuturePage() {
  const [activeTab, setActiveTab] = useState("career-paths")

  const careerPathData = [
    {
      title: "Technical Solutions Engineer → Senior TSE",
      timeframe: "1-2 years",
      description:
        "Master the Datadog platform, develop deep technical expertise in observability, and become a trusted advisor for complex customer implementations.",
      keyMetrics: [
        "Achieve 95%+ customer satisfaction ratings",
        "Complete advanced certifications in Datadog products",
        "Develop expertise in at least 2 specialized areas (e.g., APM, Logs)",
      ],
    },
    {
      title: "Senior TSE → Lead TSE / Technical Account Manager",
      timeframe: "2-3 years",
      description:
        "Take on leadership responsibilities, mentor junior team members, and manage strategic customer relationships.",
      keyMetrics: [
        "Lead 3+ complex enterprise implementations",
        "Mentor 2-3 junior team members",
        "Develop and deliver internal training programs",
      ],
    },
    {
      title: "Lead TSE → Solutions Architect / Technical Product Manager",
      timeframe: "3-5 years",
      description:
        "Transition to a strategic role designing solutions architecture or influencing product roadmap based on customer needs.",
      keyMetrics: [
        "Design reference architectures for enterprise implementations",
        "Contribute to product roadmap with 3+ implemented features",
        "Present at industry conferences or Datadog events",
      ],
    },
  ]

  const skillDevelopmentData = [
    {
      title: "Technical Expertise",
      timeframe: "Ongoing",
      description:
        "Continuously deepen knowledge of Datadog's platform, cloud technologies, and observability best practices.",
      keyMetrics: [
        "Complete all Datadog certifications",
        "Gain expertise in 3+ cloud platforms (AWS, Azure, GCP)",
        "Develop proficiency in relevant programming languages (Python, Go)",
      ],
    },
    {
      title: "Customer Success Skills",
      timeframe: "First 6 months",
      description:
        "Enhance ability to translate technical concepts, manage customer relationships, and drive successful implementations.",
      keyMetrics: [
        "Develop consultative selling techniques",
        "Master project management methodologies",
        "Improve technical presentation skills",
      ],
    },
    {
      title: "Industry Knowledge",
      timeframe: "Ongoing",
      description:
        "Build expertise in specific industries and use cases to better serve customers and identify growth opportunities.",
      keyMetrics: [
        "Become subject matter expert in 2+ industries",
        "Understand competitive landscape and positioning",
        "Stay current with observability and DevOps trends",
      ],
    },
  ]

  const implementationSteps = [
    {
      title: "Technical Mastery",
      description: "Develop deep expertise in Datadog's platform and observability concepts",
      tasks: [
        "Complete all Datadog certification paths within 3 months",
        "Shadow senior team members on complex implementations",
        "Build personal lab environment for testing and learning",
        "Contribute to internal knowledge base with 1 article per month",
      ],
      timeline: "Months 1-6",
    },
    {
      title: "Customer Success Focus",
      description: "Enhance ability to drive successful customer outcomes",
      tasks: [
        "Take ownership of 3-5 customer accounts",
        "Develop implementation playbooks for common scenarios",
        "Request feedback after each customer engagement",
        "Identify and document best practices from successful implementations",
      ],
      timeline: "Months 3-9",
    },
    {
      title: "Leadership Development",
      description: "Build skills needed for future leadership roles",
      tasks: [
        "Volunteer to mentor new team members",
        "Lead internal training sessions on areas of expertise",
        "Participate in cross-functional projects",
        "Seek opportunities to present at team meetings and customer events",
      ],
      timeline: "Months 6-12",
    },
    {
      title: "Strategic Growth",
      description: "Position yourself for advancement opportunities",
      tasks: [
        "Identify and pursue specialized expertise area",
        "Build relationships with product and engineering teams",
        "Contribute to product feedback and roadmap discussions",
        "Document impact and achievements for performance reviews",
      ],
      timeline: "Months 9-18",
    },
  ]

  return (
    <div className="container mx-auto py-6 space-y-6">
      <Card>
        <CardHeader className="bg-blue-50 border-b border-blue-100">
          <CardTitle className="text-2xl font-bold text-blue-800">Future Career Path at Datadog</CardTitle>
          <CardDescription>
            Strategic planning for your career progression and skill development at Datadog
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="career-paths">Career Paths</TabsTrigger>
              <TabsTrigger value="skill-development">Skill Development</TabsTrigger>
              <TabsTrigger value="implementation-plan">Implementation Plan</TabsTrigger>
            </TabsList>

            <TabsContent value="career-paths" className="pt-4 space-y-4">
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                {careerPathData.map((path, index) => (
                  <FuturePathCard
                    key={index}
                    title={path.title}
                    timeframe={path.timeframe}
                    description={path.description}
                    keyMetrics={path.keyMetrics}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="skill-development" className="pt-4 space-y-4">
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                {skillDevelopmentData.map((skill, index) => (
                  <FuturePathCard
                    key={index}
                    title={skill.title}
                    timeframe={skill.timeframe}
                    description={skill.description}
                    keyMetrics={skill.keyMetrics}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="implementation-plan" className="pt-4">
              <ImplementationPlan steps={implementationSteps} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
