import { useState } from "react"

const People = ({ id, name, desc, avatar }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <section className="people">
        <article key={id}>
          <img src={avatar} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{readMore ? desc : `${desc.substring(0, 120)}...`}</p>
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "Say Less" : "Say More"}
            </button>
          </div>
        </article>
      </section>
    </>
  )
}

export default People
