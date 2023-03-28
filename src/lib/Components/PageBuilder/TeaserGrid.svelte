<script lang="ts">
    import classNames from 'classnames'
    import Image from '$lib/Components/PageBuilder/Image.svelte'

    export let block
    $: ({title, teasers, maxItems, layout, itemSelector, columns} = block)
</script>

{#if title}
    <h2>{title}</h2>
{/if}

<!-- 
max: {maxItems}<br>
cols: {columns}<br>
layout: {layout}<br>
itemSelector: {itemSelector}<br> 
-->

<ul class={classNames('grid-cols-' + columns, 'grid')}>
    {#each teasers as teaser, i}
        {#if i < maxItems}
            <li>
                <a href={teaser.href} class="block space-y-4 group">
                    {#if teaser.mainImage}
                        <Image block={teaser.mainImage} additionalClass="group-hover:scale-105 duration-300 transition-all"/>
                    {/if}
                    <div>
                        <h4 class="mb-2">{teaser.subtitle}</h4>
                        <h3>{teaser.title}</h3>
                    </div>
            </li>
        {/if}
    {/each}
</ul>

<!-- Safelist: grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 -->