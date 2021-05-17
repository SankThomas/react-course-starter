import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import sanityClient from "../client"

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
      title,
      _id,
      mainImage {
        asset -> {
          _id,
          url
        },
      },
      body,
      "authorName": author -> name,
      "authorImage": author -> image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error)
  }, [slug])

  console.log(singlePost)

  if (!singlePost) return <div>Loading...</div>

  return (
    <>
      <div>
        <section>
          <h2>{singlePost.title}</h2>
          <ul>
            <li>{singlePost.authorName}</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default SinglePost
