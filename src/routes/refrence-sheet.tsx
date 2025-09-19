import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/refrence-sheet')({
  component: RouteComponent,
})

interface ReferenceCompany {
  id: string
  company: string
  contact: string
  phone: string
  jobName: string
  location: string
}

const referenceData: ReferenceCompany[] = [
  {
    id: '1',
    company: 'Alpha Construction',
    contact: 'Irv / Dominique',
    phone: '(818) 779-3000',
    jobName: 'Multiple Projects / Multi-Family',
    location: 'Los Angeles, Venice San Fernando Valley'
  },
  {
    id: '2',
    company: 'AMG & Associates',
    contact: 'Al Giacommazi',
    phone: '(661) 251-7401',
    jobName: 'Custom Homes',
    location: 'Various Santa Clarita & Los Angeles locations'
  },
  {
    id: '3',
    company: 'APW Builders',
    contact: 'Abraham',
    phone: '(818) 982-4249',
    jobName: 'Custom Home',
    location: 'Beverly Hills'
  },
  {
    id: '4',
    company: 'Apex Construction',
    contact: 'John Keane',
    phone: '(818) 268-6455',
    jobName: 'Multiple Projects',
    location: 'Valencia'
  },
  {
    id: '5',
    company: 'Atlantis Construction',
    contact: 'Penny',
    phone: '(818) 272-7863',
    jobName: 'Deer Valle Project',
    location: 'Pasadena'
  },
  {
    id: '6',
    company: 'Dalah Construction',
    contact: 'Ron',
    phone: '(310) 451-9175',
    jobName: 'Multiple Projects Multi-Family',
    location: 'Santa Monica Pasadena'
  },
  {
    id: '7',
    company: 'Fassberg Construction',
    contact: 'Larry Hoffman',
    phone: '(818) 386-1800',
    jobName: 'Multiple Projects',
    location: 'Los Angeles, San Fernando Valley, Pasadena, Santa Monica'
  },
  {
    id: '8',
    company: 'J. A. Hill Corporation',
    contact: 'Troy',
    phone: '(562) 420-7080',
    jobName: 'Multiple Projects',
    location: 'Thousand Oaks N. Hollywood'
  },
  {
    id: '9',
    company: 'Pacific Southwest Builders',
    contact: 'Brian Cruz',
    phone: '(310) 379-7272',
    jobName: 'Multiple Projects',
    location: 'Long Beach, Santa Monica'
  },
  {
    id: '10',
    company: 'Sininian Developmenet',
    contact: 'Vaskin / Sinan',
    phone: '(818) 996-9666',
    jobName: 'Multi-Family, Savons, Petco',
    location: 'Los Angeles, Westwood'
  },
  {
    id: '11',
    company: 'Terry Beeler Construction',
    contact: 'David Beeler',
    phone: '(661) 251-4630',
    jobName: 'Multiple Projects',
    location: 'Castaic, Pasadena'
  },
  {
    id: '12',
    company: 'T.H. O\'Conner',
    contact: 'Turk / Josh',
    phone: '(818) 994-0550',
    jobName: 'Custom Homes',
    location: 'Pacific Palisades'
  }
]

function RouteComponent() {
  const [selectedRow, setSelectedRow] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = referenceData.filter(company => 
    company.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.jobName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Reference Sheet
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our trusted partners and construction companies we work with. 
              Contact information and project details for easy reference.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search companies, contacts, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A7E8] focus:border-transparent outline-none"
              />
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing {filteredData.length} of {referenceData.length} companies
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b border-gray-200">
                    Company
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b border-gray-200">
                    Contact/Phone #
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b border-gray-200">
                    Job Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b border-gray-200">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.map((company) => (
                  <tr
                    key={company.id}
                    className={`hover:bg-gray-50 cursor-pointer transition-colors duration-200 ${
                      selectedRow === company.id ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => setSelectedRow(selectedRow === company.id ? null : company.id)}
                  >
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {company.company}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        <div className="font-medium">{company.contact}</div>
                        <div className="text-gray-600">{company.phone}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {company.jobName}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {company.location}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* No Results */}
        {filteredData.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No companies found</h3>
            <p className="text-gray-600">Try adjusting your search terms.</p>
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-12 bg-[#00A7E8] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need to Add Your Company?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            If you're a construction company or contractor and would like to be added to our reference sheet, 
            please contact us for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-[#00A7E8] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
            </a>
            <a 
              href="tel:+13105693129" 
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#00A7E8] transition-colors duration-200"
            >
              Call (310) 569-3129
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
