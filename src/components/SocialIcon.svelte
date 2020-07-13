<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';

  export let icon;
  export let link;
  export let color;
</script>

<style lang="scss">
  :global(.svg-grow-on-hover) {
    transition: transform 100ms ease-in-out;
    height: 30px;
    width: 30px;
    svg {
      height: 30px;
      width: 30px;
    }
    &:hover {
      transform: scale(110%);
    }
  }
</style>

<a href={link}>
  <Icon data={icon} class="svg-grow-on-hover" style="color: {color}" />
</a>
