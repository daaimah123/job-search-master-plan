import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ImplementationPlan from "@/components/implementation-plan"

export default function ClosingPage() {
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
        <h1 className="text-3xl font-bold mb-2">CLOSING THE DEAL</h1>
        <p className="text-gray-600">
          Interview preparation strategies to effectively communicate your value and secure the role.
        </p>
      </div>

      <Tabs defaultValue="about">
        <TabsList className="mb-6">
          <TabsTrigger value="about">About Yourself</TabsTrigger>
          <TabsTrigger value="five-years">Five Years</TabsTrigger>
          <TabsTrigger value="key-questions">Key Questions</TabsTrigger>
          <TabsTrigger value="concerns">Addressing Concerns</TabsTrigger>
          <TabsTrigger value="implementation">Implementation Plan</TabsTrigger>
          <TabsTrigger value="anticipated-questions">Anticipated Questions</TabsTrigger>
          <TabsTrigger value="stories">STAR Stories</TabsTrigger>
          <TabsTrigger value="questions-to-ask">Questions to Ask</TabsTrigger>
          <TabsTrigger value="negotiation">Negotiation Strategy</TabsTrigger>
        </TabsList>

        <TabsContent value="about">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>"Tell me about yourself" (90-second response)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="mb-4">
                  "I'm a technical education architect who combines software engineering expertise with curriculum
                  development mastery to create scalable, measurable learning programs. My background includes managing
                  Techtonica's software engineering training program, leading curriculum development at Hack the Hood,
                  and implementing data-driven experiments at SurveyMonkey that delivered significant business impact.
                </p>

                <p className="mb-4">
                  Throughout my career, I've specialized in creating standardized educational frameworks that ensure
                  consistent quality while delivering measurable results. At Techtonica, I led a program that
                  successfully graduated four cohorts of 10+ participants each, placed 16 graduates at Sony, and
                  maintained satisfaction ratings exceeding expectations. At SurveyMonkey, I implemented experiments
                  that increased SQLs by 25%, resulting in $7M in incremental annual pipeline revenue.
                </p>

                <p className="mb-4">
                  What drives my approach is a commitment to creating learning experiences that balance technical
                  excellence with practical application. I believe education is most effective when it connects
                  technical concepts to measurable outcomes, and I've focused my career on developing curriculum
                  frameworks and program management approaches that achieve this balance.
                </p>

                <p>
                  I'm particularly drawn to the Technical Curriculum Developer, Program Manager role at Intuit because
                  it would allow me to apply this approach to your technical education initiatives—helping create
                  learning experiences that serve diverse audiences while delivering measurable business impact."
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="five-years">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>"Where do you see yourself in five years?"</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="mb-4">
                  "In five years, I see myself having established a reputation as a leader in technical curriculum
                  development and program management, with a track record of creating educational initiatives that
                  deliver measurable results for both learners and the organization.
                </p>

                <p className="mb-4">
                  Professionally, I aim to have developed comprehensive curriculum frameworks that have become standards
                  for technical education at Intuit, ensuring consistent quality across programs while demonstrating
                  clear business impact. I'd want to have built systems for measuring and optimizing educational
                  effectiveness, allowing data-driven decisions about curriculum development and program management.
                </p>

                <p className="mb-4">
                  I'm also interested in expanding my expertise in emerging technologies and their educational
                  applications. I could see myself having developed innovative approaches to teaching complex technical
                  concepts, particularly in areas that are strategic priorities for Intuit like AI, cloud technologies,
                  and financial software.
                </p>

                <p className="mb-4">
                  Most importantly, I want to have maintained my commitment to creating inclusive learning pathways.
                  This might include developing curriculum specifically designed to support diverse learning needs,
                  implementing program management approaches that accommodate different learning styles, or creating
                  educational frameworks that connect technical skills to practical application.
                </p>

                <p>
                  The Technical Curriculum Developer, Program Manager role would be an ideal foundation for this path,
                  allowing me to build both curriculum development expertise and program management experience while
                  supporting Intuit's educational mission."
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="key-questions">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Key Questions to Ask</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p>
                    "I'd love to understand more about the current state of technical curriculum development at Intuit.
                    What are the biggest challenges in creating consistent, high-quality learning experiences across
                    different programs and contexts?"
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p>
                    "How does the technical curriculum team collaborate with subject matter experts and instructional
                    designers when developing new educational materials? I'm interested in understanding the
                    cross-functional dynamics of curriculum development at Intuit."
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p>
                    "What metrics does Intuit use to measure the effectiveness of technical education programs? I'm
                    curious about how you balance quantitative outcomes with qualitative learning experiences."
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p>
                    "Could you share more about how Intuit approaches technical education for different audiences? I'm
                    interested in your strategies for ensuring curriculum works for employees, partners, and customers
                    with various backgrounds and experience levels."
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p>
                    "What opportunities exist for innovation in technical curriculum development at Intuit? I'm
                    particularly interested in how you're incorporating emerging technologies and pedagogical approaches
                    into your educational initiatives."
                  </p>
                </div>
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
                <h3 className="text-lg font-semibold mb-2">
                  If asked about limited experience with Intuit's specific products:
                </h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="mb-4">
                    "While my direct experience with Intuit's specific products is limited, my background gives me a
                    strong foundation for quickly developing expertise in this area. My software engineering experience
                    at Momentive.AI included working with various technologies and platforms, which has familiarized me
                    with the process of learning new technical environments and translating that knowledge into
                    educational content.
                  </p>

                  <p className="mb-4">
                    More importantly, my experience developing technical curricula and managing educational programs is
                    directly relevant to the challenges of creating effective learning experiences for Intuit's
                    products. At Techtonica, I successfully integrated AI curriculum into our program when many
                    educators were still figuring out how to approach this emerging technology. This required rapidly
                    building my own understanding while simultaneously creating learning materials that made these
                    concepts accessible to others—exactly the skill set needed for technical curriculum development with
                    evolving technologies.
                  </p>

                  <p className="mb-4">
                    I've also demonstrated the ability to quickly master and teach new technologies through my pivot to
                    virtual learning platforms during the pandemic. Within weeks, I was able to select appropriate
                    technologies, adapt materials, and train others on effective implementation—showing my ability to
                    rapidly build expertise in new technical domains.
                  </p>

                  <p className="mb-4">
                    What excites me about Intuit's products is their combination of technical sophistication and
                    real-world impact, requiring curriculum that balances technical depth with practical application for
                    diverse users. My background helping people navigate significant transitions in their technical
                    understanding positions me well to develop curriculum that achieves this balance, even as I deepen
                    my own technical expertise in Intuit's specific products.
                  </p>

                  <p>
                    I'm committed to rapidly building specialized knowledge of Intuit's products, and I've already begun
                    exploring documentation and learning resources to better understand the current educational
                    landscape."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  If asked about managing competing priorities in curriculum development:
                </h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="mb-4">
                    "In my experience developing curriculum across multiple organizations, I've developed a framework
                    for addressing competing priorities that balances stakeholder needs with educational effectiveness.
                  </p>

                  <p className="mb-4">
                    At Techtonica, we often faced situations where different stakeholders had different priorities for
                    our curriculum—technical teams wanted deeper technical content, career services wanted more
                    professional skills, and participants wanted more practical applications. Rather than simply
                    compromising between these perspectives, I implemented a three-step approach: First, I would clearly
                    articulate the core learning objectives that needed to be achieved regardless of other
                    considerations. Second, I would identify where different priorities could be integrated rather than
                    treated as competing demands. Finally, I would create a curriculum structure that maintained focus
                    on core objectives while incorporating elements that addressed different stakeholder needs.
                  </p>

                  <p className="mb-4">
                    For example, when developing our software engineering curriculum, I created a framework that
                    integrated technical concepts, practical applications, and professional context rather than treating
                    these as separate modules. This approach satisfied technical teams' desire for depth, participants'
                    need for practical relevance, and career services' focus on professional preparation.
                  </p>

                  <p className="mb-4">
                    In curriculum development contexts, I would apply a similar approach. When facing competing
                    priorities, I would focus first on identifying the core learning objectives that align with business
                    needs. Then I would look for integration opportunities rather than compromises, creating curriculum
                    structures that address multiple priorities simultaneously. Finally, I would establish clear metrics
                    for measuring effectiveness, ensuring that decisions about competing priorities are based on data
                    rather than just stakeholder preferences.
                  </p>

                  <p>
                    This balanced approach—combining clear learning objectives with integrated design and data-driven
                    decision making—has allowed me to develop curriculum that effectively addresses diverse stakeholder
                    needs while maintaining educational integrity."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  If asked about scaling curriculum development across a large organization:
                </h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="mb-4">
                    "My experience developing standardized curriculum frameworks has given me a structured approach to
                    scaling educational initiatives across different contexts and audiences.
                  </p>

                  <p className="mb-4">
                    First, I focus on creating clear curriculum architecture that separates core content from
                    context-specific applications. At Hack the Hood, I developed a modular curriculum structure that
                    included foundational technical concepts, practical applications, and contextual elements. This
                    architecture allowed instructors to maintain consistency in core content while adapting applications
                    and context to specific cohort needs.
                  </p>

                  <p className="mb-4">
                    Second, I establish standardized learning objectives and assessment methods that ensure consistent
                    outcomes while allowing flexibility in delivery. At Techtonica, I created detailed rubrics for
                    evaluating technical projects that maintained consistent standards across different instructors and
                    cohorts while accommodating different project topics and approaches.
                  </p>

                  <p className="mb-4">
                    Third, I develop comprehensive documentation and training for those implementing the curriculum.
                    When transitioning Hack the Hood's programs to virtual delivery, I created not just adapted
                    curriculum materials but also implementation guides that helped instructors understand the rationale
                    behind different elements and how to adapt them effectively.
                  </p>

                  <p className="mb-4">
                    Fourth, I implement feedback mechanisms and continuous improvement processes that allow curriculum
                    to evolve based on implementation experience. At Techtonica, we conducted regular retrospectives
                    after each module, gathering insights from both instructors and participants that informed ongoing
                    refinements.
                  </p>

                  <p className="mb-4">
                    Finally, I create communities of practice among curriculum implementers, fostering knowledge sharing
                    and collaborative problem-solving. By connecting instructors across different cohorts, we created
                    channels for sharing effective approaches and addressing common challenges.
                  </p>

                  <p>
                    This comprehensive approach to curriculum scaling—combining modular architecture, standardized
                    objectives, implementation support, continuous improvement, and communities of practice—would be
                    valuable for developing curriculum frameworks that can be effectively implemented across Intuit's
                    various educational initiatives and contexts."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="implementation">
          <ImplementationPlan
            title="INTERVIEW PREPARATION"
            description="Preparing for effective interviews that demonstrate your value to Intuit."
            startDate="May 5, 2025"
            milestones={[
              {
                title: "Response Development",
                description: "Develop and refine key interview responses",
                deadline: "May 15, 2025",
                tasks: [
                  { name: "Prepare tailored 'tell me about yourself' response", completed: false },
                  { name: "Develop 'five-year plan' aligned with Intuit's growth", completed: false },
                  { name: "Create answers for common technical curriculum questions", completed: false },
                  { name: "Prepare responses to potential concerns", completed: false },
                ],
              },
              {
                title: "Technical Preparation",
                description: "Prepare for technical aspects of the interview process",
                deadline: "May 22, 2025",
                tasks: [
                  { name: "Research Intuit's technical stack and documentation", completed: false },
                  { name: "Prepare curriculum design exercise examples", completed: false },
                  { name: "Practice explaining technical concepts simply", completed: false },
                  { name: "Develop framework for technical curriculum assessment", completed: false },
                ],
              },
              {
                title: "Question Preparation",
                description: "Develop insightful questions that demonstrate your expertise",
                deadline: "May 29, 2025",
                tasks: [
                  { name: "Research current Intuit educational initiatives", completed: false },
                  { name: "Prepare questions specific to each interview stage", completed: false },
                  { name: "Develop questions for different stakeholders", completed: false },
                  { name: "Create follow-up questions based on potential answers", completed: false },
                ],
              },
              {
                title: "Practice and Refinement",
                description: "Practice and refine your interview performance",
                deadline: "June 5, 2025",
                tasks: [
                  { name: "Conduct mock interviews with technical education professionals", completed: false },
                  { name: "Record and review practice responses", completed: false },
                  { name: "Refine delivery based on feedback", completed: false },
                  { name: "Practice virtual interview technical setup", completed: false },
                ],
              },
            ]}
          />
        </TabsContent>

        <TabsContent value="anticipated-questions">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Anticipated Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="mb-4">Content for anticipated questions will go here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stories">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>STAR Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="mb-4">Content for STAR stories will go here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="questions-to-ask">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Questions to Ask</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="mb-4">Content for questions to ask will go here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="negotiation">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Negotiation Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="mb-4">Content for negotiation strategy will go here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
