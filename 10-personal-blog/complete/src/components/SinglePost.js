import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
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
          <h2 className="font-bold text-2xl mb-2">{singlePost.title}</h2>
          <ul>
            <li className="text-sm">By {singlePost.authorName}</li>
          </ul>
        </section>

        <Link
          to="/blog"
          className="bg-green-500 py-2 px-5 mt-5 inline-block text-white rounded transition-all duration-500 hover:bg-green-600"
        >
          Back
        </Link>
      </div>
    </>
  )
}

export default SinglePost
