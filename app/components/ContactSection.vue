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
  <section
    id="contact"
    class="border-surface bg-surface scroll-mt-24 overflow-clip rounded-[20px] border px-5 pt-8.5 pb-9 sm:px-7.75 sm:pt-10.5"
  >
    <SectionHeading
      title="Let's bring your idea to life"
      description="I'm always open to new opportunities, collaborations, and creative conversations. Feel free to reach out to discuss your project."
    />
    <form class="grid gap-2.5" @submit.prevent="sendMessage">
      <div class="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <label class="block"
          ><span class="sr-only">Full Name</span
          ><input
            class="border-line text-ink focus-visible:outline-ink w-full rounded-[10px] border bg-white px-4 py-3.5 text-[13px] focus:border-[#aaa] focus-visible:outline-2 focus-visible:outline-offset-2"
            v-model="name"
            name="name"
            autocomplete="name"
            placeholder="Full Name*"
            required
        /></label>
        <label class="block"
          ><span class="sr-only">Email Address</span
          ><input
            class="border-line text-ink focus-visible:outline-ink w-full rounded-[10px] border bg-white px-4 py-3.5 text-[13px] focus:border-[#aaa] focus-visible:outline-2 focus-visible:outline-offset-2"
            v-model="email"
            name="email"
            type="email"
            autocomplete="email"
            placeholder="Email Address*"
            required
        /></label>
      </div>
      <label class="block"
        ><span class="sr-only">Budget</span
        ><select
          class="border-line text-ink focus-visible:outline-ink w-full rounded-[10px] border bg-white px-4 py-3.5 text-[13px] focus:border-[#aaa] focus-visible:outline-2 focus-visible:outline-offset-2"
          v-model="budget"
          name="budget"
        >
          <option value="" disabled>Budget</option>
          <option>$500 - $1,000</option>
          <option>$1000 - $5000</option>
          <option>$5,000 - $10,000</option>
          <option>$10,000 - $20,000</option>
          <option>$20,000 - $50,000</option>
        </select></label
      >
      <label class="block"
        ><span class="sr-only">Project details</span
        ><textarea
          class="border-line text-ink focus-visible:outline-ink min-h-33.75 w-full resize-y rounded-[10px] border bg-white px-4 py-3.5 text-[13px] focus:border-[#aaa] focus-visible:outline-2 focus-visible:outline-offset-2"
          v-model="message"
          name="message"
          rows="5"
          placeholder="Tell me about your project"
          required
        />
      </label>
      <button
        class="focus-visible:outline-ink inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-[11px] border border-transparent bg-[#101013] px-4.75 text-[13px] font-medium whitespace-nowrap text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#343438] focus-visible:outline-2 focus-visible:outline-offset-2"
        type="submit"
      >
        Send Message <UIcon name="i-lucide-arrow-up-right" />
      </button>
    </form>
  </section>
</template>
