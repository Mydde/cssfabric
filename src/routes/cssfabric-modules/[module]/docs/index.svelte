
<script context="module" lang="ts">
  export const prerender = true;
  /** @type {import('./[module]/docs').Load} */
  export async function load({params, fetch, session, stuff}) {

    return {
      status: 200,
      props : {
        moduleTag : params.module,
        modulePage: params.page
      }
    };
  }
</script>
<script>
    import Docs from "../../../../components/docs/Docs.svelte";

    export let moduleTag  = '';
    export let modulePage = 'docs';
</script>
<code>
    code
    code vrvdvd vfdvfdvfd
</code>
<Docs module={moduleTag}  />
