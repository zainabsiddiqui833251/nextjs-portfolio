import React from 'react';

type ContactProps = {
    closeForm: () => void; // Define the type for closeForm
};

const Contact: React.FC<ContactProps> = ({ closeForm }) => {
    return (
        <main className="w-[90%] max-w-md bg-[url('/images/herodesign.jpg')] bg-cover bg-center m-auto p-6 text-center text-white rounded-lg relative shadow-lg">
            {/* Close Button */}
            <button
                onClick={closeForm}
                className="absolute top-4 right-4 text-white text-2xl"
                aria-label="Close"
            >
                <i className="bi bi-x-circle-fill"></i>
            </button>

            <div className="bg-[#363648] p-6 rounded-lg">
                {/* Heading */}
                <h1 className="text-4xl uppercase font-bold mb-4 tracking-widest">Contact Me</h1>
                <p className="text-lg capitalize font-medium mb-6">
                    For any query or collaboration, contact me.
                </p>

                {/* Contact Form */}
                <form action="post" className="space-y-4">
                    {/* First Name & Last Name */}
                    <div className="flex gap-4">
                        <label htmlFor="firstname" className="flex-1">
                            <input
                                type="text"
                                placeholder="First Name"
                                id="firstname"
                                name="firstname"
                                required
                                className="w-full border-none bg-transparent outline-none focus:ring-2 focus:ring-white p-3 rounded-lg text-lg"
                            />
                        </label>
                        <label htmlFor="lastname" className="flex-1">
                            <input
                                type="text"
                                placeholder="Last Name"
                                id="lastname"
                                name="lastname"
                                required
                                className="w-full border-none bg-transparent outline-none focus:ring-2 focus:ring-white p-3 rounded-lg text-lg"
                            />
                        </label>
                    </div>

                    {/* Email */}
                    <label htmlFor="email" className="block">
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                            required
                            className="w-full border-none bg-transparent outline-none focus:ring-2 focus:ring-white p-3 rounded-lg text-lg"
                        />
                    </label>

                    {/* Message */}
                    <label htmlFor="message" className="block">
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            rows={4}
                            required
                            className="w-full border-none bg-transparent outline-none focus:ring-2 focus:ring-white p-3 rounded-lg text-lg"
                        ></textarea>
                    </label>

                    {/* Submit Button */}
                    <input
                        type="submit"
                        value="Submit"
                        className="w-full text-xl uppercase bg-[#5c212d] hover:bg-[#832f3a] text-white px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
                    />
                </form>
            </div>
        </main>
    );
};

export default Contact;
