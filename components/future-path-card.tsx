import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ExampleRole {
  org: string
  focus: string
  translation: string[]
  start: string
}

interface FuturePathCardProps {
  title: string
  description: string
  targetOrganizations?: string[]
  positioning?: string[]
  transitionPlan?: string[]
  entryPoints?: string[]
  exampleRole?: ExampleRole
  roleFocus?: string[]
  // Add the new properties
  timeframe?: string
  keyMetrics?: string[]
}

export default function FuturePathCard({
  title,
  description,
  targetOrganizations = [],
  positioning = [],
  transitionPlan = [],
  entryPoints = [],
  exampleRole,
  roleFocus = [],
  timeframe,
  keyMetrics = [],
}: FuturePathCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700">{description}</p>

        {/* Display timeframe if provided */}
        {timeframe && (
          <div>
            <h3 className="font-semibold mb-2">Timeframe:</h3>
            <p className="text-gray-700">{timeframe}</p>
          </div>
        )}

        {targetOrganizations.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Target Organizations:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {targetOrganizations.map((org, index) => (
                <li key={index} className="text-gray-700">
                  {org}
                </li>
              ))}
            </ul>
          </div>
        )}

        {positioning.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Positioning:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {positioning.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {transitionPlan.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Example Transition Plan:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {transitionPlan.map((step, index) => (
                <li key={index} className="text-gray-700">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        )}

        {entryPoints.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Potential Entry Points:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {entryPoints.map((point, index) => (
                <li key={index} className="text-gray-700">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        {exampleRole && (
          <div>
            <h3 className="font-semibold mb-2">Real-World Example:</h3>
            <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
              <p className="mb-2">
                <strong>Organization:</strong> {exampleRole.org}
              </p>
              <p className="mb-2">
                <strong>Role Focus:</strong> {exampleRole.focus}
              </p>
              <p className="mb-2">
                <strong>How Your Experience Translates:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-2">
                {exampleRole.translation.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                <strong>Getting Started:</strong> {exampleRole.start}
              </p>
            </div>
          </div>
        )}

        {roleFocus.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Role Focus:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {roleFocus.map((focus, index) => (
                <li key={index} className="text-gray-700">
                  {focus}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Display keyMetrics if provided */}
        {keyMetrics.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Key Metrics:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {keyMetrics.map((metric, index) => (
                <li key={index} className="text-gray-700">
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}