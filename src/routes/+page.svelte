<script>
    import { hoursStore } from '$lib/hoursStore.js';

    $: hours = $hoursStore;

    // Derived values for each section
    $: totalHoursArch = hours.architecture.total;
    $: usedHoursArch = hours.architecture.used;
    $: segmentsArch = 4;
    $: segmentSizeArch = totalHoursArch / segmentsArch;
    $: usedPercentArch = Math.round((usedHoursArch / totalHoursArch) * 1000) / 10;

    $: totalHours = hours.delivery.total;
    $: usedHours = hours.delivery.used;
    $: segments = 4;
    $: segmentSize = totalHours / segments;
    $: usedPercent = Math.round((usedHours / totalHours) * 1000) / 10;

    $: totalHoursWorld = hours.worldport.total;
    $: usedHoursWorld = hours.worldport.used;
    $: segmentsWorld = 4;
    $: segmentSizeWorld = totalHoursWorld / segmentsWorld;
    $: usedPercentWorld = Math.round((usedHoursWorld / totalHoursWorld) * 1000) / 10;

    // Summary
    $: totalHoursSummary = totalHoursArch + totalHours + totalHoursWorld;
    $: usedHoursSummary = usedHoursArch + usedHours + usedHoursWorld;
    $: usedPercentSummary = Math.round((usedHoursSummary / totalHoursSummary) * 1000) / 10;
    // Use all accumulated (used) hours as denominator for the stacked mix
    $: mixDenominator = usedHoursSummary > 0 ? usedHoursSummary : 1;
    $: pctArchOfSummary = Math.round((usedHoursArch / mixDenominator) * 1000) / 10;
    $: pctDeliveryOfSummary = Math.round((usedHours / mixDenominator) * 1000) / 10;
    $: pctWorldOfSummary = Math.round((usedHoursWorld / mixDenominator) * 1000) / 10;
</script>

<div class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-md-8">
			<div class="card">
				<div class="card-header">
					<h1 class="card-title mb-0">
						🎯 AIT Monthly Hours
					</h1>
				</div>
				<div class="card-body">
					<!-- <p class="card-text">
						Welcome to your SvelteKit application with Bootstrap integration.
					</p> -->
					
					<div class="mt-4">
						<div class="mt-1">
							<h5 class="mb-2">Total Hours Mix</h5>
							<div class="text-muted small mb-2">
								<strong>{usedHoursSummary}</strong> hours used
							</div>
							<div class="progress" style="height: 24px;">
								<div class="progress-bar bg-info" role="progressbar" style={`width: ${pctArchOfSummary}%`} aria-label="AiR Architecture" aria-valuenow={pctArchOfSummary} aria-valuemin="0" aria-valuemax="100"></div>
								<div class="progress-bar bg-primary" role="progressbar" style={`width: ${pctDeliveryOfSummary}%`} aria-label="AiR Delivery" aria-valuenow={pctDeliveryOfSummary} aria-valuemin="0" aria-valuemax="100"></div>
								<div class="progress-bar bg-warning" role="progressbar" style={`width: ${pctWorldOfSummary}%`} aria-label="WorldPort Transition" aria-valuenow={pctWorldOfSummary} aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div class="d-flex gap-3 mt-2 text-muted small align-items-center">
								<span class="d-inline-flex align-items-center"><span class="badge bg-info me-1">&nbsp;</span>AiR Architecture</span>
								<span class="d-inline-flex align-items-center"><span class="badge bg-primary me-1">&nbsp;</span>AiR Delivery</span>
								<span class="d-inline-flex align-items-center"><span class="badge bg-warning me-1">&nbsp;</span>WorldPort Transition</span>
							</div>
						</div>

						<div class="mt-5">
							<h5 class="mb-2">AiR Architecture</h5>
							<div class="text-muted small mb-2">
								<strong>{usedHoursArch}</strong> of <strong>{totalHoursArch}</strong> hours used ({usedPercentArch}%)
							</div>
							<div class="progress" style="height: 24px;">
								<div class="progress-bar bg-info" role="progressbar" style={`width: ${usedPercentArch}%`} aria-valuenow={usedPercentArch} aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div class="d-flex justify-content-between align-items-center mt-1 text-muted small">
								<span>0</span>
								<span>{segmentSizeArch}</span>
								<span>{segmentSizeArch * 2}</span>
								<span>{segmentSizeArch * 3}</span>
								<span>{totalHoursArch}</span>
							</div>
						</div>

						<div class="mt-5">
							<h5 class="mb-2">AiR Delivery</h5>
							<div class="text-muted small mb-2">
								<strong>{usedHours}</strong> of <strong>{totalHours}</strong> hours used ({usedPercent}%)
							</div>
							<div class="progress" style="height: 24px;">
								<div class="progress-bar bg-primary" role="progressbar" style={`width: ${usedPercent}%`} aria-valuenow={usedPercent} aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div class="d-flex justify-content-between align-items-center mt-1 text-muted small">
								<span>0</span>
								<span>{segmentSize}</span>
								<span>{segmentSize * 2}</span>
								<span>{segmentSize * 3}</span>
								<span>{totalHours}</span>
							</div>
						</div>

						<div class="mt-5">
							<h5 class="mb-2">WorldPort Transition</h5>
							<div class="text-muted small mb-2">
								<strong>{usedHoursWorld}</strong> of <strong>{totalHoursWorld}</strong> hours used ({usedPercentWorld}%)
							</div>
							<div class="progress" style="height: 24px;">
								<div class="progress-bar bg-warning" role="progressbar" style={`width: ${usedPercentWorld}%`} aria-valuenow={usedPercentWorld} aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div class="d-flex justify-content-between align-items-center mt-1 text-muted small">
								<span>0</span>
								<span>{segmentSizeWorld}</span>
								<span>{segmentSizeWorld * 2}</span>
								<span>{segmentSizeWorld * 3}</span>
								<span>{totalHoursWorld}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
