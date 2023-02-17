<script lang="ts">
    import { PortableText } from "@portabletext/svelte";
    import Link from "./PT/Link.svelte";
    import Lists from "./PT/Lists.svelte";
    import Highlight from "./PT/Highlight.svelte";
    import Sup from "./PT/Sup.svelte";
    import Sub from "./PT/Sub.svelte";

    const components: any = {
        marks: {
            highlight: Highlight,
            sup: Sup,
            sub: Sub,
            link: Link
        },
        list: {
            bullet: Lists,
            number: Lists
        },
    };

    export let content;
</script>

<PortableText value={content} components={components} />