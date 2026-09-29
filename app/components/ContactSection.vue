<script setup lang="ts">
const name = ref('')
const email = ref('')
const budget = ref('')
const message = ref('')

function sendMessage() {
  const subject = encodeURIComponent(`Project inquiry from ${name.value}`)
  const body = encodeURIComponent(
    `Name: ${name.value}\nEmail: ${email.value}\nBudget: ${budget.value || 'Not specified'}\n\n${message.value}`,
  )
  window.location.href = `mailto:contact@calib.com?subject=${subject}&body=${body}`
}
</script>

<template>
  <section id="contact" class="panel section-panel contact-section">
    <SectionHeading
      title="Let's bring your idea to life"
      description="I'm always open to new opportunities, collaborations, and creative conversations. Feel free to reach out to discuss your project."
    />
    <form class="contact-form" @submit.prevent="sendMessage">
      <div class="form-row">
        <label
          ><span class="sr-only">Full Name</span
          ><input v-model="name" name="name" autocomplete="name" placeholder="Full Name*" required
        /></label>
        <label
          ><span class="sr-only">Email Address</span
          ><input
            v-model="email"
            name="email"
            type="email"
            autocomplete="email"
            placeholder="Email Address*"
            required
        /></label>
      </div>
      <label
        ><span class="sr-only">Budget</span
        ><select v-model="budget" name="budget">
          <option value="" disabled>Budget</option>
          <option>$500 - $1,000</option>
          <option>$1000 - $5000</option>
          <option>$5,000 - $10,000</option>
          <option>$10,000 - $20,000</option>
          <option>$20,000 - $50,000</option>
        </select></label
      >
      <label
        ><span class="sr-only">Project details</span
        ><textarea
          v-model="message"
          name="message"
          rows="5"
          placeholder="Tell me about your project*"
          required
        />
      </label>
      <button class="button button-dark" type="submit">
        Send Message <UIcon name="i-lucide-arrow-up-right" />
      </button>
    </form>
  </section>
</template>
