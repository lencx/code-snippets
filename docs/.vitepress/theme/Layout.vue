<script setup>
import DefaultTheme from 'vitepress/theme'
import { Giscus } from '@giscus/vue'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #page-bottom>
      <Giscus
        repo="lencx/js-wheel"
        repoId="MDEwOlJlcG9zaXRvcnkzODU4MTc0MjM="
        category="Comment"
        categoryId="DIC_kwDOFv8bT84B_ES3"
        mapping="pathname"
        reactionsEnabled="1"
        theme="light"
      />
    </template>
  </Layout>
</template>