import Link from "next/link"
import { Briefcase, Award, BookOpen } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-6 mb-4">
            <Link href="/roles" className="text-gray-600 hover:text-gray-900 text-sm flex items-center gap-1">
              <Briefcase className="h-3 w-3" />
              All Roles
            </Link>
            <Link href="/roles/new" className="text-gray-600 hover:text-gray-900 text-sm">
              Add New Role
            </Link>
            <Link href="/accomplishments" className="text-gray-600 hover:text-gray-900 text-sm flex items-center gap-1">
              <Award className="h-3 w-3" />
              Accomplishments
            </Link>
            <Link
              href="/self-reflection"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>Self-Reflection</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
