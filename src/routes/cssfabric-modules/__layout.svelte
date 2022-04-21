<script context="module" lang="ts">

  export const prerender = true;
</script>
<script lang="ts">

  import {fabricNavigation} from '../../scripts/utils';
  import cssfabric from '../../lib/scripts/cssfabric';
  import HeaderSiteTitle from '../../components/HeaderSiteTitle.svelte';

  export let moduleTag  = '';
  export let modulePage = '';

  const links: string[] = fabricNavigation.getActiveLinks();

  let DynamicComponent;
  let tagProperties: Record<string, any> = {};

  let staticModule: string = moduleTag;
  let staticPage: string   = modulePage;

  $: tagProperties = cssfabric.getModuleMetaData(moduleTag);
  $: staticPage = modulePage;
</script>

<div class={" flex flex-v   h-full content-start overflow-auto"}>
    <div class={"w-full w-sm-main "}>
        <HeaderSiteTitle
                description={"cssFabric is an alpha cssFabric"}
                title="cssfabric"
                title_tag={"just.fabric.it"}
        />

    </div>
    <div class={" dsp-none"}>
        <div class={"dsp-none dsp-sm-block"}>sm</div>
        <div class={"dsp-md-block dsp-none "}>md</div>
        <div class={"dsp-lg-block dsp-none"}>lg</div>
        <div class={"dsp-none dsp-xl-block dsp-none"}>xl</div>
        <div class={"dsp-none dsp-xxl-block dsp-none"}>xxl</div>
        <div class={"dsp-none dsp-xxxl-block dsp-none"}>xxxl</div>
    </div>
    <div class={"flex flex-lg-v flex-h  h-full"}>
        <aside class={"w-lg-full w-8 pad "}>
            <nav class={"pad pad-lg"}>
                <ul class={"menu-lg-h menu-v"}>
                        <li class={"menu-item " }>
                            <a href={'/installation'}>
                                <span>installation</span>
                            </a>
                        </li>
                </ul>
                <ul class={"menu-lg-h menu-v"}>
                    {#each Object.values(links) as key}
                        <!--{    css = (staticModule === key) ? 'active' : '';}-->
                        <li class={"menu-item " } class:active={(staticModule === key)}>
                            <a  rel="external" href={fabricNavigation.getModuleClassNamesPage(key)}>
                                <span>{`${key}`}</span>
                            </a>
                        </li>
                    {/each}
                </ul>
            </nav>
        </aside>
        <section class={"flex-main"}>
            <slot>slot test</slot>
        </section>
    </div>
</div>