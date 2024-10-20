<script setup lang="ts"></script>

<template>
  <div class="container-fluid">
    <div class="banner-section">
      <h1>Track your way to success!</h1>
      <h2>
        This is a one stop solution for all your task management related works!
      </h2>
    </div>
    <div class="button-section">
      <button>Get Started</button>
      <button>Create a new task</button>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container-fluid .banner-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container-fluid .banner-section h1 {
  font-size: 4rem;
  color: blueviolet;
}
.container-fluid .button-section {
  margin-top: 20px;
  display: flex;
  gap: 1rem;
}
.container-fluid .button-section button:first-child {
  height: 2.5rem;
  width: 7rem;
  background-color: blueviolet;
  border: 1px solid blueviolet;
  color: white;
  border-radius: 5px;
}
.container-fluid .button-section button:last-child {
  height: 2.5rem;
  width: 10rem;
  background-color: white;
  border: 1px solid white;
  color: blueviolet;
  border-radius: 5px;
}
.container-fluid .button-section button:hover {
  filter: brightness(120%);
  cursor: pointer;
}

@media only screen and (min-width: 300px) and (max-width: 650px) {
  .container-fluid {
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .container-fluid .banner-section {
    align-items: flex-start;
    width: 100%;
  }
  .container-fluid .banner-section h1 {
    font-size: 3rem;
    color: blueviolet;
    line-height: 1;
  }
  .container-fluid .banner-section h2 {
    font-size: 1rem;
    padding-top: 10px;
  }
  .container-fluid .button-section {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
  }
}

@media only screen and (min-width: 651px) and (max-width: 992px) {
  .container-fluid {
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 40px;
  }
  .container-fluid .banner-section {
    align-items: flex-start;
    width: 100%;
  }
  .container-fluid .banner-section h1 {
    font-size: 4rem;
    color: blueviolet;
    line-height: 1;
  }
  .container-fluid .banner-section h2 {
    font-size: 1.5rem;
    padding-top: 10px;
  }
  .container-fluid .button-section {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
  }
}
</style>
