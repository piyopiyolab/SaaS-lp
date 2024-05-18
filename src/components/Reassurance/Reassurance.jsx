import { constants } from "../../constants/constants"

function Reassurance() {

    return (

        <section className="sm:flex sm:flex-wrap sm:justify-center sm:items-center ">

            {constants.icons.map(n => (
                <article
                    key={n.name}
                    className="text-center my-12 sm:basis-1/3">
                    <img
                        loading="lazy"
                        className="block mx-auto"
                        src={n.src}
                        alt={n.alt} />
                    <h2 className="my-4">{n.title}</h2>
                    <p
                        className="w-64 text-c-secondary mx-auto text-balance	">{n.description}</p>
                </article>
            ))}
        </section>
    )
}
export default Reassurance