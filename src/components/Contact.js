import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#222629] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/2d38d7b7-a6ce-45f4-80fb-6d3928868801" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-green-600 text-white'>Contact</p>
                    <p className='text-white py-4'>Fill up the form below or shoot me an email - faisalahmeddiu@gmail.com</p>
                </div>
                <input className='bg-white p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email' />
                <textarea className='bg-white p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
            </form>
        </div>
    )
}

export default Contact;