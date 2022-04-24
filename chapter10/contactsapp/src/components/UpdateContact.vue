<template>
  <contact-form mode="update" :contact="contact" />
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
  name: "UpdateContact",
  components: {
    ContactForm
  },
  props: [
      'contact'
  ]
}
</script>

<style scoped>

</style>