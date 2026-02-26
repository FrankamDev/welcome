import Particles from './Particles';
import React from 'react'

const Particles = () => {
  return (
    <div>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={["#ffffff"]}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover
    alphaParticles={false}
    disableRotation={false}
    pixelRatio={1}
/>
</div>
    </div>
  )
}

export default Particles



