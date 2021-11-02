import React, { useRef, useEffect } from "react";
import ReactGlobe from "react-globe.gl";

const N = 20;
const arcsData = [...Array(N).keys()].map((_, index) => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: [["#ff5050", "#b6d2ff", "#ffd4c4", "#d2b58d"][Math.round(Math.random() * 3)], ["#2dd4bf", "#2dd4bf", "#2dd4bf", "#2dd4bf"][Math.round(Math.random() * 3)]],
  endpoint: `${index}`
}));

export function Globe() {

  return (
    <div className="Globe">
      <ReactGlobe
      globeOptions={{
                    cloudsOpacity: 0.6,
                    enableClouds: false,
                    // texture: `https://raw.githubusercontent.com/chrisrzhou/react-globe/master/textures/globe_dark.jpg`,
                    // texture: `https://raw.githubusercontent.com/mayankshah1607/Cle-Air/master/earth-planet-night.jpg`,
                    // texture: globe2,
                    // glowPower: 0.1,
                }}
      cameraOptions={{
                  enableZoom: false,
                  distanceRadiusScale: 5,
                  maxDistanceRadiusScale: 15,
                  zoomSpeed: 2,
                  autoRotateSpeed: 1,
                  enableAutoRotate: true,
                  enableRotate: true,
                  rotateSpeed: 0.5
              }}
        width={520}
        height={520}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl={'//unpkg.com/three-globe/example/img/earth-water.png'}
        arcsData={arcsData}
        arcColor={"color"}
        arcStroke={1}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={() => 2000}
      />
    </div>
  );
}
