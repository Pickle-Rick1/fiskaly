import React, { useRef, useEffect, useState } from "react"
import ReactGlobe from "react-globe.gl"

function Globe() {
  const [countries, setCountries] = useState({ features: [] })
  const globeEl = useRef()
  const N = 20
  const arcsData = [...Array(N).keys()].map((_, index) => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ["#ff5050", "#b6d2ff", "#ffd4c4", "#d2b58d"][
        Math.round(Math.random() * 1)
      ],
      ["#2dd4bf", "#2dd4bf", "#2dd4bf", "#2dd4bf"][
        Math.round(Math.random() * 1)
      ],
    ],
    endpoint: `${index}`,
  }))

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
    )
      .then(res => res.json())
      .then(setCountries)
    const node = globeEl.current as any
    node.controls().enableZoom = false
    node.controls().autoRotate = false
    node.controls().autoRotateSpeed = 0.7
  }, [])

  return (
    <>
      <div className="Globe">
        <ReactGlobe
          ref={globeEl}
          width={520}
          height={520}
          globeImageUrl="globe.png"
          backgroundColor="rgba(0,0,0,0)"
          showGlobe={true}
          showAtmosphere={true}
          atmosphereColor="#2dd4bf"
          arcsData={arcsData}
          arcColor={"color"}
          arcStroke={1}
          arcDashLength={1}
          arcDashGap={0.3}
          arcDashAnimateTime={() => 2000}
          polygonCapColor={() => "rgba(45,212,191,1)"}
          polygonSideColor={() => "rgba(0,0,0,0)"}
          polygonsData={countries.features.filter(
            d => d.properties.ISO_A2 !== "AQ"
          )}
        />
      </div>
    </>
  )
}

export default Globe
