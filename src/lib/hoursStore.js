import { writable } from 'svelte/store';

export const hoursStore = writable({
    architecture: { total: 100, used: 24 },
    delivery: { total: 250, used: 86 },
    worldport: { total: 1200, used: 334 }
});

export function setUsed(projectKey, used) {
    hoursStore.update((s) => {
        const value = Math.max(0, Number.isFinite(used) ? used : 0);
        return { ...s, [projectKey]: { ...s[projectKey], used: value } };
    });
}

export function setTotals(totals) {
    hoursStore.update((s) => ({
        architecture: { total: totals.architecture ?? s.architecture.total, used: s.architecture.used },
        delivery: { total: totals.delivery ?? s.delivery.total, used: s.delivery.used },
        worldport: { total: totals.worldport ?? s.worldport.total, used: s.worldport.used }
    }));
}

