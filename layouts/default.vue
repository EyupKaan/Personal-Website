<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '../components/layouts/Navbar.vue';
import Footer from '../components/layouts/Footer.vue';
export default {
    components: { Navbar, Footer }
}
</script>
