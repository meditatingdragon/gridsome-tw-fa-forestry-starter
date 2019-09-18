<template>
  <Layout>
    <div class="container mx-auto w-3/4 py-3">
      <h1 class="font-bold text-5xl">Contact Us</h1>
      <p class="text-base font-normal"
      >Send a message, and we'll reply as soon as possible!</p>

      <form name="contact" class="w-full">
        <div class="flex inline-flex w-full md:w-1/2 md:my-2">
          <input
            class="contact-input placeholder-gray-700"
            type="text"
            name="name"
            placeholder="Name"
            aria-label="Full name"
          />
        </div>
        <div class="flex inline-flex w-full md:w-1/2 md:my-2">
          <input
            class="contact-input placeholder-gray-700"
            type="text"
            name="email"
            placeholder="Email"
            aria-label="Email"
          />
        </div>
        <div class="flex inline-flex w-full md:my-2">
          <textarea
            class="contact-input placeholder-gray-700"
            name="message"
            type="text"
            placeholder="Message"
            aria-label="Message"
          />
        </div>
        <div class="pt-5">
          <button type="submit" class="btn">Send</button>
        </div>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style>

.contact-input {
  @apply flex-grow appearance-none bg-transparent border-b-2 border-gray-900 text-black mr-3 p-2 leading-tight 
}

.contact-input:focus {
  @apply outline-none
}

.btn {
  @apply float-right bg-gray-900 rounded-lg py-2 px-3 text-xs text-white uppercase
}

.btn:hover {
  @apply font-semibold
}

</style>