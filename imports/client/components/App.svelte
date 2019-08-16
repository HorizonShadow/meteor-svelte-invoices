<script>
  import { Router, Route } from 'svero'
  import Home from './Home.svelte'
</script>

<nav>
  <a href="/">Home</a>
</nav>

<Router>
  <Route path="/" component={Home} />
</Router>