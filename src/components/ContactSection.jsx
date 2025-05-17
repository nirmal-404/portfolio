import React from 'react'
import { Facebook, Linkedin, Mail, MapPin, Phone, Send, Loader } from "lucide-react"
import { cn } from '@/lib/utils'
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
    };

    const serviceID = 'service_xp3wldk';
    const toYouTemplateID = 'template_xfgqalb'; // This one sends the user's message to YOU
    const autoReplyTemplateID = 'template_ofqjr05'; // This is the auto-reply to the user
    const publicKey = 'lxhqJYg0WO06T4YRb';

    // First, send message to YOU
    emailjs
        .send(serviceID, toYouTemplateID, data, publicKey)
        .then(() => {
            // Then, send auto-reply to USER
            return emailjs.send(serviceID, autoReplyTemplateID, data, publicKey);
        })
        .then(() => {
            toast({
                title: "Message sent!",
                description: "Thanks for your message. I'll respond asap.",
            });
            form.reset();
        })
        .catch((err) => {
            toast({
                title: "Error",
                description: "Failed to send message. Try again later.",
                variant: "destructive",
            });
            console.error(err);
        })
        .finally(() => {
            setIsSubmitting(false);
        });
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
                                    <h4>Location</h4>
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
                                <label htmlFor="message" className='block text-sm font-medium mb-2'>{" "} Your message</label>
                                <textarea type="text" id="message" name='message' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' placeholder="Hello, I'd like to talk about..." />
                            </div>

                            <button type='submit'
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {isSubmitting ? <Loader size={16} /> : <Send size={16} />}


                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
