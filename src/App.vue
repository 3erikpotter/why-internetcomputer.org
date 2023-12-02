<script>
  import { initOrbiter } from "@junobuild/analytics";
  import { inject } from 'vue'

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

  var selectedIndex = 0;
  var zPerspective;
  var cloudContentWidth;
  const rotateCarousel = function() {
    var angle = selectedIndex / 3 * -360;
    document.querySelector('.carousel').style = 'transform: translateZ(' + (-zPerspective) + 'px) rotateY(' + angle + 'deg)';
    updateOpacity();
  }
  function updateOpacity() {
    if(selectedIndex < 0) {
      var adjustedIdx = 3 + selectedIndex % 3;
    } else {
      var adjustedIdx = selectedIndex % 3;
    }
    var cells = document.querySelectorAll('.carousel__cell');
    cells.forEach(cell => cell.style.opacity = 0.25);
    cells[adjustedIdx % 3].style.opacity = 1;
  }


  export default {
    setup() {
      const isMobile = inject('isMobile');
      var width = window.innerWidth;
      if(isMobile) {
        var cloudWidth = width * 0.88;
        cloudContentWidth = cloudWidth * 0.99; //border
      } else {
        var cloudWidth = width * 0.9;
        cloudContentWidth = cloudWidth * 0.6; //padding
      }
    },
    mounted: function() {
      zPerspective = cloudContentWidth * 0.29;
      document.documentElement.style.setProperty('--cloudContentWidth', cloudContentWidth + 'px');
      document.documentElement.style.setProperty('--zPerspective', zPerspective + 'px');
      document.documentElement.style.setProperty('--zPerspectiveNeg', -zPerspective + 'px');
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
      },
      rotateCarousel: function () {
        this.rotateCarousel();
      },
      toLeft: function() {
        selectedIndex--;
        rotateCarousel();
      },
      toRight: function() {
        selectedIndex++;
        rotateCarousel();
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
      <h1 class="white">Open Internet is all on-chain, full-stack, without intermediaries. </h1>
      <br><p>Closed/Traditional Cloud (the engine of the Web2) opens up and evolves to <a id="activate-cloud" href="#crypto-cloud" @click="activateCloud">Crypto Cloud</a>.
      <br>Full-stack crypto ethos embodiment with cloud empowerment.</p>
      <br><p>
        Enter the Internet Computer.<br>
        <a href="https://internetcomputer.org">
          <img src="/icp_org_qr.png">
        </a>
      </p>
    </div>
    <div class="cloud">
      <div class="cloud-content">
        <p style="text-align: center;">
          <b>Unifying and Harmonizing the Internet</b>
        </p>
        <div class="close" @click="closeCloud"></div>
        <div class="scene">
          <div class="nav-button prev" @click="toLeft"></div>
          <div class="nav-button next" @click="toRight"></div>
          <div class="carousel">
            <div class="carousel__cell carousel__cryptocloud">
              <b>Crypto+Cloud</b>
              <p>
                A "smart cloud", a decentralized extension of the web3 "smart contract" ecosystem;
                <br>is "Cloud3.0", that is, an evolutionary next step of cloud;
                <br>brings "Web3.0", all on-chain which completes crypto.
              </p>
              <p style=" ">
                <img style="max-height: 25vh; aspect-ratio: 1310/ 846; opacity: 0.75;" src="/icp_crypto_cloud.png">
              </p>
              <p>
                ICP is another paradigm shift and further grounding of the crypto principles first implemented by gen1 Bitcoin and extended by gen2 Ethereum. 
                It doesn't compete with previous generations but completes them. It allows to build e2e dApps directly integrated with Bitcoin, Eth and others, without using centralized cloud or other intermediaries. Mass adoption while preserving decentralization.
              </p>
              <p>
                All on-chain is possible without maximalism, but with collaboration. Any crypto network would stay true to the ethos by hosting on the crypto cloud instead of centralized cloud. Bring your favourite settlement network and host your dApp on the ICP crypto cloud. Together, we are Web3.0.
              </p>
            </div>
            <div class="carousel__cell carousel__web2">
              <b>Web2 - cloud (empowerment, the good and the bad)</b>
              <br><i>and why transform the cloud bottom up?</i>
            </div>
            <div class="carousel__cell carousel__web3">
              <b>Web3 - crypto (ethos and current state)</b>
              <br><i>and why the crypto cloud?</i>
              <p>Simple put, in order to become all on-chain and achieve direct integration between web2 and web3. </p>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.nav-button {
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid white;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 1;
}

:root[device]:not(:root[device=mobile]) .nav-button{
  width: 2.5rem;
  height: 2.5rem;
}

.nav-button.prev {
  left: 0%;
  transform: scaleX(-1) translate(50%, -50%);
}

.nav-button:before {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0, 0,0.4);
  border-radius: inherit;
  content: "";
}

.nav-button:after {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('/right.png');
  color: transparent; 
  background-size: cover;
  content: "";
}

.scene {
  width: var(--cloudContentWidth);
  height: 80%;
  perspective: 1000px;
}

.carousel {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s; 
  transform: translateZ(var(--zPerspectiveNeg));
}

.carousel__cell {
  overflow: scroll;
  position: absolute;
  opacity: 0.25;
  width: calc(var(--cloudContentWidth) - 20px);
  height: 100%;
  padding: 10px;
  border: 1px solid white;
}

.carousel__cryptocloud  { opacity: 1; transform: rotateY(  0deg) translateZ(var(--zPerspective)); }
.carousel__web2         { transform: rotateY(120deg) translateZ(var(--zPerspective)); }
.carousel__web3         { transform: rotateY(240deg) translateZ(var(--zPerspective)); }

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
  opacity: 0;
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  text-align: center;
  align-items: center;
  overflow: scroll;
}

:root[device]:not(:root[device=mobile]) .cloud-content {
  padding-left: 20%;
  padding-right: 20%;
  font-size: 1.5rem;
}

.cloud.active .cloud-content {
  opacity: 1;
}

.close {
  position: absolute;
  right: 0;
  top: 0;
  margin: 0.5rem;
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
  width: 90%;
  margin: auto;
  animation: 44s floating infinite;
}

.cloud.active {
  animation: none !important;
  transform: rotate3d(1, 1, 1, 0deg);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  width: calc(100% - 1rem) !important;
  height: calc(100% - 1rem);
  margin: 0.5rem !important;
  display: flex;
  align-items: center;
  z-index: 1;
  left: 0;
}

:root[device]:not(:root[device=mobile]) .cloud.active {
  width: calc(100% - 2rem) !important;
  height: calc(100% - 2rem);
  margin: 1rem !important;
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