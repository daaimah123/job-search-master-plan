"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Briefcase, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function RolesPage() {
  const searchParams = useSearchParams()
  const success = searchParams.get("success")
  const [showSuccess, setShowSuccess] = useState(false)
  const [newRoles, setNewRoles] = useState<{ title: string; company: string; slug: string }[]>([])

  useEffect(() => {
    // Check if there's a success message and new role info in the URL
    if (success === "true") {
      setShowSuccess(true)
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 5000)

      // Get new role info from localStorage or initialize
      const storedRoles = localStorage.getItem("newRoles")
      const existingRoles = storedRoles ? JSON.parse(storedRoles) : []

      // Add the new role if title and company are provided
      const title = searchParams.get("title")
      const company = searchParams.get("company")
      if (title && company) {
        const slug = company
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "")
        const newRole = { title, company, slug }

        // Check if this role already exists
        const roleExists = existingRoles.some((role: any) => role.company === company && role.title === title)

        if (!roleExists) {
          const updatedRoles = [...existingRoles, newRole]
          localStorage.setItem("newRoles", JSON.stringify(updatedRoles))
          setNewRoles(updatedRoles)
        } else {
          setNewRoles(existingRoles)
        }
      } else {
        setNewRoles(existingRoles)
      }

      return () => clearTimeout(timer)
    } else {
      // Just load existing roles
      const storedRoles = localStorage.getItem("newRoles")
      if (storedRoles) {
        setNewRoles(JSON.parse(storedRoles))
      }
    }
  }, [success, searchParams])

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {showSuccess && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-md p-4 flex items-center gap-3">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <p className="text-green-800">
            Your new role strategy has been successfully created! You'll be notified when it's ready to view.
          </p>
        </div>
      )}

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">CAREER ROLES</h1>
        <p className="text-gray-600">Browse and manage your customized career strategy plans for different roles.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Link href="/roles/intuit" className="block h-full">
          <Card className="h-full hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                Technical Curriculum Developer, PM
              </CardTitle>
              <CardDescription>Intuit</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                A comprehensive strategy for the Technical Curriculum Developer, Program Manager role at Intuit.
              </p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">Created: May 3, 2025</div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/roles/datadog" className="block h-full">
          <Card className="h-full hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-orange-600" />
                Technical Curriculum Developer, Engineering Enablement
              </CardTitle>
              <CardDescription>Datadog</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                A tailored strategy for the Technical Curriculum Developer, Engineering Enablement role at Datadog.
              </p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">Created: May 5, 2025</div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Render dynamically added roles */}
        {newRoles.map((role, index) => (
          <Link
            key={index}
            href={`/roles/${role.slug}?title=${encodeURIComponent(role.title)}&company=${encodeURIComponent(role.company)}`}
            className="block h-full"
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-purple-600" />
                  {role.title}
                </CardTitle>
                <CardDescription>{role.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  A customized strategy for the {role.title} role at {role.company}.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Created:{" "}
                    {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}

        <Link href="/roles/new" className="block h-full">
          <Card className="h-full border-dashed hover:shadow-lg transition-shadow duration-200 flex items-center justify-center">
            <CardContent className="text-center p-6">
              <div className="rounded-full bg-gray-100 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-gray-500">+</span>
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Add New Role</h3>
              <p className="text-sm text-gray-600">Create a new career strategy plan for another position.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
