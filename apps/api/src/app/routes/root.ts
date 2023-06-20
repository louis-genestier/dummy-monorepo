import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get(
    '/random',
    async function (request: FastifyRequest, reply: FastifyReply) {
      const sentences = [
        'Hello World',
        'Hello from API',
        'Hello from API again',
        'Hello from Fastify',
      ];

      return {
        random: sentences[Math.floor(Math.random() * sentences.length)],
      };
    }
  );
}
