import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ImplementationPlan from "@/components/implementation-plan"
import FuturePathCard from "@/components/future-path-card"

export default function FuturePage() {
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
        <h1 className="text-3xl font-bold mb-2">THE FUTURE</h1>
        <p className="text-gray-600">
          Exploring strategic career pathways that could follow your role as Technical Curriculum Developer, Program
          Manager at Intuit.
        </p>
      </div>

      <Tabs defaultValue="career-paths">
        <TabsList className="mb-6">
          <TabsTrigger value="career-paths">Career Paths</TabsTrigger>
          <TabsTrigger value="skill-development">Skill Development</TabsTrigger>
          <TabsTrigger value="implementation-plan">Implementation Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="career-paths">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <FuturePathCard
              title="Technical Learning & Development Leader"
              description="Your ability to create comprehensive curriculum frameworks and manage educational programs positions you well for a leadership role focused on technical learning and development strategy."
              targetOrganizations={[
                "Major technology companies (Intuit, Microsoft, Apple)",
                "Financial technology organizations (PayPal, Square)",
                "Educational technology organizations (Coursera, Udacity)",
                "Technical training providers (General Assembly, Pluralsight)",
                "Corporate learning and development departments",
              ]}
              positioning={[
                "Emphasize your experience developing comprehensive curriculum frameworks",
                "Highlight your ability to measure and optimize educational effectiveness",
                "Showcase your track record of successful program management",
                "Feature your approach to standardizing educational approaches while maintaining flexibility",
              ]}
            />

            <FuturePathCard
              title="Learning Experience Designer"
              description="Your skills in curriculum development and technical translation could transition well into roles focused on designing comprehensive learning experiences for technical content."
              targetOrganizations={[]}
              positioning={[]}
              transitionPlan={[
                "Step 1: Develop deeper expertise in learning experience design methodologies",
                "Step 2: Build portfolio of learning experience designs for technical content",
                "Step 3: Create examples of innovative approaches to teaching complex technical concepts",
                "Step 4: Seek opportunities to lead learning experience design projects within current roles",
                "Step 5: Position for roles with increasing learning design responsibility",
              ]}
            />

            <FuturePathCard
              title="Technical Education Product Manager"
              description="Your experience with both technical implementation and educational program management positions you well for roles focused on developing educational technology products."
              targetOrganizations={[
                "Educational technology companies",
                "Product teams within established technology companies",
                "Technical training platforms",
                "Corporate learning technology providers",
                "Organizations specializing in learning management systems",
              ]}
              positioning={[
                "Curriculum development and standardization",
                "Program management and measurement",
                "Technical implementation and optimization",
                "Cross-functional collaboration",
                "User-centered design thinking",
                "Data-driven decision making",
              ]}
              entryPoints={[
                "Learning Technology Product Manager",
                "Technical Education Platform Manager",
                "Curriculum Product Owner",
                "Learning Experience Platform Manager",
                "Educational Technology Strategist",
              ]}
            />

            <FuturePathCard
              title="Inclusive Technical Education Advocate"
              description="Your experience creating technical education programs for underrepresented groups could transition into a role focused on making technology education more accessible and inclusive."
              targetOrganizations={[]}
              positioning={[]}
              exampleRole={{
                org: "Major technology company or industry association",
                focus:
                  "Developing programs and initiatives that increase diversity in technology through educational pathways",
                translation: [
                  "Deep understanding of barriers facing underrepresented groups in technology",
                  "Experience creating technical education programs for diverse audiences",
                  "Track record of placing underrepresented individuals in technical roles",
                  "Ability to translate between technical and non-technical stakeholders",
                  "Authentic perspective on technology access challenges",
                ],
                start:
                  "Your work with technical curriculum development could specifically focus on creating inclusive learning pathways, building a foundation for broader advocacy work.",
              }}
            />

            <FuturePathCard
              title="Technical Education Innovation Leader"
              description="Your experience with both educational program management and technical implementation positions you well for roles focused on innovating in technical education."
              targetOrganizations={[
                "Innovation labs within established technology companies",
                "Educational technology startups",
                "Research institutions focused on technical education",
                "Organizations specializing in emerging educational technologies",
                "Technical training providers seeking to differentiate through innovation",
              ]}
              positioning={[]}
              roleFocus={[
                "Leading innovation in technical education approaches",
                "Integrating emerging technologies into learning experiences",
                "Developing new models for technical skills development",
                "Creating measurement frameworks for educational innovation",
                "Building partnerships between educational and technical organizations",
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="skill-development">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Skill Development Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Expertise</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Deepen knowledge of Intuit's product ecosystem and technical architecture</li>
                    <li>Develop expertise in emerging technologies relevant to financial software</li>
                    <li>Build proficiency in learning experience design tools and methodologies</li>
                    <li>Enhance data analysis skills for measuring educational effectiveness</li>
                    <li>Stay current with advances in technical education approaches</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Leadership Development</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Enhance project management capabilities for complex educational initiatives</li>
                    <li>Develop skills in leading cross-functional teams</li>
                    <li>Build expertise in change management for educational transformations</li>
                    <li>Improve strategic planning and resource allocation abilities</li>
                    <li>Strengthen stakeholder management and influence skills</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Industry Knowledge</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Deepen understanding of financial technology industry trends</li>
                    <li>Build knowledge of regulatory requirements affecting financial education</li>
                    <li>Develop awareness of competitive landscape in technical education</li>
                    <li>Stay current with research on adult learning in technical domains</li>
                    <li>Expand network within technical education community</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="implementation-plan">
          <ImplementationPlan
            title="FUTURE PATHWAYS DEVELOPMENT"
            description="Preparing for future career opportunities while focusing on your current target role."
            startDate="May 5, 2025"
            milestones={[
              {
                title: "Path Analysis",
                description: "Analyze potential future career paths in more detail",
                deadline: "May 20, 2025",
                tasks: [
                  { name: "Research salary ranges and growth potential for each path", completed: false },
                  { name: "Identify key skills required for each pathway", completed: false },
                  { name: "Map current skills to future requirements", completed: false },
                  { name: "Prioritize paths based on alignment with values and goals", completed: false },
                ],
              },
              {
                title: "Skill Development Planning",
                description: "Create plan for developing skills needed for future pathways",
                deadline: "June 5, 2025",
                tasks: [
                  { name: "Identify skill gaps for top priority pathways", completed: false },
                  { name: "Research learning resources for closing gaps", completed: false },
                  { name: "Create timeline for skill development alongside current role", completed: false },
                  { name: "Identify opportunities in target role that support future growth", completed: false },
                ],
              },
              {
                title: "Network Development",
                description: "Build relationships with professionals in target future roles",
                deadline: "June 20, 2025",
                tasks: [
                  { name: "Identify 3-5 professionals in each pathway for informational interviews", completed: false },
                  { name: "Join professional communities related to future pathways", completed: false },
                  { name: "Create authentic outreach plan for building relationships", completed: false },
                  { name: "Schedule regular network maintenance activities", completed: false },
                ],
              },
              {
                title: "Long-term Planning",
                description: "Create 5-year plan that bridges current target role to future pathway",
                deadline: "July 5, 2025",
                tasks: [
                  { name: "Map specific achievements needed in Technical Curriculum Developer role", completed: false },
                  { name: "Identify key transition points and decision criteria", completed: false },
                  { name: "Create timeline with specific milestones and checkpoints", completed: false },
                  { name: "Develop metric framework for evaluating progress", completed: false },
                ],
              },
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
