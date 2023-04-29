import { Project } from '@/types/Project'
import { createClient, groq } from 'next-sanity'

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: 'jun6ipwm',
    dataset: 'production',
    apiVersion: '2023-04-29',
  })

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset_url,
      url,
      content
}`
  )
}
