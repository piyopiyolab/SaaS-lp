import Button from "../Button/Button"

function Newsletter() {

    return (
        <div className="w-full sm:max-w-[70%] lg:max-w-[40%] mx-auto lg:mx-0">
            <p className="my-4">Updates right to your Inbox</p>
            <form action="submit"
                className="flex flex-col lg:flex-row">
                <input
                    className="py-2 px-6 rounded-lg bg-c-darkLight"
                    type="email" placeholder="Email address" area-label="email" />
                <Button text="Send" className={"c-btn c-btn-secondary  lg:ml-8"} />
            </form>
        </div>
    )
}
export default Newsletter