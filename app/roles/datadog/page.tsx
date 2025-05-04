import { Button } from "@/components/ui/button"
import DashboardCard from "@/components/dashboard-card"
import {
  ChevronRight,
  BookOpen,
  Target,
  Award,
  FileText,
  Brain,
  PieChart,
  Calendar,
  ArrowRight,
  Zap,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

export default function DatadogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
          <Link href="/roles" passHref>
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Roles
            </Button>
          </Link>
        </div>

        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Technical Curriculum Developer, Engineering Enablement
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your interactive roadmap to the Datadog Technical Curriculum Developer role
          </p>
        </header>

        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard
              title="Customer Analysis"
              icon={<Target className="h-6 w-6 text-orange-600" />}
              description="Understand Datadog's challenges and how your skills address them"
              progress={80}
              link="/roles/datadog/customer"
            />

            <DashboardCard
              title="Your Edge"
              icon={<Award className="h-6 w-6 text-indigo-600" />}
              description="Your unique value proposition and core strengths"
              progress={90}
              link="/roles/datadog/edge"
            />

            <DashboardCard
              title="Case Studies"
              icon={<FileText className="h-6 w-6 text-purple-600" />}
              description="High-impact examples demonstrating your abilities"
              progress={85}
              link="/roles/datadog/case-studies"
            />

            <DashboardCard
              title="Marketing Materials"
              icon={<BookOpen className="h-6 w-6 text-pink-600" />}
              description="Optimized resume and cover letter frameworks"
              progress={75}
              link="/roles/datadog/materials"
            />

            <DashboardCard
              title="Closing the Deal"
              icon={<Brain className="h-6 w-6 text-green-600" />}
              description="Interview preparation and strategies"
              progress={70}
              link="/roles/datadog/closing"
            />

            <DashboardCard
              title="Well-Being Plan"
              icon={<PieChart className="h-6 w-6 text-yellow-600" />}
              description="Sustaining your job search and personal balance"
              progress={65}
              link="/roles/datadog/well-being"
            />

            <DashboardCard
              title="Future Pathways"
              icon={<ArrowRight className="h-6 w-6 text-red-600" />}
              description="Strategic career options beyond this role"
              progress={60}
              link="/roles/datadog/future"
            />

            <DashboardCard
              title="Next Steps"
              icon={<ChevronRight className="h-6 w-6 text-teal-600" />}
              description="Immediate actions to strengthen your application"
              progress={50}
              link="/roles/datadog/next-steps"
            />

            <DashboardCard
              title="Implementation Plan"
              icon={<Calendar className="h-6 w-6 text-orange-600" />}
              description="Timeline and execution plan starting May 5, 2025"
              progress={40}
              link="/roles/datadog/implementation"
            />

            <DashboardCard
              title="Accelerated Plan"
              icon={<Zap className="h-6 w-6 text-amber-500" />}
              description="Fast-track plan: Application ready in 5 days, interview ready in 10 days"
              progress={30}
              link="/roles/datadog/accelerated-plan"
            />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
          <p className="mb-4">
            This interactive tool contains your complete career strategy for the Technical Curriculum Developer,
            Engineering Enablement role at Datadog. Each section is organized to help you navigate the content easily
            and take action.
          </p>
          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-md">
            <p className="font-medium text-orange-800">Job Posting Information</p>
            <p className="text-orange-700">
              <a
                href="https://careers.datadoghq.com/technical-curriculum-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-orange-900"
              >
                View Original Job Posting
              </a>
              <span className="mx-2">•</span>
              Job ID: TCD-EE-2025
              <span className="mx-2">•</span>
              Location: New York, NY (Remote Option)
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/roles/datadog/customer" passHref>
              <Button className="bg-orange-600 hover:bg-orange-700">Begin with Customer Analysis</Button>
            </Link>
            <Link href="/roles/datadog/accelerated-plan" passHref>
              <Button variant="outline" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                View Accelerated Plan
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
