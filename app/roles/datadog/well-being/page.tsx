import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ImplementationPlan from "@/components/implementation-plan"

export default function WellBeingPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <Link href="/roles/datadog" passHref>
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">WELL-BEING</h1>
        <p className="text-gray-600">
          Sustaining your job search and maintaining personal balance throughout the process.
        </p>
      </div>

      <Tabs defaultValue="authentic">
        <TabsList className="mb-6">
          <TabsTrigger value="authentic">Authentic Expression</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge Integration</TabsTrigger>
          <TabsTrigger value="solitude">Meaningful Solitude</TabsTrigger>
          <TabsTrigger value="implementation">Implementation Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="authentic">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Authentic Expression & Meaning-Making (Enneagram 4)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                As a Four, you have a deep need for authentic self-expression and finding meaning in your experiences.
                Your creativity flourishes when you can express your unique perspective, which is a significant strength
                in your work. Continue to nurture your authentic identity during your job search through regular
                activities that honor your need for meaning and personal expression.
              </p>

              <h3 className="text-lg font-semibold mb-2">Practical Applications:</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Monday:</strong> 30-minute painting session focusing on observability concepts and how they
                  might be taught
                </li>
                <li>
                  <strong>Wednesday:</strong> Genealogy research session connecting to your heritage and broader context
                </li>
                <li>
                  <strong>Friday:</strong> Reading session with technical education literature that resonates with your
                  personal journey
                </li>
                <li>
                  <strong>Weekend:</strong> Gardening activity that connects you to self-sufficiency and agency
                </li>
              </ul>

              <p>
                When experiencing the seeking of what's missing common to Fours during job searching, these practices
                serve as reminders of your unique value and perspective in the technical education space.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Depth & Knowledge Integration (Enneagram 4/5 blend)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Your Four's desire for authentic expression combines with your Five's focus on knowledge and competence.
                Nurture this dynamic through practices that balance depth with practical application, especially in the
                context of Datadog's observability platform and technical education needs.
              </p>

              <h3 className="text-lg font-semibold mb-3">Try this exercise when facing job search challenges:</h3>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Set a timer for 20 minutes</li>
                  <li>Select a technical concept relevant to Datadog's observability platform</li>
                  <li>Explore this concept through your unique perspective and experiences</li>
                  <li>Connect it to your broader understanding of education and technology</li>
                  <li>
                    Identify one practical application that highlights your unique approach to technical education
                  </li>
                </ol>
              </div>

              <p>
                This practice helps you leverage your Four's depth and your Five's analytical thinking, transforming
                abstract concepts into expressions of your unique technical perspective that would benefit Datadog's
                engineering enablement initiatives.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="solitude">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Meaningful Solitude & Connection (Enneagram 5)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                As a Five with Four wing, you value both depth of knowledge and authentic expression. Balance these
                needs through practices that honor both solitude and meaningful connection during your Datadog
                application process.
              </p>

              <h3 className="text-lg font-semibold mb-3">Knowledge & Connection Balance:</h3>
              <p className="mb-2">Create a structured approach to research and outreach:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-medium mb-2">Focused Knowledge Building (Limited and Deep):</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Allocate specific time blocks for deep research into Datadog's observability platform and
                      educational approaches
                    </li>
                    <li>Set clear boundaries around research time to prevent endless exploration</li>
                    <li>Focus on depth rather than breadth, fully understanding key observability concepts</li>
                    <li>Connect research to practical applications in technical curriculum development</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Meaningful Connection (Quality-Focused):</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Identify 3-5 potential networking connections at Datadog based on genuine interest in
                      observability and technical education
                    </li>
                    <li>
                      Prepare for conversations by considering how your unique perspective might add value to their
                      engineering enablement
                    </li>
                    <li>
                      Be authentic about your technical interests and goals rather than shaping yourself to others'
                      expectations
                    </li>
                    <li>Allow meaningful exploration rather than surface networking</li>
                  </ul>
                </div>
              </div>

              <p>
                Commit to balancing focused knowledge building with meaningful connection, recognizing that both
                contribute to your job search effectiveness at Datadog.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="implementation">
          <ImplementationPlan
            title="WELL-BEING IMPLEMENTATION"
            description="Implementing strategies to sustain yourself during the job search process."
            startDate="May 5, 2025"
            milestones={[
              {
                title: "Self-Expression Practices",
                description: "Establish regular practices that honor your need for authentic expression",
                deadline: "May 12, 2025",
                tasks: [
                  { name: "Schedule 30-minute painting sessions every Monday", completed: false },
                  { name: "Set up genealogy research station and resources", completed: false },
                  {
                    name: "Create reading list of technical education literature that resonates with you",
                    completed: false,
                  },
                  { name: "Prepare gardening supplies and schedule weekend sessions", completed: false },
                ],
              },
              {
                title: "Knowledge-Connection Balance",
                description: "Create structures to balance focused research with meaningful connection",
                deadline: "May 19, 2025",
                tasks: [
                  {
                    name: "Define specific research time blocks for Datadog's observability platform",
                    completed: false,
                  },
                  { name: "Identify 3-5 potential networking connections at Datadog", completed: false },
                  { name: "Create research boundaries to prevent burnout", completed: false },
                  { name: "Develop authentic outreach templates for meaningful connections", completed: false },
                ],
              },
              {
                title: "Energy Management",
                description: "Implement strategies to manage energy during the job search",
                deadline: "May 26, 2025",
                tasks: [
                  { name: "Create job search schedule with energy peaks in mind", completed: false },
                  { name: "Establish daily grounding practices", completed: false },
                  { name: "Set up environment that supports focus and creativity", completed: false },
                  { name: "Identify energy drain activities and create mitigation strategies", completed: false },
                ],
              },
              {
                title: "Progress Recognition",
                description: "Establish systems to recognize and celebrate progress",
                deadline: "June 2, 2025",
                tasks: [
                  { name: "Create progress tracking system that honors qualitative growth", completed: false },
                  { name: "Schedule weekly reflection sessions", completed: false },
                  { name: "Define meaningful milestones beyond job offers", completed: false },
                  { name: "Establish celebration practices for small and large wins", completed: false },
                ],
              },
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
