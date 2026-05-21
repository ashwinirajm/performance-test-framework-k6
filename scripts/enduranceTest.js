import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    vus: 50,
    duration: '2m', // keeping 2m instead of 30m for local run
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
        'status valid':
        (r) => r.status === 200
    });

    sleep(1);

}