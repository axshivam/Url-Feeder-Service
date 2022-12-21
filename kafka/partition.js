const { Kafka } = require("kafkajs");

async function createPartition() {
    const kafka = new Kafka({
        clientId: "url-setup-1",
        brokers: ["127.0.0.1:9092"],
    });

    const admin = kafka.admin();
    await admin.connect();

    await admin.createTopics({
        topics: [
            {
                topic: "url",
                numPartitions: 3,
            },
        ],
    });
    console.log("3 Partitions created");
    await admin.disconnect();
}

createPartition();