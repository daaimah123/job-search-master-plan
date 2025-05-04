"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ImplementationPlan from "@/components/implementation-plan"
import { CheckCircle, Calendar, Users } from "lucide-react"

export default function DatadogNextStepsPage() {
  const [activeTab, setActiveTab] = useState("recommendations")

  const thirtyDayPlan = [
    {
      title: "Technical Onboarding",
      description: "Master Datadog's core platform and establish technical foundation",
      tasks: [
        "Complete all required onboarding training modules",
        "Set up personal Datadog environment for practice and experimentation",
        "Shadow 3-5 customer calls with experienced team members",
        "Complete core product certifications (Infrastructure, APM, Logs)",
      ],
      timeline: "Days 1-30",
    },
    {
      title: "Team Integration",
      description: "Build relationships with team members and understand processes",
      tasks: [
        "Schedule 1:1 meetings with all immediate team members",
        "Meet with cross-functional partners (Sales, Product, Engineering)",
        "Review internal knowledge base and documentation",
        "Participate actively in team meetings and discussions",
      ],
      timeline: "Days 1-30",
    },
    {
      title: "Customer Understanding",
      description: "Begin developing customer knowledge and engagement skills",
      tasks: [
        "Review profiles of key accounts you'll be supporting",
        "Learn about common customer use cases and challenges",
        "Practice explaining Datadog's value proposition for different personas",
        "Prepare questions for customer discovery conversations",
      ],
      timeline: "Days 15-30",
    },
  ]

  const sixtyDayPlan = [
    {
      title: "Technical Depth",
      description: "Deepen technical expertise and begin handling customer issues",
      tasks: [
        "Complete advanced product certifications",
        "Handle basic customer support cases independently",
        "Contribute to internal documentation or knowledge base",
        "Begin specializing in a specific product area or integration",
      ],
      timeline: "Days 31-60",
    },
    {
      title: "Customer Engagement",
      description: "Take increasing ownership of customer relationships",
      tasks: [
        "Lead portions of customer calls with supervision",
        "Develop implementation plans for straightforward use cases",
        "Gather and document customer feedback",
        "Practice discovery and needs assessment techniques",
      ],
      timeline: "Days 31-60",
    },
    {
      title: "Process Mastery",
      description: "Become proficient with internal tools and processes",
      tasks: [
        "Master internal systems for case management and documentation",
        "Understand escalation paths and when to use them",
        "Learn about product roadmap and feature request process",
        "Develop efficient troubleshooting workflows",
      ],
      timeline: "Days 31-60",
    },
  ]

  const ninetyDayPlan = [
    {
      title: "Independent Ownership",
      description: "Take full ownership of customer engagements",
      tasks: [
        "Independently manage customer implementations",
        "Lead customer calls and meetings without supervision",
        "Develop custom solutions for complex customer needs",
        "Begin mentoring newer team members",
      ],
      timeline: "Days 61-90",
    },
    {
      title: "Strategic Impact",
      description: "Begin contributing to team and company objectives",
      tasks: [
        "Identify opportunities for process improvements",
        "Contribute insights to product roadmap discussions",
        "Develop expertise in a strategic industry or use case",
        "Create reusable assets for the broader team",
      ],
      timeline: "Days 61-90",
    },
    {
      title: "Career Development",
      description: "Establish foundation for long-term success",
      tasks: [
        "Define 6-month and 1-year professional development goals",
        "Identify areas for continued learning and growth",
        "Build relationships with potential mentors",
        "Seek feedback and create improvement plan",
      ],
      timeline: "Days 61-90",
    },
  ]

  const interviewPrepSteps = [
    {
      title: "Technical Preparation",
      description: "Master the technical knowledge needed for interviews",
      tasks: [
        "Review Datadog's complete product portfolio and use cases",
        "Practice explaining technical concepts to different audiences",
        "Prepare for technical demonstrations of the platform",
        "Research common observability challenges and solutions",
      ],
      timeline: "1-2 weeks before interviews",
    },
    {
      title: "Company Research",
      description: "Develop deep understanding of Datadog",
      tasks: [
        "Study Datadog's history, mission, and values",
        "Research recent product announcements and company news",
        "Understand competitive landscape and differentiators",
        "Review quarterly earnings calls for business priorities",
      ],
      timeline: "1-2 weeks before interviews",
    },
    {
      title: "Behavioral Preparation",
      description: "Prepare compelling stories and examples",
      tasks: [
        "Develop STAR format responses for common questions",
        "Prepare examples demonstrating customer success focus",
        "Practice responses about handling technical challenges",
        "Prepare questions that demonstrate your research and interest",
      ],
      timeline: "Throughout interview process",
    },
    {
      title: "Mock Interviews",
      description: "Practice interview scenarios",
      tasks: [
        "Conduct mock technical interviews with peers",
        "Practice product demonstrations and explanations",
        "Record yourself answering questions to review delivery",
        "Seek feedback on communication clarity and technical accuracy",
      ],
      timeline: "1 week before interviews",
    },
  ]

  const implementationPlanSteps = [
    {
      title: "Pre-Interview Preparation",
      description: "Comprehensive preparation before interviews begin",
      tasks: [
        "Complete thorough research on Datadog's products and services",
        "Prepare specific examples demonstrating relevant skills",
        "Practice explaining complex technical concepts simply",
        "Research your interviewers on LinkedIn if names are provided",
      ],
      timeline: "1-2 weeks before interviews",
    },
    {
      title: "Interview Execution",
      description: "Strategies for success during interviews",
      tasks: [
        "Arrive 15 minutes early for in-person or log in 5 minutes early for virtual",
        "Bring prepared questions for each interviewer",
        "Take brief notes during conversations for follow-up",
        "Send personalized thank-you notes within 24 hours",
      ],
      timeline: "Interview day",
    },
    {
      title: "Post-Interview Follow-up",
      description: "Maintaining momentum after interviews",
      tasks: [
        "Send personalized thank-you emails highlighting specific conversation points",
        "Connect with interviewers on LinkedIn with personalized messages",
        "Prepare for potential follow-up interviews or assessments",
        "Reflect on areas for improvement for future interviews",
      ],
      timeline: "1-3 days after interviews",
    },
    {
      title: "Offer Negotiation",
      description: "Strategies for successful offer discussions",
      tasks: [
        "Research typical compensation for the role and location",
        "Prepare talking points about your unique value proposition",
        "Consider priorities beyond base salary (benefits, growth, etc.)",
        "Practice negotiation conversations with a friend or mentor",
      ],
      timeline: "After receiving offer",
    },
  ]

  return (
    <div className="container mx-auto py-6 space-y-6">
      <Card>
        <CardHeader className="bg-blue-50 border-b border-blue-100">
          <CardTitle className="text-2xl font-bold text-blue-800">Next Steps for Datadog Role</CardTitle>
          <CardDescription>Actionable plans for interview preparation and your first 90 days</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              <TabsTrigger value="interview-prep">Interview Preparation</TabsTrigger>
              <TabsTrigger value="implementation-plan">Implementation Plan</TabsTrigger>
            </TabsList>

            <TabsContent value="recommendations" className="pt-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold flex items-center text-blue-700 mb-4">
                    <CheckCircle className="mr-2 h-5 w-5" /> First 30 Days: Foundation Building
                  </h3>
                  <ImplementationPlan steps={thirtyDayPlan} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold flex items-center text-blue-700 mb-4">
                    <Calendar className="mr-2 h-5 w-5" /> Days 31-60: Developing Expertise
                  </h3>
                  <ImplementationPlan steps={sixtyDayPlan} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold flex items-center text-blue-700 mb-4">
                    <Users className="mr-2 h-5 w-5" /> Days 61-90: Demonstrating Impact
                  </h3>
                  <ImplementationPlan steps={ninetyDayPlan} />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="interview-prep" className="pt-4">
              <ImplementationPlan steps={interviewPrepSteps} />
            </TabsContent>

            <TabsContent value="implementation-plan" className="pt-4">
              <ImplementationPlan steps={implementationPlanSteps} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
