<script>
	export let left = 50;
	export let bottom = 50;
	
	let moving = false;
	
	function onMouseDown() {
		moving = true;
	}
	
	function onMouseMove(e) {
		if (moving) {
			left += e.movementX;
			bottom -= e.movementY;

			// Get the viewport dimensions
			const viewportWidth = window.innerWidth;
			const viewportHeight = window.innerHeight;

			// Get the element dimensions
			const element = document.querySelector('.draggable');
			const elementWidth = element.offsetWidth;
			const elementHeight = element.offsetHeight;

			// Constrain within the viewport
			if (left < 0) left = 0;
			if (bottom < 0) top = 0;
			if (left + elementWidth > viewportWidth) left = viewportWidth - elementWidth;
			if (bottom + elementHeight > viewportHeight) bottom = viewportHeight - elementHeight;
		}
	}
	
	function onMouseUp() {
		moving = false;
	}
</script>

<style>
	.draggable {
		user-select: none;
		cursor: move;
		position: fixed;
	}
</style>

<section on:mousedown={onMouseDown} style="left: {left}px; bottom: {bottom}px;" class="draggable z-[500]">
	<slot></slot>
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
