import React from 'react'
import { Facebook, Linkedin, Mail, MapPin, Phone, Send, Loader} from "lucide-react"
import { cn } from '@/lib/utils'
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactSection = () => {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact infomation */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a
                                        href="mailto:nirmalperera2509@gmail.com"
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        nirmalperera2509@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <a
                                        href="tel:+94758908057"
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        + (94) 75 890-8057
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors'>
                                        Gampaha, Western Province, Sri Lanka
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect with me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href='https://web.facebook.com/manusha.perera.526/about' target='_blank'>
                                    <Linkedin />
                                </a>
                                <a href='https://www.linkedin.com/in/nirmal-perera-65446b252/' target='_blank'>
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* contact form */}
                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message
                        </h3>

                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your name</label>
                                <input type="text" id="name" name='name' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Jhon Doe..' />
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your email</label>
                                <input type="email" id="email" name='email' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='jhondoe@gmail.com' />
                            </div>

                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'>{" "} Your message</label>
                                <textarea type="text" id="name" name='name' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' placeholder="Hello, I'd like to talk about..." />
                            </div>

                            <button type='submit'
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {isSubmitting ? <Loader size={16} /> : <Send size={16} /> }
                                
                                
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
