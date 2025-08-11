import { Link, createFileRoute } from '@tanstack/react-router'

export type Blog = {
  id: number
  slug: string
  title: string
  image: string
}

export const Route = createFileRoute('/blog')({
  validateSearch: (s): { page?: number } => {
    const page = typeof (s as any).page === 'number' ? (s as any).page : Number((s as any).page)
    return { page: Number.isFinite(page) && page > 0 ? Math.floor(page) : 1 }
  },
  component: RouteComponent,
})

function RouteComponent() {

  const images = [
    'blogs/b1.webp',
    'blogs/b3.webp',
    'blogs/b5.webp',
    'blogs/b7.webp',
    'blogs/b9.webp',
    'blogs/b10.webp',
    'blogs/b2.webp',
    'blogs/b4.webp',
    'blogs/b6.webp',
    'blogs/b1.webp',
    'blogs/b11.webp',
    'blogs/b12.webp',
    'blogs/b13.webp',
    'blogs/b14.webp',
    'blogs/b15.webp',
    'blogs/b16.webp',
    'blogs/b17.webp',
    'blogs/b18.webp',
    'blogs/b19.webp',
    'blogs/b20.webp',
  ]
  const BLOGS: Blog[] = [
    {
      id: 1,
      slug: 'blog-1',
      title: 'Which Waterproofing Deck Coating Wins?',
      image: images[0],},
    {
      id: 2,
      slug: 'blog-2',
      title: 'How to Fix Peeling or Cracked Waterproof Deck Coatings: Liquid Rubber vs Polyurethane',
      image: images[1],
    },
    {
      id: 3,
      slug: 'blog-3',
      title: 'Why Waterproof Deck Coatings Are Essential for Outdoor Living',
      image: images[2],
    },
    {
      id: 4,
      slug: 'blog-4',
      title: 'Why Waterproofing Balcony Decks Saves You Big Repairs',
      image: images[3],
    },
    {
      id: 5,
      slug: 'blog-5',
      title: 'How Waterproofing Services Protect Your Home from Long-Term Damage',
      image: images[4],
    },
    {
      id: 6,
      slug: 'blog-6',
      title: 'What Is the Difference Between Interior and Exterior Waterproofing Services',
      image: images[5],
    },
    {
      id: 7,
      slug: 'blog-7',
      title: 'Why Summer Is the Best Time to Waterproof Your Property',
      image: images[6],
    },
    {
      id: 8,
      slug: 'blog-8',
      title: 'When Should You Reapply or Upgrade Waterproofing Solutions?',
      image: images[7],
    },
    {
      id: 9,
      slug: 'blog-9',
      title: 'Why Commercial Buildings Need Waterproofing Services',
      image: images[8],
    },
    {
      id: 10,
      slug: 'blog-10',
      title: 'Protecting Your Home: The Importance of Balcony Leak Detection and Repair',
      image: images[9],
    },
    {
      id: 11,
      slug: 'blog-11',
      title: 'Preventing Water Intrusion: The Importance of Balcony Leak Detection',
      image: images[10],
    },
    {
      id: 12,
      slug: 'blog-12',
      title: 'Safety and Aesthetics: The Importance of Timely Pool Decking Repair in Santa Monica',
      image: images[11],
    },
    {
      id: 13,
      slug: 'blog-13',
      title: 'Enjoy Your Deck, Rain or Shine: Waterproofing Tips for Los Angeles Homeowners',
      image: images[12],
    },
    {
      id: 14,
      slug: 'blog-14',
      title: 'DIY vs. Professional Help: Understanding Balcony Deck Repair',
      image: images[13],
    },
    {
      id: 15,
      slug: 'blog-15',
      title: 'Signs of Balcony Deck Damage: When to Consider Balcony Deck Repair',
      image: images[14],
    },
    {
      id: 16,
      slug: 'blog-16',
      title: 'What is Pool Decking',
      image: images[15],
    },
    {
      id: 17,
      slug: 'blog-17',
      title: 'How to Choose the Best Deck Stain',
      image: images[16],
    },
    {
      id: 18,
      slug: 'blog-18',
      title: 'How to Choose the Best Deck Stain',
      image: images[17],
    },
    {
      id: 19,
      slug: 'blog-19',
      title: 'What is Waterproofing',
      image: images[18],
    },
    {
      id: 20,
      slug: 'blog-20',
      title: 'What is Epoxy Flooring',
      image: images[19],
    },
  ]

  const { page = 1 } = Route.useSearch()
  const pageSize = 10
  const total = BLOGS.length
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const currentPage = Math.min(Math.max(1, page), totalPages)
  const start = (currentPage - 1) * pageSize
  const items = BLOGS.slice(start, start + pageSize)

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((post) => (
          <article
            key={post.id}
            className="rounded-lg border bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <Link to={`/blogs/${post.slug}` as any}>
              <img
                src={post.image}
                alt={post.title}
                className="h-44 w-full object-cover"
                loading="lazy"
              />
            </Link>
            <div className="p-4">
              <Link
                to={`/blogs/${post.slug}` as any}
                className="text-lg font-semibold hover:underline"
              >
                {post.title}
              </Link>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                Click to read more about {post.title.toLowerCase()}
              </p>
            </div>
          </article>
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}

function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  const makeLink = (p: number) => ({ search: { page: p } as any })
  const pages = Array.from({ length: totalPages }).map((_, i) => i + 1)

  return (
    <nav className="mt-10 flex items-center justify-center gap-2">
      <Link
        disabled={currentPage <= 1}
        to={'/blog'}
        {...makeLink(currentPage - 1)}
        className="px-3 py-2 border rounded disabled:opacity-50"
      >
        Prev
      </Link>
      {pages.map((p) => (
        <Link
          key={p}
          to={'/blog'}
          {...makeLink(p)}
          className={`px-3 py-2 border rounded ${p === currentPage ? 'bg-black text-white' : ''}`}
        >
          {p}
        </Link>
      ))}
      <Link
        disabled={currentPage >= totalPages}
        to={'/blog'}
        {...makeLink(currentPage + 1)}
        className="px-3 py-2 border rounded disabled:opacity-50"
      >
        Next
      </Link>
    </nav>
  )
}
