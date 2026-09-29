<script setup lang="ts">
const testimonials = [
  {
    name: 'Wilium jonson',
    handle: '@jonsonwil',
    avatar: '/portfolio/avatar-1.avif',
    quote:
      'Working with Calib was a fantastic experience. His ability to transform complex ideas into intuitive user experiences helped us launch faster and with greater confidence.',
  },
  {
    name: 'Michael Carter',
    handle: '@michaelcart',
    avatar: '/portfolio/avatar-2.avif',
    quote:
      'From strategy to execution, every detail was carefully considered. The final product exceeded our expectations and significantly improved our user engagement.',
  },
  {
    name: 'Sarah Bennett',
    handle: '@bennettsrh',
    avatar: '/portfolio/avatar-3.avif',
    quote:
      'Calib brought clarity and structure to our product. His design process was thoughtful, collaborative, and focused on delivering measurable business results.',
  },
  {
    name: 'Emma Rodriguez',
    handle: '@rodriguez',
    avatar: '/portfolio/avatar-4.avif',
    quote:
      'A highly skilled designer who understands both user needs and business goals. The designs were clean, scalable, and had a real impact on our growth.',
  },
]
</script>

<template>
  <section id="testimonials" class="panel section-panel testimonials-section">
    <SectionHeading
      title="What Clients Are Saying"
      description="Insights from clients who trusted me to bring their ideas to life through design."
    />
    <div class="testimonial-grid">
      <article v-for="person in testimonials" :key="person.name" class="testimonial-card">
        <div class="testimonial-person">
          <img :src="person.avatar" :alt="person.name" width="44" height="44" loading="lazy" />
          <div>
            <strong>{{ person.name }}</strong
            ><span>{{ person.handle }}</span>
          </div>
          <UIcon name="i-simple-icons-x" />
        </div>
        <p>{{ person.quote }}</p>
      </article>
    </div>
  </section>
</template>
