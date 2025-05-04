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

export default function IntuitPage() {
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
            Technical Curriculum Developer, PM Career Strategy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your interactive roadmap to the Intuit Technical Curriculum Developer, Program Manager role
          </p>
        </header>

        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard
              title="Customer Analysis"
              icon={<Target className="h-6 w-6 text-blue-600" />}
              description="Understand Intuit's challenges and how your skills address them"
              progress={80}
              link="/roles/intuit/customer"
            />

            <DashboardCard
              title="Your Edge"
              icon={<Award className="h-6 w-6 text-indigo-600" />}
              description="Your unique value proposition and core strengths"
              progress={90}
              link="/roles/intuit/edge"
            />

            <DashboardCard
              title="Case Studies"
              icon={<FileText className="h-6 w-6 text-purple-600" />}
              description="High-impact examples demonstrating your abilities"
              progress={85}
              link="/roles/intuit/case-studies"
            />

            <DashboardCard
              title="Marketing Materials"
              icon={<BookOpen className="h-6 w-6 text-pink-600" />}
              description="Optimized resume and cover letter frameworks"
              progress={75}
              link="/roles/intuit/materials"
            />

            <DashboardCard
              title="Closing the Deal"
              icon={<Brain className="h-6 w-6 text-green-600" />}
              description="Interview preparation and strategies"
              progress={70}
              link="/roles/intuit/closing"
            />

            <DashboardCard
              title="Well-Being Plan"
              icon={<PieChart className="h-6 w-6 text-yellow-600" />}
              description="Sustaining your job search and personal balance"
              progress={65}
              link="/roles/intuit/well-being"
            />

            <DashboardCard
              title="Future Pathways"
              icon={<ArrowRight className="h-6 w-6 text-red-600" />}
              description="Strategic career options beyond this role"
              progress={60}
              link="/roles/intuit/future"
            />

            <DashboardCard
              title="Next Steps"
              icon={<ChevronRight className="h-6 w-6 text-teal-600" />}
              description="Immediate actions to strengthen your application"
              progress={50}
              link="/roles/intuit/next-steps"
            />

            <DashboardCard
              title="Implementation Plan"
              icon={<Calendar className="h-6 w-6 text-orange-600" />}
              description="Timeline and execution plan starting May 5, 2025"
              progress={40}
              link="/roles/intuit/implementation"
            />

            <DashboardCard
              title="Accelerated Plan"
              icon={<Zap className="h-6 w-6 text-amber-500" />}
              description="Fast-track plan: Application ready in 5 days, interview ready in 10 days"
              progress={30}
              link="/roles/intuit/accelerated-plan"
            />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
          <p className="mb-4">
            This interactive tool contains your complete career strategy for the Technical Curriculum Developer, Program
            Manager role at Intuit. Each section is organized to help you navigate the content easily and take action.
          </p>
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="font-medium text-green-800">Job Posting Information</p>
            <p className="text-green-700">
              <a
                href="https://jobs.intuit.com/job/technical-curriculum-developer-program-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-900"
              >
                View Original Job Posting
              </a>
              <span className="mx-2">•</span>
              Job ID: TC-PM-2025
              <span className="mx-2">•</span>
              Location: Mountain View, CA (Hybrid)
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/roles/intuit/customer" passHref>
              <Button className="bg-green-600 hover:bg-green-700">Begin with Customer Analysis</Button>
            </Link>
            <Link href="/roles/intuit/accelerated-plan" passHref>
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
