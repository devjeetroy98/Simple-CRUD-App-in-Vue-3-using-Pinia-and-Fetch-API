<script setup lang="ts"></script>

<template>
  <div class="container-fluid">
    <div class="brand">
      <p>TaskPlanner</p>
    </div>
    <div class="menus">
      <div class="menu">
        <span>
          <router-link :to="{ name: 'home' }"> Home </router-link>
        </span>
      </div>
      <div class="menu">
        <span>
          <span>
            <router-link :to="{ name: 'tasks' }"> Tasks </router-link>
          </span>
        </span>
      </div>
      <div class="menu">
        <span>
          <span>
            <router-link :to="{ name: 'about' }"> About </router-link>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  display: flex;
  widows: 100%;
  padding: 10px 0px;
  height: 8vh;
}
.container-fluid .brand {
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 0px 150px;
}
.container-fluid .menus {
  min-width: calc(100% - 350px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  padding: 0px 200px;
  font-size: 1.5rem;
}
.container-fluid .menus .menu a {
  text-decoration: none;
  color: #ebebeba3;
}
.container-fluid .menus .menu .active-link {
  color: blueviolet;
}
.container-fluid .menus .menu:hover {
  cursor: pointer;
  color: white;
}

@media only screen and (min-width: 650px) and (max-width: 1080px) {
  .container-fluid .brand {
    font-size: 2rem;
    padding: 0px 50px;
  }
  .container-fluid .menus {
    gap: 2rem;
    padding: 0px 50px;
    font-size: 1.5rem;
  }
}
@media only screen and (min-width: 300px) and (max-width: 649px) {
  .container-fluid .brand {
    min-width: 150px;
    font-size: 1.5rem;
    padding: 0px 30px;
  }
  .container-fluid .menus {
    min-width: calc(100% - 150px);
    gap: 0.5rem;
    padding: 0px 30px;
    font-size: 1rem;
  }
}
</style>
