"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Briefcase, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function DynamicRolePage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const company = params.company as string
  const jobTitle = searchParams.get("title") || "Role"
  const companyName = searchParams.get("company") || company
  const success = searchParams.get("success")
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (success === "true") {
      setShowSuccess(true)
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [success])

  // Check if this is one of our predefined companies
  const isPredefined = ["intuit", "datadog"].includes(company)

  if (isPredefined) {
    // For predefined companies, we'll just render a basic page that links to the existing sections
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
          <Link href="/roles" passHref>
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Roles
            </Button>
          </Link>
        </div>

        {showSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-md p-4 flex items-center gap-3">
            <div className="h-5 w-5 text-green-500">✓</div>
            <p className="text-green-800">Your role strategy has been successfully created!</p>
          </div>
        )}

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{companyName.toUpperCase()} MASTER PLAN</h1>
          <p className="text-gray-600">
            Your comprehensive strategy for the {jobTitle} role at {companyName}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render links to existing sections */}
          {[
            "customer",
            "edge",
            "case-studies",
            "materials",
            "closing",
            "well-being",
            "future",
            "next-steps",
            "implementation",
            "accelerated-plan",
          ].map((section) => (
            <Link key={section} href={`/roles/${company}/${section}`} className="block h-full">
              <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="pb-3">
                  <CardTitle className="capitalize">{section.replace(/-/g, " ")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-end">
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  // For new companies, we'll render a template with the standard sections
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <Link href="/roles" passHref>
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Roles
          </Button>
        </Link>
      </div>

      {showSuccess && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-md p-4 flex items-center gap-3">
          <div className="h-5 w-5 text-green-500">✓</div>
          <p className="text-green-800">
            Your new role strategy has been successfully created! We're generating your personalized plan.
          </p>
        </div>
      )}

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{companyName.toUpperCase()} MASTER PLAN</h1>
        <p className="text-gray-600">
          Your comprehensive strategy for the {jobTitle} role at {companyName}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Customer Analysis */}
        <Card className="h-full hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-600" />
              Customer Analysis
            </CardTitle>
            <CardDescription>Understanding {companyName}'s needs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Analyze {companyName}'s challenges and how your skills address them.
            </p>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">In progress</div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        {/* Edge Statement */}
        <Card className="h-full hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-600" />
              Edge Statement
            </CardTitle>
            <CardDescription>Your unique value proposition</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Define your unique edge for the {jobTitle} role at {companyName}.
            </p>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">In progress</div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        {/* Case Studies */}
        <Card className="h-full hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-600" />
              Case Studies
            </CardTitle>
            <CardDescription>Demonstrating your value</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Showcase your relevant experience for the {jobTitle} role.</p>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">In progress</div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        {/* Add more cards for other sections */}
        {[
          "Marketing Materials",
          "Closing the Deal",
          "Well-Being",
          "Future Pathways",
          "Next Steps",
          "Implementation Plan",
          "Accelerated Plan",
        ].map((section) => (
          <Card key={section} className="h-full hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                {section}
              </CardTitle>
              <CardDescription>In development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                This section is being customized for your {jobTitle} role at {companyName}.
              </p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">Coming soon</div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
