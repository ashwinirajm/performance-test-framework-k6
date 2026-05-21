import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 50,
    duration: '1m',
    thresholds: {
        http_req_duration: ['p(95)<500'],
        http_req_failed: ['rate<0.01']
    }
};

export default function() {
    const response = http.get(
        'https://jsonplaceholder.typicode.com/posts'
    );

    check(response, {
        'status is 200': (r) => r.status === 200,
        'response under 500ms': (r) => r.timings.duration < 500
    });

    sleep(1);
}