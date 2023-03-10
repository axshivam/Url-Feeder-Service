const is_url = require('./utils/validate_url');

const fetchingData = require('./utils/fetch-details');


const { Kafka } = require("kafkajs");

async function consume() {
    const kafka = new Kafka({
        clientId: "url-setup-1",
        brokers: ["127.0.0.1:9092"],
    });

    const consumer = kafka.consumer({ groupId: "url-feed" });
    await consumer.connect();
    console.log("Consumer connected");

    await consumer.subscribe({
        topic: "url",
        fromBeginning: true,
    });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            // 1. topic
            // 2. partition
            // 3. message
            if(is_url(message.value.toString())) {
                const fetched_details = await fetchingData(message.value.toString());

                console.log('Fetched Details ==>> ', fetched_details);

                console.log(
                    `To Partition ${partition} -> message ${message.value.toString()} in ${topic}`
                );
            } else {
                console.log(`Invalid Url in ${topic}`);
            }
        },
    });
}

consume();