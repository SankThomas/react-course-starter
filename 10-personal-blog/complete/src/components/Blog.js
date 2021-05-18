import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import sanityClient from "../client"

const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
      title,
      slug,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <section className="lg:max-w-4xl lg:mx-auto">
        <h1 className="text-center">
          Currently showing {posts.length} of my blog posts
        </h1>
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug.current}
              className="bg-gray-200 p-5 rounded shadow-md hover:bg-gray-300 transition-all duration-500"
            >
              <Link to={`/blog/${post.slug.current}`}>
                <div>
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    key={post.mainImage.asset._id}
                    className="md:h-96 md:w-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-center text-2xl md:text-3xl">
                    {post.title}
                  </h4>
                  <Link
                    to={`/blog/${post.slug.current}`}
                    className="bg-green-500 py-2 px-5 mt-5 inline-block text-white rounded transition-all duration-500"
                  >
                    Read Blog Post
                  </Link>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Blog
