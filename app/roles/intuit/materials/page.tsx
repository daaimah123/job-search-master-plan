import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ImplementationPlan from "@/components/implementation-plan"

export default function MaterialsPage() {
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
        <h1 className="text-3xl font-bold mb-2">MATERIALS: YOUR MARKETING COLLATERAL</h1>
        <p className="text-gray-600">
          Optimized resume and cover letter frameworks that effectively communicate your value to Intuit.
        </p>
      </div>

      <Tabs defaultValue="resume">
        <TabsList className="mb-6">
          <TabsTrigger value="resume">Resume Highlights</TabsTrigger>
          <TabsTrigger value="cover">Cover Letter</TabsTrigger>
          <TabsTrigger value="implementation">Implementation Plan</TabsTrigger>
          <TabsTrigger value="linkedin">LinkedIn Optimization</TabsTrigger>
        </TabsList>

        <TabsContent value="resume">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Resume Highlights: Core Elements for Any Application</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Professional Summary</h3>
                <p className="text-gray-700">
                  Technical education architect with proven success developing comprehensive curriculum frameworks and
                  managing educational programs with measurable outcomes. Combines software engineering expertise with
                  curriculum development mastery to create scalable, effective learning pathways. Skilled in
                  standardizing educational approaches, implementing measurement frameworks, and translating between
                  technical and educational domains. Track record of maintaining high learner satisfaction while driving
                  quantifiable business impact through technical education programs.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Key Achievements</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Developed and managed software engineering training program that successfully graduated 4 cohorts of
                    10+ participants each while maintaining 3.66 average satisfaction ratings
                  </li>
                  <li>
                    Placed 16 software engineering graduates at Sony, creating direct pathways into the industry for
                    underrepresented individuals
                  </li>
                  <li>
                    Implemented experiments at SurveyMonkey that increased SQLs by 25%, resulting in $7M in incremental
                    annual pipeline revenue
                  </li>
                  <li>
                    Successfully pivoted technical training programs to virtual delivery during the pandemic,
                    maintaining educational continuity during critical period
                  </li>
                  <li>
                    Created standardized curriculum and assessment approaches that balanced technical excellence with
                    accessibility for diverse learners
                  </li>
                  <li>
                    Developed and implemented an integrated AI curriculum, demonstrating ability to incorporate emerging
                    technologies into educational frameworks
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Curriculum Development & Standardization</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Developed comprehensive technical learning materials for diverse audiences</li>
                    <li>Created standardized curriculum frameworks that ensured consistent quality across programs</li>
                    <li>Integrated emerging technologies like AI into existing educational frameworks</li>
                    <li>Designed assessment rubrics that maintained consistent standards across programs</li>
                    <li>Balanced technical depth with accessibility in curriculum design</li>
                    <li>Established coherent approaches that could be implemented across different contexts</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Program Management & Measurement</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Oversaw development and operation of technical training programs</li>
                    <li>Implemented KPI tracking systems that enhanced operational efficiency</li>
                    <li>Coordinated instructor assignments and preparation</li>
                    <li>Established clear metrics for measuring program effectiveness</li>
                    <li>Maintained high satisfaction ratings across multiple program cohorts</li>
                    <li>Successfully pivoted program structures based on outcomes and feedback</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Implementation & Optimization</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Implemented A/B testing experiments using React, TypeScript, and GraphQL</li>
                    <li>Developed multiple variants for testing different user experiences</li>
                    <li>Ensured proper tracking and analytics implementation</li>
                    <li>Used data to drive decision-making and optimization</li>
                    <li>Maintained focus on both technical excellence and business outcomes</li>
                    <li>Identified experiment platform improvements that saved 40 engineering hours monthly</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Cross-Functional Collaboration</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Bridged communication between technical and educational stakeholders</li>
                    <li>Coordinated with industry partners for mentorship and project opportunities</li>
                    <li>Aligned technical requirements with educational objectives</li>
                    <li>Managed relationships between instructors, learners, and external partners</li>
                    <li>Translated between different organizational priorities and perspectives</li>
                    <li>Delivered results under time-sensitive deadlines while maintaining quality</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Education & Content Creation</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Translated complex technical concepts into accessible learning experiences</li>
                    <li>Created learning materials that balanced technical accuracy with learner engagement</li>
                    <li>Developed technical documentation that improved cross-team collaboration</li>
                    <li>Designed learning experiences that addressed both technical skills and professional context</li>
                    <li>Adapted technical content for different delivery methods and contexts</li>
                    <li>Integrated appropriate technologies into educational frameworks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cover">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cover Letter Approach: A Flexible Framework for Owning Your Edge</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="font-semibold mb-4">Dear Hiring Manager,</p>

                <p className="mb-4">
                  As someone who has developed comprehensive technical curriculum and managed educational programs with
                  measurable outcomes, I see direct parallels to the challenges of the Technical Curriculum Developer,
                  Program Manager role at Intuit. Throughout my work at Techtonica, Hack the Hood, and SurveyMonkey,
                  I've specialized in creating standardized educational frameworks that balance technical excellence
                  with accessibility while ensuring programs deliver quantifiable results.
                </p>

                <p className="mb-4">
                  My experience directly addresses the core responsibilities outlined in your job description:
                </p>

                <p className="mb-2">
                  <strong>Curriculum Development and Standardization:</strong> At Hack the Hood, I developed unique
                  content-based curricula that successfully integrated technical skills with practical application,
                  creating standardized approaches that maintained quality across different cohorts. This experience
                  creating scalable curriculum frameworks would be valuable for developing consistent technical
                  education materials at Intuit.
                </p>

                <p className="mb-2">
                  <strong>Program Management and Measurement:</strong> At Techtonica, I developed and managed a software
                  engineering training program that successfully graduated four cohorts while maintaining satisfaction
                  ratings of 3.66 (exceeding expectations). I also implemented KPI tracking systems at Project HIRED
                  that enhanced operational efficiency. This experience managing educational programs and measuring
                  their effectiveness would help ensure Intuit's technical education initiatives deliver measurable
                  results.
                </p>

                <p className="mb-2">
                  <strong>Technical Implementation and Optimization:</strong> At SurveyMonkey, I implemented experiments
                  that increased SQLs by 25%, resulting in $7M in incremental annual pipeline revenue. This experience
                  connecting technical implementation to business outcomes would be valuable for developing curriculum
                  that delivers measurable impact at Intuit.
                </p>

                <p className="mb-4">
                  <strong>Cross-Functional Collaboration:</strong> My work coordinating between technical and business
                  teams at SurveyMonkey and placing 16 Techtonica graduates at Sony demonstrates my ability to align
                  diverse stakeholders around shared educational goals. This skill would be valuable for collaborating
                  with technical experts, instructional designers, and business stakeholders to develop effective
                  curriculum at Intuit.
                </p>

                <p className="mb-4">
                  My personal experience transitioning from non-profit program management to software engineering has
                  given me authentic insight into the challenges of learning technical skills. I understand that
                  effective curriculum must address both technical concepts and practical application, creating learning
                  pathways that work for diverse learners with different backgrounds and needs.
                </p>

                <p className="mb-4">
                  I would welcome the opportunity to discuss how my approach to curriculum development and program
                  management could help Intuit create effective technical education initiatives that serve diverse
                  audiences and business needs. I'm particularly interested in exploring how we might develop
                  standardized curriculum frameworks that ensure consistent quality while delivering measurable business
                  impact.
                </p>

                <p className="mb-6">Thank you for your consideration.</p>

                <p>
                  Sincerely,
                  <br />
                  Daaimah Tibrey
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="implementation">
          <ImplementationPlan
            title="MARKETING MATERIALS DEVELOPMENT"
            description="Creating and refining your resume and cover letter to effectively communicate your value."
            startDate="May 5, 2025"
            milestones={[
              {
                title: "Resume Optimization",
                description: "Refine your resume to highlight your Technical Curriculum Developer qualifications",
                deadline: "May 13, 2025",
                tasks: [
                  { name: "Customize professional summary for Intuit application", completed: false },
                  { name: "Prioritize achievements relevant to curriculum development", completed: false },
                  { name: "Add Intuit-specific keywords and terminology", completed: false },
                  { name: "Enhance quantifiable metrics in key achievements", completed: false },
                ],
              },
              {
                title: "Cover Letter Development",
                description: "Create a compelling cover letter that demonstrates your fit for the role",
                deadline: "May 20, 2025",
                tasks: [
                  { name: "Research Intuit's current technical education initiatives", completed: false },
                  { name: "Draft cover letter addressing specific job requirements", completed: false },
                  { name: "Highlight case studies most relevant to Intuit's needs", completed: false },
                  { name: "Create tailored variations for different application contexts", completed: false },
                ],
              },
              {
                title: "Supplementary Materials",
                description: "Develop additional materials to support your application",
                deadline: "May 27, 2025",
                tasks: [
                  { name: "Create curriculum development portfolio", completed: false },
                  { name: "Develop one-page visual representation of your approach", completed: false },
                  { name: "Design case study highlights document", completed: false },
                  { name: "Prepare reference list with talking points for each reference", completed: false },
                ],
              },
              {
                title: "Final Optimization",
                description: "Final review and optimization of all application materials",
                deadline: "June 3, 2025",
                tasks: [
                  { name: "Conduct comprehensive editing and proofreading", completed: false },
                  { name: "Get feedback from professional in technical education", completed: false },
                  { name: "Ensure consistent messaging across all materials", completed: false },
                  { name: "Optimize formatting for both ATS and human readers", completed: false },
                ],
              },
            ]}
          />
        </TabsContent>

        <TabsContent value="linkedin">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>LinkedIn Optimization: Crafting Your Professional Narrative</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="font-semibold mb-4">Headline:</p>
                <p className="mb-4">
                  Technical Curriculum Developer | Program Management Expert | Driving Impactful Learning Experiences
                </p>

                <p className="font-semibold mb-4">Summary:</p>
                <p className="mb-4">
                  A seasoned technical curriculum developer and program manager with a proven track record of designing
                  and implementing effective learning solutions. Expertise in creating standardized curriculum
                  frameworks, managing educational programs, and leveraging data to optimize learning outcomes.
                  Passionate about bridging the gap between technical expertise and accessible education.
                </p>

                <p className="font-semibold mb-4">Experience Highlights:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Developed and managed software engineering training programs, graduating multiple cohorts with high
                    satisfaction ratings.
                  </li>
                  <li>
                    Implemented KPI tracking systems to enhance operational efficiency and measure program
                    effectiveness.
                  </li>
                  <li>
                    Created standardized curriculum frameworks that balanced technical excellence with accessibility for
                    diverse learners.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to align technical requirements with educational
                    objectives.
                  </li>
                </ul>

                <p className="font-semibold mb-4">Skills:</p>
                <p className="mb-4">
                  Curriculum Development, Program Management, Technical Training, Instructional Design, Data Analysis,
                  Cross-Functional Collaboration, Software Engineering, Agile Methodologies
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
