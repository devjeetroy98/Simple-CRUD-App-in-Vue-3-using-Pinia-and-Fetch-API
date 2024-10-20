<script setup lang="ts">
import { onMounted, reactive } from 'vue'

let founders = reactive<any[]>([])

onMounted(() => {
  fetch('https://reqres.in/api/users/')
    .then(response => {
      return response.json()
    })
    .then((res: any) => {
      Object.assign(founders, res.data)
      console.log(res.data, founders)
    })
    .catch(err => {
      console.error(err)
    })
})
</script>

<template>
  <div class="container-fluid">
    <div class="cards-container">
      <div class="card" v-for="person in founders" :id="person.id.toString()">
        <div class="profile-pic">
          <img :src="person.avatar" alt="person.first_name" />
        </div>
        <div class="profile-details">
          <h2>{{ person.first_name }} {{ person.last_name }}</h2>
          <h3>{{ person.email }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cards-container {
  width: 50%;
}
.cards-container .card {
  display: flex;
  gap: 1rem;
}
.cards-container .card:hover {
  cursor: pointer;
  filter: brightness(120%);
}
.cards-container .card:nth-child(even) {
  background-color: blueviolet;
}
.cards-container .card .profile-pic {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cards-container .card img {
  border-radius: 50%;
}
.cards-container .card .profile-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cards-container .card:hover .profile-details {
  color: white;
}
</style>
