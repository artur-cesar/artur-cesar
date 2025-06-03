<script setup lang="ts">
import { ref } from 'vue'
import { Service } from '@/service'

const service = new Service()

const experiences = ref(service.getExperiences())

function formateDate(date: Date | null): string {
    if (!date) return 'Present'
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
</script>
<template>
    <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-xl font-bold mb-4">About Me</h2>
        <p class="text-gray-700 mb-5">
            With over 10 years of experience in software development, specialized in backend software development using Node.js and Python, while maintaining strong fullstack capabilities with Javascript frameworks like React and VueJS. I've built my career designing and delivering robust, scalable, and user-focused solutions across various domains.
        </p>
        <p class="text-gray-700 mb-5">
            Throughout my career, I’ve worked with a wide range of technologies, including Node.js, Python, PHP, and TypeScript, as well as frontend frameworks like React, Vue.js, and Angular. I’ve also gained hands-on experience with cloud platforms such as AWS, containerization with Docker, CI/CD pipelines, and a variety of databases and messaging systems. This diverse background has shaped my approach to building resilient, future-ready architectures aligned with market trends and evolving user needs.
        </p>

        <div class="text-gray-700 mb-5">
            Key Skills & Expertise:
            <ul class="list-disc pl-6 text-gray-700">
                <li>Backend Development – Node.js, Python, PHP</li>
                <li>Software Architecture – Microservices, RESTful APIs, Event-Driven Systems</li>
                <li>Frontend Development – React, VueJS, Angular, HTML, CSS</li>
                <li>Scalability & Performance – Optimization, Caching Strategies</li>
                <li>Infrastructure & DevOps – Docker, CI/CD Pipelines</li>
                <li>Messaging & Async Processing – RabbitMQ, SNS, SQS, Redis</li>
                <li>Testing & Code Quality – Unit Tests, Integration Tests (PHPUnit, Pytest, Jest)</li>
                <li>Databases – PostgreSQL, MySQL, DinamoDB, MongoDB, SQL Server</li>
                <li>Monitoring & Logging – Grafana, Data Dog, ELK Stack</li>
                <li>Cloud – AWS, Digital Ocean</li>
            </ul>
        </div>

        <div class="text-gray-700 my-5">
            Languages:
            <ul class="list-disc pl-6 text-gray-700">
                <li>Portuguese: Native</li>
                <li>English: B2+</li>
            </ul>
        </div>
        <div class="text-gray-700 my-5">
            Contact:
            <ul class="list-disc pl-6 text-gray-700">
                <li>Email: arturcesarmelo@gmail.com</li>
                <li>Phone/WhatsApp: +5582996177917</li>
            </ul>
        </div>
        <div class="text-gray-700 my-5">
            Keywords:
            <ul class="inline-flex text-gray-700 flex-wrap gap-2 items-center">
                <li>Python</li>
                <li>|</li>
                <li>NodeJS</li>
                <li>|</li>
                <li>PHP</li>
                <li>|</li>
                <li>AWS</li>
                <li>|</li>
                <li>RESTFul API</li>
                <li>|</li>
                <li>API</li>
                <li>|</li>
                <li>Docker</li>
                <li>|</li>
                <li>Terraform</li>
                <li>|</li>
                <li>Digital Ocean</li>
                <li>|</li>
                <li>HTML</li>
                <li>|</li>
                <li>CSS</li>
                <li>|</li>
                <li>Angular</li>
                <li>|</li>
                <li>VueJS</li>
                <li>|</li>
                <li>ReactJS</li>
            </ul>
        </div>

        <h2 class="text-xl font-bold mt-10 mb-6">Experience <span class="text-gray-700 font-thin">({{ experiences.length }})</span></h2>

        <div class="mb-6 pt-4 border-t border-gray-300" v-for="(experience, index) in experiences" :key="index">
            <div class="flex justify-between flex-wrap gap-2 w-full">
                <span class="text-gray-700 font-bold">{{experience.title}}
                    <span class="font-thin" v-if="experience.isCurrentPosition">(current)</span>
                </span>
                <p>
                    <span class="text-gray-700 mr-2">at {{ experience.employer }}</span>
                </p>
            </div>
            <p class="mt-2" v-html="experience.description"></p>
            <div class="my-5">
                <ul class="inline-flex  text-gray-700 flex-wrap gap-2 items-center" >
                    <li v-for="skill in experience.skills" :key="skill"> &bull; {{ skill }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
