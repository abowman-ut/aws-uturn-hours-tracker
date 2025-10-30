<script>
    import favicon from '$lib/assets/favicon.svg';
    import { fly, fade, slide } from 'svelte/transition';
    import { hoursStore, setUsed } from '$lib/hoursStore.js';

    let { children } = $props();
    let showMenu = $state(false);
    let activeKey = $state(null); // 'architecture' | 'delivery' | 'worldport'

    let hours = $derived($hoursStore);

    function openEditor(key) {
        activeKey = activeKey === key ? null : key;
        showMenu = true;
    }

    function saveEdit() {}

    function toggleMenu() {
        showMenu = !showMenu;
    }
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</svelte:head>

<button
    class="btn btn-primary position-fixed top-0 start-0 m-3 z-3"
    aria-label="Toggle menu"
    onclick={toggleMenu}
>
    <i class="bi bi-list"></i>
    <span class="ms-2 d-none d-sm-inline">Menu</span>
    <span class="visually-hidden">Toggle navigation</span>
    </button>

{#if showMenu}
    <div
        class="position-fixed top-0 start-0 h-100 z-2"
        style="width: 280px; background: #fff; box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15);"
        in:fly={{ x: -320, duration: 200 }}
        out:fly={{ x: -320, duration: 150 }}
    >
        <div class="d-flex align-items-center justify-content-between p-3 border-bottom">
            <strong> </strong>
            <button class="btn btn-sm btn-outline-secondary" onclick={toggleMenu} aria-label="Close menu">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
        <nav class="list-group list-group-flush">
            <div class="list-group-item p-0">
                <button type="button" class="list-group-item list-group-item-action border-0 rounded-0 text-start" onclick={() => openEditor('architecture')}>AiR Architecture</button>
                {#if activeKey === 'architecture'}
                <div class="px-3 pb-3" transition:slide>
                    <label class="form-label mt-2" for="arch-hours">Accumulated hours used</label>
                    <input id="arch-hours" type="number" class="form-control" value={hours.architecture.used} min="0" step="1" oninput={(e) => setUsed('architecture', e.target.valueAsNumber ?? Number(e.target.value))} />
                    <div class="form-text">Total: {hours.architecture.total}h</div>
                </div>
                {/if}
            </div>
            <div class="list-group-item p-0">
                <button type="button" class="list-group-item list-group-item-action border-0 rounded-0 text-start" onclick={() => openEditor('delivery')}>AiR Delivery</button>
                {#if activeKey === 'delivery'}
                <div class="px-3 pb-3" transition:slide>
                    <label class="form-label mt-2" for="del-hours">Accumulated hours used</label>
                    <input id="del-hours" type="number" class="form-control" value={hours.delivery.used} min="0" step="1" oninput={(e) => setUsed('delivery', e.target.valueAsNumber ?? Number(e.target.value))} />
                    <div class="form-text">Total: {hours.delivery.total}h</div>
                </div>
                {/if}
            </div>
            <div class="list-group-item p-0">
                <button type="button" class="list-group-item list-group-item-action border-0 rounded-0 text-start" onclick={() => openEditor('worldport')}>WorldPort Transition</button>
                {#if activeKey === 'worldport'}
                <div class="px-3 pb-3" transition:slide>
                    <label class="form-label mt-2" for="wp-hours">Accumulated hours used</label>
                    <input id="wp-hours" type="number" class="form-control" value={hours.worldport.used} min="0" step="1" oninput={(e) => setUsed('worldport', e.target.valueAsNumber ?? Number(e.target.value))} />
                    <div class="form-text">Total: {hours.worldport.total}h</div>
                </div>
                {/if}
            </div>
        </nav>
    </div>
    <div
        class="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 z-1"
        role="button"
        tabindex="0"
        onclick={toggleMenu}
        onkeydown={(e) => { if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') toggleMenu(); }}
        transition:fade
    ></div>
{/if}

<div class="position-relative" style="z-index: 0;">
    {@render children?.()}
</div>

<!-- Editor overlay removed; inputs now live inside the menu -->
