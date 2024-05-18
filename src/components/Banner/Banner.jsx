import appBanner from "/images/app-screenshot2.svg"

function Banner() {
    return (
        <section>
            <img loading="lazy" className='bg-c-accent-2 rounded-xl' src={appBanner} alt="Application preview screenshot" />
        </section>
    )
}
export default Banner