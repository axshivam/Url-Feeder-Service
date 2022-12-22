console.log('Consumer....');


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

            console.log(
                `To Partition ${partition} -> message ${message.value.toString()} in ${topic}`
            );
        },
    });
}

consume();