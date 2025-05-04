import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AcceleratedPlanPage() {
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
        <h1 className="text-3xl font-bold mb-2">ACCELERATED IMPLEMENTATION PLAN</h1>
        <p className="text-gray-600">
          Two-week accelerated implementation timeline starting May 5, 2025, with 5 days for application preparation and
          5 days for interview preparation for the Technical Curriculum Developer, Program Manager role at Intuit.
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>10-Day Accelerated Implementation Calendar</CardTitle>
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
                    May 5-6, 2025
                    <br />
                    <span className="text-sm text-gray-500">Days 1-2</span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Customer Understanding</div>
                      <div>• Edge Statement Development</div>
                      <div>• Self-Expression Setup</div>
                      <div>• Resume Optimization</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>
                        • Complete comprehensive research on QuickBooks platform architecture <strong>and</strong>{" "}
                        TurboTax ecosystem
                      </div>
                      <div>• Create and test 5 edge statement variations (vs. standard 3)</div>
                      <div>• Implement daily self-expression activities (vs. standard weekly)</div>
                      <div>• Complete full resume optimization for Intuit with metrics</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Accelerated
                    </Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    May 7-8, 2025
                    <br />
                    <span className="text-sm text-gray-500">Days 3-4</span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Case Study Enhancement</div>
                      <div>• Core Strengths Documentation</div>
                      <div>• Cover Letter Development</div>
                      <div>• Network Development</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Calculate and visualize skill growth metrics from all previous roles</div>
                      <div>• Build comprehensive evidence portfolio with 3 examples per strength</div>
                      <div>• Create 3 tailored cover letter versions for different Intuit positions</div>
                      <div>• Connect with 7-10 potential networking connections at Intuit</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Accelerated
                    </Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    May 9, 2025
                    <br />
                    <span className="text-sm text-gray-500">Day 5</span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Intuit-Specific Case Studies</div>
                      <div>• Technical Edge Enhancement</div>
                      <div>• Future Path Analysis</div>
                      <div>• Energy Management</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Map and adapt each case study to 3 specific Intuit challenges</div>
                      <div>• Complete Intuit developer documentation review and create summary</div>
                      <div>• Research and document 3 potential career paths at Intuit with milestones</div>
                      <div>• Implement optimized job search schedule with energy management techniques</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Accelerated
                    </Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    May 12-13, 2025
                    <br />
                    <span className="text-sm text-gray-500">Days 6-7</span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Expertise Documentation</div>
                      <div>• Case Study Visualization</div>
                      <div>• Materials Development</div>
                      <div>• Progress Recognition</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Develop and refine curriculum development framework with examples</div>
                      <div>• Create professional before/after diagrams for each case study</div>
                      <div>• Complete comprehensive curriculum development portfolio</div>
                      <div>• Implement daily reflection and progress tracking system</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Accelerated
                    </Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    May 14-16, 2025
                    <br />
                    <span className="text-sm text-gray-500">Days 8-10</span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Edge Communication</div>
                      <div>• Material Optimization</div>
                      <div>• Interview Preparation</div>
                      <div>• Application Preparation</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Develop and practice talking points for all core strengths</div>
                      <div>• Complete professional editing of all application materials</div>
                      <div>• Develop comprehensive responses to 20+ potential interview questions</div>
                      <div>• Prepare complete application package with all supporting materials</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Accelerated
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Acceleration Strategies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Rapid Product Mastery</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Complete all product certifications within first 30 days (vs. standard 90 days)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use products personally to understand customer experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Shadow 10+ customer calls in first two weeks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Create personal knowledge repository of product features and use cases</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Strategic Relationship Building</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Schedule 1:1s with all team members in first two weeks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Connect with cross-functional partners in product, engineering, and design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Join employee resource groups aligned with your interests</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Identify and connect with potential mentors by week 3</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Customer-Driven Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Conduct 5+ customer interviews in first month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Develop framework for capturing and categorizing customer feedback</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Create proposal for product enhancement based on customer insights by month 2</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Present customer insights to product team by month 3</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Strategic Value Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Identify process improvement opportunity by month 2</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Develop specialized expertise in strategic product area by month 3</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Create reusable assets for team by month 4</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Contribute to product roadmap discussions by month 5</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Expected Outcomes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Reduced Time to Productivity</p>
                <p className="text-gray-600">Achieve full productivity in 3-4 months instead of the typical 6 months</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Accelerated Career Progression</p>
                <p className="text-gray-600">
                  Position yourself for early promotion consideration (12-18 months vs standard 24 months)
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Enhanced Visibility</p>
                <p className="text-gray-600">Gain recognition from leadership through early strategic contributions</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Expanded Influence</p>
                <p className="text-gray-600">
                  Develop cross-functional relationships that enhance your impact and career opportunities
                </p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
