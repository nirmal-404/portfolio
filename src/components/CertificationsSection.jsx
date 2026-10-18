import React, { useState } from 'react'
import { Download, ExternalLink, Copy, Check, Maximize2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const certifications = [
    {
        id: 1,
        title: "Legacy Responsive Web Design V8",
        issuer: "FreeCodeCamp",
        preview: "/certifications/previews/1 Legacy Responsive Web Design V8.png",
        download: "/certifications/raw/1 Legacy Responsive Web Design V8.pdf",
        verificationLink: "https://freecodecamp.org/certification/fcc06ecfdb0-b251-4a4d-ae05-5e0545feb099/responsive-web-design",
        verificationCode: "fcc06ecfdb0-b251-4a4d-ae05-5e0545feb099",
        date: "2024",
    },
    {
        id: 2,
        title: "Web Design for Beginners",
        issuer: "UOM CODL",
        preview: "/certifications/previews/2 Web Design for Beginners.png",
        download: "/certifications/raw/2 Web Design for Beginners.pdf",
        verificationLink: "https://open.uom.lk/verify",
        verificationCode: "RFxPwFFJ0X",
        date: "2024",
    },
    {
        id: 3,
        title: "Python for Beginners",
        issuer: "UOM CODL",
        preview: "/certifications/previews/3 Python for Beginners.png",
        download: "/certifications/raw/3 Python for Beginners.pdf",
        verificationLink: "https://open.uom.lk/verify",
        verificationCode: "iZaGDBAyUE",
        date: "2024",
    },
    {
        id: 4,
        title: "Version Controlling 101 From Zero to Hero",
        issuer: "CoDeKu DevOps Academy",
        preview: "/certifications/previews/4 Version Controlling 101 From Zero to Hero.png",
        download: "/certifications/raw/4 Version Controlling 101 From Zero to Hero.pdf",
        verificationLink: "https://devopsacademy.online/",
        verificationCode: "WQPf7SknFcRDfCh5qmLQ",
        date: "2024",
    },
    {
        id: 5,
        title: "Jenkins For Beginners",
        issuer: "KodeKloud",
        preview: "/certifications/previews/5 Jenkins For Beginners.png",
        download: "/certifications/raw/5 Jenkins For Beginners.pdf",
        verificationLink: "https://learn.kodekloud.com/learn/certificate/9e1fc71d-f5c8-4fcd-a1e8-3164091726a7",
        verificationCode: "9e1fc71d-f5c8-4fcd-a1e8-3164091726a7",
        date: "2024",
    },
    {
        id: 6,
        title: "Docker Training Course for the Absolute Beginner",
        issuer: "KodeKloud",
        preview: "/certifications/previews/6 Docker Training Course for the Absolute Beginner.png",
        download: "/certifications/raw/6 Docker Training Course for the Absolute Beginner.pdf",
        verificationLink: "https://learn.kodekloud.com/learn/certificate/64eff0c8-79a4-42bd-acb9-bb18bcc6c468",
        verificationCode: "64eff0c8-79a4-42bd-acb9-bb18bcc6c468",
        date: "2024",
    },
    {
        id: 7,
        title: "Kubernetes for the Absolute Beginners - Hands-on Tutorial",
        issuer: "KodeKloud",
        preview: "/certifications/previews/7 Kubernetes for the Absolute Beginners - Hands-on Tutorial.png",
        download: "/certifications/raw/7 Kubernetes for the Absolute Beginners - Hands-on Tutorial.pdf",
        verificationLink: "https://learn.kodekloud.com/learn/certificate/b03ebf42-5539-4df1-9cee-91ea76a5bcb6",
        verificationCode: "b03ebf42-5539-4df1-9cee-91ea76a5bcb6",
        date: "2024",
    },
    {
        id: 8,
        title: "AIML Engineer - Stage 1",
        issuer: "SLIIT CODE",
        preview: "/certifications/previews/8 AIML Engineer - Stage 1.png",
        download: "/certifications/raw/8 AIML Engineer - Stage 1.pdf",
        verificationLink: "https://code.sliit.org/certificates/e1ggdfcb9n",
        verificationCode: "e1ggdfcb9n",
        date: "2024",
    },
    // {
    //     id: 9,
    //     title: "Terraform Basics Training Course",
    //     issuer: "KodeKloud",
    //     preview: "/certifications/previews/9 Terraform Basics Training Course.png",
    //     download: "/certifications/raw/9 Terraform Basics Training Course.pdf",
    //     verificationLink: "https://learn.kodekloud.com/learn/certificate/3114d2a3-4dc4-476b-9c7d-21f69c0fcdc3",
    //     verificationCode: "3114d2a3-4dc4-476b-9c7d-21f69c0fcdc3",
    //     date: "2024",
    // },
    // {
    //     id: 10,
    //     title: "Learn Ansible Basics - Beginners CourseLearn Ansible Basics - Beginners Course",
    //     issuer: "KodeKloud",
    //     preview: "/certifications/previews/10 Learn Ansible Basics - Beginners CourseLearn Ansible Basics - Beginners Course.png",
    //     download: "/certifications/raw/10 Learn Ansible Basics - Beginners CourseLearn Ansible Basics - Beginners Course.pdf",
    //     verificationLink: "https://learn.kodekloud.com/learn/certificate/a631f880-bdcc-47e9-a5cc-5d9c1d7780bf",
    //     verificationCode: "a631f880-bdcc-47e9-a5cc-5d9c1d7780bf",
    //     date: "2024",
    // },
    // {
    //     id: 11,
    //     title: "Helm for Beginners",
    //     issuer: "KodeKloud",
    //     preview: "/certifications/previews/11 Helm for Beginners.png",
    //     download: "/certifications/raw/11 Helm for Beginners.pdf",
    //     verificationLink: "https://learn.kodekloud.com/learn/certificate/c9984ff1-1623-4689-8d82-10828b0434ba",
    //     verificationCode: "c9984ff1-1623-4689-8d82-10828b0434ba",
    //     date: "2024",
    // },
    // {
    //     id: 12,
    //     title: "Istio Service Mesh",
    //     issuer: "KodeKloud",
    //     preview: "/certifications/previews/12 Istio Service Mesh.png",
    //     download: "/certifications/raw/12 Istio Service Mesh.pdf",
    //     verificationLink: "https://learn.kodekloud.com/learn/certificate/319c434b-e2a7-424a-9e9d-191d01970c7b",
    //     verificationCode: "319c434b-e2a7-424a-9e9d-191d01970c7b",
    //     date: "2024",
    // },
    // {
    //     id: 13,
    //     title: "GitOps with ArgoCD",
    //     issuer: "KodeKloud",
    //     preview: "/certifications/previews/13 GitOps with ArgoCD.png",
    //     download: "/certifications/raw/13 GitOps with ArgoCD.pdf",
    //     verificationLink: "https://learn.kodekloud.com/learn/certificate/225bba02-0ee9-4796-aa8e-d5bcc16eadb5",
    //     verificationCode: "225bba02-0ee9-4796-aa8e-d5bcc16eadb5",
    //     date: "2024",
    // },
]

const CertificationsSection = () => {
    const [selectedCert, setSelectedCert] = useState(null)
    const [copiedCode, setCopiedCode] = useState(null)
    const { toast } = useToast()

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
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Certifications</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Professional certifications and courses I have completed to expand my skills
                </p>

                <div className="project-grid">
                    {[...certifications].reverse().map(cert => (
                        <article key={cert.id} className="project-tile certification-tile">
                            <button
                                type="button"
                                className="certification-preview"
                                onClick={() => setSelectedCert(cert)}
                                aria-label={`Preview ${cert.title}`}
                            >
                                <img src={cert.preview} alt={cert.title} loading="lazy" />
                                <span className="certification-expand"><Maximize2 size={18} /> Preview</span>
                            </button>
                            <div className="p-5 flex flex-col">
                                <p className="text-primary text-xs font-semibold uppercase tracking-wider">{cert.issuer} · {cert.date}</p>
                                <h3 className="mt-2 text-lg font-semibold line-clamp-2">{cert.title}</h3>
                                <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border pt-4">
                                    <button
                                        type="button"
                                        onClick={() => handleDownload(cert.download, cert.title)}
                                        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        <Download size={16} /> Download
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleCopyCode(cert.verificationCode)}
                                        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        {copiedCode === cert.verificationCode ? <Check size={16} /> : <Copy size={16} />}
                                        {copiedCode === cert.verificationCode ? 'Copied!' : 'Copy code'}
                                    </button>
                                    <a
                                        href={cert.verificationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-primary"
                                    >
                                        Verify <ExternalLink size={15} />
                                    </a>
                                </div>
                            </div>
                        </article>
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
