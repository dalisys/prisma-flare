<template>
  <div>
    <div v-for="user in getUsersInfo" :key="user.id">
      <h1>{{ user.name }}</h1>
      <p>Email: {{ user.email }}</p>
      <h2 style="color: blue;">Posts</h2>
      <ul>
        <li v-for="post in user.posts" :key="post.id">
          <p><span>{{ post.title }}</span>: {{ post.content }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

const users = await useFetch("/api/info")

const getUsersInfo = computed(() => users.data.value)

</script>