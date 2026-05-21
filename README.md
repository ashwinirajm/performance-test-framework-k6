# Performance Test Framework - k6

A k6-based performance testing framework designed to validate system reliability and scalability under different traffic conditions such as load, stress, spike, mixed user journeys, and endurance testing. The project includes SLA validation and CI/CD integration using GitHub Actions.

## Features

- Load Testing using k6
- Stress Testing to find system breaking point
- Spike Testing for sudden traffic bursts
- Mixed User Journey simulation
- Endurance (Soak) Testing
- SLA validation using thresholds

## CI/CD

Performance tests execute automatically using GitHub Actions whenever code is pushed.

Pipeline:

- Installs k6
- Executes all test scenarios
- Validates SLA thresholds
- Ensures no performance regression is introduced

## Performance Test Results Summary

| Test Type | P95 Response Time | Failure Rate | Evidence |
|------------|------------------|--------------|----------|
| Load Test | 14.19ms | 0.00% | [View](assets/load_test.png) |
| Stress Test | 29.41ms | 0.00% | [View](assets/stress_test.png) |
| Spike Test | 14.62ms | 0.00% | [View](assets/spike_test.png) |
| Mixed Journey | 15.92ms | 0.00% | [View](assets/mixedJourney_test.png) |
| Endurance Test | 14.28ms | 0.00% | [View](assets/endurance_test.png) |

> **Note:** All results are based on a mock API (jsonplaceholder.typicode.com). The objective of this project is to demonstrate a k6 performance testing framework, CI/CD integration, and SLA validation rather than testing production infrastructure.

## Tech Stack

- k6
- JavaScript
- GitHub Actions

## Project Structure

```
scripts/
loadLogin.js
stressSearch.js
spikeTraffic.js
mixedJourney.js
enduranceTest.js
```
