import client from "@sanity/client"

export default client({
  projectId: "bymz1yox",
  dataset: "production",
  apiVersion: "2021-05-17",
  useCdn: true,
})
