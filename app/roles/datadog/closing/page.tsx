import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ClosingPage() {
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
        <h1 className="text-3xl font-bold mb-2">CLOSING THE DEAL (DATADOG)</h1>
        <p className="text-gray-600">
          Interview preparation and strategies for the Technical Curriculum Developer, Engineering Enablement role at
          Datadog.
        </p>
      </div>

      <Tabs defaultValue="questions">
        <TabsList className="mb-6">
          <TabsTrigger value="about">About Yourself</TabsTrigger>
          <TabsTrigger value="five-years">Five Years</TabsTrigger>
          <TabsTrigger value="key-questions">Key Questions</TabsTrigger>
          <TabsTrigger value="concerns">Addressing Concerns</TabsTrigger>
          <TabsTrigger value="implementation">Implementation Plan</TabsTrigger>
          <TabsTrigger value="questions">Anticipated Questions</TabsTrigger>
          <TabsTrigger value="stories">STAR Stories</TabsTrigger>
          <TabsTrigger value="questions-to-ask">Questions to Ask</TabsTrigger>
          <TabsTrigger value="negotiation">Negotiation Strategy</TabsTrigger>
        </TabsList>

        <TabsContent value="about">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>About Yourself</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Brief Summary</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm">
                    "I'm a technical curriculum developer with a background in software engineering and a passion for
                    making complex concepts accessible. I've consistently improved learning outcomes and reduced
                    knowledge gaps in previous roles. I'm excited about the opportunity to bring my skills to Datadog
                    and contribute to your engineering enablement initiatives."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="five-years">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Where do you see yourself in 5 years?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Future Goals</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm">
                    "In five years, I see myself as a key contributor to Datadog's engineering enablement strategy. I
                    want to have significantly impacted the onboarding process for new engineers, improved knowledge
                    transfer across teams, and helped to create a culture of continuous learning. I'm also interested in
                    exploring opportunities to mentor junior team members and contribute to the broader engineering
                    community through open-source projects or conference presentations."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="key-questions">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Key Questions to Answer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Addressing Key Areas</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Question:</strong> "Why are you interested in this role at Datadog?"
                    <p className="mt-1 text-gray-600">
                      Answer: "I'm drawn to Datadog's innovative culture and its commitment to providing engineers with
                      the tools they need to succeed. I believe my skills in curriculum development and software
                      engineering align perfectly with the needs of your engineering enablement team, and I'm excited
                      about the opportunity to contribute to your mission."
                    </p>
                  </li>
                  <li>
                    <strong>Question:</strong> "What are your salary expectations?"
                    <p className="mt-1 text-gray-600">
                      Answer: "Based on my research and experience, I'm looking for a base salary in the
                      $135,000-$140,000 range. However, I'm open to discussing the overall compensation package and
                      finding a solution that works for both of us."
                    </p>
                  </li>
                  <li>
                    <strong>Question:</strong> "Do you have any questions for us?"
                    <p className="mt-1 text-gray-600">
                      Answer: (Refer to the "Questions to Ask" tab for a list of strategic questions)
                    </p>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="concerns">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Addressing Potential Concerns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Proactive Approach</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Concern:</strong> "Lack of direct experience with Datadog's platform."
                    <p className="mt-1 text-gray-600">
                      Response: "While I don't have direct experience with Datadog's platform, I have a strong
                      understanding of observability concepts and cloud monitoring. I'm a quick learner and I'm
                      confident I can quickly get up to speed on the specifics of your platform. I'm also eager to learn
                      from your team and contribute my expertise in curriculum development to improve your existing
                      training materials."
                    </p>
                  </li>
                  <li>
                    <strong>Concern:</strong> "Limited experience working with large engineering teams."
                    <p className="mt-1 text-gray-600">
                      Response: "While my experience has primarily been with smaller teams, I have a proven track record
                      of collaborating effectively with cross-functional stakeholders. I'm comfortable working in a
                      fast-paced environment and I'm confident I can adapt my communication style to effectively engage
                      with engineers at all levels of the organization. I'm also eager to learn from experienced members
                      of your team and contribute to a positive and collaborative work environment."
                    </p>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="implementation">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>90-Day Implementation Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">First 90 Days</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Month 1:</strong> "Focus on learning Datadog's platform, meeting with key stakeholders, and
                    understanding the current state of engineering enablement initiatives."
                  </li>
                  <li>
                    <strong>Month 2:</strong> "Identify key areas for improvement in the onboarding process and
                    knowledge transfer across teams. Begin developing a plan to address these areas."
                  </li>
                  <li>
                    <strong>Month 3:</strong> "Implement initial changes to the onboarding process and knowledge
                    transfer materials. Begin tracking metrics to measure the impact of these changes."
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="questions">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Anticipated Interview Questions & Responses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Technical Knowledge Transfer</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                  <p className="font-medium mb-2">
                    Q: How do you approach making complex technical concepts accessible to diverse audiences?
                  </p>
                  <p className="text-sm">
                    A: I use a methodology I call "conceptual anchoring" where I connect new technical concepts to
                    familiar ideas. At Techtonica, I developed progressive learning paths that built complexity
                    incrementally. For example, when teaching observability concepts, I might start with the familiar
                    idea of debugging, then expand to logging, then metrics, and finally distributed tracing—each
                    building on the previous concept. This approach resulted in program ratings exceeding expectations
                    (3.66/4.0 average) and helped participants from diverse backgrounds successfully master complex
                    engineering concepts. For Datadog specifically, I would apply this approach to make concepts like
                    distributed tracing and cloud monitoring accessible to various engineering teams while maintaining
                    technical accuracy.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="font-medium mb-2">
                    Q: How would you ensure engineering knowledge is transferred consistently across different teams?
                  </p>
                  <p className="text-sm">
                    A: I believe in creating modular curriculum architecture that separates core content from
                    context-specific applications. At Techtonica, I developed 15+ standardized rubrics for consistent
                    evaluation of technical skills across cohorts. For Datadog, I would create a core curriculum
                    covering fundamental observability concepts, then develop team-specific modules that apply these
                    concepts to their particular contexts. I would implement standardized evaluation frameworks to
                    ensure consistent quality, while allowing flexibility for different team needs. This approach would
                    help address Datadog's engineering enablement standardization challenges while accommodating the
                    diverse needs of different engineering teams.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Technical Documentation</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                  <p className="font-medium mb-2">
                    Q: How do you approach creating technical documentation that serves both internal engineering teams
                    and external developers?
                  </p>
                  <p className="text-sm">
                    A: I focus on user-centered documentation that anticipates questions and provides clear, contextual
                    examples. At SurveyMonkey, I improved documentation for marketing team tools by understanding their
                    specific workflows and creating examples based on actual use cases. This reduced support tickets by
                    35% and increased feature adoption by 28%. For Datadog, I would first understand the different use
                    cases for both internal engineers and external developers. Then, I would create a documentation
                    framework with a shared core that explains fundamental concepts, supplemented by specific examples
                    and use cases tailored to each audience. I would also implement a feedback mechanism to continuously
                    improve documentation based on user experience, ensuring it remains relevant and effective as
                    Datadog's platform evolves.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="font-medium mb-2">
                    Q: How do you ensure technical accuracy while making documentation accessible?
                  </p>
                  <p className="text-sm">
                    A: My software engineering background gives me a unique advantage here. I establish a rigorous
                    review process involving both technical experts and representative users. At SurveyMonkey, I created
                    a library of 25+ real-world examples demonstrating practical applications of marketing tools, each
                    verified by engineering for technical accuracy and by users for clarity. For Datadog, I would
                    implement a similar process, working closely with your engineering teams to ensure technical
                    accuracy while testing with users to verify accessibility. I would also create a glossary of
                    technical terms with clear, consistent definitions to ensure precision across all documentation.
                    This balance of technical accuracy and accessibility would help address Datadog's technical
                    documentation challenges.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Cross-Functional Collaboration</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="font-medium mb-2">
                    Q: How do you coordinate between engineering teams, product managers, and technical writers to
                    ensure consistent and accurate technical education materials?
                  </p>
                  <p className="text-sm">
                    A: I serve as a bridge between technical experts and educational stakeholders, ensuring alignment
                    around shared objectives. During the transition to Momentive.AI, I led cross-functional teams to
                    deliver rebranding materials across 5 product lines within a compressed 6-week timeline. I
                    established clear communication channels, created a shared project management framework, and
                    developed translation processes to convert technical specifications into accessible language. This
                    reduced cross-team misunderstandings by 60%. For Datadog, I would implement a similar approach,
                    creating structured collaboration processes that respect the expertise of each group while ensuring
                    alignment around shared educational goals. I would establish regular touchpoints, clear
                    documentation of decisions, and feedback loops to continuously improve collaboration. This would
                    help address Datadog's cross-functional technical alignment challenges.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Engineering Onboarding</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="font-medium mb-2">
                    Q: How would you approach designing an onboarding program for new engineers joining Datadog's
                    platform team?
                  </p>
                  <p className="text-sm">
                    A: I create structured learning pathways that build from fundamentals to advanced concepts, with
                    clear milestones and practical applications at each stage. At Techtonica, I successfully graduated 4
                    cohorts with over 10 participants each, with 85% securing technical roles within 6 months. For
                    Datadog, I would design an onboarding program that starts with core observability concepts, then
                    progressively introduces more complex aspects of Datadog's platform. I would incorporate hands-on
                    projects that simulate real-world scenarios engineers will encounter, allowing them to apply their
                    learning in context. I would also implement a mentorship component, pairing new engineers with
                    experienced team members. This structured approach, combined with regular feedback and assessment,
                    would reduce time-to-productivity for new engineering hires and ensure consistent understanding of
                    Datadog's engineering practices across the organization.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stories">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>STAR Stories for Behavioral Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Technical Curriculum Development Success</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="font-medium mb-2">
                    Question: Tell me about a time when you successfully developed technical curriculum that addressed
                    complex concepts.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>Situation:</strong> At Techtonica, I needed to develop a curriculum module on cloud
                      computing and deployment that would be accessible to participants with limited prior exposure to
                      these concepts.
                    </li>
                    <li>
                      <strong>Task:</strong> My goal was to create learning materials that would build understanding
                      incrementally while providing practical, hands-on experience with cloud technologies.
                    </li>
                    <li>
                      <strong>Action:</strong> I developed a progressive learning path that started with fundamental
                      concepts like virtualization, then built to container basics, and finally to cloud deployment. I
                      created hands-on labs that simulated real-world scenarios, allowing participants to deploy
                      applications to cloud environments. I also developed a comprehensive glossary of cloud terminology
                      and created visual models to illustrate abstract concepts.
                    </li>
                    <li>
                      <strong>Result:</strong> The cloud computing module received the highest satisfaction ratings of
                      any technical module (3.8/4.0), and 90% of participants successfully completed the associated
                      project work. Several participants specifically mentioned in their feedback that the incremental
                      approach helped them grasp concepts they had previously struggled with. This module became a model
                      for our approach to other complex technical topics.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Technical Documentation Improvement</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="font-medium mb-2">
                    Question: Describe a situation where you improved technical documentation that had a measurable
                    impact.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>Situation:</strong> At SurveyMonkey, the marketing team was struggling with a complex
                      internal tool for campaign analytics, resulting in numerous support tickets and underutilization
                      of key features.
                    </li>
                    <li>
                      <strong>Task:</strong> I was asked to improve the technical documentation to reduce support burden
                      and increase feature adoption.
                    </li>
                    <li>
                      <strong>Action:</strong> I conducted user interviews with 12 marketing team members to understand
                      their specific workflows and pain points. I analyzed support ticket patterns to identify common
                      areas of confusion. Based on this research, I completely restructured the documentation, creating
                      user-centered content organized around common tasks rather than features. I developed 25+
                      real-world examples based on actual marketing use cases and created step-by-step tutorials with
                      screenshots for complex workflows.
                    </li>
                    <li>
                      <strong>Result:</strong> Within three months of rolling out the improved documentation, support
                      tickets related to the tool decreased by 35%, and adoption of previously underutilized features
                      increased by 28%. The documentation approach was so successful that it was adopted as a standard
                      for three additional internal tools, and I was asked to lead a documentation workshop for other
                      engineering teams.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Cross-Functional Collaboration</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="font-medium mb-2">
                    Question: Tell me about a time when you successfully coordinated between technical and non-technical
                    stakeholders on a complex project.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>Situation:</strong> During the transition from SurveyMonkey to Momentive.AI, we needed to
                      update technical documentation and user interfaces across five product lines within a compressed
                      six-week timeline.
                    </li>
                    <li>
                      <strong>Task:</strong> I was tasked with coordinating between engineering teams, product managers,
                      and marketing stakeholders to ensure consistent implementation of rebranding while maintaining
                      technical accuracy.
                    </li>
                    <li>
                      <strong>Action:</strong> I established clear communication channels between all stakeholders and
                      created a shared project management framework that aligned technical constraints with business
                      objectives. I developed a translation process to convert technical specifications into accessible
                      language for non-technical stakeholders. I facilitated regular cross-functional meetings to ensure
                      alignment and address emerging challenges, and implemented a documentation system that captured
                      decisions and rationale accessible to all stakeholders.
                    </li>
                    <li>
                      <strong>Result:</strong> We successfully delivered rebranding materials across all five product
                      lines within the six-week timeline. Cross-team misunderstandings decreased by 60% through improved
                      communication protocols, and cross-functional collaboration efficiency increased by 45% through
                      standardized processes. The collaboration framework I created was adopted for three subsequent
                      major initiatives.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Adapting to Changing Circumstances</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="font-medium mb-2">
                    Question: Describe a situation where you had to adapt your approach due to changing circumstances or
                    requirements.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>Situation:</strong> At Techtonica, we faced a sudden shift to remote learning due to the
                      pandemic, requiring a complete redesign of our hands-on, collaborative curriculum.
                    </li>
                    <li>
                      <strong>Task:</strong> I needed to adapt our technical curriculum to a virtual environment while
                      maintaining educational quality and supporting participants through the transition.
                    </li>
                    <li>
                      <strong>Action:</strong> I redesigned our curriculum delivery approach, breaking content into
                      smaller modules better suited for virtual learning. I implemented new collaboration tools and
                      created structured virtual pair programming sessions. I developed asynchronous learning resources
                      to accommodate different home situations and created new assessment methods appropriate for remote
                      learning. I also established regular check-ins to monitor participant well-being and address
                      emerging challenges.
                    </li>
                    <li>
                      <strong>Result:</strong> Despite the challenging circumstances, we maintained a program completion
                      rate of 85%, and participant satisfaction ratings remained strong at 3.5/4.0. Several participants
                      noted that the adaptations actually improved certain aspects of the program, such as the increased
                      documentation and asynchronous resources. The experience led to a permanent hybrid model that
                      incorporated the best elements of both in-person and virtual learning.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="questions-to-ask">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Strategic Questions to Ask Interviewers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Understanding Engineering Enablement Challenges</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Question:</strong> "What are the biggest challenges your engineering teams face when it
                    comes to knowledge transfer and technical education?"
                    <p className="mt-1 text-gray-600">
                      Rationale: This question demonstrates your focus on addressing their specific challenges and
                      allows you to connect your experience to their needs.
                    </p>
                  </li>
                  <li>
                    <strong>Question:</strong> "How do you currently measure the effectiveness of your engineering
                    enablement initiatives?"
                    <p className="mt-1 text-gray-600">
                      Rationale: This highlights your metrics-focused approach and opens a discussion about how you
                      could implement measurement frameworks that demonstrate educational effectiveness.
                    </p>
                  </li>
                  <li>
                    <strong>Question:</strong> "What specific aspects of Datadog's observability platform do engineers
                    find most challenging to master?"
                    <p className="mt-1 text-gray-600">
                      Rationale: This shows your interest in understanding the technical complexities specific to
                      Datadog and your focus on addressing the most critical knowledge gaps.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Understanding Team Dynamics and Collaboration</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Question:</strong> "How do engineering, product, and documentation teams currently
                    collaborate on technical education materials?"
                    <p className="mt-1 text-gray-600">
                      Rationale: This demonstrates your understanding of cross-functional collaboration challenges and
                      your interest in improving these processes.
                    </p>
                  </li>
                  <li>
                    <strong>Question:</strong> "What does success look like for the Technical Curriculum Developer role
                    in the first 6-12 months?"
                    <p className="mt-1 text-gray-600">
                      Rationale: This shows your focus on delivering measurable results and helps you understand their
                      priorities and expectations.
                    </p>
                  </li>
                  <li>
                    <strong>Question:</strong> "How does the engineering enablement team interact with different
                    engineering groups across the organization?"
                    <p className="mt-1 text-gray-600">
                      Rationale: This demonstrates your understanding of the need to work across multiple teams and
                      adapt approaches to different audiences.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Understanding Growth and Development</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Question:</strong> "How does Datadog support ongoing professional development for the
                    engineering enablement team?"
                    <p className="mt-1 text-gray-600">
                      Rationale: This demonstrates your commitment to continuous learning and growth, reflecting your
                      Enneagram Type 4 and 5 values of depth and mastery.
                    </p>
                  </li>
                  <li>
                    <strong>Question:</strong> "What opportunities exist for innovation in engineering education at
                    Datadog?"
                    <p className="mt-1 text-gray-600">
                      Rationale: This highlights your interest in bringing creative approaches to technical education,
                      reflecting your value of authentic expression.
                    </p>
                  </li>
                  <li>
                    <strong>Question:</strong> "How does Datadog's engineering culture influence your approach to
                    engineering enablement?"
                    <p className="mt-1 text-gray-600">
                      Rationale: This demonstrates your understanding that effective technical education must align with
                      the organization's engineering culture and values.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Closing Questions</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Question:</strong> "Based on our conversation, do you have any concerns about my ability to
                    succeed in this role that I could address?"
                    <p className="mt-1 text-gray-600">
                      Rationale: This demonstrates your openness to feedback and gives you an opportunity to address any
                      potential concerns.
                    </p>
                  </li>
                  <li>
                    <strong>Question:</strong> "What are the next steps in the interview process?"
                    <p className="mt-1 text-gray-600">
                      Rationale: This shows your continued interest in the position and helps you prepare for subsequent
                      stages.
                    </p>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="negotiation">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Negotiation Strategy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Preparation</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      Research salary ranges for Technical Curriculum Developer roles at Datadog and similar companies
                      in the industry (target range: $120,000-$150,000)
                    </li>
                    <li>
                      Document your unique value proposition, emphasizing metrics like:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Reduced support tickets by 35% through improved technical documentation</li>
                        <li>Increased feature adoption by 28% through effective knowledge transfer</li>
                        <li>Maintained program ratings exceeding expectations (3.66/4.0 average)</li>
                        <li>Reduced cross-team misunderstandings by 60% through improved communication protocols</li>
                      </ul>
                    </li>
                    <li>
                      Identify your priorities beyond base salary (remote work flexibility, professional development
                      opportunities, education stipend)
                    </li>
                    <li>
                      Determine your walk-away point ($110,000 base salary with limited flexibility, or $105,000 with
                      significant flexibility and strong benefits)
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Initial Response to Offer</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm mb-3">
                    "Thank you for the offer. I'm excited about the opportunity to join Datadog's engineering enablement
                    team. I've been reflecting on the responsibilities of the role and the impact I can make based on my
                    experience developing technical curriculum that maintained program ratings exceeding expectations
                    and creating documentation that reduced support tickets by 35%. Given my background in both software
                    engineering and curriculum development, I was hoping for a base salary in the $135,000-$140,000
                    range. Is there flexibility to discuss this further?"
                  </p>
                  <p className="text-sm font-medium">Key points:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Express enthusiasm for the role and company</li>
                    <li>Reference specific metrics that demonstrate your value</li>
                    <li>Provide a salary range rather than a specific number</li>
                    <li>Ask about flexibility in a collaborative way</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Negotiation Approaches</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <h4 className="font-medium mb-2">If they can't meet your salary request:</h4>
                  <p className="text-sm mb-3">
                    "I understand there are budget constraints to consider. I'm very interested in joining Datadog, so
                    I'm open to exploring other aspects of the compensation package. Would there be flexibility on
                    [remote work options / professional development budget / education stipend / equity / performance
                    bonus structure]?"
                  </p>

                  <h4 className="font-medium mb-2">If they ask for your current salary:</h4>
                  <p className="text-sm mb-3">
                    "My current compensation is structured differently, so it's not directly comparable. I've researched
                    the market rate for this role with my experience level, and I'm looking for a package in the
                    $135,000-$140,000 range. My focus is on finding the right role where I can make a significant
                    impact, which I believe this position at Datadog offers."
                  </p>

                  <h4 className="font-medium mb-2">If they make a counter-offer:</h4>
                  <p className="text-sm">
                    "Thank you for working with me on this. The adjusted offer is definitely moving in the right
                    direction. Given my experience developing standardized curriculum frameworks and improving technical
                    documentation that increased feature adoption by 28%, I believe I can bring significant value to
                    Datadog's engineering enablement initiatives. Would it be possible to meet in the middle at
                    [specific number]? This would make me feel valued and allow me to fully commit to making an impact
                    in this role."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Closing the Negotiation</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm mb-3">
                    "Thank you for working with me on this offer. I'm excited about the opportunity to contribute to
                    Datadog's engineering enablement initiatives and believe my background in both software engineering
                    and curriculum development will allow me to make a significant impact. I appreciate your flexibility
                    and am pleased to accept the offer. I'm looking forward to joining the team and getting started."
                  </p>
                  <p className="text-sm font-medium">Follow-up:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Request the final offer in writing</li>
                    <li>Review all details carefully before signing</li>
                    <li>Send a thank-you note expressing enthusiasm for joining the team</li>
                    <li>Begin preparing for your transition to the new role</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
