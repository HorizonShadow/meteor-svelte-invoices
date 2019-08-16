<script>
  import { Router, Route } from 'svelte-routing'
  import Home from './Home.svelte'
  import Index from './Index.svelte';
  import Nav from './Nav.svelte';
</script>

<Router url="">
  <Nav />
  <Route path="/" component={Index} />
  <Route path="/home" component={Home} />
</Router>
