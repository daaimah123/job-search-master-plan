import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DatadogAcceleratedPlanPage() {
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
        <h1 className="text-3xl font-bold mb-2">ACCELERATED IMPLEMENTATION PLAN (DATADOG)</h1>
        <p className="text-gray-600">
          Two-week accelerated implementation timeline starting May 5, 2025, with 5 days for application preparation and
          5 days for interview preparation for the Technical Curriculum Developer role at Datadog.
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
                      <div>• Observability Knowledge</div>
                      <div>• Edge Statement Development</div>
                      <div>• Self-Expression Setup</div>
                      <div>• Resume Optimization</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Complete all Datadog's introductory and advanced training courses</div>
                      <div>• Create and test 5 edge statement variations focused on engineering enablement</div>
                      <div>• Implement daily self-expression activities (vs. standard weekly)</div>
                      <div>• Complete full resume optimization with observability metrics</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
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
                      <div>• Technical Translation</div>
                      <div>• Core Strengths Documentation</div>
                      <div>• Cover Letter Development</div>
                      <div>• Network Development</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Create comprehensive explanations of observability concepts for 3 different audiences</div>
                      <div>• Build comprehensive evidence portfolio with 3 examples per strength</div>
                      <div>• Create 3 tailored cover letter versions for different Datadog positions</div>
                      <div>• Connect with 7-10 potential networking connections at Datadog</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
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
                      <div>• Datadog-Specific Case Studies</div>
                      <div>• Engineering Enablement Focus</div>
                      <div>• Future Path Analysis</div>
                      <div>• Energy Management</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Map and adapt each case study to 3 specific Datadog challenges</div>
                      <div>• Document engineering enablement approaches with detailed metrics</div>
                      <div>• Research and document 3 potential career paths at Datadog with milestones</div>
                      <div>• Implement optimized job search schedule with energy management techniques</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
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
                      <div>• Datadog-Specific Materials</div>
                      <div>• Case Study Visualization</div>
                      <div>• Supplementary Materials</div>
                      <div>• Progress Recognition</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>• Develop comprehensive curriculum framework for Datadog training</div>
                      <div>• Create professional before/after diagrams for each case study</div>
                      <div>• Create detailed sample curriculum outline for 3 Datadog features</div>
                      <div>• Implement daily reflection and progress tracking system</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
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
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
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
            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Rapid Technical Mastery</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Complete all Datadog certifications within first 30 days (vs. standard 90 days)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Build personal lab environment with all major integrations in first week</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Shadow 10+ customer calls in first two weeks to observe common patterns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Contribute to internal knowledge base by week 3</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Strategic Relationship Building</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Schedule 1:1s with all team members in first two weeks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Meet with product managers for key product areas by end of month 1</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Join cross-functional projects by month 2</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Identify and connect with potential mentors by week 3</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Customer Success Acceleration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Take ownership of 2-3 customer accounts by end of month 1</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Develop implementation templates for common scenarios by week 6</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lead customer calls independently by month 2</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Generate measurable customer success story by month 3</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Strategic Value Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Identify process improvement opportunity by month 2</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Develop specialized expertise in strategic product area by month 3</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Create reusable assets for team by month 4</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
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
              <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Reduced Time to Productivity</p>
                <p className="text-gray-600">Achieve full productivity in 3-4 months instead of the typical 6 months</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Accelerated Career Progression</p>
                <p className="text-gray-600">
                  Position yourself for early promotion consideration (12-18 months vs standard 24 months)
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Enhanced Visibility</p>
                <p className="text-gray-600">Gain recognition from leadership through early strategic contributions</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
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
