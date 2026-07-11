import { useEffect, useRef } from 'react'

export default function ParticleCanvas({ theme }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let t = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // ── Stars ──
    const starCount = Math.floor((window.innerWidth * window.innerHeight) / 5000)
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.004 + 0.001,
      phase: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      color: Math.random() < 0.3 ? '#00d4ff' : Math.random() < 0.5 ? '#e040fb' : '#ffffff',
    }))

    // ── Floating 3D hex shapes ──
    const hexes = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.7,
      size: 30 + Math.random() * 50,
      angle: Math.random() * Math.PI * 2,
      speed: 0.002 + Math.random() * 0.003,
      alpha: 0.05 + Math.random() * 0.1,
      color: i % 2 === 0 ? '#00d4ff' : '#e040fb',
    }))

    function drawHex(cx, cy, size, angle, alpha, color) {
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(angle)
      ctx.strokeStyle = color
      ctx.globalAlpha = alpha
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i
        const px = size * Math.cos(a)
        const py = size * Math.sin(a)
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.stroke()
      // Inner hex
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i
        const px = (size * 0.5) * Math.cos(a)
        const py = (size * 0.5) * Math.sin(a)
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.stroke()
      ctx.restore()
    }

    function drawAurora(time) {
      const w = canvas.width, h = canvas.height
      // Cyan aurora
      const grd1 = ctx.createRadialGradient(w * 0.2, h * 0.3, 0, w * 0.2, h * 0.3, w * 0.55)
      grd1.addColorStop(0, `rgba(0,212,255,${0.06 + 0.03 * Math.sin(time * 0.5)})`)
      grd1.addColorStop(0.5, `rgba(0,100,255,${0.03 + 0.015 * Math.sin(time * 0.3)})`)
      grd1.addColorStop(1, 'transparent')
      ctx.fillStyle = grd1
      ctx.fillRect(0, 0, w, h)

      // Magenta aurora
      const grd2 = ctx.createRadialGradient(w * 0.78, h * 0.25, 0, w * 0.78, h * 0.25, w * 0.5)
      grd2.addColorStop(0, `rgba(224,64,251,${0.07 + 0.03 * Math.sin(time * 0.4 + 1)})`)
      grd2.addColorStop(0.4, `rgba(255,0,128,${0.03 + 0.015 * Math.sin(time * 0.6)})`)
      grd2.addColorStop(1, 'transparent')
      ctx.fillStyle = grd2
      ctx.fillRect(0, 0, w, h)

      // Center glow (subtle)
      const grd3 = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.4)
      grd3.addColorStop(0, `rgba(80,0,200,${0.04 + 0.02 * Math.sin(time * 0.2)})`)
      grd3.addColorStop(1, 'transparent')
      ctx.fillStyle = grd3
      ctx.fillRect(0, 0, w, h)
    }

    function drawPerspectiveGrid(time) {
      const w = canvas.width, h = canvas.height
      const horizon = h * 0.72
      const vanishX = w * 0.5
      const cols = 14
      const rows = 12
      const speed = (time * 0.18) % 1

      ctx.save()
      ctx.strokeStyle = 'rgba(0,212,255,0.12)'
      ctx.lineWidth = 0.8

      // Vertical lines
      for (let i = 0; i <= cols; i++) {
        const x = (i / cols) * w
        const t2 = (x - vanishX) / (w / 2)
        ctx.beginPath()
        ctx.moveTo(vanishX + t2 * 0.1, horizon)
        ctx.lineTo(x, h)
        ctx.stroke()
      }

      // Horizontal lines
      for (let j = 0; j <= rows; j++) {
        const progress = ((j / rows) + speed) % 1
        const y = horizon + (h - horizon) * Math.pow(progress, 1.8)
        const alpha = Math.pow(progress, 0.5) * 0.18
        ctx.strokeStyle = `rgba(0,212,255,${alpha})`
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }

      // Horizon glow line
      const grdHorizon = ctx.createLinearGradient(0, horizon, w, horizon)
      grdHorizon.addColorStop(0, 'transparent')
      grdHorizon.addColorStop(0.2, 'rgba(0,212,255,0.4)')
      grdHorizon.addColorStop(0.5, 'rgba(224,64,251,0.6)')
      grdHorizon.addColorStop(0.8, 'rgba(0,212,255,0.4)')
      grdHorizon.addColorStop(1, 'transparent')
      ctx.strokeStyle = grdHorizon
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(0, horizon)
      ctx.lineTo(w, horizon)
      ctx.stroke()

      ctx.restore()
    }

    const draw = (time) => {
      t = time * 0.001
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (theme !== 'light') {
        drawAurora(t)
        drawPerspectiveGrid(t)
      }

      // Floating hexagons
      hexes.forEach(h2 => {
        h2.angle += h2.speed
        h2.y += Math.sin(t * 0.5 + h2.x) * 0.15
        if (h2.x < -100) h2.x = canvas.width + 100
        drawHex(h2.x, h2.y, h2.size, h2.angle, h2.alpha * (theme === 'light' ? 0.3 : 1), h2.color)
      })

      // Stars / particles
      stars.forEach(p => {
        p.alpha = 0.15 + 0.85 * Math.abs(Math.sin(t * p.speed * 200 + p.phase))
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)

        const a = theme === 'light' ? p.alpha * 0.18 : p.alpha * 0.7
        if (p.color === '#00d4ff') ctx.fillStyle = `rgba(0,212,255,${a})`
        else if (p.color === '#e040fb') ctx.fillStyle = `rgba(224,64,251,${a})`
        else ctx.fillStyle = `rgba(200,220,255,${a})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [theme])

  return <canvas ref={canvasRef} id="particles-canvas" />
}
