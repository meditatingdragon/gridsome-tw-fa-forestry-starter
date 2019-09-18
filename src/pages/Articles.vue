<template>
  <Layout>
    <div class="container">
      <div class="flex flex-col">
        <div
          class="w-full lg:flex lg:p-5 mt-10"
          v-for="item in $page.posts.edges"
          :key="item.node.id"
        >
          <a :href="item.node.path" class="w-full md:flex ">
            <g-image
              class="h-64 w-full lg:h-56 lg:w-64 flex-none object-cover shadow-md object-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              :src="item.node.preview_image"
              :alt="item.node.title"
              v-if="item.node.preview_image"
            />

            <div
              class="w-full border-r border-b border-l lg:border-l-0 lg:border-t border-none shadow-md bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
            >
              <p class="text-black font-bold text-lg mb-2">{{item.node.title}}</p>
              <p class="text-gray-600 text-sm leading-none mb-2">{{item.node.date}}</p>
              <p class="text-gray-800 text-base mb-2">{{item.node.excerpt}}</p>
              <div class="inline-flex flex-wrap mb-3">
                <span
                  class="text-xs bg-green-200 rounded-full p-2 mr-3 mb-2"
                  v-for="(item, index) in item.node.categories"
                  :key="index"
                >{{ item }}</span>
              </div>
            </div>
          </a>
        </div>
        <div class="flex content-center justify-center">
          <Pager linkClass="px-2 py-1 m-1 rounded-full bg-green-300 text-green-700" :info="$page.posts.pageInfo"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Article ($page: Int) {
	posts: allArticlePost( perPage: 3, page: $page, filter: { published: { eq: true }}) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        preview_image
        title
        author
        published
        date (format: "MMMM D, YYYY")
        excerpt
        categories
        source {
          name
          date
          display_
          url
          notes
        }
      }
    }
  }
}
</page-query>

<script>

import {Pager } from 'gridsome'

export default {
  components: {
    Pager
  }
};
</script>

<style scoped>

.active--exact {
  font-weight: bold;
}
</style>