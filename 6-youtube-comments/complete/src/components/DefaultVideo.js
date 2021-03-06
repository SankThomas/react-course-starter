import { useState } from "react"
import { defaultVideo } from "../data"

export default function DefaultVideo() {
  // eslint-disable-next-line
  const [defaults, setDefaults] = useState(defaultVideo)
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <section>
        {defaults.map((video) => (
          <article key={video.id}>
            <video
              src={video.link}
              height={400}
              controls={true}
              className="w-full"
            ></video>
            <h2 className="font-bold text-2xl mt-5 mb-3 w-full">
              {video.title}
            </h2>
            {readMore ? (
              <p className="w-full mb-5">{video.desc}</p>
            ) : (
              <p className="w-full mb-5">{`${video.desc.substring(
                0,
                200
              )}...`}</p>
            )}
            <button
              onClick={() => setReadMore(!readMore)}
              className="mb-10 lg:mb-5 font-bold tracking-wider"
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </article>
        ))}
      </section>
    </>
  )
}
