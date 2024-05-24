import Fastify from 'fastify';
import cors from '@fastify/cors';

const server = Fastify();
server.register(cors, {
    origin: '*',
    methods: ['POST', 'GET'],
});

interface Contact {
    name: string;
    email: string;
    phone: string;
}

let contacts: Contact[] = [];

server.post('/contact', async (request, reply) => {
    const { name, email, phone } = request.body as Contact;
    contacts.push({ name, email, phone });
    reply.send({ status: 'success', message: 'Dados recebidos com sucesso!' });
});

server.get('/contacts', async (request, reply) => {
    reply.send(contacts);
});

const start = async () => {
    try {
        await server.listen({ port: 8000 });
        console.log('Server is running on http://localhost:8000');
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();