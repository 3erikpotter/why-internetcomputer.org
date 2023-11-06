<script>
  import { initOrbiter } from "@junobuild/analytics";
  await initOrbiter({
    satelliteId: "hceyd-iaaaa-aaaal-adbbq-cai",
    orbiterId: "plugc-dqaaa-aaaal-ac2wa-cai",
  });

  const overlay = function() {
    document.documentElement.querySelector('.cloud').classList.add('active');
    document.documentElement.querySelector('.plain').classList.add('blur');
  }

  const removeOverlay = function() {
    document.documentElement.querySelector('.cloud').classList.remove('active');
    document.documentElement.querySelector('.plain').classList.remove('blur');
  }

  export default {
    mounted: function() {
      if (window.location.hash.includes('#crypto-cloud')) {
        overlay();
      }
    },
    methods: {
      activateCloud: function() {
        overlay();
      },
      closeCloud: function() {
        window.location.hash = '';
        removeOverlay();
      }
    }
  }
</script>

<template>
  <div class="environment">

    <div class="plain">
      <p>Healing/ Harmonizing the software space.  
        <br>Increasing consciousness and cleaning up tech.
        <br>Uniting Internet eras (web1 + web2 + web3) and crypto generations (gen1/ PoW + gen2/ PoS).
      </p>
      <br>
      <p class="white">Simple, Unitive, Loving. REAL.</p>
      <h2 class="white">FREEDOM tech - for GOOD.</h2>
      <h1 class="white">Open Internet is direct, without intermediaries, all on-chain. </h1>
      <br><p>Closed/Traditional Cloud (the engine of the Web2) opens up and evolves to <a id="activate-cloud" href="#crypto-cloud" @click="activateCloud">Crypto Cloud</a> (the engine of Web3).
      <br>Full-stack embodiment; integrated; collaborative.</p>
      <br><p>
        Enter the Internet Computer.<br>
        <a href="https://internetcomputer.org">
          <img src="/icp_qr.png">
        </a>
      </p>
    </div>
    <div class="cloud">
      <div class="cloud-content">
        <div class="close" @click="closeCloud"></div>
        <h1>The CRYPTO CLOUD</h1>
        <p>
          Crypto Cloud is Cloud3.0 - the next evolutionary step of cloud.
        </p>
        <p>
          Crypto Cloud is Web3.0 - a full-stack/ e2e/ complete infrastructure for general software. 
        </p>
      </div>
    </div>
  </div>
</template>

<style>

.environment {
  height: 100%;
  width: 100%;
  perspective: 666px;
  overflow: hidden;
}

.plain {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 50%;
  transform: translateY(-50%) translateZ(-5vw); 
  height: 98%;
  justify-content: center;
  text-shadow: 1px 1px rgba(255, 255, 255, 0.5);
} 

.blur {
  filter: blur(5px);
}

.plain img {
  width: 33%;
}

#activate-cloud {
  color: black;
  text-decoration: underline;
  cursor: pointer;
}

:root[device]:not(:root[device=mobile]) .plain img {
  width: 10%;
}

.cloud {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: -5.5%;
  height: 100%;
  width: 111%;
  color: white;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  animation: 44s floating-mobile infinite;
  transition: all 1.5s ease-in-out; 
  z-index: -1;
}

.cloud-content {
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
  color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  text-align: center;
}

.cloud.active .cloud-content {
  opacity: 1;
}

.close {
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.close::before { 
  display: flex;
  content: '\2715'; 
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
}

:root[device]:not(:root[device=mobile]) .cloud {
  left: 0;
  height: 90%;
  width: 90%;
  margin: auto;
  animation: 44s floating infinite;
}

.cloud.active {
  animation: none !important;
  transform: rotate3d(1, 1, 1, 0deg);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  width: 80%;
  height: 90%;
  left: 0;
  margin: auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  z-index: 1;
}

:root[device]:not(:root[device=mobile]) .cloud.active {
  left: 0;
  height: 90%;
  width: 90%;
  margin: auto;
}

@keyframes floating {
  12.5%, 37.5% {
    transform: rotate3d(0.9, 1.1, 1.5, -6deg) scale(0.9);
  }
  62.5% {
    transform: rotate3d(0.8, 0.9, 1.1, -6deg);
  }
  
  25% {
    transform: rotate3d(1, 1, 1, 6deg);
  }
  50% {
    transform: rotate3d(0.7, 0.8, 1.2, 6deg) scale(0.5);
  }
  75% {
    transform: rotate3d(1, 1, 1, 6deg) scale(1.5);
  }

  100% {
    transform: rotate3d(1, 1, 1, 0deg) scale(1.0);
  }
}

@keyframes floating-mobile {
  12.5%, 37.5% {
    transform: rotate3d(1, 1, 1, -6deg) scale(1.5);
  }
  62.5% {
    transform: rotate3d(1, 1, 1, -6deg);
  }
  
  25%, 75% {
    transform: rotate3d(1, 1, 1, 6deg);
  }
  50% {
    transform: rotate3d(1, 1, 1, 6deg) scale(0.25);
  }
  100% {
    transform: rotate3d(1, 1, 1, 0deg) scale(1);
  }
}

.white {
  color: white;
}

.plain * {
  margin: 0;
  text-align: center;
}
  
</style>