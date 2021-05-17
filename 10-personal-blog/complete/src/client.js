import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "bymz1yox",
  dataset: "production",
  apiVersion: "2021-05-17",
  useCdn: true,
})
