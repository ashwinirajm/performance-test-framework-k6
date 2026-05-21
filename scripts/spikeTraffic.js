import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '10s', target: 20 },
        { duration: '10s', target: 500 },
        { duration: '20s', target: 500 },
        { duration: '10s', target: 20 }
    ]
};

export default function () {
    http.get(
    'https://jsonplaceholder.typicode.com/posts'
    );

   sleep(1);
}