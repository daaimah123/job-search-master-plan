import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ImplementationPage() {
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
        <h1 className="text-3xl font-bold mb-2">MASTER IMPLEMENTATION PLAN (DATADOG)</h1>
        <p className="text-gray-600">
          Comprehensive implementation timeline starting May 5, 2025, to execute your career strategy for the Technical
          Curriculum Developer role at Datadog.
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>90-Day Implementation Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">Date Range</TableHead>
                  <TableHead>Focus Areas</TableHead>
                  <TableHead>Key Milestones</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    May 5-12, 2025
                    <br />
                    <span className="text-sm text-gray-500">Week 1</span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Observability Knowledge Foundation</div>
                      <div>• Edge Statement Refinement</div>
                      <div>• Self-Expression Practices Setup</div>
                      <div>• Initial Resume Optimization</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Complete Datadog's introductory training courses</div>
                      <div>• Create 3 edge statement variations focused on engineering enablement</div>
                      <div>• Schedule weekly self-expression activities</div>
                      <div>• Customize professional summary for Datadog</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                      Upcoming
                    </Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    May 13-19, 2025
                    <br />
                    <span className="text-sm text-gray-500">Week 2</span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Technical Translation Enhancement</div>
                      <div>• Core Strengths Documentation</div>
                      <div>• Cover Letter Development</div>
                      <div>• Knowledge-Connection Balance</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Create explanations of observability concepts for different audiences</div>
                      <div>• Build evidence portfolio for each core strength</div>
                      <div>• Draft cover letter addressing Datadog's engineering enablement needs</div>
                      <div>• Identify 3-5 potential networking connections at Datadog</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                      Upcoming
                    </Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    May 20-26, 2025
                    <br />
                    <span className="text-sm text-gray-500">Week 3</span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Datadog-Specific Adaptation of Case Studies</div>
                      <div>• Engineering Enablement Focus</div>
                      <div>• Future Path Analysis</div>
                      <div>• Energy Management Implementation</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Map each case study to specific Datadog challenges</div>
                      <div>• Document engineering enablement approaches and metrics</div>
                      <div>• Research salary ranges for future career paths</div>
                      <div>• Create job search schedule with energy peaks in mind</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                      Upcoming
                    </Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    May 27-June 2, 2025
                    <br />
                    <span className="text-sm text-gray-500">Week 4</span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Datadog-Specific Materials Creation</div>
                      <div>• Visual Representation of Case Studies</div>
                      <div>• Supplementary Materials Development</div>
                      <div>• Progress Recognition System Setup</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Develop curriculum framework for Datadog training</div>
                      <div>• Create before/after diagrams for each case study</div>
                      <div>• Create sample curriculum outline for a Datadog feature</div>
                      <div>• Establish weekly reflection sessions</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                      Upcoming
                    </Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    June 3-9, 2025
                    <br />
                    <span className="text-sm text-gray-500">Week 5</span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Edge Communication Framework</div>
                      <div>• Final Material Optimization</div>
                      <div>• Case Study Delivery Preparation</div>
                      <div>• Interview Question Preparation</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Develop talking points for each core strength</div>
                      <div>• Conduct comprehensive editing of all materials</div>
                      <div>• Practice concise verbal delivery of each case study</div>
                      <div>• Develop responses to observability explanation questions</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                      Upcoming
                    </Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    June 10-16, 2025
                    <br />
                    <span className="text-sm text-gray-500">Week 6</span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Interview Practice and Refinement</div>
                      <div>• Network Development Initiation</div>
                      <div>• Application Submission Preparation</div>
                      <div>• Technical Preparation Completion</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Conduct mock interviews with observability professionals</div>
                      <div>• Begin reaching out to identified Datadog connections</div>
                      <div>• Prepare application package for submission</div>
                      <div>• Complete learning path design for Datadog users</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                      Upcoming
                    </Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    June 17-23, 2025
                    <br />
                    <span className="text-sm text-gray-500">Week 7-8</span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Application Submission</div>
                      <div>• Follow-up Strategy Implementation</div>
                      <div>• Continued Network Development</div>
                      <div>• Observability Expertise Development</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Submit optimized application package</div>
                      <div>• Implement strategic follow-up communication</div>
                      <div>• Continue building relationships with Datadog connections</div>
                      <div>• Begin deeper study of observability best practices</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                      Upcoming
                    </Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    June 24-July 5, 2025
                    <br />
                    <span className="text-sm text-gray-500">Week 9-10</span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Interview Preparation Refinement</div>
                      <div>• Long-term Planning Completion</div>
                      <div>• Alternative Opportunity Evaluation</div>
                      <div>• Well-being Practice Maintenance</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Refine interview responses based on application feedback</div>
                      <div>• Create 5-year plan with specific milestones</div>
                      <div>• Evaluate alternative opportunities as backup strategy</div>
                      <div>• Maintain consistent self-expression and energy management practices</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                      Upcoming
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Critical Success Factors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Strategic Factors</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">
                  Consistent alignment of all materials with Datadog's engineering enablement needs
                </li>
                <li className="text-gray-700">
                  Clear demonstration of observability knowledge and technical translation skills
                </li>
                <li className="text-gray-700">Development of compelling visual representations of your approach</li>
                <li className="text-gray-700">Establishment of authentic connections within Datadog</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Operational Factors</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Consistent execution of weekly implementation tasks</li>
                <li className="text-gray-700">Effective balance of technical depth with accessibility in materials</li>
                <li className="text-gray-700">Regular practice of interview responses and case study delivery</li>
                <li className="text-gray-700">Timely completion of all application materials</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Personal Factors</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Consistent implementation of well-being practices</li>
                <li className="text-gray-700">Maintenance of authentic expression while tailoring communication</li>
                <li className="text-gray-700">Regular reflection on progress and adjustment of approach</li>
                <li className="text-gray-700">Balancing focused preparation with openness to opportunity</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
