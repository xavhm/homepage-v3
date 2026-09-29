<template>
  <section id="hero" class="hero panel">
    <div class="availability"><span class="status-dot" />Open for 2 new projects</div>
    <div class="hero-profile">
      <img
        src="/portfolio/profile.avif"
        width="86"
        height="86"
        alt="Calib Harrison"
        fetchpriority="high"
      />
      <div>
        <h2>Calib Harrison</h2>
        <p>UI/UX Designer</p>
      </div>
    </div>
    <h1>I design premium, high-converting digital experiences that drive growth.</h1>
    <p class="hero-description">
      Helping brands grow through thoughtful design and user experiences that drive engagement,
      build trust, and deliver results.
    </p>
    <div class="button-row">
      <a
        class="button button-dark"
        href="https://cal.com/"
        target="_blank"
        rel="noopener noreferrer"
        >Book a Free Call</a
      >
      <NuxtLink class="button button-light" to="/projects">See my Projects</NuxtLink>
    </div>
    <div class="trusted">
      <p>Trusted by 30+ Brands including</p>
      <div class="logo-strip" aria-label="Trusted brand logos">
        <img
          v-for="number in 5"
          :key="number"
          :src="`/portfolio/logo-${number}.svg`"
          alt="Logoipsum"
          height="20"
        />
      </div>
    </div>
  </section>
</template>
