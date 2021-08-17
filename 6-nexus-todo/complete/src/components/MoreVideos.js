import { useState } from "react"
import { data } from "../data"

export default function MoreVideos() {
  // eslint-disable-next-line
  const [videos, setVideos] = useState(data)

  return (
    <>
      <section className="grid grid-cols-1 gap-5 w-full lg:w-1/2">
        {videos.map((video) => (
          <article
            key={video.id}
            className="flex hover:bg-indigo-100 transition-alll duration-300 hover:text-gray-900 p-2 rounded hover:shadow"
          >
            <video src={video.link} height={150} width={200}></video>
            <div className="ml-2">
              <h3 className="font-bold mb-1">{video.title}</h3>
              <p>{video.desc}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
