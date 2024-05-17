import star from '/icons/star.svg'
import userFeedBackAvatar from "/images/userFeedBackAvatar.svg"


function Testimony() {
    return (
        <section className="bg-c-accent-3 rounded-xl p-16 ">


            <div className='max-w-[30rem] mx-auto text-balance'>
                <blockquote className='text-lg font-semibold'>“Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! thanks!”</blockquote>

                <div className='my-8 flex flex-wrap gap-4 items-center'>
                    <img src={userFeedBackAvatar} alt="Avatar" />
                    <div>
                        <p className='text-c-secondary'>Johnny Owens</p>
                        <div className="flex">
                            <img src={star} alt="star icon" />
                            <img src={star} alt="star icon" />
                            <img src={star} alt="star icon" />
                            <img src={star} alt="star icon" />
                            <img src={star} alt="star icon" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Testimony