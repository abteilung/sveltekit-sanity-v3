<script lang="ts">
    import {urlForImage} from '$lib/config/sanity'
    
    export let block

    export let src: string = block.asset
    export let width: number = 940
    export let height: number = 480
    export let alt: string = block.alt
    export let lqip: string = block.lqip
    export let bgColor: string = block.bgColor
    export let customRatio: number = block.customRatio
    export let additionalClass: string = ''
</script>

<div class="w-full overflow-hidden" style="background-size: cover; background-image: url({lqip}); background-color: {bgColor};">
    <img 
        src={urlForImage(src, width, customRatio ? Math.round(width / customRatio) : height)} 
        width={width}px 
        height={customRatio ? Math.round(width / customRatio) : height}px
        class={additionalClass}
        {alt} 
    />
</div>