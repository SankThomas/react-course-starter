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
      <section>
        <h1>Currently showing {posts.length} of my blog posts</h1>
        {posts.map((post, index) => (
          <article key={post.slug.current}>
            <Link to={`/blog/${post.slug.current}`}>
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt}
                key={post.mainImage.asset._id}
              />
              <h4>{post.title}</h4>
              <p></p>
            </Link>
          </article>
        ))}
      </section>
    </>
  )
}

export default Blog
