import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function EdgePage() {
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
        <h1 className="text-3xl font-bold mb-2">YOUR EDGE</h1>
        <p className="text-gray-600">
          Articulating your unique value proposition and core strengths that position you as the ideal candidate for the
          Technical Curriculum Developer, Engineering Enablement role at Datadog.
        </p>
      </div>

      <Tabs defaultValue="statement">
        <TabsList className="mb-6">
          <TabsTrigger value="statement">Edge Statement</TabsTrigger>
          <TabsTrigger value="strengths">Core Strengths</TabsTrigger>
          <TabsTrigger value="implementation">Implementation Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="statement">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Edge Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                You are a technical education architect who combines software engineering expertise with curriculum
                development mastery to create scalable, measurable learning programs for engineering teams. Your unique
                ability to translate between technical and educational domains allows you to design learning experiences
                that balance engineering excellence with accessibility for diverse audiences. You excel at implementing
                standardized approaches to technical education that ensure consistent quality while accommodating
                different learning needs. Your experience leading technical education programs gives you authentic
                insight into creating learning environments that achieve business objectives, while your software
                engineering background enables you to understand and communicate complex technical concepts effectively.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strengths">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Technical-Educational Translator</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  You have a demonstrated ability to make complex engineering concepts accessible to diverse audiences,
                  as shown by your work at Techtonica where you developed comprehensive learning materials and
                  maintained program "overall experience" ratings exceeding expectations (3.66 average).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engineering Education Standardization</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your experience developing standardized approaches at Hack the Hood and Techtonica demonstrates your
                  ability to create consistent learning frameworks that can be implemented effectively across different
                  engineering teams, ensuring quality at scale.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Documentation Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your software engineering background combined with your educational experience gives you unique
                  insight into creating effective technical documentation that serves both internal engineering teams
                  and external developers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cross-Functional Collaborator</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your experience working across technical and business teams at SurveyMonkey and coordinating with
                  industry partners at Techtonica demonstrates your ability to align diverse stakeholders around shared
                  educational goals, creating synergy between engineering and business objectives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engineering Onboarding Specialist</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your experience developing comprehensive learning programs at Techtonica demonstrates your ability to
                  create effective onboarding experiences that quickly bring new engineers up to speed, as evidenced by
                  successfully graduating 4 cohorts of more than 10 participants each.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="implementation">
          {/* Implementation content goes here */}
          <Card>
            <CardHeader>
              <CardTitle>Implementation Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Implementation details would go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}