import { useState, useEffect } from "react"
import client from "../client"
import { Link } from "react-router-dom"

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
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
      <section className="text-white lg:max-w-6xl lg:mx-auto">
        <h1 className="text-center tracking-widest text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-10">
          My Blog Posts
        </h1>
        <h3 className="text-center mb-10">
          You are viewing {posts.length} blog posts
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.slug.current}
              className="bg-purple-700 p-3 rounded-md"
            >
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="mx-auto md:h-52 bg-purple-400 p-2 rounded-t-md"
              />
              <h4 className="text-center mt-3 mb-5 md:text-left font-bold text-xl">
                {post.title}
              </h4>
              <Link
                to={`/blog/${post.slug.current}`}
                className="bg-white text-indigo-500 py-2 px-6 rounded tracking-widest font-semibold mb-10 inline-block border-2 border-white hover:bg-transparent hover:text-white select-none md:mb-0"
              >
                Read Full Article
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
