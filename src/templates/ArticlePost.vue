<template>
  <Layout>
    <div class="sm:w-full md:w-3/4 m-auto ">
      <div class="bg-white shadow-md p-10 rounded">
        <div class="text-4xl font-bold">
          <h1 v-html="$page.post.title" class="Article-title" />
        </div>
        <div class="flex flex-wrap w-full">
          <div class="flex-block">
            <span class="font-semibold">Author:</span>
            <span class="font-light ml-2 mr-5" v-text="$page.post.author" />
          </div>
          <div class="flex-block">
            <span class="font-semibold">Date:</span>
            <span class="font-light ml-2 mr-5" v-text="$page.post.date" />
          </div>
          <div class="flex-block">
            <span class="font-semibold">Time:</span>
            <span class="font-light ml-2 mr-5">{{ $page.post.timeToRead }} min read</span>
          </div>
        </div>
        <div class="pt-5">
          <ArticleContent :content="$page.post.content" />
        </div>
        <div class="pt-5">
          <strong>Source:</strong><br/>
          <div v-for="s in $page.post.source" :key="s.name">
            <p v-if="s.display_">{{s.name}}, {{s.date}}. <a class="hover:underline hover:font-bold" :href="s.url">{{s.url}}</a>. {{s.notes}}</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>


query ArticlePost ($path: String!) {
  post: articlePost (path: $path) {
    preview_image
    path
    title
    author
    date (format: "MMMM D, YYYY")
    timeToRead
    content
    excerpt
    published
    source {
      name
      date (format: "D MMMM YYYY")
      display_
      url
      notes
    }
  }
}
</page-query>

<script>
import ArticleContent from "@/components/ArticleContent";

export default {
  components: {
    ArticleContent
  }
};
</script>

<style scoped>
</style>
