<template>
  <main class="ddd-layout">
    <Suspense>
      <header>header</header>
      <Nuxt />
      <template></template>
      <footer>footer</footer>
    </Suspense>
  </main>
</template>

<script setup>
useHead({
  title: "DDD",
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { charset: "utf-8" },
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=0.3, maximum-scale=5.0, minimum-scale=0.1, user-scalable=yes",
    },
    { hid: "description", name: "description", content: "" },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>
