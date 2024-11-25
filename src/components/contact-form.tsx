import React from 'react';

type ContactProps = {
    closeForm: () => void; // Define the type for closeForm
};

const Contact: React.FC<ContactProps> = ({ closeForm }) => {
    return (
        <main className="w-[90%] max-w-md border-2 bg-[url(/images/herodesign.jpg)] m-auto p-4 text-center text-white rounded-lg relative">
            {/* Close Button */}
            <div className='bg-[#363648] p-4 rounded-lg py-8 '>
                <button
                    onClick={closeForm}
                    className="absolute top-6 right-6 text-white text-2xl"
                    aria-label="Close"
                >
                    <i className="bi bi-x-circle-fill"></i>
                </button>
                <h1 className="text-4xl uppercase font-bold mb-4 tracking-widest">Contact Me</h1>
                <p className="text-lg capitalize font-medium mb-2">
                    For any query or collaboration, contact me.
                </p>
                <form action="post">
                    <label htmlFor="firstname">
                        <input
                            type="text"
                            placeholder="First Name"
                            id="firstname"
                            name="firstname"
                            required
                            className="border-none bg-transparent outline-none focus:outline-none p-1 my-6 text-lg w-[45%]"
                        />
                    </label>
                    <label htmlFor="lastname">
                        <input
                            type="text"
                            placeholder="Last Name"
                            id="lastname"
                            name="lastname"
                            required
                            className="border-none bg-transparent outline-none focus:outline-none p-1 my-6 text-lg w-[45%]"
                        />
                    </label>
                    <br />
                    <label htmlFor="email">
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                            required
                            className="border-none bg-transparent outline-none focus:outline-none p-1 my-6 text-lg w-[90%]"
                        />
                    </label>
                    <br />
                    <label htmlFor="message">
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            rows={1}
                            required
                            className="border-none bg-transparent outline-none focus:outline-none p-1 my-6 text-lg w-[90%]"
                        ></textarea>
                    </label>
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        className="text-xl uppercase border px-4 rounded-lg mt-5 hover:tracking-widest py-2"
                    />
                </form>
            </div>
        </main>
    );
};

export default Contact;
