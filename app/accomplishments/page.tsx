import { AccomplishmentsDisplay } from "@/components/accomplishments-display"

export default function AccomplishmentsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Professional Accomplishments</h1>
      <p className="text-gray-600 mb-8">
        A detailed record of my professional achievements, organized by category with metrics and problem-solving
        insights.
      </p>

      <AccomplishmentsDisplay />
    </div>
  )
}
