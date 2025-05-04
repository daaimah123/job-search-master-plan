import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ImplementationPlan from "@/components/implementation-plan"

export default function EdgePage() {
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
        <h1 className="text-3xl font-bold mb-2">YOUR EDGE</h1>
        <p className="text-gray-600">
          Articulating your unique value proposition and core strengths that position you as the ideal candidate for the
          Technical Curriculum Developer, Program Manager role at Intuit.
        </p>
      </div>

      <Tabs defaultValue="statement">
        <TabsList className="mb-6">
          <TabsTrigger value="statement">Edge Statement</TabsTrigger>
          <TabsTrigger value="strengths">Core Strengths</TabsTrigger>
          <TabsTrigger value="implementation">Implementation Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="statement">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Edge Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                You are a technical education architect who combines software engineering expertise with curriculum
                development mastery to create scalable, measurable learning programs. Your unique ability to translate
                between technical and educational domains allows you to design learning experiences that balance
                technical excellence with accessibility for diverse audiences. You excel at implementing measurement
                frameworks that demonstrate educational effectiveness while driving continuous improvement. Your
                experience leading technical education programs gives you authentic insight into creating learning
                environments that achieve business objectives, while your software engineering background enables you to
                integrate technical best practices into curriculum effectively.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strengths">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Technical-Educational Translator</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  You have a demonstrated ability to make complex technical concepts accessible to diverse audiences, as
                  shown by your work at Techtonica where you developed comprehensive learning materials and maintained
                  program "overall experience" ratings exceeding expectations (3.66 average).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Curriculum Standardization Expert</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your experience developing standardized approaches at Hack the Hood and Techtonica demonstrates your
                  ability to create consistent learning frameworks that can be implemented effectively across different
                  contexts, ensuring quality at scale.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Program Measurement Strategist</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your implementation of KPI tracking systems at Project HIRED and evaluation frameworks at Techtonica
                  demonstrates your ability to establish meaningful metrics and use data to drive continuous
                  improvement, ensuring educational investments deliver measurable results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cross-Functional Collaborator</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your experience working across technical and business teams at SurveyMonkey and coordinating with
                  industry partners at Techtonica demonstrates your ability to align diverse stakeholders around shared
                  educational goals, creating synergy between technical and business objectives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Education Innovator</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your successful pivot to virtual course delivery during the pandemic and integration of AI curriculum
                  at Techtonica shows your ability to adapt educational approaches to changing technologies and
                  circumstances, keeping technical education relevant and effective.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Experiment-Driven Optimizer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your implementation of experiments at SurveyMonkey that drove significant business impact ($7M in
                  incremental annual pipeline revenue) demonstrates your ability to use data to optimize outcomes, a
                  skill directly applicable to improving technical education effectiveness.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="implementation">
          <ImplementationPlan
            title="EDGE DEVELOPMENT"
            description="Building and refining your edge to position yourself as the ideal candidate for the Technical Curriculum Developer role."
            startDate="May 5, 2025"
            milestones={[
              {
                title: "Edge Statement Refinement",
                description: "Refine your edge statement to specifically target Intuit's needs",
                deadline: "May 12, 2025",
                tasks: [
                  { name: "Customize edge statement with Intuit-specific language", completed: false },
                  { name: "Create 3 variations for different application contexts", completed: false },
                  { name: "Develop supporting evidence for each edge claim", completed: false },
                  { name: "Practice delivering edge statement verbally", completed: false },
                ],
              },
              {
                title: "Core Strengths Documentation",
                description: "Document and quantify your core strengths with specific examples",
                deadline: "May 19, 2025",
                tasks: [
                  { name: "Build evidence portfolio for each core strength", completed: false },
                  { name: "Develop quantitative metrics for technical-educational translation", completed: false },
                  { name: "Document curriculum standardization methodologies", completed: false },
                  { name: "Create measurement framework examples from past work", completed: false },
                ],
              },
              {
                title: "Technical Edge Enhancement",
                description: "Strengthen your technical edge through strategic learning",
                deadline: "May 26, 2025",
                tasks: [
                  { name: "Complete Intuit developer documentation review", completed: false },
                  { name: "Research Intuit's technical architecture", completed: false },
                  { name: "Identify technical concepts specific to Intuit products", completed: false },
                  { name: "Develop technical glossary relevant to Intuit curriculum", completed: false },
                ],
              },
              {
                title: "Edge Communication Framework",
                description: "Create frameworks for communicating your edge effectively",
                deadline: "June 2, 2025",
                tasks: [
                  { name: "Develop talking points for each core strength", completed: false },
                  { name: "Create visual representation of your edge", completed: false },
                  { name: "Design elevator pitch that highlights your edge", completed: false },
                  { name: "Prepare responses to edge-related questions", completed: false },
                ],
              },
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
