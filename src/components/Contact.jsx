'use client'
import Heading from './sub/Heading'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

const Contact = () => {
  const formRef = useRef()

  const [toast, setToast] = useState({
    show: false,
    type: '', // success | error
    message: '',
  })

  const showToast = (type, message) => {
    setToast({ show: true, type, message })

    setTimeout(() => {
      setToast({ show: false, type: '', message: '' })
    }, 3000)
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_gxfvhyv',
      'template_9f7m78q',
      formRef.current,
      'tRzLW66ZiK159NR6U'
    ).then(
      () => {
        showToast('success', 'Mensagem enviada com sucesso 🚀')
        formRef.current.reset()
      },
      (error) => {
        showToast('error', 'Erro ao enviar mensagem 😢')
        console.error(error)
      }
    )
  }

  return (
    <div id="contact" className="h-screen lg:h-auto py-20 lg:py-40 xs:pb-20">
      <Heading text={'Envie uma Mensagem'} />

      <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
        
        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={'/e-mails.png'}
            alt="Contact Image"
            width={500}
            height={500}
            className="w-[500px] rounded-md opacity-80"
          />
        </motion.div>

        {/* FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
        >
          <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full border border-lime-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full border border-lime-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            />
          </div>

          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            className="w-full border border-lime-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
          />

          <textarea
            name="message"
            placeholder="Write Me..."
            required
            className="max-h-[250px] min-h-[150px] border border-lime-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
          />

          <button
            type="submit"
            className="w-full border border-lime-500 rounded-md px-4 py-2 text-sm font-light tracking-wider text-white 
            bg-gradient-to-br from-yellow-700 via-fuchsia-900 to-rose-700 
            transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* TOAST */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl backdrop-blur-md
            shadow-2xl text-sm text-white z-50 border
            ${
              toast.type === 'success'
                ? 'bg-green-500/20 border-green-400'
                : 'bg-red-500/20 border-red-400'
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Contact
