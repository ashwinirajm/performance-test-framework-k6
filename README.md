# Performance Test Framework - K6

A K6-based performance testing framework designed to validate system reliability and scalability under different traffic conditions such as load, stress, spike, mixed user journeys, and endurance testing. The project includes SLA validation and CI/CD integration using GitHub Actions.

## Features

- Load Testing using K6
- Stress Testing to find system breaking point
- Spike Testing for sudden traffic bursts
- Mixed User Journey simulation
- Endurance (Soak) Testing
- SLA validation using thresholds

## CI/CD

Performance tests execute automatically using GitHub Actions whenever code is pushed.

Pipeline:

- Installs K6
- Executes all test scenarios
- Validates SLA thresholds
- Ensures no performance regression is introduced

## Performance Test Results Summary

| Test Type | P95 Response Time | Failure Rate | Evidence |
|------------|------------------|--------------|----------|
| Load Test | 200ms | 0.5% | [View](assets/load-test.png) |
| Stress Test | 510ms | 2.2% | [View](assets/stress-test.png) |
| Spike Test | 150ms | 0.7% | [View](assets/spike-test.png) |
| Mixed Journey | 286ms | 0.7% | [View](assets/mixed-test.png) |
| Endurance Test | 197ms | 1.21% | [View](assets/endurance-test.png) |

![Performance Summary](assets/)

## Tech Stack

- K6
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
