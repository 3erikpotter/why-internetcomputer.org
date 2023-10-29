<script>
  import { initOrbiter } from "@junobuild/analytics";
  await initOrbiter({
    satelliteId: "hceyd-iaaaa-aaaal-adbbq-cai",
    orbiterId: "plugc-dqaaa-aaaal-ac2wa-cai",
  });
</script>

<template>
  <div class="environment">

    <div class="plain">
      <p>Healing/ Harmonizing the software space.  
        <br>Increasing consciousness and cleaning up tech.
        <br>Uniting Internet eras (web1 + web2 + web3) and crypto generations (gen1/ PoW + gen2/ PoS).
      </p>
      <br>
      <p style="color: white">Simple, Unitive, Loving. REAL.</p>
      <h2>FREEDOM tech; for GOOD</h2>
      <h1>Open Internet for all, directly, without intermediaries, all on-chain. </h1>
      <br><p>Privatized/Traditional Cloud (the engine of the Web) opens up/ evolves to Crypto Cloud (the engine of the Open Internet).
      <br>Full-stack embodiment; self-integrated; collaborative/ open.</p>
      <br><p>Enter the <a href="https://internetcomputer.org">Internet Computer.</a></p>
    </div>
    <div class="cloud"></div>
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
} 

.cloud {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: -5.5%;
  height: 100%;
  width: 111%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  animation: 44s floating infinite;
  z-index: -1;
}

:root[device]:not(:root[device=mobile]) .cloud {
  left: 0;
  width: 95%;
  height: 95%;
  margin: auto;
}

@keyframes floating {
  25%, 50%, 75% {
    transform: rotate3d(1, 1, 1, 6deg);
  }

  12.5%, 37.5%, 62.5% {
    transform: rotate3d(1, 1, 1, -6deg);
  }
  
}

.plain h1, .plain h2 {
  color: white;
}

.plain * {
  margin: 0;
  text-align: center;
}
  
</style>