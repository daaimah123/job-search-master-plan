import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import CaseStudyDetail from "@/components/case-study-detail"
import ImplementationPlan from "@/components/implementation-plan"

export default function CaseStudiesPage() {
  // Transform the implementation steps data to match what ImplementationPlan expects
  const transformPlanData = (planData: any[], title: any, description: any, startDate: any) => {
    return {
      title: title,
      description: description,
      startDate: startDate,
      milestones: planData.map((item: { title: any; description: any; timeline: any; tasks: any[] }) => ({
        title: item.title,
        description: item.description,
        deadline: item.timeline,
        tasks: item.tasks.map((task: any) => ({
          name: task,
          completed: false
        }))
      }))
    };
  };

  const implementationPlanData = {
    title: "CASE STUDIES DEVELOPMENT",
    description: "Refining and enhancing your case studies to effectively demonstrate your value to Datadog.",
    startDate: "May 5, 2025",
    milestones: [
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
    ]
  };

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
            impact="This curriculum development work resulted in a significant increase in program effectiveness and participant outcomes, with measurable improvements in technical skill acquisition and job placement rates."
            connection={[
              "Datadog needs effective engineering knowledge transfer systems",
              "Standardized approaches to engineering education ensure consistent quality",
              "Ability to adapt curriculum to new technologies is essential for Datadog's evolving platform",
              "Experience creating evaluation frameworks translates directly to Datadog's need for quality assurance",
              "Modular curriculum architecture can be applied to Datadog's diverse product training needs"
            ]}
            talkingPoints="When discussing this case study, I emphasize my systematic approach to curriculum development, focusing on how I balanced technical depth with accessibility. I highlight the measurable outcomes and my ability to iterate based on feedback, which demonstrates my data-driven approach to educational design. I can also discuss how I identified and addressed knowledge gaps, a skill that would be valuable in Datadog's engineering enablement initiatives."
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
            impact="The improved documentation significantly reduced operational friction, allowing both technical and non-technical teams to work more efficiently and effectively with the company's internal tools."
            connection={[
              "Datadog requires high-quality technical documentation for both internal and external users",
              "Experience reducing support tickets through better documentation directly addresses Datadog's scale challenges",
              "User-centered documentation approach aligns with Datadog's focus on user experience",
              "Documentation templates and standards can be applied to Datadog's complex product ecosystem",
              "Demonstrated ability to translate technical concepts for non-technical audiences is essential for Datadog's diverse user base"
            ]}
            talkingPoints="In discussing this case study, I emphasize my user-centered approach to documentation, highlighting how I identified and addressed pain points through systematic analysis. I focus on the measurable business impact of improved documentation, including reduced support costs and increased feature adoption. I can also discuss my process for creating documentation templates that ensure consistency and completeness, which would be valuable for Datadog's complex product ecosystem."
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
            impact="This collaborative approach not only ensured the successful completion of a critical company initiative but also established new standards for cross-functional work that continued to benefit the organization long after the rebranding project."
            connection={[
              "Datadog requires effective coordination between engineering, product, and customer-facing teams",
              "Experience facilitating technical communication across diverse stakeholders is directly applicable",
              "Project management under tight deadlines demonstrates ability to deliver in Datadog's fast-paced environment",
              "Documentation systems that capture decisions and rationale align with Datadog's need for knowledge sharing",
              "Proven ability to maintain technical accuracy while improving accessibility addresses Datadog's communication challenges"
            ]}
            talkingPoints="When discussing this case study, I highlight my ability to bridge communication gaps between technical and non-technical stakeholders, emphasizing how I created systems that improved collaboration efficiency. I focus on the measurable improvements in cross-team understanding and the lasting impact of the collaboration framework I developed. I can also discuss specific techniques I used to translate complex technical concepts into accessible language, which would be valuable for Datadog's engineering enablement initiatives."
          />
        </TabsContent>
        <TabsContent value="implementation">
          <ImplementationPlan {...implementationPlanData} />
        </TabsContent>
      </Tabs>
    </div>
  )
}