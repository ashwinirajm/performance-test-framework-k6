import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    vus: 100,
    duration: '2m',
    thresholds: {
        http_req_duration: ['p(95)<800'],
        http_req_failed: ['rate<0.02']
    }
};

export default function () {
    const random = Math.random();
    let response;
    if (random < 0.7) {
        response = http.get(
            'https://jsonplaceholder.typicode.com/posts'
        );
    }

    else if (random < 0.9) {
        const id = Math.floor(Math.random() * 100) + 1;
        response = http.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
   }

   else {
        const payload = JSON.stringify({
            title: 'Performance Test',
            body: 'Mixed User Journey',
            userId: 1
        });
        response = http.post(
            'https://jsonplaceholder.typicode.com/posts',
            payload,
            {
                headers: {
                    'Content-Type':
                    'application/json'
                }
            }
        );
   }

   check (response, {
        'status valid':(
            r) => r.status >= 200 &&
                  r.status < 300,

            'response under 800ms':
             (r)=>r.timings.duration<800
   });

   sleep(1);

}