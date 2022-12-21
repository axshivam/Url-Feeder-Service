console.log('Producer....');

const { Kafka } = require("kafkajs");

async function produce(requestUrl) {
    const kafka = new Kafka({
        clientId: "url-setup-1",
        brokers: ["127.0.0.1:9092"],
    });

    const producer = kafka.producer();
    await producer.connect();
    console.log("Producer connected");

    
    const producedData = await producer.send({
        topic: "url",
        messages: [
            {
                value: requestUrl,
                partition: 0,
            },
        ],
    });
    console.log(`Produced data ${JSON.stringify(producedData)}`);
}

module.exports = produce;