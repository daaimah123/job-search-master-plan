import { SelfReflectionDisplay } from "@/components/self-reflection-display"

export default function SelfReflectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Self-Reflection</h1>
      <p className="text-gray-600 mb-8">
        Personal insights from past experiences and sources of joy that inform my approach to work and life.
      </p>

      <SelfReflectionDisplay />
    </div>
  )
}
