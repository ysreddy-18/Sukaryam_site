"use client"
import emailjs from '@emailjs/browser'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { useState } from "react"
import Image from "next/image"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // emailjs.send(
    //   'service_77lew2b',
    //   'template_3as7kws',
    //   {
    //     from_name: formData.name,
    //     from_email: formData.email,
    //     from_mobile: formData.mobile,
    //     message: formData.message,
    //   },
    //   'zG0w8aT6CO-4nuWz3'
    // ).then(() => {
    //   alert('Message sent successfully!')
    //   setFormData({ name: '', mobile: '', email: '', message: '' })
    // })
    try {
      await emailjs.send(
        'service_77lew2b',
        'template_3as7kws',
        {
          from_name: formData.name,
          from_email: formData.email,
          from_mobile: formData.mobile,
          message: formData.message,
        },
        'zG0w8aT6CO-4nuWz3'
      )
      
      alert('Message sent successfully!')
      setFormData({ name: '', mobile: '', email: '', message: '' })
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center max-w-6xl mx-auto p-6">
      <div className="w-full md:w-1/2 relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop"
          alt="Event Booking"
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 w-full md:w-1/2">
        {/* <h2 className="text-2xl font-bold text-center mb-6">Book Your Event</h2> */}
        
        <div className="space-y-2">
          <Input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Input
            name="mobile"
            type="tel"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
          />
        </div>
        
        <div className="space-y-2">
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Textarea
            name="message"
            placeholder="Tell us about your event requirements"
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-[120px]"
          />
        </div>

        <Button 
      type="submit" 
      className="w-full" 
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Sending...' : 'Book Event'}
    </Button>
      </form>
    </div>
  )
}
