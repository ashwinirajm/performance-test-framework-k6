import http from 'k6/http';

export const options = {
    stages: [
        { duration: '30s', target: 50 },
        { duration: '30s', target: 150 },
        { duration: '30s', target: 300 },
        { duration: '30s', target: 0 }
    ]
};

export default function () {
http.get(
    'https://jsonplaceholder.typicode.com/posts'
    );
}