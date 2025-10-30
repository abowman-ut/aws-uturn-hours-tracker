<script>
	const totalHours = 250;
	const usedHours = 86;
	const segments = 4;
	const segmentSize = totalHours / segments;
	const usedPercent = Math.round((usedHours / totalHours) * 1000) / 10;

	// AiR Architecture graph (100 total hours)
	const totalHoursArch = 100;
	const usedHoursArch = 24;
	const segmentsArch = 4;
	const segmentSizeArch = totalHoursArch / segmentsArch;
	const usedPercentArch = Math.round((usedHoursArch / totalHoursArch) * 1000) / 10;

	// WorldPort Transition graph (1200 total hours)
	const totalHoursWorld = 1200;
	const usedHoursWorld = 334;
	const segmentsWorld = 4;
	const segmentSizeWorld = totalHoursWorld / segmentsWorld;
	const usedPercentWorld = Math.round((usedHoursWorld / totalHoursWorld) * 1000) / 10;

	// Summary graph (AIT Uturn Hours) - stacked used hours across all three
	const totalHoursSummary = totalHoursArch + totalHours + totalHoursWorld;
	const usedHoursSummary = usedHoursArch + usedHours + usedHoursWorld;
	const usedPercentSummary = Math.round((usedHoursSummary / totalHoursSummary) * 1000) / 10;
	const pctArchOfSummary = Math.round((usedHoursArch / totalHoursSummary) * 1000) / 10;
	const pctDeliveryOfSummary = Math.round((usedHours / totalHoursSummary) * 1000) / 10;
	const pctWorldOfSummary = Math.round((usedHoursWorld / totalHoursSummary) * 1000) / 10;
</script>

<div class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-md-8">
			<div class="card">
				<div class="card-header">
					<h1 class="card-title mb-0">
						<i class="bi bi-bullseye text-danger me-2"></i>
						AWS Uturn Hours Tracker
					</h1>
				</div>
				<div class="card-body">
					<p class="card-text">
						Welcome to your SvelteKit application with Bootstrap integration.
					</p>
					
					<div class="mt-4">
						<h5>Features</h5>
						<div class="row">
							<div class="col-md-6">
								<div class="alert alert-info" role="alert">
									<i class="bi bi-info-circle me-2"></i>
									SvelteKit Framework
								</div>
							</div>
							<div class="col-md-6">
								<div class="alert alert-info" role="alert">
									<i class="bi bi-info-circle me-2"></i>
									Bootstrap UI Components
								</div>
							</div>
						</div>
						
						<div class="mt-3">
							<a href="https://svelte.dev/docs/kit" class="btn btn-outline-secondary me-2" target="_blank">
								<i class="bi bi-book me-1"></i> SvelteKit Docs
							</a>
							<a href="https://getbootstrap.com/docs/5.3/" class="btn btn-outline-secondary" target="_blank">
								<i class="bi bi-bootstrap me-1"></i> Bootstrap Docs
							</a>
						</div>

						<div class="mt-5">
							<h5 class="mb-2">AIT Uturn Hours</h5>
							<div class="text-muted small mb-2">
								<strong>{usedHoursSummary}</strong> of <strong>{totalHoursSummary}</strong> hours used ({usedPercentSummary}%)
							</div>
							<div class="progress" style="height: 24px;">
								<div class="progress-bar bg-info" role="progressbar" style={`width: ${pctArchOfSummary}%`} aria-label="AiR Architecture" aria-valuenow={pctArchOfSummary} aria-valuemin="0" aria-valuemax="100"></div>
								<div class="progress-bar bg-primary" role="progressbar" style={`width: ${pctDeliveryOfSummary}%`} aria-label="AiR Delivery" aria-valuenow={pctDeliveryOfSummary} aria-valuemin="0" aria-valuemax="100"></div>
								<div class="progress-bar bg-warning" role="progressbar" style={`width: ${pctWorldOfSummary}%`} aria-label="WorldPort Transition" aria-valuenow={pctWorldOfSummary} aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div class="d-flex gap-3 mt-2 text-muted small align-items-center">
								<span class="d-inline-flex align-items-center"><span class="badge bg-info me-1">&nbsp;</span>AiR Architecture ({usedHoursArch}h)</span>
								<span class="d-inline-flex align-items-center"><span class="badge bg-primary me-1">&nbsp;</span>AiR Delivery ({usedHours}h)</span>
								<span class="d-inline-flex align-items-center"><span class="badge bg-warning me-1">&nbsp;</span>WorldPort Transition ({usedHoursWorld}h)</span>
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
