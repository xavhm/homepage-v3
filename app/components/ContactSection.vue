<script setup lang="ts">
const name = ref('')
const email = ref('')
const message = ref('')

function sendMessage() {
  const subject = encodeURIComponent(`Project inquiry from ${name.value}`)
  const body = encodeURIComponent(`Name: ${name.value}\nEmail: ${email.value}\n\n${message.value}`)
  window.location.href = `mailto:contact@calib.com?subject=${subject}&body=${body}`
}
</script>

<template>
  <section
    id="contact"
    class="border-surface bg-surface scroll-mt-22.75 overflow-clip rounded-[20px] border px-5 pt-8.5 pb-9 sm:px-7.75 sm:pt-10.5"
  >
    <SectionHeading
      title="Let's bring your idea to life"
      description="I'm always open to new opportunities. Feel free to reach out to discuss your project."
    />
    <form class="grid gap-2.5" @submit.prevent="sendMessage">
      <div class="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <div class="grid gap-1.5">
          <label for="contact-name" class="text-ink text-[13px] font-medium"
            >Full name (required)</label
          >
          <input
            id="contact-name"
            class="text-ink focus-visible:outline-ink w-full rounded-[10px] border border-[#85858a] bg-white px-4 py-3.5 text-[13px] focus-visible:outline-2 focus-visible:outline-offset-2"
            v-model="name"
            name="name"
            autocomplete="name"
            required
          />
        </div>
        <div class="grid gap-1.5">
          <label for="contact-email" class="text-ink text-[13px] font-medium"
            >Email address (required)</label
          >
          <input
            id="contact-email"
            class="text-ink focus-visible:outline-ink w-full rounded-[10px] border border-[#85858a] bg-white px-4 py-3.5 text-[13px] focus-visible:outline-2 focus-visible:outline-offset-2"
            v-model="email"
            name="email"
            type="email"
            autocomplete="email"
            required
          />
        </div>
      </div>
      <div class="grid gap-1.5">
        <label for="contact-message" class="text-ink text-[13px] font-medium"
          >Project details (required)</label
        >
        <textarea
          id="contact-message"
          class="text-ink focus-visible:outline-ink min-h-33.75 w-full resize-y rounded-[10px] border border-[#85858a] bg-white px-4 py-3.5 text-[13px] focus-visible:outline-2 focus-visible:outline-offset-2"
          v-model="message"
          name="message"
          rows="5"
          required
        />
      </div>
      <button
        class="focus-visible:outline-ink inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-[11px] border border-transparent bg-[#101013] px-4.75 text-[13px] font-medium whitespace-nowrap text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#343438] focus-visible:outline-2 focus-visible:outline-offset-2"
        type="submit"
      >
        Send Message <UIcon name="i-lucide-arrow-up-right" />
      </button>
    </form>
  </section>
</template>
