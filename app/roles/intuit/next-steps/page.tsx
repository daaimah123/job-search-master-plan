import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import ImplementationPlan from "@/components/implementation-plan"

export default function NextStepsPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <Link href="/roles/intuit" passHref>
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">NEXT STEPS: STRENGTHENING YOUR APPLICATION</h1>
        <p className="text-gray-600">
          Specific recommendations to further strengthen your application and maximize your competitive edge for the
          Technical Curriculum Developer, Program Manager role at Intuit.
        </p>
      </div>

      <Tabs defaultValue="recommendations">
        <TabsList className="mb-6">
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="interview-prep">Interview Prep</TabsTrigger>
          <TabsTrigger value="implementation-plan">Implementation Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="recommendations">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Gather Additional Quantifiable Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Calculate skill growth metrics from before and after your educational programs</li>
                  <li>Gather additional data on graduate performance at Sony and other companies</li>
                  <li>Document specific improvements from your curriculum standardization efforts</li>
                  <li>Track completion rates and learning outcomes from your virtual course transition</li>
                  <li>Measure knowledge retention rates from your integrated curriculum approach</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Enhance Your Intuit-Specific Knowledge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Research Intuit's products (QuickBooks, TurboTax, Mint) and technical stack</li>
                  <li>Explore Intuit's learning resources and documentation</li>
                  <li>Identify Intuit's specific challenges in technical education</li>
                  <li>Understand Intuit's approach to diversity and inclusion in technical education</li>
                  <li>Research Intuit's measurement frameworks for educational effectiveness</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Demonstrate Your Curriculum Development Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Document your systematic approach to curriculum development</li>
                  <li>Create a brief case study showing your curriculum standardization process</li>
                  <li>Prepare to discuss how you determine appropriate learning objectives for different audiences</li>
                  <li>Create a framework showing your methodology for curriculum development</li>
                  <li>Gather examples of curriculum you've developed that demonstrate your approach</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Strengthen Your Program Management Credentials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Document your approach to managing educational programs</li>
                  <li>Gather testimonials about your program management from participants and stakeholders</li>
                  <li>Create a brief case study showing how you've measured and optimized program effectiveness</li>
                  <li>Prepare to discuss how you balance competing priorities in program management</li>
                  <li>Develop a framework showing your methodology for program evaluation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Develop Your Technical Education Perspective
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Research trends in technical education and curriculum development</li>
                  <li>Connect with professionals in technical education roles at Intuit or similar companies</li>
                  <li>
                    Document examples of how you've effectively translated technical concepts for different audiences
                  </li>
                  <li>Prepare to discuss how emerging technologies are changing technical education</li>
                  <li>Create a brief framework showing your approach to inclusive technical education</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Create Artifacts That Demonstrate Your Edge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Develop a one-page visual framework illustrating your approach to curriculum development</li>
                  <li>Create a sample curriculum outline for an Intuit product feature</li>
                  <li>
                    Draft a brief case study focusing specifically on how you've measured educational effectiveness
                  </li>
                  <li>Create a process diagram showing your approach to program management</li>
                  <li>Develop a framework for inclusive technical education that demonstrates your approach</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Prepare for Specific Interview Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Be ready to provide compelling responses to questions such as:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    "How would you approach standardizing curriculum across different technical education programs at
                    Intuit?"
                  </li>
                  <li>"What is your process for measuring the effectiveness of educational initiatives?"</li>
                  <li>
                    "How would you balance technical depth with accessibility in curriculum development for Intuit's
                    products?"
                  </li>
                  <li>"What metrics would you prioritize to measure the success of technical education programs?"</li>
                  <li>
                    "How would you collaborate with subject matter experts and instructional designers in curriculum
                    development?"
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="interview-prep">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Interview Preparation Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Knowledge Preparation</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Research Intuit's product ecosystem and technical architecture</li>
                    <li>Understand the technical challenges in financial software education</li>
                    <li>Prepare examples of how you've taught complex technical concepts</li>
                    <li>Review current trends in technical education methodologies</li>
                    <li>Practice explaining your curriculum development approach</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Behavioral Interview Preparation</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Develop STAR format responses for common behavioral questions</li>
                    <li>Prepare examples demonstrating your curriculum development process</li>
                    <li>Practice responses about handling challenging educational situations</li>
                    <li>Prepare stories that highlight your cross-functional collaboration skills</li>
                    <li>Develop examples showing your data-driven approach to education</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Mock Interview Practice</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Schedule practice interviews with professionals in technical education</li>
                    <li>Record yourself answering common interview questions</li>
                    <li>Practice virtual interview setup and presentation</li>
                    <li>Seek feedback on your communication clarity and technical accuracy</li>
                    <li>Refine responses based on feedback received</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="implementation-plan">
          <ImplementationPlan
            title="APPLICATION STRENGTHENING"
            description="Implementing specific actions to strengthen your application for the Technical Curriculum Developer role."
            startDate="May 5, 2025"
            milestones={[
              {
                title: "Metrics Enhancement",
                description: "Gather and document additional quantifiable metrics",
                deadline: "May 16, 2025",
                tasks: [
                  { name: "Analyze Techtonica participant skill growth data", completed: false },
                  { name: "Contact Sony graduates for performance metrics", completed: false },
                  { name: "Document curriculum standardization improvements", completed: false },
                  { name: "Calculate virtual course completion rates", completed: false },
                ],
              },
              {
                title: "Intuit-Specific Research",
                description: "Deepen your knowledge of Intuit's products and technical education",
                deadline: "May 23, 2025",
                tasks: [
                  { name: "Research QuickBooks architecture and development", completed: false },
                  { name: "Explore Intuit's developer documentation", completed: false },
                  { name: "Identify technical education challenges from job postings", completed: false },
                  { name: "Review Intuit's diversity and inclusion initiatives", completed: false },
                ],
              },
              {
                title: "Expertise Documentation",
                description: "Create artifacts that demonstrate your expertise",
                deadline: "May 30, 2025",
                tasks: [
                  { name: "Develop curriculum development framework visual", completed: false },
                  { name: "Create program management methodology document", completed: false },
                  { name: "Outline sample curriculum for an Intuit product feature", completed: false },
                  { name: "Document inclusive technical education approach", completed: false },
                ],
              },
              {
                title: "Interview Preparation",
                description: "Prepare for specific technical curriculum development questions",
                deadline: "June 6, 2025",
                tasks: [
                  { name: "Develop responses to curriculum standardization questions", completed: false },
                  { name: "Practice explaining measurement frameworks", completed: false },
                  { name: "Prepare examples of balancing technical depth with accessibility", completed: false },
                  { name: "Document cross-functional collaboration approaches", completed: false },
                ],
              },
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
