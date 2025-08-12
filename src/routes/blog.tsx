import { createFileRoute} from '@tanstack/react-router'

import BlogList from '../components/bloglist'

export const Route = createFileRoute('/blog')({
  component: Blog,
})

function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and news about waterproofing, deck coatings, and construction solutions.
          </p>
        </div>
        <BlogList />
      </div>
    </div>
  )
}