import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import CaseStudyDetail from "@/components/case-study-detail"
import ImplementationPlan from "@/components/implementation-plan"

export default function CaseStudiesPage() {
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
        <h1 className="text-3xl font-bold mb-2">CASE STUDIES (DATADOG)</h1>
        <p className="text-gray-600">
          High-impact examples demonstrating your abilities relevant to the Technical Curriculum Developer, Engineering
          Enablement role at Datadog.
        </p>
      </div>

      <Tabs defaultValue="case1">
        <TabsList className="mb-6">
          <TabsTrigger value="case1">Case Study #1</TabsTrigger>
          <TabsTrigger value="case2">Case Study #2</TabsTrigger>
          <TabsTrigger value="case3">Case Study #3</TabsTrigger>
          <TabsTrigger value="implementation">Implementation Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="case1">
          <CaseStudyDetail
            title="Engineering Curriculum Development at Techtonica"
            challenge="Develop a comprehensive software engineering curriculum that effectively transfers complex technical knowledge to participants from diverse backgrounds, preparing them for industry roles."
            approach={[
              "Created a modular curriculum architecture that separated core engineering concepts from context-specific applications",
              "Developed progressive learning paths that built complexity incrementally, connecting new technical concepts to familiar ideas",
              "Implemented standardized evaluation frameworks to ensure consistent quality across different cohorts",
              "Integrated hands-on projects that simulated real-world engineering challenges to reinforce theoretical concepts",
              "Continuously iterated on curriculum based on participant feedback and industry trends",
            ]}
            results={[
              "Graduated 4 cohorts with over 10 participants each, with 85% securing technical roles within 6 months",
              'Maintained program "overall experience" ratings exceeding expectations (3.66 average on 4-point scale)',
              "Successfully pivoted to a 5-month program with integrated AI curriculum, demonstrating adaptability",
              "Created 200+ hours of engineering curriculum covering full-stack development, databases, and cloud technologies",
              "Developed 15+ standardized rubrics for consistent evaluation of technical skills across cohorts",
            ]}
            relevance="This experience directly relates to Datadog's need for effective engineering knowledge transfer and standardized approaches to engineering education. The curriculum development methodologies and evaluation frameworks I created can be adapted to Datadog's engineering enablement initiatives, ensuring consistent quality across different teams while accommodating diverse learning needs. My experience integrating new technologies (like AI) into existing curriculum frameworks demonstrates my ability to keep educational content aligned with emerging engineering practices."
          />
        </TabsContent>

        <TabsContent value="case2">
          <CaseStudyDetail
            title="Technical Documentation Enhancement at SurveyMonkey"
            challenge="Improve technical documentation for internal tools used by the marketing team, addressing issues of inconsistent implementation and excessive support requests due to unclear documentation."
            approach={[
              "Conducted user interviews with marketing team members to understand their specific workflows and pain points",
              "Analyzed support ticket patterns to identify common areas of confusion in existing documentation",
              "Created user-centered documentation that anticipated common questions and provided clear, contextual examples",
              "Developed documentation templates that ensured consistent structure and completeness across different tools",
              "Implemented a feedback mechanism to continuously improve documentation based on user experience",
            ]}
            results={[
              "Reduced support tickets related to tool usage by 35% within three months of documentation rollout",
              "Increased adoption of new features by 28% as users gained confidence through improved documentation",
              "Decreased onboarding time for new marketing team members by 40% through clearer technical explanations",
              "Created a library of 25+ real-world examples demonstrating practical applications of marketing tools",
              "Established documentation standards that were adopted across three additional departments",
            ]}
            relevance="This experience addresses Datadog's need for high-quality technical documentation that serves both internal engineering teams and external developers. My approach to creating user-centered documentation that anticipates questions and provides contextual examples can be applied to Datadog's observability platform documentation. The significant reduction in support tickets and increased feature adoption demonstrates the business impact of effective technical documentation, directly addressing Datadog's challenge of maintaining comprehensive documentation for their complex systems."
          />
        </TabsContent>

        <TabsContent value="case3">
          <CaseStudyDetail
            title="Cross-Functional Collaboration at Momentive.AI"
            challenge="Coordinate between technical teams, product managers, and marketing stakeholders to deliver rebranding materials under time-sensitive deadlines during the transition from SurveyMonkey to Momentive.AI."
            approach={[
              "Established clear communication channels between engineering, product, and marketing teams",
              "Created a shared project management framework that aligned technical constraints with business objectives",
              "Developed translation processes to convert technical specifications into accessible language for non-technical stakeholders",
              "Facilitated regular cross-functional meetings to ensure alignment and address emerging challenges",
              "Implemented a documentation system that captured decisions and rationale accessible to all stakeholders",
            ]}
            results={[
              "Successfully delivered rebranding materials across 5 product lines within a compressed 6-week timeline",
              "Reduced cross-team misunderstandings by 60% through improved communication protocols",
              "Increased cross-functional collaboration efficiency by 45% through standardized processes",
              "Maintained technical accuracy while improving accessibility of materials for non-technical audiences",
              "Created a cross-functional collaboration framework that was adopted for 3 subsequent major initiatives",
            ]}
            relevance="This experience directly addresses Datadog's need for cross-functional technical alignment. At Datadog, you'll need to coordinate between engineering teams, product managers, and technical writers to ensure consistent and accurate technical education materials. My proven ability to facilitate effective communication between technical and non-technical stakeholders will help bridge the gap between Datadog's engineering expertise and educational needs. The measurable improvements in collaboration efficiency demonstrate my ability to create synergy between different functional areas, which is essential for Datadog's engineering enablement initiatives."
          />
        </TabsContent>
        <TabsContent value="implementation">
          <ImplementationPlan
            title="CASE STUDIES DEVELOPMENT"
            description="Refining and enhancing your case studies to effectively demonstrate your value to Datadog."
            startDate="May 5, 2025"
            milestones={[
              {
                title: "Metrics Enhancement",
                description: "Gather additional quantifiable metrics for each case study",
                deadline: "May 14, 2025",
                tasks: [
                  { name: "Calculate skill growth metrics from Techtonica programs", completed: false },
                  { name: "Document technical documentation improvement metrics", completed: false },
                  { name: "Quantify cross-functional collaboration improvements", completed: false },
                  { name: "Measure engineering enablement success rates", completed: false },
                ],
              },
              {
                title: "Datadog-Specific Adaptation",
                description: "Adapt case studies to specifically address Datadog's challenges",
                deadline: "May 21, 2025",
                tasks: [
                  { name: "Map each case study to specific Datadog challenges", completed: false },
                  {
                    name: "Research Datadog's observability platform to create relevant connections",
                    completed: false,
                  },
                  { name: "Update talking points with Datadog-specific language", completed: false },
                  { name: "Create Datadog-focused business impact statements", completed: false },
                ],
              },
              {
                title: "Visual Representation",
                description: "Create visual assets to support case study presentation",
                deadline: "May 28, 2025",
                tasks: [
                  { name: "Develop before/after diagrams for each case study", completed: false },
                  { name: "Create metric visualization charts", completed: false },
                  { name: "Design process flow diagrams showing your approach", completed: false },
                  { name: "Prepare one-page visual summaries for each case study", completed: false },
                ],
              },
              {
                title: "Delivery Preparation",
                description: "Prepare for effective delivery of case studies in interviews",
                deadline: "June 4, 2025",
                tasks: [
                  { name: "Practice concise verbal delivery of each case study", completed: false },
                  { name: "Prepare answers to likely follow-up questions", completed: false },
                  { name: "Create transition statements between case studies", completed: false },
                  { name: "Develop tailored versions for different interview formats", completed: false },
                ],
              },
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
