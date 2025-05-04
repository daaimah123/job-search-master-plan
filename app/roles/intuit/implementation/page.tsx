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
        <Link href="/roles/intuit" passHref>
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">MASTER IMPLEMENTATION PLAN</h1>
        <p className="text-gray-600">
          Comprehensive implementation timeline starting May 5, 2025, to execute your career strategy for the Technical
          Curriculum Developer, Program Manager role at Intuit.
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
                      <div>• Customer Understanding: Intuit's Technical Products</div>
                      <div>• Edge Statement Refinement</div>
                      <div>• Self-Expression Practices Setup</div>
                      <div>• Initial Resume Optimization</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Complete research on QuickBooks platform architecture</div>
                      <div>• Create 3 edge statement variations</div>
                      <div>• Schedule weekly self-expression activities</div>
                      <div>• Customize professional summary for Intuit</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
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
                      <div>• Metrics Enhancement for Case Studies</div>
                      <div>• Core Strengths Documentation</div>
                      <div>• Cover Letter Development</div>
                      <div>• Knowledge-Connection Balance</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Calculate skill growth metrics from Techtonica</div>
                      <div>• Build evidence portfolio for each core strength</div>
                      <div>• Draft cover letter addressing specific job requirements</div>
                      <div>• Identify 3-5 potential networking connections at Intuit</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
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
                      <div>• Intuit-Specific Adaptation of Case Studies</div>
                      <div>• Technical Edge Enhancement</div>
                      <div>• Future Path Analysis</div>
                      <div>• Energy Management Implementation</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Map each case study to specific Intuit challenges</div>
                      <div>• Complete Intuit developer documentation review</div>
                      <div>• Research salary ranges for future career paths</div>
                      <div>• Create job search schedule with energy peaks in mind</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
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
                      <div>• Expertise Documentation Creation</div>
                      <div>• Visual Representation of Case Studies</div>
                      <div>• Supplementary Materials Development</div>
                      <div>• Progress Recognition System Setup</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Develop curriculum development framework visual</div>
                      <div>• Create before/after diagrams for each case study</div>
                      <div>• Create curriculum development portfolio</div>
                      <div>• Establish weekly reflection sessions</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
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
                      <div>• Develop responses to curriculum standardization questions</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
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
                      <div>• Conduct mock interviews with education professionals</div>
                      <div>• Begin reaching out to identified Intuit connections</div>
                      <div>• Prepare application package for submission</div>
                      <div>• Complete curriculum design exercise examples</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
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
                      <div>• Skill Development Planning</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Submit optimized application package</div>
                      <div>• Implement strategic follow-up communication</div>
                      <div>• Continue building relationships with Intuit connections</div>
                      <div>• Begin addressing skill gaps for selected future pathway</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
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
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
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
                  Consistent alignment of all materials with Intuit's specific challenges
                </li>
                <li className="text-gray-700">Clear quantification of your impact in previous roles</li>
                <li className="text-gray-700">Development of compelling visual representations of your approach</li>
                <li className="text-gray-700">Establishment of authentic connections within Intuit</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Operational Factors</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Consistent execution of weekly implementation tasks</li>
                <li className="text-gray-700">Effective balance of deep research with practical application</li>
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
