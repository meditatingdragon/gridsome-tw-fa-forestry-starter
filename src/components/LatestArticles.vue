<template>
<div class="container mx-auto w-3/4 py-3">
  <div class="bg-white mb-3 pb-4" v-for="item in articles" :key="item.node.id">
    <g-link :to="item.node.path" class="article-link">
      <g-image
          :src="item.node.preview_image"
          :alt="item.node.title"
          class="rounded-t-lg object-cover object-center h-64"
          v-if="item.node.preview_image"
      />
      <p class="text-xl font-bold pt-3">{{ item.node.title }}</p>
      <p class="text-sm font-light py-2">{{ item.node.date}}</p>
      <p class="text-md font-normal py-3 mb-3 break-words text-gray-700">{{item.node.excerpt}}</p>
      <div class="">
          <span class="text-xs text-gray-700 bg-gray-200 font-semibold rounded-full p-2 my-2 mx-1" v-for="(item, index) in item.node.categories" :key="index">{{ item }}</span>
      </div>
    </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>