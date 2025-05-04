"use client"

import { useUserData } from "./providers/data-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function AccomplishmentsDisplay() {
  const { userData } = useUserData()
  const { accomplishments, metrics, problemSolvingInsights } = userData

  // Group accomplishments by bucket
  const bucketMap = new Map<string, typeof accomplishments>()

  accomplishments.forEach((accomplishment) => {
    accomplishment.buckets.forEach((bucket) => {
      if (!bucketMap.has(bucket)) {
        bucketMap.set(bucket, [])
      }
      bucketMap.get(bucket)?.push(accomplishment)
    })
  })

  // Sort buckets by number of accomplishments
  const sortedBuckets = Array.from(bucketMap.entries())
    .sort((a, b) => b[1].length - a[1].length)
    .map(([bucket]) => bucket)

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All Accomplishments</TabsTrigger>
          <TabsTrigger value="buckets">By Category</TabsTrigger>
          <TabsTrigger value="metrics">Metrics & Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
          {accomplishments.map((accomplishment) => (
            <Card key={accomplishment.id} className="overflow-hidden">
              <CardHeader className="bg-slate-50">
                <CardTitle>{accomplishment.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {accomplishment.buckets.map((bucket) => (
                    <Badge key={bucket} variant="outline" className="bg-white">
                      {bucket}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-slate-500 mb-1">The challenge:</h4>
                  <p>{accomplishment.challenge}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-slate-500 mb-1">Why it mattered:</h4>
                  <p>{accomplishment.importance}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-slate-500 mb-1">How I solved it:</h4>
                  <p>{accomplishment.solution}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-slate-500 mb-1">Strengths used:</h4>
                  <p>{accomplishment.strengths}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="buckets" className="mt-4">
          <Tabs defaultValue={sortedBuckets[0]} className="w-full">
            <TabsList className="flex flex-wrap h-auto py-2 gap-2">
              {sortedBuckets.map((bucket) => (
                <TabsTrigger key={bucket} value={bucket} className="h-auto py-1">
                  {bucket} ({bucketMap.get(bucket)?.length})
                </TabsTrigger>
              ))}
            </TabsList>

            {sortedBuckets.map((bucket) => (
              <TabsContent key={bucket} value={bucket} className="space-y-4 mt-4">
                {bucketMap.get(bucket)?.map((accomplishment) => (
                  <Card key={accomplishment.id} className="overflow-hidden">
                    <CardHeader className="bg-slate-50">
                      <CardTitle>{accomplishment.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                      <div>
                        <h4 className="font-medium text-sm text-slate-500 mb-1">The challenge:</h4>
                        <p>{accomplishment.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-slate-500 mb-1">How I solved it:</h4>
                        <p>{accomplishment.solution}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-4 mt-4">
          <Card>
            <CardHeader className="bg-slate-50">
              <CardTitle>Key Metrics</CardTitle>
              <CardDescription>Quantifiable achievements and outcomes</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(metrics).map(([key, value]) => (
                  <div key={key} className="border rounded-md p-4">
                    <h4 className="font-medium text-sm text-slate-500 mb-1">{key}</h4>
                    <p className="text-lg font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-slate-50">
              <CardTitle>Problem-Solving Insights</CardTitle>
              <CardDescription>What energizes me and comes naturally</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h4 className="font-medium text-sm text-slate-500 mb-2">
                  Problems that energize rather than drain me:
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {problemSolvingInsights.energizingProblems.map((problem, index) => (
                    <li key={index}>{problem}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-slate-500 mb-2">
                  Tasks I find surprisingly easy that others might find challenging:
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {problemSolvingInsights.easyTasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
