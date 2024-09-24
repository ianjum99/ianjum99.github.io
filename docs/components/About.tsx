import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section className="py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">
            Hello! I'm a passionate developer with experience in web technologies. I love creating
            user-friendly and efficient applications. My expertise includes React, Next.js, and
            modern frontend development practices. I'm always eager to learn new technologies
            and tackle challenging projects.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}