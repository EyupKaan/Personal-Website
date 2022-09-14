<template>
  <div class="font-body">
    <Me/>
    <RelatedTechs />
  </div>
</template>

<script>
import Me from '@/components/home/me.vue';
import RelatedTechs from '../components/home/related-techs.vue';
export default {
    layout: 'default',
    components: { Me, RelatedTechs }
}
</script>
