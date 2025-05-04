"use client"

import { useUserData } from "./providers/data-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SelfReflectionDisplay() {
  const { userData } = useUserData()
  const { obstacles, joys } = userData.selfReflection

  return (
    <div className="space-y-6">
      <Tabs defaultValue="obstacles" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="obstacles">Major Obstacles</TabsTrigger>
          <TabsTrigger value="joys">Sources of Joy</TabsTrigger>
        </TabsList>

        <TabsContent value="obstacles" className="space-y-4 mt-4">
          {obstacles.map((obstacle, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-slate-50">
                <CardTitle>{obstacle.title}</CardTitle>
                <CardDescription>Personal growth through challenge</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-slate-500 mb-1">The situation:</h4>
                  <p>{obstacle.situation}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-slate-500 mb-1">Strengths used/gained:</h4>
                  <p>{obstacle.strengths}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-slate-500 mb-1">What I learned:</h4>
                  <p>{obstacle.learned}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-slate-500 mb-1">Additional benefits:</h4>
                  <p>{obstacle.benefits}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="joys" className="space-y-4 mt-4">
          <Card>
            <CardHeader className="bg-slate-50">
              <CardTitle>Things That Bring Joy to My Life</CardTitle>
              <CardDescription>Sources of fulfillment and meaning</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h4 className="font-medium text-sm text-slate-500 mb-1">Most prevalent sources of joy:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {joys.sources.map((source, index) => (
                    <li key={index}>{source}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-sm text-slate-500 mb-1">Why these bring me joy:</h4>
                {joys.explanation.map((explanation, index) => (
                  <p key={index} className="mb-4">
                    {explanation}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
