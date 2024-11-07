import Image from 'next/image';
import { useState } from 'react'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage(null);
        setIsSuccess(false);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: formData,
                }),
            });

            if (!res.ok) {
                throw new Error('There was an issue submitting the form.');
            }

            setIsSuccess(true);
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error: any) {
            setErrorMessage(error.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    const handleSubscribe = () => {

    }

    return (
        <div className="flex justify-evenly">
            <div className="w-4/12 pt-[8%] pr-[0%] pl-[12%]">
                <h2>Contacte</h2>
                <p className="mt-10">
                    Per telefon:
                </p>
               {/*  <form className="mt-10" onSubmit={handleSubmit}>
                    <div className="flex gap-2 w-fit items-center">
                        <label htmlFor="name">Name:</label>
                        <input
                            className="border border-solid border-[black]"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="flex gap-2 w-fit items-center">
                        <label htmlFor="email">Email:</label>
                        <input
                            className="border border-solid border-[black]"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="flex gap-2 w-fit items-center">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            className="border border-solid border-[black]"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="mt-10 m-auto text-center block p-2 border border-solid border-[black]" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {isSuccess && <p>Your message has been sent successfully!</p>}
                    {errorMessage && <p>{errorMessage}</p>}
                </form> */}
                <form className="mt-10" onSubmit={handleSubscribe}>
                    <div className="flex gap-2 w-fit items-center">
                        <label>Mail:</label>
                        <input className="border border-solid border-[black]" />
                    </div>
                    <p>
                        Subscriute per rebre actualitzacions sobre els
                        productes i promocions!
                    </p>
                    <button
                        className="mt-10 m-auto text-center block p-2 border border-solid border-[black]">
                        Subscriure&apos;m
                    </button>
                </form>
            </div>
            <div className="w-8/12">
                <Image
                    width={4961}
                    height={3508}
                    className="pt-[0%] pr-[9%] pl-[4%]"
                    src="/images/Olivera.png"
                    alt="" />
            </div>
        </div>
    );
};
