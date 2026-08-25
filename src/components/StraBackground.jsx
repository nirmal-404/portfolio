
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const StraBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
        const pointer = new THREE.Vector2()
        const particleGroup = new THREE.Group()
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const particleCount = window.innerWidth < 768 ? 90 : 150
        const points = []

        camera.position.z = 7
        scene.add(particleGroup)

        for (let index = 0; index < particleCount; index += 1) {
            points.push(new THREE.Vector3(
                (Math.random() - 0.5) * 13,
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 5
            ))
        }

        const pointPositions = new Float32Array(points.flatMap((point) => [point.x, point.y, point.z]))
        const pointGeometry = new THREE.BufferGeometry()
        pointGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3))
        const pointMaterial = new THREE.PointsMaterial({
            color: 0x54e0d2,
            size: 0.045,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        })
        const pointCloud = new THREE.Points(pointGeometry, pointMaterial)
        particleGroup.add(pointCloud)

        const linePositions = []
        points.forEach((point, index) => {
            points.slice(index + 1, index + 7).forEach((nearbyPoint) => {
                if (point.distanceTo(nearbyPoint) < 1.8) {
                    linePositions.push(point.x, point.y, point.z, nearbyPoint.x, nearbyPoint.y, nearbyPoint.z)
                }
            })
        })

        const lineGeometry = new THREE.BufferGeometry()
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x2a9d9a,
            transparent: true,
            opacity: 0.18,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        })
        particleGroup.add(new THREE.LineSegments(lineGeometry, lineMaterial))

        const resize = () => {
            const width = window.innerWidth
            const height = window.innerHeight
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
            renderer.setSize(width, height, false)
        }

        const handlePointerMove = (event) => {
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1
            pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
        }

        let animationFrame
        const animate = (time) => {
            const elapsed = time * 0.0002
            if (!prefersReducedMotion) {
                particleGroup.rotation.y = elapsed + pointer.x * 0.08
                particleGroup.rotation.x = pointer.y * 0.04
                pointCloud.position.y = Math.sin(elapsed * 4) * 0.08
            }
            renderer.render(scene, camera)
            animationFrame = requestAnimationFrame(animate)
        }

        resize()
        window.addEventListener('resize', resize)
        window.addEventListener('pointermove', handlePointerMove, { passive: true })
        animationFrame = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(animationFrame)
            window.removeEventListener('resize', resize)
            window.removeEventListener('pointermove', handlePointerMove)
            pointGeometry.dispose()
            pointMaterial.dispose()
            lineGeometry.dispose()
            lineMaterial.dispose()
            renderer.dispose()
        }
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-80" />
            <div className="absolute inset-0 ambient-grid opacity-50" />
            <div className="ambient-glow -left-32 top-20 h-80 w-80" />
            <div className="ambient-glow right-0 top-[38%] h-96 w-96 bg-[hsl(12_82%_64%_/_0.08)] [animation-delay:-5s]" />
            <div className="absolute left-1/2 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>
    )
}

export default StraBackground
