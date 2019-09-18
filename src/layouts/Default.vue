<template>
<div class="block">
    <div class="container block mx-auto pt-2">
      <Header/>
      <div class="p-5">
        <slot/>
      </div>
    </div>
    <Footer/>
</div>
</template>

<<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  components: {
    Header,
    Footer
  }  
}
</script>

<style src="../main.css" />