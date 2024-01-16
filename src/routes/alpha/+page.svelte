<script lang="ts">
	import NewMenu from '$lib/NewMenu.svelte';
import type { PageData } from './$types';

	export let data: PageData;

	function parseData(data: PageData) {
		return Object.keys(data).map((key) => {
			let keyVal = typeof data[key] == 'object' ? parseData(data[key]) : data[key];
			const ofType = typeof Object.values(data[key])?.[0]

			keyVal = ofType === 'string' ? '' : keyVal;

				return `<div class="flex-v  ">
                <div class=" border-r pad-1">
                ${key}  --> ${ofType} 
                 </div>
                <div class="marg-l-4  ">${keyVal}</div>
            </div>`;
			// { [key] : keyVal };
		});
	}
</script>

<!-- {@html parseData(data)}; -->

<NewMenu name="data" data={data} /> 
