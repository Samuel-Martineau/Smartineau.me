<script context="module">
  import description from '../../config/description.md';
  import reposToDisplay from '../../config/repos.json';
  import RepoCard from '../components/RepoCard.svelte';
  import { fetchJSON } from '../utils';

  export async function preload() {
    // Les API de github sont chargées à partir d'un proxy qui a une cache de 1h pour contourner la limite de 60 requêtes / h
    const [emojis, colors, ...repos] = await Promise.all([
      fetchJSON(`http://localhost:${process.env.PORT}/github-proxy/emojis`),
      fetchJSON(`http://localhost:${process.env.PORT}/github-proxy/colors`),
      ...reposToDisplay.map((r) =>
        fetchJSON(`http://localhost:${process.env.PORT}/github-proxy/repos/${r}`)
      ),
    ]);
    return { emojis, colors, repos };
  }
</script>

<script>
  export let repos;
  export let emojis;
  export let colors;
</script>

<style lang="scss">
  @import 'src/styles/variables.scss';

  #description {
    .text {
      text-align: justify;
      :global(p) {
        margin: 0;
      }
      @media only screen and (max-width: $phone-max-width) {
        text-align: initial;
      }
    }
    hr {
      border: dashed $blue 2px;
      height: 0;
      margin: 15px 0;
    }
    span {
      font-family: 'Cutive', serif;
      line-height: 0;
    }
  }
  #repos {
    margin-top: 10px;
    .repo-card {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 30px;
      }
    }
  }
</style>

<svelte:head>
  <title>Smartineau.me</title>
</svelte:head>

<div id="description" class="box">
  <div class="text">
    {@html description.html}
  </div>
  <hr />
  <span>Ci-dessous se trouvent mes principaux projets</span>
</div>
<div id="repos">
  {#each repos as repo}
    <div class="repo-card">
      <RepoCard {repo} {colors} {emojis} />
    </div>
  {/each}
  <div class="box">
    <a href="https://github.com/Samuel-Martineau/repositories">Voir tous mes projets</a>
  </div>
</div>
