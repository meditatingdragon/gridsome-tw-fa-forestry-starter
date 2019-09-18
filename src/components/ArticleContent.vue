<template>
    <div 
        class="article-content"
        v-html="content"
    />
</template>

<script>
export default {
    props: {
        content: String
    }
}
</script>

<style scoped>

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  margin-bottom: 0.5em;
}

blockquote {
    margin-left: 0.3rem;
    border-left: 5px solid #777;
    margin-right: 1rem; 
}
blockquote > p {
    margin-left: 1rem;
}
.article-content a {
    text-decoration: underline;
    font-weight: 500;
}
strong {
    font-weight: 700;
}

.article-content p {
    line-height: 1.5;
    font-weight: 300;
    font-size: 1.15rem;
    margin-bottom: 1.25rem;
}
h2 {
    font-size: 2rem;
}
h3 {
    font-size: 1.5rem;
}
h4, h5, h6 {
    font-size: 1.15rem;
}
</style>
