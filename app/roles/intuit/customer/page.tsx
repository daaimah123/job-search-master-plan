import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ImplementationPlan from "@/components/implementation-plan"

export default function CustomerPage() {
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
        <h1 className="text-3xl font-bold mb-2">CUSTOMER (INTUIT)</h1>
        <p className="text-gray-600">
          Understanding the specific challenges facing Intuit in their Technical Curriculum Developer, Program Manager
          role and how your abilities address them.
        </p>
      </div>

      <Tabs defaultValue="challenges">
        <TabsList className="mb-6">
          <TabsTrigger value="challenges">Underlying Challenges</TabsTrigger>
          <TabsTrigger value="solutions">Your Solutions</TabsTrigger>
          <TabsTrigger value="implementation">Implementation Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="challenges">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Technical Knowledge Transfer Gap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Intuit needs someone to develop curriculum that effectively transfers complex technical knowledge to
                  various audiences.
                </p>
                <h4 className="font-semibold mb-2">Potential Business Impact if Unaddressed:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Slower adoption of Intuit products and technologies</li>
                  <li>Inconsistent implementation of technical best practices</li>
                  <li>Knowledge silos limiting cross-functional collaboration</li>
                  <li>Reduced efficiency as teams struggle to master technical concepts</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Curriculum Standardization Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  They require standardized approaches to technical education that ensure consistent quality across
                  different programs.
                </p>
                <h4 className="font-semibold mb-2">Potential Business Impact if Unaddressed:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Variable learning outcomes affecting technical skill development</li>
                  <li>Inefficient resource utilization due to duplicated curriculum efforts</li>
                  <li>Inconsistent technical understanding across teams</li>
                  <li>Difficulty scaling technical education initiatives</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Program Measurement Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  They need expertise to establish metrics and measurement frameworks for technical education
                  initiatives.
                </p>
                <h4 className="font-semibold mb-2">Potential Business Impact if Unaddressed:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Inability to demonstrate ROI on educational investments</li>
                  <li>Challenges identifying improvement opportunities</li>
                  <li>Inefficient resource allocation without data-driven insights</li>
                  <li>Difficulty justifying continued investment in technical education</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cross-Functional Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  They need someone to coordinate between technical experts, instructional designers, and business
                  stakeholders.
                </p>
                <h4 className="font-semibold mb-2">Potential Business Impact if Unaddressed:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Disconnect between technical content and business needs</li>
                  <li>Siloed knowledge and inconsistent messaging</li>
                  <li>Inefficient resource allocation across educational programs</li>
                  <li>Missed opportunities for synergy between technical and educational teams</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Education Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  They need to incorporate emerging technologies and methodologies into their technical curriculum.
                </p>
                <h4 className="font-semibold mb-2">Potential Business Impact if Unaddressed:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Outdated curriculum failing to reflect current technical practices</li>
                  <li>Missed opportunities to leverage new learning technologies</li>
                  <li>Competitive disadvantage as other companies adopt innovative approaches</li>
                  <li>Reduced engagement from technically sophisticated learners</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="solutions">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How Your Edge Addresses Their Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/4">Their Challenge</TableHead>
                      <TableHead className="w-2/4">Your Solution</TableHead>
                      <TableHead className="w-1/4">Business Impact</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Technical Knowledge Transfer Gap</TableCell>
                      <TableCell>
                        <p>
                          <strong>Experience:</strong> You've translated complex technical concepts into accessible
                          learning experiences at Techtonica and Hack the Hood.
                        </p>
                        <p className="my-2">
                          <strong>Specific Example:</strong> At SurveyMonkey, you improved documentation for marketing
                          team tools by understanding their specific workflows and creating examples based on actual use
                          cases.
                        </p>
                        <p>
                          <strong>Approach:</strong> You identify conceptual anchors that connect new technical concepts
                          to familiar ideas, creating progressive learning paths that build complexity incrementally.
                        </p>
                      </TableCell>
                      <TableCell>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Faster adoption of Intuit products and technologies</li>
                          <li>Consistent implementation of technical best practices</li>
                          <li>Improved cross-functional understanding</li>
                          <li>Enhanced efficiency through effective knowledge transfer</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="font-medium">Curriculum Standardization Needs</TableCell>
                      <TableCell>
                        <p>
                          <strong>Experience:</strong> You've developed standardized curriculum frameworks at Hack the
                          Hood and Techtonica that maintained quality across different cohorts.
                        </p>
                        <p className="my-2">
                          <strong>Specific Example:</strong> Created standardized rubrics for applications, projects,
                          and knowledge checks at Techtonica with specific questions to ensure consistent evaluation.
                        </p>
                        <p>
                          <strong>Approach:</strong> You develop modular curriculum architecture that separates core
                          content from context-specific applications, allowing for consistency in fundamentals while
                          enabling adaptation to different audiences.
                        </p>
                      </TableCell>
                      <TableCell>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Consistent learning outcomes across programs</li>
                          <li>Efficient resource utilization through standardized approaches</li>
                          <li>Scalable curriculum frameworks that can grow with the organization</li>
                          <li>Improved ability to maintain quality as programs expand</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="font-medium">Program Measurement Challenges</TableCell>
                      <TableCell>
                        <p>
                          <strong>Experience:</strong> You've implemented measurement frameworks across educational
                          programs and enhanced operational efficiency through KPI tracking.
                        </p>
                        <p className="my-2">
                          <strong>Specific Example:</strong> At Project HIRED, you implemented KPI tracking systems that
                          enhanced site independence and operational efficiency for a team of 9 people.
                        </p>
                        <p>
                          <strong>Approach:</strong> You establish clear metrics that balance quantitative outcomes with
                          qualitative learning experiences, using data to drive ongoing optimization.
                        </p>
                      </TableCell>
                      <TableCell>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Data-driven insights to guide program improvements</li>
                          <li>Ability to demonstrate ROI on educational investments</li>
                          <li>More efficient resource allocation based on impact</li>
                          <li>Continuous improvement culture in educational initiatives</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="font-medium">Cross-Functional Alignment</TableCell>
                      <TableCell>
                        <p>
                          <strong>Experience:</strong> You've coordinated between technical and business teams at
                          SurveyMonkey and managed relationships with industry partners at Techtonica.
                        </p>
                        <p className="my-2">
                          <strong>Specific Example:</strong> Led cross-functional teams to deliver rebranding materials
                          under time-sensitive deadlines at Momentive.AI, demonstrating your ability to align diverse
                          stakeholders around shared goals.
                        </p>
                        <p>
                          <strong>Approach:</strong> You serve as a bridge between technical experts and educational
                          stakeholders, ensuring alignment around shared objectives.
                        </p>
                      </TableCell>
                      <TableCell>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Better integration between technical and educational initiatives</li>
                          <li>More efficient resource utilization across teams</li>
                          <li>Consistent messaging and knowledge sharing</li>
                          <li>Stronger partnerships between technical and educational functions</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="font-medium">Technical Education Innovation</TableCell>
                      <TableCell>
                        <p>
                          <strong>Experience:</strong> You've integrated emerging technologies into curriculum and
                          adapted educational approaches to changing circumstances.
                        </p>
                        <p className="my-2">
                          <strong>Specific Example:</strong> Successfully pivoted Techtonica to a 5-month program with
                          an integrated AI curriculum, demonstrating your ability to incorporate cutting-edge
                          technologies into educational frameworks.
                        </p>
                        <p>
                          <strong>Approach:</strong> You continuously evaluate emerging technologies and methodologies,
                          identifying opportunities to enhance learning experiences while maintaining focus on core
                          objectives.
                        </p>
                      </TableCell>
                      <TableCell>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Curriculum that reflects current technical practices</li>
                          <li>Enhanced learning experiences through innovative approaches</li>
                          <li>Competitive advantage in technical education</li>
                          <li>Increased engagement from technically sophisticated learners</li>
                        </ul>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="implementation">
          <ImplementationPlan
            title="CUSTOMER UNDERSTANDING"
            description="Implementing a comprehensive customer understanding plan to solidify your knowledge of Intuit's challenges and needs."
            startDate="May 5, 2025"
            milestones={[
              {
                title: "Research: Intuit's Technical Products",
                description: "Comprehensive review of Intuit's technical products and platforms",
                deadline: "May 10, 2025",
                tasks: [
                  { name: "Research QuickBooks platform architecture", completed: false },
                  { name: "Analyze TurboTax technical documentation", completed: false },
                  { name: "Review Mint's developer resources", completed: false },
                  { name: "Document technical knowledge requirements for each product", completed: false },
                ],
              },
              {
                title: "Analyze: Technical Education Landscape",
                description: "Analysis of Intuit's current technical education approaches",
                deadline: "May 17, 2025",
                tasks: [
                  { name: "Review Intuit's existing educational resources", completed: false },
                  { name: "Analyze Intuit's developer documentation", completed: false },
                  { name: "Identify gaps in current technical education offerings", completed: false },
                  { name: "Document best practices from similar companies", completed: false },
                ],
              },
              {
                title: "Identify: Intuit-Specific Challenges",
                description: "Deep dive into Intuit's specific technical education challenges",
                deadline: "May 24, 2025",
                tasks: [
                  {
                    name: "Identify knowledge transfer challenges specific to Intuit's technologies",
                    completed: false,
                  },
                  { name: "Document curriculum standardization needs across products", completed: false },
                  { name: "Research their current measurement approaches", completed: false },
                  { name: "Map cross-functional dependencies in technical education", completed: false },
                ],
              },
              {
                title: "Prepare: Challenge-Solution Matrix",
                description: "Finalize mapping of Intuit's challenges to your specific solutions",
                deadline: "May 31, 2025",
                tasks: [
                  { name: "Refine challenge statements based on research", completed: false },
                  { name: "Match your specific experiences to each challenge", completed: false },
                  { name: "Quantify potential business impact of your solutions", completed: false },
                  { name: "Prepare case-specific examples for each challenge", completed: false },
                ],
              },
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
