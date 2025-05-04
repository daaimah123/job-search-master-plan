"use client"

import { useUserData } from "@/components/providers/data-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestPage() {
  const { userData } = useUserData()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Data Provider Test</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>User Data</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Number of Accomplishments:</strong> {userData.accomplishments.length}
          </p>
          <p>
            <strong>Number of Skills:</strong> {userData.skills.length}
          </p>
          <p>
            <strong>Number of Goals:</strong> {userData.goals.length}
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>First Accomplishment</CardTitle>
        </CardHeader>
        <CardContent>
          {userData.accomplishments[0] ? (
            <>
              <p>
                <strong>Title:</strong> {userData.accomplishments[0].title}
              </p>
              <p>
                <strong>Categories:</strong> {userData.accomplishments[0].buckets.join(", ")}
              </p>
            </>
          ) : (
            <p>No accomplishments found</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Self Reflection</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Number of Obstacles:</strong> {userData.selfReflection.obstacles.length}
          </p>
          <p>
            <strong>Number of Joy Sources:</strong> {userData.selfReflection.joys.sources.length}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
