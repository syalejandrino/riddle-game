<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/riddle">Riddle</RouterLink>
      <RouterLink to="/riddle-results">Quiz Results</RouterLink>
    </nav>
    <RouterView />
  </header>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
header {
  background-color: #4CAF50;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

nav {
  display: flex;
  justify-content: center;
  gap: 30px;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;
}

nav a:hover {
  color: #e0e0e0;
}
</style>
