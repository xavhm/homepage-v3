<script setup lang="ts">
useSchemaOrg([
  defineWebPage({
    '@type': 'ProfilePage',
    mainEntity: { '@id': '#identity' },
  }),
])
</script>

<template>
  <div class="grid grid-cols-1 gap-2.5">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <ServicesSection />
    <FaqSection />
    <ContactSection />
  </div>
</template>
