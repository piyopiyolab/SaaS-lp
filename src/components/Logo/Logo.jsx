import logoSvg from "/images/Logos.svg"

const Logo = ({ name, position }) => {
    return (

        <img
            loading="lazy"
            src={logoSvg}
            alt={`${name} logo`}
            className="object-cover w-full h-full"
            style={{ objectPosition: `-${position}px 0` }}
        />


    )


}

export default Logo