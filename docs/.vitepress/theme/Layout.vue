<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme

const tag = document.createElement('script')
tag.setAttribute('src', 'https://giscus.app/client.js')
tag.setAttribute('data-repo', 'lencx/js-wheel')
tag.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkzODU4MTc0MjM=')
tag.setAttribute('data-category', 'Comment')
tag.setAttribute('data-mapping', 'DIC_kwDOFv8bT84B_ES3')
tag.setAttribute('data-reactions-enabled', '1')
tag.setAttribute('data-emit-metadata', '1')
tag.setAttribute('data-theme', 'light')
tag.setAttribute('crossorigin', 'anonymous')
tag.setAttribute('async', 'true')

document.head.appendChild(tag)

</script>

<template>
  <Layout>
    <template #page-bottom>
      <div class="giscus"></div>
    </template>
  </Layout>
</template>