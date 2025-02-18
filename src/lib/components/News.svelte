<script>
	import Draggable from './Draggable.svelte';
	let menuOpen = true;
	let menuRef;

	function toggleMenu() {
		menuOpen = !menuOpen;
		console.log(menuOpen ? 'open' : 'close');
	}
</script>

<Draggable>
    <div class="bg-[#c5e618] px-4 py-2 text-darkGray rounded-sm" bind:this={menuRef}>
        <div class="flex flex-row justify-between items-start">
            {#if menuOpen}
                <p class="mb-0 text-xs">A note</p>
            {/if}
            <button on:click|stopPropagation={toggleMenu} class="text-xs p-0 mb-0 hover:link-hover">
                {menuOpen ? '✕' : 'A note'}
            </button>
        </div>
        {#if menuOpen}
        <div class="md:w-[300px] w-[250px] pt-4">
            <p class="text-xs leading-3">
                [Currently building] <br>
                This website...We'll be up soon!
            </p>
            <p class="text-xs leaading-3">
                [Recently read] <br>
                Mild Vertigo by Mieko Kanai. A dizzying stream of consciousness. Made me think of my mom. 
            </p>
        </div>
        {/if}
    </div>
</Draggable>
