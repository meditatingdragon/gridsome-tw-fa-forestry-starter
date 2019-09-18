<template>
  <footer class="block w-full md:flex md:justify-between px-5 pt-10 bg-green-700 mt-10">
      <div class="footer-section md:self-start">
        &copy; Copyright 2019
      </div>
      <div class="footer-section">
        info@website.com
      </div>
      <div class="footer-section social">
        <g-link href="#">
          <font-awesome :icon="['fab', 'github']" size="2x" />
        </g-link>
        <g-link href="#">
          <font-awesome :icon="['fab', 'twitter']" size="2x" />
        </g-link>
        <g-link href="#">
          <font-awesome :icon="['fab', 'linkedin-in']" size="2x" />
        </g-link>
    </div>

  </footer>
</template>

<script>
export default {
  
}
</script>

<style>
.footer-section {
  @apply block text-center text-xs py-2 text-white mx-auto
}

.social a {
  @apply p-1
}
</style>