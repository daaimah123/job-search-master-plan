import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ImplementationPlan from "@/components/implementation-plan"
import CaseStudyDetail from "@/components/case-study-detail"

export default function CaseStudiesPage() {
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
        <h1 className="text-3xl font-bold mb-2">VALUE PROP (CASE STUDIES)</h1>
        <p className="text-gray-600">
          High-impact examples demonstrating your abilities and how they directly address Intuit's needs for a Technical
          Curriculum Developer, Program Manager.
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
            title="Technical Education Program Management at Techtonica"
            challenge="I faced the complex challenge of developing and managing a comprehensive software engineering training program for women and non-binary adults from underrepresented backgrounds. The program needed to balance technical depth with accessibility, maintain high standards while accommodating diverse learning needs, and prepare participants for real-world industry positions. This required coordinating multiple stakeholders including instructors, mentors, industry partners, and participants, each with different expectations and needs."
            approach={[
              "Oversaw development of comprehensive learning materials that built technical foundations while addressing unique challenges faced by underrepresented groups",
              "Coordinated instructor assignments and preparation to ensure consistent quality across the program",
              "Implemented technical learning environments and tools that balanced industry relevance with learner accessibility",
              "Created standardized rubrics for applications, projects, and knowledge checks with specific questions to ensure consistent evaluation",
              "Established clear metrics for measuring program effectiveness and participant progress",
              "Maintained program focus on both technical excellence and career readiness",
              "Coordinated with industry partners for mentorship and project opportunities",
            ]}
            results={[
              "Successfully graduated 4 cohorts of more than 10 participants each",
              "Placed 16 graduates at Sony, creating direct pathways into the industry",
              'Maintained program "overall experience" ratings exceeding expectations (3.66 average)',
              "Successfully pivoted to a 5-month program with an integrated AI curriculum",
              "Created standardized evaluation frameworks that balanced rigor with accessibility",
            ]}
            impact="This case study demonstrates my ability to manage technical education programs that produce measurable results. By successfully placing graduates at companies like Sony, I created measurable value for both participants and industry partners. The program's consistently high ratings show my ability to balance technical excellence with participant experience. By integrating emerging technologies like AI into the curriculum, I ensured the program remained relevant to evolving industry needs."
            connection={[
              "Program Management: My coordination of instructors, mentors, and industry partners demonstrates how I could manage complex educational initiatives at Intuit.",
              "Curriculum Development: My oversight of comprehensive learning materials shows how I could develop effective technical curriculum for Intuit's products and technologies.",
              "Measurement Framework: My implementation of standardized evaluation frameworks demonstrates how I could establish metrics for measuring the effectiveness of Intuit's technical education programs.",
            ]}
            talkingPoints="My experience managing Techtonica's software engineering training program demonstrates how I create effective technical education programs that produce measurable results—a core need for the Technical Curriculum Developer, Program Manager role at Intuit.\n\nWhat's particularly relevant is how I balanced technical depth with accessibility for diverse audiences. I developed comprehensive learning materials that built strong foundations while addressing the unique challenges faced by different learners. This approach directly applies to creating technical curriculum that serves Intuit's diverse audience of employees, partners, and customers.\n\nThe results speak to the effectiveness of this approach: we placed 16 graduates at Sony and maintained program satisfaction ratings above 3.6 out of 5 across four cohorts. Perhaps most importantly, we successfully integrated emerging technology like AI into our curriculum, showing my ability to keep educational content aligned with evolving technical needs.\n\nThis experience has given me a proven methodology for creating learning pathways that meet people where they are while helping them master complex technologies—exactly what's needed to develop effective technical curriculum at Intuit."
          />
        </TabsContent>

        <TabsContent value="case2">
          <CaseStudyDetail
            title="Experiment Implementation and Optimization at SurveyMonkey"
            challenge="At SurveyMonkey, I faced the challenge of optimizing conversion rates and lead generation through targeted experiments while maintaining code quality and accessibility. This required implementing complex technical solutions, collaborating across product and marketing teams, and ensuring proper tracking and analytics to measure results accurately."
            approach={[
              "Implemented A/B testing experiments using React, TypeScript, and GraphQL",
              "Collaborated with product and marketing teams to define test parameters",
              "Developed multiple variants for testing different user experiences",
              "Ensured proper tracking and analytics implementation",
              "Used data to drive decision-making and optimization",
              "Maintained focus on both technical excellence and business outcomes",
            ]}
            results={[
              "Lead CTA Copy test increased SQLs by 25%, resulting in $7M in incremental annual pipeline revenue",
              "Homepage navigation component update increased MQL:Opp ratio by 36% with an estimated annualized impact of $1.2M",
              "Created homepage vs returning user homepage experiment that drove basic to paid conversion ~7% and basic to annual conversion ~4%",
              "Built maturity assessment recovery module experiment on CX MP pages driving a 201% higher CTR",
            ]}
            impact="This case study demonstrates my ability to implement technical solutions that drive significant business results. By successfully designing and executing experiments, I directly contributed to company revenue growth through data-driven optimizations. The measurable outcomes show my ability to connect technical implementation to business impact. By focusing on key metrics and conversion points, I ensured that technical work translated into tangible business value."
            connection={[
              "Measurement Expertise: My implementation of experiments with clear metrics demonstrates how I could establish measurement frameworks for Intuit's technical education programs.",
              "Technical Implementation: My work with React, TypeScript, and GraphQL shows my technical understanding, which would help me develop curriculum for complex technical topics.",
              "Business Impact Focus: My focus on connecting technical work to business outcomes demonstrates how I could ensure Intuit's technical curriculum delivers measurable value.",
            ]}
            talkingPoints="My experience implementing experiments at SurveyMonkey demonstrates my ability to connect technical implementation to measurable business outcomes—a critical skill for developing effective technical curriculum at Intuit.\n\nWhat's particularly relevant is how I used data to drive decision-making and optimization. I implemented experiments that tested different approaches, measured their effectiveness, and used those insights to drive continuous improvement. This methodology directly applies to developing and refining technical curriculum at Intuit, where measuring learning outcomes and optimizing educational approaches is essential.\n\nThe results speak to the effectiveness of this approach: one experiment increased SQLs by 25%, resulting in $7M in incremental annual pipeline revenue. Another drove a 36% increase in MQL:Opp ratio with an estimated annualized impact of $1.2M. These metrics demonstrate my ability to connect technical work to business impact.\n\nThis experience has given me a proven framework for implementing, measuring, and optimizing technical solutions—skills that would be valuable for developing effective technical curriculum and measuring its impact at Intuit."
          />
        </TabsContent>

        <TabsContent value="case3">
          <CaseStudyDetail
            title="Virtual Course Transition at Hack the Hood"
            challenge="When the pandemic hit, Hack the Hood faced an existential threat to its educational mission. We needed to rapidly transition all in-person technical courses to virtual delivery with no disruption to learning outcomes. This presented multiple complex challenges: selecting and implementing appropriate virtual learning technologies, adapting curriculum for online delivery, training instructors accustomed to in-person teaching, and ensuring technical access for students potentially facing digital divide issues. The transition had to happen quickly while maintaining educational quality and supporting both students and instructors through a stressful period."
            approach={[
              "Evaluated and selected virtual learning platforms that balanced functionality with accessibility",
              "Conducted instructor training sessions on virtual teaching methods to ensure pedagogical effectiveness",
              "Adapted curriculum materials specifically for virtual delivery, identifying elements that needed redesign",
              "Coordinated technical setup and testing of virtual learning environments, anticipating potential issues",
              "Managed software installation processes for donated PCs to address digital divide concerns",
              "Provided ongoing support to instructors during their initial virtual teaching experiences",
              "Maintained focus on core learning objectives despite the significant delivery changes",
            ]}
            results={[
              "Successfully transitioned all technical courses to virtual delivery with minimal disruption",
              "Maintained educational continuity during a critical period of uncertainty",
              "Equipped instructors with new virtual teaching skills that expanded their capabilities",
              "Ensured technical access for students through donated PC software installation",
              "Preserved student learning opportunities that would have otherwise been lost",
              "Created new digital delivery methods that could be leveraged beyond the pandemic",
            ]}
            impact="This case study demonstrates my ability to lead critical educational transitions while maintaining focus on core learning objectives. By successfully pivoting to virtual delivery, I preserved Hack the Hood's ability to fulfill its mission during unprecedented challenges. The transition not only solved an immediate crisis but developed new capabilities that strengthened the organization's future resilience. By addressing both technical platform needs and human adaptation challenges, I created a solution that worked for all stakeholders."
            connection={[
              "Adaptive Learning Design: This experience directly relates to Intuit's need for someone who can design curriculum that works across different delivery methods and contexts.",
              "Technology Integration: My selection and implementation of virtual learning platforms demonstrates how I could integrate appropriate technologies into Intuit's educational initiatives.",
              "Change Management: My work supporting instructors through a significant transition shows how I could help Intuit's teams adapt to new educational approaches and technologies.",
            ]}
            talkingPoints="My experience leading the transition to virtual course delivery at Hack the Hood demonstrates my ability to adapt technical education programs to changing circumstances—a valuable skill for developing flexible curriculum at Intuit.\n\nWhat's particularly applicable to the Technical Curriculum Developer, Program Manager role is how I approached both the technical and human elements of this transition. I didn't just select virtual platforms; I created comprehensive support systems to help instructors adapt their teaching approaches. Similarly, developing effective technical curriculum at Intuit requires not just content creation but understanding how different delivery methods affect learning outcomes.\n\nThe impact of this work went beyond crisis management. By successfully transitioning to virtual delivery, we preserved educational opportunities for students who might otherwise have lost access. We also built new organizational capabilities that extended beyond the immediate challenge.\n\nThis experience has given me practical insights into how to design learning experiences that remain effective across different delivery contexts—a core skill for developing flexible technical curriculum at Intuit that can serve diverse learning needs and environments."
          />
        </TabsContent>

        <TabsContent value="implementation">
          <ImplementationPlan
            title="CASE STUDIES DEVELOPMENT"
            description="Refining and enhancing your case studies to effectively demonstrate your value to Intuit."
            startDate="May 5, 2025"
            milestones={[
              {
                title: "Metrics Enhancement",
                description: "Gather additional quantifiable metrics for each case study",
                deadline: "May 14, 2025",
                tasks: [
                  { name: "Calculate skill growth metrics from Techtonica programs", completed: false },
                  { name: "Document graduate performance metrics at Sony", completed: false },
                  { name: "Quantify curriculum standardization improvements", completed: false },
                  { name: "Measure virtual transition success rates", completed: false },
                ],
              },
              {
                title: "Intuit-Specific Adaptation",
                description: "Adapt case studies to specifically address Intuit's challenges",
                deadline: "May 21, 2025",
                tasks: [
                  { name: "Map each case study to specific Intuit challenges", completed: false },
                  { name: "Research Intuit's products to create relevant connections", completed: false },
                  { name: "Update talking points with Intuit-specific language", completed: false },
                  { name: "Create Intuit-focused business impact statements", completed: false },
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
