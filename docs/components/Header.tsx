import Link from 'next/link'
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Name</h1>
        <div className="flex space-x-4">
          <Link href="https://github.com/yourusername" passHref>
            <a className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <GithubIcon className="h-6 w-6" />
            </a>
          </Link>
          <Link href="https://linkedin.com/in/yourusername" passHref>
            <a className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </Link>
          <Link href="mailto:your.email@example.com" passHref>
            <a className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Email</span>
              <MailIcon className="h-6 w-6" />
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}