<script setup>
import DefaultTheme from 'vitepress/theme'
import { Giscus } from '@giscus/vue'

import ScrollProgress from '../components/ScrollProgress.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <ScrollProgress />
  <Layout>
    <template #page-bottom>
      <Giscus
        repo="lencx/code-snippets"
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