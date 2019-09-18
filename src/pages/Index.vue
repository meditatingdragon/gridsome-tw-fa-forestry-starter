<template>
  <Layout>
    <LatestArticles :articles="$page.articles.edges"/>
  </Layout>
</template>

<page-query>
query Posts {
  articles: allArticlePost (perPage: 1, filter: { published: { eq: true }}) {
    edges {
      node {
        id
        path
        date (format: "MMMM D, YYYY")
        title
        published
        categories
        preview_image (quality: 90)
        excerpt
      }
    }
  }
}
</page-query>

<script>
import LatestArticles from '../components/LatestArticles'

export default {
  components: {
    LatestArticles
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
