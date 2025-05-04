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
        <Link href="/roles/datadog" passHref>
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">CUSTOMER (DATADOG)</h1>
        <p className="text-gray-600">
          Understanding the specific challenges facing Datadog in their Technical Curriculum Developer, Engineering
          Enablement role and how your abilities address them.
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
                <CardTitle>Engineering Knowledge Transfer Gap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Datadog needs someone to develop curriculum that effectively transfers complex engineering knowledge
                  to various audiences, particularly focusing on their observability platform and cloud monitoring
                  technologies.
                </p>
                <h4 className="font-semibold mb-2">Potential Business Impact if Unaddressed:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Slower onboarding of new engineers to Datadog's complex systems</li>
                  <li>Inconsistent implementation of engineering best practices</li>
                  <li>Knowledge silos limiting cross-functional collaboration</li>
                  <li>Reduced efficiency as engineering teams struggle to master technical concepts</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engineering Enablement Standardization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  They require standardized approaches to engineering education that ensure consistent quality across
                  different teams and products in their rapidly growing organization.
                </p>
                <h4 className="font-semibold mb-2">Potential Business Impact if Unaddressed:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Variable learning outcomes affecting engineering skill development</li>
                  <li>Inefficient resource utilization due to duplicated curriculum efforts</li>
                  <li>Inconsistent technical understanding across engineering teams</li>
                  <li>Difficulty scaling engineering education initiatives as the company grows</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Documentation Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  They need expertise in creating and maintaining high-quality technical documentation that serves both
                  internal engineering teams and external developers using their platform.
                </p>
                <h4 className="font-semibold mb-2">Potential Business Impact if Unaddressed:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Reduced developer productivity due to inadequate documentation</li>
                  <li>Increased support burden as engineers struggle with undocumented features</li>
                  <li>Lower adoption rates of new features due to poor documentation</li>
                  <li>Inconsistent implementation of Datadog's technologies by customers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cross-Functional Technical Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  They need someone to coordinate between engineering teams, product managers, and technical writers to
                  ensure consistent and accurate technical education materials.
                </p>
                <h4 className="font-semibold mb-2">Potential Business Impact if Unaddressed:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Disconnect between technical content and engineering needs</li>
                  <li>Siloed knowledge and inconsistent messaging across teams</li>
                  <li>Inefficient resource allocation across educational programs</li>
                  <li>Missed opportunities for synergy between engineering and educational teams</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engineering Onboarding Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  As a rapidly growing company, Datadog needs to efficiently onboard new engineers to their complex
                  observability platform and engineering practices.
                </p>
                <h4 className="font-semibold mb-2">Potential Business Impact if Unaddressed:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Extended time-to-productivity for new engineering hires</li>
                  <li>Inconsistent understanding of Datadog's engineering practices</li>
                  <li>Higher turnover due to inadequate onboarding experiences</li>
                  <li>Reduced engineering velocity as teams integrate new members</li>
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
                      <TableCell className="font-medium">Engineering Knowledge Transfer Gap</TableCell>
                      <TableCell>
                        <p>
                          <strong>Experience:</strong> You've translated complex technical concepts into accessible
                          learning experiences at Techtonica and Hack the Hood, with a focus on software engineering
                          principles.
                        </p>
                        <p className="my-2">
                          <strong>Specific Example:</strong> At Techtonica, you developed comprehensive learning
                          materials that built technical foundations while addressing unique challenges faced by
                          underrepresented groups in tech.
                        </p>
                        <p>
                          <strong>Approach:</strong> You identify conceptual anchors that connect new technical concepts
                          to familiar ideas, creating progressive learning paths that build complexity incrementally.
                        </p>
                      </TableCell>
                      <TableCell>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Faster onboarding of engineers to Datadog's platform</li>
                          <li>Consistent implementation of engineering best practices</li>
                          <li>Improved cross-functional understanding</li>
                          <li>Enhanced efficiency through effective knowledge transfer</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="font-medium">Engineering Enablement Standardization</TableCell>
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
                          <li>Consistent learning outcomes across engineering teams</li>
                          <li>Efficient resource utilization through standardized approaches</li>
                          <li>Scalable curriculum frameworks that can grow with the organization</li>
                          <li>Improved ability to maintain quality as Datadog expands</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="font-medium">Technical Documentation Challenges</TableCell>
                      <TableCell>
                        <p>
                          <strong>Experience:</strong> Your software engineering background combined with curriculum
                          development expertise gives you a unique perspective on creating effective technical
                          documentation.
                        </p>
                        <p className="my-2">
                          <strong>Specific Example:</strong> At SurveyMonkey, you improved documentation for marketing
                          team tools by understanding their specific workflows and creating examples based on actual use
                          cases.
                        </p>
                        <p>
                          <strong>Approach:</strong> You focus on user-centered documentation that anticipates questions
                          and provides clear, contextual examples that demonstrate real-world application.
                        </p>
                      </TableCell>
                      <TableCell>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Increased developer productivity through better documentation</li>
                          <li>Reduced support burden as engineers find answers in documentation</li>
                          <li>Higher adoption rates of new features due to clear documentation</li>
                          <li>More consistent implementation of Datadog's technologies</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="font-medium">Cross-Functional Technical Alignment</TableCell>
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
                          <li>Better integration between engineering and educational initiatives</li>
                          <li>More efficient resource utilization across teams</li>
                          <li>Consistent messaging and knowledge sharing</li>
                          <li>Stronger partnerships between engineering and educational functions</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="font-medium">Engineering Onboarding Efficiency</TableCell>
                      <TableCell>
                        <p>
                          <strong>Experience:</strong> Your experience developing comprehensive learning programs at
                          Techtonica demonstrates your ability to create effective onboarding experiences.
                        </p>
                        <p className="my-2">
                          <strong>Specific Example:</strong> Successfully graduated 4 cohorts of more than 10
                          participants each at Techtonica, with a focus on preparing them for industry positions.
                        </p>
                        <p>
                          <strong>Approach:</strong> You create structured learning pathways that build from
                          fundamentals to advanced concepts, with clear milestones and practical applications at each
                          stage.
                        </p>
                      </TableCell>
                      <TableCell>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Reduced time-to-productivity for new engineering hires</li>
                          <li>Consistent understanding of Datadog's engineering practices</li>
                          <li>Improved retention through better onboarding experiences</li>
                          <li>Increased engineering velocity as teams integrate new members faster</li>
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
            description="Implementing a comprehensive customer understanding plan to solidify your knowledge of Datadog's challenges and needs."
            startDate="May 5, 2025"
            milestones={[
              {
                title: "Research: Datadog's Platform & Technologies",
                description: "Comprehensive review of Datadog's observability platform and technologies",
                deadline: "May 10, 2025",
                tasks: [
                  { name: "Research Datadog's observability platform architecture", completed: false },
                  { name: "Analyze Datadog's technical documentation", completed: false },
                  { name: "Review Datadog's engineering blog posts", completed: false },
                  { name: "Document technical knowledge requirements for key products", completed: false },
                ],
              },
              {
                title: "Analyze: Engineering Education Landscape",
                description: "Analysis of Datadog's current engineering education approaches",
                deadline: "May 17, 2025",
                tasks: [
                  { name: "Review Datadog's existing educational resources", completed: false },
                  { name: "Analyze Datadog's developer documentation", completed: false },
                  { name: "Identify gaps in current engineering education offerings", completed: false },
                  { name: "Document best practices from similar companies", completed: false },
                ],
              },
              {
                title: "Identify: Datadog-Specific Challenges",
                description: "Deep dive into Datadog's specific engineering education challenges",
                deadline: "May 24, 2025",
                tasks: [
                  {
                    name: "Identify knowledge transfer challenges specific to Datadog's technologies",
                    completed: false,
                  },
                  { name: "Document curriculum standardization needs across engineering teams", completed: false },
                  { name: "Research their current documentation approaches", completed: false },
                  { name: "Map cross-functional dependencies in engineering education", completed: false },
                ],
              },
              {
                title: "Prepare: Challenge-Solution Matrix",
                description: "Finalize mapping of Datadog's challenges to your specific solutions",
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
