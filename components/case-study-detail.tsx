import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface CaseStudyDetailProps {
  title: string
  challenge: string
  approach: string[]
  results: string[]
  impact: string
  connection: string[]
  talkingPoints: string
}

export default function CaseStudyDetail({
  title,
  challenge,
  approach,
  results,
  impact,
  connection,
  talkingPoints,
}: CaseStudyDetailProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>Case Study Overview</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="challenge">
              <AccordionTrigger>Challenge</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">{challenge}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="approach">
              <AccordionTrigger>Approach</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  {approach.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="results">
              <AccordionTrigger>Results</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  {results.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="impact">
              <AccordionTrigger>Business Impact</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">{impact}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="connection">
              <AccordionTrigger>Connection to Role</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  {connection.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Talking Points</CardTitle>
          <CardDescription>For interviews and networking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <p className="text-gray-700 whitespace-pre-line">{talkingPoints}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
