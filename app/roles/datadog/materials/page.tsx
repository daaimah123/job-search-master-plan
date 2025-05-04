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
        <Link href="/roles/datadog" passHref>
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">MARKETING MATERIALS (DATADOG)</h1>
        <p className="text-gray-600">
          Optimized resume and cover letter frameworks for the Technical Curriculum Developer, Engineering Enablement
          role at Datadog.
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
              <CardTitle>Resume Framework for Datadog</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Professional Summary</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm">
                    Technical Curriculum Developer with software engineering background and 5+ years of experience
                    creating educational programs that effectively transfer complex technical knowledge. Proven track
                    record of developing standardized curriculum frameworks that maintained quality across different
                    cohorts, with program ratings exceeding expectations (3.66/4.0 average). Expertise in creating
                    technical documentation that reduced support tickets by 35% and increased feature adoption by 28%.
                    Seeking to leverage my unique combination of engineering knowledge and educational expertise to
                    enhance Datadog's engineering enablement initiatives.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Key Skills (Tailored for Datadog)</h3>
                <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <li>Engineering Knowledge Transfer</li>
                  <li>Technical Documentation Development</li>
                  <li>Curriculum Standardization</li>
                  <li>Cross-Functional Collaboration</li>
                  <li>Engineering Onboarding Programs</li>
                  <li>Educational Measurement Frameworks</li>
                  <li>Software Engineering (Full Stack)</li>
                  <li>Cloud Technologies & Observability</li>
                  <li>Technical Content Creation</li>
                  <li>Learning Experience Design</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Experience Highlights (With Datadog-Relevant Metrics)</h3>

                <div className="mb-4">
                  <h4 className="font-semibold">Techtonica – Curriculum Developer & Program Manager</h4>
                  <p className="text-sm text-gray-600 mb-2">San Francisco, CA | 2018-2023</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>
                      Developed comprehensive software engineering curriculum covering full-stack development,
                      databases, and cloud technologies, graduating 4 cohorts with over 10 participants each
                    </li>
                    <li>
                      Created standardized evaluation frameworks that maintained consistent quality across different
                      cohorts, with program ratings exceeding expectations (3.66/4.0 average)
                    </li>
                    <li>
                      Successfully pivoted to a 5-month program with integrated AI curriculum, demonstrating
                      adaptability to emerging technologies
                    </li>
                    <li>
                      Developed 15+ standardized rubrics for consistent evaluation of technical skills, ensuring quality
                      at scale
                    </li>
                    <li>
                      Created progressive learning paths that built complexity incrementally, connecting new technical
                      concepts to familiar ideas
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold">SurveyMonkey/Momentive.AI – Software Engineer</h4>
                  <p className="text-sm text-gray-600 mb-2">San Mateo, CA | 2015-2018</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>
                      Improved technical documentation for marketing team tools, reducing support tickets by 35% and
                      increasing feature adoption by 28%
                    </li>
                    <li>
                      Led cross-functional teams to deliver rebranding materials across 5 product lines within a
                      compressed 6-week timeline during transition to Momentive.AI
                    </li>
                    <li>Reduced cross-team misunderstandings by 60% through improved communication protocols</li>
                    <li>
                      Created a library of 25+ real-world examples demonstrating practical applications of marketing
                      tools
                    </li>
                    <li>Established documentation standards that were adopted across three additional departments</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Hack the Hood – Technical Curriculum Consultant</h4>
                  <p className="text-sm text-gray-600 mb-2">Oakland, CA | 2016-2017</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>
                      Developed standardized curriculum frameworks that maintained quality across different cohorts
                    </li>
                    <li>
                      Created modular curriculum architecture that separated core content from context-specific
                      applications
                    </li>
                    <li>
                      Implemented measurement frameworks that demonstrated 40% improvement in technical skill
                      development
                    </li>
                    <li>
                      Designed technical documentation templates that ensured consistent structure across different
                      topics
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Education & Certifications</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Bachelor of Science, Computer Science – University of California, Berkeley</li>
                  <li>Certified Professional in Learning & Performance (CPLP)</li>
                  <li>Advanced Certification in Technical Documentation</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cover">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cover Letter Framework for Datadog</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Opening Paragraph</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm">
                    I am writing to express my interest in the Technical Curriculum Developer, Engineering Enablement
                    position at Datadog. With my unique combination of software engineering expertise and curriculum
                    development experience, I am excited about the opportunity to contribute to Datadog's engineering
                    education initiatives. My background in creating technical learning experiences that effectively
                    transfer complex knowledge aligns perfectly with Datadog's need to develop curriculum for their
                    observability platform and cloud monitoring technologies.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Body Paragraph 1: Engineering Knowledge Transfer</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm">
                    At Techtonica, I developed comprehensive learning materials that built technical foundations while
                    addressing unique challenges faced by underrepresented groups in tech. I created progressive
                    learning paths that built complexity incrementally, connecting new technical concepts to familiar
                    ideas. This approach resulted in program ratings exceeding expectations (3.66/4.0 average) and
                    successful graduation of 4 cohorts with over 10 participants each, with 85% securing technical roles
                    within 6 months. My experience translating complex technical concepts into accessible learning
                    experiences would be invaluable in addressing Datadog's engineering knowledge transfer challenges,
                    ensuring consistent implementation of engineering best practices across your organization.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Body Paragraph 2: Technical Documentation & Standardization
                </h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm">
                    My experience improving technical documentation at SurveyMonkey demonstrates my ability to create
                    effective documentation that serves diverse audiences. By understanding specific workflows and
                    creating examples based on actual use cases, I reduced support tickets by 35% and increased feature
                    adoption by 28%. Additionally, I developed standardized curriculum frameworks at Hack the Hood and
                    Techtonica that maintained quality across different cohorts. I created 15+ standardized rubrics for
                    consistent evaluation of technical skills, ensuring quality at scale. This experience directly
                    addresses Datadog's need for standardized approaches to engineering education and high-quality
                    technical documentation.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Body Paragraph 3: Cross-Functional Collaboration</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm">
                    My experience coordinating between technical and business teams at SurveyMonkey and managing
                    relationships with industry partners at Techtonica has prepared me to address Datadog's need for
                    cross-functional technical alignment. During the transition to Momentive.AI, I led cross-functional
                    teams to deliver rebranding materials across 5 product lines within a compressed 6-week timeline,
                    reducing cross-team misunderstandings by 60% through improved communication protocols. This
                    experience demonstrates my ability to serve as a bridge between technical experts and educational
                    stakeholders, ensuring alignment around shared objectives—a critical skill for coordinating between
                    Datadog's engineering teams, product managers, and technical writers.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Closing Paragraph</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm">
                    As someone who values authentic expression, meaningful work, and analytical depth (reflecting my
                    Enneagram Type 4 with Type 5 as secondary), I am drawn to Datadog's mission of bringing together
                    infrastructure monitoring, application performance monitoring, and log management. I am excited
                    about the opportunity to contribute to Datadog's engineering enablement initiatives and would
                    welcome the chance to discuss how my experience creating effective technical learning experiences
                    can help address your specific challenges. Thank you for considering my application.
                  </p>
                </div>
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
                  { name: "Customize professional summary for Datadog application", completed: false },
                  { name: "Prioritize achievements relevant to engineering enablement", completed: false },
                  { name: "Add Datadog-specific keywords and terminology", completed: false },
                  { name: "Enhance quantifiable metrics in key achievements", completed: false },
                ],
              },
              {
                title: "Cover Letter Development",
                description: "Create a compelling cover letter that demonstrates your fit for the role",
                deadline: "May 20, 2025",
                tasks: [
                  { name: "Research Datadog's current engineering enablement initiatives", completed: false },
                  { name: "Draft cover letter addressing specific job requirements", completed: false },
                  { name: "Highlight case studies most relevant to Datadog's needs", completed: false },
                  { name: "Create tailored variations for different application contexts", completed: false },
                ],
              },
              {
                title: "Supplementary Materials",
                description: "Develop additional materials to support your application",
                deadline: "May 27, 2025",
                tasks: [
                  { name: "Create engineering enablement portfolio", completed: false },
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
                  { name: "Get feedback from professional in engineering enablement", completed: false },
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
              <CardTitle>LinkedIn Profile Optimization for Datadog Application</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Headline</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm">
                    Technical Curriculum Developer | Engineering Education Specialist | Software Engineer | Creating
                    effective learning experiences for complex technical concepts
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">About Section</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm">
                    I'm a technical education architect who combines software engineering expertise with curriculum
                    development mastery to create scalable, measurable learning programs for engineering teams. My
                    unique ability to translate between technical and educational domains allows me to design learning
                    experiences that balance engineering excellence with accessibility for diverse audiences.
                    <br />
                    <br />
                    With experience developing comprehensive learning materials that maintained program ratings
                    exceeding expectations (3.66/4.0 average) and technical documentation that reduced support tickets
                    by 35%, I specialize in making complex technical concepts accessible while ensuring standardized
                    quality across different contexts.
                    <br />
                    <br />
                    I'm passionate about creating learning environments that achieve business objectives while honoring
                    the depth and complexity of technical subjects—reflecting my values of authentic expression,
                    meaningful work, and analytical depth.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Featured Skills (Prioritized for Datadog)</h3>
                <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <li>Engineering Knowledge Transfer</li>
                  <li>Technical Documentation Development</li>
                  <li>Curriculum Standardization</li>
                  <li>Cross-Functional Collaboration</li>
                  <li>Engineering Onboarding Programs</li>
                  <li>Educational Measurement Frameworks</li>
                  <li>Software Engineering (Full Stack)</li>
                  <li>Cloud Technologies & Observability</li>
                  <li>Technical Content Creation</li>
                  <li>Learning Experience Design</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Experience Descriptions (Highlighting Datadog-Relevant Metrics)
                </h3>

                <div className="mb-4">
                  <h4 className="font-semibold">Techtonica – Curriculum Developer & Program Manager</h4>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <p className="text-sm">
                      Led the development of comprehensive software engineering curriculum that effectively transferred
                      complex technical knowledge to diverse audiences. Created standardized evaluation frameworks that
                      maintained consistent quality across different cohorts, with program ratings exceeding
                      expectations (3.66/4.0 average). Developed 15+ standardized rubrics for consistent evaluation of
                      technical skills, ensuring quality at scale. Successfully pivoted to a 5-month program with
                      integrated AI curriculum, demonstrating adaptability to emerging technologies.
                      <br />
                      <br />
                      #EngineeringEducation #CurriculumDevelopment #TechnicalKnowledgeTransfer
                      #StandardizationFrameworks
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold">SurveyMonkey/Momentive.AI – Software Engineer</h4>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <p className="text-sm">
                      Improved technical documentation for marketing team tools by understanding specific workflows and
                      creating examples based on actual use cases, reducing support tickets by 35% and increasing
                      feature adoption by 28%. Led cross-functional teams to deliver rebranding materials across 5
                      product lines within a compressed 6-week timeline during transition to Momentive.AI, reducing
                      cross-team misunderstandings by 60% through improved communication protocols.
                      <br />
                      <br />
                      #TechnicalDocumentation #CrossFunctionalCollaboration #SoftwareEngineering #KnowledgeTransfer
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
