import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A web application built with React and Node.js',
    link: 'https://github.com/yourusername/project1'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'An e-commerce platform using Next.js and Stripe',
    link: 'https://github.com/yourusername/project2'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A mobile app developed with React Native',
    link: 'https://github.com/yourusername/project3'
  },
]

export default function Projects() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}