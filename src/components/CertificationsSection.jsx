import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Download, ExternalLink, Copy, Check, Maximize2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const certifications = [
    {
        id: 1,
        title: "Legacy Responsive Web Design V8",
        issuer: "FreeCodeCamp",
        preview: "/certifications/previews/1 Legacy Responsive Web Design V8.png",
        download: "/certifications/1 Legacy Responsive Web Design V8.pdf",
        verificationLink: "https://freecodecamp.org/certification/fcc06ecfdb0-b251-4a4d-ae05-5e0545feb099/responsive-web-design",
        verificationCode: "fcc06ecfdb0-b251-4a4d-ae05-5e0545feb099",
        date: "2024",
    },
    {
        id: 2,
        title: "Web Design for Beginners",
        issuer: "UOM CODL",
        preview: "/certifications/previews/2 Web Design for Beginners.png",
        download: "/certifications/2 Web Design for Beginners.pdf",
        verificationLink: "https://open.uom.lk/verify",
        verificationCode: "RFxPwFFJ0X",
        date: "2024",
    },
    {
        id: 3,
        title: "Python for Beginners",
        issuer: "UOM CODL",
        preview: "/certifications/previews/3 Python for Beginners.png",
        download: "/certifications/3 Python for Beginners.pdf",
        verificationLink: "https://open.uom.lk/verify",
        verificationCode: "iZaGDBAyUE",
        date: "2024",
    },
    {
        id: 4,
        title: "Version Controlling 101 From Zero to Hero",
        issuer: "CoDeKu DevOps Academy",
        preview: "/certifications/previews/4 Version Controlling 101 From Zero to Hero.png",
        download: "/certifications/4 Version Controlling 101 From Zero to Hero.pdf",
        verificationLink: "https://devopsacademy.online/",
        verificationCode: "WQPf7SknFcRDfCh5qmLQ",
        date: "2024",
    },
    {
        id: 5,
        title: "Jenkins For Beginners",
        issuer: "KodeKloud",
        preview: "/certifications/previews/5 Jenkins For Beginners.png",
        download: "/certifications/5 Jenkins For Beginners.pdf",
        verificationLink: "https://learn.kodekloud.com/learn/certificate/9e1fc71d-f5c8-4fcd-a1e8-3164091726a7",
        verificationCode: "9e1fc71d-f5c8-4fcd-a1e8-3164091726a7",
        date: "2024",
    },
    {
        id: 6,
        title: "Docker Training Course for the Absolute Beginner",
        issuer: "KodeKloud",
        preview: "/certifications/previews/6 Docker Training Course for the Absolute Beginner.png",
        download: "/certifications/6 Docker Training Course for the Absolute Beginner.pdf",
        verificationLink: "https://learn.kodekloud.com/learn/certificate/64eff0c8-79a4-42bd-acb9-bb18bcc6c468",
        verificationCode: "64eff0c8-79a4-42bd-acb9-bb18bcc6c468",
        date: "2024",
    },
    {
        id: 7,
        title: "Kubernetes for the Absolute Beginners - Hands-on Tutorial",
        issuer: "KodeKloud",
        preview: "/certifications/previews/7 Kubernetes for the Absolute Beginners - Hands-on Tutorial.png",
        download: "/certifications/7 Kubernetes for the Absolute Beginners - Hands-on Tutorial.pdf",
        verificationLink: "https://learn.kodekloud.com/learn/certificate/b03ebf42-5539-4df1-9cee-91ea76a5bcb6",
        verificationCode: "b03ebf42-5539-4df1-9cee-91ea76a5bcb6",
        date: "2024",
    },
    {
        id: 8,
        title: "AIML Engineer - Stage 1",
        issuer: "SLIIT CODE",
        preview: "/certifications/previews/8 AIML Engineer - Stage 1.png",
        download: "/certifications/8 AIML Engineer - Stage 1.pdf",
        verificationLink: "https://code.sliit.org/certificates/e1ggdfcb9n",
        verificationCode: "e1ggdfcb9n",
        date: "2024",
    },
]

const CertificationsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [certificationsPerView, setCertificationsPerView] = useState(3)
    const [selectedCert, setSelectedCert] = useState(null)
    const [copiedCode, setCopiedCode] = useState(null)
    const { toast } = useToast()

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCertificationsPerView(1)
            } else if (window.innerWidth < 1024) {
                setCertificationsPerView(2)
            } else {
                setCertificationsPerView(3)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const totalSlides = Math.ceil(certifications.length / certificationsPerView)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
    }

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex)
    }

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            nextSlide()
        }
        if (touchStart - touchEnd < -50) {
            prevSlide()
        }
    }

    const getVisibleCertifications = () => {
        const startIndex = currentSlide * certificationsPerView
        return certifications.slice(startIndex, startIndex + certificationsPerView)
    }

    const handleCopyCode = (code) => {
        navigator.clipboard.writeText(code)
        setCopiedCode(code)
        toast({
            title: "Copied!",
            description: "Verification code copied to clipboard",
        })
        setTimeout(() => setCopiedCode(null), 2000)
    }

    const handleDownload = (url, title) => {
        const link = document.createElement('a')
        link.href = url
        link.download = `${title}.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section id="certifications" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Certifications</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Professional certifications and courses I have completed to expand my skills
                </p>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-primary text-white hover:bg-primary/80 shadow-lg rounded-full p-3 transition-all duration-300"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div
                        className="overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {[...certifications].reverse().map((cert) => (
                                <div
                                    key={cert.id}
                                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                                >
                                    <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:-translate-y-1 border border-primary/10 hover:border-primary/30">
                                        {/* Certificate Image Hero */}
                                        <div
                                            className="w-full aspect-[16/10] overflow-hidden cursor-pointer relative group bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-primary/20"
                                            onClick={() => setSelectedCert(cert)}
                                        >
                                            <img
                                                src={cert.preview}
                                                alt=""
                                                aria-hidden="true"
                                                className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-50"
                                            />
                                            <img
                                                src={cert.preview}
                                                alt={cert.title}
                                                className="relative w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                                <div className="bg-primary/90 hover:bg-primary rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                                                    <Maximize2 className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-4 flex flex-col flex-1">
                                            {/* Title and Issuer */}
                                            <div className="mb-4">
                                                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                                                    {cert.issuer}
                                                </p>
                                                <h3 className="text-lg font-bold text-foreground line-clamp-2">
                                                    {cert.title}
                                                </h3>
                                            </div>

                                            {/* Action Buttons Row */}
                                            <div className="flex justify-around items-center mb-4 py-3 border-y border-primary/10">
                                                {/* Expand Button */}
                                                <button
                                                    onClick={() => setSelectedCert(cert)}
                                                    className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-200"
                                                    title="Expand preview"
                                                >
                                                    <Maximize2 className="w-5 h-5" />
                                                    <span className="text-xs font-medium">Expand</span>
                                                </button>

                                                {/* Download Button */}
                                                <button
                                                    onClick={() => handleDownload(cert.download, cert.title)}
                                                    className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-200"
                                                    title="Download certificate"
                                                >
                                                    <Download className="w-5 h-5" />
                                                    <span className="text-xs font-medium">Download</span>
                                                </button>

                                                {/* Copy Code Button */}
                                                <button
                                                    onClick={() => handleCopyCode(cert.verificationCode)}
                                                    className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-200"
                                                    title="Copy verification code"
                                                >
                                                    {copiedCode === cert.verificationCode ? (
                                                        <Check className="w-5 h-5 text-primary" />
                                                    ) : (
                                                        <Copy className="w-5 h-5" />
                                                    )}
                                                    <span className="text-xs font-medium">
                                                        {copiedCode === cert.verificationCode ? "Copied!" : "Copy Code"}
                                                    </span>
                                                </button>
                                            </div>

                                            {/* Verify Button */}
                                            <a
                                                href={cert.verificationLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold text-sm"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Verify Certificate
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-primary text-white hover:bg-primary/80 shadow-lg rounded-full p-3 transition-all duration-300"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                ? "bg-primary w-6"
                                : "bg-primary/30 hover:bg-primary/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Expanded Preview Modal */}
            {selectedCert && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    onClick={() => setSelectedCert(null)}
                >
                    <div
                        className="relative bg-card rounded-xl overflow-y-auto shadow-2xl max-w-4xl w-full max-h-[calc(100vh-2rem)] border border-primary/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Large Certificate Image */}
                        <div className="w-full bg-gradient-to-br from-primary/10 to-secondary/10 relative">
                            <img
                                src={selectedCert.preview}
                                alt={selectedCert.title}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 space-y-4">
                            <div>
                                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                                    {selectedCert.issuer}
                                </p>
                                <h3 className="text-3xl font-bold text-foreground">
                                    {selectedCert.title}
                                </h3>
                            </div>

                            {/* Verification Code Section */}
                            <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                                <p className="text-sm font-semibold text-muted-foreground mb-3">Verification Code:</p>
                                <div className="flex items-center justify-between gap-4">
                                    <code className="text-base font-mono text-foreground bg-background/80 p-3 rounded flex-1 break-all border border-primary/10 font-semibold">
                                        {selectedCert.verificationCode}
                                    </code>
                                    <button
                                        onClick={() => handleCopyCode(selectedCert.verificationCode)}
                                        className="flex-shrink-0 p-3 hover:bg-primary/30 rounded-lg transition-colors duration-200"
                                        title="Copy verification code"
                                    >
                                        {copiedCode === selectedCert.verificationCode ? (
                                            <Check className="w-6 h-6 text-primary" />
                                        ) : (
                                            <Copy className="w-6 h-6 text-muted-foreground hover:text-primary" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Modal Action Buttons */}
                            <div className="flex gap-3 pt-4 border-t border-primary/10">
                                <button
                                    onClick={() => handleDownload(selectedCert.download, selectedCert.title)}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-all duration-300 font-semibold"
                                    title="Download certificate"
                                >
                                    <Download className="w-5 h-5" />
                                    Download
                                </button>
                                <a
                                    href={selectedCert.verificationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Verify Certificate
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default CertificationsSection
