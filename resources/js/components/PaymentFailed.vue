<template>
  <div>
    <h1>Payment Failed!</h1>
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },
};
</script>
