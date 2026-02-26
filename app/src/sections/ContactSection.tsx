import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });

      tl.from(infoRef.current, {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .from(formRef.current, {
          x: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.6');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const contactItems = [
    {
      icon: MapPin,
      title: 'Our Office',
      value: '15215 52nd Ave S, Suite 203, Tukwila, WA 98188',
      link: 'https://maps.google.com/?q=15215+52nd+Ave+S,+Suite+203,+Tukwila,+WA+98188',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '(206) 234-6883',
      link: 'tel:2062346883',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@ehsanlawpllc.com',
      link: 'mailto:info@ehsanlawpllc.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      value: 'Mon – Fri: 9:00 AM – 5:00 PM',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-white py-20 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F4F6F8] hidden lg:block z-0" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">

          {/* Left: Contact Info */}
          <div ref={infoRef} className="lg:col-span-5 flex flex-col justify-center">
            <span className="caption-text text-[#C69A2C] block mb-4">Contact Us</span>
            <h2 className="heading-lg text-navy mb-8 leading-tight">
              Ready to Start Your<br />
              <span className="text-[#C69A2C]">New Chapter?</span>
            </h2>

            <p className="body-text text-gray mb-12 max-w-md leading-relaxed">
              We provide personalized attention and strategic legal counsel for your immigration journey. Contact us today for a free initial consultation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B1A2F]/5 flex items-center justify-center shrink-0 group-hover:bg-[#C69A2C]/10 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-navy group-hover:text-[#C69A2C] transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#C69A2C] mb-1 font-semibold">{item.title}</p>
                      {item.link ? (
                        <a href={item.link} className="text-navy font-medium hover:text-[#C69A2C] transition-colors leading-relaxed block">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-navy font-medium leading-relaxed">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div ref={formRef} className="lg:col-span-7">
            <div className="bg-[#0B1A2F] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
              {/* Subtle texture or pattern could go here */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C69A2C]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              {submitted ? (
                <div className="relative z-10 text-center py-12 md:py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 rounded-full bg-[#C69A2C]/20 flex items-center justify-center mx-auto mb-8 border border-[#C69A2C]/30">
                    <CheckCircle2 className="w-10 h-10 text-[#C69A2C]" />
                  </div>
                  <h3 className="heading-md text-white mb-4">Message Received</h3>
                  <p className="text-white/60 max-w-sm mx-auto">
                    Thank you for reaching out. A member of our legal team will contact you within one business day.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-10 border-white/20 text-white hover:bg-white/10 rounded-full px-8"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">Full Name</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-14 rounded-2xl focus-visible:ring-[#C69A2C] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">Email Address</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-14 rounded-2xl focus-visible:ring-[#C69A2C] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">Phone Number</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-14 rounded-2xl focus-visible:ring-[#C69A2C] transition-all"
                        placeholder="(206) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">Case Type</label>
                      <Select
                        value={formData.caseType}
                        onValueChange={(value) => setFormData({ ...formData, caseType: value })}
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 text-white h-14 rounded-2xl focus:ring-[#C69A2C] transition-all">
                          <SelectValue placeholder="Select Service" />
                        </SelectTrigger>
                        <SelectContent className="bg-navy border-white/10 text-white rounded-2xl overflow-hidden">
                          {[
                            'Family Immigration',
                            'Business & Employment',
                            'Deportation Defense',
                            'Citizenship & Naturalization',
                            'Asylum & Humanitarian',
                            'Other',
                          ].map((type) => (
                            <SelectItem key={type} value={type} className="focus:bg-gold focus:text-navy cursor-pointer">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">How can we help?</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 min-h-[160px] rounded-[2rem] p-6 focus-visible:ring-[#C69A2C] resize-none transition-all"
                      placeholder="Briefly describe your situation..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C69A2C] hover:bg-[#C69A2C]/90 text-navy font-bold h-16 rounded-2xl text-base shadow-lg shadow-[#C69A2C]/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
