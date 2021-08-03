import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import client from "../client"
import BlockContent from "@sanity/block-content-to-react"

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()

  useEffect(() => {
    client
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
    setIsLoading(false)
  }, [slug])

  return (
    <>
      {isLoading ? (
        <h2 className="text-4xl lg:text-6xl uppercase tracking-widest mb-5 font-bold text-white text-center flex items-center justify-center h-screen">
          Loading blog post...
        </h2>
      ) : (
        <section className="px-5 lg:max-w-5xl lg:mx-auto text-white">
          <h1 className="text-4xl lg:text-6xl tracking-widest mb-5 font-bold text-white text-center">
            {singlePost.title}
          </h1>

          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              className="p-3 bg-purple-400 rounded-lg h-96 mx-auto w-full"
            />
          )}

          <p className="text-center mt-3 mb-5">By {singlePost.authorName}</p>

          <div>
            <BlockContent
              blocks={singlePost.body}
              projectId="bymz1yox"
              dataset="production"
            />
          </div>
          <Link
            to="/blog"
            className="bg-white text-indigo-500 py-2 px-6 rounded tracking-widest font-semibold mt-5 inline-block border-2 border-white hover:bg-transparent hover:text-white select-none"
          >
            Go Back
          </Link>
        </section>
      )}
    </>
  )
}
